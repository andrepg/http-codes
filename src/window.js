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
import StatusCodes from './http-status-codes/StatusCodeDataset.js';

export const HttpCodesWindow = GObject.registerClass({
    GTypeName: 'HttpCodesWindow',
    Template: 'resource:///io/github/andrepg/httpcodes/window.ui',
    InternalChildren: ['main_http_code_list'],
}, class HttpCodesWindow extends Adw.ApplicationWindow {
    constructor(application) {
        super({ application });
        this.setupStatusCodeWindow()
    }

    setupStatusCodeWindow() {
      var httpList = this._main_http_code_list

      this.statusCodeCategories().forEach(function (status) {
        var row = this.createStatusCodeRow(status.code, status.description)
        httpList.append(row)
      }.bind(this));
    }

    createStatusCodeRow(rowTitle, rowDescription) {
      var row = new Adw.ActionRow({title: rowTitle, subtitle: rowDescription});
      row.add_suffix(new Gtk.Image({iconName: 'right-symbolic'}));
      return row;
    }

    statusCodeCategories() {
      return [
        { code: '20x', description: 'Codes related with sucessfull requests', redirect: '' },
        { code: '30x', description: 'Codes related with redirection responses', redirect: '' },
        { code: '40x', description: 'Codes related wrong requests or validations', redirect: '' },
        { code: '50x', description: 'Codes related with server errors and downsides', redirect: '' },
      ];
    }
});

