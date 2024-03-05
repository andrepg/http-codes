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

export const HttpCodes50x = [
  {
    code: "500",
    title: "Internal Server Error",
    description: "Something very generic happened when processing your request",
    explanation: ""
  },
  {
    code: "501",
    title: "Not implemented",
    description: "Either server does not recognize your request or unable to fulfill it",
    explanation: ""
  },
  {
    code: "502",
    title: "Bad Gateway",
    description: "Something between your request and the server is failing",
    explanation: ""
  },
  {
    code: "503",
    title: "Service Unavailable",
    description: "The server is down. Could be maintenance or you can cry",
    explanation: ""
  },
  {
    code: "504",
    title: "Gateway Timeout",
    description: "Someone between your request and the server has timed out",
    explanation: ""
  },
  {
    code: "505",
    title: "HTTP Version Not Supported",
    description: "You used a HTTP version that server can not handle",
    explanation: ""
  },
  {
    code: "506",
    title: "Variant Also Negotiates",
    description: "A circular reference happened in your request",
    explanation: ""
  },
  {
    code: "507",
    title: "Insufficient Storage",
    description: "Your disk has blown up! Get more storage space",
    explanation: ""
  },
  {
    code: "508",
    title: "Loop Detected",
    description: "Server detected an infinite loop and stopped your request",
    explanation: ""
  },
  {
    code: "510",
    title: "Not Extended",
    description: "Your need to make more requests to extend and fulfill this one",
    explanation: ""
  },
  {
    code: "511",
    title: "Network Authentication Required",
    description: "Your request need to authenticate first (such as in Hotspots WiFi)",
    explanation: ""
  },
];

