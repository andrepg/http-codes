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
import HttpCodesIndexPageHandler from './pages/httpCodesIndexPage.js';

export const HttpCodesWindow = GObject.registerClass({
  GTypeName: 'HttpCodesWindow',
  Template: 'resource:///io/github/andrepg/httpcodes/window.ui',
  InternalChildren: ['navigation_view'],
}, class HttpCodesWindow extends Adw.ApplicationWindow {

  constructor(application) {
    super({ application });
    this.buildThisPage();
  }

  buildThisPage() {
    // This is really necessary? NO, but I wan't my code "pretty" and legible
    var thisPage;
    thisPage = HttpCodesIndexPageHandler.buildPage(this._navigation_view);
    thisPage = HttpCodesIndexPageHandler.feedPage(HttpCodesIndex, thisPage)
    this._navigation_view.add(thisPage)
  }

});

