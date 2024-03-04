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

const HttpCodeListItem = GObject.registerClass(
  {
    GTypeName: 'HttpCodeListItem',
    Signals: {
      'clicked': {
        param_types: [GObject.TYPE_STRING]
      },
    },
    Template: 'resource:///io/github/andrepg/httpcodes/gtk/http-code-list-item.ui',
    InternalChildren: ['fire_http_details'],
    Properties: {
      'target': GObject.ParamSpec.string(
        'target',
        'Button target',
        'Where to go when activate button',
        GObject.ParamFlags.READWRITE,
        ''
      )
    }
  }, class HttpCodeListItem extends Adw.ActionRow {
  constructor(constructProperties = {}) {
    super(constructProperties);

    this._fire_http_details.connect('clicked', () =>
      this.triggerItemClick(constructProperties.target));
  }

  triggerItemClick(targetPath) {
    this.emit('clicked', targetPath.toString())
  }
});

export default HttpCodeListItem;
