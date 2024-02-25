import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Adw from 'gi://Adw';

const HttpCodeListItem = GObject.registerClass(
  {
    GTypeName: 'HttpCodeListItem',
    Signals: {
      'open_http_item': {
        param_types: [GObject.TYPE_STRING]
      },
    },
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
  }, class HttpCodeListItem extends Adw.ActionRow {
  constructor(constructProperties = {}) {
    super(constructProperties);

    this._fire_http_details.connect('clicked', () =>
      this.triggerItemClick(constructProperties.target));
  }

  triggerItemClick(targetPath) {
    this.emit('open_http_item', targetPath.toString())
  }
});

export default HttpCodeListItem;