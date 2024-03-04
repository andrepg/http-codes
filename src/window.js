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
import Gtk from 'gi://Gtk';
import Adw from 'gi://Adw';
import { HttpCodesIndex } from './http-status-codes/index.js';
import HttpCodeListItem from './components/httpCodeListItem.js'
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

  /**
  * creates the first main page to our application.
  * this page should display a row with HTTP codes that
  * leads our user to the next screen, where he can learn
  * more about each category (20x, 30x, 40x, etc.)
  */
  createMainWindow() {
    this.httpCodeIndexPage = new SingleNavigationPage();
    this.httpCodeIndexPage.set_title("Choose a HTTP Status category");
    this._navigation_view.add(this.httpCodeIndexPage)
  }


  /**
  * creates our second page, to show any category selected by
  * our user on first page. here it's possible to learn more about
  * each HTTP code from the category selected before
  */
  createHttpCodeDetailsWindow() {
    this.httpCodeDetailsPage = new SingleNavigationPage();
    this.httpCodeDetailsPage.set_title("Choose a HTTP Status");
    this._navigation_view.add(this.httpCodeDetailsPage)
  }

  /**
  * this function feeds our first page with each HTTP server category
  * it's here where we should feed our list view to show each code
  * also, it connects "clicked" event to open any category
  */
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
      });

      this.httpCodeIndexPage.add_list_item(row);
    });
  }

  /**
  * TODO change this functions to build accordingly with components/httpCodeDetails.js
  * feed the second page, that shows details about each HTTP code category
  * here we'll show the respective Codes, Titles, Description and any
  * other relevant information to help our user to understand better
  */
  feedHttpCodeDetailsWindow(target) {
    this.httpCodeDetailsPage.clear_list();
    var httpCodes = HttpCodesIndex.find(element => element.httpCode == target);

    httpCodes.details.forEach(element => {
      const rowProperties = {
        title: element.title,
        subtitle: element.description,
        target: element.code.toString()
      };

      var row = new HttpCodeListItem(rowProperties);

      row.add_prefix(this.createHttpCodeLabel(element.code))
      row.connect('clicked', (caller, target) => console.log(caller, target));

      this.httpCodeDetailsPage.set_label(target)
      this.httpCodeDetailsPage.add_list_item(row);
    });
  }

  /**
  * TODO change this functions to build accordingly with components/httpCodeDetails.js
  * creates our HTTP code label to display on second page, allowing us to
  * build line with a reliable interface for each HTTP code inside categories
  */
  createHttpCodeLabel(code) {
    var label = new Gtk.Button({
      margin_top: 5,
      margin_bottom: 5,
    });
    label.set_child(new Gtk.Label({ label: code }));
    return label;
  }
});

