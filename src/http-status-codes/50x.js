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
    explanation: "The server is facing some generic unexpectecd condition that is " +
      "preventing him to process your request. <b>All you can do is wait.</b>"
  },
  {
    code: "501",
    title: "Not implemented",
    description: "Either server does not recognize your request or unable to fulfill it",
    explanation: "Indicates that the server does not have neither capacity or abilities to " +
      "answer properly your request. There is nothing you can do to fix this on client side."
  },
  {
    code: "502",
    title: "Bad Gateway",
    description: "Something between your request and the server is failing",
    explanation: "This server is acting as intermediate and target server can not " +
      "answer your request properly. You should try again later."
  },
  {
    code: "503",
    title: "Service Unavailable",
    description: "The server is down. Could be maintenance or you can cry",
    explanation: "Indicates that server went down processing your request. Either can " +
      "be overloaded or under maintenance. This response can have a <tt>Retry-After</tt> " +
      "telling you when try again."
  },
  {
    code: "504",
    title: "Gateway Timeout",
    description: "Someone between your request and the server has timed out",
    explanation: "It took too much to server to process your request. Many distinct " +
      "elements can affect and cause this error, such as big requests, network errors and others."
  },
  {
    code: "505",
    title: "HTTP Version Not Supported",
    description: "You used a HTTP version that server can not handle",
    explanation: "The HTTP version that you using is not supported by the server. " +
      "You can try a upgrade or another library to do your request."
  },
  {
    code: "506",
    title: "Variant Also Negotiates",
    description: "A circular reference happened in your request",
    explanation: "This resource acts with <tt>Transparent Negotiation</tt> and can " +
      "not process your request itself."
  },
  {
    code: "507",
    title: "Insufficient Storage",
    description: "Your disk has blown up! Get more storage space",
    explanation: "The WebDAV server handling your request went out of storage space. " +
      "You should get more space and try again. "
  },
  {
    code: "508",
    title: "Loop Detected",
    description: "Server detected an infinite loop and stopped your request",
    explanation: "Your whole operation failed because WebDAV server found a " +
      "infinite loop when receiving a <tt>Depth: Infinity</tt>."
  },
  {
    code: "510",
    title: "Not Extended",
    description: "Your need to make more requests to extend and fulfill this one",
    explanation: "There are some extensions required to achieve this processing. " +
      "If you think you can fulfill these requirements, you may issue a request again."
  },
  {
    code: "511",
    title: "Network Authentication Required",
    description: "Your request need to authenticate first (such as in Hotspots WiFi)",
    explanation: "When you're behind some kind of public proxy (such as Captive Portals) " +
      "that requires authentication, this response can be sent before further requests."
  },
];

