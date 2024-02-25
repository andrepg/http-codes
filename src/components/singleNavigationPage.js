import GObject from 'gi://GObject';
import Adw from 'gi://Adw';

const SingleNavigationPage = GObject.registerClass(
  {
    GTypeName: 'SingleNavigationPage',
    Template: 'resource:///io/github/andrepg/httpcodes/gtk/single-navigation-page.ui',
    Properties: {
      'items': GObject.ParamSpec.jsobject(
        'items',
        'items',
        '',
        GObject.ParamFlags.READWRITE
      )
    },
    InternalChildren: ['main_list', 'main_label'],
  }, class SingleNavigationPage extends Adw.NavigationPage {
  constructor(constructProperties = {}) {
    super(constructProperties);
  }

  add_list_item(param) {
    this._main_list.append(param)
  }

  clear_list() {
    this._main_list.remove_all()
  }

  set_label(label) {
    this._main_label.set_label(label)
  }
});

export default SingleNavigationPage;
