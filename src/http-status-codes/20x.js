export const HttpCodes20x = [
  {
    title: "200 - OK",
    description: "The server has accepted and processed successful your request.",
    explanation:
      "When the server has received and processed correctly your request" +
      " it will respond with a 200 Status Code. \n\n" +
      "If you made a GET could mean that your request information it" +
      " is in body. And if a POST was made could means that your data was accepted correctly."
  },

  {
    title: "201 - Created",
    description: "A request has been accepted and a resource was created.",
    explanation: "If you are trying to POST a resource to a server, it will" +
      " answer you with this code when successfully created a new resource.",
  },

  {
    title: "202 - Accepted",
    description: "Request accepted for processing, but not completed yet.",
    explanation: "You made a request to the server that was accepted, but" +
     " not completed yet. You should check on later for more status.",
  },

  {
    title: "203 - Non-Authoritative Information",
    description: "Received modified version by proxy",
    explanation: "The server answering your request received a 200 - OK from" +
      " the original server, but it's giving you a modified version of the" +
      " original response."
  },

  {
    title: "204 - No Content",
    description: "The server response is empty",
    explanation: "Your request was made and processed successfully." +
     " However, the server did not expect to send you anything. Therefore," +
     " you'll receive a NO CONTENT response.",
  },

  {
    title: "205 - Reset Content",
    description: "",
    explanation: ""
  },
  { title: "206", description: "", explanation: "" },
  { title: "207", description: "", explanation: "" },
  { title: "208", description: "", explanation: "" },
  { title: "226", description: "", explanation: "" },
];
