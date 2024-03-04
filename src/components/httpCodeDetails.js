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
import Gtk from "gi://Gtk";
import Adw from 'gi://Adw';

const HttpCodeDetails = GObject.registerClass(
  {
    GTypeName: 'HttpCodeDetails',
    Properties: {
      'explanation': GObject.ParamSpec.string(
        'explanation',
        'explanation',
        '',
        GObject.ParamFlags.READWRITE,
        ''
      )
    },
  }, class HttpCodeDetails extends Adw.ExpanderRow {
  constructor(constructProperties = {}) {
    super(constructProperties);

    this.createExplanationLabel(constructProperties.explanation)
  }

  createExplanationLabel(textLabel) {
    this.add_row(new Gtk.Label({
      label: textLabel,
      margin_top: 15,
      margin_bottom: 15,
      margin_start: 15,
      margin_end: 15,
      wrap: true
    }))
  }
});

export default HttpCodeDetails;
