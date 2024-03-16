import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

import SingleNavigationPage from "../components/singleNavigationPage.js";
import { HttpCodesIndex } from "../http-status-codes/index.js";

const HttpCodesGroupPageHandler = {
  buildPage: function(target) {
    var page = new SingleNavigationPage();

    page.set_title("Choose a HTTP Status code")
    page.set_label('Code Group ' + target)

    return page;
  },

  feedPage: function(page, target) {
    var httpCodes = HttpCodesIndex.filter(code => code.httpCode == target)[0]

    httpCodes.details.forEach(singleCode => {
      var row = new Adw.ExpanderRow({
        title: singleCode.title,
        subtitle: singleCode.description
      });

      row.add_prefix(this.buildPrefixWidget(singleCode.code));
      this.addExplanationRow(row, singleCode);

      page.add_list_item(row);
    })

    return page;
  },

  addExplanationRow: function(row, code) {
    row.set_enable_expansion(code.explanation !== '');

    if (row.get_enable_expansion) {
      row.add_row(this.buildExplanationWidget(code.explanation));
      row.connect('notify::expanded', this.handleItemClick.bind(this));
    }
  },

  buildPrefixWidget: function(code) {
    const
      alignment_settings = { valign: Gtk.Align.CENTER, halign: Gtk.Align.CENTER },
      prefix_label = new Gtk.Label({ label: code });

    var prefix = new Gtk.Button(alignment_settings);

    prefix.set_child(prefix_label);

    return prefix;
  },

  buildExplanationWidget: function(explanation) {
    var box = new Gtk.Box({
      margin_start: 10,
      margin_end: 10,
      margin_top: 15,
      margin_bottom: 15,
    });

    explanation = new Gtk.Label({ label: explanation });
    explanation.set_css_classes(['caption']);
    explanation.set_justify(Gtk.Justification.FILL);
    explanation.set_wrap(true);
    explanation.set_hexpand(true);
    explanation.set_vexpand(true);
    explanation.set_use_markup(true);

    box.append(explanation)

    return box;
  },

  handleItemClick: function(caller) {
    // get index from caller
    console.log(caller.parent, caller)
    // check if expanded or not
    if (caller.get_expanded()) {
      console.log('opening row')
    }
    // close all others if this is expading
  }
}

export default HttpCodesGroupPageHandler
