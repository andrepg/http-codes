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

import { HttpCodes20x } from "./20x.js";
import { HttpCodes30x } from "./30x.js";
import { HttpCodes40x } from "./40x.js";

export const HttpCodesIndex = [
  {
    httpCode: '20x',
    description: 'Codes related with successful requests',
    details: HttpCodes20x,
  },
  {
    httpCode: '30x',
    description: 'Codes related with redirection responses',
    details: HttpCodes30x,
  },
  {
    httpCode: '40x',
    description: 'Codes related wrong requests or validations',
    details: HttpCodes40x,
  },
  {
    httpCode: '50x',
    description: 'Codes related with server errors and downsides',
    details: [],
  },
]

