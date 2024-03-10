import HttpCodeListItem from '../components/httpCodeListItem.js'
import SingleNavigationPage from "../components/singleNavigationPage.js";
import HttpCodesGroupPageHandler from './httpCodesGroupPage.js';

const HttpCodesIndexPageHandler = {
  buildPage: function(navigation_view) {
    this._navigation_view = navigation_view;

    var page = new SingleNavigationPage();
    page.set_title("Choose a HTTP Status category");
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
      row.connect('clicked', this.handleItemClick.bind(this))
      page.add_list_item(row);
    })

    return page;
  },

  /**
  * This function should be able to create a new page and append it to our
  * navigation. This way we can create a brand new interface without interfere
  * in our already mounted page
  */
  handleItemClick: function(_, target) {
    var page;

    page = HttpCodesGroupPageHandler.buildPage(target);
    page = HttpCodesGroupPageHandler.feedPage(page, target);

    this._navigation_view.add(page)
    this._navigation_view.push(page)
  }
}

export default HttpCodesIndexPageHandler
