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

export const HttpCodes40x = [
  {
    code: "400",
    title: "Bad Request",
    description: "Server can not process this due to a malformed request",
    explanation: ""
  },
  {
    code: "401",
    title: "Unauthorized",
    description: "You need to be authenticated to access this specific resource",
    explanation: ""
  },
  {
    code: "402",
    title: "Payment Required (future use)",
    description: "Made to process digital transactions, or indicate a paywall on HTTP",
    explanation: ""
  },
  {
    code: "403",
    title: "Forbidden",
    description: "Your request is correct, but this action was forbidden to be made on server",
    explanation: ""
  },
  {
    code: "404",
    title: "Not Found",
    description: "You made a request and server was not able to found the resource",
    explanation: ""
  },
  {
    code: "405",
    title: "Method Not Allowed",
    description: "The request made is valid, except for your HTTP method (GET, POST, etc.)",
    explanation: ""
  },
  {
    code: "406",
    title: "Not Acceptable",
    description: "The resource can respond you only with a media type that you does not accept",
    explanation: ""
  },
  {
    code: "407",
    title: "Proxy Authentication Required",
    description: "The client must authenticate through a proxy before doing this request",
    explanation: ""
  },
  {
    code: "408",
    title: "Request Timeout",
    description: "Your request has timed out. The server has dropped and you should try again",
    explanation: ""
  },
  {
    code: "409",
    title: "Conflict",
    description: "The change request will incurr in a conflict with already requested change",
    explanation: ""
  },
  {
    code: "410",
    title: "Gone",
    description: "Your request simply is no longer available. Try it again",
    explanation: ""
  },
  {
    code: "411",
    title: "Length Required",
    description: "Your request does not fit minimum length requirements from server",
    explanation: ""
  },
  {
    code: "412",
    title: "Precondition Failed",
    description: "The server does not meed preconditions requested by client",
    explanation: ""
  },
  {
    code: "413",
    title: "Payload Too Large (former Request Entity Too Large)",
    description: "The request is larger than server can process",
    explanation: ""
  },
  {
    code: "414",
    title: "URI Too Long",
    description: "The URI requested is longer than server can process",
    explanation: ""
  },
  {
    code: "415",
    title: "Unsupported Media Type",
    description: "The request has a media type which server can not process",
    explanation: ""
  },
  {
    code: "416",
    title: "Range Not Satisfiable",
    description: "Your made a partial request that can not be delivered",
    explanation: ""
  },
  {
    code: "417",
    title: "Expectation Failed",
    description: "The server can not meet expectations of your request",
    explanation: ""
  },
  {
    code: "418",
    title: "I'm a Teapot!",
    description: "An easter egg implemented in 1998. Sometimes used as teapot",
    explanation: ""
  },
  {
    code: "421",
    title: "Misdirect Request",
    description: "The server you hit is not able to produce a response",
    explanation: ""
  },
  {
    code: "422",
    title: "Unprocessable Content",
    description: "Your request was correct, but something failed processing it",
    explanation: ""
  },
  {
    code: "423",
    title: "Locked",
    description: "The resource requested is locked",
    explanation: ""
  },
  {
    code: "424",
    title: "Failed Dependency",
    description: "The request has another dependency that failed",
    explanation: ""
  },
  {
    code: "425",
    title: "Too Early",
    description: "You are too early. Try this request again later",
    explanation: ""
  },
  {
    code: "426",
    title: "Upgrade Required",
    description: "Your request needs an upgrade to be processed",
    explanation: ""
  },
  {
    code: "428",
    title: "Precondition Required",
    description: "Your request does not meet some server preconditions",
    explanation: ""
  },
  {
    code: "429",
    title: "Too Many Requests",
    description: "You have made A LOT of requests. Be cool and try again later",
    explanation: ""
  },
  {
    code: "431",
    title: "Request Header Fields Too Large",
    description: "Your headers are too large. The server is crying",
    explanation: ""
  },
  {
    code: "451",
    title: "Unavailable for Legal Reasons",
    description: "Someone took down this request for legal reasons",
    explanation: ""
  },
];

