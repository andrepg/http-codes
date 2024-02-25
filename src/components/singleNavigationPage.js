import GObject from 'gi://GObject';
import Gtk from "gi://Gtk";
import Adw from 'gi://Adw';

const SingleNavigationPage = GObject.registerClass(
  {
    GTypeName: 'SingleNavigationPage',
    Template: 'resource:///io/github/andrepg/httpcodes/gtk/single-navigation-page.ui',
  }, class SingleNavigationPage extends Adw.NavigationPage {
  constructor(constructProperties = {}) {
    super(constructProperties);
  }
});

export default SingleNavigationPage;
