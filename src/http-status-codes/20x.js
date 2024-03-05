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

export const HttpCodes20x = [
  {
    code: "200",
    title: "OK",
    description: "The server has accepted and processed successful your request.",
    explanation:
      "When the server has received and processed correctly your request" +
      " it will respond with a 200 Status Code. \n\n" +
      "If you made a GET could mean that your request information it" +
      " is in body. And if a POST was made could means that your data was accepted correctly."
  },
  {
    code: "201",
    title: "Created",
    description: "A request has been accepted and a resource was created.",
    explanation: "If you are trying to POST a resource to a server, it will" +
      " answer you with this code when successfully created a new resource.",
  },
  {
    code: "202",
    title: "Accepted",
    description: "Request accepted for processing, but not completed yet.",
    explanation: "You made a request to the server that was accepted, but" +
      " not completed yet. You should check on later for more status.",
  },
  {
    code: "203",
    title: "Non-Authoritative Information",
    description: "Received modified version by proxy",
    explanation: "The server answering your request received a 200 - OK from" +
      " the original server, but it's giving you a modified version of the" +
      " original response."
  },
  {
    code: "204",
    title: "No Content",
    description: "The server response is empty",
    explanation: "Your request was made and processed successfully." +
      " However, the server did not expect to send you anything. Therefore," +
      " you'll receive a NO CONTENT response.",
  },
  {
    code: "205",
    title: "Reset Content",
    description: "Asks for reset content after success",
    explanation: "You made a request that went OK. The server don't want to" +
      " send any response body and it's requesting you to clear any content."
  },
  {
    code: "206",
    title: "Partial Content",
    description: "Server is delivering only part of requested resource",
    explanation: ""
  },
  {
    code: "207",
    title: "Multi-Status",
    description: "When using WebDav, body can contain multiple response codes",
    explanation: ""
  },
  {
    code: "208",
    title: "Already Reported",
    description: "This DAV resource has already been enumerated and not being included again",
    explanation: ""
  },
  {
    code: "226",
    title: "IM Used",
    description: "Your request was processed and your response contains one or more manipulations",
    explanation: ""
  },
];
