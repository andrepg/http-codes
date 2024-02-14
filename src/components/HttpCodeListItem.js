import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Adw from 'gi://Adw';

const HttpCodeListItem = GObject.registerClass(
  {
    GTypeName: 'HttpCodeListItem',
    Template: 'resource:///io/github/andrepg/httpcodes/components/HttpCodeListItem.ui',
    InternalChildren: ['fire_http_details'],
    Properties: {
      'target': GObject.ParamSpec.string(
        'target',
        'Button target',
        'Where to go when activate button',
        GObject.ParamFlags.READWRITE,
        ''
      )
    }
  },
  class HttpCodeListItem extends Adw.ActionRow {
    constructor(constructProperties = {}) {
       super(constructProperties);

       print(constructProperties.target)
    }

    printTarget() {
      print(this._target);
    }

  });

export default HttpCodeListItem;
