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
    explanation: "Indicates that you received more options to choose how you'll" +
      " get the wanted resource. These options can include file formats, extensions" +
      " and other resource related information."
  },
  {
    code: "301",
    title: "Moved Permanently",
    description: "This and all future requests should be redirect",
    explanation: "The request resource has been moved permanently. This and all" +
    " subsequent requests should be made to new endpoint returned by this code."
  },
  {
    code: "302",
    title: "Found (former Moved Temporarily)",
    description: "Indicates that your resource was move to another location",
    explanation: "Temporary redirect to another resource that do not change current URI." +
      " In other words, means that this address can be put online again in the future."
  },
  {
    code: "303",
    title: "See other",
    description: "You should make a GET request to another resource",
    explanation: "When you make a POST/PUT request to a resource, and the server don't want" +
    " to show you this specific resource, but instead redirects you to another location with" +
    " some special message, like <i>'See more info at...</i>'"
  },
  {
    code: "304",
    title: "Not Modified",
    description: "The resource you request was not modified since last request",
    explanation: "If you made a request with <tt>If-Modified-Since</tt> or" +
    " <tt>If-None-Match</tt> and this data was not modified since then, you" +
    " will receive this Status Code, indicating that no action should be taken."
  },
  {
    code: "305",
    title: "Use Proxy",
    description: "This and subsequent requests should use proxy",
    explanation: "You tried to access a resource that is behind a proxy and must be used" +
    " to access its content. This and subsequent requests must be made by a proxy. For security" +
    " reasons this code is not being largely used and respected for some browsers."
  },
  {
    code: "306",
    title: "Switch Proxy (deprecated)",
    description: "Originally meant that you should issue your requests through a proxy",
    explanation: "On previous RFC versions this code was defined and now it's reserved."
  },
  {
    code: "307",
    title: "Temporary redirect",
    description: "You should issue the exact same request to another URI",
    explanation: "Server is telling you that this request is valid, but temporarily" +
    " allocated in another location. This code also indicates that you MUST NOT change" +
    " the method used to make this request."
  },
  {
    code: "308",
    title: "Permanent Redirect",
    description: "This and all future requests should be redirect (for same HTTP methods)",
    explanation: "A very young status, indicates that this and future resources should be found" +
    " at another location, and this redirection can be cached, since it's permanent."
  },
];
