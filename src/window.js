/* window.js
 *
 * Copyright 2024 André Paul Grandsire
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import GObject from 'gi://GObject';
import Adw from 'gi://Adw';
import { HttpCodesIndex } from './http-status-codes/index.js';
import HttpCodeListItem from './components/HttpCodeListItem.js';
import HttpCodeDetails from './components/HttpCodeDetails.js';
import SingleNavigationPage from './components/singleNavigationPage.js';

export const HttpCodesWindow = GObject.registerClass({
  GTypeName: 'HttpCodesWindow',
  Template: 'resource:///io/github/andrepg/httpcodes/window.ui',
  InternalChildren: ['navigation_view'],
}, class HttpCodesWindow extends Adw.ApplicationWindow {
  constructor(application) {
    super({ application });

    this.createMainWindow();
  }

  createMainWindow() {
    var page = new SingleNavigationPage();
    page.set_title("Choose a HTTP Status category");
    this._navigation_view.add(page)
  }

  feedHttpCodeList() {
    HttpCodesIndex.forEach(
      (code) => this._main_http_code_list.append(
        this.createStatusCodeRow(code.httpCode, code.description)
      )
    );
  }

  createStatusCodeRow(httpCode, description) {
    var httpItem = new HttpCodeListItem({
      'title': httpCode,
      'subtitle': description,
      'target': httpCode
    });
    httpItem.connect('open_http_item', this.showHttpCodeDetails.bind(this));
    return httpItem;
  }

  showHttpCodeDetails(_, target) {
    // Set page title
    this._page_http_code_details.set_title(target + " Status Codes")

    // Add our codes to sublist
    this._list_http_code_details.remove_all();
    var httpItems = HttpCodesIndex.find((item) => item.httpCode == target);
    httpItems.details.forEach((httpItem) => {
      this._list_http_code_details.append(
        new HttpCodeDetails({
          title: httpItem.title,
          subtitle: httpItem.description,
          explanation: httpItem.explanation
        })
      )
    });

    // Push page to navigation after populate
    this._navigation_view.push(this._page_http_code_details)
  }
});

