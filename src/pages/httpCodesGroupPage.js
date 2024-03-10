import SingleNavigationPage from "../components/singleNavigationPage.js";

const HttpCodesGroupPageHandler = {
  buildPage: function() {
    var page = new SingleNavigationPage();

    page.set_title("Choose a HTTP Status code")

    return page;
  },

  feedPage: function(httpCodes, page) {
    console.log(httpCodes, page)
    return page;
  },

  handleItemClick: function (_, target) {
    // TODO Here we'll add our handler to open HTTP Group Index
    console.log(target)
  }
}

export default HttpCodesGroupPageHandler
