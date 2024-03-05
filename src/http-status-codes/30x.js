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

export const HttpCodes30x = [
  {
    code: "300",
    title: "Multiple Choices",
    description: "Server has given multiple choices to request resource",
    explanation: ""
  },
  {
    code: "301",
    title: "Moved Permanently",
    description: "This and all future requests should be redirect",
    explanation: ""
  },
  {
    code: "302",
    title: "Found (former Moved Temporarily)",
    description: "Indicates that your resource was move to another location",
    explanation: ""
  },
  {
    code: "303",
    title: "See other",
    description: "You should make a GET request to another resource",
    explanation: ""
  },
  {
    code: "304",
    title: "Not Modified",
    description: "The resource you request was not modified since last request",
    explanation: ""
  },
  {
    code: "305",
    title: "Use Proxy",
    description: "This and subsequent requests should use proxy",
    explanation: ""
  },
  {
    code: "306",
    title: "Switch Proxy (deprecated)",
    description: "Originally meant that you should issue your requests through a proxy",
    explanation: ""
  },
  {
    code: "307",
    title: "Temporary redirect",
    description: "You should issue the exact same request to another URI",
    explanation: ""
  },
  {
    code: "308",
    title: "Permanent Redirect",
    description: "This and all future requests should be redirect (for same HTTP methods)",
    explanation: ""
  },
];
