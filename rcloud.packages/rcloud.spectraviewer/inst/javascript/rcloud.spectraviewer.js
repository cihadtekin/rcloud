((function() {
  return {
    init: function(k) {
      $("#spectra-viewer-body").html("");
      RCloud.UI.panel_loader.add({
        Spectracontent: {
          side: 'right',
          name: 'spectra-viewer',
          title: 'Spectra',
          icon_class: 'icon-barcode',
          colwidth: 3,
          sort: 2600,
          panel: {
            body: function() {
              return $.el.div({
                id: "spectra-viewer-body-wrapper",
                class: 'panel-body tight'
              },
                $.el.div({
                  id: "spectra-viewer-scroller",
                  style: "width: 100%; height: 100%; overflow-x: auto"
                },
                  $.el.div({
                    id:"spectra-viewer-body",
                    class: 'widget-vsize'
                  })
                )
              );
            }
          }
        }
      });
      k();
    },
    view: function(methods, k) {
      var tmp;
      var body = $("#spectra-viewer-body").html("");

      // Create elements
      var table = $("<table/>").appendTo(body);
      var tr = $("<tr>");
      var td = $("<td>");

      // Add styles
      table.css({
        "border-collapse": "collapse",
        "width": "100%"
      });
      td.css({
        "border-style": "solid",
        "border-width": "thin 0",
        "border-color": "#aaa",
        "padding-left": "10px",
        "white-space": "nowrap",
      });

      for (var i = 0; i < methods.length; i++) {
        // parse method name
        tmp = methods[i].match(/Function: (.+) (\(package base\)|\(package geoSpectral\))/);

        tmp && tmp[1] && td
        .clone()
        .html(tmp[1])
        .appendTo(tr.clone().appendTo(table))
      }

      RCloud.UI.right_panel.collapse($("#collapse-spectra-viewer"), false, false);

      k();
    }
  };
})()) /*jshint -W033 */