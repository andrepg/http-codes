import GObject from 'gi://GObject';
import Gtk from "gi://Gtk";
import Adw from 'gi://Adw';

const HttpCodeDetails = GObject.registerClass(
  {
    GTypeName: 'HttpCodeDetails',
    Properties: {
      'explanation': GObject.ParamSpec.string(
        'explanation',
        'explanation',
        '',
        GObject.ParamFlags.READWRITE,
        ''
      )
    },
  }, class HttpCodeDetails extends Adw.ExpanderRow {
  constructor(constructProperties = {}) {
super( constructProperties);

this.createExplanationLabel(constructProperties.explanation)
  }

    createExplanationLabel(textLabel) {
      this.add_row(new Gtk.Label({
        label: textLabel,
        margin_top: 15,
        margin_bottom: 15,
        margin_start: 15,
        margin_end: 15,
        wrap: true
      }))
  }
});

export default HttpCodeDetails;
