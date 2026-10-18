/**
 * Inline boot script. Runs before hydration so a tel:/sms: tap on the first
 * paint still logs, and so the cookie exists before the quote form reads it.
 * Client navigations re-run capture via history hooks. The listener is one
 * document-level capture handler.
 */
export const ATTRIBUTION_BOOT_SCRIPT = `(function () {
  if (window.__aaaAttr) return;
  window.__aaaAttr = 1;
  var KEY = "aaa_attr";
  var FIELDS = ["gclid","gbraid","wbraid","utm_source","utm_medium","utm_campaign","utm_term","utm_content"];
  function empty() {
    return { gclid: "", gbraid: "", wbraid: "", utm_source: "", utm_medium: "", utm_campaign: "", utm_term: "", utm_content: "", landing_page: "", first_seen_ts: "" };
  }
  function clean(value, max) {
    return String(value || "").replace(/[\\u0000-\\u001F\\u007F]/g, "").trim().slice(0, max);
  }
  function pathOnly(value) {
    var path = clean(value, 300);
    if (!path || path.charAt(0) !== "/" || path.charAt(1) === "/") return "";
    if (/[?#\\\\\\s]/.test(path)) return "";
    return path;
  }
  function parse(raw) {
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
  }
  function readLocal() {
    try { return parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function readCookie() {
    var parts = (document.cookie || "").split(";");
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i].replace(/^\\s+/, "");
      if (part.indexOf(KEY + "=") === 0) {
        var encoded = part.slice(KEY.length + 1);
        try { return parse(decodeURIComponent(encoded)); } catch (e) { return parse(encoded); }
      }
    }
    return null;
  }
  function merge(base, overlay) {
    var next = empty();
    var source = base || {};
    var extra = overlay || {};
    var i;
    for (i = 0; i < FIELDS.length; i++) {
      var key = FIELDS[i];
      next[key] = clean(source[key], 180);
    }
    next.landing_page = pathOnly(source.landing_page);
    next.first_seen_ts = clean(source.first_seen_ts, 40);
    for (i = 0; i < FIELDS.length; i++) {
      var name = FIELDS[i];
      var incoming = clean(extra[name], 180);
      if (incoming) next[name] = incoming;
    }
    if (!next.landing_page) next.landing_page = pathOnly(extra.landing_page);
    var seen = clean(extra.first_seen_ts, 40);
    if (seen && (!next.first_seen_ts || seen < next.first_seen_ts)) next.first_seen_ts = seen;
    return next;
  }
  function fromUrl() {
    var params = new URLSearchParams(location.search);
    var out = {};
    for (var i = 0; i < FIELDS.length; i++) {
      var key = FIELDS[i];
      var value = clean(params.get(key), 180);
      if (value) out[key] = value;
    }
    return out;
  }
  function write(record) {
    var json = JSON.stringify(record);
    var secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = KEY + "=" + encodeURIComponent(json) + "; Max-Age=7776000; Path=/; SameSite=Lax" + secure;
    try { localStorage.setItem(KEY, json); } catch (e) {}
  }
  function capture() {
    var next = merge(merge(readLocal(), readCookie()), fromUrl());
    if (!next.landing_page) next.landing_page = pathOnly(location.pathname || "/");
    if (!next.first_seen_ts) next.first_seen_ts = new Date().toISOString();
    write(next);
    return next;
  }
  function send(data) {
    var body = JSON.stringify(data);
    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: "application/json" });
        if (navigator.sendBeacon("/api/click-log", blob)) return;
      }
    } catch (e) {}
    try {
      fetch("/api/click-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
        keepalive: true
      });
    } catch (e2) {}
  }
  function eventId() {
    try {
      if (crypto && crypto.randomUUID) return crypto.randomUUID();
    } catch (e) {}
    return "";
  }
  function payload(action, href, page) {
    var attr = capture();
    return {
      event_id: eventId(),
      event: action,
      action: action,
      click_ts: new Date().toISOString(),
      page: page,
      href: href,
      gclid: attr.gclid || "",
      gbraid: attr.gbraid || "",
      wbraid: attr.wbraid || "",
      utm_source: attr.utm_source || "",
      utm_medium: attr.utm_medium || "",
      utm_campaign: attr.utm_campaign || "",
      utm_term: attr.utm_term || "",
      utm_content: attr.utm_content || "",
      landing_page: attr.landing_page || "",
      first_seen_ts: attr.first_seen_ts || "",
      user_agent: String(navigator.userAgent || "").slice(0, 240),
      lead_phone: ""
    };
  }
  document.addEventListener("click", function (event) {
    try {
      var node = event.target;
      if (!node) return;
      if (node.nodeType === 3) node = node.parentElement;
      if (!node || !node.closest) return;
      var link = node.closest("a");
      if (!link) return;
      var href = link.getAttribute("href") || "";
      var lower = href.toLowerCase();
      if (lower.indexOf("tel:") === 0) send(payload("call", href, location.pathname || "/"));
      else if (lower.indexOf("sms:") === 0) send(payload("text", href, location.pathname || "/"));
    } catch (err) {}
  }, true);
  function hook(name) {
    var original = history[name];
    if (!original) return;
    history[name] = function () {
      var result = original.apply(this, arguments);
      try { capture(); } catch (e) {}
      return result;
    };
  }
  hook("pushState");
  hook("replaceState");
  window.addEventListener("popstate", function () {
    try { capture(); } catch (e) {}
  });
  try { capture(); } catch (e) {}
})();`;
