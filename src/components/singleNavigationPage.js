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

const SingleNavigationPage = GObject.registerClass(
  {
    GTypeName: 'SingleNavigationPage',
    Template: 'resource:///io/github/andrepg/httpcodes/gtk/single-navigation-page.ui',
    Properties: {
      'items': GObject.ParamSpec.jsobject(
        'items',
        'items',
        '',
        GObject.ParamFlags.READWRITE
      )
    },
    InternalChildren: ['main_list', 'main_label'],
  }, class SingleNavigationPage extends Adw.NavigationPage {
  constructor(constructProperties = {}) {
    super(constructProperties);
  }

  add_list_item(param) {
    this._main_list.append(param)
  }

  clear_list() {
    this._main_list.remove_all()
  }

  set_label(label) {
    this._main_label.set_label(label)
  }
});

export default SingleNavigationPage;
