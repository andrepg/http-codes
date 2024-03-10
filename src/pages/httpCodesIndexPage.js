import HttpCodeListItem from '../components/httpCodeListItem.js'
import SingleNavigationPage from "../components/singleNavigationPage.js";

const HttpCodesIndexPageHandler = {
  buildPage: function() {
    var page = new SingleNavigationPage();

    page.set_title("Choose a HTTP Status category")

    return page;
  },

  feedPage: function(httpCodes, page) {
    httpCodes.forEach(code => {
      const rowProperties = {
        title: code.httpCode,
        subtitle: code.description,
        target: code.httpCode,
      }

      var row = new HttpCodeListItem(rowProperties);
      row.connect('clicked', this.handleItemClick)
      page.add_list_item(row);
    })

    return page;
  },

  handleItemClick: function (_, target) {
    // TODO Here we'll add our handler to open HTTP Group Index
    console.log(target)
  }
}

export default HttpCodesIndexPageHandler
