/* Paloma's Pages bridge: lets a book or game page use the hub's one sign-in.
   Pages run inside the hub (index.html). Opened on their own, they go to the sign-in page. */
(function () {
  var hub = null;
  try { if (window.parent !== window && window.parent.PPHub) hub = window.parent.PPHub; } catch (e) { }
  if (!hub) { var root = location.pathname.replace(/\/(books|games)\/.*$/, '/'); location.replace(root); }
  window.PP = {
    inHub: !!hub,
    reader: function () { return hub ? hub.reader() : null; },
    load: function (id) { return hub ? hub.load(id) : null; },
    save: function (id, data) { if (hub) hub.save(id, data); },
    exit: function () { if (hub) hub.exit(); else location.replace('/'); }
  };
})();
