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
import HttpCodeListItem from './components/HttpCodeListItem.js'
import SingleNavigationPage from './components/singleNavigationPage.js';

export const HttpCodesWindow = GObject.registerClass({
  GTypeName: 'HttpCodesWindow',
  Template: 'resource:///io/github/andrepg/httpcodes/window.ui',
  InternalChildren: ['navigation_view'],
}, class HttpCodesWindow extends Adw.ApplicationWindow {
  constructor(application) {
    super({ application });

    this.createMainWindow();
    this.createHttpCodeDetailsWindow();
    this.feedMainWindowContent();
  }

  createMainWindow() {
    this.httpCodeIndexPage = new SingleNavigationPage();
    this.httpCodeIndexPage.set_title("Choose a HTTP Status category");
    this._navigation_view.add(this.httpCodeIndexPage)
  }

  createHttpCodeDetailsWindow() {
    this.httpCodeDetailsPage = new SingleNavigationPage();
    this.httpCodeDetailsPage.set_title("Choose a HTTP Status");
    this._navigation_view.add(this.httpCodeDetailsPage)
  }

  feedMainWindowContent() {
    HttpCodesIndex.forEach(code => {
      var row = new HttpCodeListItem({
        title: code.httpCode,
        subtitle: code.description,
        target: code.httpCode,
      });
      row.connect('clicked', (_, target) => {
        this.feedHttpCodeDetailsWindow(target);
        this._navigation_view.push(this.httpCodeDetailsPage)
      })
      this.httpCodeIndexPage.add_list_item(row);
    });
  }

  feedHttpCodeDetailsWindow(target) {
    this.httpCodeDetailsPage.clear_list();
    var httpCodes = HttpCodesIndex.find(element => element.httpCode == target);

    httpCodes.details.forEach(element => {
      var row = new Adw.ActionRow({
        title: element.title,
        subtitle: element.description
      });

      this.httpCodeDetailsPage.set_label(target)
      this.httpCodeDetailsPage.add_list_item(row);
    });
  }
});

