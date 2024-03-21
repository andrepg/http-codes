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
    explanation: "You should review how your request are formed and if have some " +
      " syntax problem, is invalid and something else."
  },
  {
    code: "401",
    title: "Unauthorized",
    description: "You need to be authenticated to access this specific resource",
    explanation: "An authentication is required before you access this resource. " +
      "You should try login or request correct credentials to someone."
  },
  {
    code: "402",
    title: "Payment Required (future use)",
    description: "Made to process digital transactions, or indicate a paywall on HTTP",
    explanation: "Not standardized response code, can be used to indicated that your request " +
      "it's behind some kind of paywall or request digital payment to move on."
  },
  {
    code: "403",
    title: "Forbidden",
    description: "Your request is correct, but this action was forbidden to be made on server",
    explanation: "Even if you are correctly authenticated, something on server forbids you to " +
      "finish this action. Access is related with some application logic."
  },
  {
    code: "404",
    title: "Not Found",
    description: "You made a request and server was not able to found the resource",
    explanation: "Whatever you were looking for it's not available anymore. There's no " +
      "indication that content was moved (as 302) nor authentication problems. " +
      "<b>Resource does not exists.</b>"
  },
  {
    code: "405",
    title: "Method Not Allowed",
    description: "The request made is valid, except for your HTTP method",
    explanation: "This resource really existis. But you are using a wrong method (GET, POST, etc.). " +
      "Change it and try again to see if it works."
  },
  {
    code: "406",
    title: "Not Acceptable",
    description: "The resource can respond you only with a media type that you does not accept",
    explanation: "In your header you request as a response some mime-type that server can not " +
      "generate. Something related with Accept or Accept-*."
  },
  {
    code: "407",
    title: "Proxy Authentication Required",
    description: "The client must authenticate through a proxy before doing this request",
    explanation: "Your request must be made through an authenticated proxy. So you must " +
      "issue a request to this server first before succeed in the current request."
  },
  {
    code: "408",
    title: "Request Timeout",
    description: "Your request has timed out. The server has dropped and you should try again",
    explanation: "This response indicates that you made no request in a defined interval and " +
      "the server will terminate your connection for now."
  },
  {
    code: "409",
    title: "Conflict",
    description: "The change request will incurr in a conflict with already requested change",
    explanation: "You try to submit some type of data that will conflict with what the server " +
      "already have online. This occurs, for example, when you do an upload with a lower version of the file."
  },
  {
    code: "410",
    title: "Gone",
    description: "Your request simply is no longer available. Try it again",
    explanation: "The access to this resource is no longer available. This can be " +
      "a permanent condition. If it's temporary, server should return 404."
  },
  {
    code: "411",
    title: "Length Required",
    description: "Your request does not fit minimum length requirements from server",
    explanation: "The server refuses to accept your request without a <tt>Content-Length<tt> " +
      "header before you make this request again."
  },
  {
    code: "412",
    title: "Precondition Failed",
    description: "The server does not meed preconditions requested by client",
    explanation: "If your request does not met a condition, such as a " +
      "<tt>If-Unmodified-Since</tt> header. In this case not was modified and you " +
      "should correct your request before issue again."
  },
  {
    code: "413",
    title: "Payload Too Large (former Request Entity Too Large)",
    description: "The request is larger than server can process",
    explanation: "Most frequent in submissions, means that your request exceeds maximum " +
      "allowed upload size. You should split or lower you request size."
  },
  {
    code: "414",
    title: "URI Too Long",
    description: "The URI requested is longer than server can process",
    explanation: "You did a GET request with an URI too long to process in the server. " +
      "Maybe was meant to be a POST or you should use a short URI."
  },
  {
    code: "415",
    title: "Unsupported Media Type",
    description: "The request has a media type which server can not process",
    explanation: "You made a request with invalid <tt>Content-Type</tt> header " +
      "and, therefore your request can not be processed."
  },
  {
    code: "416",
    title: "Range Not Satisfiable",
    description: "Your made a partial request that can not be delivered",
    explanation: "This request contains a partial solicitation that could not be " +
      "processed. Either because its sintatically wrong or because our <tt>Range</tt> " +
      "is out of scope."
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

