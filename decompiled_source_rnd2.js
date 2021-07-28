// http://jsnice.org/ after https://lelinhtinh.github.io/de4js/

'use strict';
/** @type {boolean} */
var testing = false;
if (0 <= window.location.href.indexOf("/testing")) {
  /** @type {boolean} */
  testing = true;
}
/** @type {boolean} */
var iioc = false;
/** @type {boolean} */
var nsr = false;
var lang = navigator.language || navigator.userLanguage;
lang = lang.substr(0, 2);
/** @type {boolean} */
var forcing = false;
/** @type {string} */
var ua = navigator.userAgent.toLowerCase();
/** @type {boolean} */
var is_android = 0 <= ua.indexOf("android");
/** @type {boolean} */
var is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/");
/** @type {string} */
var uua = navigator.userAgent;
/** @type {boolean} */
var is_ios = 0 <= uua.indexOf("iPad") || 0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod");
/** @type {boolean} */
var is_mobile = 0 <= ua.indexOf("mobile");
/** @type {boolean} */
var is_firefox = -1 < ua.indexOf("firefox");
/** @type {boolean} */
var is_ie8oo = window.attachEvent && !window.addEventListener;
/** @type {boolean} */
var is_chrome = false;
/** @type {boolean} */
var is_osx = false;
/** @type {number} */
var osx_ver = -1;
/** @type {boolean} */
var is_safari = false;
if (0 <= ua.indexOf("safari") && -1 == ua.indexOf("chrome")) {
  /** @type {boolean} */
  is_safari = true;
}
if (0 <= ua.indexOf("chrome")) {
  if (!(is_safari || is_firefox)) {
    /** @type {boolean} */
    is_chrome = true;
  }
}
if (0 <= ua.indexOf("mac os x ")) {
  /** @type {number} */
  var j = ua.indexOf("mac os x ");
  if (0 <= j) {
    /** @type {number} */
    j = j + 9;
    /** @type {!Array} */
    var vs = [];
    /** @type {number} */
    var v = 0;
    /** @type {number} */
    var i = j;
    for (; i < ua.length; i++) {
      /** @type {number} */
      var k = ua.charCodeAt(i);
      if (48 <= k && 57 >= k) {
        /** @type {number} */
        v = v * 10;
        /** @type {number} */
        v = v + (k - 48);
      } else {
        if (vs.push(v), v = 0, 3 == vs.length || 46 != k && 95 != k) {
          break;
        }
      }
    }
    if (2 <= vs.length && 10 == vs[0]) {
      /** @type {boolean} */
      is_osx = true;
      osx_ver = vs[1];
    }
  }
}
if (navigator.platform) {
  /** @type {string} */
  var ptf = ("" + navigator.platform).toLowerCase();
  if ("mac" != ptf.substr(0, 3)) {
    /** @type {boolean} */
    is_osx = false;
  }
}
/** @type {boolean} */
var no_raf = false;
/**
 * @param {!Function} callback
 * @return {undefined}
 */
var raf = function(callback) {
};
if (window.requestAnimationFrame) {
  raf = window.requestAnimationFrame;
} else {
  if (window.mozRequestAnimationFrame) {
    raf = window.mozRequestAnimationFrame;
  } else {
    if (window.webkitRequestAnimationFrame) {
      raf = window.webkitRequestAnimationFrame;
    } else {
      /** @type {boolean} */
      no_raf = true;
    }
  }
}
if (!is_mobile) {
  /** @type {boolean} */
  no_raf = true;
}
/** @type {boolean} */
no_raf = true;
if (is_chrome) {
  /** @type {!Array<string>} */
  var uas = ua.split(" ");
  /** @type {number} */
  i = uas.length - 1;
  for (; 0 <= i; i--) {
    /** @type {string} */
    var s = uas[i];
    if (0 == s.indexOf("chrome/")) {
      /** @type {string} */
      vs = s.split("chrome/")[1];
      /** @type {!Array<string>} */
      vs = vs.split(".");
      if (3 <= vs.length) {
        if (52 <= Number(vs[0])) {
          /** @type {boolean} */
          no_raf = false;
        } else {
          if (51 == Number(vs[0])) {
            if (1 <= Number(vs[1])) {
              /** @type {boolean} */
              no_raf = false;
            } else {
              if (2704 <= Number(vs[2])) {
                /** @type {boolean} */
                no_raf = false;
              }
            }
          }
        }
      }
      break;
    }
  }
  /** @type {boolean} */
  no_raf = true;
}
/** @type {boolean} */
var doiosh = false;
if (is_chrome && is_osx && -1 != osx_ver && 11 >= osx_ver) {
  /** @type {boolean} */
  nsr = true;
}
var a;
var l;
var m;
var n;
var o;
var r;
var fj;
var d;
var d2;
var qq;
var sc;
/** @type {string} */
var agpu = "translateZ(0)";
var ang;
var sang;
var vang;
/**
 * @param {!Element} obj
 * @param {string} trans
 * @return {undefined}
 */
function trf(obj, trans) {
  obj.style.webkitTransform = obj.style.OTransform = obj.style.msTransform = obj.style.MozTransform = obj.style.transform = trans;
}
/**
 * @param {!Element} div
 * @param {string} value
 * @return {undefined}
 */
function trfo(div, value) {
  div.style.webkitTransformOrigin = div.style.OTransformOrigin = div.style.msTransformOrigin = div.style.MozTransformOrigin = div.style.transformOrigin = value;
}
/** @type {number} */
var pi2 = 2 * Math.PI;
/** @type {!Array} */
var piar = [4, 21, 0, 11];
/** @type {boolean} */
var animating = false;
/**
 * @return {undefined}
 */
var startAnimation = function() {
  /** @type {boolean} */
  animating = true;
  if (no_raf) {
    if (is_mobile) {
      setInterval("oef()", 33);
    } else {
      if (is_safari) {
        setInterval("oef()", 33);
      } else {
        setInterval("oef()", 20);
      }
    }
  } else {
    raf(oef);
  }
};
/** @type {!Array} */
var ois = [];
/** @type {number} */
var wic = 0;
/**
 * @param {string} twitterWidgetURL
 * @return {?}
 */
var ldi = function(twitterWidgetURL) {
  wic++;
  var data = {};
  /** @type {!Element} */
  var e = document.createElement("img");
  /** @type {!Element} */
  data.ii = e;
  /** @type {number} */
  data.sc = 1;
  /**
   * @return {undefined}
   */
  e.onload = function() {
    /** @type {number} */
    var cache = ois.length - 1;
    for (; 0 <= cache; cache--) {
      if (ois[cache].ii == this) {
        cache = ois[cache];
        cache.ww = this.width;
        cache.hh = this.height;
        /** @type {boolean} */
        cache.loaded = true;
        if (cache.onload) {
          cache.onload();
        }
        break;
      }
    }
    wic--;
    if (0 == wic) {
      startAnimation();
    }
  };
  /** @type {string} */
  data.src = twitterWidgetURL;
  ois.push(data);
  return data;
};
/**
 * @param {string} css
 * @return {undefined}
 */
function addCss(css) {
  /** @type {!Element} */
  var style = document.createElement("style");
  document.getElementsByTagName("head")[0].appendChild(style);
  /** @type {string} */
  style.type = "text/css";
  if (style.styleSheet) {
    /** @type {string} */
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var sadg;
var sadu;
var sadd;
var p;
var xx;
var yy;
var grw;
var grh;
var elem;
var map;
var imgd;
var ctx;
var rw;
var rh;
/** @type {!Element} */
elem = document.createElement("canvas");
/** @type {number} */
grw = 2;
/** @type {number} */
grh = 56;
/** @type {number} */
elem.width = grw;
/** @type {number} */
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
/** @type {number} */
yy = p = 0;
for (; yy < grh; yy++) {
  /** @type {number} */
  j = (grh - 1 - yy) / (grh - 1);
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * j));
  /** @type {number} */
  xx = 0;
  for (; xx < grw; xx++) {
    /** @type {number} */
    imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j));
    /** @type {number} */
    imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j));
    /** @type {number} */
    imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j));
    /** @type {number} */
    imgd[p + 3] = 255;
    /** @type {number} */
    p = p + 4;
  }
}
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
/** @type {!Element} */
elem = document.createElement("canvas");
/** @type {number} */
elem.width = grw;
/** @type {number} */
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
/** @type {number} */
yy = p = 0;
for (; yy < grh; yy++) {
  /** @type {number} */
  j = (grh - 1 - yy) / (grh - 1);
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * j));
  /** @type {number} */
  xx = 0;
  for (; xx < grw; xx++) {
    /** @type {number} */
    imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j));
    /** @type {number} */
    imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j));
    /** @type {number} */
    imgd[p + 2] = Math.min(255, Math.floor(132 + .95 * 87 * j));
    /** @type {number} */
    imgd[p + 3] = 255;
    /** @type {number} */
    p = p + 4;
  }
}
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
/** @type {!Element} */
elem = document.createElement("canvas");
/** @type {number} */
elem.width = grw;
/** @type {number} */
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
/** @type {number} */
yy = p = 0;
for (; yy < grh; yy++) {
  /** @type {number} */
  j = yy / (grh - 1);
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * j));
  /** @type {number} */
  xx = 0;
  for (; xx < grw; xx++) {
    /** @type {number} */
    imgd[p] = Math.floor(.1 * 48 + 36 * j);
    /** @type {number} */
    imgd[p + 1] = Math.floor(7 + 52.5 * j);
    /** @type {number} */
    imgd[p + 2] = Math.floor(6.4 + 48 * j);
    /** @type {number} */
    imgd[p + 3] = 255;
    /** @type {number} */
    p = p + 4;
  }
}
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
if (32 < sadg.length && 32 < sadu.length && 32 < sadd.length) {
  addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
}
/** @type {number} */
elem.width = grw;
/** @type {number} */
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
/** @type {number} */
yy = p = 0;
for (; yy < grh; yy++) {
  /** @type {number} */
  j = (grh - 1 - yy) / (grh - 1);
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * j));
  /** @type {number} */
  xx = 0;
  for (; xx < grw; xx++) {
    /** @type {number} */
    imgd[p] = Math.min(255, Math.floor(.85 * 52 + 26 * j));
    /** @type {number} */
    imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j));
    /** @type {number} */
    imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * j));
    /** @type {number} */
    imgd[p + 3] = 255;
    /** @type {number} */
    p = p + 4;
  }
}
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
/** @type {!Element} */
elem = document.createElement("canvas");
/** @type {number} */
elem.width = grw;
/** @type {number} */
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
/** @type {number} */
yy = p = 0;
for (; yy < grh; yy++) {
  /** @type {number} */
  j = (grh - 1 - yy) / (grh - 1);
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * j));
  /** @type {number} */
  xx = 0;
  for (; xx < grw; xx++) {
    /** @type {number} */
    imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j));
    /** @type {number} */
    imgd[p + 1] = Math.min(255, Math.floor(132 + .95 * 87 * j));
    /** @type {number} */
    imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j));
    /** @type {number} */
    imgd[p + 3] = 255;
    /** @type {number} */
    p = p + 4;
  }
}
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
/** @type {!Element} */
elem = document.createElement("canvas");
/** @type {number} */
elem.width = grw;
/** @type {number} */
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
/** @type {number} */
yy = p = 0;
for (; yy < grh; yy++) {
  /** @type {number} */
  j = yy / (grh - 1);
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * j));
  /** @type {number} */
  xx = 0;
  for (; xx < grw; xx++) {
    /** @type {number} */
    imgd[p] = Math.floor(.1 * 48 + 36 * j);
    /** @type {number} */
    imgd[p + 1] = Math.floor(5.4 + 40.5 * j);
    /** @type {number} */
    imgd[p + 2] = Math.floor(7 + 52.5 * j);
    /** @type {number} */
    imgd[p + 3] = 255;
    /** @type {number} */
    p = p + 4;
  }
}
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
if (32 < sadg.length && 32 < sadu.length && 32 < sadd.length) {
  addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
}
/** @type {!Array} */
var mos = [];
/** @type {boolean} */
var whmos = false;
/** @type {boolean} */
var swmup = false;
/**
 * @param {!Element} element
 * @param {string} type
 * @param {number} w
 * @param {number} h
 * @return {?}
 */
function mkBtn(element, type, w, h) {
  /** @type {!Element} */
  var l = document.createElement("div");
  if (!element.tagName) {
    /** @type {(Element|null)} */
    element = document.getElementById(element);
    /** @type {string} */
    element.style.width = w + "px";
    /** @type {string} */
    element.style.height = h + "px";
    /** @type {string} */
    l.style.width = w + "px";
    /** @type {string} */
    l.style.height = h + "px";
  }
  var self = {
    lic : 0
  };
  /** @type {!Element} */
  self.elem = element;
  /** @type {boolean} */
  self.md = false;
  /** @type {boolean} */
  self.mo = false;
  /** @type {number} */
  self.mdf = 0;
  /** @type {number} */
  self.mof = 0;
  /** @type {boolean} */
  var q = true;
  if (element.style && element.style.position) {
    if ("absolute" == (element.style.position + "").toLowerCase()) {
      /** @type {boolean} */
      q = false;
    }
    if ("fixed" == (element.style.position + "").toLowerCase()) {
      /** @type {boolean} */
      q = false;
    }
  }
  if (q) {
    /** @type {string} */
    element.style.position = "relative";
  }
  /** @type {string} */
  l.style.position = "absolute";
  /** @type {number} */
  l.style.opacity = 0;
  /** @type {string} */
  l.style.left = "0px";
  /** @type {string} */
  l.style.top = "0px";
  element.appendChild(l);
  /** @type {!Element} */
  self.ho = l;
  /**
   * @return {undefined}
   */
  self.alic = function() {
    this.lic++;
    if (3 == this.lic && (this.ho.style.opacity = 1, this.onload)) {
      this.onload();
    }
  };
  mos.push(self);
  /**
   * @param {boolean} enable
   * @return {undefined}
   */
  self.setEnabled = function(enable) {
    if (enable) {
      /** @type {boolean} */
      this.disabled = false;
      this.upi.style.opacity = this.mof;
      this.downi.style.opacity = this.mdf;
      /** @type {number} */
      this.elem.style.opacity = 1;
      /** @type {string} */
      this.elem.style.cursor = "pointer";
    } else {
      /** @type {boolean} */
      this.disabled = true;
      /** @type {number} */
      this.upi.style.opacity = 0;
      /** @type {number} */
      this.downi.style.opacity = 0;
      /** @type {number} */
      this.elem.style.opacity = .38;
      /** @type {string} */
      this.elem.style.cursor = "default";
    }
  };
  if (type) {
    /** @type {number} */
    q = 1;
    for (; 3 >= q; q++) {
      /** @type {!Element} */
      var item = document.createElement("img");
      /** @type {boolean} */
      item.draggable = false;
      /** @type {string} */
      item.style.position = "absolute";
      /** @type {string} */
      item.style.left = "0px";
      /** @type {string} */
      item.style.top = "0px";
      /** @type {number} */
      item.border = 0;
      /** @type {number} */
      item.width = w;
      /** @type {number} */
      item.height = h;
      /** @type {string} */
      item.className = "nsi";
      l.appendChild(item);
      if (1 == q) {
        /** @type {!Element} */
        self.normi = item;
        /**
         * @return {undefined}
         */
        item.onload = function() {
          /** @type {number} */
          var i = mos.length - 1;
          for (; 0 <= i; i--) {
            var beforeTab = mos[i];
            if (beforeTab.normi == this) {
              beforeTab.alic();
              break;
            }
          }
        };
        /** @type {string} */
        item.src = type + ".png";
      } else {
        if (2 == q) {
          /** @type {!Element} */
          self.upi = item;
          /** @type {number} */
          item.style.opacity = 0;
          /**
           * @return {undefined}
           */
          item.onload = function() {
            /** @type {number} */
            var i = mos.length - 1;
            for (; 0 <= i; i--) {
              var beforeTab = mos[i];
              if (beforeTab.upi == this) {
                beforeTab.alic();
                break;
              }
            }
          };
          /** @type {string} */
          item.src = type + "up.png";
        } else {
          if (3 == q) {
            /** @type {!Element} */
            self.downi = item;
            /** @type {number} */
            item.style.opacity = 0;
            /**
             * @return {undefined}
             */
            item.onload = function() {
              /** @type {number} */
              var i = mos.length - 1;
              for (; 0 <= i; i--) {
                var beforeTab = mos[i];
                if (beforeTab.downi == this) {
                  beforeTab.alic();
                  break;
                }
              }
            };
            /** @type {string} */
            item.src = type + "down.png";
          }
        }
      }
    }
  } else {
    /** @type {number} */
    l.style.opacity = 1;
  }
  /**
   * @return {undefined}
   */
  element.onmouseenter = function() {
    /** @type {number} */
    var i = mos.length - 1;
    for (; 0 <= i; i--) {
      var b = mos[i];
      if (b.elem == this) {
        if (!b.disabled && !b.mo) {
          /** @type {boolean} */
          b.mo = true;
          if (b.onmouseenter) {
            b.onmouseenter();
          }
          /** @type {boolean} */
          whmos = true;
        }
        break;
      }
    }
  };
  /**
   * @return {undefined}
   */
  element.onmouseleave = function() {
    /** @type {number} */
    var i = mos.length - 1;
    for (; 0 <= i; i--) {
      var target = mos[i];
      if (target.elem == this) {
        if (target.mo) {
          /** @type {boolean} */
          target.mo = false;
          if (target.onmouseleave) {
            target.onmouseleave();
          }
          /** @type {boolean} */
          whmos = true;
        }
        break;
      }
    }
  };
  /**
   * @param {!Object} evt
   * @return {?}
   */
  element.onmousedown = function(evt) {
    /** @type {number} */
    var i = mos.length - 1;
    for (; 0 <= i; i--) {
      var node = mos[i];
      if (node.elem == this) {
        if (!node.disabled && !node.md) {
          /** @type {boolean} */
          node.md = true;
          if (node.onmousedown) {
            node.onmousedown(evt, node);
          }
          /** @type {boolean} */
          whmos = true;
          return false;
        }
        break;
      }
    }
  };
  /** @type {function(?): undefined} */
  element.onmouseup = element.ondragend = function(e) {
    /** @type {number} */
    var i = mos.length - 1;
    for (; 0 <= i; i--) {
      var node = mos[i];
      if (node.elem == this) {
        if (node.md) {
          /** @type {number} */
          node.mdf = 1;
          /** @type {boolean} */
          node.md = false;
          if (node.onmouseup && (node.onmouseup(e, node), is_mobile)) {
            node.elem.onmouseleave();
          }
          /** @type {boolean} */
          whmos = true;
        }
        break;
      }
    }
  };
  if (!swmup) {
    /** @type {boolean} */
    swmup = true;
    /** @type {function(): undefined} */
    window.onmouseup = window.ondragover = window.ondragend = function() {
      /** @type {number} */
      var i = mos.length - 1;
      for (; 0 <= i; i--) {
        var signer = mos[i];
        if (signer.md) {
          /** @type {boolean} */
          signer.md = false;
          /** @type {boolean} */
          whmos = true;
        }
      }
    };
  }
  return self;
}
/**
 * @return {undefined}
 */
function hmos() {
  var b;
  /** @type {boolean} */
  var c = false;
  /** @type {number} */
  var i = mos.length - 1;
  for (; 0 <= i; i--) {
    var d = mos[i];
    /** @type {boolean} */
    b = false;
    if (d.mo) {
      if (1 != d.mof) {
        /** @type {boolean} */
        c = true;
        d.mof += .33;
        if (1 <= d.mof) {
          /** @type {number} */
          d.mof = 1;
        }
        /** @type {boolean} */
        b = true;
      }
    } else {
      if (0 != d.mof) {
        /** @type {boolean} */
        c = true;
        d.mof -= .2;
        if (0 >= d.mof) {
          /** @type {number} */
          d.mof = 0;
        }
        /** @type {boolean} */
        b = true;
      }
    }
    if (b) {
      d.upi.style.opacity = d.disabled ? 0 : d.mof;
    }
    /** @type {boolean} */
    b = false;
    if (d.md) {
      if (1 != d.mdf) {
        /** @type {boolean} */
        c = true;
        d.mdf += .33;
        if (1 <= d.mdf) {
          /** @type {number} */
          d.mdf = 1;
        }
        /** @type {boolean} */
        b = true;
      }
    } else {
      if (0 != d.mdf) {
        /** @type {boolean} */
        c = true;
        d.mdf -= .2;
        if (0 >= d.mdf) {
          /** @type {number} */
          d.mdf = 0;
        }
        /** @type {boolean} */
        b = true;
      }
    }
    if (b) {
      d.downi.style.opacity = d.disabled ? 0 : d.mdf;
    }
  }
  if (!c) {
    /** @type {boolean} */
    whmos = false;
  }
}
/**
 * @param {string} color
 * @param {number} height
 * @param {!Object} value
 * @param {number} size
 * @param {number} val
 * @return {?}
 */
function makeTextBtn(color, height, value, size, val) {
  if (!height) {
    /** @type {number} */
    height = 56;
  }
  if (56 < height) {
    /** @type {number} */
    height = 56;
  }
  if (!value) {
    /** @type {number} */
    value = 15;
  }
  if (!size) {
    /** @type {number} */
    size = 14;
  }
  /** @type {!Element} */
  var target = document.createElement("div");
  /** @type {string} */
  target.className = "btnt nsi sadg" + val;
  /** @type {!CSSStyleDeclaration} */
  var style = target.style;
  /** @type {string} */
  style.position = "absolute";
  /** @type {string} */
  style.width = "auto";
  /** @type {string} */
  style.color = "#ffffff";
  /** @type {string} */
  style.fontWeight = "bold";
  /** @type {string} */
  style.textAlign = "center";
  /** @type {string} */
  style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
  /** @type {string} */
  style.fontSize = value + "px";
  /** @type {string} */
  target.textContent = color;
  /** @type {string} */
  style.cursor = "pointer";
  document.body.appendChild(target);
  /** @type {number} */
  var width = Math.ceil(35 + target.offsetWidth);
  document.body.removeChild(target);
  /** @type {string} */
  target.textContent = "";
  /** @type {string} */
  style.width = width + "px";
  /** @type {string} */
  style.height = height + "px";
  /** @type {string} */
  style.lineHeight = height + "px";
  if (!is_mobile) {
    /** @type {string} */
    style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
  }
  /** @type {string} */
  style.borderRadius = size + "px";
  /** @type {!Element} */
  var bar = document.createElement("div");
  /** @type {!CSSStyleDeclaration} */
  style = bar.style;
  /** @type {string} */
  style.position = "absolute";
  /** @type {string} */
  style.left = style.top = "0px";
  /** @type {string} */
  style.width = width + "px";
  /** @type {string} */
  style.height = height + "px";
  /** @type {string} */
  style.borderRadius = size + 1 + "px";
  /** @type {number} */
  style.opacity = 0;
  /** @type {string} */
  bar.className = "sadu" + val;
  /** @type {!Element} */
  var loading = document.createElement("div");
  /** @type {!CSSStyleDeclaration} */
  style = loading.style;
  /** @type {string} */
  style.position = "absolute";
  /** @type {string} */
  style.left = style.top = "-1px";
  /** @type {string} */
  style.width = width + 2 + "px";
  /** @type {string} */
  style.height = height + 2 + "px";
  /** @type {string} */
  style.borderRadius = size + "px";
  /** @type {number} */
  style.opacity = 0;
  /** @type {string} */
  loading.className = "sadd" + val;
  var self = mkBtn(target);
  /** @type {number} */
  self.a = 1;
  self.ho.appendChild(bar);
  /** @type {!Element} */
  self.upi = bar;
  self.ho.appendChild(loading);
  /** @type {!Element} */
  self.downi = loading;
  /** @type {!Object} */
  self.ts = value;
  /** @type {number} */
  self.ww = width;
  /** @type {number} */
  self.bgm = val;
  /**
   * @param {string} text
   * @return {undefined}
   */
  self.setText = function(text) {
    /** @type {!Element} */
    var div = document.createElement("div");
    /** @type {string} */
    div.className = "nsi sadg" + this.bgm;
    /** @type {!CSSStyleDeclaration} */
    var s = div.style;
    /** @type {string} */
    s.position = "absolute";
    /** @type {string} */
    s.width = "auto";
    /** @type {string} */
    s.color = "#ffffff";
    /** @type {string} */
    s.fontWeight = "bold";
    /** @type {string} */
    s.textAlign = "center";
    /** @type {string} */
    s.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    /** @type {string} */
    s.fontSize = this.ts + "px";
    /** @type {string} */
    div.textContent = text;
    document.body.appendChild(div);
    /** @type {number} */
    s = Math.ceil(35 + div.offsetWidth);
    document.body.removeChild(div);
    /** @type {string} */
    this.btnf.textContent = text;
    /** @type {number} */
    this.ww = s;
    /** @type {string} */
    this.elem.style.width = s + "px";
    /** @type {string} */
    this.upi.style.width = s + "px";
    /** @type {string} */
    this.downi.style.width = s + 2 + "px";
    /** @type {string} */
    this.btnf.style.width = s + "px";
  };
  /** @type {!Element} */
  value = document.createElement("div");
  target.appendChild(value);
  /** @type {!Object} */
  self.btnf = value;
  /** @type {!CSSStyleDeclaration} */
  style = value.style;
  /** @type {string} */
  style.position = "absolute";
  /** @type {string} */
  style.left = style.top = "0px";
  /** @type {string} */
  style.width = width + "px";
  /** @type {string} */
  style.height = height + "px";
  /** @type {string} */
  style.borderRadius = size + "px";
  /** @type {string} */
  value.textContent = color;
  /** @type {string} */
  value.className = "nsi";
  /** @type {string} */
  style.color = "#ffffff";
  /** @type {number} */
  style.opacity = .9;
  self.ho.appendChild(value);
  return self;
}
/**
 * @return {undefined}
 */
function heystup() {
  /** @type {!NodeList<Element>} */
  var result = document.getElementsByTagName("script");
  /** @type {number} */
  var id = result.length - 1;
  for (; 0 <= id; id--) {
    /** @type {!Element} */
    var n = result[id];
    try {
      if (n.src && 0 <= (n.src + "").indexOf("mindscape.xyz")) {
        /** @type {!Element} */
        var h = document.createElement("div");
        /** @type {string} */
        h.style.width = "100%";
        /** @type {string} */
        h.style.height = "100%";
        /** @type {string} */
        h.style.position = "fixed";
        /** @type {string} */
        h.style.left = h.style.top = "0px";
        /** @type {number} */
        h.style.zIndex = 2147483647;
        /** @type {string} */
        h.style.fontSize = "87px";
        /** @type {string} */
        h.style.color = "#FF3030";
        /** @type {string} */
        h.style.background = "#FFFFFF";
        if (0 <= (n.src + "").indexOf("android")) {
          /** @type {string} */
          h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://play.google.com/store/apps/details?id=air.com.hypah.io.slither">Tap here to download the real game!</a>';
        } else {
          /** @type {string} */
          h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>';
        }
        document.body.appendChild(h);
      }
    } catch (w) {
    }
  }
  if (is_ios && mba && !mba.parentNode) {
    /** @type {!Element} */
    h = document.createElement("div");
    /** @type {string} */
    h.style.width = "100%";
    /** @type {string} */
    h.style.height = "100%";
    /** @type {string} */
    h.style.position = "fixed";
    /** @type {string} */
    h.style.left = h.style.top = "0px";
    /** @type {number} */
    h.style.zIndex = 2147483647;
    /** @type {string} */
    h.style.fontSize = "87px";
    /** @type {string} */
    h.style.color = "#FF3030";
    /** @type {string} */
    h.style.background = "#FFFFFF";
    /** @type {string} */
    h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>';
    document.body.appendChild(h);
  }
}
setInterval(heystup, 8E3);
/** @type {!Array} */
var sos = [];
/** @type {!Array} */
var clus = [];
var bso;
/** @type {!Array} */
var u_m = [64, 32, 16, 8, 4, 2, 1];
/** @type {!Array<string>} */
var accessories = "oakley graduation funkystar headphones eyebrows spikecollar disguise cape crown antlers unicorn angel bat dragon bear rabbit cat dreadlocks blonde ginger blackhair mohawk catglass swirly nerdglass 3dglass heartglass monocle deerstalker visor cap hardhat".split(" ");
/** @type {!Array} */
var a_imgs = [];
var a_ct;
/** @type {number} */
i = 0;
for (; i < accessories.length; i++) {
  o = {};
  a_imgs.push(o);
  /** @type {boolean} */
  o.loaded = false;
  /** @type {null} */
  o.img = null;
  /** @type {string} */
  o.u = "/s/a_" + accessories[i] + ".png";
  if (0 == i) {
    /** @type {number} */
    o.sc = .205;
    /** @type {number} */
    o.px = 66;
    /** @type {number} */
    o.py = 87;
  } else {
    if (1 == i) {
      /** @type {number} */
      o.sc = .2;
      /** @type {number} */
      o.px = 205;
      /** @type {number} */
      o.py = 101;
    } else {
      if (2 == i) {
        /** @type {number} */
        o.sc = .205;
        /** @type {number} */
        o.px = 83;
        /** @type {number} */
        o.py = 87;
      } else {
        if (3 == i) {
          /** @type {number} */
          o.sc = .25;
          /** @type {number} */
          o.px = 130;
          /** @type {number} */
          o.py = 97;
        } else {
          if (4 == i) {
            /** @type {number} */
            o.sc = .25;
            /** @type {number} */
            o.px = 64;
            /** @type {number} */
            o.py = 82;
          } else {
            if (5 == i) {
              /** @type {number} */
              o.sc = .25;
              /** @type {number} */
              o.px = 94;
              /** @type {number} */
              o.py = 79;
            } else {
              if (6 == i) {
                /** @type {number} */
                o.sc = .25;
                /** @type {number} */
                o.px = 64;
                /** @type {number} */
                o.py = 90;
              } else {
                if (7 == i) {
                  /** @type {number} */
                  o.sc = .32;
                  /** @type {number} */
                  o.px = 170;
                  /** @type {number} */
                  o.py = 86;
                } else {
                  if (8 == i) {
                    /** @type {number} */
                    o.sc = .18;
                    /** @type {number} */
                    o.px = 180;
                    /** @type {number} */
                    o.py = 75;
                  } else {
                    if (9 == i) {
                      /** @type {number} */
                      o.sc = .3;
                      /** @type {number} */
                      o.px = 120;
                      /** @type {number} */
                      o.py = 100;
                    } else {
                      if (10 == i) {
                        /** @type {number} */
                        o.sc = .3;
                        /** @type {number} */
                        o.px = 201;
                        /** @type {number} */
                        o.py = 40;
                      } else {
                        if (11 == i) {
                          /** @type {number} */
                          o.sc = .3;
                          /** @type {number} */
                          o.px = 152;
                          /** @type {number} */
                          o.py = 125;
                        } else {
                          if (12 == i) {
                            /** @type {number} */
                            o.sc = .25;
                            /** @type {number} */
                            o.px = 132;
                            /** @type {number} */
                            o.py = 150;
                          } else {
                            if (13 == i) {
                              /** @type {number} */
                              o.sc = .25;
                              /** @type {number} */
                              o.px = 145;
                              /** @type {number} */
                              o.py = 140;
                            } else {
                              if (14 == i) {
                                /** @type {number} */
                                o.sc = .165;
                                /** @type {number} */
                                o.px = 115;
                                /** @type {number} */
                                o.py = 90;
                              } else {
                                if (15 == i) {
                                  /** @type {number} */
                                  o.sc = .19;
                                  /** @type {number} */
                                  o.px = 172;
                                  /** @type {number} */
                                  o.py = 125;
                                } else {
                                  if (16 == i) {
                                    /** @type {number} */
                                    o.sc = .19;
                                    /** @type {number} */
                                    o.px = 127;
                                    /** @type {number} */
                                    o.py = 90;
                                  } else {
                                    if (17 == i) {
                                      /** @type {number} */
                                      o.sc = .25;
                                      /** @type {number} */
                                      o.px = 114;
                                      /** @type {number} */
                                      o.py = 80;
                                    } else {
                                      if (18 == i) {
                                        /** @type {number} */
                                        o.sc = .225;
                                        /** @type {number} */
                                        o.px = 144;
                                        /** @type {number} */
                                        o.py = 85;
                                      } else {
                                        if (19 == i) {
                                          /** @type {number} */
                                          o.sc = .225;
                                          /** @type {number} */
                                          o.px = 154;
                                          /** @type {number} */
                                          o.py = 89;
                                        } else {
                                          if (20 == i) {
                                            /** @type {number} */
                                            o.sc = .215;
                                            /** @type {number} */
                                            o.px = 159;
                                            /** @type {number} */
                                            o.py = 91;
                                          } else {
                                            if (21 == i) {
                                              /** @type {number} */
                                              o.sc = .215;
                                              /** @type {number} */
                                              o.px = 184;
                                              /** @type {number} */
                                              o.py = 47;
                                            } else {
                                              if (22 == i) {
                                                /** @type {number} */
                                                o.sc = .19;
                                                /** @type {number} */
                                                o.px = 88;
                                                /** @type {number} */
                                                o.py = 106;
                                              } else {
                                                if (23 == i) {
                                                  /** @type {number} */
                                                  o.sc = .19;
                                                  /** @type {number} */
                                                  o.px = 63;
                                                  /** @type {number} */
                                                  o.py = 106;
                                                } else {
                                                  if (24 == i) {
                                                    /** @type {number} */
                                                    o.sc = .19;
                                                    /** @type {number} */
                                                    o.px = 93;
                                                    /** @type {number} */
                                                    o.py = 105;
                                                  } else {
                                                    if (25 == i) {
                                                      /** @type {number} */
                                                      o.sc = .17;
                                                      /** @type {number} */
                                                      o.px = 94;
                                                      /** @type {number} */
                                                      o.py = 122;
                                                    } else {
                                                      if (26 == i) {
                                                        /** @type {number} */
                                                        o.sc = .153;
                                                        /** @type {number} */
                                                        o.px = 54;
                                                        /** @type {number} */
                                                        o.py = 113;
                                                      } else {
                                                        if (27 == i) {
                                                          /** @type {number} */
                                                          o.sc = .175;
                                                          /** @type {number} */
                                                          o.px = 60;
                                                          /** @type {number} */
                                                          o.py = 22;
                                                        } else {
                                                          if (28 == i) {
                                                            /** @type {number} */
                                                            o.sc = .19;
                                                            /** @type {number} */
                                                            o.px = 195;
                                                            /** @type {number} */
                                                            o.py = 77;
                                                          } else {
                                                            if (29 == i) {
                                                              /** @type {number} */
                                                              o.sc = .21;
                                                              /** @type {number} */
                                                              o.px = 77;
                                                              /** @type {number} */
                                                              o.py = 92;
                                                            } else {
                                                              if (30 == i) {
                                                                /** @type {number} */
                                                                o.sc = .19;
                                                                /** @type {number} */
                                                                o.px = 194;
                                                                /** @type {number} */
                                                                o.py = 80;
                                                              } else {
                                                                if (31 == i) {
                                                                  /** @type {number} */
                                                                  o.sc = .16;
                                                                  /** @type {number} */
                                                                  o.px = 223;
                                                                  /** @type {number} */
                                                                  o.py = 90;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
/** @type {number} */
a_ct = a_imgs.length;
/** @type {number} */
var lgbsc = 1;
/** @type {number} */
var lgcsc = 1;
/** @type {number} */
var lb_fr = 0;
/** @type {number} */
var login_fr = 0;
/** @type {number} */
var llgmtm = Date.now();
/** @type {number} */
var login_iv = -1;
/**
 * @return {undefined}
 */
function loginFade() {
  /** @type {number} */
  var b = Date.now();
  /** @type {number} */
  var c = (b - llgmtm) / 25;
  /** @type {number} */
  llgmtm = b;
  login_fr = login_fr + .05 * c;
  if (choosing_skin) {
    login_fr = login_fr + .06 * c;
  }
  if (1 <= login_fr) {
    /** @type {number} */
    login_fr = 1;
    /** @type {string} */
    login.style.display = "none";
    /** @type {string} */
    cstx.style.display = "none";
    /** @type {string} */
    fbh.style.display = "none";
    /** @type {string} */
    twth.style.display = "none";
    /** @type {string} */
    cskh.style.display = "none";
    /** @type {string} */
    etcoh.style.display = "none";
    /** @type {string} */
    grqh.style.display = "none";
    /** @type {string} */
    plq.style.display = "none";
    /** @type {string} */
    clq.style.display = "none";
    /** @type {string} */
    social.style.display = "none";
    /** @type {number} */
    login.style.opacity = 1;
    /** @type {number} */
    cstx.style.opacity = 1;
    /** @type {number} */
    fbh.style.opacity = 1;
    /** @type {number} */
    twth.style.opacity = 1;
    /** @type {number} */
    cskh.style.opacity = 1;
    /** @type {number} */
    etcoh.style.opacity = 1;
    /** @type {number} */
    grqh.style.opacity = 1;
    /** @type {number} */
    plq.style.opacity = 1;
    /** @type {number} */
    clq.style.opacity = 1;
    /** @type {number} */
    social.style.opacity = 1;
    /** @type {number} */
    pskh.style.opacity = 1;
    /** @type {number} */
    nskh.style.opacity = 1;
    /** @type {number} */
    bskh.style.opacity = 1;
    /** @type {number} */
    scosh.style.opacity = 1;
    /** @type {number} */
    skodiv.style.opacity = 1;
    /** @type {number} */
    revdiv.style.opacity = 1;
    /** @type {number} */
    tip_fr = -1;
    /** @type {string} */
    tips.style.display = "none";
    /** @type {number} */
    mc.style.opacity = 1;
    /** @type {number} */
    loch.style.opacity = 1;
    clearInterval(login_iv);
    /** @type {number} */
    login_iv = -1;
    if (-1 != showlogo_iv) {
      /** @type {number} */
      ncka = lgss = lga = 1;
      showLogo(true);
      if (-1 != showlogo_iv) {
        clearInterval(showlogo_iv);
        /** @type {number} */
        showlogo_iv = -1;
      }
    }
  } else {
    /** @type {number} */
    lgcsc = 1 + .1 * Math.pow(login_fr, 2);
    /** @type {number} */
    b = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    trf(login, "scale(" + b + "," + b + ")");
    /** @type {number} */
    login.style.opacity = 1 - login_fr;
    /** @type {number} */
    cstx.style.opacity = 1 - login_fr;
    /** @type {number} */
    fbh.style.opacity = 1 - login_fr;
    /** @type {number} */
    twth.style.opacity = 1 - login_fr;
    /** @type {number} */
    cskh.style.opacity = 1 - login_fr;
    /** @type {number} */
    etcoh.style.opacity = 1 - login_fr;
    /** @type {number} */
    grqh.style.opacity = 1 - login_fr;
    /** @type {number} */
    plq.style.opacity = 1 - login_fr;
    /** @type {number} */
    clq.style.opacity = 1 - login_fr;
    /** @type {number} */
    social.style.opacity = 1 - login_fr;
    pskh.style.opacity = login_fr;
    nskh.style.opacity = login_fr;
    bskh.style.opacity = login_fr;
    scosh.style.opacity = login_fr;
    skodiv.style.opacity = login_fr;
    revdiv.style.opacity = login_fr;
    mc.style.opacity = login_fr;
    loch.style.opacity = login_fr;
  }
}
/** @type {number} */
var play_count = 0;
/** @type {boolean} */
var want_play = false;
/** @type {boolean} */
var shoa = false;
/** @type {(Element|null)} */
var ocho = document.getElementById("ocho");
/**
 * @return {undefined}
 */
function oalo() {
  /** @type {string} */
  ocho.style.display = "inline";
  adsController.showAd();
}
/**
 * @return {undefined}
 */
function oadu() {
  /** @type {string} */
  ocho.style.display = "none";
  /** @type {boolean} */
  shoa = false;
}
/** @type {number} */
i = 0;
for (; i < piar.length; i++) {
  /** @type {string} */
  piar[i] = String.fromCharCode(piar[i] + 97);
}
piar = window[piar.join("")];
/** @type {number} */
var ss_a = 0;
/** @type {number} */
var ss_sh = 0;
/** @type {boolean} */
var spinner_shown = false;
/** @type {!Element} */
var ldmc = document.createElement("canvas");
/** @type {number} */
ldmc.width = 128;
/** @type {number} */
ldmc.height = 128;
/** @type {string} */
ldmc.style.position = "fixed";
/** @type {string} */
ldmc.style.left = "0px";
/** @type {string} */
ldmc.style.top = "0px";
/** @type {number} */
ldmc.style.zIndex = 8388607;
/** @type {string} */
ldmc.style.display = "none";
document.body.appendChild(ldmc);
/** @type {number} */
var lsfr = 0;
/** @type {number} */
var lcldtm = Date.now();
/** @type {string} */
var rstr = "Reset";
if ("de" == lang) {
  /** @type {string} */
  rstr = "L\u00f6schen";
} else {
  if ("fr" == lang) {
    /** @type {string} */
    rstr = "Effacer";
  } else {
    if ("pt" == lang) {
      /** @type {string} */
      rstr = "Apagar";
    }
  }
}
o = makeTextBtn(String.fromCharCode(160) + rstr + String.fromCharCode(160), 47, 20, 34, 1);
var revdiv = o.elem;
/** @type {number} */
revdiv.style.zIndex = 53;
/** @type {string} */
revdiv.style.position = "fixed";
/** @type {string} */
revdiv.style.left = "300px";
/** @type {string} */
revdiv.style.top = "300px";
/** @type {string} */
revdiv.style.display = "none";
/** @type {number} */
revdiv.style.opacity = 0;
document.body.appendChild(revdiv);
/**
 * @return {undefined}
 */
o.elem.onclick = function() {
  if (building_skin && !ending_build_skin) {
    /** @type {!Array} */
    build_segments = [];
    var previousWidgetPos = getBuildSkinData(true);
    setSkin(snake, 0, previousWidgetPos);
  }
};
/** @type {string} */
var sstr = "Save";
if ("de" == lang) {
  /** @type {string} */
  sstr = "OK";
} else {
  if ("fr" == lang) {
    /** @type {string} */
    sstr = "Bien";
  } else {
    if ("pt" == lang) {
      /** @type {string} */
      sstr = "OK";
    }
  }
}
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1);
var skodiv = o.elem;
/** @type {number} */
skodiv.style.zIndex = 53;
/** @type {string} */
skodiv.style.position = "fixed";
/** @type {string} */
skodiv.style.left = "300px";
/** @type {string} */
skodiv.style.top = "300px";
/** @type {string} */
skodiv.style.display = "none";
/** @type {number} */
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
/**
 * @return {undefined}
 */
o.elem.onclick = function() {
  if (building_skin && !ending_build_skin) {
    /** @type {boolean} */
    ending_build_skin = true;
    /** @type {string} */
    var a = "";
    if (0 < build_segments.length) {
      a = getBuildSkinData(false);
    } else {
      /** @type {string} */
      var result = "";
      try {
        if ((result = localStorage.custom_skin) && 0 < result.length) {
          /** @type {!Array<string>} */
          result = ("" + result).split(",");
          /** @type {!Uint8Array} */
          a = new Uint8Array(result.length);
          /** @type {number} */
          var i = 0;
          for (; i < result.length; i++) {
            /** @type {number} */
            a[i] = Number(result[i]);
          }
        }
      } catch (w) {
      }
    }
    if (null == a) {
      /** @type {string} */
      a = "";
    }
    if (0 < a.length) {
      setSkin(snake, 0, a);
      /** @type {!Array} */
      result = [];
      /** @type {number} */
      i = 0;
      for (; i < a.length; i++) {
        result.push(a[i]);
      }
      /** @type {string} */
      var value = result.join(",");
      try {
        /** @type {string} */
        localStorage.custom_skin = value;
        /** @type {string} */
        localStorage.want_custom_skin = "1";
      } catch (w) {
      }
    } else {
      /** @type {number} */
      a = Math.floor(9 * Math.random());
      try {
        value = localStorage.snakercv;
        if (value == "" + Number(value)) {
          /** @type {number} */
          a = Number(value);
        }
      } catch (w) {
      }
      setSkin(snake, a, null);
      try {
        /** @type {string} */
        localStorage.want_custom_skin = "0";
      } catch (w) {
      }
    }
  } else {
    if (selecting_cosmetic && !ending_select_cosmetic) {
      /** @type {boolean} */
      ending_select_cosmetic = true;
      try {
        localStorage.cosmetic = snake.accessory;
      } catch (w) {
      }
    } else {
      if (playing) {
        try {
          localStorage.snakercv = snake.rcv;
        } catch (w) {
        }
        /** @type {boolean} */
        playing = connected = false;
        /** @type {number} */
        dead_mtm = Date.now() - 5E3;
      }
    }
  }
};
/** @type {(Element|null)} */
var nick = document.getElementById("nick");
/** @type {(Element|null)} */
var victory = document.getElementById("victory");
/** @type {(Element|null)} */
var victory_bg = document.getElementById("victory_bg");
/** @type {(Element|null)} */
var logo = document.getElementById("logo");
/** @type {(Element|null)} */
var login = document.getElementById("login");
/** @type {(Element|null)} */
var lastscore = document.getElementById("lastscore");
/** @type {(Element|null)} */
var nick_holder = document.getElementById("nick_holder");
/** @type {(Element|null)} */
var victory_holder = document.getElementById("victory_holder");
/** @type {string} */
var pstr = "Play";
if ("de" == lang) {
  /** @type {string} */
  pstr = "Spielen";
} else {
  if ("fr" == lang) {
    /** @type {string} */
    pstr = "Jouer";
    /** @type {string} */
    nick.placeholder = "Surnom";
  } else {
    if ("pt" == lang) {
      /** @type {string} */
      pstr = "Joga";
      /** @type {string} */
      nick.placeholder = "Apelido";
    }
  }
}
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1);
var pbdiv = o.elem;
/** @type {string} */
pbdiv.style.position = "relative";
/** @type {string} */
pbdiv.style.display = "inline-block";
/** @type {string} */
pbdiv.style.marginTop = "20px";
/** @type {string} */
pbdiv.style.marginBottom = "50px";
/** @type {(Element|null)} */
var playh = document.getElementById("playh");
/** @type {number} */
playh.style.opacity = 0;
playh.appendChild(pbdiv);
/** @type {(Element|null)} */
var tips = document.getElementById("tips");
/** @type {!Array} */
var tipss = ["Eat to grow longer!", "Don't run into other players!", "When longer, hold the mouse for a speed boost!"];
if ("de" == lang) {
  /** @type {!Array} */
  tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"];
} else {
  if ("fr" == lang) {
    /** @type {!Array} */
    tipss = ["Mange pour cro\u00eetre !", "Clique pour courir !", "Ne laissez pas votre t\u00eate toucher d'autres serpents !"];
  } else {
    if ("pt" == lang) {
      /** @type {!Array} */
      tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"];
    }
  }
}
/** @type {number} */
var tip_pos = -1;
/** @type {number} */
var tip_fr = 1.9;
/**
 * @return {undefined}
 */
o.elem.onclick = function() {
  if (!(want_play || play_btn.disabled || entering_code)) {
    /** @type {boolean} */
    want_play = true;
    /** @type {number} */
    play_btn_click_mtm = Date.now();
    play_btn.setEnabled(false);
    /** @type {boolean} */
    spinner_shown = nick.disabled = true;
    /** @type {string} */
    ldmc.style.display = "inline";
    play_count++;
  }
};
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2);
var sbdiv = o.elem;
/** @type {string} */
sbdiv.style.position = "relative";
/** @type {string} */
sbdiv.style.display = "inline-block";
/** @type {string} */
sbdiv.style.marginTop = "30px";
/** @type {string} */
sbdiv.style.marginBottom = "50px";
/** @type {(Element|null)} */
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
/**
 * @return {undefined}
 */
o.elem.onclick = function() {
  if (!save_btn.disabled) {
    var lineText = asciize(victory.value);
    if (140 < lineText.length) {
      lineText = lineText.substr(0, 140);
    }
    if (5 <= protocol_version) {
      /** @type {!Uint8Array} */
      var c = new Uint8Array(2 + lineText.length);
      /** @type {number} */
      c[0] = 255;
      /** @type {number} */
      c[1] = 118;
      /** @type {number} */
      var offset = 0;
      for (; offset < lineText.length; offset++) {
        c[offset + 2] = lineText.charCodeAt(offset);
      }
    } else {
      /** @type {!Uint8Array} */
      c = new Uint8Array(1 + lineText.length);
      /** @type {number} */
      c[0] = 118;
      /** @type {number} */
      offset = 0;
      for (; offset < lineText.length; offset++) {
        c[offset + 1] = lineText.charCodeAt(offset);
      }
    }
    ws.send(c);
    save_btn.setEnabled(false);
    /** @type {boolean} */
    victory.disabled = true;
  }
};
/** @type {boolean} */
var wide = false;
/** @type {number} */
var mww = 850;
/** @type {number} */
var mhh = 700;
/** @type {number} */
var mwwp50 = mww + 50;
/** @type {number} */
var mhhp50 = mhh + 50;
/** @type {number} */
var mwwp150 = mww + 150;
/** @type {number} */
var mhhp150 = mhh + 150;
/** @type {number} */
var mww2 = mww / 2;
/** @type {number} */
var mhh2 = mhh / 2;
/** @type {!Element} */
var mc = document.createElement("canvas");
/** @type {string} */
mc.style.position = "fixed";
/** @type {string} */
mc.style.left = "0px";
/** @type {string} */
mc.style.top = "0px";
/** @type {number} */
mc.style.zIndex = 5;
/** @type {number} */
mc.width = mww;
/** @type {number} */
mc.height = mhh;
/** @type {string} */
mc.className = "nsi";
document.body.appendChild(mc);
/** @type {string} */
mc.style.display = "none";
/** @type {string} */
mc.style.pointerEvents = "none";
/** @type {!Element} */
var lbh = document.createElement("div");
/** @type {string} */
lbh.className = "nsi";
/** @type {string} */
lbh.style.position = "fixed";
/** @type {string} */
lbh.style.right = "4px";
/** @type {string} */
lbh.style.top = "4px";
/** @type {string} */
lbh.style.textAlign = "center";
/** @type {string} */
lbh.style.width = "255px";
/** @type {string} */
lbh.style.height = "28px";
/** @type {string} */
lbh.style.color = "#ffffff";
/** @type {string} */
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
/** @type {string} */
lbh.style.fontSize = "21px";
/** @type {string} */
lbh.style.fontWeight = "bold";
/** @type {string} */
lbh.style.overflow = "hidden";
/** @type {number} */
lbh.style.opacity = .5;
/** @type {number} */
lbh.style.zIndex = 7;
/** @type {string} */
lbh.style.display = "none";
/** @type {string} */
lbh.style.cursor = "default";
/** @type {string} */
var lstr = "Leaderboard";
if ("de" == lang) {
  /** @type {string} */
  lstr = "Bestenliste";
} else {
  if ("fr" == lang) {
    /** @type {string} */
    lstr = "Gagnants";
  } else {
    if ("pt" == lang) {
      /** @type {string} */
      lstr = "L\u00edderes";
    }
  }
}
/** @type {string} */
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
/** @type {!Element} */
var lbs = document.createElement("div");
/** @type {string} */
lbs.className = "nsi";
/** @type {string} */
lbs.style.position = "fixed";
/** @type {string} */
lbs.style.textAlign = "center";
/** @type {string} */
lbs.style.right = "4px";
/** @type {string} */
lbs.style.top = "32px";
/** @type {string} */
lbs.style.width = "50px";
/** @type {string} */
lbs.style.height = "800px";
/** @type {string} */
lbs.style.color = "#ffffff";
/** @type {string} */
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
/** @type {string} */
lbs.style.fontSize = "12px";
/** @type {string} */
lbs.style.overflow = "hidden";
/** @type {number} */
lbs.style.opacity = .7;
/** @type {number} */
lbs.style.zIndex = 7;
/** @type {string} */
lbs.style.display = "none";
/** @type {string} */
lbs.style.cursor = "default";
/** @type {string} */
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
/** @type {!Element} */
var lbn = document.createElement("div");
/** @type {string} */
lbn.className = "nsi";
/** @type {string} */
lbn.style.position = "fixed";
/** @type {string} */
lbn.style.textAlign = "left";
/** @type {string} */
lbn.style.whiteSpace = "nowrap";
/** @type {string} */
lbn.style.right = "64px";
/** @type {string} */
lbn.style.top = "32px";
/** @type {string} */
lbn.style.width = "150px";
/** @type {string} */
lbn.style.height = "800px";
/** @type {string} */
lbn.style.color = "#ffffff";
/** @type {string} */
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
/** @type {string} */
lbn.style.fontSize = "12px";
/** @type {string} */
lbn.style.overflow = "hidden";
/** @type {number} */
lbn.style.opacity = .7;
/** @type {number} */
lbn.style.zIndex = 8;
/** @type {string} */
lbn.style.display = "none";
/** @type {string} */
lbn.style.cursor = "default";
/** @type {string} */
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
/** @type {!Element} */
var lbp = document.createElement("div");
/** @type {string} */
lbp.className = "nsi";
/** @type {string} */
lbp.style.position = "fixed";
/** @type {string} */
lbp.style.textAlign = "right";
/** @type {string} */
lbp.style.right = "230px";
/** @type {string} */
lbp.style.top = "32px";
/** @type {string} */
lbp.style.width = "30px";
/** @type {string} */
lbp.style.height = "800px";
/** @type {string} */
lbp.style.color = "#ffffff";
/** @type {string} */
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
/** @type {string} */
lbp.style.fontSize = "12px";
/** @type {string} */
lbp.style.overflow = "hidden";
/** @type {number} */
lbp.style.opacity = .7;
/** @type {number} */
lbp.style.zIndex = 9;
/** @type {string} */
lbp.style.display = "none";
/** @type {string} */
lbp.style.cursor = "default";
/** @type {string} */
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
/** @type {!Element} */
var lbf = document.createElement("div");
/** @type {string} */
lbf.className = "nsi";
/** @type {string} */
lbf.style.position = "fixed";
/** @type {string} */
lbf.style.left = "8px";
/** @type {string} */
lbf.style.bottom = "4px";
/** @type {string} */
lbf.style.width = "200px";
/** @type {string} */
lbf.style.height = "37px";
/** @type {string} */
lbf.style.color = "#ffffff";
/** @type {string} */
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
/** @type {string} */
lbf.style.fontSize = "12px";
/** @type {string} */
lbf.style.overflow = "hidden";
/** @type {number} */
lbf.style.opacity = .5;
/** @type {number} */
lbf.style.zIndex = 7;
/** @type {string} */
lbf.style.display = "none";
/** @type {string} */
lbf.style.cursor = "default";
/** @type {string} */
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
/** @type {!Element} */
var vcm = document.createElement("div");
/** @type {string} */
vcm.className = "nsi";
/** @type {string} */
vcm.style.position = "fixed";
/** @type {string} */
vcm.style.left = "8px";
/** @type {string} */
vcm.style.top = "4px";
/** @type {string} */
vcm.style.width = "300px";
/** @type {string} */
vcm.style.height = "228px";
/** @type {string} */
vcm.style.color = "#ffffff";
/** @type {string} */
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
/** @type {string} */
vcm.style.fontSize = "13px";
/** @type {string} */
vcm.style.overflow = "hidden";
/** @type {string} */
vcm.style.wordWrap = "break-word";
/** @type {number} */
vcm.style.opacity = .5;
/** @type {number} */
vcm.style.zIndex = 7;
/** @type {string} */
vcm.style.display = "none";
/** @type {string} */
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
/** @type {!Element} */
var loch = document.createElement("div");
/** @type {string} */
loch.className = "nsi";
/** @type {string} */
loch.style.position = "fixed";
/** @type {string} */
loch.style.right = "16px";
/** @type {string} */
loch.style.bottom = "16px";
/** @type {string} */
loch.style.width = loch.style.height = "104px";
/** @type {number} */
loch.style.zIndex = 10;
/** @type {string} */
loch.style.display = "none";
document.body.appendChild(loch);
/** @type {!Element} */
var loc = document.createElement("img");
/** @type {!Element} */
var lc = document.createElement("canvas");
/** @type {number} */
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
/** @type {string} */
ctx.fillStyle = "#485868";
/** @type {number} */
ctx.shadowBlur = 12;
/** @type {number} */
ctx.shadowOffsetY = 3;
/** @type {string} */
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
/** @type {string} */
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
/** @type {string} */
ctx.strokeStyle = "#202630";
/** @type {number} */
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
/** @type {string} */
loc.className = "nsi";
/** @type {string} */
loc.style.position = "absolute";
/** @type {string} */
loc.style.left = "0px";
/** @type {string} */
loc.style.top = "0px";
/** @type {number} */
loc.style.opacity = .45;
/** @type {number} */
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
/** @type {!Element} */
var asmc = document.createElement("canvas");
/** @type {number} */
asmc.width = 80;
/** @type {number} */
asmc.height = 80;
/** @type {string} */
asmc.className = "nsi";
/** @type {string} */
asmc.style.position = "absolute";
/** @type {string} */
asmc.style.left = asmc.style.top = "12px";
/** @type {number} */
asmc.style.zIndex = 12;
/** @type {number} */
asmc.style.opacity = .25;
loch.appendChild(asmc);
/** @type {!Element} */
var myloc = document.createElement("img");
/** @type {number} */
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
/** @type {string} */
ctx.fillStyle = "#DDDDDD";
/** @type {string} */
ctx.strokeStyle = "#000000";
/** @type {number} */
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
/** @type {string} */
myloc.className = "nsi";
/** @type {string} */
myloc.style.position = "absolute";
/** @type {string} */
myloc.style.left = "0px";
/** @type {string} */
myloc.style.top = "0px";
/** @type {number} */
myloc.style.opacity = 1;
/** @type {number} */
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
/** @type {!Element} */
var bgi2 = document.createElement("canvas");
/** @type {null} */
var bgp2 = null;
/** @type {number} */
var bgw2 = 599;
/** @type {number} */
var bgh2 = 519;
/** @type {!Element} */
var ii = document.createElement("img");
/**
 * @return {undefined}
 */
ii.onload = function() {
  bgi2.width = bgw2;
  bgi2.height = bgh2;
  var ctx = bgi2.getContext("2d");
  try {
    ctx.drawImage(this, 0, 0);
    bgp2 = ctx.createPattern(bgi2, "repeat");
  } catch (c) {
  }
};
/** @type {string} */
ii.src = "/s/bg54.jpg";
/**
 * @return {undefined}
 */
function rdgbg() {
  if (ggbg) {
    if (!gbgmc) {
      /** @type {!Element} */
      gbgmc = document.createElement("canvas");
    }
    gbgmc.width = mww;
    gbgmc.height = mhh;
    var ictx = gbgmc.getContext("2d");
    try {
      ictx.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh);
    } catch (c) {
    }
  }
}
/** @type {boolean} */
var ggbg = false;
/** @type {null} */
var gbgmc = null;
/** @type {!Element} */
var gbgi = document.createElement("img");
/**
 * @return {undefined}
 */
gbgi.onload = function() {
  /** @type {boolean} */
  ggbg = true;
  rdgbg();
};
/** @type {string} */
gbgi.src = "/s/gbg.jpg";
/**
 * @return {?}
 */
function newDeadpool() {
  return {
    os : [],
    end_pos : 0,
    add : function(b) {
      if (this.end_pos == this.os.length) {
        this.os.push(b);
      } else {
        /** @type {!Object} */
        this.os[this.end_pos] = b;
      }
      this.end_pos++;
    },
    get : function() {
      if (1 <= this.end_pos) {
        this.end_pos--;
        var expectedDropEffect = this.os[this.end_pos];
        /** @type {null} */
        this.os[this.end_pos] = null;
        return expectedDropEffect;
      }
      return null;
    }
  };
}
/** @type {!Array<string>} */
var flt_a = "ler did no;gas the;gas all;gas every;panis;panus;paynis;my ass;cut your;heil hit;flick your;fingerba;arse;naked;menstr;eat my;eat as;lick as;suck as;suck my;fuk;dong;cunn;penil;suck a;foresk;puto;puta;suck;mierd;bit.ly;ilbe.co;rxist.co;ween;wein;wien;peen;turd;wank;crap;ur mom;tu madre;chinga;pu$$;ch!ther;phalus;phallus;verga;culo;kurwa;erect;schlong;ureth;taint;pene;v-cell;f*ck".split(";");
/** @type {!Array<string>} */
var flt_g = "buttlov buttf smegm therplu eatmy suckm sucka chither entmpw chlther ch1ther urbate erioorg eri0org erio0rg eri00rg erloorg erl0org erlo0rg erl00rg erioco lithere eriodo odskinpr therbot therb0t ragapw mydik urdik heriobo mistik ki11all agarbots rcomwith brazz iomods cunt suckdik slibot iogamep siibot garb0t herioha itherhac sucksdik sukdik deltaloves suksdik hitler assmunch lickmy hith3r fuqall fukall tobils yourmom yourmother muslimsare allmuslims themuslim jewsare alljews thejews hateblack killall allblacks allwhites lackpeop jccheesey rape hangall murderall".split(" ");
/** @type {!Array} */
var flt_w = ["ass", "kkk", "titty", "titties"];
/**
 * @param {string} s
 * @return {?}
 */
function gdnm(s) {
  if (adm) {
    return true;
  }
  /** @type {string} */
  var string = "";
  /** @type {string} */
  var a = "";
  /** @type {string} */
  var b = "";
  /** @type {number} */
  var w = 0;
  var f;
  /** @type {boolean} */
  var q = false;
  var i;
  /** @type {number} */
  i = 0;
  for (; i < s.length; i++) {
    var c = s.charCodeAt(i);
    if (32 == c) {
      if (!q) {
        /** @type {boolean} */
        q = true;
        /** @type {string} */
        string = string + " ";
      }
    } else {
      /** @type {boolean} */
      q = false;
      /** @type {string} */
      string = string + String.fromCharCode(c);
    }
  }
  /** @type {boolean} */
  q = false;
  /** @type {number} */
  i = 0;
  for (; i < s.length; i++) {
    if (c = s.charCodeAt(i), (f = 48 <= c && 57 >= c) || 65 <= c && 90 >= c || 97 <= c && 122 >= c) {
      if (a = a + String.fromCharCode(c), b = b + String.fromCharCode(c), q = false, f) {
        if (w++, 7 <= w) {
          return false;
        }
      } else {
        /** @type {number} */
        w = 0;
      }
    } else {
      if (!q) {
        /** @type {boolean} */
        q = true;
        /** @type {string} */
        b = b + " ";
      }
    }
  }
  /** @type {string} */
  s = string.toLowerCase();
  /** @type {number} */
  i = flt_a.length - 1;
  for (; 0 <= i; i--) {
    if (0 <= s.indexOf(flt_a[i])) {
      return false;
    }
  }
  /** @type {string} */
  a = a.toLowerCase();
  /** @type {number} */
  i = flt_g.length - 1;
  for (; 0 <= i; i--) {
    if (0 <= a.indexOf(flt_g[i])) {
      return false;
    }
  }
  /** @type {!Array<string>} */
  b = b.toLowerCase().split(" ");
  /** @type {number} */
  i = b.length - 1;
  for (; 0 <= i; i--) {
    /** @type {number} */
    a = flt_w.length - 1;
    for (; 0 <= a; a--) {
      if (b[i] == flt_w[a]) {
        return false;
      }
    }
  }
  return true;
}
var bpx1;
var bpy1;
var bpx2;
var bpy2;
var fpx1;
var fpy1;
var fpx2;
var fpy2;
var apx1;
var apy1;
var apx2;
var apy2;
/** @type {number} */
var sgsc = 16.2 / 14;
/** @type {number} */
var gsc = sgsc;
/** @type {number} */
var nsep = 4.5;
/** @type {number} */
var tasty = 0;
/** @type {boolean} */
var shifty = false;
var rr;
var gg;
var bb;
/** @type {number} */
var render_mode = 2;
if (is_mobile) {
  /** @type {number} */
  render_mode = 1;
}
/** @type {boolean} */
var wumsts = false;
/** @type {number} */
var rank = 0;
/** @type {number} */
var best_rank = 999999999;
/** @type {number} */
var snake_count = 0;
/** @type {number} */
var biggest_snake_count = 0;
var cm1;
/** @type {!Array} */
var snakes = [];
/** @type {!Array} */
var foods = [];
/** @type {number} */
var foods_c = 0;
/** @type {!Array} */
var preys = [];
var points_dp = newDeadpool();
var os = {};
/** @type {number} */
var lsang = 0;
/** @type {boolean} */
var want_e = false;
/** @type {number} */
var last_e_mtm = 0;
/** @type {number} */
var last_accel_mtm = 0;
/** @type {!Array} */
var sectors = [];
/** @type {number} */
var sector_size = 480;
/** @type {number} */
var sector_count_along_edge = 130;
/** @type {number} */
var spangdv = 4.8;
/** @type {number} */
var nsp1 = 4.25;
/** @type {number} */
var nsp2 = .5;
/** @type {number} */
var nsp3 = 12;
/** @type {number} */
var mamu = .033;
/** @type {number} */
var mamu2 = .028;
/** @type {number} */
var cst = .43;
/** @type {!Array} */
var lfas = [];
/** @type {number} */
var lfc = 128;
/** @type {number} */
i = 0;
for (; i < lfc; i++) {
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1)));
  lfas.push(j);
}
/** @type {!Array} */
var rfas = [];
/** @type {number} */
var rfc = 43;
/** @type {number} */
i = 0;
for (; i < rfc; i++) {
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1)));
  rfas.push(j);
}
var fao = {};
/** @type {number} */
var fc = 3;
for (; 100 >= fc; fc++) {
  /** @type {!Array} */
  var fas = [];
  /** @type {number} */
  i = 0;
  for (; i < fc; i++) {
    /** @type {number} */
    j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1)));
    fas.push(j);
  }
  /** @type {!Array} */
  fao["a" + fc] = fas;
}
/** @type {number} */
var hfc = 92;
/** @type {!Float32Array} */
var hfas = new Float32Array(hfc);
/** @type {number} */
i = 0;
for (; i < hfc; i++) {
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1)));
  /** @type {number} */
  hfas[i] = j;
}
/** @type {!Array} */
var afas = [];
/** @type {number} */
var afc = 26;
/** @type {number} */
i = 0;
for (; i < afc; i++) {
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1)));
  afas.push(j);
}
/** @type {number} */
var nlc = 48;
/** @type {!Array} */
var vfas = [];
/** @type {number} */
var vfc = 62;
/** @type {number} */
var fvpos = 0;
/** @type {number} */
var fvtg = 0;
var ovxx;
var ovyy;
/** @type {!Array} */
var fvxs = [];
/** @type {!Array} */
var fvys = [];
/** @type {number} */
i = 0;
for (; i < vfc; i++) {
  /** @type {number} */
  j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1)));
  /** @type {number} */
  j = j + .5 * (.5 * (1 - Math.cos(Math.PI * j)) - j);
  vfas.push(j);
  fvxs.push(0);
  fvys.push(0);
}
/**
 * @param {number} i
 * @return {?}
 */
function pwr(i) {
  /** @type {!Float32Array} */
  var b = new Float32Array(125);
  /** @type {number} */
  var n = 0;
  for (; 125 > n; n++) {
    /** @type {number} */
    b[n] = Math.pow(i, n);
  }
  return b;
}
/**
 * @param {number} y1
 * @return {?}
 */
function pca(y1) {
  /** @type {!Float32Array} */
  var c = new Float32Array(125);
  /** @type {number} */
  var e = 0;
  for (; 125 > e; e++) {
    /** @type {number} */
    c[e] = 1 - Math.pow(1 - y1, e);
  }
  return c;
}
var p1a = pca(.1);
var p35a = pca(.35);
var pwr4 = pwr(.4);
var pwr35 = pwr(.35);
var pwr93 = pwr(.93);
/**
 * @param {number} i
 * @return {undefined}
 */
function setMscps(i) {
  if (i != mscps) {
    /** @type {number} */
    mscps = i;
    /** @type {!Array} */
    fmlts = [];
    /** @type {!Array} */
    fpsls = [];
    /** @type {number} */
    i = 0;
    for (; i <= mscps; i++) {
      if (i >= mscps) {
        fmlts.push(fmlts[i - 1]);
      } else {
        fmlts.push(Math.pow(1 - i / mscps, 2.25));
      }
      if (0 == i) {
        fpsls.push(0);
      } else {
        fpsls.push(fpsls[i - 1] + 1 / fmlts[i - 1]);
      }
    }
    var falseySection = fmlts[fmlts.length - 1];
    var pixelsInRow = fpsls[fpsls.length - 1];
    /** @type {number} */
    i = 0;
    for (; 2048 > i; i++) {
      fmlts.push(falseySection);
      fpsls.push(pixelsInRow);
    }
  }
}
/**
 * @return {undefined}
 */
function startShowGame() {
  /** @type {number} */
  llgmtm = Date.now();
  /** @type {number} */
  login_iv = setInterval(loginFade, 25);
  /** @type {number} */
  mc.style.opacity = 0;
  /** @type {string} */
  mc.style.display = "inline";
  /** @type {number} */
  lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
  /** @type {number} */
  loch.style.opacity = 0;
  /** @type {number} */
  lb_fr = -1;
}
/**
 * @param {!Object} data
 * @param {number} value
 * @param {!Object} index
 * @return {undefined}
 */
function setSkin(data, value, index) {
  /** @type {number} */
  data.rcv = value;
  /** @type {number} */
  data.er = 6;
  /** @type {number} */
  data.pr = 3.5;
  /** @type {number} */
  data.pma = 2.3;
  /** @type {string} */
  data.ec = "#ffffff";
  /** @type {number} */
  data.eca = .75;
  /** @type {number} */
  data.ppa = 1;
  /** @type {string} */
  data.ppc = "#000000";
  /** @type {boolean} */
  data.antenna = false;
  /** @type {boolean} */
  data.one_eye = false;
  /** @type {boolean} */
  data.drez = false;
  /** @type {number} */
  data.ed = 6;
  /** @type {number} */
  data.esp = 6;
  /** @type {number} */
  data.easp = .1;
  /** @type {boolean} */
  data.eac = false;
  /** @type {boolean} */
  data.jyt = false;
  /** @type {boolean} */
  data.slg = false;
  /** @type {number} */
  data.eo = 0;
  /** @type {number} */
  data.swell = 0;
  /** @type {boolean} */
  data.cusk = false;
  if (null != index) {
    var count = index.length;
    if (10 <= count) {
      var n;
      /** @type {number} */
      var j = 8;
      /** @type {!Array} */
      var hashhistory = [];
      var i;
      var hash;
      for (; j < count;) {
        if (i = index[j], j++, j < count && (hash = index[j], j++, 1 == alcsc[hash])) {
          /** @type {number} */
          n = 0;
          for (; n < i; n++) {
            hashhistory.push(hash);
          }
        }
      }
      if (0 < hashhistory.length) {
        /** @type {!Array} */
        data.rbcs = hashhistory;
        value = data.rbcs[0];
        /** @type {number} */
        data.cv = value;
        /** @type {boolean} */
        data.cusk = true;
      }
    }
  }
  /** @type {null} */
  count = index = null;
  /** @type {number} */
  n = 0;
  if (!data.cusk) {
    if (24 == value) {
      /** @type {boolean} */
      data.antenna = true;
      /** @type {number} */
      data.atba = 0;
      /** @type {string} */
      data.atc1 = "#00688c";
      /** @type {string} */
      data.atc2 = "#64c8e7";
      /** @type {boolean} */
      data.atwg = true;
      /** @type {number} */
      data.atia = .35;
      /** @type {boolean} */
      data.abrot = false;
      /** @type {number} */
      j = 8;
      /** @type {!Float32Array} */
      data.atx = new Float32Array(j);
      /** @type {!Float32Array} */
      data.aty = new Float32Array(j);
      /** @type {!Float32Array} */
      data.atvx = new Float32Array(j);
      /** @type {!Float32Array} */
      data.atvy = new Float32Array(j);
      /** @type {!Float32Array} */
      data.atax = new Float32Array(j);
      /** @type {!Float32Array} */
      data.atay = new Float32Array(j);
      --j;
      for (; 0 <= j; j--) {
        data.atx[j] = data.xx;
        data.aty[j] = data.yy;
      }
      data.bulb = acbulb;
      /** @type {number} */
      data.blbx = -10;
      /** @type {number} */
      data.blby = -10;
      /** @type {number} */
      data.blbw = 20;
      /** @type {number} */
      data.blbh = 20;
      /** @type {number} */
      data.bsc = 1;
      /** @type {number} */
      data.blba = .75;
    } else {
      if (25 == value) {
        /** @type {string} */
        data.ec = "#ff5609";
        /** @type {number} */
        data.eca = 1;
        /** @type {boolean} */
        data.antenna = true;
        /** @type {number} */
        data.atba = 0;
        /** @type {string} */
        data.atc1 = "#000000";
        /** @type {string} */
        data.atc2 = "#5630d7";
        /** @type {number} */
        data.atia = 1;
        /** @type {boolean} */
        data.abrot = true;
        /** @type {number} */
        j = 9;
        /** @type {!Float32Array} */
        data.atx = new Float32Array(j);
        /** @type {!Float32Array} */
        data.aty = new Float32Array(j);
        /** @type {!Float32Array} */
        data.atvx = new Float32Array(j);
        /** @type {!Float32Array} */
        data.atvy = new Float32Array(j);
        /** @type {!Float32Array} */
        data.atax = new Float32Array(j);
        /** @type {!Float32Array} */
        data.atay = new Float32Array(j);
        --j;
        for (; 0 <= j; j--) {
          data.atx[j] = data.xx;
          data.aty[j] = data.yy;
        }
        data.bulb = cdbulb;
        /** @type {number} */
        data.blbx = -5;
        /** @type {number} */
        data.blby = -10;
        /** @type {number} */
        data.blbw = 20;
        /** @type {number} */
        data.blbh = 20;
        /** @type {number} */
        data.bsc = 1.6;
        /** @type {number} */
        data.blba = 1;
      } else {
        if (27 == value) {
          /** @type {boolean} */
          data.one_eye = true;
          data.ebi = jsebi;
          /** @type {number} */
          data.ebiw = 64;
          /** @type {number} */
          data.ebih = 64;
          /** @type {number} */
          data.ebisz = 29;
          data.epi = jsepi;
          /** @type {number} */
          data.epiw = 48;
          /** @type {number} */
          data.epih = 48;
          /** @type {number} */
          data.episz = 14;
          /** @type {number} */
          data.pma = 4;
          /** @type {number} */
          data.swell = .06;
        } else {
          if (37 == value) {
            /** @type {number} */
            data.eca = 1;
            /** @type {boolean} */
            data.antenna = true;
            /** @type {number} */
            data.atba = 0;
            /** @type {string} */
            data.atc1 = "#301400";
            /** @type {string} */
            data.atc2 = "#ff6813";
            /** @type {boolean} */
            data.atwg = true;
            /** @type {number} */
            data.atia = .5;
            /** @type {boolean} */
            data.abrot = true;
            /** @type {number} */
            j = 9;
            /** @type {!Float32Array} */
            data.atx = new Float32Array(j);
            /** @type {!Float32Array} */
            data.aty = new Float32Array(j);
            /** @type {!Float32Array} */
            data.atvx = new Float32Array(j);
            /** @type {!Float32Array} */
            data.atvy = new Float32Array(j);
            /** @type {!Float32Array} */
            data.atax = new Float32Array(j);
            /** @type {!Float32Array} */
            data.atay = new Float32Array(j);
            --j;
            for (; 0 <= j; j--) {
              data.atx[j] = data.xx;
              data.aty[j] = data.yy;
            }
            data.bulb = kwkbulb;
            /** @type {number} */
            data.blbx = -39;
            /** @type {number} */
            data.blby = -63;
            /** @type {number} */
            data.blbw = 172;
            /** @type {number} */
            data.blbh = 113;
            /** @type {number} */
            data.bsc = .42;
            /** @type {number} */
            data.blba = 1;
          } else {
            if (39 == value) {
              /** @type {number} */
              data.eca = 1;
              /** @type {boolean} */
              data.antenna = true;
              /** @type {number} */
              data.atba = 0;
              /** @type {string} */
              data.atc1 = "#1d3245";
              /** @type {string} */
              data.atc2 = "#44d4ff";
              /** @type {boolean} */
              data.atwg = true;
              /** @type {number} */
              data.atia = .43;
              /** @type {boolean} */
              data.abrot = true;
              /** @type {number} */
              j = 9;
              /** @type {!Float32Array} */
              data.atx = new Float32Array(j);
              /** @type {!Float32Array} */
              data.aty = new Float32Array(j);
              /** @type {!Float32Array} */
              data.atvx = new Float32Array(j);
              /** @type {!Float32Array} */
              data.atvy = new Float32Array(j);
              /** @type {!Float32Array} */
              data.atax = new Float32Array(j);
              /** @type {!Float32Array} */
              data.atay = new Float32Array(j);
              --j;
              for (; 0 <= j; j--) {
                data.atx[j] = data.xx;
                data.aty[j] = data.yy;
              }
              data.bulb = pwdbulb;
              /** @type {number} */
              data.blbx = -36;
              /** @type {number} */
              data.blby = -100;
              /** @type {number} */
              data.blbw = 190;
              /** @type {number} */
              data.blbh = 188;
              /** @type {number} */
              data.bsc = .25;
              /** @type {number} */
              data.blba = 1;
            } else {
              if (40 == value) {
                /** @type {boolean} */
                data.eac = true;
                /** @type {boolean} */
                data.jyt = true;
              } else {
                if (41 == value) {
                  /** @type {number} */
                  data.ed = 34;
                  /** @type {number} */
                  data.esp = 14;
                  /** @type {number} */
                  data.eca = 1;
                  /** @type {number} */
                  data.eo = 3;
                  /** @type {number} */
                  data.er = 8;
                  /** @type {number} */
                  data.easp = .038;
                  /** @type {number} */
                  data.pr = 4.5;
                  /** @type {number} */
                  data.pma = 3;
                  /** @type {boolean} */
                  data.slg = true;
                } else {
                  if (42 == value) {
                    /** @type {number} */
                    data.eca = 1;
                    /** @type {boolean} */
                    data.antenna = true;
                    /** @type {number} */
                    data.atba = 0;
                    /** @type {string} */
                    data.atc1 = "#002828";
                    /** @type {string} */
                    data.atc2 = "#80d0d0";
                    /** @type {boolean} */
                    data.atwg = true;
                    /** @type {number} */
                    data.atia = .5;
                    /** @type {boolean} */
                    data.abrot = true;
                    /** @type {number} */
                    j = 9;
                    /** @type {!Float32Array} */
                    data.atx = new Float32Array(j);
                    /** @type {!Float32Array} */
                    data.aty = new Float32Array(j);
                    /** @type {!Float32Array} */
                    data.atvx = new Float32Array(j);
                    /** @type {!Float32Array} */
                    data.atvy = new Float32Array(j);
                    /** @type {!Float32Array} */
                    data.atax = new Float32Array(j);
                    /** @type {!Float32Array} */
                    data.atay = new Float32Array(j);
                    --j;
                    for (; 0 <= j; j--) {
                      data.atx[j] = data.xx;
                      data.aty[j] = data.yy;
                    }
                    data.bulb = playbulb;
                    /** @type {number} */
                    data.blbx = -29;
                    /** @type {number} */
                    data.blby = -74;
                    /** @type {number} */
                    data.blbw = 142;
                    /** @type {number} */
                    data.blbh = 149;
                    /** @type {number} */
                    data.bsc = .36;
                    /** @type {number} */
                    data.blba = 1;
                  } else {
                    if (44 == value) {
                      /** @type {string} */
                      data.ec = "#d4d4d4";
                    } else {
                      if (45 == value) {
                        /** @type {number} */
                        data.eca = 1;
                        /** @type {boolean} */
                        data.antenna = true;
                        /** @type {number} */
                        data.atba = 0;
                        /** @type {string} */
                        data.atc1 = "#c02020";
                        /** @type {string} */
                        data.atc2 = "#ff4040";
                        /** @type {boolean} */
                        data.atwg = true;
                        /** @type {number} */
                        data.atia = .5;
                        /** @type {boolean} */
                        data.abrot = true;
                        /** @type {number} */
                        j = 9;
                        /** @type {!Float32Array} */
                        data.atx = new Float32Array(j);
                        /** @type {!Float32Array} */
                        data.aty = new Float32Array(j);
                        /** @type {!Float32Array} */
                        data.atvx = new Float32Array(j);
                        /** @type {!Float32Array} */
                        data.atvy = new Float32Array(j);
                        /** @type {!Float32Array} */
                        data.atax = new Float32Array(j);
                        /** @type {!Float32Array} */
                        data.atay = new Float32Array(j);
                        --j;
                        for (; 0 <= j; j--) {
                          data.atx[j] = data.xx;
                          data.aty[j] = data.yy;
                        }
                        data.bulb = leafbulb;
                        /** @type {number} */
                        data.blbx = -32.11;
                        /** @type {number} */
                        data.blby = -81;
                        /** @type {number} */
                        data.blbw = 143;
                        /** @type {number} */
                        data.blbh = 161;
                        /** @type {number} */
                        data.bsc = .33;
                        /** @type {number} */
                        data.blba = 1;
                      } else {
                        if (46 == value) {
                          /** @type {number} */
                          data.eca = 1;
                          /** @type {boolean} */
                          data.antenna = true;
                          /** @type {number} */
                          data.atba = 0;
                          /** @type {string} */
                          data.atc1 = "#c02020";
                          /** @type {string} */
                          data.atc2 = "#ff4040";
                          /** @type {boolean} */
                          data.atwg = true;
                          /** @type {number} */
                          data.atia = .5;
                          /** @type {boolean} */
                          data.abrot = true;
                          /** @type {number} */
                          j = 9;
                          /** @type {!Float32Array} */
                          data.atx = new Float32Array(j);
                          /** @type {!Float32Array} */
                          data.aty = new Float32Array(j);
                          /** @type {!Float32Array} */
                          data.atvx = new Float32Array(j);
                          /** @type {!Float32Array} */
                          data.atvy = new Float32Array(j);
                          /** @type {!Float32Array} */
                          data.atax = new Float32Array(j);
                          /** @type {!Float32Array} */
                          data.atay = new Float32Array(j);
                          --j;
                          for (; 0 <= j; j--) {
                            data.atx[j] = data.xx;
                            data.aty[j] = data.yy;
                          }
                          data.bulb = swissbulb;
                          /** @type {number} */
                          data.blbx = -31.78;
                          /** @type {number} */
                          data.blby = -70;
                          /** @type {number} */
                          data.blbw = 140;
                          /** @type {number} */
                          data.blbh = 140;
                          /** @type {number} */
                          data.bsc = .285;
                          /** @type {number} */
                          data.blba = 1;
                        } else {
                          if (47 == value) {
                            /** @type {number} */
                            data.eca = 1;
                            /** @type {boolean} */
                            data.antenna = true;
                            /** @type {number} */
                            data.atba = 0;
                            /** @type {string} */
                            data.atc1 = "#3030ff";
                            /** @type {string} */
                            data.atc2 = "#6060ff";
                            /** @type {boolean} */
                            data.atwg = true;
                            /** @type {number} */
                            data.atia = .5;
                            /** @type {boolean} */
                            data.abrot = true;
                            /** @type {number} */
                            j = 9;
                            /** @type {!Float32Array} */
                            data.atx = new Float32Array(j);
                            /** @type {!Float32Array} */
                            data.aty = new Float32Array(j);
                            /** @type {!Float32Array} */
                            data.atvx = new Float32Array(j);
                            /** @type {!Float32Array} */
                            data.atvy = new Float32Array(j);
                            /** @type {!Float32Array} */
                            data.atax = new Float32Array(j);
                            /** @type {!Float32Array} */
                            data.atay = new Float32Array(j);
                            --j;
                            for (; 0 <= j; j--) {
                              data.atx[j] = data.xx;
                              data.aty[j] = data.yy;
                            }
                            data.bulb = moldovabulb;
                            /** @type {number} */
                            data.blbx = -34.2;
                            /** @type {number} */
                            data.blby = -69;
                            /** @type {number} */
                            data.blbw = 162;
                            /** @type {number} */
                            data.blbh = 137;
                            /** @type {number} */
                            data.bsc = .33;
                            /** @type {number} */
                            data.blba = 1;
                          } else {
                            if (48 == value) {
                              /** @type {number} */
                              data.eca = 1;
                              /** @type {boolean} */
                              data.antenna = true;
                              /** @type {number} */
                              data.atba = 0;
                              /** @type {string} */
                              data.atc1 = "#c02020";
                              /** @type {string} */
                              data.atc2 = "#ff4040";
                              /** @type {boolean} */
                              data.atwg = true;
                              /** @type {number} */
                              data.atia = .75;
                              /** @type {boolean} */
                              data.abrot = true;
                              /** @type {number} */
                              j = 9;
                              /** @type {!Float32Array} */
                              data.atx = new Float32Array(j);
                              /** @type {!Float32Array} */
                              data.aty = new Float32Array(j);
                              /** @type {!Float32Array} */
                              data.atvx = new Float32Array(j);
                              /** @type {!Float32Array} */
                              data.atvy = new Float32Array(j);
                              /** @type {!Float32Array} */
                              data.atax = new Float32Array(j);
                              /** @type {!Float32Array} */
                              data.atay = new Float32Array(j);
                              --j;
                              for (; 0 <= j; j--) {
                                data.atx[j] = data.xx;
                                data.aty[j] = data.yy;
                              }
                              data.bulb = vietnambulb;
                              /** @type {number} */
                              data.blbx = -31.45;
                              /** @type {number} */
                              data.blby = -71;
                              /** @type {number} */
                              data.blbw = 137;
                              /** @type {number} */
                              data.blbh = 142;
                              /** @type {number} */
                              data.bsc = .3;
                              /** @type {number} */
                              data.blba = 1;
                            } else {
                              if (49 == value) {
                                /** @type {number} */
                                data.eca = 1;
                                /** @type {boolean} */
                                data.antenna = true;
                                /** @type {number} */
                                data.atba = 0;
                                /** @type {string} */
                                data.atc1 = "#64accf";
                                /** @type {string} */
                                data.atc2 = "#84dcff";
                                /** @type {boolean} */
                                data.atwg = true;
                                /** @type {number} */
                                data.atia = .7;
                                /** @type {boolean} */
                                data.abrot = true;
                                /** @type {number} */
                                j = 11;
                                /** @type {!Float32Array} */
                                data.atx = new Float32Array(j);
                                /** @type {!Float32Array} */
                                data.aty = new Float32Array(j);
                                /** @type {!Float32Array} */
                                data.atvx = new Float32Array(j);
                                /** @type {!Float32Array} */
                                data.atvy = new Float32Array(j);
                                /** @type {!Float32Array} */
                                data.atax = new Float32Array(j);
                                /** @type {!Float32Array} */
                                data.atay = new Float32Array(j);
                                --j;
                                for (; 0 <= j; j--) {
                                  data.atx[j] = data.xx;
                                  data.aty[j] = data.yy;
                                }
                                data.bulb = argentinabulb;
                                /** @type {number} */
                                data.blbx = -33.1;
                                /** @type {number} */
                                data.blby = -76;
                                /** @type {number} */
                                data.blbw = 152;
                                /** @type {number} */
                                data.blbh = 152;
                                /** @type {number} */
                                data.bsc = .3;
                                /** @type {number} */
                                data.blba = 1;
                              } else {
                                if (59 == value) {
                                  /** @type {number} */
                                  data.eca = 1;
                                  /** @type {boolean} */
                                  data.antenna = true;
                                  /** @type {number} */
                                  data.atba = 0;
                                  /** @type {string} */
                                  data.atc1 = "#886818";
                                  /** @type {string} */
                                  data.atc2 = "#ffe040";
                                  /** @type {boolean} */
                                  data.atwg = true;
                                  /** @type {number} */
                                  data.atia = .55;
                                  /** @type {boolean} */
                                  data.abrot = true;
                                  /** @type {number} */
                                  j = 11;
                                  /** @type {!Float32Array} */
                                  data.atx = new Float32Array(j);
                                  /** @type {!Float32Array} */
                                  data.aty = new Float32Array(j);
                                  /** @type {!Float32Array} */
                                  data.atvx = new Float32Array(j);
                                  /** @type {!Float32Array} */
                                  data.atvy = new Float32Array(j);
                                  /** @type {!Float32Array} */
                                  data.atax = new Float32Array(j);
                                  /** @type {!Float32Array} */
                                  data.atay = new Float32Array(j);
                                  --j;
                                  for (; 0 <= j; j--) {
                                    data.atx[j] = data.xx;
                                    data.aty[j] = data.yy;
                                  }
                                  data.bulb = movbulb;
                                  /** @type {number} */
                                  data.blbx = -41;
                                  /** @type {number} */
                                  data.blby = -91;
                                  /** @type {number} */
                                  data.blbw = 142;
                                  /** @type {number} */
                                  data.blbh = 163;
                                  /** @type {number} */
                                  data.bsc = .3;
                                  /** @type {number} */
                                  data.blba = 1;
                                } else {
                                  if (60 == value) {
                                    /** @type {boolean} */
                                    data.drez = true;
                                  } else {
                                    if (62 == value) {
                                      /** @type {number} */
                                      data.eca = 1;
                                      /** @type {boolean} */
                                      data.antenna = true;
                                      /** @type {number} */
                                      data.atba = 0;
                                      /** @type {string} */
                                      data.atc1 = "#402200";
                                      /** @type {string} */
                                      data.atc2 = "#ffc20f";
                                      /** @type {boolean} */
                                      data.atwg = true;
                                      /** @type {number} */
                                      data.atia = .5;
                                      /** @type {boolean} */
                                      data.abrot = true;
                                      /** @type {number} */
                                      j = 9;
                                      /** @type {!Float32Array} */
                                      data.atx = new Float32Array(j);
                                      /** @type {!Float32Array} */
                                      data.aty = new Float32Array(j);
                                      /** @type {!Float32Array} */
                                      data.atvx = new Float32Array(j);
                                      /** @type {!Float32Array} */
                                      data.atvy = new Float32Array(j);
                                      /** @type {!Float32Array} */
                                      data.atax = new Float32Array(j);
                                      /** @type {!Float32Array} */
                                      data.atay = new Float32Array(j);
                                      --j;
                                      for (; 0 <= j; j--) {
                                        data.atx[j] = data.xx;
                                        data.aty[j] = data.yy;
                                      }
                                      data.bulb = bonkbulb;
                                      /** @type {number} */
                                      data.blbx = -29;
                                      /** @type {number} */
                                      data.blby = -89;
                                      /** @type {number} */
                                      data.blbw = 173;
                                      /** @type {number} */
                                      data.blbh = 178;
                                      /** @type {number} */
                                      data.bsc = .25;
                                      /** @type {number} */
                                      data.blba = 1;
                                    } else {
                                      if (63 == value) {
                                        /** @type {string} */
                                        data.ec = "#000000";
                                        /** @type {number} */
                                        data.eca = 1;
                                        /** @type {string} */
                                        data.ppc = "#CCCCCC";
                                        /** @type {number} */
                                        data.pr = 2.5;
                                      } else {
                                        if (64 == value) {
                                          /** @type {string} */
                                          data.ec = "#FFFF80";
                                          /** @type {number} */
                                          data.eca = 1;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    /** @type {null} */
    j = null;
    if (9 == value) {
      /** @type {!Array} */
      j = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    } else {
      if (10 == value) {
        /** @type {!Array} */
        j = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7];
      } else {
        if (11 == value) {
          /** @type {!Array} */
          j = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12];
        } else {
          if (12 == value) {
            /** @type {!Array} */
            j = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13];
          } else {
            if (13 == value) {
              /** @type {!Array} */
              j = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7];
            } else {
              if (14 == value) {
                /** @type {!Array} */
                j = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7];
              } else {
                if (15 == value) {
                  /** @type {!Array} */
                  j = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                } else {
                  if (16 == value) {
                    /** @type {!Array} */
                    j = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4];
                  } else {
                    if (17 == value) {
                      /** @type {!Array} */
                      j = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16];
                    } else {
                      if (18 == value) {
                        /** @type {!Array} */
                        j = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9];
                      } else {
                        if (19 == value) {
                          /** @type {!Array} */
                          j = [9];
                        } else {
                          if (20 == value) {
                            /** @type {!Array} */
                            j = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0];
                          } else {
                            if (21 == value) {
                              /** @type {!Array} */
                              j = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18];
                            } else {
                              if (22 == value) {
                                /** @type {!Array} */
                                j = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13];
                              } else {
                                if (23 == value) {
                                  /** @type {!Array} */
                                  j = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7];
                                } else {
                                  if (24 == value) {
                                    /** @type {!Array} */
                                    j = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18];
                                  } else {
                                    if (25 == value) {
                                      /** @type {!Array} */
                                      j = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22];
                                    } else {
                                      if (26 == value) {
                                        /** @type {!Array} */
                                        j = [24];
                                      } else {
                                        if (27 == value) {
                                          /** @type {!Array} */
                                          j = [25];
                                        } else {
                                          if (28 == value) {
                                            /** @type {!Array} */
                                            j = [18, 18, 18, 18, 18, 18, 18, 25, 25, 25, 25, 25, 25, 25, 7, 7, 7, 7, 7, 7, 7];
                                          } else {
                                            if (29 == value) {
                                              /** @type {!Array} */
                                              j = [11, 11, 4, 11, 11, 11, 11, 4, 11, 11];
                                            } else {
                                              if (30 == value) {
                                                /** @type {!Array} */
                                                j = [10, 10, 19, 20, 10, 10, 20, 19];
                                              } else {
                                                if (31 == value) {
                                                  /** @type {!Array} */
                                                  j = [10, 10];
                                                } else {
                                                  if (32 == value) {
                                                    /** @type {!Array} */
                                                    j = [20, 20];
                                                  } else {
                                                    if (33 == value) {
                                                      /** @type {!Array} */
                                                      j = [12, 11, 11];
                                                    } else {
                                                      if (34 == value) {
                                                        /** @type {!Array} */
                                                        j = [7, 7, 9, 13, 13, 9, 16, 16, 9, 12, 12, 9, 7, 7, 9, 16, 16, 9];
                                                      } else {
                                                        if (35 == value) {
                                                          /** @type {!Array} */
                                                          j = [7, 7, 9, 9, 6, 6, 9, 9];
                                                        } else {
                                                          if (36 == value) {
                                                            /** @type {!Array} */
                                                            j = [16, 16, 9, 9, 15, 15, 9, 9];
                                                          } else {
                                                            if (37 == value) {
                                                              /** @type {!Array} */
                                                              j = [22];
                                                            } else {
                                                              if (38 == value) {
                                                                /** @type {!Array} */
                                                                j = [18];
                                                              } else {
                                                                if (39 == value) {
                                                                  /** @type {!Array} */
                                                                  j = [23];
                                                                } else {
                                                                  if (40 == value) {
                                                                    /** @type {!Array} */
                                                                    j = [26];
                                                                  } else {
                                                                    if (41 == value) {
                                                                      /** @type {!Array} */
                                                                      j = [27];
                                                                    } else {
                                                                      if (42 == value) {
                                                                        /** @type {!Array} */
                                                                        j = [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7];
                                                                      } else {
                                                                        if (43 == value) {
                                                                          /** @type {!Array} */
                                                                          j = [28];
                                                                        } else {
                                                                          if (44 == value) {
                                                                            /** @type {!Array} */
                                                                            j = [29];
                                                                          } else {
                                                                            if (45 == value) {
                                                                              /** @type {!Array} */
                                                                              j = [7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7];
                                                                            } else {
                                                                              if (46 == value) {
                                                                                /** @type {!Array} */
                                                                                j = [7];
                                                                              } else {
                                                                                if (47 == value) {
                                                                                  /** @type {!Array} */
                                                                                  j = [16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7, 7, 16, 16, 16, 16];
                                                                                } else {
                                                                                  if (48 == value) {
                                                                                    /** @type {!Array} */
                                                                                    j = [7];
                                                                                  } else {
                                                                                    if (49 == value) {
                                                                                      /** @type {!Array} */
                                                                                      j = [23, 23, 23, 23, 23, 9, 9, 9, 9, 9, 9, 9, 9, 23, 23];
                                                                                    } else {
                                                                                      if (50 == value) {
                                                                                        /** @type {!Array} */
                                                                                        j = [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 7, 7, 7, 7, 7, 7, 7, 7];
                                                                                      } else {
                                                                                        if (51 == value) {
                                                                                          /** @type {!Array} */
                                                                                          j = [7, 7, 7, 9, 9, 16, 16, 16, 16, 16, 16, 9, 9];
                                                                                        } else {
                                                                                          if (52 == value) {
                                                                                            /** @type {!Array} */
                                                                                            j = [7, 7, 7, 7, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7];
                                                                                          } else {
                                                                                            if (53 == value) {
                                                                                              /** @type {!Array} */
                                                                                              j = [30];
                                                                                            } else {
                                                                                              if (54 == value) {
                                                                                                /** @type {!Array} */
                                                                                                j = [31];
                                                                                              } else {
                                                                                                if (55 == value) {
                                                                                                  /** @type {!Array} */
                                                                                                  j = [32];
                                                                                                } else {
                                                                                                  if (56 == value) {
                                                                                                    /** @type {!Array} */
                                                                                                    j = [33];
                                                                                                  } else {
                                                                                                    if (57 == value) {
                                                                                                      /** @type {!Array} */
                                                                                                      j = [34];
                                                                                                    } else {
                                                                                                      if (58 == value) {
                                                                                                        /** @type {!Array} */
                                                                                                        j = [35];
                                                                                                      } else {
                                                                                                        if (59 == value) {
                                                                                                          /** @type {!Array} */
                                                                                                          j = [18];
                                                                                                        } else {
                                                                                                          if (60 == value) {
                                                                                                            /** @type {!Array} */
                                                                                                            j = [36];
                                                                                                            /** @type {number} */
                                                                                                            index = 37;
                                                                                                            /** @type {number} */
                                                                                                            count = 38;
                                                                                                            /** @type {number} */
                                                                                                            n = 30;
                                                                                                          } else {
                                                                                                            if (61 == value) {
                                                                                                              /** @type {!Array} */
                                                                                                              j = [30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 33, 33, 33, 33, 33, 33, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 34, 34, 34, 34, 34, 34];
                                                                                                            } else {
                                                                                                              if (62 == value) {
                                                                                                                /** @type {!Array} */
                                                                                                                j = [17, 17, 17, 17, 17, 39, 39, 39, 39, 39];
                                                                                                              } else {
                                                                                                                if (63 == value) {
                                                                                                                  /** @type {!Array} */
                                                                                                                  j = [7, 7, 7, 11, 11, 11];
                                                                                                                } else {
                                                                                                                  if (64 == value) {
                                                                                                                    /** @type {!Array} */
                                                                                                                    j = [16, 16, 11, 11];
                                                                                                                  } else {
                                                                                                                    if (65 == value) {
                                                                                                                      /** @type {!Array} */
                                                                                                                      j = [4, 4, 4, 4, 9, 9, 9, 9];
                                                                                                                    } else {
                                                                                                                      /** @type {number} */
                                                                                                                      value = value % 9;
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (j) {
      value = j[0];
    }
    /** @type {null} */
    data.rbcs = j;
    /** @type {number} */
    data.cv = value;
  }
  /** @type {!Object} */
  data.fdhc = index;
  /** @type {null} */
  data.fdtc = count;
  /** @type {number} */
  data.fdl = n;
}
/**
 * @param {string} path
 * @param {string} url
 * @param {number} value
 * @param {number} i
 * @param {number} object
 * @param {!Object} parent
 * @param {!Object} num
 * @return {?}
 */
function newSnake(path, url, value, i, object, parent, num) {
  var data = {};
  /** @type {string} */
  data.id = path;
  /** @type {string} */
  data.xx = url;
  /** @type {number} */
  data.yy = value;
  setSkin(data, i, num);
  i = data.cv;
  /** @type {number} */
  data.fnfr = 0;
  /** @type {number} */
  data.na = 1;
  /** @type {number} */
  data.chl = 0;
  /** @type {number} */
  data.tsp = 0;
  /** @type {number} */
  data.sfr = 0;
  /** @type {number} */
  data.accessory = -1;
  /** @type {number} */
  data.rr = Math.min(255, rrs[i] + Math.floor(20 * Math.random()));
  /** @type {number} */
  data.gg = Math.min(255, ggs[i] + Math.floor(20 * Math.random()));
  /** @type {number} */
  data.bb = Math.min(255, bbs[i] + Math.floor(20 * Math.random()));
  /** @type {string} */
  path = "00" + Math.min(255, Math.max(0, Math.round(data.rr))).toString(16);
  /** @type {string} */
  url = "00" + Math.min(255, Math.max(0, Math.round(data.gg))).toString(16);
  /** @type {string} */
  value = "00" + Math.min(255, Math.max(0, Math.round(data.bb))).toString(16);
  /** @type {string} */
  path = path.substr(path.length - 2);
  /** @type {string} */
  url = url.substr(url.length - 2);
  /** @type {string} */
  value = value.substr(value.length - 2);
  /** @type {string} */
  data.cs = "#" + path + url + value;
  /** @type {string} */
  path = "00" + Math.min(255, Math.max(0, Math.round(.4 * data.rr))).toString(16);
  /** @type {string} */
  url = "00" + Math.min(255, Math.max(0, Math.round(.4 * data.gg))).toString(16);
  /** @type {string} */
  value = "00" + Math.min(255, Math.max(0, Math.round(.4 * data.bb))).toString(16);
  /** @type {string} */
  path = path.substr(path.length - 2);
  /** @type {string} */
  url = url.substr(url.length - 2);
  /** @type {string} */
  value = value.substr(value.length - 2);
  /** @type {string} */
  data.cs04 = "#" + path + url + value;
  /** @type {string} */
  path = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + data.rr)))).toString(16);
  /** @type {string} */
  url = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + data.gg)))).toString(16);
  /** @type {string} */
  value = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + data.bb)))).toString(16);
  /** @type {string} */
  path = path.substr(path.length - 2);
  /** @type {string} */
  url = url.substr(url.length - 2);
  /** @type {string} */
  value = value.substr(value.length - 2);
  /** @type {string} */
  data.csw = "#" + path + url + value;
  /** @type {number} */
  data.sc = 1;
  data.ssp = nsp1 + nsp2 * data.sc;
  data.fsp = data.ssp + .1;
  data.msp = nsp3;
  /** @type {!Float32Array} */
  data.fxs = new Float32Array(rfc);
  /** @type {!Float32Array} */
  data.fys = new Float32Array(rfc);
  /** @type {!Float32Array} */
  data.fchls = new Float32Array(rfc);
  /** @type {number} */
  data.fpos = 0;
  /** @type {number} */
  data.ftg = 0;
  /** @type {number} */
  data.fx = 0;
  /** @type {number} */
  data.fy = 0;
  /** @type {number} */
  data.fchl = 0;
  /** @type {!Float32Array} */
  data.fas = new Float32Array(afc);
  /** @type {number} */
  data.fapos = 0;
  /** @type {number} */
  data.fatg = 0;
  /** @type {number} */
  data.fa = 0;
  /** @type {number} */
  data.ehang = object;
  /** @type {number} */
  data.wehang = object;
  /** @type {number} */
  data.ehl = 1;
  /** @type {number} */
  data.msl = 42;
  /** @type {number} */
  data.fam = 0;
  /** @type {number} */
  data.ang = object;
  /** @type {number} */
  data.eang = object;
  /** @type {number} */
  data.wang = object;
  /** @type {number} */
  data.rex = 0;
  /** @type {number} */
  data.rey = 0;
  /** @type {number} */
  data.sp = 2;
  if (parent) {
    data.lnp = parent[parent.length - 1];
    /** @type {!Object} */
    data.pts = parent;
    data.sct = parent.length;
    if (parent[0].dying) {
      data.sct--;
    }
  } else {
    /** @type {!Array} */
    data.pts = [];
    /** @type {number} */
    data.sct = 0;
  }
  /** @type {number} */
  data.flpos = 0;
  /** @type {!Float32Array} */
  data.fls = new Float32Array(lfc);
  /** @type {number} */
  data.fl = 0;
  /** @type {number} */
  data.fltg = 0;
  data.tl = data.sct + data.fam;
  data.cfl = data.tl;
  /** @type {number} */
  data.scang = 1;
  /** @type {number} */
  data.dead_amt = 0;
  /** @type {number} */
  data.alive_amt = 0;
  snakes.splice(0, 0, data);
  return os["s" + data.id] = data;
}
/**
 * @param {!Object} data
 * @return {?}
 */
function getBuildSkinData(data) {
  /** @type {!Array} */
  var dst = [];
  dst.push(255);
  dst.push(255);
  dst.push(255);
  dst.push(0);
  dst.push(0);
  dst.push(0);
  dst.push(Math.floor(256 * Math.random()));
  dst.push(Math.floor(256 * Math.random()));
  var i;
  var patchLen = build_segments.length;
  if (0 < patchLen) {
    var w2 = build_segments[0];
    /** @type {number} */
    var att = 0;
    /** @type {number} */
    i = 0;
    for (; i < patchLen; i++) {
      var weft2 = build_segments[i];
      if (weft2 != w2) {
        if (255 < att) {
          /** @type {number} */
          att = 255;
        }
        dst.push(att);
        dst.push(w2);
        /** @type {number} */
        att = 0;
        w2 = weft2;
      }
      att++;
    }
    if (0 < att) {
      dst.push(att);
      dst.push(w2);
    }
  }
  if (data) {
    dst.push(250);
    dst.push(40);
  }
  /** @type {!Uint8Array} */
  data = new Uint8Array(dst.length);
  /** @type {number} */
  i = 0;
  for (; i < dst.length; i++) {
    data[i] = dst[i];
  }
  return data;
}
/**
 * @param {!Object} t
 * @return {undefined}
 */
function snl(t) {
  var h = t.tl;
  t.tl = t.sct + t.fam;
  /** @type {number} */
  h = t.tl - h;
  var i = t.flpos;
  /** @type {number} */
  var w = 0;
  for (; w < lfc; w++) {
    t.fls[i] -= h * lfas[w];
    i++;
    if (i >= lfc) {
      /** @type {number} */
      i = 0;
    }
  }
  t.fl = t.fls[t.flpos];
  t.fltg = lfc;
  if (t == snake) {
    /** @type {boolean} */
    wumsts = true;
  }
}
/**
 * @param {!Object} options
 * @param {number} value
 * @param {number} context
 * @param {number} config
 * @param {boolean} isServer
 * @param {boolean} cmd
 * @return {?}
 */
function newFood(options, value, context, config, isServer, cmd) {
  var data = {};
  /** @type {!Object} */
  data.id = options;
  /** @type {number} */
  data.xx = value;
  /** @type {number} */
  data.yy = context;
  /** @type {number} */
  data.rx = value;
  /** @type {number} */
  data.ry = context;
  /** @type {number} */
  data.rsp = isServer ? 2 : 1;
  /** @type {boolean} */
  data.cv = cmd;
  /** @type {number} */
  data.rad = 1E-5;
  /** @type {number} */
  data.sz = config;
  /** @type {number} */
  data.lrrad = data.rad;
  options = per_color_imgs[data.cv];
  /** @type {number} */
  data.cv2 = Math.floor(options.ic * gsc * data.sz / 16.5);
  if (0 > data.cv2) {
    /** @type {number} */
    data.cv2 = 0;
  }
  if (data.cv2 >= options.ic) {
    /** @type {number} */
    data.cv2 = options.ic - 1;
  }
  data.fi = options.imgs[data.cv2];
  data.fw = options.fws[data.cv2];
  data.fh = options.fhs[data.cv2];
  data.fw2 = options.fw2s[data.cv2];
  data.fh2 = options.fh2s[data.cv2];
  data.ofi = options.oimgs[data.cv2];
  data.ofw = options.ofws[data.cv2];
  data.ofh = options.ofhs[data.cv2];
  data.ofw2 = options.ofw2s[data.cv2];
  data.ofh2 = options.ofh2s[data.cv2];
  /** @type {number} */
  data.gcv = Math.floor(options.ic * gsc * (.25 + .75 * data.sz / 16.5));
  if (0 > data.gcv) {
    /** @type {number} */
    data.gcv = 0;
  }
  if (data.gcv >= options.ic) {
    /** @type {number} */
    data.gcv = options.ic - 1;
  }
  data.gfi = options.gimgs[data.gcv];
  data.gfw = options.gfws[data.gcv];
  data.gfh = options.gfhs[data.gcv];
  data.gfw2 = options.gfw2s[data.gcv];
  data.gfh2 = options.gfh2s[data.gcv];
  /** @type {number} */
  data.g2cv = Math.floor(options.ic * gsc * 2 * (.25 + .75 * data.sz / 16.5));
  if (0 > data.g2cv) {
    /** @type {number} */
    data.g2cv = 0;
  }
  if (data.g2cv >= options.ic) {
    /** @type {number} */
    data.g2cv = options.ic - 1;
  }
  data.g2fi = options.gimgs[data.g2cv];
  data.g2fw = options.gfws[data.g2cv];
  data.g2fh = options.gfhs[data.g2cv];
  data.g2fw2 = options.gfw2s[data.g2cv];
  data.g2fh2 = options.gfh2s[data.g2cv];
  /** @type {number} */
  data.fr = 0;
  /** @type {number} */
  data.gfr = 64 * Math.random();
  /** @type {number} */
  data.gr = .65 + .1 * data.sz;
  /** @type {number} */
  data.wsp = .0225 * (2 * Math.random() - 1);
  /** @type {number} */
  data.eaten_fr = 0;
  return foods[foods_c++] = data;
}
/**
 * @param {string} g
 * @param {number} b
 * @param {number} name
 * @param {number} width
 * @param {boolean} i
 * @param {string} result
 * @param {number} q
 * @param {number} main
 * @param {string} value
 * @return {?}
 */
function newPrey(g, b, name, width, i, result, q, main, value) {
  var self = {};
  /** @type {string} */
  self.id = g;
  /** @type {number} */
  self.xx = b;
  /** @type {number} */
  self.yy = name;
  /** @type {number} */
  self.rad = 1E-5;
  /** @type {number} */
  self.sz = width;
  /** @type {boolean} */
  self.cv = i;
  /** @type {string} */
  self.dir = result;
  /** @type {number} */
  self.wang = q;
  /** @type {number} */
  self.ang = main;
  /** @type {string} */
  self.sp = value;
  /** @type {number} */
  self.fr = 0;
  /** @type {number} */
  self.gfr = 64 * Math.random();
  /** @type {number} */
  self.gr = .5 + .15 * Math.random() + .1 * self.sz;
  /** @type {number} */
  self.rr = Math.min(255, rrs[i]);
  /** @type {number} */
  self.gg = Math.min(255, ggs[i]);
  /** @type {number} */
  self.bb = Math.min(255, bbs[i]);
  /** @type {string} */
  g = "00" + Math.min(255, Math.max(0, Math.round(self.rr))).toString(16);
  /** @type {string} */
  b = "00" + Math.min(255, Math.max(0, Math.round(self.gg))).toString(16);
  /** @type {string} */
  name = "00" + Math.min(255, Math.max(0, Math.round(self.bb))).toString(16);
  /** @type {string} */
  g = g.substr(g.length - 2);
  /** @type {string} */
  b = b.substr(b.length - 2);
  /** @type {string} */
  name = name.substr(name.length - 2);
  /** @type {string} */
  self.cs = "#" + g + b + name;
  /** @type {number} */
  self.cv2 = Math.floor(per_color_imgs[self.cv].pr_imgs.length * gsc * self.sz / 9);
  if (0 > self.cv2) {
    /** @type {number} */
    self.cv2 = 0;
  }
  if (self.cv2 >= per_color_imgs[self.cv].pr_imgs.length) {
    /** @type {number} */
    self.cv2 = per_color_imgs[self.cv].pr_imgs.length - 1;
  }
  self.fi = per_color_imgs[self.cv].pr_imgs[self.cv2];
  self.fw = per_color_imgs[self.cv].pr_fws[self.cv2];
  self.fh = per_color_imgs[self.cv].pr_fhs[self.cv2];
  self.fw2 = per_color_imgs[self.cv].pr_fw2s[self.cv2];
  self.fh2 = per_color_imgs[self.cv].pr_fh2s[self.cv2];
  /** @type {number} */
  self.gcv = per_color_imgs[self.cv].gimgs.length - 1;
  self.gfi = per_color_imgs[self.cv].gimgs[self.gcv];
  self.gfw = per_color_imgs[self.cv].gfws[self.gcv];
  self.gfh = per_color_imgs[self.cv].gfhs[self.gcv];
  self.gfw2 = per_color_imgs[self.cv].gfw2s[self.gcv];
  self.gfh2 = per_color_imgs[self.cv].gfh2s[self.gcv];
  /** @type {!Float32Array} */
  self.fxs = new Float32Array(rfc);
  /** @type {!Float32Array} */
  self.fys = new Float32Array(rfc);
  /** @type {number} */
  self.fpos = 0;
  /** @type {number} */
  self.ftg = 0;
  /** @type {number} */
  self.fx = 0;
  /** @type {number} */
  self.fy = 0;
  /** @type {boolean} */
  self.eaten = false;
  /** @type {number} */
  self.eaten_fr = 0;
  preys.push(self);
  return self;
}
/** @type {!Element} */
var ecmc = document.createElement("canvas");
/** @type {number} */
ecmc.width = ecmc.height = 48;
ctx = ecmc.getContext("2d");
/** @type {string} */
ctx.fillStyle = "#000000";
ctx.moveTo(36, 6);
ctx.lineTo(30, 6);
ctx.quadraticCurveTo(0, 24, 30, 42);
ctx.lineTo(36, 42);
ctx.quadraticCurveTo(14, 24, 36, 6);
ctx.fill();
/** @type {!Element} */
var kdmc = document.createElement("canvas");
/** @type {number} */
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
/** @type {string} */
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
/** @type {number} */
var sz = 52;
/** @type {!Element} */
var komc = document.createElement("canvas");
/** @type {number} */
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
/** @type {number} */
p = yy = xx = 0;
for (; p < l; p = p + 4) {
  /** @type {number} */
  v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16);
  /** @type {number} */
  v = 4 >= v ? 1 - v / 4 : 0;
  /** @type {number} */
  v = v * .8;
  /** @type {number} */
  imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  /** @type {number} */
  imgd[p + 3] = Math.floor(255 * v);
  xx++;
  if (xx >= sz) {
    /** @type {number} */
    xx = 0;
    yy++;
  }
}
ctx.putImageData(map, 0, 0);
if (iioc && testing) {
  var u = komc.toDataURL();
  /** @type {!Element} */
  ii = document.createElement("img");
  ii.src = u;
  /** @type {!Element} */
  komc = ii;
}
/** @type {number} */
sz = 62;
/** @type {!Element} */
var ksmc = document.createElement("canvas");
/** @type {number} */
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
/** @type {number} */
p = yy = xx = 0;
for (; p < l; p = p + 4) {
  /** @type {number} */
  v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15;
  /** @type {number} */
  v = v * .1;
  if (0 > v) {
    /** @type {number} */
    v = -v;
  }
  if (1 < v) {
    /** @type {number} */
    v = 1;
  }
  /** @type {number} */
  v = 1 - v;
  /** @type {number} */
  v = v * .25;
  /** @type {number} */
  imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  /** @type {number} */
  imgd[p + 3] = Math.floor(255 * v);
  xx++;
  if (xx >= sz) {
    /** @type {number} */
    xx = 0;
    yy++;
  }
}
ctx.putImageData(map, 0, 0);
if (iioc && testing) {
  u = ksmc.toDataURL();
  /** @type {!Element} */
  ii = document.createElement("img");
  ii.src = u;
  /** @type {!Element} */
  ksmc = ii;
}
/** @type {number} */
sz = 64;
/** @type {!Element} */
var jsebi = document.createElement("canvas");
/** @type {number} */
jsebi.width = jsebi.height = sz;
ctx = jsebi.getContext("2d");
/** @type {string} */
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
/** @type {number} */
p = yy = xx = 0;
for (; p < l; p = p + 4) {
  /** @type {number} */
  v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2);
  /** @type {number} */
  v = 1.06 * v - .06;
  if (0 > v) {
    /** @type {number} */
    v = 0;
  } else {
    /** @type {number} */
    v = Math.pow(v, .35);
    /** @type {number} */
    v = v * 1.35;
  }
  /** @type {number} */
  v = v + .25 * (1 - v);
  /** @type {number} */
  imgd[p] = Math.max(0, Math.min(255, Math.round(72 * v)));
  /** @type {number} */
  imgd[p + 1] = Math.max(0, Math.min(255, Math.round(255 * v)));
  /** @type {number} */
  imgd[p + 2] = Math.max(0, Math.min(255, Math.round(116 * v)));
  xx++;
  if (xx >= sz) {
    /** @type {number} */
    xx = 0;
    yy++;
  }
  /** @type {number} */
  v = sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2));
  /** @type {number} */
  imgd[p + 3] = 3 >= v ? Math.max(0, Math.min(255, Math.round(v / 3 * 255))) : 255;
}
ctx.putImageData(map, 0, 0);
/** @type {number} */
sz = 48;
/** @type {!Element} */
var jsepi = document.createElement("canvas");
/** @type {number} */
jsepi.width = jsepi.height = sz;
ctx = jsepi.getContext("2d");
/** @type {string} */
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
/** @type {number} */
p = yy = xx = 0;
for (; p < l; p = p + 4) {
  /** @type {number} */
  v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2);
  /** @type {number} */
  v = .5 < v ? 0 : 1 - Math.pow(v / .5, 1);
  /** @type {number} */
  v = v * .8;
  if (0 == v) {
    /** @type {number} */
    imgd[p] = 0;
    /** @type {number} */
    imgd[p + 1] = 0;
    /** @type {number} */
    imgd[p + 2] = 0;
  } else {
    /** @type {number} */
    imgd[p] = Math.max(0, Math.min(255, Math.round(28 + 59 * v)));
    /** @type {number} */
    imgd[p + 1] = Math.max(0, Math.min(255, Math.round(83 + 85 * v)));
    /** @type {number} */
    imgd[p + 2] = Math.max(0, Math.min(255, Math.round(128 + 110 * v)));
  }
  xx++;
  if (xx >= sz) {
    /** @type {number} */
    xx = 0;
    yy++;
  }
}
ctx.putImageData(map, 0, 0);
/** @type {!Element} */
var rabulb = document.createElement("canvas");
/** @type {number} */
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
/** @type {!Element} */
var cdbulb = document.createElement("canvas");
/** @type {number} */
cdbulb.width = 84;
/** @type {number} */
cdbulb.height = 84;
/** @type {!Element} */
var cdbulb2 = document.createElement("canvas");
/** @type {number} */
cdbulb2.width = 84;
/** @type {number} */
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
/** @type {string} */
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
/** @type {string} */
ctx.shadowColor = "#000000";
/** @type {number} */
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
/** @type {!Element} */
var acbulb = document.createElement("canvas");
/** @type {number} */
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
/** @type {!Element} */
var kwkbulb = document.createElement("canvas");
/** @type {number} */
kwkbulb.width = 172;
/** @type {number} */
kwkbulb.height = 113;
/** @type {!Element} */
var kwki = document.createElement("img");
/**
 * @return {undefined}
 */
kwki.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 172;
  /** @type {number} */
  canvasTemp.height = 113;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(kwki, 21, 21);
  ctx = kwkbulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
kwki.src = "/s/kwk6.png";
/** @type {!Element} */
var jmou = document.createElement("canvas");
/** @type {number} */
jmou.width = 79;
/** @type {number} */
jmou.height = 130;
/** @type {!Element} */
var jmoi = document.createElement("img");
/**
 * @return {undefined}
 */
jmoi.onload = function() {
  jmou.getContext("2d").drawImage(jmoi, 0, 0);
};
/** @type {string} */
jmoi.src = "/s/jmou3.png";
/** @type {!Element} */
var pwdbulb = document.createElement("canvas");
/** @type {number} */
pwdbulb.width = 190;
/** @type {number} */
pwdbulb.height = 188;
/** @type {!Element} */
var pwdi = document.createElement("img");
/**
 * @return {undefined}
 */
pwdi.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 190;
  /** @type {number} */
  canvasTemp.height = 188;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(pwdi, 21, 21);
  ctx = pwdbulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
pwdi.src = "/s/pewd.png";
/** @type {!Element} */
var sest = document.createElement("canvas");
/** @type {number} */
sest.width = 105;
/** @type {number} */
sest.height = 88;
/** @type {!Element} */
var sesti = document.createElement("img");
/**
 * @return {undefined}
 */
sesti.onload = function() {
  sest.getContext("2d").drawImage(sesti, 0, 0);
};
/** @type {string} */
sesti.src = "/s/sest5.png";
/** @type {!Element} */
var playbulb = document.createElement("canvas");
/** @type {number} */
playbulb.width = 142;
/** @type {number} */
playbulb.height = 149;
/** @type {!Element} */
var plyi = document.createElement("img");
/**
 * @return {undefined}
 */
plyi.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 142;
  /** @type {number} */
  canvasTemp.height = 149;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(plyi, 21, 21);
  ctx = playbulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
plyi.src = "/s/play.png";
/** @type {!Element} */
var bonkbulb = document.createElement("canvas");
/** @type {number} */
bonkbulb.width = 173;
/** @type {number} */
bonkbulb.height = 178;
/** @type {!Element} */
var bnki = document.createElement("img");
/**
 * @return {undefined}
 */
bnki.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 173;
  /** @type {number} */
  canvasTemp.height = 178;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(bnki, 21, 21);
  ctx = bonkbulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
bnki.src = "/s/bonkers2.png";
/** @type {!Element} */
var leafbulb = document.createElement("canvas");
/** @type {number} */
leafbulb.width = 143;
/** @type {number} */
leafbulb.height = 161;
/** @type {!Element} */
var leafi = document.createElement("img");
/**
 * @return {undefined}
 */
leafi.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 143;
  /** @type {number} */
  canvasTemp.height = 161;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(leafi, 21, 21);
  ctx = leafbulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
leafi.src = "/s/leaf.png";
/** @type {!Element} */
var swissbulb = document.createElement("canvas");
/** @type {number} */
swissbulb.width = 140;
/** @type {number} */
swissbulb.height = 140;
/** @type {!Element} */
var swissi = document.createElement("img");
/**
 * @return {undefined}
 */
swissi.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 140;
  /** @type {number} */
  canvasTemp.height = 140;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(swissi, 21, 21);
  ctx = swissbulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
swissi.src = "/s/swiss.png";
/** @type {!Element} */
var moldovabulb = document.createElement("canvas");
/** @type {number} */
moldovabulb.width = 162;
/** @type {number} */
moldovabulb.height = 137;
/** @type {!Element} */
var moldovai = document.createElement("img");
/**
 * @return {undefined}
 */
moldovai.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 162;
  /** @type {number} */
  canvasTemp.height = 137;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(moldovai, 21, 21);
  ctx = moldovabulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
moldovai.src = "/s/moldova.png";
/** @type {!Element} */
var vietnambulb = document.createElement("canvas");
/** @type {number} */
vietnambulb.width = 137;
/** @type {number} */
vietnambulb.height = 142;
/** @type {!Element} */
var vietnami = document.createElement("img");
/**
 * @return {undefined}
 */
vietnami.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 137;
  /** @type {number} */
  canvasTemp.height = 142;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(vietnami, 21, 21);
  ctx = vietnambulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
vietnami.src = "/s/vietnam.png";
/** @type {!Element} */
var argentinabulb = document.createElement("canvas");
/** @type {number} */
argentinabulb.width = 152;
/** @type {number} */
argentinabulb.height = 152;
/** @type {!Element} */
var argentinai = document.createElement("img");
/**
 * @return {undefined}
 */
argentinai.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 152;
  /** @type {number} */
  canvasTemp.height = 152;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(argentinai, 21, 21);
  ctx = argentinabulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
argentinai.src = "/s/argentina.png";
/** @type {!Element} */
var movbulb = document.createElement("canvas");
/** @type {number} */
movbulb.width = 142;
/** @type {number} */
movbulb.height = 163;
/** @type {!Element} */
var movi = document.createElement("img");
/**
 * @return {undefined}
 */
movi.onload = function() {
  /** @type {!Element} */
  var canvasTemp = document.createElement("canvas");
  /** @type {number} */
  canvasTemp.width = 142;
  /** @type {number} */
  canvasTemp.height = 163;
  var ctx = canvasTemp.getContext("2d");
  ctx.drawImage(movi, 21, 21);
  ctx = movbulb.getContext("2d");
  /** @type {string} */
  ctx.shadowColor = "#000000";
  /** @type {number} */
  ctx.shadowBlur = 20;
  ctx.drawImage(canvasTemp, 0, 0);
};
/** @type {string} */
movi.src = "/s/mov2.png";
var colc;
if (testing) {
  /** @type {!Element} */
  colc = document.createElement("canvas");
  /** @type {number} */
  colc.width = 256;
  /** @type {number} */
  colc.height = 106;
  /** @type {string} */
  colc.style.position = "fixed";
  /** @type {string} */
  colc.style.left = "0px";
  /** @type {string} */
  colc.style.top = "100px";
  /** @type {number} */
  colc.style.zIndex = 2147483647;
  document.body.appendChild(colc);
}
/** @type {!Float32Array} */
var pbx = new Float32Array(32767);
/** @type {!Float32Array} */
var pby = new Float32Array(32767);
/** @type {!Float32Array} */
var pba = new Float32Array(32767);
/** @type {!Uint8Array} */
var pbu = new Uint8Array(32767);
/** @type {!Array} */
var per_color_imgs = [];
/** @type {!Array} */
var rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 78, 255, 101, 128, 60, 0, 217, 255, 144, 32, 240, 240, 240, 240, 32, 40, 104, 0, 104, 0];
/** @type {!Array} */
var ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 35, 86, 200, 132, 192, 255, 69, 64, 144, 32, 32, 240, 144, 32, 240, 60, 128, 0, 40, 0];
/** @type {!Array} */
var bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 192, 9, 232, 144, 72, 83, 69, 64, 144, 240, 32, 32, 32, 240, 32, 173, 255, 112, 170, 0];
/** @type {number} */
var max_skin_cv = 64;
/** @type {!Uint8Array} */
var alcsc = new Uint8Array(256);
/** @type {!Uint8Array} */
var ralcsc = new Uint8Array(256);
/** @type {!Uint8Array} */
var falcsc = new Uint8Array(256);
/** @type {!Array} */
var csks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 39];
/** @type {number} */
i = 0;
for (; 255 >= i; i++) {
  /** @type {number} */
  ralcsc[i] = 0;
  /** @type {number} */
  falcsc[i] = 0;
}
/** @type {number} */
i = csks.length - 1;
for (; 0 <= i; i--) {
  /** @type {number} */
  ralcsc[csks[i]] = 1;
  /** @type {number} */
  falcsc[csks[i]] = 1;
}
/** @type {number} */
falcsc[40] = 1;
/** @type {!Uint8Array} */
alcsc = ralcsc;
/** @type {number} */
i = 0;
for (; i < rrs.length; i++) {
  o = {
    imgs : [],
    fws : [],
    fhs : [],
    fw2s : [],
    fh2s : [],
    gimgs : [],
    gfws : [],
    gfhs : [],
    gfw2s : [],
    gfh2s : [],
    oimgs : [],
    ofws : [],
    ofhs : [],
    ofw2s : [],
    ofh2s : []
  };
  var rs = "00" + rrs[i].toString(16);
  var gs = "00" + ggs[i].toString(16);
  var bs = "00" + bbs[i].toString(16);
  rs = rs.substr(rs.length - 2);
  gs = gs.substr(gs.length - 2);
  bs = bs.substr(bs.length - 2);
  /** @type {string} */
  o.cs = "#" + rs + gs + bs;
  /** @type {number} */
  sz = 62;
  /** @type {!Element} */
  var kfmc = document.createElement("canvas");
  /** @type {number} */
  kfmc.width = kfmc.height = sz;
  ctx = kfmc.getContext("2d");
  map = ctx.getImageData(0, 0, sz, sz);
  imgd = map.data;
  l = imgd.length;
  /** @type {number} */
  yy = xx = 0;
  /** @type {number} */
  var fi = i;
  if (26 == i) {
    /** @type {number} */
    fi = 3;
  } else {
    if (29 == i) {
      /** @type {number} */
      fi = 9;
    } else {
      if (30 == i) {
        /** @type {number} */
        fi = 15;
      } else {
        if (31 == i) {
          /** @type {number} */
          fi = 7;
        } else {
          if (32 == i) {
            /** @type {number} */
            fi = 4;
          } else {
            if (33 == i) {
              /** @type {number} */
              fi = 5;
            } else {
              if (34 == i) {
                /** @type {number} */
                fi = 0;
              } else {
                if (35 == i) {
                  /** @type {number} */
                  fi = 3;
                } else {
                  if (36 == i) {
                    /** @type {number} */
                    fi = 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  rr = rrs[fi];
  gg = ggs[fi];
  bb = bbs[fi];
  /** @type {number} */
  var t1 = (rr + gg + bb) / 3;
  if (24 >= t1) {
    /** @type {number} */
    rr = gg = bb = 90;
  } else {
    /** @type {number} */
    var t2 = 120 / t1;
    /** @type {number} */
    rr = Math.min(255, Math.floor(rr * t2));
    /** @type {number} */
    gg = Math.min(255, Math.floor(gg * t2));
    /** @type {number} */
    bb = Math.min(255, Math.floor(bb * t2));
  }
  /** @type {number} */
  p = 0;
  for (; p < l; p = p + 4) {
    /** @type {number} */
    v = 1 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) / 32;
    /** @type {number} */
    v = 0 > v ? 0 : .5 * (1 - Math.cos(Math.PI * v));
    /** @type {number} */
    imgd[p] = rr;
    /** @type {number} */
    imgd[p + 1] = gg;
    /** @type {number} */
    imgd[p + 2] = bb;
    /** @type {number} */
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    if (xx >= sz) {
      /** @type {number} */
      xx = 0;
      yy++;
    }
  }
  ctx.putImageData(map, 0, 0);
  /** @type {!Element} */
  o.kfmc = kfmc;
  /** @type {number} */
  var ksz = 48;
  /** @type {number} */
  var ksz2 = ksz / 2;
  /** @type {!Element} */
  var kmc = document.createElement("canvas");
  /** @type {number} */
  kmc.width = kmc.height = ksz;
  ctx = kmc.getContext("2d");
  /** @type {string} */
  ctx.fillStyle = "#FFFFFF";
  ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
  ctx.fill();
  map = ctx.getImageData(0, 0, ksz, ksz);
  imgd = map.data;
  l = imgd.length;
  /** @type {number} */
  yy = xx = 0;
  /** @type {number} */
  var jk = 7;
  if (36 == i) {
    /** @type {number} */
    jk = 60;
  }
  var v3;
  /** @type {!Array} */
  var kmcs = [];
  /** @type {number} */
  j = 0;
  for (; j < jk; j++) {
    /** @type {number} */
    p = xx = yy = 0;
    for (; p < l; p = p + 4) {
      /** @type {number} */
      var v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34));
      if (nsr) {
        /** @type {number} */
        v = Math.pow(v2, .5);
      } else {
        /** @type {number} */
        v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35);
        /** @type {number} */
        v = v + .375 * (v2 - v);
      }
      rr = rrs[i];
      gg = ggs[i];
      bb = bbs[i];
      if (24 == i) {
        /** @type {number} */
        v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
        /** @type {number} */
        v2 = Math.pow(1.05 * v2, 4);
        if (1 < v2) {
          /** @type {number} */
          v2 = 1;
        }
        rr = rr + (306 - rr) * v2;
        gg = gg + (192 * 1.2 - gg) * v2;
        bb = bb + (76.8 - bb) * v2;
        /** @type {number} */
        v = v * (1.22 - .44 * j / (jk - 1));
      } else {
        if (26 == i) {
          /** @type {number} */
          v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
          /** @type {number} */
          v2 = Math.pow(v2, 2);
          if (1 < v2) {
            /** @type {number} */
            v2 = 1;
          }
          /** @type {number} */
          v = v * (1.22 - .44 * j / (jk - 1));
          /** @type {number} */
          rr = rr * v;
          /** @type {number} */
          gg = gg * v;
          /** @type {number} */
          bb = bb * v;
          /** @type {number} */
          v = 1;
          rr = rr + (140.8 - rr) * v2;
          gg = gg + (280.5 - gg) * v2;
          bb = bb + (136 * 1.1 - bb) * v2;
        } else {
          if (27 == i) {
            /** @type {number} */
            v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
            /** @type {number} */
            v2 = Math.pow(v2, 2);
            if (1 < v2) {
              /** @type {number} */
              v2 = 1;
            }
            /** @type {number} */
            v = v * (1.22 - .44 * j / (jk - 1));
            /** @type {number} */
            rr = rr * v;
            /** @type {number} */
            gg = gg * v;
            /** @type {number} */
            bb = bb * v;
            /** @type {number} */
            v = 1;
            rr = rr + (217 * 1.1 - rr) * v2;
            gg = gg + (75.9 - gg) * v2;
            bb = bb + (75.9 - bb) * v2;
          } else {
            if (28 == i) {
              /** @type {number} */
              v2 = .5 - .5 * Math.cos(Math.PI * j / jk);
              rr = rr + (128 - rr) * v2;
              gg = gg + (128 - gg) * v2;
              bb = bb + (255 - bb) * v2;
              /** @type {number} */
              v = v * 1.1;
              if (1 < v) {
                /** @type {number} */
                v = 1;
              }
            } else {
              if (29 == i) {
                /** @type {number} */
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
                /** @type {number} */
                v2 = Math.pow(v2, 2);
                if (1 < v2) {
                  /** @type {number} */
                  v2 = 1;
                }
                /** @type {number} */
                v = v * (1.44 - .88 * j / (jk - 1));
                /** @type {number} */
                rr = 32 * v;
                /** @type {number} */
                gg = 32 * v;
                /** @type {number} */
                bb = 32 * v;
                /** @type {number} */
                v = 1;
                /** @type {number} */
                rr = rr + (255 - rr) * v2;
                /** @type {number} */
                gg = gg + (255 - gg) * v2;
                /** @type {number} */
                bb = bb + (255 - bb) * v2;
              } else {
                if (30 == i) {
                  /** @type {number} */
                  v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
                  /** @type {number} */
                  v2 = Math.pow(v2, 2);
                  if (1 < v2) {
                    /** @type {number} */
                    v2 = 1;
                  }
                  /** @type {number} */
                  v = (.1 + .9 * j / jk) % 1;
                  /** @type {number} */
                  rr = 80 * v;
                  /** @type {number} */
                  gg = 80 * v;
                  /** @type {number} */
                  bb = 128 + 160 * v;
                  /** @type {number} */
                  rr = rr + .3 * (255 - rr) * v2;
                  /** @type {number} */
                  gg = gg + .3 * (255 - gg) * v2;
                  /** @type {number} */
                  bb = bb + .3 * (357 - bb) * v2;
                  /** @type {number} */
                  v = 1;
                } else {
                  if (31 == i) {
                    /** @type {number} */
                    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
                    /** @type {number} */
                    v2 = Math.pow(v2, 2);
                    if (1 < v2) {
                      /** @type {number} */
                      v2 = 1;
                    }
                    /** @type {number} */
                    v = (.1 + .9 * j / jk) % 1;
                    /** @type {number} */
                    rr = 128 + 160 * v;
                    /** @type {number} */
                    gg = 80 * v;
                    /** @type {number} */
                    bb = 80 * v;
                    /** @type {number} */
                    rr = rr + .3 * (357 - rr) * v2;
                    /** @type {number} */
                    gg = gg + .3 * (255 - gg) * v2;
                    /** @type {number} */
                    bb = bb + .3 * (255 - bb) * v2;
                    /** @type {number} */
                    v = 1;
                  } else {
                    if (32 == i) {
                      /** @type {number} */
                      v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
                      /** @type {number} */
                      v2 = Math.pow(v2, 2);
                      if (1 < v2) {
                        /** @type {number} */
                        v2 = 1;
                      }
                      /** @type {number} */
                      v = (.1 + .9 * j / jk) % 1;
                      /** @type {number} */
                      rr = 96 + 128 * v;
                      /** @type {number} */
                      gg = 96 + 128 * v;
                      /** @type {number} */
                      bb = 80 * v;
                      /** @type {number} */
                      rr = rr + .6 * (306 - rr) * v2;
                      /** @type {number} */
                      gg = gg + .6 * (306 - gg) * v2;
                      /** @type {number} */
                      bb = bb + .6 * (255 - bb) * v2;
                      /** @type {number} */
                      v = 1;
                    } else {
                      if (33 == i) {
                        /** @type {number} */
                        v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
                        /** @type {number} */
                        v2 = Math.pow(v2, 2);
                        if (1 < v2) {
                          /** @type {number} */
                          v2 = 1;
                        }
                        /** @type {number} */
                        v = (.1 + .9 * j / jk) % 1;
                        /** @type {number} */
                        rr = 96 + 128 * v;
                        /** @type {number} */
                        gg = 48 + 80 * v;
                        /** @type {number} */
                        bb = 48 * v;
                        /** @type {number} */
                        rr = rr + .6 * (306 - rr) * v2;
                        /** @type {number} */
                        gg = gg + .6 * (280.5 - gg) * v2;
                        /** @type {number} */
                        bb = bb + .6 * (255 - bb) * v2;
                        /** @type {number} */
                        v = 1;
                      } else {
                        if (34 == i) {
                          /** @type {number} */
                          v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
                          /** @type {number} */
                          v2 = Math.pow(v2, 2);
                          if (1 < v2) {
                            /** @type {number} */
                            v2 = 1;
                          }
                          /** @type {number} */
                          v = (.1 + .9 * j / jk) % 1;
                          /** @type {number} */
                          rr = 96 + 128 * v;
                          /** @type {number} */
                          gg = 80 * v;
                          /** @type {number} */
                          bb = 96 + 128 * v;
                          /** @type {number} */
                          rr = rr + .6 * (306 - rr) * v2;
                          /** @type {number} */
                          gg = gg + .6 * (255 - gg) * v2;
                          /** @type {number} */
                          bb = bb + .6 * (306 - bb) * v2;
                          /** @type {number} */
                          v = 1;
                        } else {
                          if (35 == i) {
                            /** @type {number} */
                            v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2;
                            /** @type {number} */
                            v2 = Math.pow(v2, 2);
                            if (1 < v2) {
                              /** @type {number} */
                              v2 = 1;
                            }
                            /** @type {number} */
                            v = (.1 + .9 * j / jk) % 1;
                            /** @type {number} */
                            rr = 80 * v;
                            /** @type {number} */
                            gg = 96 + 128 * v;
                            /** @type {number} */
                            bb = 80 * v;
                            /** @type {number} */
                            rr = rr + .6 * (255 - rr) * v2;
                            /** @type {number} */
                            gg = gg + .6 * (306 - gg) * v2;
                            /** @type {number} */
                            bb = bb + .6 * (255 - bb) * v2;
                            /** @type {number} */
                            v = 1;
                          } else {
                            if (36 == i) {
                              /** @type {number} */
                              v3 = (j / jk + .6 + xx / ksz * .25) % 1;
                              /** @type {number} */
                              v2 = (yy - ksz2) / ksz;
                              /** @type {number} */
                              v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                              /** @type {number} */
                              v2 = v2 * 2;
                              if (0 > v2) {
                                /** @type {number} */
                                v2 = -v2;
                              }
                              /** @type {number} */
                              v2 = v2 * 2.4;
                              if (1 > v2) {
                                rr = rr + (561 - rr) * (1 - v2);
                                gg = gg + (561 - gg) * (1 - v2);
                                bb = bb + (561 - bb) * (1 - v2);
                              }
                              /** @type {number} */
                              v2 = .5 > v3 ? (yy - .055 * ksz2 - ksz2) / ksz : (yy + .055 * ksz2 - ksz2) / ksz;
                              /** @type {number} */
                              v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                              /** @type {number} */
                              v2 = v2 * 2;
                              if (0 > v2) {
                                /** @type {number} */
                                v2 = -v2;
                              }
                              /** @type {number} */
                              v2 = v2 * 4.8;
                              if (1 > v2) {
                                rr = rr + (255 - rr) * (1 - v2);
                                gg = gg + (32 - gg) * (1 - v2);
                                bb = bb + (64 - bb) * (1 - v2);
                              }
                              /** @type {number} */
                              v2 = (ksz2 - yy) / ksz;
                              /** @type {number} */
                              v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                              /** @type {number} */
                              v2 = v2 * 2;
                              if (0 > v2) {
                                /** @type {number} */
                                v2 = -v2;
                              }
                              /** @type {number} */
                              v2 = v2 * 2.4;
                              if (1 > v2) {
                                rr = rr + (561 - rr) * (1 - v2);
                                gg = gg + (561 - gg) * (1 - v2);
                                bb = bb + (561 - bb) * (1 - v2);
                              }
                              /** @type {number} */
                              v2 = .5 > v3 ? (ksz2 + .055 * ksz2 - yy) / ksz : (ksz2 - .055 * ksz2 - yy) / ksz;
                              /** @type {number} */
                              v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                              /** @type {number} */
                              v2 = v2 * 2;
                              if (0 > v2) {
                                /** @type {number} */
                                v2 = -v2;
                              }
                              /** @type {number} */
                              v2 = v2 * 4.8;
                              if (1 > v2) {
                                rr = rr + (255 - rr) * (1 - v2);
                                gg = gg + (32 - gg) * (1 - v2);
                                bb = bb + (64 - bb) * (1 - v2);
                              }
                              /** @type {number} */
                              v2 = (yy - ksz2) / ksz;
                              if (.47 <= v3 && .53 >= v3) {
                                /** @type {number} */
                                rr = 255;
                                /** @type {number} */
                                gg = 32;
                                /** @type {number} */
                                bb = 64;
                              } else {
                                if (-.1 <= v2 && .1 >= v2) {
                                  /** @type {number} */
                                  v3 = .5 - v3;
                                  if (0 > v3) {
                                    /** @type {number} */
                                    v3 = -v3;
                                  }
                                  /** @type {number} */
                                  v3 = 1 - Math.pow(v3 / .5, 2);
                                  rr = rr + (255 - rr) * v3;
                                  gg = gg + (32 - gg) * v3;
                                  bb = bb + (64 - bb) * v3;
                                } else {
                                  if (.44 <= v3 && .56 >= v3 || -.15 <= v2 && .15 >= v2) {
                                    /** @type {number} */
                                    v3 = .5 - v3;
                                    if (0 > v3) {
                                      /** @type {number} */
                                      v3 = -v3;
                                    }
                                    /** @type {number} */
                                    v3 = 1 - Math.pow(v3 / .5, 2);
                                    rr = rr + (255 - rr) * v3;
                                    gg = gg + (255 - gg) * v3;
                                    bb = bb + (255 - bb) * v3;
                                  }
                                }
                              }
                              if (!nsr) {
                                /** @type {number} */
                                v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35);
                                /** @type {number} */
                                v2 = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .5);
                                rr = rr + (rrs[i] - rr) * (1 - v2);
                                gg = gg + (ggs[i] - gg) * (1 - v2);
                                bb = bb + (bbs[i] - bb) * (1 - v2);
                              }
                            } else {
                              /** @type {number} */
                              v = v * (1.22 - .44 * j / (jk - 1));
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      /** @type {number} */
      imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
      /** @type {number} */
      imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
      /** @type {number} */
      imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
      xx++;
      if (xx >= ksz) {
        /** @type {number} */
        xx = 0;
        yy++;
      }
    }
    ctx.putImageData(map, 0, 0);
    /** @type {!Element} */
    var kmc2 = document.createElement("canvas");
    /** @type {number} */
    kmc2.width = kmc2.height = ksz;
    var ctx2 = kmc2.getContext("2d");
    ctx2.drawImage(kmc, 0, 0);
    if (10 == i) {
      /** @type {number} */
      var fk = -1;
      /** @type {number} */
      var tk = 1;
      if (nsr) {
        /** @type {number} */
        fk = -4;
        /** @type {number} */
        tk = 3;
      }
      /** @type {number} */
      k = fk;
      for (; k <= tk; k++) {
        /** @type {number} */
        var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13;
        /** @type {number} */
        var ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
        /** @type {string} */
        ctx2.fillStyle = "#FFFFFF";
        ctx2.beginPath();
        /** @type {number} */
        m = 0;
        for (; 5 >= m; m++) {
          /** @type {number} */
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 24;
          /** @type {number} */
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 24;
          if (0 == m) {
            ctx2.moveTo(xx, yy);
          } else {
            ctx2.lineTo(xx, yy);
          }
          /** @type {number} */
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 3.1;
          /** @type {number} */
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 3.1;
          ctx2.lineTo(xx, yy);
        }
        ctx2.fill();
      }
    } else {
      if (19 == i) {
        /** @type {number} */
        fk = -2;
        /** @type {number} */
        tk = 2;
        if (nsr) {
          /** @type {number} */
          fk = -7;
          /** @type {number} */
          tk = 7;
        }
        /** @type {number} */
        k = fk;
        for (; k <= tk; k++) {
          /** @type {number} */
          tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
          /** @type {number} */
          ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
          ctx2.save();
          /** @type {number} */
          ctx2.globalAlpha = .7;
          /** @type {string} */
          ctx2.fillStyle = "#FFFFFF";
          ctx2.beginPath();
          /** @type {number} */
          m = 0;
          for (; 5 >= m; m++) {
            /** @type {number} */
            xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 12;
            /** @type {number} */
            yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 12;
            if (0 == m) {
              ctx2.moveTo(xx, yy);
            } else {
              ctx2.lineTo(xx, yy);
            }
            /** @type {number} */
            xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.55;
            /** @type {number} */
            yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.55;
            ctx2.lineTo(xx, yy);
          }
          ctx2.fill();
          ctx2.restore();
        }
      } else {
        if (20 == i) {
          /** @type {number} */
          fk = -1.5;
          /** @type {number} */
          tk = 1.5;
          if (nsr) {
            /** @type {number} */
            fk = -6.5;
            /** @type {number} */
            tk = 7.5;
          }
          /** @type {number} */
          k = fk;
          for (; k <= tk; k++) {
            /** @type {number} */
            tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
            /** @type {number} */
            ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
            ctx2.save();
            /** @type {number} */
            ctx2.globalAlpha = .7;
            /** @type {string} */
            ctx2.fillStyle = "#FFFFFF";
            ctx2.beginPath();
            /** @type {number} */
            m = 0;
            for (; 5 >= m; m++) {
              /** @type {number} */
              xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * .05 * 14;
              /** @type {number} */
              yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * .05 * 14;
              if (0 == m) {
                ctx2.moveTo(xx, yy);
              } else {
                ctx2.lineTo(xx, yy);
              }
              /** @type {number} */
              xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.8;
              /** @type {number} */
              yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.8;
              ctx2.lineTo(xx, yy);
            }
            ctx2.fill();
            ctx2.restore();
          }
        }
      }
    }
    if (iioc && testing) {
      if (1 <= kmcs.length) {
        kmcs.push(kmcs[0]);
      } else {
        if (2 <= per_color_imgs.length) {
          kmcs.push(per_color_imgs[0].kmcs[0]);
        } else {
          u = kmc2.toDataURL();
          /** @type {!Element} */
          ii = document.createElement("img");
          /** @type {string} */
          ii.src = "ayy.png";
          kmcs.push(ii);
        }
      }
    } else {
      kmcs.push(kmc2);
    }
  }
  /** @type {!Array} */
  o.kmcs = kmcs;
  /** @type {number} */
  o.kl = kmcs.length;
  /** @type {boolean} */
  o.klp = true;
  if (36 == i) {
    /** @type {boolean} */
    o.klp = false;
  }
  per_color_imgs.push(o);
  /** @type {number} */
  j = 2.8;
  for (; 18.8 >= j; j = j + 1) {
    /** @type {!Element} */
    var cc = document.createElement("canvas");
    /** @type {number} */
    sz = Math.ceil(2.5 * j + 28);
    /** @type {number} */
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    /** @type {string} */
    ctx.fillStyle = o.cs;
    ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
    /** @type {number} */
    ctx.shadowBlur = 12;
    /** @type {number} */
    ctx.shadowOffsetY = 0;
    /** @type {string} */
    ctx.shadowColor = "#" + rs + gs + bs;
    /** @type {number} */
    ctx.globalAlpha = .8;
    ctx.fill();
    /** @type {number} */
    ctx.globalAlpha = 1;
    ctx.fill();
    if (iioc && testing) {
      u = cc.toDataURL();
      /** @type {!Element} */
      ii = document.createElement("img");
      ii.src = u;
      o.imgs.push(ii);
    } else {
      o.imgs.push(cc);
    }
    o.fws.push(sz);
    o.fhs.push(sz);
    o.fw2s.push(sz / 2);
    o.fh2s.push(sz / 2);
    /** @type {number} */
    sz = Math.ceil(8 * j + 6);
    /** @type {!Element} */
    cc = document.createElement("canvas");
    /** @type {number} */
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
    g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
    g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, sz, sz);
    if (iioc && testing) {
      u = cc.toDataURL();
      /** @type {!Element} */
      ii = document.createElement("img");
      ii.src = u;
      o.gimgs.push(ii);
    } else {
      o.gimgs.push(cc);
    }
    o.gfws.push(sz);
    o.gfhs.push(sz);
    o.gfw2s.push(sz / 2);
    o.gfh2s.push(sz / 2);
    /** @type {!Element} */
    cc = document.createElement("canvas");
    /** @type {number} */
    sz = Math.ceil(1.3 * j + 6);
    /** @type {number} */
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    /** @type {number} */
    var eam = .2;
    g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
    g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
    g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
    g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, sz, sz);
    /** @type {string} */
    ctx.strokeStyle = "#000000";
    /** @type {number} */
    ctx.lineWidth = 2;
    ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
    /** @type {number} */
    ctx.globalAlpha = 1;
    ctx.stroke();
    if (iioc && testing) {
      u = cc.toDataURL();
      /** @type {!Element} */
      ii = document.createElement("img");
      ii.src = u;
      o.oimgs.push(ii);
    } else {
      o.oimgs.push(cc);
    }
    o.ofws.push(sz);
    o.ofhs.push(sz);
    o.ofw2s.push(sz / 2);
    o.ofh2s.push(sz / 2);
  }
  /** @type {number} */
  o.ic = o.imgs.length;
  /** @type {!Array} */
  o.pr_imgs = [];
  /** @type {!Array} */
  o.pr_fws = [];
  /** @type {!Array} */
  o.pr_fhs = [];
  /** @type {!Array} */
  o.pr_fw2s = [];
  /** @type {!Array} */
  o.pr_fh2s = [];
  /** @type {number} */
  j = 3;
  for (; 24 >= j; j = j + 1) {
    /** @type {!Element} */
    cc = document.createElement("canvas");
    /** @type {number} */
    sz = Math.ceil(2 * j + 38);
    /** @type {number} */
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    /** @type {string} */
    ctx.fillStyle = o.cs;
    ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2);
    /** @type {number} */
    ctx.shadowBlur = 22;
    /** @type {number} */
    ctx.shadowOffsetY = 0;
    /** @type {string} */
    ctx.shadowColor = "#" + rs + gs + bs;
    ctx.fill();
    ctx.fill();
    if (iioc && testing) {
      u = cc.toDataURL();
      /** @type {!Element} */
      ii = document.createElement("img");
      ii.src = u;
      o.pr_imgs.push(ii);
    } else {
      o.pr_imgs.push(cc);
    }
    o.pr_fws.push(sz);
    o.pr_fhs.push(sz);
    o.pr_fw2s.push(sz / 2);
    o.pr_fh2s.push(sz / 2);
  }
}
if (testing) {
  ctx = colc.getContext("2d");
  /** @type {string} */
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, colc.width, colc.height);
  /** @type {string} */
  ctx.fillStyle = "#FFFFFF";
  /** @type {string} */
  ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif";
  /** @type {string} */
  ctx.textBaseline = "top";
  /** @type {string} */
  ctx.textAlign = "center";
  /** @type {number} */
  i = yy = xx = 0;
  for (; i < rrs.length; i++) {
    var pci = per_color_imgs[i];
    kmc = pci.kmcs[0];
    ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
    ntx = o.xx + o.fx;
    nty = o.yy + o.fy;
    /** @type {number} */
    ntx = mww2 + (ntx - view_xx) * gsc;
    /** @type {number} */
    nty = mhh2 + (nty - view_yy) * gsc;
    ctx.fillText("" + i, xx + 8, yy + 16);
    /** @type {number} */
    xx = xx + 16;
    if (xx > colc.width - 16) {
      /** @type {number} */
      xx = 0;
      /** @type {number} */
      yy = yy + 28;
    }
  }
}
/** @type {number} */
var view_xx = 0;
/** @type {number} */
var view_yy = 0;
/** @type {number} */
var view_ang = 0;
/** @type {number} */
var view_dist = 0;
/** @type {number} */
var fvx = 0;
/** @type {number} */
var fvy = 0;
/** @type {number} */
var xm = 0;
/** @type {number} */
var ym = 0;
/** @type {number} */
var lsxm = 0;
/** @type {number} */
var lsym = 0;
/** @type {null} */
var snake = null;
/** @type {string} */
var my_nick = "";
/** @type {boolean} */
var gw2k16 = false;
try {
  if ("1" == localStorage.gw2k16) {
    /** @type {boolean} */
    gw2k16 = true;
  }
} catch (b) {
}
var dhx;
var dhy;
var hsz;
/** @type {number} */
var fr = 0;
/** @type {number} */
var lfr = 0;
/** @type {number} */
var ltm = Date.now();
/** @type {number} */
var vfr = 0;
/** @type {number} */
var vfrb = 0;
/** @type {number} */
var avfr = 0;
/** @type {number} */
var afr = 0;
/** @type {number} */
var fr2 = 0;
/** @type {number} */
var lfr2 = 0;
/** @type {number} */
var vfrb2 = 0;
/** @type {number} */
var cptm = 0;
/** @type {number} */
var lptm = 0;
/** @type {number} */
var lpstm = 0;
/** @type {number} */
var last_ping_mtm = 0;
/** @type {boolean} */
var lagging = false;
/** @type {number} */
var lag_mult = 1;
/** @type {boolean} */
var wfpr = false;
/** @type {boolean} */
var high_quality = true;
/** @type {number} */
var gla = 1;
/** @type {number} */
var wdfg = 0;
/** @type {number} */
var qsm = 1;
/** @type {number} */
var mqsm = 1.7;
/** @type {boolean} */
var playing = false;
/** @type {boolean} */
var connected = false;
/** @type {boolean} */
var want_close_socket = false;
/** @type {boolean} */
var want_victory_message = false;
/** @type {boolean} */
var want_victory_focus = false;
/** @type {number} */
var want_hide_victory = 0;
/** @type {number} */
var hvfr = 0;
/** @type {number} */
var dead_mtm = -1;
/** @type {!Float32Array} */
var at2lt = new Float32Array(65536);
/** @type {number} */
yy = 0;
for (; 256 > yy; yy++) {
  /** @type {number} */
  xx = 0;
  for (; 256 > xx; xx++) {
    /** @type {number} */
    at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
  }
}
/** @type {number} */
var kd_l_frb = 0;
/** @type {number} */
var kd_r_frb = 0;
/** @type {boolean} */
var kd_l = false;
/** @type {boolean} */
var kd_r = false;
/** @type {boolean} */
var kd_u = false;
/** @type {number} */
var lkstm = 0;
/** @type {!Element} */
var social = document.createElement("iframe");
try {
  /** @type {number} */
  social.frameBorder = 0;
} catch (b) {
}
/** @type {string} */
social.style.position = "fixed";
/** @type {string} */
social.style.left = "6px";
/** @type {string} */
social.style.top = "6px";
/** @type {string} */
social.style.border = "0px";
/** @type {number} */
social.style.zIndex = 9999999;
/** @type {string} */
social.style.overflow = "hidden";
/** @type {number} */
social.width = 251;
/** @type {number} */
social.height = 150;
/** @type {string} */
social.src = "/social-box/";
document.body.appendChild(social);
/**
 * @return {undefined}
 */
var oef = function() {
  if (whmos) {
    hmos();
  }
  /** @type {number} */
  var value = Date.now();
  /** @type {number} */
  vfr = (value - ltm) / 8;
  if (5 < vfr) {
    /** @type {number} */
    vfr = 5;
  }
  if (1.56 > vfr) {
    /** @type {number} */
    vfr = 1.56;
  }
  /** @type {number} */
  avfr = vfr;
  /** @type {number} */
  ltm = value;
  if (!choosing_skin) {
    if (!lagging) {
      if (wfpr && 420 < value - last_ping_mtm) {
        if (!(want_play || checking_code)) {
          /** @type {boolean} */
          lagging = true;
        }
      }
    }
    if (lagging) {
      /** @type {number} */
      lag_mult = lag_mult * .85;
      if (.01 > lag_mult) {
        /** @type {number} */
        lag_mult = .01;
      }
    } else {
      if (1 > lag_mult) {
        lag_mult = lag_mult + .05;
        if (1 <= lag_mult) {
          /** @type {number} */
          lag_mult = 1;
        }
      }
    }
  }
  if (120 < vfr) {
    /** @type {number} */
    vfr = 120;
  }
  /** @type {number} */
  vfr = vfr * lag_mult;
  /** @type {number} */
  etm = etm * lag_mult;
  lfr = fr;
  fr = fr + vfr;
  /** @type {number} */
  vfrb = Math.floor(fr) - Math.floor(lfr);
  lfr2 = fr2;
  fr2 = fr2 + 2 * vfr;
  /** @type {number} */
  vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
  afr = afr + avfr;
  if (kd_l) {
    kd_l_frb = kd_l_frb + vfrb;
  }
  if (kd_r) {
    kd_r_frb = kd_r_frb + vfrb;
  }
  if (want_play && !shoa && -1 == dead_mtm) {
    /** @type {boolean} */
    want_play = false;
    connect();
  }
  if (buildia_shown && -1 != buildia_close_after_tm && value > buildia_close_after_tm) {
    trySkipBuildia();
  }
  if (spinner_shown) {
    lsfr = lsfr + avfr;
    var data = ldmc.getContext("2d");
    data.clearRect(0, 0, 512, 128);
    var b;
    var angle;
    /** @type {number} */
    var p = 1;
    for (; 2 >= p; p++) {
      data.beginPath();
      if (1 == p) {
        /** @type {string} */
        data.fillStyle = "#60FF70";
        /** @type {number} */
        angle = 0;
      } else {
        /** @type {string} */
        data.fillStyle = "#9850FF";
        /** @type {number} */
        angle = Math.PI;
      }
      /** @type {number} */
      var i = 0;
      for (; 256 >= i; i++) {
        /** @type {number} */
        b = 32 + 5 * Math.cos(angle + lsfr / 6 + 8 * i / 256) + 8 * i / 256;
        if (256 == i) {
          /** @type {number} */
          b = b + 10;
        }
        /** @type {number} */
        xx = 64 + Math.cos(angle + lsfr / 44 + .8 * Math.PI * i / 256) * b * 1.25;
        /** @type {number} */
        yy = 64 + Math.sin(angle + lsfr / 44 + .8 * Math.PI * i / 256) * b;
        if (0 == i) {
          data.moveTo(xx, yy);
        } else {
          data.lineTo(xx, yy);
        }
      }
      /** @type {number} */
      b = 32;
      /** @type {number} */
      xx = 64 + Math.cos(angle + lsfr / 44 + .8 * Math.PI * (i + 47) / 256) * b * 1.25;
      /** @type {number} */
      yy = 64 + Math.sin(angle + lsfr / 44 + .8 * Math.PI * (i + 47) / 256) * b;
      data.lineTo(xx, yy);
      /** @type {number} */
      i = 256;
      for (; 0 <= i; i--) {
        /** @type {number} */
        b = 32 + 5 * Math.cos(angle + lsfr / 6 + 8 * i / 256) - 8 * i / 256;
        if (256 == i) {
          /** @type {number} */
          b = b - 10;
        }
        /** @type {number} */
        xx = 64 + Math.cos(angle + lsfr / 44 + .8 * Math.PI * i / 256) * b * 1.25;
        /** @type {number} */
        yy = 64 + Math.sin(angle + lsfr / 44 + .8 * Math.PI * i / 256) * b;
        data.lineTo(xx, yy);
      }
      data.fill();
    }
    if (connecting || want_play) {
      ss_a = ss_a + avfr / 86;
      if (1 <= ss_a) {
        /** @type {number} */
        ss_a = 1;
      }
      ss_sh = ss_sh + avfr / 93;
      if (1 <= ss_sh) {
        /** @type {number} */
        ss_sh = 1;
      }
      ldmc.style.opacity = ss_a;
      /** @type {number} */
      i = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
    } else {
      /** @type {number} */
      ss_a = ss_a - avfr / 86;
      if (0 >= ss_a) {
        /** @type {number} */
        ss_sh = ss_a = 0;
        /** @type {string} */
        ldmc.style.display = "none";
        trf(ldmc, "");
      }
      ldmc.style.opacity = ss_a;
      /** @type {number} */
      i = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
    }
    trf(ldmc, "scale(" + i + "," + i + ")");
  }
  if (entering_code || ending_enter_code) {
    /** @type {number} */
    i = etcobs.length - 1;
    for (; 0 <= i; i--) {
      data = etcobs[i];
      if (data.loaded) {
        if (checking_code) {
          if (.25 != data.alpha) {
            data.alpha -= .02 * vfr;
            if (.25 >= data.alpha) {
              /** @type {number} */
              data.alpha = .25;
            }
            data.ii.style.opacity = data.alpha;
          }
        } else {
          if (1 != data.alpha) {
            data.alpha += .02 * vfr;
            if (1 <= data.alpha) {
              /** @type {number} */
              data.alpha = 1;
            }
            data.ii.style.opacity = data.alpha;
          }
        }
      }
    }
    if (ending_enter_code) {
      /** @type {number} */
      etca = etca - .03 * vfr;
      if (0 >= etca) {
        /** @type {number} */
        etcbx = etca = 0;
        /** @type {number} */
        etcdx = etc_ww / 2 - 27;
        /** @type {!Array} */
        etcods = [];
        /** @type {boolean} */
        entering_code = ending_enter_code = false;
        /** @type {string} */
        etcod.style.display = "none";
        /** @type {boolean} */
        nick.disabled = false;
        nick.focus();
        if (want_open_cosmetics) {
          /** @type {boolean} */
          want_open_cosmetics = false;
          csk.onclick();
          scos.onclick();
        }
      }
      /** @type {number} */
      etcod.style.opacity = etca;
    } else {
      if (entering_code && 1 != etca) {
        etca = etca + .03 * vfr;
        if (1 <= etca) {
          /** @type {number} */
          etca = 1;
        }
        etcod.style.opacity = etca;
      }
    }
    etcba = etcba + .1 * vfr;
    if (etcba >= pi2) {
      /** @type {number} */
      etcba = etcba - pi2;
    }
    if (etcshk) {
      etcshkv = etcshkv + .014 * vfr;
      if (1 <= etcshkv) {
        /** @type {number} */
        etcshkv = 1;
        /** @type {boolean} */
        etcshk = false;
      }
      /** @type {string} */
      etcc.style.left = Math.round(10 * (32 * Math.sin(Math.PI * etcshkv * 8) * Math.sin(Math.PI * etcshkv) + ww / 2 - etc_ww / 2)) / 10 + "px";
    }
    if (checking_code || 0 < etcsa) {
      etcsv = etcsv + .0075 * vfr;
      if (1 <= etcsv) {
        --etcsv;
      }
      if (checking_code) {
        etcsa = etcsa + .02 * vfr;
        if (1 <= etcsa) {
          /** @type {number} */
          etcsa = 1;
        }
      } else {
        /** @type {number} */
        etcsa = etcsa - .05 * vfr;
        if (0 >= etcsa) {
          /** @type {number} */
          etcsa = 0;
        }
      }
      etco_sp_ii.style.opacity = etcsa;
      i = etcsrv;
      /** @type {number} */
      etcsrv = Math.round(12 * etcsv);
      if (etcsrv != i) {
        adjustCodeSpinner();
      }
    }
    if (14 == etcods.length) {
      if (0 != etcbaa) {
        /** @type {number} */
        etcbaa = etcbaa - .05 * vfr;
        if (0 >= etcbaa) {
          /** @type {number} */
          etcbaa = 0;
        }
      }
    } else {
      if (1 != etcbaa) {
        etcbaa = etcbaa + .05 * vfr;
        if (1 <= etcbaa) {
          /** @type {number} */
          etcbaa = 1;
        }
      }
    }
    data = etcc.getContext("2d");
    data.save();
    data.clearRect(0, 0, etc_ww, etc_hh);
    /** @type {number} */
    i = Math.min(13, etcods.length);
    etcbx = etcbx + .2 * (47 * i - etcbx);
    etcdx = etcdx + .1 * (etc_ww / 2 - 27 - 47 * i / 2 - etcdx);
    /** @type {number} */
    data.globalAlpha = 1;
    data.translate(etcdx, 0);
    /** @type {number} */
    i = 0;
    for (; i < etcods.length; i++) {
      angle = etcods[i].v;
      if (etcdis[angle].loaded) {
        data.drawImage(etcdis[angle].ii, 47 * i, 0, 54, 67);
      }
    }
    if (etcdis[11].loaded) {
      /** @type {number} */
      data.globalAlpha = etcbaa * (.5 + .4 * Math.cos(etcba));
      data.drawImage(etcdis[11].ii, etcbx, 0, 54, 67);
    }
    data.restore();
  }
  if (ending_build_skin) {
    if (0 != bdska) {
      /** @type {number} */
      bdska = bdska - .015 * vfr;
      if (0 >= bdska) {
        /** @type {number} */
        bdska = 0;
        /** @type {boolean} */
        building_skin = ending_build_skin = false;
        alcsc = ralcsc;
        /** @type {number} */
        i = bskbtns.length - 1;
        for (; 0 <= i; i--) {
          document.body.removeChild(bskbtns[i].a);
        }
        /** @type {!Array} */
        bskbtns = [];
        /** @type {string} */
        revdiv.style.display = "none";
      }
      /** @type {number} */
      angle = .5 * (1 - Math.cos(Math.PI * bdska));
      /** @type {number} */
      bskoy = 90 * angle;
      /** @type {number} */
      skoboym = angle;
      reposSkinStuff();
      /** @type {number} */
      pskh.style.opacity = 1 - bdska;
      /** @type {number} */
      nskh.style.opacity = 1 - bdska;
      /** @type {number} */
      bskh.style.opacity = 1 - bdska;
      /** @type {number} */
      scosh.style.opacity = 1 - bdska;
      /** @type {number} */
      revdiv.style.opacity = bdska;
      /** @type {number} */
      i = bskbtns.length - 1;
      for (; 0 <= i; i--) {
        data = bskbtns[i];
        /** @type {number} */
        data.ii.style.opacity = bdska;
      }
    }
  } else {
    if (building_skin && 1 != bdska) {
      bdska = bdska + .015 * vfr;
      if (1 <= bdska) {
        /** @type {number} */
        bdska = 1;
      }
      /** @type {number} */
      angle = .5 * (1 - Math.cos(Math.PI * bdska));
      /** @type {number} */
      bskoy = 90 * angle;
      /** @type {number} */
      skoboym = angle;
      reposSkinStuff();
      /** @type {number} */
      pskh.style.opacity = 1 - bdska;
      /** @type {number} */
      nskh.style.opacity = 1 - bdska;
      /** @type {number} */
      bskh.style.opacity = 1 - bdska;
      /** @type {number} */
      scosh.style.opacity = 1 - bdska;
      revdiv.style.opacity = bdska;
      /** @type {number} */
      i = bskbtns.length - 1;
      for (; 0 <= i; i--) {
        data = bskbtns[i];
        data.ii.style.opacity = bdska;
      }
    }
  }
  if (ending_select_cosmetic) {
    if (0 != secosa) {
      /** @type {number} */
      secosa = secosa - .015 * vfr;
      if (0 >= secosa) {
        /** @type {number} */
        secosa = 0;
        /** @type {boolean} */
        selecting_cosmetic = ending_select_cosmetic = false;
        /** @type {number} */
        i = cosbtns.length - 1;
        for (; 0 <= i; i--) {
          document.body.removeChild(cosbtns[i].a);
        }
        /** @type {!Array} */
        cosbtns = [];
      }
      /** @type {number} */
      angle = .5 * (1 - Math.cos(Math.PI * secosa));
      /** @type {number} */
      secosoy = 90 * angle;
      /** @type {number} */
      secosoym = angle;
      reposSkinStuff();
      /** @type {number} */
      pskh.style.opacity = 1 - secosa;
      /** @type {number} */
      nskh.style.opacity = 1 - secosa;
      /** @type {number} */
      bskh.style.opacity = 1 - secosa;
      /** @type {number} */
      scosh.style.opacity = 1 - secosa;
      /** @type {number} */
      i = cosbtns.length - 1;
      for (; 0 <= i; i--) {
        data = cosbtns[i];
        /** @type {number} */
        data.ii.style.opacity = secosa;
      }
    }
  } else {
    if (selecting_cosmetic && 1 != secosa) {
      secosa = secosa + .015 * vfr;
      if (1 <= secosa) {
        /** @type {number} */
        secosa = 1;
      }
      /** @type {number} */
      angle = .5 * (1 - Math.cos(Math.PI * secosa));
      /** @type {number} */
      secosoy = 90 * angle;
      /** @type {number} */
      secosoym = angle;
      reposSkinStuff();
      /** @type {number} */
      pskh.style.opacity = 1 - secosa;
      /** @type {number} */
      nskh.style.opacity = 1 - secosa;
      /** @type {number} */
      bskh.style.opacity = 1 - secosa;
      /** @type {number} */
      scosh.style.opacity = 1 - secosa;
      /** @type {number} */
      i = cosbtns.length - 1;
      for (; 0 <= i; i--) {
        data = cosbtns[i];
        data.ii.style.opacity = secosa;
      }
    }
  }
  if (waiting_for_sos && value > sos_ready_after_mtm) {
    if (!(connecting || connected)) {
      connect();
    }
  }
  if (connecting && 3333 < value - start_connect_mtm) {
    if (bso) {
      /** @type {boolean} */
      bso.tainted = true;
    }
    connect();
  }
  if (choosing_skin) {
    /** @type {number} */
    i = snakes.length - 1;
    for (; 0 <= i; i--) {
      data = snakes[i];
      /** @type {number} */
      p = data.pts.length - 1;
      for (; 0 <= p; p--) {
        /** @type {number} */
        data.pts[p].yy = grd / 2 + 15 * Math.cos(p / 4 + fr / 19) * (1 - p / data.pts.length);
      }
    }
    /** @type {number} */
    view_xx = view_xx - vfr;
  }
  if (playing) {
    if (high_quality) {
      if (1 > gla) {
        gla = gla + .0075 * vfr;
        if (1 < gla) {
          /** @type {number} */
          gla = 1;
        }
      }
      if (1 < qsm) {
        /** @type {number} */
        qsm = qsm - 4E-5 * vfr;
        if (1 > qsm) {
          /** @type {number} */
          qsm = 1;
        }
      }
    } else {
      if (0 < gla) {
        /** @type {number} */
        gla = gla - .0075 * vfr;
        if (0 > gla) {
          /** @type {number} */
          gla = 0;
        }
      }
      if (qsm < mqsm) {
        qsm = qsm + 4E-5 * vfr;
        if (qsm > mqsm) {
          qsm = mqsm;
        }
      }
    }
  }
  if (0 != want_hide_victory) {
    if (1 == want_hide_victory) {
      hvfr = hvfr + .02 * vfr;
      if (1 <= hvfr) {
        /** @type {number} */
        hvfr = 0;
        /** @type {number} */
        want_hide_victory = 2;
        /** @type {number} */
        victory_holder.style.opacity = 1;
        /** @type {number} */
        saveh.style.opacity = 1;
        /** @type {string} */
        victory_holder.style.display = "none";
        /** @type {string} */
        saveh.style.display = "none";
        /** @type {number} */
        nick_holder.style.opacity = 0;
        /** @type {number} */
        playh.style.opacity = 0;
        /** @type {number} */
        smh.style.opacity = 0;
        /** @type {string} */
        nick_holder.style.display = "inline-block";
        /** @type {string} */
        playh.style.display = "block";
        /** @type {string} */
        smh.style.display = "block";
      } else {
        /** @type {number} */
        victory_holder.style.opacity = 1 - hvfr;
        /** @type {number} */
        saveh.style.opacity = 1 - hvfr;
      }
    } else {
      if (2 == want_hide_victory) {
        hvfr = hvfr + .02 * vfr;
        if (1 <= hvfr) {
          /** @type {number} */
          hvfr = 1;
          /** @type {number} */
          want_hide_victory = 0;
        }
        nick_holder.style.opacity = hvfr;
        playh.style.opacity = hvfr;
        smh.style.opacity = hvfr;
      }
    }
  }
  if (1 != login_fr && -1 != tip_fr) {
    tip_fr = tip_fr + .017 * vfr;
    if (tip_fr >= pi2) {
      /** @type {number} */
      tip_fr = tip_fr - pi2;
      tip_pos++;
      if (tip_pos >= tipss.length) {
        /** @type {number} */
        tip_pos = 0;
      }
      tips.textContent = tipss[tip_pos];
    }
    /** @type {number} */
    p = .5 - .5 * Math.cos(tip_fr);
    /** @type {number} */
    tips.style.opacity = Math.round(1E5 * Math.pow(p, .5)) / 1E5;
  }
  if (-1 == dead_mtm) {
    if (-1 != lb_fr && 1 != lb_fr) {
      lb_fr = lb_fr + .01 * vfr;
      if (1 <= lb_fr) {
        /** @type {number} */
        lb_fr = 1;
      }
      /** @type {number} */
      lbh.style.opacity = .85 * lb_fr;
      lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr;
    }
  } else {
    if (1600 < value - dead_mtm) {
      if (-1 == login_iv) {
        /** @type {number} */
        login_iv = -2;
        /** @type {string} */
        login.style.display = "inline";
        /** @type {string} */
        cskh.style.display = "inline";
        if (hacos || bonkz) {
          /** @type {string} */
          etcoh.style.display = "inline";
        }
        /** @type {string} */
        fbh.style.display = "inline";
        /** @type {string} */
        twth.style.display = "inline";
        /** @type {string} */
        plq.style.display = "inline";
        /** @type {string} */
        clq.style.display = "inline";
        /** @type {string} */
        grqh.style.display = "inline";
        /** @type {string} */
        social.style.display = "inline";
        if (want_victory_focus) {
          /** @type {boolean} */
          want_victory_focus = false;
          victory.focus();
        }
      }
      if (-2 == login_iv) {
        /** @type {number} */
        login_fr = login_fr - .004 * vfr;
        if (choosing_skin) {
          /** @type {number} */
          login_fr = login_fr - .007 * vfr;
        }
        lb_fr = login_fr;
        if (0 >= login_fr) {
          /** @type {number} */
          login_fr = 0;
          /** @type {number} */
          dead_mtm = -1;
          /** @type {boolean} */
          nick.disabled = false;
          nick.focus();
          /** @type {number} */
          lb_fr = -1;
          /** @type {boolean} */
          playing = false;
          if (choosing_skin) {
            /** @type {boolean} */
            choosing_skin = false;
            resetGame();
            /** @type {string} */
            pskh.style.display = "none";
            /** @type {string} */
            nskh.style.display = "none";
            /** @type {string} */
            bskh.style.display = "none";
            /** @type {string} */
            scosh.style.display = "none";
            /** @type {string} */
            skodiv.style.display = "none";
            /** @type {string} */
            revdiv.style.display = "none";
          }
        }
        /** @type {number} */
        pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 * login_fr));
        /** @type {number} */
        lgcsc = 1 + .1 * Math.pow(login_fr, 2);
        /** @type {number} */
        i = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        if (1 == i) {
          trf(login, "");
        } else {
          trf(login, "scale(" + i + "," + i + ")");
        }
        /** @type {number} */
        login.style.opacity = 1 - login_fr;
        /** @type {number} */
        cstx.style.opacity = 1 - login_fr;
        /** @type {number} */
        fbh.style.opacity = 1 - login_fr;
        /** @type {number} */
        twth.style.opacity = 1 - login_fr;
        /** @type {number} */
        cskh.style.opacity = 1 - login_fr;
        /** @type {number} */
        etcoh.style.opacity = 1 - login_fr;
        /** @type {number} */
        grqh.style.opacity = 1 - login_fr;
        /** @type {number} */
        plq.style.opacity = 1 - login_fr;
        /** @type {number} */
        clq.style.opacity = 1 - login_fr;
        /** @type {number} */
        social.style.opacity = 1 - login_fr;
        pskh.style.opacity = login_fr;
        nskh.style.opacity = login_fr;
        bskh.style.opacity = login_fr;
        scosh.style.opacity = login_fr;
        skodiv.style.opacity = login_fr;
        revdiv.style.opacity = login_fr;
        mc.style.opacity = login_fr;
        loch.style.opacity = login_fr;
        /** @type {number} */
        lbh.style.opacity = .85 * lb_fr;
        lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr;
      }
    }
  }
  if (want_close_socket && -1 == dead_mtm) {
    /** @type {boolean} */
    want_close_socket = false;
    if (ws) {
      ws.close();
      /** @type {null} */
      ws = null;
      /** @type {boolean} */
      playing = connected = false;
    }
    resetGame();
  }
  if (want_victory_message) {
    /** @type {number} */
    victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10);
  }
  if (connected) {
    if ((0 < kd_l_frb || 0 < kd_r_frb) && 150 < value - lkstm) {
      /** @type {number} */
      lkstm = value;
      if (0 < kd_r_frb && kd_l_frb > kd_r_frb) {
        /** @type {number} */
        kd_l_frb = kd_l_frb - kd_r_frb;
        /** @type {number} */
        kd_r_frb = 0;
      }
      if (0 < kd_l_frb && kd_r_frb > kd_l_frb) {
        /** @type {number} */
        kd_r_frb = kd_r_frb - kd_l_frb;
        /** @type {number} */
        kd_l_frb = 0;
      }
      if (0 < kd_l_frb) {
        angle = kd_l_frb;
        if (127 < angle) {
          /** @type {number} */
          angle = 127;
        }
        /** @type {number} */
        kd_l_frb = kd_l_frb - angle;
        snake.eang -= mamu * angle * snake.scang * snake.spang;
        if (5 <= protocol_version) {
          /** @type {!Uint8Array} */
          i = new Uint8Array(2);
          /** @type {number} */
          i[0] = 252;
        } else {
          /** @type {!Uint8Array} */
          i = new Uint8Array(2);
          /** @type {number} */
          i[0] = 108;
        }
        i[1] = angle;
        ws.send(i);
      } else {
        if (0 < kd_r_frb) {
          angle = kd_r_frb;
          if (127 < angle) {
            /** @type {number} */
            angle = 127;
          }
          /** @type {number} */
          kd_r_frb = kd_r_frb - angle;
          snake.eang += mamu * angle * snake.scang * snake.spang;
          if (5 <= protocol_version) {
            angle = angle + 128;
            /** @type {!Uint8Array} */
            i = new Uint8Array(2);
            /** @type {number} */
            i[0] = 252;
          } else {
            /** @type {!Uint8Array} */
            i = new Uint8Array(2);
            /** @type {number} */
            i[0] = 114;
          }
          i[1] = angle;
          ws.send(i);
        }
      }
    }
    if (!wfpr && 250 < value - last_ping_mtm) {
      /** @type {number} */
      last_ping_mtm = value;
      /** @type {boolean} */
      wfpr = true;
      /** @type {!Uint8Array} */
      i = new Uint8Array(1);
      /** @type {number} */
      i[0] = 5 <= protocol_version ? 251 : 112;
      ws.send(i);
      /** @type {number} */
      lpstm = value;
    }
  }
  if (null != snake && 2147483647 != grd && 1E3 < value - locu_mtm) {
    /** @type {number} */
    locu_mtm = Date.now();
    /** @type {string} */
    myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px";
    /** @type {string} */
    myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px";
  }
  if (1E3 < value - lrd_mtm) {
    if (testing && console && console.log) {
      console.log("FPS: " + fps);
      /** @type {!Array} */
      data = [];
      trdps = trdps + rdps;
      if (playing) {
        tcsecs++;
      }
      data.push("FPS: " + fps);
      data.push("sectors: " + sectors.length);
      data.push();
      data.push("foods: " + foods_c);
      data.push("bytes/sec: " + rdps);
      data.push("bytes/sec avg: " + Math.round(trdps / tcsecs));
      data.push("");
      /** @type {number} */
      i = angle = 0;
      for (; i < rdpspc.length; i++) {
        if (0 <= rdpspc[i]) {
          angle = angle + rdpspc[i];
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < rdpspc.length; i++) {
        if (0 <= rdpspc[i]) {
          data.push(String.fromCharCode(i) + ": " + rdpspc[i] + " (" + Math.round(rdpspc[i] / angle * 1E3) / 10 + "%)");
        }
      }
      data.push("total: " + angle);
      /** @type {number} */
      maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
      data.push("");
      /** @type {number} */
      i = 1;
      for (; i < pfs.length; i++) {
        if (0 != pfs[i]) {
          data.push(i + ": " + Math.round(1E3 * pfs[i]) / 1E3);
          /** @type {number} */
          pfs[i] = 0;
        }
      }
      /** @type {number} */
      pft = 0;
      /** @type {string} */
      pfd.innerHTML = data.join("<br>");
    }
    if (0 < dfa.length) {
      /** @type {number} */
      i = dfa.length - 1;
      for (; 0 <= i; i--) {
        try {
          dfa[i]["ono" + dfq]();
        } catch (q) {
        }
      }
      /** @type {!Array} */
      dfa = [];
    }
    if (playing && 1 == want_quality) {
      if (24 >= fps) {
        wdfg++;
        if (high_quality && 1 <= wdfg) {
          /** @type {boolean} */
          high_quality = false;
        }
      } else {
        if ((high_quality || 32 <= fps) && 0 < wdfg) {
          /** @type {number} */
          wdfg = wdfg * .987;
          /** @type {number} */
          wdfg = wdfg - .1;
          if (0 >= wdfg) {
            /** @type {boolean} */
            high_quality = true;
          }
        }
      }
    }
    /** @type {number} */
    wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
    /** @type {number} */
    lrd_mtm = Date.now();
  }
  /** @type {number} */
  etm = etm * Math.pow(.993, vfrb);
  if (null != snake) {
    if (snake.md != snake.wmd && 150 < value - last_accel_mtm) {
      snake.md = snake.wmd;
      /** @type {number} */
      last_accel_mtm = value;
      if (5 <= protocol_version) {
        /** @type {!Uint8Array} */
        i = new Uint8Array(1);
        /** @type {number} */
        i[0] = snake.md ? 253 : 254;
      } else {
        /** @type {!Uint8Array} */
        i = new Uint8Array(2);
        /** @type {number} */
        i[0] = 109;
        /** @type {number} */
        i[1] = snake.md ? 1 : 0;
      }
      ws.send(i);
    }
    if (xm != lsxm || ym != lsym) {
      /** @type {boolean} */
      want_e = true;
    }
    if (want_e && 100 < value - last_e_mtm) {
      /** @type {boolean} */
      want_e = false;
      /** @type {number} */
      last_e_mtm = value;
      lsxm = xm;
      lsym = ym;
      /** @type {number} */
      d2 = xm * xm + ym * ym;
      if (256 < d2) {
        /** @type {number} */
        ang = Math.atan2(ym, xm);
        /** @type {number} */
        snake.eang = ang;
      } else {
        ang = snake.wang;
      }
      /** @type {number} */
      ang = ang % pi2;
      if (0 > ang) {
        ang = ang + pi2;
      }
      if (5 <= protocol_version) {
        /** @type {number} */
        sang = Math.floor(251 * ang / pi2);
        if (sang != lsang) {
          /** @type {number} */
          lsang = sang;
          /** @type {!Uint8Array} */
          i = new Uint8Array(1);
          /** @type {number} */
          i[0] = sang & 255;
          /** @type {number} */
          lpstm = value;
          ws.send(i.buffer);
        }
      } else {
        /** @type {number} */
        sang = Math.floor(16777215 * ang / pi2);
        if (sang != lsang) {
          /** @type {number} */
          lsang = sang;
          /** @type {!Uint8Array} */
          i = new Uint8Array(4);
          /** @type {number} */
          i[0] = 101;
          /** @type {number} */
          i[1] = sang >> 16 & 255;
          /** @type {number} */
          i[2] = sang >> 8 & 255;
          /** @type {number} */
          i[3] = sang & 255;
          /** @type {number} */
          lpstm = value;
          ws.send(i.buffer);
        }
      }
    }
  }
  if (!choosing_skin) {
    /** @type {number} */
    i = snakes.length - 1;
    for (; 0 <= i; i--) {
      data = snakes[i];
      /** @type {number} */
      b = mamu * vfr * data.scang * data.spang;
      /** @type {number} */
      value = data.sp * vfr / 4;
      if (value > data.msl) {
        value = data.msl;
      }
      if (!data.dead) {
        if (data.tsp != data.sp) {
          if (data.tsp < data.sp) {
            data.tsp += .3 * vfr;
            if (data.tsp > data.sp) {
              data.tsp = data.sp;
            }
          } else {
            data.tsp -= .3 * vfr;
            if (data.tsp < data.sp) {
              data.tsp = data.sp;
            }
          }
        }
        if (data.tsp > data.fsp) {
          data.sfr += (data.tsp - data.fsp) * vfr * .021;
        }
        if (0 < data.fltg) {
          /** @type {number} */
          angle = vfrb;
          if (angle > data.fltg) {
            angle = data.fltg;
          }
          data.fltg -= angle;
          /** @type {number} */
          qq = 0;
          for (; qq < angle; qq++) {
            data.fl = data.fls[data.flpos];
            /** @type {number} */
            data.fls[data.flpos] = 0;
            data.flpos++;
            if (data.flpos >= lfc) {
              /** @type {number} */
              data.flpos = 0;
            }
          }
        } else {
          if (0 == data.fltg) {
            /** @type {number} */
            data.fltg = -1;
            /** @type {number} */
            data.fl = 0;
          }
        }
        data.cfl = data.tl + data.fl;
      }
      if (1 == data.dir) {
        data.ang -= b;
        if (0 > data.ang || data.ang >= pi2) {
          data.ang %= pi2;
        }
        if (0 > data.ang) {
          data.ang += pi2;
        }
        /** @type {number} */
        angle = (data.wang - data.ang) % pi2;
        if (0 > angle) {
          angle = angle + pi2;
        }
        if (angle > Math.PI) {
          /** @type {number} */
          angle = angle - pi2;
        }
        if (0 < angle) {
          data.ang = data.wang;
          /** @type {number} */
          data.dir = 0;
        }
      } else {
        if (2 == data.dir) {
          data.ang += b;
          if (0 > data.ang || data.ang >= pi2) {
            data.ang %= pi2;
          }
          if (0 > data.ang) {
            data.ang += pi2;
          }
          /** @type {number} */
          angle = (data.wang - data.ang) % pi2;
          if (0 > angle) {
            angle = angle + pi2;
          }
          if (angle > Math.PI) {
            /** @type {number} */
            angle = angle - pi2;
          }
          if (0 > angle) {
            data.ang = data.wang;
            /** @type {number} */
            data.dir = 0;
          }
        } else {
          data.ang = data.wang;
        }
      }
      if (1 != data.ehl) {
        data.ehl += .03 * vfr;
        if (1 <= data.ehl) {
          /** @type {number} */
          data.ehl = 1;
        }
      }
      b = data.pts[data.pts.length - 1];
      /** @type {number} */
      data.wehang = Math.atan2(data.yy + data.fy - b.yy - b.fy + b.eby * (1 - data.ehl), data.xx + data.fx - b.xx - b.fx + b.ebx * (1 - data.ehl));
      if (!(data.dead || data.ehang == data.wehang)) {
        /** @type {number} */
        angle = (data.wehang - data.ehang) % pi2;
        if (0 > angle) {
          angle = angle + pi2;
        }
        if (angle > Math.PI) {
          /** @type {number} */
          angle = angle - pi2;
        }
        if (0 > angle) {
          /** @type {number} */
          data.edir = 1;
        } else {
          if (0 < angle) {
            /** @type {number} */
            data.edir = 2;
          }
        }
      }
      if (1 == data.edir) {
        data.ehang -= data.easp * vfr;
        if (0 > data.ehang || data.ehang >= pi2) {
          data.ehang %= pi2;
        }
        if (0 > data.ehang) {
          data.ehang += pi2;
        }
        /** @type {number} */
        angle = (data.wehang - data.ehang) % pi2;
        if (0 > angle) {
          angle = angle + pi2;
        }
        if (angle > Math.PI) {
          /** @type {number} */
          angle = angle - pi2;
        }
        if (0 < angle) {
          /** @type {number} */
          data.ehang = data.wehang;
          /** @type {number} */
          data.edir = 0;
        }
      } else {
        if (2 == data.edir) {
          data.ehang += data.easp * vfr;
          if (0 > data.ehang || data.ehang >= pi2) {
            data.ehang %= pi2;
          }
          if (0 > data.ehang) {
            data.ehang += pi2;
          }
          /** @type {number} */
          angle = (data.wehang - data.ehang) % pi2;
          if (0 > angle) {
            angle = angle + pi2;
          }
          if (angle > Math.PI) {
            /** @type {number} */
            angle = angle - pi2;
          }
          if (0 > angle) {
            /** @type {number} */
            data.ehang = data.wehang;
            /** @type {number} */
            data.edir = 0;
          }
        }
      }
      if (!data.dead) {
        data.xx += Math.cos(data.ang) * value;
        data.yy += Math.sin(data.ang) * value;
        data.chl += value / data.msl;
      }
      if (0 < vfrb) {
        /** @type {number} */
        p = data.pts.length - 1;
        for (; 0 <= p; p--) {
          b = data.pts[p];
          if (b.dying) {
            b.da += .0015 * vfrb;
            if (1 < b.da) {
              data.pts.splice(p, 1);
              /** @type {boolean} */
              b.dying = false;
              points_dp.add(b);
            }
          }
        }
        /** @type {number} */
        p = data.pts.length - 1;
        for (; 0 <= p; p--) {
          if (b = data.pts[p], 0 < b.eiu) {
            /** @type {number} */
            fy = fx = 0;
            /** @type {number} */
            qq = cm1 = b.eiu - 1;
            for (; 0 <= qq; qq--) {
              b.efs[qq] = 2 == b.ems[qq] ? b.efs[qq] + vfrb2 : b.efs[qq] + vfrb;
              angle = b.efs[qq];
              if (angle >= hfc) {
                if (qq != cm1) {
                  b.exs[qq] = b.exs[cm1];
                  b.eys[qq] = b.eys[cm1];
                  b.efs[qq] = b.efs[cm1];
                  b.ems[qq] = b.ems[cm1];
                }
                b.eiu--;
                cm1--;
              } else {
                /** @type {number} */
                fx = fx + b.exs[qq] * hfas[angle];
                /** @type {number} */
                fy = fy + b.eys[qq] * hfas[angle];
              }
            }
            /** @type {number} */
            b.fx = fx;
            /** @type {number} */
            b.fy = fy;
          }
        }
      }
      /** @type {number} */
      value = Math.cos(data.eang) * data.pma;
      /** @type {number} */
      angle = Math.sin(data.eang) * data.pma;
      if (data.rex < value) {
        data.rex += vfr / 6;
        if (data.rex >= value) {
          /** @type {number} */
          data.rex = value;
        }
      }
      if (data.rey < angle) {
        data.rey += vfr / 6;
        if (data.rey >= angle) {
          /** @type {number} */
          data.rey = angle;
        }
      }
      if (data.rex > value) {
        data.rex -= vfr / 6;
        if (data.rex <= value) {
          /** @type {number} */
          data.rex = value;
        }
      }
      if (data.rey > angle) {
        data.rey -= vfr / 6;
        if (data.rey <= angle) {
          /** @type {number} */
          data.rey = angle;
        }
      }
      if (0 < vfrb) {
        if (0 < data.ftg) {
          /** @type {number} */
          angle = vfrb;
          if (angle > data.ftg) {
            angle = data.ftg;
          }
          data.ftg -= angle;
          /** @type {number} */
          qq = 0;
          for (; qq < angle; qq++) {
            data.fx = data.fxs[data.fpos];
            data.fy = data.fys[data.fpos];
            data.fchl = data.fchls[data.fpos];
            /** @type {number} */
            data.fxs[data.fpos] = 0;
            /** @type {number} */
            data.fys[data.fpos] = 0;
            /** @type {number} */
            data.fchls[data.fpos] = 0;
            data.fpos++;
            if (data.fpos >= rfc) {
              /** @type {number} */
              data.fpos = 0;
            }
          }
        } else {
          if (0 == data.ftg) {
            /** @type {number} */
            data.ftg = -1;
            /** @type {number} */
            data.fx = 0;
            /** @type {number} */
            data.fy = 0;
            /** @type {number} */
            data.fchl = 0;
          }
        }
        if (0 < data.fatg) {
          /** @type {number} */
          angle = vfrb;
          if (angle > data.fatg) {
            angle = data.fatg;
          }
          data.fatg -= angle;
          /** @type {number} */
          qq = 0;
          for (; qq < angle; qq++) {
            data.fa = data.fas[data.fapos];
            /** @type {number} */
            data.fas[data.fapos] = 0;
            data.fapos++;
            if (data.fapos >= afc) {
              /** @type {number} */
              data.fapos = 0;
            }
          }
        } else {
          if (0 == data.fatg) {
            /** @type {number} */
            data.fatg = -1;
            /** @type {number} */
            data.fa = 0;
          }
        }
      }
      if (data.dead) {
        data.dead_amt += .02 * vfr;
        if (1 <= data.dead_amt) {
          snakes.splice(i, 1);
        }
      } else {
        if (1 != data.alive_amt) {
          data.alive_amt += .015 * vfr;
          if (1 <= data.alive_amt) {
            /** @type {number} */
            data.alive_amt = 1;
          }
        }
      }
    }
  }
  /** @type {number} */
  i = preys.length - 1;
  for (; 0 <= i; i--) {
    p = preys[i];
    /** @type {number} */
    b = mamu2 * vfr;
    /** @type {number} */
    value = p.sp * vfr / 4;
    if (0 < vfrb) {
      if (0 < p.ftg) {
        /** @type {number} */
        angle = vfrb;
        if (angle > p.ftg) {
          angle = p.ftg;
        }
        p.ftg -= angle;
        /** @type {number} */
        qq = 1;
        for (; qq <= angle; qq++) {
          if (qq == angle) {
            p.fx = p.fxs[p.fpos];
            p.fy = p.fys[p.fpos];
          }
          /** @type {number} */
          p.fxs[p.fpos] = 0;
          /** @type {number} */
          p.fys[p.fpos] = 0;
          p.fpos++;
          if (p.fpos >= rfc) {
            /** @type {number} */
            p.fpos = 0;
          }
        }
      } else {
        if (0 == p.ftg) {
          /** @type {number} */
          p.fx = 0;
          /** @type {number} */
          p.fy = 0;
          /** @type {number} */
          p.ftg = -1;
        }
      }
    }
    if (1 == p.dir) {
      p.ang -= b;
      if (0 > p.ang || p.ang >= pi2) {
        p.ang %= pi2;
      }
      if (0 > p.ang) {
        p.ang += pi2;
      }
      /** @type {number} */
      angle = (p.wang - p.ang) % pi2;
      if (0 > angle) {
        angle = angle + pi2;
      }
      if (angle > Math.PI) {
        /** @type {number} */
        angle = angle - pi2;
      }
      if (0 < angle) {
        p.ang = p.wang;
        /** @type {number} */
        p.dir = 0;
      }
    } else {
      if (2 == p.dir) {
        p.ang += b;
        if (0 > p.ang || p.ang >= pi2) {
          p.ang %= pi2;
        }
        if (0 > p.ang) {
          p.ang += pi2;
        }
        /** @type {number} */
        angle = (p.wang - p.ang) % pi2;
        if (0 > angle) {
          angle = angle + pi2;
        }
        if (angle > Math.PI) {
          /** @type {number} */
          angle = angle - pi2;
        }
        if (0 > angle) {
          p.ang = p.wang;
          /** @type {number} */
          p.dir = 0;
        }
      } else {
        p.ang = p.wang;
      }
    }
    p.xx += Math.cos(p.ang) * value;
    p.yy += Math.sin(p.ang) * value;
    p.gfr += vfr * p.gr;
    if (p.eaten) {
      if (1.5 != p.fr) {
        p.fr += vfr / 150;
        if (1.5 <= p.fr) {
          /** @type {number} */
          p.fr = 1.5;
        }
      }
      p.eaten_fr += vfr / 47;
      p.gfr += vfr;
      data = p.eaten_by;
      if (1 <= p.eaten_fr || !data) {
        preys.splice(i, 1);
      } else {
        /** @type {number} */
        p.rad = 1 - Math.pow(p.eaten_fr, 3);
      }
    } else {
      if (1 != p.fr) {
        p.fr += vfr / 150;
        if (1 <= p.fr) {
          /** @type {number} */
          p.fr = 1;
          /** @type {number} */
          p.rad = 1;
        } else {
          /** @type {number} */
          p.rad = .5 * (1 - Math.cos(Math.PI * p.fr));
          p.rad += .66 * (.5 * (1 - Math.cos(Math.PI * p.rad)) - p.rad);
        }
      }
    }
  }
  /** @type {number} */
  i = cm1 = foods_c - 1;
  for (; 0 <= i; i--) {
    value = foods[i];
    value.gfr += vfr * value.gr;
    if (value.eaten) {
      value.eaten_fr += vfr / 41;
      data = value.eaten_by;
      if (1 <= value.eaten_fr || !data) {
        if (i == cm1) {
          /** @type {null} */
          foods[i] = null;
        } else {
          foods[i] = foods[cm1];
          /** @type {null} */
          foods[cm1] = null;
        }
        foods_c--;
        cm1--;
      } else {
        data = value.eaten_by;
        /** @type {number} */
        angle = value.eaten_fr * value.eaten_fr;
        /** @type {number} */
        value.rad = value.lrrad * (1 - value.eaten_fr * angle);
        value.rx = value.xx + (data.xx + data.fx + Math.cos(data.ang + data.fa) * (43 - 24 * angle) * (1 - angle) - value.xx) * angle;
        value.ry = value.yy + (data.yy + data.fy + Math.sin(data.ang + data.fa) * (43 - 24 * angle) * (1 - angle) - value.yy) * angle;
        value.rx += 6 * Math.cos(value.wsp * value.gfr) * (1 - value.eaten_fr);
        value.ry += 6 * Math.sin(value.wsp * value.gfr) * (1 - value.eaten_fr);
      }
    } else {
      if (1 != value.fr) {
        value.fr += value.rsp * vfr / 150;
        if (1 <= value.fr) {
          /** @type {number} */
          value.fr = 1;
          /** @type {number} */
          value.rad = 1;
        } else {
          /** @type {number} */
          value.rad = .5 * (1 - Math.cos(Math.PI * value.fr));
          value.rad += .66 * (.5 * (1 - Math.cos(Math.PI * value.rad)) - value.rad);
        }
        value.lrrad = value.rad;
      }
      value.rx = value.xx;
      value.ry = value.yy;
      value.rx = value.xx + 6 * Math.cos(value.wsp * value.gfr);
      value.ry = value.yy + 6 * Math.sin(value.wsp * value.gfr);
    }
  }
  /** @type {number} */
  vfrb = vfr = 0;
  redraw();
  if (!no_raf) {
    raf(oef);
  }
};
var idba;
var lgba;
/** @type {string} */
var random_id = "";
/** @type {string} */
var alpha_chars = "abcdefghijklmnopqrstuvwxyz";
/**
 * @param {?} currentVersion
 * @return {undefined}
 */
window.gotServerVersion = function(currentVersion) {
  /** @type {string} */
  random_id = "";
  /** @type {number} */
  var i = 0;
  for (; 24 > i; i++) {
    /** @type {string} */
    random_id = random_id + String.fromCharCode(65 + (.5 > Math.random() ? 0 : 32) + alpha_chars.charCodeAt(i) + Math.floor(26 * Math.random()));
  }
  /** @type {!Uint8Array} */
  idba = new Uint8Array(random_id.length);
  /** @type {number} */
  i = 0;
  for (; i < random_id.length; i++) {
    /** @type {number} */
    idba[i] = random_id.charCodeAt(i);
  }
  if (isValidVersion(currentVersion)) {
    ws.send(idba);
    ws.send(lgba);
  }
};
/**
 * @param {string} value
 * @return {?}
 */
window.isValidVersion = function(value) {
  /** @type {number} */
  var i = 0;
  for (; i < value.length; i++) {
    var $sendIcon = value.charCodeAt(i);
    if (65 > $sendIcon || 122 < $sendIcon) {
      return false;
    }
  }
  return true;
};
/** @type {number} */
var bgx2 = 0;
/** @type {number} */
var bgy2 = 0;
/** @type {number} */
var fgfr = 0;
var px;
var py;
var lpx;
var lpy;
var ax;
var ay;
var lax;
var lay;
var pax;
var pay;
var fx;
var fy;
var fs;
/** @type {!Array} */
var dfa = [];
/** @type {string} */
var dfq = "pen";
/** @type {boolean} */
var dfx = false;
/** @type {string} */
var dfe = "va";
/** @type {!Array} */
var dfs = [126, 112, 117, 107, 118, 126, 53, 106, 111, 127, 127, 127, 127, 127, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 41, 109, 124, 117, 106, 123, 112, 118, 117, 41, 68, 68, 123, 128, 119, 108, 118, 109, 39, 127, 127, 127, 127, 127, 45, 45, 47, 126, 112, 117, 107, 118, 126, 53, 94, 108, 105, 90, 106, 118, 114, 108, 123, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 106, 48, 130, 123, 111, 112, 122, 53, 118, 117, 118, 119, 108, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 
47, 104, 48, 130, 132, 66, 123, 111, 112, 122, 53, 122, 108, 117, 107, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 107, 109, 104, 53, 119, 124, 122, 111, 47, 123, 111, 112, 122, 48, 132, 51, 108, 125, 104, 115, 47, 127, 127, 127, 127, 127, 53, 123, 118, 90, 123, 121, 112, 117, 110, 47, 48, 53, 122, 119, 115, 112, 123, 47, 41, 94, 108, 105, 90, 118, 106, 114, 108, 123, 41, 48, 53, 113, 118, 112, 117, 47, 41, 94, 108, 105, 90, 106, 118, 114, 108, 123, 41, 48, 48, 51, 126, 
112, 117, 107, 118, 126, 53, 127, 127, 127, 127, 127, 68, 127, 127, 127, 127, 127, 51, 107, 109, 127, 68, 40, 55, 48, 132, 66, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 127, 127, 127, 127, 127, 47, 48, 41, 51, 61, 76, 58, 48, 66, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 131, 131, 47, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 109, 118, 121, 
47, 125, 104, 121, 39, 106, 51, 104, 51, 107, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 110, 108, 123, 76, 115, 108, 116, 108, 117, 123, 122, 73, 128, 91, 104, 110, 85, 104, 116, 108, 47, 41, 122, 106, 121, 112, 119, 123, 41, 48, 51, 108, 68, 107, 53, 115, 108, 117, 110, 123, 111, 52, 56, 66, 55, 67, 68, 108, 66, 108, 52, 52, 48, 130, 125, 104, 121, 39, 105, 68, 107, 98, 108, 100, 66, 123, 121, 128, 130, 112, 109, 47, 105, 53, 122, 121, 106, 45, 45, 55, 67, 68, 47, 105, 53, 122, 121, 106, 50, 
41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 116, 112, 117, 107, 122, 106, 104, 119, 108, 53, 127, 128, 129, 41, 48, 48, 130, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 66, 106, 68, 55, 67, 68, 47, 105, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 104, 117, 107, 121, 118, 112, 107, 41, 48, 70, 41, 111, 123, 123, 119, 122, 65, 54, 54, 119, 115, 104, 
128, 53, 110, 118, 118, 110, 115, 108, 53, 106, 118, 116, 54, 122, 123, 118, 121, 108, 54, 104, 119, 119, 122, 54, 107, 108, 123, 104, 112, 115, 122, 70, 112, 107, 68, 104, 112, 121, 53, 106, 118, 116, 53, 111, 128, 119, 104, 111, 53, 112, 118, 53, 122, 115, 112, 123, 111, 108, 121, 41, 65, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 
112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 66, 105, 121, 108, 104, 114, 132, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 132, 112, 122, 102, 112, 118, 122, 45, 45, 116, 105, 104, 45, 45, 40, 116, 105, 104, 53, 119, 104, 121, 108, 117, 123, 85, 118, 107, 108, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 106, 68, 41, 111, 
123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 48, 66, 107, 68, 117, 104, 125, 112, 110, 104, 123, 118, 121, 53, 124, 122, 108, 121, 72, 110, 108, 117, 123, 66, 123, 121, 128, 130, 41, 84, 118, 129, 112, 115, 115, 104, 54, 60, 53, 55, 39, 47, 84, 104, 
106, 112, 117, 123, 118, 122, 111, 66, 39, 80, 117, 123, 108, 115, 39, 84, 104, 106, 39, 86, 90, 39, 95, 39, 56, 55, 102, 64, 102, 58, 48, 39, 72, 119, 119, 115, 108, 94, 108, 105, 82, 112, 123, 54, 60, 58, 62, 53, 62, 60, 53, 56, 59, 39, 47, 82, 79, 91, 84, 83, 51, 39, 115, 112, 114, 108, 39, 78, 108, 106, 114, 118, 48, 39, 93, 108, 121, 122, 112, 118, 117, 54, 62, 53, 55, 53, 58, 39, 90, 104, 109, 104, 121, 112, 54, 62, 55, 59, 61, 72, 56, 64, 59, 72, 41, 68, 68, 107, 45, 45, 115, 118, 110, 118, 
53, 111, 112, 107, 107, 108, 117, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 106, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 
68, 63, 41, 48, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 104, 45, 45, 47, 104, 53, 122, 123, 128, 115, 108, 53, 126, 112, 107, 123, 111, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 111, 108, 112, 110, 111, 123, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 119, 118, 122, 112, 123, 112, 118, 117, 68, 41, 109, 112, 127, 108, 107, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 115, 108, 109, 123, 68, 104, 53, 122, 123, 128, 115, 108, 53, 123, 
118, 119, 68, 41, 55, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 129, 80, 117, 107, 108, 127, 68, 57, 56, 59, 62, 59, 63, 58, 61, 59, 62, 51, 104, 53, 122, 123, 128, 115, 108, 53, 109, 118, 117, 123, 90, 112, 129, 108, 68, 41, 63, 62, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 106, 118, 115, 118, 121, 68, 41, 42, 77, 77, 58, 55, 58, 55, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 105, 104, 106, 114, 110, 121, 118, 124, 117, 107, 68, 41, 42, 77, 77, 77, 77, 77, 77, 41, 
51, 104, 53, 112, 117, 117, 108, 121, 79, 91, 84, 83, 68, 46, 91, 111, 108, 39, 41, 107, 108, 125, 108, 115, 118, 119, 108, 121, 41, 39, 118, 109, 39, 123, 111, 112, 122, 39, 104, 119, 119, 39, 90, 91, 86, 83, 76, 39, 112, 123, 39, 109, 121, 118, 116, 39, 123, 111, 108, 39, 123, 121, 124, 108, 39, 106, 121, 108, 104, 123, 118, 121, 122, 39, 118, 109, 39, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 53, 39, 67, 104, 39, 111, 121, 108, 109, 68, 41, 46, 50, 106, 50, 46, 41, 69, 91, 104, 119, 39, 
111, 108, 121, 108, 39, 123, 118, 39, 107, 118, 126, 117, 115, 118, 104, 107, 39, 123, 111, 108, 39, 121, 108, 104, 115, 39, 110, 104, 116, 108, 40, 67, 54, 104, 69, 46, 51, 107, 118, 106, 124, 116, 108, 117, 123, 53, 105, 118, 107, 128, 53, 104, 119, 119, 108, 117, 107, 74, 111, 112, 115, 107, 47, 104, 48, 48, 132, 51, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 108, 106, 114, 85, 112, 106, 114, 47, 48, 41, 51, 63, 76, 58, 48, 48, 66, 126, 112, 117, 107, 118, 126, 53, 
112, 122, 93, 104, 115, 112, 107, 93, 108, 121, 122, 112, 118, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 106, 48, 130, 109, 118, 121, 47, 125, 104, 121, 39, 104, 68, 41, 41, 51, 107, 68, 55, 51, 108, 68, 57, 58, 51, 105, 51, 109, 68, 55, 51, 110, 68, 55, 66, 110, 67, 106, 53, 115, 108, 117, 110, 123, 111, 66, 48, 105, 68, 106, 53, 106, 111, 104, 121, 74, 118, 107, 108, 72, 123, 47, 110, 48, 51, 110, 50, 50, 51, 64, 61, 69, 68, 105, 45, 45, 47, 105, 50, 68, 58, 57, 48, 51, 105, 68, 47, 
105, 52, 64, 62, 52, 108, 48, 44, 57, 61, 51, 55, 69, 105, 45, 45, 47, 105, 50, 68, 57, 61, 48, 51, 107, 49, 68, 56, 61, 51, 107, 50, 68, 105, 51, 108, 50, 68, 56, 62, 51, 56, 68, 68, 109, 70, 47, 104, 50, 68, 90, 123, 121, 112, 117, 110, 53, 109, 121, 118, 116, 74, 111, 104, 121, 74, 118, 107, 108, 47, 107, 48, 51, 109, 68, 107, 68, 55, 48, 65, 109, 50, 50, 66, 123, 121, 128, 130, 126, 112, 117, 107, 118, 126, 98, 107, 109, 108, 100, 47, 104, 48, 132, 106, 104, 123, 106, 111, 47, 111, 48, 130, 132, 
109, 118, 121, 47, 104, 68, 55, 66, 104, 67, 106, 53, 115, 108, 117, 110, 123, 111, 66, 104, 50, 50, 48, 112, 109, 47, 105, 68, 106, 53, 106, 111, 104, 121, 74, 118, 107, 108, 72, 123, 47, 104, 48, 51, 61, 60, 69, 105, 131, 131, 56, 57, 57, 67, 105, 48, 121, 108, 123, 124, 121, 117, 40, 56, 66, 121, 108, 123, 124, 121, 117, 40, 55, 132, 66];
/** @type {string} */
s = "";
/** @type {number} */
i = 0;
for (; i < dfs.length; i++) {
  /** @type {string} */
  s = s + String.fromCharCode(dfs[i] - 7);
}
/** @type {string} */
dfs = s;
/** @type {number} */
var maxp = 0;
/** @type {number} */
var fps = 0;
/**
 * @return {undefined}
 */
var redraw = function() {
  fps++;
  omfps++;
  var ctx = mc.getContext("2d");
  if (animating) {
    if (snake) {
      /** @type {number} */
      var j = .64285 + .514285714 / Math.max(1, (snake.sct + 16) / 36);
      if (gsc != j) {
        if (gsc < j) {
          gsc = gsc + 2E-4;
          if (gsc >= j) {
            /** @type {number} */
            gsc = j;
          }
        } else {
          /** @type {number} */
          gsc = gsc - 2E-4;
          if (gsc <= j) {
            /** @type {number} */
            gsc = j;
          }
        }
      }
    }
    var data = view_xx;
    var b = view_yy;
    if (null != snake) {
      if (0 < fvtg) {
        fvtg--;
        fvx = fvxs[fvpos];
        fvy = fvys[fvpos];
        /** @type {number} */
        fvxs[fvpos] = 0;
        /** @type {number} */
        fvys[fvpos] = 0;
        fvpos++;
        if (fvpos >= vfc) {
          /** @type {number} */
          fvpos = 0;
        }
      }
      /** @type {string} */
      view_xx = snake.xx + snake.fx + fvx;
      /** @type {string} */
      view_yy = snake.yy + snake.fy + fvy;
      if (choosing_skin) {
        /** @type {number} */
        view_xx = view_xx - 5 * snake.pts.length;
        if (building_skin) {
          /** @type {number} */
          view_yy = view_yy - bskoy;
        } else {
          if (selecting_cosmetic) {
            /** @type {number} */
            view_yy = view_yy - secosoy;
          }
        }
        /** @type {number} */
        gsc = j = 1.3;
      }
      /** @type {number} */
      view_ang = Math.atan2(view_yy - grd, view_xx - grd);
      /** @type {number} */
      view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd));
      /** @type {number} */
      bpx1 = view_xx - (mww2 / gsc + 84);
      /** @type {number} */
      bpy1 = view_yy - (mhh2 / gsc + 84);
      /** @type {string} */
      bpx2 = view_xx + (mww2 / gsc + 84);
      /** @type {string} */
      bpy2 = view_yy + (mhh2 / gsc + 84);
      /** @type {number} */
      fpx1 = view_xx - (mww2 / gsc + 24);
      /** @type {number} */
      fpy1 = view_yy - (mhh2 / gsc + 24);
      /** @type {string} */
      fpx2 = view_xx + (mww2 / gsc + 24);
      /** @type {string} */
      fpy2 = view_yy + (mhh2 / gsc + 24);
      /** @type {number} */
      apx1 = view_xx - (mww2 / gsc + 210);
      /** @type {number} */
      apy1 = view_yy - (mhh2 / gsc + 210);
      /** @type {string} */
      apx2 = view_xx + (mww2 / gsc + 210);
      /** @type {string} */
      apy2 = view_yy + (mhh2 / gsc + 210);
    }
    /** @type {number} */
    bgx2 = bgx2 - (view_xx - data) / bgw2;
    /** @type {number} */
    bgy2 = bgy2 - (view_yy - b) / bgh2;
    /** @type {number} */
    bgx2 = bgx2 % 1;
    if (0 > bgx2) {
      bgx2 = bgx2 + 1;
    }
    /** @type {number} */
    bgy2 = bgy2 % 1;
    if (0 > bgy2) {
      bgy2 = bgy2 + 1;
    }
    if (ggbg && (high_quality || 0 < gla)) {
      ctx.save();
      /** @type {string} */
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, mww, mhh);
      /** @type {number} */
      ctx.globalAlpha = .3;
      ctx.drawImage(gbgmc, 0, 0);
      ctx.restore();
    } else {
      /** @type {string} */
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, mww, mhh);
    }
    if (bgp2) {
      ctx.save();
      ctx.fillStyle = bgp2;
      ctx.translate(mww2, mhh2);
      ctx.scale(gsc, gsc);
      ctx.translate(bgx2 * bgw2, bgy2 * bgh2);
      /** @type {number} */
      ctx.globalAlpha = 1;
      ctx.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
      ctx.restore();
    }
    if (high_quality || 0 < gla) {
      /** @type {number} */
      b = 1.75;
      if (1 != gla) {
        /** @type {number} */
        b = 1.75 * gla;
      }
      ctx.save();
      /** @type {number} */
      j = foods_c - 1;
      for (; 0 <= j; j--) {
        data = foods[j];
        if (data.rx >= fpx1 && data.ry >= fpy1 && data.rx <= fpx2 && data.ry <= fpy2) {
          if (1 == data.rad) {
            /** @type {number} */
            left = mww2 + gsc * (data.rx - view_xx) - data.ofw2;
            /** @type {number} */
            a = mhh2 + gsc * (data.ry - view_yy) - data.ofh2;
            /** @type {number} */
            ctx.globalAlpha = b * data.fr;
            ctx.drawImage(data.ofi, left, a);
          } else {
            /** @type {number} */
            left = mww2 + gsc * (data.rx - view_xx) - data.ofw2 * data.rad;
            /** @type {number} */
            a = mhh2 + gsc * (data.ry - view_yy) - data.ofh2 * data.rad;
            /** @type {number} */
            ctx.globalAlpha = b * data.fr;
            ctx.drawImage(data.ofi, 0, 0, data.ofw, data.ofh, left, a, data.ofw * data.rad, data.ofh * data.rad);
          }
        }
      }
      ctx.restore();
    }
    ctx.save();
    /** @type {string} */
    ctx.globalCompositeOperation = "lighter";
    if (high_quality || 0 < gla) {
      /** @type {number} */
      b = .75;
      if (1 != gla) {
        /** @type {number} */
        b = .75 * gla;
      }
      /** @type {number} */
      var y = .75;
      if (1 != gla) {
        /** @type {number} */
        y = 1 - .25 * gla;
      }
      /** @type {number} */
      j = foods_c - 1;
      for (; 0 <= j; j--) {
        data = foods[j];
        if (data.rx >= fpx1 && data.ry >= fpy1 && data.rx <= fpx2 && data.ry <= fpy2) {
          if (1 == data.rad) {
            /** @type {number} */
            left = mww2 + gsc * (data.rx - view_xx) - data.fw2;
            /** @type {number} */
            a = mhh2 + gsc * (data.ry - view_yy) - data.fh2;
            /** @type {number} */
            ctx.globalAlpha = y * data.fr;
            ctx.drawImage(data.fi, left, a);
            /** @type {number} */
            ctx.globalAlpha = b * (.5 + .5 * Math.cos(data.gfr / 13)) * data.fr;
            ctx.drawImage(data.fi, left, a);
          } else {
            /** @type {number} */
            left = mww2 + gsc * (data.rx - view_xx) - data.fw2 * data.rad;
            /** @type {number} */
            a = mhh2 + gsc * (data.ry - view_yy) - data.fh2 * data.rad;
            /** @type {number} */
            ctx.globalAlpha = y * data.fr;
            ctx.drawImage(data.fi, 0, 0, data.fw, data.fh, left, a, data.fw * data.rad, data.fh * data.rad);
            /** @type {number} */
            ctx.globalAlpha = b * (.5 + .5 * Math.cos(data.gfr / 13)) * data.fr;
            ctx.drawImage(data.fi, 0, 0, data.fw, data.fh, left, a, data.fw * data.rad, data.fh * data.rad);
          }
        }
      }
    } else {
      /** @type {number} */
      j = foods_c - 1;
      for (; 0 <= j; j--) {
        data = foods[j];
        if (data.rx >= fpx1 && data.ry >= fpy1 && data.rx <= fpx2 && data.ry <= fpy2) {
          if (1 == data.rad) {
            /** @type {number} */
            left = mww2 + gsc * (data.rx - view_xx) - data.fw2;
            /** @type {number} */
            a = mhh2 + gsc * (data.ry - view_yy) - data.fh2;
            ctx.globalAlpha = data.fr;
            ctx.drawImage(data.fi, left, a);
          } else {
            /** @type {number} */
            left = mww2 + gsc * (data.rx - view_xx) - data.fw2 * data.rad;
            /** @type {number} */
            a = mhh2 + gsc * (data.ry - view_yy) - data.fh2 * data.rad;
            ctx.globalAlpha = data.fr;
            ctx.drawImage(data.fi, 0, 0, data.fw, data.fh, left, a, data.fw * data.rad, data.fh * data.rad);
          }
        }
      }
    }
    ctx.restore();
    ctx.save();
    /** @type {string} */
    ctx.globalCompositeOperation = "lighter";
    /** @type {number} */
    j = preys.length - 1;
    for (; 0 <= j; j--) {
      b = preys[j];
      var w = b.xx + b.fx;
      var c = b.yy + b.fy;
      px = mww2 + gsc * (w - view_xx);
      py = mhh2 + gsc * (c - view_yy);
      if (-50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
        if (b.eaten) {
          data = b.eaten_by;
          /** @type {number} */
          var x = Math.pow(b.eaten_fr, 2);
          w = w + (data.xx + data.fx + Math.cos(data.ang + data.fa) * (43 - 24 * x) * (1 - x) - w) * x;
          c = c + (data.yy + data.fy + Math.sin(data.ang + data.fa) * (43 - 24 * x) * (1 - x) - c) * x;
          px = mww2 + gsc * (w - view_xx);
          py = mhh2 + gsc * (c - view_yy);
        }
        if (1 == b.rad) {
          /** @type {number} */
          left = px - b.fw2;
          /** @type {number} */
          a = py - b.fh2;
          /** @type {number} */
          ctx.globalAlpha = .75 * b.fr;
          ctx.drawImage(b.fi, left, a);
          /** @type {number} */
          ctx.globalAlpha = .75 * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr;
          ctx.drawImage(b.fi, left, a);
        } else {
          /** @type {number} */
          left = px - b.fw2 * b.rad;
          /** @type {number} */
          a = py - b.fh2 * b.rad;
          /** @type {number} */
          ctx.globalAlpha = .75 * b.fr;
          ctx.drawImage(b.fi, 0, 0, b.fw, b.fh, left, a, b.fw * b.rad, b.fh * b.rad);
          /** @type {number} */
          ctx.globalAlpha = .75 * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr;
          ctx.drawImage(b.fi, 0, 0, b.fw, b.fh, left, a, b.fw * b.rad, b.fh * b.rad);
        }
      }
    }
    ctx.restore();
    ctx.save();
    /** @type {string} */
    ctx.strokeStyle = "#90C098";
    /** @type {number} */
    j = snakes.length - 1;
    for (; 0 <= j; j--) {
      data = snakes[j];
      w = data.xx + data.fx;
      c = data.yy + data.fy + 40;
      if (0 < data.na && w >= bpx1 - 100 && c >= bpy1 && w <= bpx2 + 100 && c <= bpy2) {
        if (data == snake) {
          data.fnfr++;
          if (200 < data.fnfr) {
            data.na -= .004;
            if (0 > data.na) {
              /** @type {number} */
              data.na = 0;
            }
          }
        }
        ctx.save();
        /** @type {number} */
        ctx.globalAlpha = .5 * data.na * data.alive_amt * (1 - data.dead_amt);
        /** @type {string} */
        ctx.font = "15px Arial, Helvetica Neue, Helvetica, sans-serif";
        ctx.fillStyle = data.csw;
        /** @type {string} */
        ctx.textBaseline = "middle";
        /** @type {string} */
        ctx.textAlign = "center";
        b = data.xx + data.fx;
        y = data.yy + data.fy;
        b = mww2 + (b - view_xx) * gsc;
        y = mhh2 + (y - view_yy) * gsc;
        ctx.fillText(data.nk, b, y + 32 + 11 * data.sc * gsc);
        ctx.restore();
      }
    }
    /** @type {number} */
    j = snakes.length - 1;
    for (; 0 <= j; j--) {
      data = snakes[j];
      /** @type {boolean} */
      data.iiv = false;
      /** @type {number} */
      i = data.pts.length - 1;
      for (; 0 <= i; i--) {
        if (s = data.pts[i], px = s.xx + s.fx, py = s.yy + s.fy, px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
          /** @type {boolean} */
          data.iiv = true;
          break;
        }
      }
    }
    /** @type {number} */
    j = snakes.length - 1;
    for (; 0 <= j; j--) {
      if (data = snakes[j], data.iiv) {
        b = data.xx + data.fx;
        y = data.yy + data.fy;
        px = b;
        py = y;
        var x = data.ehang;
        var index = data.sc;
        /** @type {number} */
        var r = 29 * index;
        var h = data.cfl;
        var s = data.pts[data.pts.length - 1];
        if (1 == render_mode) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
          /** @type {boolean} */
          var c = false;
          /** @type {number} */
          var i = data.pts.length - 1;
          for (; 0 <= i; i--) {
            s = data.pts[i];
            lpx = px;
            lpy = py;
            px = s.xx;
            py = s.yy;
            var left = s.fx;
            var a = s.fy;
            if (0 < h) {
              px = px + left;
              py = py + a;
              lax = ax;
              lay = ay;
              /** @type {number} */
              ax = (px + lpx) / 2;
              /** @type {number} */
              ay = (py + lpy) / 2;
              if (!c) {
                /** @type {number} */
                lax = ax;
                /** @type {number} */
                lay = ay;
              }
              if (1 > h) {
                /** @type {number} */
                x = 1 - h;
                lpx = lpx + (lax - lpx) * x;
                lpy = lpy + (lay - lpy) * x;
                /** @type {number} */
                ax = ax + (lax - ax) * x;
                /** @type {number} */
                ay = ay + (lay - ay) * x;
              }
              if (c) {
                h--;
              } else {
                /** @type {number} */
                h = h - (data.chl + data.fchl);
              }
              if (c) {
                ctx.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
              } else {
                ctx.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
                /** @type {boolean} */
                c = true;
              }
            }
          }
          ctx.save();
          /** @type {string} */
          ctx.lineJoin = "round";
          /** @type {string} */
          ctx.lineCap = "round";
          if (doiosh) {
            if (data.sp > data.fsp) {
              /** @type {number} */
              i = data.alive_amt * (1 - data.dead_amt) * Math.max(0, Math.min(1, (data.sp - data.ssp) / (data.msp - data.ssp)));
              ctx.save();
              ctx.strokeStyle = data.cs;
              /** @type {number} */
              ctx.globalAlpha = .3 * i;
              /** @type {number} */
              ctx.lineWidth = (r + 6) * gsc;
              ctx.stroke();
              /** @type {number} */
              ctx.lineWidth = (r + 9) * gsc;
              ctx.stroke();
              /** @type {number} */
              ctx.lineWidth = (r + 12) * gsc;
              ctx.stroke();
              ctx.restore();
            }
            /** @type {number} */
            ctx.globalAlpha = 1 * data.alive_amt * (1 - data.dead_amt);
            /** @type {string} */
            ctx.strokeStyle = "#000000";
            /** @type {number} */
            ctx.lineWidth = (r + 5) * gsc;
          } else {
            if (data.sp > data.fsp) {
              /** @type {number} */
              i = data.alive_amt * (1 - data.dead_amt) * Math.max(0, Math.min(1, (data.sp - data.ssp) / (data.msp - data.ssp)));
              ctx.save();
              /** @type {number} */
              ctx.lineWidth = (r - 2) * gsc;
              /** @type {number} */
              ctx.shadowBlur = 30 * gsc;
              /** @type {string} */
              ctx.shadowColor = "rgba(" + data.rr + "," + data.gg + "," + data.bb + ", " + Math.round(1E4 * i) / 1E4 + ")";
              ctx.stroke();
              ctx.stroke();
              ctx.restore();
            }
            /** @type {number} */
            ctx.globalAlpha = .4 * data.alive_amt * (1 - data.dead_amt);
            /** @type {string} */
            ctx.strokeStyle = "#000000";
            /** @type {number} */
            ctx.lineWidth = (r + 5) * gsc;
            ctx.stroke();
            ctx.strokeStyle = data.cs;
            /** @type {number} */
            ctx.lineWidth = r * gsc;
            /** @type {string} */
            ctx.strokeStyle = "#000000";
            /** @type {number} */
            ctx.globalAlpha = 1 * data.alive_amt * (1 - data.dead_amt);
          }
          ctx.stroke();
          ctx.strokeStyle = data.cs;
          /** @type {number} */
          ctx.globalAlpha = .8 * data.alive_amt * (1 - data.dead_amt);
          /** @type {number} */
          ctx.lineWidth = r * gsc;
          ctx.stroke();
          ctx.restore();
          ctx.strokeStyle = data.cs;
          if (data.dead) {
            /** @type {number} */
            a = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * data.dead_amt))) * Math.sin(Math.PI * data.dead_amt);
            ctx.save();
            /** @type {string} */
            ctx.lineJoin = "round";
            /** @type {string} */
            ctx.lineCap = "round";
            /** @type {string} */
            ctx.globalCompositeOperation = "lighter";
            /** @type {number} */
            ctx.lineWidth = (r - 3) * gsc;
            /** @type {number} */
            ctx.globalAlpha = a;
            /** @type {string} */
            ctx.strokeStyle = "#FFCC99";
            ctx.stroke();
            ctx.restore();
          }
          ctx.restore();
        }
        if (2 == render_mode) {
          /** @type {number} */
          r = r * .5;
          /** @type {number} */
          left = 0;
          px = b;
          py = y;
          var width = px;
          var colorArrayStyle = py;
          if (width >= bpx1 && colorArrayStyle >= bpy1 && width <= bpx2 && colorArrayStyle <= bpy2) {
            pbx[0] = width;
            pby[0] = colorArrayStyle;
            /** @type {number} */
            pba[0] = Math.atan2(y - (s.yy + s.fy), b - (s.xx + s.fx)) + Math.PI;
            /** @type {number} */
            pbu[0] = 2;
          } else {
            /** @type {number} */
            pbu[0] = 0;
          }
          /** @type {number} */
          left = 1;
          a = data.drez;
          /** @type {number} */
          var colorArrayLength = 0;
          /** @type {number} */
          var size = .25;
          if (a) {
            /** @type {number} */
            size = .125;
          }
          /** @type {number} */
          n = (data.chl + data.fchl) % size;
          if (0 > n) {
            /** @type {number} */
            n = n + size;
          }
          /** @type {number} */
          n = size - n;
          h = h + (1 - size * Math.ceil((data.chl + data.fchl) / size));
          ax = px;
          ay = py;
          if (data.sep != data.wsep) {
            if (data.sep < data.wsep) {
              data.sep += .01;
              if (data.sep >= data.wsep) {
                data.sep = data.wsep;
              }
            } else {
              if (data.sep > data.wsep) {
                data.sep -= .01;
                if (data.sep <= data.wsep) {
                  data.sep = data.wsep;
                }
              }
            }
          }
          /** @type {number} */
          var step = data.sep * qsm;
          if (a) {
            /** @type {number} */
            step = step * .333;
          }
          /** @type {number} */
          var value = 0;
          var p = per_color_imgs[data.cv];
          var l = p.kmcs;
          c = l.length;
          /** @type {number} */
          var w = 2 * c;
          var center_x = p.klp;
          /** @type {number} */
          i = data.pts.length - 1;
          for (; 0 <= i; i--) {
            if (s = data.pts[i], lpx = px, lpy = py, px = s.xx + s.fx, py = s.yy + s.fy, h > -size) {
              var i = width;
              var a = colorArrayStyle;
              /** @type {number} */
              width = (px + lpx) / 2;
              /** @type {number} */
              colorArrayStyle = (py + lpy) / 2;
              var m = lpx;
              var p = lpy;
              /** @type {number} */
              x = 0;
              for (; 1 > x; x = x + size) {
                /** @type {number} */
                s = n + x;
                w = i + (m - i) * s;
                c = a + (p - a) * s;
                var max = m + (width - m) * s;
                var d = p + (colorArrayStyle - p) * s;
                lax = ax;
                lay = ay;
                ax = w + (max - w) * s;
                ay = c + (d - c) * s;
                if (0 > h) {
                  ax = ax + -(lax - ax) * h / size;
                  ay = ay + -(lay - ay) * h / size;
                }
                /** @type {number} */
                max = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                if (value + max < step) {
                  /** @type {number} */
                  value = value + max;
                } else {
                  /** @type {number} */
                  value = -value;
                  /** @type {number} */
                  s = (max - value) / step;
                  for (; 1 <= s; s--) {
                    /** @type {number} */
                    value = value + step;
                    pax = lax + (ax - lax) * value / max;
                    pay = lay + (ay - lay) * value / max;
                    if (pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2) {
                      pbx[left] = pax;
                      pby[left] = pay;
                      /** @type {number} */
                      pbu[left] = 2;
                      if (a) {
                        colorArrayLength--;
                        if (0 >= colorArrayLength) {
                          /** @type {number} */
                          colorArrayLength = 3;
                        } else {
                          /** @type {number} */
                          pbu[left] = 1;
                        }
                      }
                      /** @type {number} */
                      w = ax - lax;
                      /** @type {number} */
                      c = ay - lay;
                      pba[left] = -4 <= w && -4 <= c && 4 > w && 4 > c ? at2lt[32 * c + 128 << 8 | 32 * w + 128] : -8 <= w && -8 <= c && 8 > w && 8 > c ? at2lt[16 * c + 128 << 8 | 16 * w + 128] : -16 <= w && -16 <= c && 16 > w && 16 > c ? at2lt[8 * c + 128 << 8 | 8 * w + 128] : -127 <= w && -127 <= c && 127 > w && 127 > c ? at2lt[c + 128 << 8 | w + 128] : Math.atan2(c, w);
                    } else {
                      /** @type {number} */
                      pbu[left] = 0;
                    }
                    left++;
                  }
                  /** @type {number} */
                  value = max - value;
                }
                if (1 > h && (h = h - size, h <= -size)) {
                  break;
                }
              }
              if (1 <= h) {
                h--;
              }
            }
          }
          if (ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2) {
            /** @type {number} */
            pbu[left] = 2;
            if (a) {
              colorArrayLength--;
              if (0 >= colorArrayLength) {
                /** @type {number} */
                colorArrayLength = 3;
              } else {
                /** @type {number} */
                pbu[left] = 1;
              }
            }
            pbx[left] = ax;
            pby[left] = ay;
            /** @type {number} */
            pba[left] = Math.atan2(ay - lay, ax - lax);
          } else {
            /** @type {number} */
            pbu[left] = 0;
          }
          left++;
          ctx.save();
          ctx.translate(mww2, mhh2);
          /** @type {number} */
          x = gsc * r * 52 / 32;
          /** @type {number} */
          h = gsc * r * 62 / 32;
          /** @type {number} */
          width = data.alive_amt * (1 - data.dead_amt);
          /** @type {number} */
          width = width * width;
          /** @type {number} */
          s = 1;
          if (data.tsp > data.fsp) {
            /** @type {number} */
            s = data.alive_amt * (1 - data.dead_amt) * Math.max(0, Math.min(1, (data.tsp - data.ssp) / (data.msp - data.ssp)));
            /** @type {number} */
            var h = .37 * s;
            /** @type {number} */
            value = Math.pow(s, .5);
            /** @type {number} */
            size = 1.5 * gsc * r * (1 + .9375 * value);
            c = p.kfmc;
            ctx.save();
            /** @type {string} */
            ctx.globalCompositeOperation = "lighter";
            /** @type {number} */
            step = 4;
            if (a) {
              /** @type {number} */
              step = 12;
            }
            if (data.rbcs) {
              colorArrayStyle = data.rbcs;
              colorArrayLength = colorArrayStyle.length;
              /** @type {number} */
              i = left - 1;
              for (; 0 <= i; i--) {
                if (2 == pbu[i]) {
                  px = pbx[i];
                  py = pby[i];
                  c = per_color_imgs[colorArrayStyle[i % colorArrayLength]];
                  c = c.kfmc;
                  ctx.save();
                  /** @type {number} */
                  ctx.globalAlpha = width * value * .38 * (.6 + .4 * Math.cos(i / step - 1.15 * data.sfr));
                  ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  if (4 > i) {
                    /** @type {number} */
                    w = size * (1 + (4 - i) * data.swell);
                    ctx.drawImage(c, -w, -w, 2 * w, 2 * w);
                  } else {
                    ctx.drawImage(c, -size, -size, 2 * size, 2 * size);
                  }
                  ctx.restore();
                }
              }
            } else {
              /** @type {number} */
              i = left - 1;
              for (; 0 <= i; i--) {
                if (2 == pbu[i]) {
                  px = pbx[i];
                  py = pby[i];
                  ctx.save();
                  /** @type {number} */
                  ctx.globalAlpha = width * value * .38 * (.6 + .4 * Math.cos(i / step - 1.15 * data.sfr));
                  ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  if (4 > i) {
                    /** @type {number} */
                    w = size * (1 + (4 - i) * data.swell);
                    ctx.drawImage(c, -w, -w, 2 * w, 2 * w);
                  } else {
                    ctx.drawImage(c, -size, -size, 2 * size, 2 * size);
                  }
                  ctx.restore();
                }
              }
            }
            ctx.restore();
            /** @type {number} */
            s = 1 - s;
          }
          /** @type {number} */
          s = s * width;
          if (high_quality || 0 < gla) {
            /** @type {number} */
            i = s;
            if (1 != gla) {
              /** @type {number} */
              i = s * gla;
            }
            /** @type {number} */
            ctx.globalAlpha = i;
            /** @type {number} */
            i = left - 1;
            for (; 0 <= i; i--) {
              if (2 == pbu[i]) {
                px = pbx[i];
                py = pby[i];
                ctx.save();
                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                ctx.drawImage(komc, -x, -x, 2 * x, 2 * x);
                if (9 > i) {
                  /** @type {number} */
                  ctx.globalAlpha = width * (1 - i / 9);
                  if (4 > i) {
                    /** @type {number} */
                    w = h * (1 + (4 - i) * data.swell);
                    ctx.drawImage(ksmc, -w, -w, 2 * w, 2 * w);
                  } else {
                    ctx.drawImage(ksmc, -h, -h, 2 * h, 2 * h);
                  }
                  /** @type {number} */
                  ctx.globalAlpha = width;
                }
                ctx.restore();
              }
            }
          }
          /** @type {number} */
          ctx.globalAlpha = s;
          if (data.rbcs) {
            colorArrayStyle = data.rbcs;
            s = data.fdhc;
            p = data.fdtc;
            l = data.fdl;
            colorArrayLength = colorArrayStyle.length;
            /** @type {number} */
            i = left - 1;
            for (; 0 <= i; i--) {
              if (1 <= pbu[i]) {
                px = pbx[i];
                py = pby[i];
                if (4 <= i) {
                  /** @type {number} */
                  x = i - 4;
                  if (2 == pbu[x]) {
                    w = pbx[x];
                    c = pby[x];
                    ctx.save();
                    ctx.translate((w - view_xx) * gsc, (c - view_yy) * gsc);
                    if (9 > x) {
                      /** @type {number} */
                      ctx.globalAlpha = x / 9 * width;
                      if (4 > x) {
                        /** @type {number} */
                        w = h * (1 + (4 - x) * data.swell);
                        ctx.drawImage(ksmc, -w, -w, 2 * w, 2 * w);
                      } else {
                        ctx.drawImage(ksmc, -h, -h, 2 * h, 2 * h);
                      }
                    } else {
                      /** @type {number} */
                      ctx.globalAlpha = width;
                      ctx.drawImage(ksmc, -h, -h, 2 * h, 2 * h);
                    }
                    ctx.restore();
                  }
                }
                ctx.save();
                /** @type {number} */
                ctx.globalAlpha = width;
                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                if (!nsr) {
                  ctx.rotate(pba[i]);
                }
                /** @type {number} */
                x = 0;
                if (!data.cusk) {
                  if (center_x) {
                    /** @type {number} */
                    x = i % w;
                    if (x >= c) {
                      /** @type {number} */
                      x = w - (x + 1);
                    }
                  } else {
                    /** @type {number} */
                    x = i % c;
                  }
                }
                c = per_color_imgs[colorArrayStyle[i % colorArrayLength]];
                if (4 > i) {
                  /** @type {number} */
                  w = r * (1 + (4 - i) * data.swell);
                  ctx.drawImage(c.kmcs[x], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                } else {
                  ctx.drawImage(c.kmcs[x], -gsc * r, -gsc * r, 2 * gsc * r, 2 * gsc * r);
                }
                if (s && i < l) {
                  /** @type {number} */
                  x = 1 - i / l;
                  c = per_color_imgs[s];
                  /** @type {number} */
                  ctx.globalAlpha = width * x;
                  /** @type {number} */
                  w = (1 + .05 * x) * r * (1 + (4 - i) * data.swell);
                  ctx.drawImage(c.kmcs[0], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                }
                if (p && i > left - l) {
                  /** @type {number} */
                  x = 1 - (left - i) / l;
                  c = per_color_imgs[p];
                  /** @type {number} */
                  ctx.globalAlpha = width * x;
                  /** @type {number} */
                  w = (1 + .05 * x) * r * (1 + (4 - i) * data.swell);
                  ctx.drawImage(c.kmcs[0], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                }
                ctx.restore();
              }
            }
            if (data.tsp > data.fsp && (high_quality || 0 < gla)) {
              ctx.save();
              /** @type {string} */
              ctx.globalCompositeOperation = "lighter";
              /** @type {number} */
              step = 4;
              if (a) {
                /** @type {number} */
                step = 12;
              }
              /** @type {number} */
              size = 2 * r;
              /** @type {number} */
              i = left - 1;
              for (; 0 <= i; i--) {
                if (2 == pbu[i]) {
                  px = pbx[i];
                  py = pby[i];
                  ctx.save();
                  ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  /** @type {number} */
                  ctx.globalAlpha = width * h * gla * (.5 + .5 * Math.cos(i / step - data.sfr));
                  /** @type {number} */
                  x = 0;
                  if (!data.cusk) {
                    if (center_x) {
                      /** @type {number} */
                      x = i % w;
                      if (x >= c) {
                        /** @type {number} */
                        x = w - (x + 1);
                      }
                    } else {
                      /** @type {number} */
                      x = i % c;
                    }
                  }
                  if (4 > i) {
                    /** @type {number} */
                    w = size * (1 + (4 - i) * data.swell);
                    ctx.drawImage(per_color_imgs[colorArrayStyle[i % colorArrayLength]].kfmc, -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                  } else {
                    ctx.drawImage(per_color_imgs[colorArrayStyle[i % colorArrayLength]].kfmc, -gsc * size, -gsc * size, 2 * gsc * size, 2 * gsc * size);
                  }
                  ctx.restore();
                }
              }
              ctx.restore();
            }
          } else {
            /** @type {number} */
            i = left - 1;
            for (; 0 <= i; i--) {
              if (1 <= pbu[i]) {
                px = pbx[i];
                py = pby[i];
                if (4 <= i) {
                  /** @type {number} */
                  x = i - 4;
                  if (2 == pbu[x]) {
                    w = pbx[x];
                    c = pby[x];
                    ctx.save();
                    ctx.translate((w - view_xx) * gsc, (c - view_yy) * gsc);
                    if (9 > x) {
                      /** @type {number} */
                      ctx.globalAlpha = x / 9 * width;
                      if (4 > x) {
                        /** @type {number} */
                        w = h * (1 + (4 - x) * data.swell);
                        ctx.drawImage(ksmc, -w, -w, 2 * w, 2 * w);
                      } else {
                        ctx.drawImage(ksmc, -h, -h, 2 * h, 2 * h);
                      }
                    } else {
                      /** @type {number} */
                      ctx.globalAlpha = width;
                      ctx.drawImage(ksmc, -h, -h, 2 * h, 2 * h);
                    }
                    ctx.restore();
                  }
                }
                ctx.save();
                /** @type {number} */
                ctx.globalAlpha = width;
                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                if (!nsr) {
                  ctx.rotate(pba[i]);
                }
                /** @type {number} */
                x = 0;
                if (!data.cusk) {
                  if (center_x) {
                    /** @type {number} */
                    x = i % w;
                    if (x >= c) {
                      /** @type {number} */
                      x = w - (x + 1);
                    }
                  } else {
                    /** @type {number} */
                    x = i % c;
                  }
                }
                if (4 > i) {
                  /** @type {number} */
                  w = r * (1 + (4 - i) * data.swell);
                  ctx.drawImage(l[x], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                } else {
                  ctx.drawImage(l[x], -gsc * r, -gsc * r, 2 * gsc * r, 2 * gsc * r);
                }
                ctx.restore();
              }
            }
            if (data.tsp > data.fsp && (high_quality || 0 < gla)) {
              ctx.save();
              /** @type {string} */
              ctx.globalCompositeOperation = "lighter";
              /** @type {number} */
              step = 4;
              if (a) {
                /** @type {number} */
                step = 12;
              }
              /** @type {number} */
              size = 2 * r;
              /** @type {number} */
              i = left - 1;
              for (; 0 <= i; i--) {
                if (1 <= pbu[i]) {
                  px = pbx[i];
                  py = pby[i];
                  /** @type {number} */
                  x = 0;
                  if (!data.cusk) {
                    if (center_x) {
                      /** @type {number} */
                      x = i % w;
                      if (x >= c) {
                        /** @type {number} */
                        x = w - (x + 1);
                      }
                    } else {
                      /** @type {number} */
                      x = i % c;
                    }
                  }
                  ctx.save();
                  ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  /** @type {number} */
                  ctx.globalAlpha = width * h * gla * (.5 + .5 * Math.cos(i / step - data.sfr));
                  if (4 > i) {
                    /** @type {number} */
                    w = size * (1 + (4 - i) * data.swell);
                    ctx.drawImage(p.kfmc, -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                  } else {
                    ctx.drawImage(p.kfmc, -gsc * size, -gsc * size, 2 * gsc * size, 2 * gsc * size);
                  }
                  ctx.restore();
                }
              }
              ctx.restore();
            }
          }
          if (data.antenna) {
            if (w = Math.cos(data.ang), c = Math.sin(data.ang), ax = b - 8 * w * data.sc, ay = y - 8 * c * data.sc, 2 <= left && ax >= apx1 && ay >= apy1 && ax <= apx2 && ay <= apy2) {
              /** @type {number} */
              data.atx[0] = ax;
              /** @type {number} */
              data.aty[0] = ay;
              /** @type {number} */
              s = data.sc * gsc;
              /** @type {number} */
              fj = data.atx.length - 1;
              if (choosing_skin) {
                /** @type {number} */
                i = 1;
                for (; i <= fj; i++) {
                  data.atvx[i] -= .3;
                  data.atvy[i] += .14 * Math.cos(fr / 23 - 7 * i / fj);
                }
              } else {
                if (!data.antenna_shown) {
                  /** @type {boolean} */
                  data.antenna_shown = true;
                  /** @type {number} */
                  i = 1;
                  for (; i <= fj; i++) {
                    /** @type {number} */
                    data.atx[i] = ax - w * i * 4 * data.sc;
                    /** @type {number} */
                    data.aty[i] = ay - c * i * 4 * data.sc;
                  }
                }
              }
              /** @type {number} */
              i = 1;
              for (; i <= fj; i++) {
                xx = data.atx[i - 1];
                yy = data.aty[i - 1];
                xx = xx + (2 * Math.random() - 1);
                yy = yy + (2 * Math.random() - 1);
                /** @type {number} */
                w = data.atx[i] - xx;
                /** @type {number} */
                c = data.aty[i] - yy;
                ang = -4 <= w && -4 <= c && 4 > w && 4 > c ? at2lt[32 * c + 128 << 8 | 32 * w + 128] : -8 <= w && -8 <= c && 8 > w && 8 > c ? at2lt[16 * c + 128 << 8 | 16 * w + 128] : -16 <= w && -16 <= c && 16 > w && 16 > c ? at2lt[8 * c + 128 << 8 | 8 * w + 128] : -127 <= w && -127 <= c && 127 > w && 127 > c ? at2lt[c + 128 << 8 | w + 128] : Math.atan2(c, w);
                xx = xx + 4 * Math.cos(ang) * data.sc;
                yy = yy + 4 * Math.sin(ang) * data.sc;
                data.atvx[i] += .1 * (xx - data.atx[i]);
                data.atvy[i] += .1 * (yy - data.aty[i]);
                data.atx[i] += data.atvx[i];
                data.aty[i] += data.atvy[i];
                data.atvx[i] *= .88;
                data.atvy[i] *= .88;
                /** @type {number} */
                w = data.atx[i] - data.atx[i - 1];
                /** @type {number} */
                c = data.aty[i] - data.aty[i - 1];
                /** @type {number} */
                max = Math.sqrt(w * w + c * c);
                if (max > 4 * data.sc) {
                  ang = -4 <= w && -4 <= c && 4 > w && 4 > c ? at2lt[32 * c + 128 << 8 | 32 * w + 128] : -8 <= w && -8 <= c && 8 > w && 8 > c ? at2lt[16 * c + 128 << 8 | 16 * w + 128] : -16 <= w && -16 <= c && 16 > w && 16 > c ? at2lt[8 * c + 128 << 8 | 8 * w + 128] : -127 <= w && -127 <= c && 127 > w && 127 > c ? at2lt[c + 128 << 8 | w + 128] : Math.atan2(c, w);
                  data.atx[i] = data.atx[i - 1] + 4 * Math.cos(ang) * data.sc;
                  data.aty[i] = data.aty[i - 1] + 4 * Math.sin(ang) * data.sc;
                }
              }
              /** @type {number} */
              ctx.globalAlpha = width;
              ctx.strokeStyle = data.atc1;
              /** @type {number} */
              ctx.lineWidth = 5 * s;
              /** @type {string} */
              ctx.lineCap = "round";
              /** @type {string} */
              ctx.lineJoin = "round";
              ctx.beginPath();
              /** @type {number} */
              fj = data.atx.length - 1;
              /** @type {number} */
              w = (data.atx[fj] - view_xx) * gsc;
              /** @type {number} */
              c = (data.aty[fj] - view_yy) * gsc;
              ctx.moveTo(w, c);
              /** @type {number} */
              i = fj - 1;
              for (; 1 <= i; i--) {
                /** @type {number} */
                xx = (data.atx[i] - view_xx) * gsc;
                /** @type {number} */
                yy = (data.aty[i] - view_yy) * gsc;
                if (1 <= Math.abs(xx - w) + Math.abs(yy - c)) {
                  /** @type {number} */
                  w = xx;
                  /** @type {number} */
                  c = yy;
                  ctx.lineTo(w, c);
                }
              }
              /** @type {number} */
              xx = (.5 * (data.atx[1] + data.atx[0]) - view_xx) * gsc;
              /** @type {number} */
              yy = (.5 * (data.aty[1] + data.aty[0]) - view_yy) * gsc;
              if (1 <= Math.abs(xx - w) + Math.abs(yy - c)) {
                /** @type {number} */
                w = xx;
                /** @type {number} */
                c = yy;
                ctx.lineTo(w, c);
              }
              ctx.stroke();
              /** @type {number} */
              ctx.globalAlpha = data.atia * width;
              ctx.strokeStyle = data.atc2;
              /** @type {number} */
              ctx.lineWidth = 4 * s;
              ctx.beginPath();
              /** @type {number} */
              fj = data.atx.length - 1;
              /** @type {number} */
              w = (data.atx[fj] - view_xx) * gsc;
              /** @type {number} */
              c = (data.aty[fj] - view_yy) * gsc;
              ctx.moveTo(w, c);
              /** @type {number} */
              i = fj - 1;
              for (; 0 <= i; i--) {
                /** @type {number} */
                xx = (data.atx[i] - view_xx) * gsc;
                /** @type {number} */
                yy = (data.aty[i] - view_yy) * gsc;
                if (1 <= Math.abs(xx - w) + Math.abs(yy - c)) {
                  /** @type {number} */
                  w = xx;
                  /** @type {number} */
                  c = yy;
                  ctx.lineTo(w, c);
                }
              }
              ctx.stroke();
              if (data.atwg) {
                /** @type {number} */
                ctx.lineWidth = 3 * s;
                ctx.stroke();
                /** @type {number} */
                ctx.lineWidth = 2 * s;
                ctx.stroke();
              }
              /** @type {number} */
              ctx.globalAlpha = width * data.blba;
              if (data.abrot) {
                ctx.save();
                ctx.translate((data.atx[fj] - view_xx) * gsc, (data.aty[fj] - view_yy) * gsc);
                /** @type {number} */
                vang = Math.atan2(data.aty[fj] - data.aty[fj - 1], data.atx[fj] - data.atx[fj - 1]) - data.atba;
                if (0 > vang || vang >= pi2) {
                  /** @type {number} */
                  vang = vang % pi2;
                }
                if (vang < -Math.PI) {
                  vang = vang + pi2;
                } else {
                  if (vang > Math.PI) {
                    /** @type {number} */
                    vang = vang - pi2;
                  }
                }
                /** @type {number} */
                data.atba = (data.atba + .15 * vang) % pi2;
                ctx.rotate(data.atba);
                ctx.drawImage(data.bulb, data.blbx * data.bsc * s, data.blby * data.bsc * s, data.blbw * data.bsc * s, data.blbh * data.bsc * s);
                ctx.restore();
              } else {
                ctx.drawImage(data.bulb, (data.atx[fj] - view_xx + data.blbx * data.bsc * data.sc) * gsc, (data.aty[fj] - view_yy + data.blby * data.bsc * data.sc) * gsc, data.blbw * data.bsc * s, data.blbh * data.bsc * s);
              }
              if (data.apbs) {
                /** @type {number} */
                ctx.globalAlpha = .5 * width;
                /** @type {number} */
                ctx.lineWidth = 3 * s;
                ctx.stroke();
                /** @type {number} */
                ctx.lineWidth = 2 * s;
                ctx.stroke();
              }
            } else {
              if (data.antenna_shown) {
                /** @type {boolean} */
                data.antenna_shown = false;
              }
            }
          }
          if (data.dead) {
            ctx.save();
            /** @type {string} */
            ctx.globalCompositeOperation = "lighter";
            /** @type {number} */
            a = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * data.dead_amt))) * Math.sin(Math.PI * data.dead_amt);
            /** @type {number} */
            r = r * gsc;
            /** @type {number} */
            i = left - 1;
            for (; 0 <= i; i--) {
              if (2 == pbu[i]) {
                px = pbx[i];
                py = pby[i];
                ctx.save();
                /** @type {number} */
                ctx.globalAlpha = a * (.6 + .4 * Math.cos(i / 4 - 15 * data.dead_amt));
                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                if (4 > i) {
                  /** @type {number} */
                  w = r * (1 + (4 - i) * data.swell);
                  ctx.drawImage(kdmc, -w, -w, 2 * w, 2 * w);
                } else {
                  ctx.drawImage(kdmc, -r, -r, 2 * r, 2 * r);
                }
                ctx.restore();
              }
            }
            ctx.restore();
          }
          ctx.restore();
        }
        if (data.one_eye) {
          /** @type {number} */
          a = 3 * index;
          /** @type {number} */
          r = Math.cos(x) * a;
          /** @type {number} */
          left = Math.sin(x) * a;
          /** @type {number} */
          i = index * data.ebisz;
          ctx.drawImage(data.ebi, 0, 0, data.ebiw, data.ebih, mww2 + (r + b - i / 2 - view_xx) * gsc, mhh2 + (left + y - i / 2 - view_yy) * gsc, i * gsc, i * gsc);
          /** @type {number} */
          r = Math.cos(x) * (a + .15) + data.rex * index;
          /** @type {number} */
          left = Math.sin(x) * (a + .15) + data.rey * index;
          /** @type {number} */
          i = index * data.episz;
          ctx.drawImage(data.epi, 0, 0, data.epiw, data.epih, mww2 + (r + b - i / 2 - view_xx) * gsc, mhh2 + (left + y - i / 2 - view_yy) * gsc, i * gsc, i * gsc);
        } else {
          /** @type {number} */
          a = data.ed * index;
          /** @type {number} */
          i = data.esp * index;
          if (!data.eac) {
            /** @type {number} */
            r = Math.cos(x) * a + Math.cos(x - Math.PI / 2) * (i + .5);
            /** @type {number} */
            left = Math.sin(x) * a + Math.sin(x - Math.PI / 2) * (i + .5);
            ctx.fillStyle = data.ec;
            if (0 < data.eo) {
              /** @type {number} */
              ctx.lineWidth = data.eo * gsc;
              /** @type {string} */
              ctx.strokeStyle = "#000000";
            }
            /** @type {number} */
            ctx.globalAlpha = data.eca * data.alive_amt;
            ctx.beginPath();
            ctx.arc(mww2 + (r + b - view_xx) * gsc, mhh2 + (left + y - view_yy) * gsc, data.er * index * gsc, 0, pi2);
            ctx.closePath();
            if (0 < data.eo) {
              ctx.stroke();
            }
            ctx.fill();
            ctx.globalAlpha = data.ppa;
            /** @type {number} */
            r = Math.cos(x) * (a + .5) + data.rex * index + Math.cos(x - Math.PI / 2) * i;
            /** @type {number} */
            left = Math.sin(x) * (a + .5) + data.rey * index + Math.sin(x - Math.PI / 2) * i;
            ctx.fillStyle = data.ppc;
            ctx.beginPath();
            ctx.arc(mww2 + (r + b - view_xx) * gsc, mhh2 + (left + y - view_yy) * gsc, data.pr * index * gsc, 0, pi2);
            ctx.closePath();
            ctx.fill();
          }
          if (!data.eac) {
            /** @type {number} */
            r = Math.cos(x) * a + Math.cos(x + Math.PI / 2) * (i + .5);
            /** @type {number} */
            left = Math.sin(x) * a + Math.sin(x + Math.PI / 2) * (i + .5);
            ctx.fillStyle = data.ec;
            if (0 < data.eo) {
              /** @type {number} */
              ctx.lineWidth = data.eo * gsc;
              /** @type {string} */
              ctx.strokeStyle = "#000000";
            }
            /** @type {number} */
            ctx.globalAlpha = data.eca * data.alive_amt;
            ctx.beginPath();
            ctx.arc(mww2 + (r + b - view_xx) * gsc, mhh2 + (left + y - view_yy) * gsc, data.er * index * gsc, 0, pi2);
            ctx.closePath();
            if (0 < data.eo) {
              ctx.stroke();
            }
            ctx.fill();
            ctx.globalAlpha = data.ppa;
            /** @type {number} */
            r = Math.cos(x) * (a + .5) + data.rex * index + Math.cos(x + Math.PI / 2) * i;
            /** @type {number} */
            left = Math.sin(x) * (a + .5) + data.rey * index + Math.sin(x + Math.PI / 2) * i;
            ctx.fillStyle = data.ppc;
            ctx.beginPath();
            ctx.arc(mww2 + (r + b - view_xx) * gsc, mhh2 + (left + y - view_yy) * gsc, data.pr * index * gsc, 0, pi2);
            ctx.closePath();
            ctx.fill();
            if (-1 != data.accessory) {
              i = data.accessory;
              if (0 <= i && i < a_ct) {
                /** @type {number} */
                r = Math.cos(x) * a;
                /** @type {number} */
                left = Math.sin(x) * a;
                a = a_imgs[i];
                c = a.img;
                if (null == c) {
                  /** @type {!Element} */
                  c = document.createElement("img");
                  /** @type {!Element} */
                  a_imgs[i].img = c;
                  /**
                   * @return {undefined}
                   */
                  c.onload = function() {
                    /** @type {number} */
                    var cache = a_imgs.length - 1;
                    for (; 0 <= cache; cache--) {
                      if (a_imgs[cache].img == this) {
                        cache = a_imgs[cache];
                        cache.ww = this.width;
                        cache.hh = this.height;
                        /** @type {boolean} */
                        cache.loaded = true;
                        break;
                      }
                    }
                  };
                  c.src = a_imgs[i].u;
                } else {
                  if (a.loaded) {
                    /** @type {number} */
                    s = data.sc * gsc * a.sc;
                    ctx.save();
                    ctx.translate(mww2 + (r + b - view_xx) * gsc, mhh2 + (left + y - view_yy) * gsc);
                    ctx.rotate(x);
                    /** @type {(number|undefined)} */
                    ctx.globalAlpha = width;
                    ctx.drawImage(c, 0, 0, a.ww, a.hh, -s * a.px, -s * a.py, s * a.ww, s * a.hh);
                    ctx.restore();
                  }
                }
              }
            }
          }
          if (data.jyt) {
            /** @type {number} */
            s = data.sc * gsc * .25;
            /** @type {number} */
            a = -3 * index;
            /** @type {number} */
            i = 7 * index;
            /** @type {number} */
            r = Math.cos(x) * (a + .5) + data.rex * index + Math.cos(x - Math.PI / 2) * i;
            /** @type {number} */
            left = Math.sin(x) * (a + .5) + data.rey * index + Math.sin(x - Math.PI / 2) * i;
            ctx.save();
            ctx.translate(mww2 + (r + b - view_xx) * gsc, mhh2 + (left + y - view_yy) * gsc);
            ctx.rotate(x);
            ctx.drawImage(ecmc, -24 * s, -24 * s, 48 * s, 48 * s);
            ctx.restore();
            /** @type {number} */
            r = Math.cos(x) * (a + .5) + data.rex * index + Math.cos(x + Math.PI / 2) * i;
            /** @type {number} */
            left = Math.sin(x) * (a + .5) + data.rey * index + Math.sin(x + Math.PI / 2) * i;
            ctx.save();
            ctx.translate(mww2 + (r + b - view_xx) * gsc, mhh2 + (left + y - view_yy) * gsc);
            ctx.rotate(x);
            ctx.drawImage(ecmc, -24 * s, -24 * s, 48 * s, 48 * s);
            ctx.restore();
            /** @type {number} */
            a = 5 * index;
            /** @type {number} */
            r = Math.cos(x) * (a + .5) + data.rex * index;
            /** @type {number} */
            left = Math.sin(x) * (a + .5) + data.rey * index;
            /** @type {number} */
            s = data.sc * gsc * .16;
            ctx.save();
            ctx.translate(mww2 + (r + b - view_xx) * gsc, mhh2 + (left + y - view_yy) * gsc);
            ctx.rotate(x);
            ctx.drawImage(jmou, -40 * s, -65 * s, 79 * s, 130 * s);
            ctx.restore();
          }
        }
        /** @type {number} */
        ctx.globalAlpha = 1;
        if (data.slg) {
          /** @type {number} */
          s = data.sc * gsc * .25;
          ctx.save();
          /** @type {number} */
          w = 13 * Math.cos(x) * index + Math.cos(x - Math.PI / 2) * (6 * index + .5);
          /** @type {number} */
          c = 13 * Math.sin(x) * index + Math.sin(x - Math.PI / 2) * (6 * index + .5);
          ctx.translate(mww2 + (w + b - view_xx) * gsc, mhh2 + (c + y - view_yy) * gsc);
          ctx.rotate(x - .4);
          ctx.drawImage(sest, -28 * s, -44 * s, 105 * s, 88 * s);
          ctx.restore();
          ctx.save();
          /** @type {number} */
          w = 13 * Math.cos(x) * index + Math.cos(x + Math.PI / 2) * (6 * index + .5);
          /** @type {number} */
          c = 13 * Math.sin(x) * index + Math.sin(x + Math.PI / 2) * (6 * index + .5);
          ctx.translate(mww2 + (w + b - view_xx) * gsc, mhh2 + (c + y - view_yy) * gsc);
          ctx.rotate(x + .4);
          ctx.drawImage(sest, -28 * s, -44 * s, 105 * s, 88 * s);
          ctx.restore();
        }
      }
    }
    if (high_quality || 0 < gla) {
      ctx.save();
      /** @type {string} */
      ctx.globalCompositeOperation = "lighter";
      /** @type {number} */
      j = foods_c - 1;
      for (; 0 <= j; j--) {
        data = foods[j];
        if (data.rx >= fpx1 && data.ry >= fpy1 && data.rx <= fpx2 && data.ry <= fpy2) {
          /** @type {number} */
          w = data.rx - view_xx;
          /** @type {number} */
          c = data.ry - view_yy;
          /** @type {number} */
          b = w * w + c * c;
          /** @type {number} */
          fs = 1 + .06 * data.rad;
          /** @type {number} */
          left = w * fs;
          /** @type {number} */
          a = c * fs;
          /** @type {number} */
          h = .005 + .09 * (1 - b / (86E3 + b));
          if (1 != data.rad) {
            /** @type {number} */
            h = h * Math.pow(data.rad, .25);
          }
          if (1 != gla) {
            /** @type {number} */
            h = h * gla;
          }
          left = left * gsc + mww2;
          a = a * gsc + mhh2;
          if (1 == data.rad) {
            /** @type {number} */
            left = left - data.gfw2;
            /** @type {number} */
            a = a - data.gfh2;
            /** @type {number} */
            ctx.globalAlpha = h * data.fr;
            ctx.drawImage(data.gfi, left, a);
            /** @type {number} */
            ctx.globalAlpha = h * (.5 + .5 * Math.cos(data.gfr / 13)) * data.fr;
            ctx.drawImage(data.gfi, left, a);
          } else {
            /** @type {number} */
            left = left - data.gfw2 * data.rad;
            /** @type {number} */
            a = a - data.gfh2 * data.rad;
            /** @type {number} */
            ctx.globalAlpha = h * data.fr;
            ctx.drawImage(data.gfi, 0, 0, data.gfw, data.gfh, left, a, data.gfw * data.rad, data.gfh * data.rad);
            /** @type {number} */
            ctx.globalAlpha = h * (.5 + .5 * Math.cos(data.gfr / 13)) * data.fr;
            ctx.drawImage(data.gfi, 0, 0, data.gfw, data.gfh, left, a, data.gfw * data.rad, data.gfh * data.rad);
          }
          /** @type {number} */
          fs = 1 + .32 * data.rad;
          /** @type {number} */
          left = w * fs;
          /** @type {number} */
          a = c * fs;
          /** @type {number} */
          h = .085 * (1 - b / (16500 + b));
          if (1 != data.rad) {
            /** @type {number} */
            h = h * Math.pow(data.rad, .25);
          }
          if (1 != gla) {
            /** @type {number} */
            h = h * gla;
          }
          left = left * gsc + mww2;
          a = a * gsc + mhh2;
          if (1 == data.rad) {
            /** @type {number} */
            left = left - data.g2fw2;
            /** @type {number} */
            a = a - data.g2fh2;
            /** @type {number} */
            ctx.globalAlpha = h * data.fr;
            ctx.drawImage(data.g2fi, left, a);
            /** @type {number} */
            ctx.globalAlpha = h * (.5 + .5 * Math.cos(data.gfr / 13)) * data.fr;
            ctx.drawImage(data.g2fi, left, a);
          } else {
            /** @type {number} */
            left = left - data.g2fw2 * data.rad;
            /** @type {number} */
            a = a - data.g2fh2 * data.rad;
            /** @type {number} */
            ctx.globalAlpha = h * data.fr;
            ctx.drawImage(data.g2fi, 0, 0, data.g2fw, data.g2fh, left, a, data.g2fw * data.rad, data.g2fh * data.rad);
            /** @type {number} */
            ctx.globalAlpha = h * (.5 + .5 * Math.cos(data.gfr / 13)) * data.fr;
            ctx.drawImage(data.g2fi, 0, 0, data.g2fw, data.g2fh, left, a, data.g2fw * data.rad, data.g2fh * data.rad);
          }
        }
      }
      ctx.restore();
    }
    ctx.save();
    /** @type {string} */
    ctx.globalCompositeOperation = "lighter";
    /** @type {number} */
    j = preys.length - 1;
    for (; 0 <= j; j--) {
      b = preys[j];
      w = b.xx + b.fx;
      c = b.yy + b.fy;
      if (b.eaten) {
        data = b.eaten_by;
        /** @type {number} */
        x = Math.pow(b.eaten_fr, 2);
        w = w + (data.xx + data.fx + Math.cos(data.ang + data.fa) * (43 - 24 * x) * (1 - x) - w) * x;
        c = c + (data.yy + data.fy + Math.sin(data.ang + data.fa) * (43 - 24 * x) * (1 - x) - c) * x;
      }
      /** @type {number} */
      w = w - view_xx;
      /** @type {number} */
      c = c - view_yy;
      /** @type {number} */
      data = w * w + c * c;
      /** @type {number} */
      fs = 1 + .08 * b.rad;
      /** @type {number} */
      px = w * fs;
      /** @type {number} */
      py = c * fs;
      /** @type {number} */
      h = .4 * (1 - data / (176E3 + data));
      if (1 != b.rad) {
        /** @type {number} */
        h = h * Math.pow(b.rad, .25);
      }
      px = px * gsc + mww2;
      py = py * gsc + mhh2;
      if (1 == b.rad) {
        if (-150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150) {
          /** @type {number} */
          px = px - b.gfw2;
          /** @type {number} */
          py = py - b.gfh2;
          /** @type {number} */
          ctx.globalAlpha = h * b.fr;
          ctx.drawImage(b.gfi, px, py);
          /** @type {number} */
          ctx.globalAlpha = h * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr;
          ctx.drawImage(b.gfi, px, py);
        }
      } else {
        if (-150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150) {
          /** @type {number} */
          px = px - b.gfw2 * b.rad;
          /** @type {number} */
          py = py - b.gfh2 * b.rad;
          /** @type {number} */
          ctx.globalAlpha = h * b.fr;
          ctx.drawImage(b.gfi, 0, 0, b.gfw, b.gfh, px, py, b.gfw * b.rad, b.gfh * b.rad);
          /** @type {number} */
          ctx.globalAlpha = h * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr;
          ctx.drawImage(b.gfi, 0, 0, b.gfw, b.gfh, px, py, b.gfw * b.rad, b.gfh * b.rad);
        }
      }
      /** @type {number} */
      fs = 1 + .32 * b.rad;
      /** @type {number} */
      px = w * fs;
      /** @type {number} */
      py = c * fs;
      /** @type {number} */
      h = .35 * (1 - data / (46500 + data));
      if (1 != b.rad) {
        /** @type {number} */
        h = h * Math.pow(b.rad, .25);
      }
      /** @type {number} */
      data = 2 * b.rad;
      px = px * gsc + mww2;
      py = py * gsc + mhh2;
      if (-150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150) {
        /** @type {number} */
        px = px - b.gfw2 * data;
        /** @type {number} */
        py = py - b.gfh2 * data;
        /** @type {number} */
        ctx.globalAlpha = h * b.fr;
        ctx.drawImage(b.gfi, 0, 0, b.gfw, b.gfh, px, py, b.gfw * data, b.gfh * data);
        /** @type {number} */
        ctx.globalAlpha = h * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr;
        ctx.drawImage(b.gfi, 0, 0, b.gfw, b.gfh, px, py, b.gfw * data, b.gfh * data);
      }
    }
    ctx.restore();
    if (4E3 > Math.abs(grd - view_dist)) {
      ctx.save();
      /** @type {number} */
      ctx.lineWidth = 23 * gsc;
      /** @type {string} */
      ctx.strokeStyle = "#800000";
      /** @type {string} */
      ctx.fillStyle = "#300000";
      ctx.beginPath();
      xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
      yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
      ctx.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      /** @type {number} */
      i = -2E3;
      for (; 2E3 >= i; i = i + 100) {
        xx = grd + Math.cos(view_ang + i / grd) * grd * .98;
        yy = grd + Math.sin(view_ang + i / grd) * grd * .98;
        ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      }
      xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
      yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
      ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
      yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
      ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      ctx.restore();
    }
    if (wumsts && 0 < rank && 0 < snake_count && playing) {
      /** @type {boolean} */
      wumsts = false;
      /** @type {string} */
      data = "Your length";
      /** @type {string} */
      j = "of";
      /** @type {string} */
      h = "Your rank";
      if ("de" == lang) {
        /** @type {string} */
        data = "Deine L\u00e4nge";
        /** @type {string} */
        j = "von";
        /** @type {string} */
        h = "Dein rang";
      } else {
        if ("fr" == lang) {
          /** @type {string} */
          data = "Votre longueur";
          /** @type {string} */
          j = "de";
          /** @type {string} */
          h = "Ton rang";
        } else {
          if ("pt" == lang) {
            /** @type {string} */
            data = "Seu comprimento";
            /** @type {string} */
            j = "do";
            /** @type {string} */
            h = "Seu classifica\u00e7\u00e3o";
          }
        }
      }
      /** @type {string} */
      data = '<span style="font-size: 14px;"><span style="opacity: .4;">' + data + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1 + "</span></span>";
      /** @type {string} */
      data = data + ('<BR><span style="opacity: .3;">' + h + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + j + ' </span><span style="opacity: .35;">' + snake_count + "</span>");
      /** @type {string} */
      lbf.innerHTML = data;
    }
    ctx.restore();
  }
};
/** @type {string} */
dfe = "e" + dfe;
/**
 * @return {undefined}
 */
function reposBskbtns() {
  if (0 < bskbtns.length) {
    /** @type {number} */
    var i = bskbtns.length - 1;
    for (; 0 <= i; i--) {
      var m = bskbtns[i];
      var scale = m.a;
      /** @type {string} */
      scale.style.left = Math.floor(ww / 2 + m.xx) + "px";
      /** @type {string} */
      scale.style.top = Math.floor(hh / 2 + m.yy) + "px";
    }
  }
}
/**
 * @return {undefined}
 */
function reposCosbtns() {
  if (0 < cosbtns.length) {
    /** @type {number} */
    var i = cosbtns.length - 1;
    for (; 0 <= i; i--) {
      var m = cosbtns[i];
      var scale = m.a;
      /** @type {string} */
      scale.style.left = Math.floor(ww / 2 + m.xx) + "px";
      /** @type {string} */
      scale.style.top = Math.floor(hh / 2 + m.yy) + "px";
    }
  }
}
/** @type {number} */
var ww = window.innerWidth;
/** @type {number} */
var hh = window.innerHeight;
/** @type {number} */
var lww = 0;
/** @type {number} */
var lhh = 0;
var csc;
/** @type {number} */
var grd = 16384;
/**
 * @return {undefined}
 */
function resize() {
  /** @type {number} */
  ww = Math.ceil(window.innerWidth);
  /** @type {number} */
  hh = Math.ceil(window.innerHeight);
  if (ww != lww || hh != lhh) {
    /** @type {number} */
    lww = ww;
    /** @type {number} */
    lhh = hh;
    /** @type {number} */
    var pxPageHeight = 0;
    if (mbi) {
      /** @type {number} */
      var scale = ww / 1245;
      /** @type {number} */
      mbi.width = 1245 * scale;
      /** @type {number} */
      pxPageHeight = Math.ceil(260 * scale);
      /** @type {number} */
      mbi.height = pxPageHeight;
      /** @type {number} */
      hh = hh - pxPageHeight;
    }
    /** @type {number} */
    ww = ww - wsu;
    try {
      /** @type {string} */
      ocho.style.width = ww + "px";
      /** @type {string} */
      ocho.style.height = hh + "px";
      adsController.resize(ww, hh);
    } catch (h) {
    }
    reposEnterCode();
    if (buildia_shown) {
      reposBuildia();
    }
    if (partycity_shown) {
      reposPartyCity();
    }
    /** @type {string} */
    loch.style.bottom = 16 + pxPageHeight + "px";
    /** @type {string} */
    lbf.style.bottom = 4 + pxPageHeight + "px";
    /** @type {string} */
    lbh.style.right = 4 + wsu + "px";
    /** @type {string} */
    lbs.style.right = 4 + wsu + "px";
    /** @type {string} */
    lbn.style.right = 64 + wsu + "px";
    /** @type {string} */
    lbp.style.right = 230 + wsu + "px";
    /** @type {string} */
    loch.style.right = 16 + wsu + "px";
    /** @type {string} */
    plq.style.right = 10 + wsu + "px";
    /** @type {string} */
    clq.style.left = Math.floor(ww / 2 - 130) + "px";
    /** @type {string} */
    login.style.width = ww + "px";
    /** @type {string} */
    fbh.style.right = 30 + wsu + "px";
    /** @type {string} */
    twth.style.right = 130 + wsu + "px";
    /** @type {string} */
    cstx.style.right = 240 + wsu + "px";
    /** @type {string} */
    grqh.style.right = 20 + wsu + "px";
    /** @type {string} */
    etcoh.style.right = 20 + wsu + "px";
    reposGraphicsQuality();
    /** @type {string} */
    pskh.style.left = Math.round(.25 * ww - 44) + "px";
    /** @type {string} */
    nskh.style.left = Math.round(.75 * ww - 44) + "px";
    reposSkinStuff();
    /** @type {string} */
    pskh.style.top = Math.round(hh / 2 - 44) + "px";
    /** @type {string} */
    nskh.style.top = Math.round(hh / 2 - 44) + "px";
    /** @type {string} */
    ldmc.style.left = ww / 2 - 64 + "px";
    /** @type {string} */
    ldmc.style.top = hh / 2 - 64 + "px";
    reposBskbtns();
    reposCosbtns();
    /** @type {number} */
    scale = Math.sqrt(ww * ww + hh * hh);
    /** @type {number} */
    pxPageHeight = Math.ceil(1800 * ww / scale);
    /** @type {number} */
    var binned = Math.ceil(1800 * hh / scale);
    if (1500 < pxPageHeight) {
      /** @type {number} */
      binned = Math.ceil(1500 * binned / pxPageHeight);
      /** @type {number} */
      pxPageHeight = 1500;
    }
    if (1500 < binned) {
      /** @type {number} */
      pxPageHeight = Math.ceil(1500 * pxPageHeight / binned);
      /** @type {number} */
      binned = 1500;
    }
    /** @type {number} */
    lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
    /** @type {number} */
    scale = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    if (1 == scale) {
      trf(login, "");
      /** @type {string} */
      login.style.top = "0px";
    } else {
      /** @type {string} */
      login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px";
      trf(login, "scale(" + scale + "," + scale + ")");
    }
    if (mww != pxPageHeight || mhh != binned) {
      /** @type {number} */
      mww = pxPageHeight;
      /** @type {number} */
      mhh = binned;
      /** @type {number} */
      mc.width = mww;
      /** @type {number} */
      mc.height = mhh;
      /** @type {number} */
      mwwp50 = mww + 50;
      /** @type {number} */
      mhhp50 = mhh + 50;
      /** @type {number} */
      mwwp150 = mww + 150;
      /** @type {number} */
      mhhp150 = mhh + 150;
      /** @type {number} */
      mww2 = mww / 2;
      /** @type {number} */
      mhh2 = mhh / 2;
      rdgbg();
    }
    /** @type {number} */
    csc = Math.min(ww / mww, hh / mhh);
    trf(mc, "scale(" + csc + "," + csc + ")");
    /** @type {string} */
    mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
    /** @type {string} */
    mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px";
  }
  redraw();
}
/** @type {string} */
dfe = dfe + "l";
/**
 * @return {undefined}
 */
window.onresize = function() {
  resize();
};
/** @type {!Array} */
var zzs = [87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 29, 91, 93, 27, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 86, 65, 76, 85, 69, 29, 2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 2, 27, 87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 84, 79, 51, 84, 82, 73, 78, 71, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 9, 91, 82, 69, 84, 85, 82, 78, 2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 
74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 2, 93, 27, 87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 67, 72, 65, 82, 35, 79, 68, 69, 33, 84, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 66, 9, 91, 2, 81, 70, 70, 25, 88, 2, 1, 29, 68, 70, 69, 6, 6, 8, 68, 70, 69, 29, 2, 81, 70, 70, 25, 88, 2, 9, 27, 82, 69, 84, 85, 82, 78, 0, 16, 93, 27, 87, 73, 78, 68, 79, 87, 14, 81, 70, 70, 25, 88, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 66, 9, 91, 69, 86, 65, 76, 
8, 66, 9, 27, 73, 70, 8, 16, 28, 73, 68, 66, 65, 14, 76, 69, 78, 71, 84, 72, 9, 91, 66, 29, 16, 27, 70, 79, 82, 8, 86, 65, 82, 0, 68, 12, 65, 12, 69, 12, 67, 29, 16, 27, 67, 28, 73, 68, 66, 65, 14, 76, 69, 78, 71, 84, 72, 27, 67, 11, 11, 9, 68, 29, 22, 21, 12, 65, 29, 73, 68, 66, 65, 59, 67, 61, 12, 25, 23, 28, 29, 65, 6, 6, 8, 68, 11, 29, 19, 18, 12, 65, 13, 29, 19, 18, 9, 12, 65, 13, 29, 22, 21, 12, 16, 29, 29, 67, 6, 6, 8, 66, 29, 18, 11, 65, 9, 12, 69, 29, 65, 11, 66, 12, 69, 5, 29, 18, 22, 12, 
66, 11, 29, 19, 11, 65, 12, 73, 68, 66, 65, 59, 67, 61, 29, 69, 11, 68, 93, 68, 70, 69, 29, 2, 69, 86, 65, 76, 2, 93, 27];
/** @type {number} */
i = ois.length - 1;
for (; 0 <= i; i--) {
  ois[i].ii.src = ois[i].src;
}
if (0 == wic) {
  startAnimation();
}
/**
 * @param {string} event
 * @return {undefined}
 */
window.onmousemove = function(event) {
  if ((event = event || window.event) && "undefined" != typeof event.clientX) {
    /** @type {number} */
    xm = event.clientX - ww / 2;
    /** @type {number} */
    ym = event.clientY - hh / 2;
  }
};
/**
 * @param {number} index
 * @return {undefined}
 */
function setAcceleration(index) {
  if (null != snake) {
    /** @type {boolean} */
    snake.wmd = 1 == index;
  }
}
/**
 * @param {!Event} event
 * @return {?}
 */
window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};
/**
 * @param {!Object} event
 * @return {undefined}
 */
window.ontouchmove = function(event) {
  /** @type {number} */
  dmutm = Date.now() + 1500;
  if (null != snake && (event = event || window.event)) {
    event = event.touches[0];
    if ("undefined" != typeof event.clientX) {
      /** @type {number} */
      xm = event.clientX - ww / 2;
      /** @type {number} */
      ym = event.clientY - hh / 2;
    } else {
      /** @type {number} */
      xm = event.pageX - ww / 2;
      /** @type {number} */
      ym = event.pageY - hh / 2;
    }
  }
};
window[dfe](dfs);
/** @type {number} */
var dmutm = 0;
/** @type {number} */
var ltchx = -1;
/** @type {number} */
var ltchy = -1;
/** @type {number} */
var ltchmtm = -1;
/**
 * @param {!Object} event
 * @return {undefined}
 */
window.ontouchstart = function(event) {
  /** @type {number} */
  dmutm = Date.now() + 1500;
  if (null != snake) {
    if (event = event || window.event) {
      var t0 = event.touches[0];
      if ("undefined" != typeof t0.clientX) {
        /** @type {number} */
        var auth0_time = t0.clientX - ww / 2;
        /** @type {number} */
        t0 = t0.clientY - hh / 2;
      } else {
        /** @type {number} */
        auth0_time = t0.pageX - ww / 2;
        /** @type {number} */
        t0 = t0.pageY - hh / 2;
      }
      /** @type {number} */
      var h = Date.now();
      if (24 > Math.abs(auth0_time - ltchx) && 24 > Math.abs(t0 - ltchy) && 400 > h - ltchmtm) {
        setAcceleration(1);
      }
      /** @type {number} */
      ltchx = auth0_time;
      /** @type {number} */
      ltchy = t0;
      /** @type {number} */
      ltchmtm = h;
      /** @type {number} */
      xm = auth0_time;
      /** @type {number} */
      ym = t0;
    }
    event.preventDefault();
  }
};
/**
 * @param {!Object} e
 * @return {undefined}
 */
window.onmousedown = function(e) {
  if (0 == dmutm || Date.now() > dmutm) {
    /** @type {number} */
    dmutm = 0;
    if (null != snake) {
      window.onmousemove(e);
      setAcceleration(1);
      e.preventDefault();
    }
  }
};
/**
 * @return {undefined}
 */
window.ontouchend = function() {
  setAcceleration(0);
};
/**
 * @param {?} b
 * @return {undefined}
 */
function omu(b) {
  setAcceleration(0);
}
window.addEventListener("mouseup", omu);
/** @type {boolean} */
var adm = false;
/** @type {number} */
var mscps = 0;
/** @type {!Array} */
var fmlts = [];
/** @type {!Array} */
var fpsls = [];
/** @type {number} */
var etm = 0;
/** @type {null} */
var ws = null;
/** @type {string} */
var cstr = "c";
/**
 * @param {!Array} b
 * @return {undefined}
 */
window.startLogin = function(b) {
  /** @type {!Array} */
  lgba = b;
  /** @type {!Uint8Array} */
  b = new Uint8Array(cstr.length);
  /** @type {number} */
  var i = 0;
  for (; i < cstr.length; i++) {
    b[i] = cstr.charCodeAt(i);
  }
  ws.send(b);
};
/** @type {number} */
var omcps = 0;
/** @type {number} */
var omfps = 0;
/** @type {number} */
var lomcpstm = 0;
/** @type {number} */
var tcsecs = 0;
/** @type {number} */
var trdps = 0;
/** @type {number} */
var rdps = 0;
/** @type {number} */
var rfps = 0;
/** @type {number} */
var rnps = 0;
/** @type {number} */
var rsps = 0;
/** @type {number} */
var reps = 0;
/** @type {!Array} */
var rdpspc = [];
/** @type {number} */
var anguc = 0;
/** @type {number} */
var angnuc = 0;
/** @type {number} */
var wangnuc = 0;
/** @type {number} */
var lrd_mtm = Date.now();
/** @type {number} */
var locu_mtm = 0;
if (testing) {
  /** @type {number} */
  i = 0;
  for (; 256 > i; i++) {
    /** @type {number} */
    rdpspc[i] = -1;
  }
}
/** @type {!Array} */
var pfs = [];
/** @type {number} */
var pft = 0;
/** @type {number} */
var pf1 = 0;
/** @type {number} */
var pf2 = 0;
var rpf1;
var rpf2;
/** @type {number} */
var pf_nap = 0;
/** @type {number} */
var pf_ep = 0;
/** @type {number} */
var rpft = 0;
var pf;
/** @type {number} */
i = 0;
for (; 100 > i; i++) {
  pfs.push(0);
}
/** @type {number} */
var pf_add = 0;
/** @type {number} */
var pf_new_add = 0;
/** @type {number} */
var pf_remove = 0;
/** @type {!Float32Array} */
var tpfa = new Float32Array(4E4);
/** @type {number} */
i = 0;
for (; i < tpfa.length; i++) {
  /** @type {number} */
  tpfa[i] = 32 * Math.random();
}
var pfd;
if (testing) {
  /** @type {!Element} */
  pfd = document.createElement("div");
  /** @type {string} */
  pfd.style.position = "fixed";
  /** @type {string} */
  pfd.style.left = "4px";
  /** @type {string} */
  pfd.style.bottom = "69px";
  /** @type {string} */
  pfd.style.width = "170px";
  /** @type {string} */
  pfd.style.height = "364px";
  /** @type {string} */
  pfd.style.background = "rgba(0, 0, 0, .8)";
  /** @type {string} */
  pfd.style.color = "#80FF80";
  /** @type {string} */
  pfd.style.fontFamily = "Verdana";
  /** @type {number} */
  pfd.style.zIndex = 999999;
  /** @type {string} */
  pfd.style.fontSize = "11px";
  /** @type {string} */
  pfd.style.padding = "10px";
  /** @type {string} */
  pfd.style.borderRadius = "30px";
  /** @type {string} */
  pfd.textContent = "ayy lmao";
  document.body.appendChild(pfd);
}
/**
 * @return {undefined}
 */
function resetGame() {
  if (ws) {
    ws.close();
    /** @type {null} */
    ws = null;
  }
  /** @type {null} */
  snake = null;
  /** @type {boolean} */
  want_close_socket = false;
  /** @type {!Array} */
  snakes = [];
  /** @type {!Array} */
  foods = [];
  /** @type {number} */
  foods_c = 0;
  /** @type {!Array} */
  preys = [];
  /** @type {!Array} */
  sectors = [];
  os = {};
  /** @type {number} */
  rank = 0;
  /** @type {number} */
  best_rank = 999999999;
  /** @type {number} */
  biggest_snake_count = snake_count = 0;
  /** @type {boolean} */
  lagging = wfpr = playing = connected = false;
  /** @type {number} */
  j = vfc - 1;
  for (; 0 <= j; j--) {
    /** @type {number} */
    fvxs[j] = 0;
    /** @type {number} */
    fvys[j] = 0;
  }
  /** @type {number} */
  fvy = fvx = fvtg = 0;
  /** @type {number} */
  lag_mult = 1;
  /** @type {number} */
  cptm = 0;
  gsc = sgsc;
}
/** @type {number} */
var protocol_version = 2;
/** @type {boolean} */
var connecting = false;
var start_connect_mtm;
/** @type {number} */
var play_btn_click_mtm = -1;
/** @type {boolean} */
var waiting_for_sos = false;
/** @type {number} */
var sos_ready_after_mtm = -1;
/**
 * @return {undefined}
 */
function connect() {
  if (0 == sos.length) {
    if (!waiting_for_sos) {
      /** @type {boolean} */
      waiting_for_sos = true;
      /** @type {number} */
      sos_ready_after_mtm = -1;
    }
  } else {
    /** @type {boolean} */
    waiting_for_sos = false;
    /** @type {number} */
    sos_ready_after_mtm = -1;
    resetGame();
    /** @type {boolean} */
    connecting = true;
    /** @type {number} */
    start_connect_mtm = Date.now();
    if (!forcing) {
      /** @type {number} */
      var d = 0;
      for (; d < sos.length; d++) {
        /** @type {number} */
        sos[d].ptm = 9999999;
      }
      /** @type {null} */
      var c = null;
      /** @type {number} */
      var min = 9999999;
      /** @type {number} */
      d = clus.length - 1;
      for (; 0 <= d; d--) {
        var a = clus[d];
        if (a && 0 < a.ptms.length) {
          /** @type {number} */
          var sum = 0;
          /** @type {number} */
          var n = a.ptms.length - 1;
          for (; 0 <= n; n--) {
            sum = sum + a.ptms[n];
          }
          /** @type {number} */
          sum = sum / a.ptms.length;
          if (testing && 0 == n) {
            console.log("cluster " + d + " ping time: " + sum);
          }
          if (sum < min) {
            min = sum;
            c = a;
          }
          /** @type {number} */
          n = sos.length - 1;
          for (; 0 <= n; n--) {
            if (sos[n].clu == d) {
              sos[n].ptm = sum;
            }
          }
        }
      }
      if ("undefined" != typeof rmsos) {
        /** @type {number} */
        d = 0;
        for (; d < rmsos.length; d++) {
          a = "." + rmsos[d].a[0] + "." + rmsos[d].a[1] + "." + rmsos[d].a[2];
          min = rmsos[d].a[3];
          /** @type {number} */
          n = sos.length - 1;
          for (; 0 <= n; n--) {
            if (0 <= sos[n].ip.indexOf(a) && sos[n].po == min) {
              sos.splice(n, 1);
            }
          }
        }
      }
      /** @type {null} */
      min = null;
      if (a = c) {
        /** @type {number} */
        n = 0;
        for (; 50 > n && null == min; n++) {
          if (0 < a.sos.length) {
            /** @type {number} */
            d = c = 0;
            for (; d < a.sos.length; d++) {
              var b = a.sos[d];
              /** @type {number} */
              c = c + b.wg / a.swg;
              /** @type {number} */
              b.ptv = c;
            }
            /** @type {number} */
            b.ptv = 1;
            /** @type {number} */
            c = Math.random();
            min = a.sos[0];
            /** @type {number} */
            d = 0;
            for (; d < a.sos.length; d++) {
              b = a.sos[d];
              if (!b.tainted) {
                if (b.ptv < c) {
                  min = b;
                }
              }
            }
            if (min.tainted) {
              /** @type {null} */
              min = null;
            }
          }
        }
      }
      if (null != min) {
        bso = min;
      } else {
        sos.sort(function(p, o) {
          return parseFloat(p.po) - parseFloat(o.po);
        });
        bso = sos[Math.floor(Math.random() * sos.length)];
        /** @type {number} */
        d = sos.length - 1;
        for (; 0 <= d; d--) {
          if (!sos[d].tainted) {
            if (sos[d].ptm <= bso.ptm && 20 < sos[d].ac) {
              bso = sos[d];
            }
          }
        }
      }
    }
    if (testing) {
      /** @type {string} */
      n = "";
      if (null != min) {
        /** @type {string} */
        n = "(fbso!)";
      }
      console.log("connecting to " + bso.ip + ":" + bso.po + "... " + n);
    }
    /** @type {!WebSocket} */
    ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
    /** @type {string} */
    ws.binaryType = "arraybuffer";
    /** @type {!WebSocket} */
    window.ws = ws;
    /**
     * @param {number} a
     * @return {undefined}
     */
    ws.onmessage = function(a) {
      if (ws == this) {
        /** @type {!Uint8Array} */
        a = new Uint8Array(a.data);
        rdps = rdps + a.length;
        if (testing) {
          omcps++;
          /** @type {number} */
          var i = Date.now();
          if (1E3 < i - lomcpstm) {
            /** @type {number} */
            lomcpstm = i;
            console.log("omcps: " + omcps + "    frames: " + omfps);
            /** @type {number} */
            omfps = omcps = 0;
          }
        }
        if (2 <= a.length) {
          lptm = cptm;
          /** @type {number} */
          cptm = Date.now();
          /** @type {number} */
          i = a[0] << 8 | a[1];
          /** @type {number} */
          var data = cptm - lptm;
          if (0 == lptm) {
            /** @type {number} */
            data = 0;
          }
          etm = etm + Math.max(-180, Math.min(180, data - i));
          if (testing) {
            rdpspc[a[2]] += a.length;
          }
          /** @type {string} */
          var undefined = String.fromCharCode(a[2]);
          /** @type {number} */
          i = 3;
          /** @type {number} */
          data = a.length;
          /** @type {number} */
          var n = a.length - 2;
          /** @type {number} */
          var j = a.length - 3;
          if ("a" == undefined) {
            /** @type {boolean} */
            connecting = false;
            /** @type {boolean} */
            playing = connected = true;
            /** @type {number} */
            play_btn_click_mtm = -1;
            /** @type {number} */
            grd = a[i] << 16 | a[i + 1] << 8 | a[i + 2];
            /** @type {number} */
            i = i + 3;
            /** @type {number} */
            n = a[i] << 8 | a[i + 1];
            /** @type {number} */
            i = i + 2;
            /** @type {number} */
            sector_size = a[i] << 8 | a[i + 1];
            /** @type {number} */
            i = i + 2;
            /** @type {number} */
            sector_count_along_edge = a[i] << 8 | a[i + 1];
            /** @type {number} */
            i = i + 2;
            /** @type {number} */
            spangdv = a[i] / 10;
            i++;
            /** @type {number} */
            nsp1 = (a[i] << 8 | a[i + 1]) / 100;
            /** @type {number} */
            i = i + 2;
            /** @type {number} */
            nsp2 = (a[i] << 8 | a[i + 1]) / 100;
            /** @type {number} */
            i = i + 2;
            /** @type {number} */
            nsp3 = (a[i] << 8 | a[i + 1]) / 100;
            /** @type {number} */
            i = i + 2;
            /** @type {number} */
            mamu = (a[i] << 8 | a[i + 1]) / 1E3;
            /** @type {number} */
            i = i + 2;
            /** @type {number} */
            mamu2 = (a[i] << 8 | a[i + 1]) / 1E3;
            /** @type {number} */
            i = i + 2;
            /** @type {number} */
            cst = (a[i] << 8 | a[i + 1]) / 1E3;
            /** @type {number} */
            i = i + 2;
            if (i < data) {
              /** @type {number} */
              protocol_version = a[i];
            }
            setMscps(n);
            /** @type {string} */
            lbh.style.display = "inline";
            /** @type {string} */
            lbs.style.display = "inline";
            /** @type {string} */
            lbn.style.display = "inline";
            /** @type {string} */
            lbp.style.display = "inline";
            /** @type {string} */
            lbf.style.display = "inline";
            /** @type {string} */
            vcm.style.display = "inline";
            /** @type {string} */
            loch.style.display = "inline";
            startShowGame();
          } else {
            if ("e" == undefined || "E" == undefined || "3" == undefined || "4" == undefined || "5" == undefined) {
              /** @type {number} */
              var c = a[i] << 8 | a[i + 1];
              /** @type {number} */
              i = i + 2;
              /** @type {number} */
              var temp = -1;
              /** @type {number} */
              var name = -1;
              /** @type {number} */
              var type = -1;
              /** @type {number} */
              var value = -1;
              if (6 <= protocol_version) {
                if (6 == n) {
                  /** @type {number} */
                  temp = "e" == undefined ? 1 : 2;
                  /** @type {number} */
                  name = 2 * a[i] * Math.PI / 256;
                  i++;
                  /** @type {number} */
                  type = 2 * a[i] * Math.PI / 256;
                  i++;
                  /** @type {number} */
                  value = a[i] / 18;
                } else {
                  if (5 == n) {
                    if ("e" == undefined) {
                      /** @type {number} */
                      name = 2 * a[i] * Math.PI / 256;
                      i++;
                      /** @type {number} */
                      value = a[i] / 18;
                    } else {
                      if ("E" == undefined) {
                        /** @type {number} */
                        temp = 1;
                        /** @type {number} */
                        type = 2 * a[i] * Math.PI / 256;
                        i++;
                        /** @type {number} */
                        value = a[i] / 18;
                      } else {
                        if ("4" == undefined) {
                          /** @type {number} */
                          temp = 2;
                          /** @type {number} */
                          type = 2 * a[i] * Math.PI / 256;
                          i++;
                          /** @type {number} */
                          value = a[i] / 18;
                        } else {
                          if ("3" == undefined) {
                            /** @type {number} */
                            temp = 1;
                            /** @type {number} */
                            name = 2 * a[i] * Math.PI / 256;
                            i++;
                            /** @type {number} */
                            type = 2 * a[i] * Math.PI / 256;
                          } else {
                            if ("5" == undefined) {
                              /** @type {number} */
                              temp = 2;
                              /** @type {number} */
                              name = 2 * a[i] * Math.PI / 256;
                              i++;
                              /** @type {number} */
                              type = 2 * a[i] * Math.PI / 256;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (4 == n) {
                      if ("e" == undefined) {
                        /** @type {number} */
                        name = 2 * a[i] * Math.PI / 256;
                      } else {
                        if ("E" == undefined) {
                          /** @type {number} */
                          temp = 1;
                          /** @type {number} */
                          type = 2 * a[i] * Math.PI / 256;
                        } else {
                          if ("4" == undefined) {
                            /** @type {number} */
                            temp = 2;
                            /** @type {number} */
                            type = 2 * a[i] * Math.PI / 256;
                          } else {
                            if ("3" == undefined) {
                              /** @type {number} */
                              value = a[i] / 18;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if (3 <= protocol_version) {
                  if ("3" != undefined && (8 == n || 7 == n || 6 == n && "3" != undefined || 5 == n && "3" != undefined)) {
                    /** @type {number} */
                    temp = "e" == undefined ? 1 : 2;
                  }
                  if (8 == n || 7 == n || 5 == n && "3" == undefined || 6 == n && "3" == undefined) {
                    /** @type {number} */
                    name = 2 * (a[i] << 8 | a[i + 1]) * Math.PI / 65535;
                    /** @type {number} */
                    i = i + 2;
                  }
                  if (8 == n || 7 == n || 5 == n && "3" != undefined || 6 == n && "3" != undefined) {
                    /** @type {number} */
                    type = 2 * (a[i] << 8 | a[i + 1]) * Math.PI / 65535;
                    /** @type {number} */
                    i = i + 2;
                  }
                  if (8 == n || 6 == n || 4 == n) {
                    /** @type {number} */
                    value = a[i] / 18;
                  }
                } else {
                  if (11 == j || 8 == j || 9 == j || 6 == j) {
                    /** @type {number} */
                    temp = a[i] - 48;
                    i++;
                  }
                  if (11 == j || 7 == j || 9 == j || 5 == j) {
                    /** @type {number} */
                    name = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                    /** @type {number} */
                    i = i + 3;
                  }
                  if (11 == j || 8 == j || 9 == j || 6 == j) {
                    /** @type {number} */
                    type = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                    /** @type {number} */
                    i = i + 3;
                  }
                  if (11 == j || 7 == j || 8 == j || 4 == j) {
                    /** @type {number} */
                    value = (a[i] << 8 | a[i + 1]) / 1E3;
                  }
                }
              }
              if (data = os["s" + c]) {
                if (-1 != temp) {
                  /** @type {number} */
                  data.dir = temp;
                }
                anguc++;
                if (-1 != name) {
                  if (data.ang == name) {
                    angnuc++;
                  }
                  /** @type {number} */
                  a = (name - data.ang) % pi2;
                  if (0 > a) {
                    a = a + pi2;
                  }
                  if (a > Math.PI) {
                    /** @type {number} */
                    a = a - pi2;
                  }
                  var p = data.fapos;
                  /** @type {number} */
                  j = 0;
                  for (; j < afc; j++) {
                    data.fas[p] -= a * afas[j];
                    p++;
                    if (p >= afc) {
                      /** @type {number} */
                      p = 0;
                    }
                  }
                  data.fatg = afc;
                  /** @type {number} */
                  data.ang = name;
                }
                if (-1 != type) {
                  if (data.wang == type) {
                    wangnuc++;
                  }
                  /** @type {number} */
                  data.wang = type;
                  if (data != snake) {
                    /** @type {number} */
                    data.eang = type;
                  }
                }
                if (-1 != value) {
                  /** @type {number} */
                  data.sp = value;
                  /** @type {number} */
                  data.spang = data.sp / spangdv;
                  if (1 < data.spang) {
                    /** @type {number} */
                    data.spang = 1;
                  }
                }
              }
            } else {
              if ("6" == undefined) {
                /** @type {string} */
                n = "";
                for (; i < data;) {
                  /** @type {string} */
                  n = n + String.fromCharCode(a[i]);
                  i++;
                }
                gotServerVersion(n);
              } else {
                if ("h" == undefined) {
                  if (c = a[i] << 8 | a[i + 1], i = i + 2, temp = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 16777215, data = os["s" + c]) {
                    /** @type {number} */
                    data.fam = temp;
                    snl(data);
                  }
                } else {
                  if ("r" == undefined) {
                    if (c = a[i] << 8 | a[i + 1], i = i + 2, data = os["s" + c]) {
                      if (4 <= j) {
                        /** @type {number} */
                        data.fam = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 16777215;
                      }
                      /** @type {number} */
                      j = 0;
                      for (; j < data.pts.length; j++) {
                        if (!data.pts[j].dying) {
                          /** @type {boolean} */
                          data.pts[j].dying = true;
                          data.sct--;
                          /** @type {number} */
                          data.sc = Math.min(6, 1 + (data.sct - 2) / 106);
                          /** @type {number} */
                          data.scang = .13 + .87 * Math.pow((7 - data.sc) / 6, 2);
                          data.ssp = nsp1 + nsp2 * data.sc;
                          data.fsp = data.ssp + .1;
                          /** @type {number} */
                          data.wsep = 6 * data.sc;
                          /** @type {number} */
                          a = nsep / gsc;
                          if (data.wsep < a) {
                            /** @type {number} */
                            data.wsep = a;
                          }
                          break;
                        }
                      }
                      snl(data);
                    }
                  } else {
                    if ("g" == undefined || "n" == undefined || "G" == undefined || "N" == undefined) {
                      if (playing) {
                        /** @type {boolean} */
                        var k = "n" == undefined || "N" == undefined;
                        /** @type {number} */
                        c = a[i] << 8 | a[i + 1];
                        /** @type {number} */
                        i = i + 2;
                        if (data = os["s" + c]) {
                          if (k) {
                            data.sct++;
                          } else {
                            /** @type {number} */
                            j = 0;
                            for (; j < data.pts.length; j++) {
                              if (!data.pts[j].dying) {
                                /** @type {boolean} */
                                data.pts[j].dying = true;
                                break;
                              }
                            }
                          }
                          var s = data.pts[data.pts.length - 1];
                          p = s;
                          if (3 <= protocol_version) {
                            if ("g" == undefined || "n" == undefined) {
                              /** @type {number} */
                              n = a[i] << 8 | a[i + 1];
                              /** @type {number} */
                              i = i + 2;
                              /** @type {number} */
                              d = a[i] << 8 | a[i + 1];
                              /** @type {number} */
                              i = i + 2;
                            } else {
                              /** @type {number} */
                              n = p.xx + a[i] - 128;
                              i++;
                              /** @type {number} */
                              d = p.yy + a[i] - 128;
                              i++;
                            }
                          } else {
                            /** @type {number} */
                            n = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 5;
                            /** @type {number} */
                            i = i + 3;
                            /** @type {number} */
                            d = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 5;
                            /** @type {number} */
                            i = i + 3;
                          }
                          if (k) {
                            /** @type {number} */
                            data.fam = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 16777215;
                          }
                          if (!(s = points_dp.get())) {
                            s = {
                              exs : [],
                              eys : [],
                              efs : [],
                              ems : []
                            };
                          }
                          /** @type {number} */
                          s.eiu = 0;
                          /** @type {number} */
                          s.xx = n;
                          s.yy = d;
                          /** @type {number} */
                          s.fx = 0;
                          /** @type {number} */
                          s.fy = 0;
                          /** @type {number} */
                          s.da = 0;
                          /** @type {number} */
                          s.ebx = s.xx - p.xx;
                          /** @type {number} */
                          s.eby = s.yy - p.yy;
                          data.pts.push(s);
                          if (data.iiv) {
                            /** @type {number} */
                            a = data.xx + data.fx - s.xx;
                            /** @type {number} */
                            i = data.yy + data.fy - s.yy;
                            s.fx += a;
                            s.fy += i;
                            /** @type {number} */
                            s.exs[s.eiu] = a;
                            /** @type {number} */
                            s.eys[s.eiu] = i;
                            /** @type {number} */
                            s.efs[s.eiu] = 0;
                            /** @type {number} */
                            s.ems[s.eiu] = 1;
                            s.eiu++;
                          }
                          /** @type {number} */
                          p = data.pts.length - 3;
                          if (1 <= p) {
                            undefined = data.pts[p];
                            /** @type {number} */
                            c = n = 0;
                            /** @type {number} */
                            j = p - 1;
                            for (; 0 <= j; j--) {
                              p = data.pts[j];
                              n++;
                              a = p.xx;
                              i = p.yy;
                              if (4 >= n) {
                                /** @type {number} */
                                c = cst * n / 4;
                              }
                              p.xx += (undefined.xx - p.xx) * c;
                              p.yy += (undefined.yy - p.yy) * c;
                              if (data.iiv) {
                                /** @type {number} */
                                a = a - p.xx;
                                /** @type {number} */
                                i = i - p.yy;
                                p.fx += a;
                                p.fy += i;
                                /** @type {number} */
                                p.exs[p.eiu] = a;
                                p.eys[p.eiu] = i;
                                /** @type {number} */
                                p.efs[p.eiu] = 0;
                                /** @type {number} */
                                p.ems[p.eiu] = 2;
                                p.eiu++;
                              }
                              undefined = p;
                            }
                          }
                          /** @type {number} */
                          data.sc = Math.min(6, 1 + (data.sct - 2) / 106);
                          /** @type {number} */
                          data.scang = .13 + .87 * Math.pow((7 - data.sc) / 6, 2);
                          data.ssp = nsp1 + nsp2 * data.sc;
                          data.fsp = data.ssp + .1;
                          /** @type {number} */
                          data.wsep = 6 * data.sc;
                          /** @type {number} */
                          a = nsep / gsc;
                          if (data.wsep < a) {
                            /** @type {number} */
                            data.wsep = a;
                          }
                          if (k) {
                            snl(data);
                          }
                          data.lnp = s;
                          if (data == snake) {
                            ovxx = snake.xx + snake.fx;
                            ovyy = snake.yy + snake.fy;
                          }
                          /** @type {number} */
                          k = etm / 8 * data.sp / 4;
                          /** @type {number} */
                          k = k * lag_mult;
                          /** @type {number} */
                          j = data.chl - 1;
                          /** @type {number} */
                          data.chl = k / data.msl;
                          c = data.xx;
                          p = data.yy;
                          /** @type {number} */
                          data.xx = n + Math.cos(data.ang) * k;
                          /** @type {number} */
                          data.yy = d + Math.sin(data.ang) * k;
                          /** @type {number} */
                          a = data.xx - c;
                          /** @type {number} */
                          i = data.yy - p;
                          /** @type {number} */
                          n = data.chl - j;
                          p = data.fpos;
                          /** @type {number} */
                          j = 0;
                          for (; j < rfc; j++) {
                            data.fxs[p] -= a * rfas[j];
                            data.fys[p] -= i * rfas[j];
                            data.fchls[p] -= n * rfas[j];
                            p++;
                            if (p >= rfc) {
                              /** @type {number} */
                              p = 0;
                            }
                          }
                          data.fx = data.fxs[data.fpos];
                          data.fy = data.fys[data.fpos];
                          data.fchl = data.fchls[data.fpos];
                          data.ftg = rfc;
                          /** @type {number} */
                          data.ehl = 0;
                          if (data == snake) {
                            a = view_xx;
                            i = view_yy;
                            view_xx = snake.xx + snake.fx;
                            view_yy = snake.yy + snake.fy;
                            /** @type {number} */
                            bgx2 = bgx2 - (view_xx - a) / bgw2;
                            /** @type {number} */
                            bgy2 = bgy2 - (view_yy - i) / bgh2;
                            /** @type {number} */
                            bgx2 = bgx2 % 1;
                            if (0 > bgx2) {
                              bgx2 = bgx2 + 1;
                            }
                            /** @type {number} */
                            bgy2 = bgy2 % 1;
                            if (0 > bgy2) {
                              bgy2 = bgy2 + 1;
                            }
                            /** @type {number} */
                            a = view_xx - ovxx;
                            /** @type {number} */
                            i = view_yy - ovyy;
                            p = fvpos;
                            /** @type {number} */
                            j = 0;
                            for (; j < vfc; j++) {
                              fvxs[p] -= a * vfas[j];
                              fvys[p] -= i * vfas[j];
                              p++;
                              if (p >= vfc) {
                                /** @type {number} */
                                p = 0;
                              }
                            }
                            fvtg = vfc;
                          }
                        }
                      }
                    } else {
                      if ("l" == undefined) {
                        if (playing) {
                          /** @type {boolean} */
                          wumsts = true;
                          /** @type {string} */
                          s = c = d = "";
                          /** @type {number} */
                          type = name = 0;
                          if (-1 == lb_fr && -1 == dead_mtm) {
                            /** @type {number} */
                            lb_fr = 0;
                          }
                          /** @type {number} */
                          value = a[i];
                          i++;
                          /** @type {number} */
                          rank = a[i] << 8 | a[i + 1];
                          if (rank < best_rank) {
                            /** @type {number} */
                            best_rank = rank;
                          }
                          /** @type {number} */
                          i = i + 2;
                          /** @type {number} */
                          snake_count = a[i] << 8 | a[i + 1];
                          if (snake_count > biggest_snake_count) {
                            /** @type {number} */
                            biggest_snake_count = snake_count;
                          }
                          /** @type {number} */
                          i = i + 2;
                          for (; i < data;) {
                            /** @type {number} */
                            var lines = a[i] << 8 | a[i + 1];
                            /** @type {number} */
                            i = i + 2;
                            /** @type {number} */
                            temp = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 16777215;
                            /** @type {number} */
                            i = i + 3;
                            /** @type {number} */
                            k = a[i] % 9;
                            i++;
                            /** @type {number} */
                            n = a[i];
                            i++;
                            type++;
                            /** @type {string} */
                            undefined = "";
                            /** @type {number} */
                            j = 0;
                            for (; j < n; j++) {
                              /** @type {number} */
                              p = a[i];
                              /** @type {string} */
                              undefined = undefined + String.fromCharCode(p);
                              i++;
                            }
                            if (type == value) {
                              undefined = my_nick;
                              n = undefined.length;
                            } else {
                              if (!gdnm(undefined)) {
                                /** @type {string} */
                                undefined = "";
                              }
                            }
                            /** @type {string} */
                            var url = "";
                            /** @type {number} */
                            j = 0;
                            for (; j < n; j++) {
                              /** @type {number} */
                              p = undefined.charCodeAt(j);
                              /** @type {string} */
                              url = 38 == p ? url + "&amp;" : 60 == p ? url + "&lt;" : 62 == p ? url + "&gt;" : 32 == p ? url + "&nbsp;" : url + String.fromCharCode(p);
                            }
                            /** @type {string} */
                            undefined = url;
                            name++;
                            /** @type {number} */
                            score = Math.floor(15 * (fpsls[lines] + temp / fmlts[lines] - 1) - 5) / 1;
                            /** @type {number} */
                            p = type == value ? 1 : .7 * (.3 + .7 * (1 - name / 10));
                            /** @type {string} */
                            d = d + ('<span style="opacity:' + p + "; color:" + per_color_imgs[k].cs + ';">' + score + "</span><BR>");
                            /** @type {string} */
                            c = c + ('<span style="opacity:' + p + "; color:" + per_color_imgs[k].cs + ";" + (type == value ? "font-weight:bold;" : "") + '">' + undefined + "</span><BR>");
                            /** @type {string} */
                            s = s + ('<span style="opacity:' + p + "; color:" + per_color_imgs[k].cs + ';">#' + name + "</span><BR>");
                          }
                          /** @type {string} */
                          lbs.innerHTML = d;
                          /** @type {string} */
                          lbn.innerHTML = c;
                          /** @type {string} */
                          lbp.innerHTML = s;
                        }
                      } else {
                        if ("v" == undefined) {
                          if (2 == a[i]) {
                            /** @type {boolean} */
                            want_close_socket = true;
                            /** @type {boolean} */
                            want_victory_message = false;
                            /** @type {number} */
                            want_hide_victory = 1;
                            /** @type {number} */
                            hvfr = 0;
                          } else {
                            /** @type {number} */
                            dead_mtm = Date.now();
                            play_btn.setEnabled(true);
                            /** @type {number} */
                            data = Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1;
                            /** @type {string} */
                            twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + data + " in http://slither.io! Can you beat that? #slitherio");
                            /** @type {string} */
                            n = "Your final length was";
                            if ("de" == lang) {
                              /** @type {string} */
                              n = "Deine endg\u00fcltige L\u00e4nge war";
                            } else {
                              if ("fr" == lang) {
                                /** @type {string} */
                                n = "Votre longueur finale \u00e9tait de";
                              } else {
                                if ("pt" == lang) {
                                  /** @type {string} */
                                  n = "Seu comprimento final foi de";
                                }
                              }
                            }
                            /** @type {string} */
                            d = "";
                            if (1E3 < data) {
                              /** @type {string} */
                              d = "!";
                            }
                            /** @type {string} */
                            lastscore.innerHTML = '<span style="opacity: .45;">' + n + " </span><b>" + data + "</b>" + d;
                            /** @type {string} */
                            data = "Play Again";
                            if ("fr" == lang) {
                              /** @type {string} */
                              data = "Jouer";
                            } else {
                              if ("pt" == lang) {
                                /** @type {string} */
                                data = "Joga";
                              }
                            }
                            play_btn.setText(String.fromCharCode(160) + data + String.fromCharCode(160));
                            if (1 == a[i]) {
                              /** @type {string} */
                              nick_holder.style.display = "none";
                              /** @type {string} */
                              playh.style.display = "none";
                              /** @type {string} */
                              smh.style.display = "none";
                              /** @type {string} */
                              victory_holder.style.display = "inline";
                              /** @type {string} */
                              saveh.style.display = "block";
                              /** @type {boolean} */
                              want_victory_focus = want_victory_message = true;
                              /** @type {boolean} */
                              victory.disabled = false;
                              save_btn.setEnabled(true);
                            } else {
                              /** @type {boolean} */
                              want_close_socket = true;
                            }
                          }
                        } else {
                          if ("W" == undefined) {
                            /** @type {number} */
                            n = a[i];
                            i++;
                            /** @type {number} */
                            d = a[i];
                            data = {};
                            /** @type {number} */
                            data.xx = n;
                            /** @type {number} */
                            data.yy = d;
                            sectors.push(data);
                          } else {
                            if ("w" == undefined) {
                              if (8 <= protocol_version ? (data = 2, n = a[i], i++, d = a[i]) : (data = a[i], i++, n = a[i] << 8 | a[i + 1], i = i + 2, d = a[i] << 8 | a[i + 1]), 1 == data) {
                                data = {};
                                /** @type {number} */
                                data.xx = n;
                                data.yy = d;
                                sectors.push(data);
                              } else {
                                /** @type {number} */
                                k = cm1 = foods_c - 1;
                                for (; 0 <= k; k--) {
                                  p = foods[k];
                                  if (p.sx == n && p.sy == d) {
                                    if (k == cm1) {
                                      /** @type {null} */
                                      foods[k] = null;
                                    } else {
                                      foods[k] = foods[cm1];
                                      /** @type {null} */
                                      foods[cm1] = null;
                                    }
                                    foods_c--;
                                    cm1--;
                                  }
                                }
                                /** @type {number} */
                                k = sectors.length - 1;
                                for (; 0 <= k; k--) {
                                  data = sectors[k];
                                  if (data.xx == n && data.yy == d) {
                                    sectors.splice(k, 1);
                                  }
                                }
                              }
                            } else {
                              if ("m" == undefined) {
                                /** @type {number} */
                                lines = a[i] << 16 | a[i + 1] << 8 | a[i + 2];
                                /** @type {number} */
                                i = i + 3;
                                /** @type {number} */
                                temp = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 16777215;
                                /** @type {number} */
                                i = i + 3;
                                /** @type {number} */
                                d = Math.floor(15 * (fpsls[lines] + temp / fmlts[lines] - 1) - 5) / 1;
                                /** @type {number} */
                                n = a[i];
                                i++;
                                /** @type {string} */
                                p = "";
                                /** @type {number} */
                                k = 0;
                                for (; k < n; k++) {
                                  /** @type {string} */
                                  p = p + String.fromCharCode(a[i]);
                                  i++;
                                }
                                if (!gdnm(p)) {
                                  /** @type {string} */
                                  p = "";
                                }
                                /** @type {string} */
                                n = "";
                                for (; i < data;) {
                                  /** @type {string} */
                                  n = n + String.fromCharCode(a[i]);
                                  i++;
                                }
                                if (!gdnm(n)) {
                                  /** @type {string} */
                                  n = "";
                                }
                                /** @type {string} */
                                p = p.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                                /** @type {string} */
                                n = n.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                                if (0 < d) {
                                  /** @type {string} */
                                  a = "";
                                  if (0 < n.length) {
                                    /** @type {string} */
                                    a = a + ("<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + n + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>");
                                  }
                                  if (0 < p.length) {
                                    /** @type {string} */
                                    a = 0 < n.length ? a + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + p + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + p + "</b></span></i>";
                                    /** @type {string} */
                                    a = a + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + d + "</b></span></i>");
                                  } else {
                                    /** @type {string} */
                                    a = 0 < n.length ? a + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + d + "</b></span></i>") : a + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + d + "</b></span></i>");
                                  }
                                  /** @type {number} */
                                  vcm.innerHTML = a;
                                }
                              } else {
                                if ("p" == undefined) {
                                  /** @type {boolean} */
                                  wfpr = false;
                                  if (lagging) {
                                    /** @type {number} */
                                    etm = etm * lag_mult;
                                    /** @type {boolean} */
                                    lagging = false;
                                  }
                                } else {
                                  if ("u" == undefined) {
                                    j = asmc.getContext("2d");
                                    j.clearRect(0, 0, 80, 80);
                                    /** @type {string} */
                                    j.fillStyle = "#FFFFFF";
                                    /** @type {number} */
                                    var d = n = 0;
                                    for (; i < data && !(80 <= d);) {
                                      if (p = a[i++], 128 <= p) {
                                        /** @type {number} */
                                        p = p - 128;
                                        /** @type {number} */
                                        k = 0;
                                        for (; k < p && !(n++, 80 <= n && (n = 0, d++, 80 <= d)); k++) {
                                        }
                                      } else {
                                        /** @type {number} */
                                        k = 0;
                                        for (; 7 > k && !(0 < (p & u_m[k]) && j.fillRect(n, d, 1, 1), n++, 80 <= n && (n = 0, d++, 80 <= d)); k++) {
                                        }
                                      }
                                    }
                                  } else {
                                    if ("i" == undefined) {
                                      if (adm = true, c = a[i] << 8 | a[i + 1], i = i + 2, data = os["s" + c]) {
                                        if (n = a[i], i++, d = a[i], i++, p = a[i], i++, a = a[i], 0 < n || 0 < d || 0 < p || 0 < a) {
                                          data.nk += " - " + (n + "." + d + "." + p + "." + a);
                                          console.log(data.nk);
                                        }
                                      }
                                    } else {
                                      if ("o" == undefined) {
                                        if (checking_code) {
                                          if (connecting) {
                                            /** @type {boolean} */
                                            connecting = false;
                                            /** @type {boolean} */
                                            connected = true;
                                          } else {
                                            if (0 == a[i]) {
                                              /** @type {boolean} */
                                              etcshk = true;
                                              /** @type {number} */
                                              etcshkv = 0;
                                            } else {
                                              /** @type {!Array} */
                                              a = [];
                                              try {
                                                if (d = localStorage.cocds) {
                                                  /** @type {!Array<string>} */
                                                  a = ("" + d).split(",");
                                                }
                                              } catch (R) {
                                              }
                                              /** @type {string} */
                                              n = "" + etcods[0].v;
                                              /** @type {string} */
                                              n = n + ("" + etcods[1].v);
                                              /** @type {string} */
                                              n = n + ("" + etcods[2].v);
                                              /** @type {string} */
                                              n = n + ("" + etcods[3].v);
                                              /** @type {string} */
                                              n = n + "-" + ("" + etcods[5].v);
                                              /** @type {string} */
                                              n = n + ("" + etcods[6].v);
                                              /** @type {string} */
                                              n = n + ("" + etcods[7].v);
                                              /** @type {string} */
                                              n = n + ("" + etcods[8].v);
                                              /** @type {string} */
                                              n = n + "-" + ("" + etcods[10].v);
                                              /** @type {string} */
                                              n = n + ("" + etcods[11].v);
                                              /** @type {string} */
                                              n = n + ("" + etcods[12].v);
                                              /** @type {string} */
                                              n = n + ("" + etcods[13].v);
                                              /** @type {boolean} */
                                              i = true;
                                              /** @type {number} */
                                              k = a.length - 1;
                                              for (; 0 <= k; k--) {
                                                if (a[k] == n) {
                                                  /** @type {boolean} */
                                                  i = false;
                                                  break;
                                                }
                                              }
                                              if (i) {
                                                a.push(n);
                                                try {
                                                  /** @type {string} */
                                                  localStorage.cocds = a.join(",");
                                                } catch (R) {
                                                }
                                                recalculateActivatedCosmetics();
                                              }
                                              /** @type {boolean} */
                                              want_open_cosmetics = ending_enter_code = true;
                                            }
                                            stchco();
                                          }
                                        }
                                      } else {
                                        if ("s" == undefined) {
                                          if (playing) {
                                            if (c = a[i] << 8 | a[i + 1], i = i + 2, 6 < j) {
                                              /** @type {number} */
                                              name = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                              /** @type {number} */
                                              i = i + 3;
                                              i++;
                                              /** @type {number} */
                                              type = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                              /** @type {number} */
                                              i = i + 3;
                                              /** @type {number} */
                                              value = (a[i] << 8 | a[i + 1]) / 1E3;
                                              /** @type {number} */
                                              i = i + 2;
                                              /** @type {number} */
                                              temp = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 16777215;
                                              /** @type {number} */
                                              i = i + 3;
                                              /** @type {number} */
                                              k = a[i];
                                              i++;
                                              /** @type {!Array} */
                                              lines = [];
                                              /** @type {number} */
                                              url = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 5;
                                              /** @type {number} */
                                              i = i + 3;
                                              /** @type {number} */
                                              var promptVal = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 5;
                                              /** @type {number} */
                                              i = i + 3;
                                              /** @type {number} */
                                              n = a[i];
                                              i++;
                                              /** @type {string} */
                                              undefined = "";
                                              /** @type {number} */
                                              j = 0;
                                              for (; j < n; j++) {
                                                /** @type {string} */
                                                undefined = undefined + String.fromCharCode(a[i]);
                                                i++;
                                              }
                                              /** @type {null} */
                                              var ret = null;
                                              if (11 <= protocol_version) {
                                                /** @type {number} */
                                                n = a[i];
                                                i++;
                                                if (0 < n) {
                                                  /** @type {!Uint8Array} */
                                                  ret = new Uint8Array(n);
                                                  /** @type {number} */
                                                  j = 0;
                                                  for (; j < n; j++) {
                                                    /** @type {number} */
                                                    ret[j] = a[i + j];
                                                  }
                                                }
                                                /** @type {number} */
                                                i = i + n;
                                              }
                                              /** @type {number} */
                                              d = n = 0;
                                              var gestureThrottle;
                                              /** @type {boolean} */
                                              var T = false;
                                              for (; i < data;) {
                                                /** @type {number} */
                                                j = n;
                                                /** @type {number} */
                                                gestureThrottle = d;
                                                if (T) {
                                                  /** @type {number} */
                                                  n = n + (a[i] - 127) / 2;
                                                  i++;
                                                  /** @type {number} */
                                                  d = d + (a[i] - 127) / 2;
                                                  i++;
                                                } else {
                                                  /** @type {number} */
                                                  n = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 5;
                                                  /** @type {number} */
                                                  i = i + 3;
                                                  /** @type {number} */
                                                  d = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 5;
                                                  /** @type {number} */
                                                  i = i + 3;
                                                  /** @type {number} */
                                                  j = n;
                                                  /** @type {number} */
                                                  gestureThrottle = d;
                                                  /** @type {boolean} */
                                                  T = true;
                                                }
                                                if (!(s = points_dp.get())) {
                                                  s = {
                                                    exs : [],
                                                    eys : [],
                                                    efs : [],
                                                    ems : []
                                                  };
                                                }
                                                /** @type {number} */
                                                s.eiu = 0;
                                                /** @type {number} */
                                                s.xx = n;
                                                /** @type {number} */
                                                s.yy = d;
                                                /** @type {number} */
                                                s.fx = 0;
                                                /** @type {number} */
                                                s.fy = 0;
                                                /** @type {number} */
                                                s.da = 0;
                                                /** @type {number} */
                                                s.ebx = n - j;
                                                /** @type {number} */
                                                s.eby = d - gestureThrottle;
                                                lines.push(s);
                                              }
                                              data = newSnake(c, url, promptVal, k, name, lines, ret);
                                              if (null == snake) {
                                                /** @type {number} */
                                                view_xx = n;
                                                /** @type {number} */
                                                view_yy = d;
                                                snake = data;
                                                try {
                                                  p = localStorage.cosmetic;
                                                  if (p == "" + Number(p)) {
                                                    /** @type {number} */
                                                    snake.accessory = Number(p);
                                                  }
                                                } catch (R) {
                                                }
                                                /** @type {boolean} */
                                                snake.md = false;
                                                /** @type {boolean} */
                                                snake.wmd = false;
                                                data.nk = my_nick;
                                              } else {
                                                /** @type {string} */
                                                data.nk = undefined;
                                                if (!gdnm(undefined)) {
                                                  /** @type {string} */
                                                  data.nk = "";
                                                }
                                              }
                                              /** @type {number} */
                                              data.eang = data.wang = type;
                                              /** @type {number} */
                                              data.sp = value;
                                              /** @type {number} */
                                              data.spang = data.sp / spangdv;
                                              if (1 < data.spang) {
                                                /** @type {number} */
                                                data.spang = 1;
                                              }
                                              /** @type {number} */
                                              data.fam = temp;
                                              /** @type {number} */
                                              data.sc = Math.min(6, 1 + (data.sct - 2) / 106);
                                              /** @type {number} */
                                              data.scang = .13 + .87 * Math.pow((7 - data.sc) / 6, 2);
                                              data.ssp = nsp1 + nsp2 * data.sc;
                                              data.fsp = data.ssp + .1;
                                              /** @type {number} */
                                              data.wsep = 6 * data.sc;
                                              /** @type {number} */
                                              a = nsep / gsc;
                                              if (data.wsep < a) {
                                                /** @type {number} */
                                                data.wsep = a;
                                              }
                                              /** @type {number} */
                                              data.sep = data.wsep;
                                              snl(data);
                                            } else {
                                              /** @type {boolean} */
                                              a = 1 == a[i];
                                              /** @type {number} */
                                              k = snakes.length - 1;
                                              for (; 0 <= k; k--) {
                                                if (snakes[k].id == c) {
                                                  /** @type {number} */
                                                  snakes[k].id = -1234;
                                                  if (a) {
                                                    /** @type {boolean} */
                                                    snakes[k].dead = true;
                                                    /** @type {number} */
                                                    snakes[k].dead_amt = 0;
                                                    /** @type {number} */
                                                    snakes[k].edir = 0;
                                                  } else {
                                                    snakes.splice(k, 1);
                                                  }
                                                  delete os["s" + c];
                                                  break;
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          if ("F" == undefined) {
                                            if (4 <= protocol_version) {
                                              /** @type {boolean} */
                                              j = false;
                                              for (; i < data;) {
                                                /** @type {number} */
                                                k = a[i];
                                                i++;
                                                /** @type {number} */
                                                n = a[i] << 8 | a[i + 1];
                                                /** @type {number} */
                                                i = i + 2;
                                                /** @type {number} */
                                                d = a[i] << 8 | a[i + 1];
                                                /** @type {number} */
                                                i = i + 2;
                                                /** @type {number} */
                                                p = a[i] / 5;
                                                i++;
                                                /** @type {number} */
                                                c = d * grd * 3 + n;
                                                p = newFood(c, n, d, p, true, k);
                                                if (!j) {
                                                  /** @type {boolean} */
                                                  j = true;
                                                  /** @type {number} */
                                                  temp = Math.floor(n / sector_size);
                                                  /** @type {number} */
                                                  s = Math.floor(d / sector_size);
                                                }
                                                /** @type {(number|undefined)} */
                                                p.sx = temp;
                                                /** @type {(number|undefined)} */
                                                p.sy = s;
                                              }
                                            } else {
                                              /** @type {number} */
                                              temp = a[i] << 8 | a[i + 1];
                                              /** @type {number} */
                                              i = i + 2;
                                              /** @type {number} */
                                              s = a[i] << 8 | a[i + 1];
                                              /** @type {number} */
                                              i = i + 2;
                                              for (; i < data;) {
                                                /** @type {number} */
                                                c = a[i] << 16 | a[i + 1] << 8 | a[i + 2];
                                                /** @type {number} */
                                                i = i + 3;
                                                /** @type {number} */
                                                k = a[i];
                                                i++;
                                                /** @type {number} */
                                                n = sector_size * (temp + a[i] / 255);
                                                i++;
                                                /** @type {number} */
                                                d = sector_size * (s + a[i] / 255);
                                                i++;
                                                /** @type {number} */
                                                p = a[i] / 5;
                                                i++;
                                                p = newFood(c, n, d, p, true, k);
                                                /** @type {number} */
                                                p.sx = temp;
                                                /** @type {number} */
                                                p.sy = s;
                                              }
                                            }
                                          } else {
                                            if ("b" == undefined || "f" == undefined) {
                                              if (4 <= protocol_version) {
                                                /** @type {number} */
                                                k = a[i];
                                                i++;
                                                if (4 < j) {
                                                  /** @type {number} */
                                                  n = a[i] << 8 | a[i + 1];
                                                  /** @type {number} */
                                                  i = i + 2;
                                                  /** @type {number} */
                                                  d = a[i] << 8 | a[i + 1];
                                                  /** @type {number} */
                                                  c = d * grd * 3 + n;
                                                  /** @type {number} */
                                                  p = a[i + 2] / 5;
                                                  p = newFood(c, n, d, p, "b" == undefined, k);
                                                  /** @type {number} */
                                                  p.sx = Math.floor(n / sector_size);
                                                  /** @type {number} */
                                                  p.sy = Math.floor(d / sector_size);
                                                }
                                              } else {
                                                /** @type {number} */
                                                c = a[i] << 16 | a[i + 1] << 8 | a[i + 2];
                                                /** @type {number} */
                                                i = i + 3;
                                                if (4 < j) {
                                                  /** @type {number} */
                                                  k = a[i];
                                                  i++;
                                                  /** @type {number} */
                                                  temp = a[i] << 8 | a[i + 1];
                                                  /** @type {number} */
                                                  i = i + 2;
                                                  /** @type {number} */
                                                  s = a[i] << 8 | a[i + 1];
                                                  /** @type {number} */
                                                  i = i + 2;
                                                  /** @type {number} */
                                                  n = sector_size * (temp + a[i] / 255);
                                                  i++;
                                                  /** @type {number} */
                                                  d = sector_size * (s + a[i] / 255);
                                                  i++;
                                                  /** @type {number} */
                                                  p = a[i] / 5;
                                                  p = newFood(c, n, d, p, "b" == undefined, k);
                                                  /** @type {number} */
                                                  p.sx = temp;
                                                  /** @type {number} */
                                                  p.sy = s;
                                                }
                                              }
                                            } else {
                                              if ("c" == undefined) {
                                                if (4 <= protocol_version) {
                                                  /** @type {number} */
                                                  n = a[i] << 8 | a[i + 1];
                                                  /** @type {number} */
                                                  i = i + 2;
                                                  /** @type {number} */
                                                  d = a[i] << 8 | a[i + 1];
                                                  /** @type {number} */
                                                  i = i + 2;
                                                  /** @type {number} */
                                                  c = d * grd * 3 + n;
                                                } else {
                                                  /** @type {number} */
                                                  c = a[i] << 16 | a[i + 1] << 8 | a[i + 2];
                                                  /** @type {number} */
                                                  i = i + 3;
                                                }
                                                /** @type {number} */
                                                k = cm1 = foods_c - 1;
                                                for (; 0 <= k; k--) {
                                                  if (p = foods[k], p.id == c) {
                                                    /** @type {boolean} */
                                                    p.eaten = true;
                                                    if (i + 2 <= data) {
                                                      /** @type {number} */
                                                      a = a[i] << 8 | a[i + 1];
                                                      p.eaten_by = os["s" + a];
                                                      /** @type {number} */
                                                      p.eaten_fr = 0;
                                                    } else {
                                                      if (k == cm1) {
                                                        /** @type {null} */
                                                        foods[k] = null;
                                                      } else {
                                                        foods[k] = foods[cm1];
                                                        /** @type {null} */
                                                        foods[cm1] = null;
                                                      }
                                                      foods_c--;
                                                      cm1--;
                                                    }
                                                    /** @type {number} */
                                                    c = -1;
                                                    break;
                                                  }
                                                }
                                                if (testing && -1 != c) {
                                                  console.log("wtf");
                                                }
                                              } else {
                                                if ("j" == undefined) {
                                                  /** @type {number} */
                                                  c = a[i] << 8 | a[i + 1];
                                                  /** @type {number} */
                                                  i = i + 2;
                                                  /** @type {number} */
                                                  n = 1 + 3 * (a[i] << 8 | a[i + 1]);
                                                  /** @type {number} */
                                                  i = i + 2;
                                                  /** @type {number} */
                                                  d = 1 + 3 * (a[i] << 8 | a[i + 1]);
                                                  /** @type {number} */
                                                  i = i + 2;
                                                  /** @type {null} */
                                                  data = null;
                                                  /** @type {number} */
                                                  k = preys.length - 1;
                                                  for (; 0 <= k; k--) {
                                                    if (preys[k].id == c) {
                                                      data = preys[k];
                                                      break;
                                                    }
                                                  }
                                                  if (data) {
                                                    /** @type {number} */
                                                    k = etm / 8 * data.sp / 4;
                                                    /** @type {number} */
                                                    k = k * lag_mult;
                                                    c = data.xx;
                                                    p = data.yy;
                                                    if (15 == j) {
                                                      /** @type {number} */
                                                      data.dir = a[i] - 48;
                                                      i++;
                                                      /** @type {number} */
                                                      data.ang = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                      /** @type {number} */
                                                      i = i + 3;
                                                      /** @type {number} */
                                                      data.wang = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                      /** @type {number} */
                                                      i = i + 3;
                                                      /** @type {number} */
                                                      data.sp = (a[i] << 8 | a[i + 1]) / 1E3;
                                                    } else {
                                                      if (11 == j) {
                                                        /** @type {number} */
                                                        data.ang = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                        /** @type {number} */
                                                        i = i + 3;
                                                        /** @type {number} */
                                                        data.sp = (a[i] << 8 | a[i + 1]) / 1E3;
                                                      } else {
                                                        if (12 == j) {
                                                          /** @type {number} */
                                                          data.dir = a[i] - 48;
                                                          i++;
                                                          /** @type {number} */
                                                          data.wang = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                          /** @type {number} */
                                                          i = i + 3;
                                                          /** @type {number} */
                                                          data.sp = (a[i] << 8 | a[i + 1]) / 1E3;
                                                        } else {
                                                          if (13 == j) {
                                                            /** @type {number} */
                                                            data.dir = a[i] - 48;
                                                            i++;
                                                            /** @type {number} */
                                                            data.ang = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                            /** @type {number} */
                                                            i = i + 3;
                                                            /** @type {number} */
                                                            data.wang = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                          } else {
                                                            if (9 == j) {
                                                              /** @type {number} */
                                                              data.ang = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                            } else {
                                                              if (10 == j) {
                                                                /** @type {number} */
                                                                data.dir = a[i] - 48;
                                                                i++;
                                                                /** @type {number} */
                                                                data.wang = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                              } else {
                                                                if (8 == j) {
                                                                  /** @type {number} */
                                                                  data.sp = (a[i] << 8 | a[i + 1]) / 1E3;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    /** @type {number} */
                                                    data.xx = n + Math.cos(data.ang) * k;
                                                    /** @type {number} */
                                                    data.yy = d + Math.sin(data.ang) * k;
                                                    /** @type {number} */
                                                    a = data.xx - c;
                                                    /** @type {number} */
                                                    i = data.yy - p;
                                                    p = data.fpos;
                                                    /** @type {number} */
                                                    j = 0;
                                                    for (; j < rfc; j++) {
                                                      data.fxs[p] -= a * rfas[j];
                                                      data.fys[p] -= i * rfas[j];
                                                      p++;
                                                      if (p >= rfc) {
                                                        /** @type {number} */
                                                        p = 0;
                                                      }
                                                    }
                                                    data.fx = data.fxs[data.fpos];
                                                    data.fy = data.fys[data.fpos];
                                                    data.ftg = rfc;
                                                  }
                                                } else {
                                                  if ("y" == undefined) {
                                                    if (c = a[i] << 8 | a[i + 1], i = i + 2, 2 == j) {
                                                      /** @type {number} */
                                                      k = preys.length - 1;
                                                      for (; 0 <= k; k--) {
                                                        if (data = preys[k], data.id == c) {
                                                          preys.splice(k, 1);
                                                          break;
                                                        }
                                                      }
                                                    } else {
                                                      if (4 == j) {
                                                        /** @type {number} */
                                                        a = a[i] << 8 | a[i + 1];
                                                        /** @type {number} */
                                                        k = preys.length - 1;
                                                        for (; 0 <= k; k--) {
                                                          if (data = preys[k], data.id == c) {
                                                            /** @type {boolean} */
                                                            data.eaten = true;
                                                            data.eaten_by = os["s" + a];
                                                            if (data.eaten_by) {
                                                              /** @type {number} */
                                                              data.eaten_fr = 0;
                                                            } else {
                                                              preys.splice(k, 1);
                                                            }
                                                            break;
                                                          }
                                                        }
                                                      } else {
                                                        /** @type {number} */
                                                        k = a[i];
                                                        i++;
                                                        /** @type {number} */
                                                        n = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 5;
                                                        /** @type {number} */
                                                        i = i + 3;
                                                        /** @type {number} */
                                                        d = (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) / 5;
                                                        /** @type {number} */
                                                        i = i + 3;
                                                        /** @type {number} */
                                                        p = a[i] / 5;
                                                        i++;
                                                        /** @type {number} */
                                                        temp = a[i] - 48;
                                                        i++;
                                                        /** @type {number} */
                                                        type = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                        /** @type {number} */
                                                        i = i + 3;
                                                        /** @type {number} */
                                                        name = 2 * (a[i] << 16 | a[i + 1] << 8 | a[i + 2]) * Math.PI / 16777215;
                                                        /** @type {number} */
                                                        i = i + 3;
                                                        /** @type {number} */
                                                        value = (a[i] << 8 | a[i + 1]) / 1E3;
                                                        newPrey(c, n, d, p, k, temp, type, name, value);
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    ws.onerror = function(event) {
    };
    /**
     * @param {?} closeEvent
     * @return {undefined}
     */
    ws.onclose = function(closeEvent) {
      if (ws == this) {
        /** @type {boolean} */
        playing = connected = false;
      }
    };
    /**
     * @param {number} r
     * @return {undefined}
     */
    ws.onopen = function(r) {
      if (ws == this) {
        r = asciize(nick.value);
        if (24 < r.length) {
          r = r.substr(0, 24);
        }
        if ("gameweek2016" == r.toLowerCase()) {
          /** @type {string} */
          r = "";
          try {
            /** @type {string} */
            localStorage.gw2k16 = "1";
            /** @type {boolean} */
            gw2k16 = true;
          } catch (L) {
          }
        }
        /** @type {number} */
        my_nick = r;
        if (!gdnm(r)) {
          /** @type {string} */
          r = "";
        }
        /** @type {number} */
        var type = Math.floor(9 * Math.random());
        try {
          var value = localStorage.snakercv;
          if (value == "" + Number(value)) {
            /** @type {number} */
            type = Number(value);
          }
        } catch (L) {
        }
        /** @type {!Array} */
        value = [];
        /** @type {boolean} */
        var i = false;
        /** @type {string} */
        var a = "";
        try {
          /** @type {boolean} */
          i = "1" == localStorage.want_custom_skin;
          a = localStorage.custom_skin;
        } catch (L) {
        }
        if (i && a && 0 < a.length) {
          /** @type {!Array<string>} */
          a = ("" + a).split(",");
          /** @type {!Uint8Array} */
          value = new Uint8Array(a.length);
          /** @type {number} */
          i = 0;
          for (; i < a.length; i++) {
            /** @type {number} */
            value[i] = Number(a[i]);
          }
        }
        if (checking_code) {
          if (14 == etcods.length) {
            /** @type {!Uint8Array} */
            var data = new Uint8Array(7);
            /** @type {number} */
            data[0] = 111;
            r = 1E3 * etcods[0].v + 100 * etcods[1].v + 10 * etcods[2].v + etcods[3].v;
            type = 1E3 * etcods[5].v + 100 * etcods[6].v + 10 * etcods[7].v + etcods[8].v;
            value = 1E3 * etcods[10].v + 100 * etcods[11].v + 10 * etcods[12].v + etcods[13].v;
            /** @type {number} */
            data[1] = r >> 8 & 255;
            /** @type {number} */
            data[2] = r & 255;
            /** @type {number} */
            data[3] = type >> 8 & 255;
            /** @type {number} */
            data[4] = type & 255;
            /** @type {number} */
            data[5] = value >> 8 & 255;
            /** @type {number} */
            data[6] = value & 255;
          }
        } else {
          /** @type {!Uint8Array} */
          data = new Uint8Array(4 + r.length + value.length);
          /** @type {number} */
          data[0] = 115;
          /** @type {number} */
          data[1] = 10;
          /** @type {number} */
          data[2] = type;
          data[3] = r.length;
          /** @type {number} */
          type = 4;
          /** @type {number} */
          i = 0;
          for (; i < r.length; i++) {
            data[type] = r.charCodeAt(i);
            type++;
          }
          /** @type {number} */
          i = 0;
          for (; i < value.length; i++) {
            data[type] = value[i];
            type++;
          }
        }
        startLogin(data);
        /** @type {boolean} */
        high_quality = true;
        /** @type {number} */
        gla = 1;
        /** @type {number} */
        wdfg = 0;
        /** @type {number} */
        qsm = 1;
        if (0 == want_quality) {
          /** @type {boolean} */
          high_quality = false;
          /** @type {number} */
          gla = 0;
          /** @type {number} */
          qsm = 1.7;
        }
        if (1 == render_mode) {
          /** @type {boolean} */
          high_quality = false;
          /** @type {number} */
          gla = 0;
        }
        /** @type {number} */
        lpstm = Date.now();
      }
    };
  }
}
/**
 * @param {string} b
 * @return {?}
 */
function asciize(b) {
  var i;
  var bLength = b.length;
  /** @type {boolean} */
  var output = false;
  /** @type {number} */
  i = 0;
  for (; i < bLength; i++) {
    var value = b.charCodeAt(i);
    if (32 > value || 127 < value) {
      /** @type {boolean} */
      output = true;
      break;
    }
  }
  if (output) {
    /** @type {string} */
    output = "";
    /** @type {number} */
    i = 0;
    for (; i < bLength; i++) {
      value = b.charCodeAt(i);
      /** @type {string} */
      output = 32 > value || 127 < value ? output + " " : output + String.fromCharCode(value);
    }
    return output;
  }
  return b;
}
/** @type {(Element|null)} */
var smh = document.getElementById("smh");
/** @type {(Element|null)} */
var cstx = document.getElementById("cstx");
/** @type {string} */
cstx.style.display = "none";
/** @type {(Element|null)} */
var fb = document.getElementById("fb");
/** @type {string} */
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
/**
 * @return {undefined}
 */
fb.onclick = function() {
  try {
    /** @type {string} */
    localStorage.edttsg = "1";
  } catch (b) {
  }
};
/** @type {(Element|null)} */
var fbh = document.getElementById("fbh");
/** @type {(Element|null)} */
var twt = document.getElementById("twt");
/**
 * @return {undefined}
 */
twt.onclick = function() {
  try {
    /** @type {string} */
    localStorage.edttsg = "1";
  } catch (b) {
  }
};
/** @type {string} */
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
/** @type {(Element|null)} */
var twth = document.getElementById("twth");
/** @type {(Element|null)} */
var csk = document.getElementById("csk");
/** @type {(Element|null)} */
var cskh = document.getElementById("cskh");
/** @type {(Element|null)} */
var bsk = document.getElementById("bsk");
/** @type {(Element|null)} */
var bskh = document.getElementById("bskh");
/** @type {(Element|null)} */
var scos = document.getElementById("scos");
/** @type {(Element|null)} */
var scosh = document.getElementById("scosh");
/** @type {(Element|null)} */
var etco = document.getElementById("etco");
/** @type {(Element|null)} */
var etcoh = document.getElementById("etcoh");
/** @type {number} */
var want_quality = 1;
/** @type {(Element|null)} */
var grq = document.getElementById("grq");
/** @type {(Element|null)} */
var grqh = document.getElementById("grqh");
/** @type {!Element} */
var phqi = document.createElement("img");
/** @type {(Element|null)} */
var grqi = document.getElementById("grqi");
try {
  if ("0" == localStorage.qual) {
    /** @type {string} */
    grqi.src = "/s/lowquality.png";
    /** @type {number} */
    want_quality = 0;
  } else {
    /** @type {string} */
    phqi.src = "/s/lowquality.png";
    /** @type {number} */
    want_quality = 1;
  }
} catch (b) {
}
/**
 * @return {?}
 */
grq.onclick = function() {
  try {
    if ("0" == localStorage.qual) {
      /** @type {string} */
      localStorage.qual = "1";
      /** @type {string} */
      grqi.src = "/s/highquality.png";
      /** @type {number} */
      want_quality = 1;
    } else {
      /** @type {string} */
      localStorage.qual = "0";
      /** @type {string} */
      grqi.src = "/s/lowquality.png";
      /** @type {number} */
      want_quality = 0;
    }
  } catch (b) {
  }
  return false;
};
/** @type {(Element|null)} */
var plq = document.getElementById("plq");
/** @type {(Element|null)} */
var clq = document.getElementById("clq");
/** @type {string} */
cskh.style.display = "inline";
/** @type {(Element|null)} */
var psk = document.getElementById("psk");
/** @type {(Element|null)} */
var pskh = document.getElementById("pskh");
/** @type {(Element|null)} */
var nsk = document.getElementById("nsk");
/** @type {(Element|null)} */
var nskh = document.getElementById("nskh");
/** @type {(Element|null)} */
var etcod = document.getElementById("etcod");
/** @type {!Element} */
var etcot = document.createElement("div");
etcod.appendChild(etcot);
/** @type {!Element} */
var t = etcot;
/** @type {string} */
t.style.position = "absolute";
/** @type {string} */
t.style.width = "800px";
/** @type {string} */
t.style.height = "32px";
/** @type {string} */
t.style.textAlign = "center";
/** @type {string} */
t.style.color = "#FFFFFF";
/** @type {string} */
t.style.fontWeight = "bold";
/** @type {string} */
t.style.textAlign = "center";
/** @type {string} */
t.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
/** @type {string} */
t.style.fontSize = "18px";
/** @type {string} */
t.textContent = "if you have a code, enter it here!";
/** @type {string} */
t.className = "nsi";
/** @type {!Array} */
var etcobs = [];
/** @type {number} */
i = 0;
for (; 10 >= i; i++) {
  /** @type {!Element} */
  a = document.createElement("a");
  /** @type {boolean} */
  a.draggable = false;
  /** @type {string} */
  a.href = "#";
  /** @type {string} */
  a.className = "btn btnt";
  /** @type {!Element} */
  ii = document.createElement("img");
  /** @type {number} */
  ii.width = 135;
  /** @type {number} */
  ii.height = 135;
  /** @type {string} */
  ii.className = "nsi";
  /** @type {string} */
  ii.style.position = "absolute";
  /** @type {boolean} */
  ii.draggable = false;
  /** @type {number} */
  ii.style.opacity = 0;
  etcod.appendChild(a);
  a.appendChild(ii);
  /**
   * @return {?}
   */
  a.onclick = function() {
    var p;
    /** @type {number} */
    p = etcobs.length - 1;
    for (; 0 <= p; p--) {
      if (etcobs[p].a == this) {
        p = etcobs[p];
        if (10 == p.v) {
          deleteLastCodeDigit();
        } else {
          enterCodeDigit(p.v);
        }
        break;
      }
    }
    return false;
  };
  /**
   * @return {undefined}
   */
  ii.onload = function() {
    var description;
    /** @type {number} */
    description = etcobs.length - 1;
    for (; 0 <= description; description--) {
      if (etcobs[description].ii == this) {
        description = etcobs[description];
        /** @type {boolean} */
        description.loaded = true;
        break;
      }
    }
  };
  o = {};
  /** @type {!Element} */
  o.ii = ii;
  /** @type {!Element} */
  o.a = a;
  /** @type {number} */
  o.alpha = 0;
  /** @type {number} */
  o.v = i;
  etcobs.push(o);
}
/** @type {string} */
pstr = "Cancel";
if ("de" == lang) {
  /** @type {string} */
  pstr = "Stornieren";
} else {
  if ("fr" == lang) {
    /** @type {string} */
    pstr = "Annuler";
  } else {
    if ("pt" == lang) {
      /** @type {string} */
      pstr = "Cancelar";
    } else {
      if ("es" == lang) {
        /** @type {string} */
        pstr = "Cancelar";
      }
    }
  }
}
var cancel_code_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1);
var etcocdiv = o.elem;
/** @type {number} */
etcocdiv.style.zIndex = 53;
/** @type {string} */
etcocdiv.style.position = "fixed";
/**
 * @return {undefined}
 */
etcocdiv.onclick = function() {
  if (entering_code && !checking_code) {
    stchco();
    /** @type {boolean} */
    ending_enter_code = true;
  }
};
etcod.appendChild(etcocdiv);
/** @type {!Element} */
var etco_sp_ii = document.createElement("img");
/** @type {number} */
etco_sp_ii.width = 100;
/** @type {number} */
etco_sp_ii.height = 100;
/** @type {string} */
etco_sp_ii.className = "nsi";
/** @type {string} */
etco_sp_ii.style.position = "absolute";
/** @type {boolean} */
etco_sp_ii.draggable = false;
/** @type {number} */
etco_sp_ii.style.opacity = 0;
etcod.appendChild(etco_sp_ii);
/** @type {!Array} */
var etcdis = [];
/** @type {number} */
var etc_ww = 705;
/** @type {number} */
var etc_hh = 67;
/** @type {!Element} */
var etcc = document.createElement("canvas");
/** @type {string} */
etcc.style.position = "absolute";
/** @type {number} */
etcc.width = etc_ww;
/** @type {number} */
etcc.height = etc_hh;
etcod.appendChild(etcc);
/** @type {number} */
var etcbx = 0;
/** @type {number} */
var etcdx = etc_ww / 2 - 27;
/** @type {!Array} */
var etcods = [];
/** @type {boolean} */
var ever_showed_entercode = false;
/** @type {boolean} */
var entering_code = false;
/** @type {boolean} */
var checking_code = false;
/** @type {boolean} */
var ending_enter_code = false;
/** @type {boolean} */
var want_open_cosmetics = false;
/** @type {number} */
var etca = 0;
/** @type {number} */
var etcba = 0;
/** @type {number} */
var etcbaa = 1;
/** @type {number} */
var etcsv = 0;
/** @type {number} */
var etcsrv = 0;
/** @type {number} */
var etcsa = 0;
/** @type {boolean} */
var etcshk = false;
/** @type {number} */
var etcshkv = 0;
/** @type {boolean} */
var hacos = false;
/** @type {boolean} */
var bonkz = false;
/** @type {!Array} */
var actco = [];
/**
 * @return {undefined}
 */
function stchco() {
  /** @type {boolean} */
  checking_code = false;
  /** @type {number} */
  var i = etcobs.length - 1;
  for (; 0 <= i; i--) {
    /** @type {string} */
    etcobs[i].a.className = "btn btnt";
  }
  cancel_code_btn.setEnabled(true);
  resetGame();
}
/**
 * @return {undefined}
 */
function recalculateActivatedCosmetics() {
  /** @type {!Array} */
  actco = [];
  /** @type {number} */
  var i = 0;
  for (; 32 > i; i++) {
    actco.push(0);
  }
  /** @type {!Array} */
  var suff_array = [];
  try {
    var data = localStorage.cocds;
    if (data) {
      /** @type {!Array<string>} */
      suff_array = ("" + data).split(",");
    }
  } catch (q) {
  }
  /** @type {number} */
  i = 0;
  for (; i < suff_array.length; i++) {
    if (s = suff_array[i], 14 == s.length) {
      /** @type {number} */
      var start = Number(s.substr(0, 4));
      /** @type {number} */
      var g = Number(s.substr(5, 4));
      /** @type {number} */
      var enc_length = Number(s.substr(10, 4));
      /** @type {!Array} */
      data = [];
      data.push(7 * start % 32);
      data.push(7 * g % 32);
      data.push(7 * enc_length % 32);
      /** @type {number} */
      start = data.length - 1;
      for (; 0 <= start; start--) {
        g = data[start];
        /** @type {number} */
        enc_length = 0;
        for (; 64 > enc_length; enc_length++) {
          if (0 == actco[g]) {
            /** @type {number} */
            actco[g] = 1;
            if (!hacos) {
              /** @type {boolean} */
              hacos = true;
              /** @type {string} */
              etcoh.style.display = "inline";
              reposGraphicsQuality();
            }
            break;
          }
          g++;
          if (32 <= g) {
            /** @type {number} */
            g = 0;
          }
        }
      }
    }
  }
}
/**
 * @param {number} i
 * @return {undefined}
 */
function enterCodeDigit(i) {
  if (entering_code && !checking_code && 14 > etcods.length) {
    var asset = {};
    /** @type {number} */
    asset.v = i;
    etcods.push(asset);
    if (4 == etcods.length || 9 == etcods.length) {
      asset = {
        v : 10
      };
      etcods.push(asset);
    }
    if (14 == etcods.length) {
      /** @type {boolean} */
      checking_code = want_play = true;
      /** @type {number} */
      i = etcobs.length - 1;
      for (; 0 <= i; i--) {
        /** @type {string} */
        etcobs[i].a.className = "btn_disabled btnt";
      }
      cancel_code_btn.setEnabled(false);
    }
  }
}
/**
 * @return {undefined}
 */
function deleteLastCodeDigit() {
  if (entering_code && !checking_code && 0 < etcods.length) {
    if (10 == etcods[etcods.length - 1].v) {
      etcods.splice(etcods.length - 1, 1);
    }
    if (0 < etcods.length) {
      etcods.splice(etcods.length - 1, 1);
    }
  }
}
/** @type {boolean} */
var choosing_skin = false;
/** @type {boolean} */
var building_skin = false;
/** @type {boolean} */
var ending_build_skin = false;
/** @type {number} */
var bdska = 0;
/** @type {number} */
var bskoy = 0;
/** @type {number} */
var skoboym = 0;
/** @type {!Array} */
var build_segments = [];
/** @type {!Array} */
var bskbtns = [];
/** @type {boolean} */
var selecting_cosmetic = false;
/** @type {boolean} */
var ending_select_cosmetic = false;
/** @type {number} */
var secosa = 0;
/** @type {number} */
var secosoy = 0;
/** @type {number} */
var secosoym = 0;
/** @type {!Array} */
var cosbtns = [];
/**
 * @return {?}
 */
psk.onclick = function() {
  if (building_skin || selecting_cosmetic) {
    return false;
  }
  if (playing && null != snake) {
    var realVal = snake.rcv;
    realVal--;
    if (0 > realVal) {
      realVal = max_skin_cv;
    }
    if (!gw2k16) {
      if (42 == realVal) {
        realVal--;
      }
    }
    setSkin(snake, realVal, null);
    try {
      /** @type {string} */
      localStorage.want_custom_skin = "0";
    } catch (c) {
    }
  }
  return false;
};
/**
 * @return {?}
 */
nsk.onclick = function() {
  if (building_skin || selecting_cosmetic) {
    return false;
  }
  if (playing && null != snake) {
    var realVal = snake.rcv;
    realVal++;
    if (!gw2k16) {
      if (42 == realVal) {
        realVal++;
      }
    }
    if (realVal > max_skin_cv) {
      /** @type {number} */
      realVal = 0;
    }
    setSkin(snake, realVal, null);
    try {
      /** @type {string} */
      localStorage.want_custom_skin = "0";
    } catch (c) {
    }
  }
  return false;
};
/**
 * @return {undefined}
 */
function reposSkinStuff() {
  /** @type {string} */
  skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
  /** @type {string} */
  skodiv.style.top = building_skin ? Math.round(hh / 2 + 120 + 94 * skoboym) + "px" : selecting_cosmetic ? Math.round(hh / 2 + 120 + 94 * secosoym) + "px" : Math.round(hh / 2 + 120) + "px";
  /** @type {string} */
  revdiv.style.left = Math.round(ww / 2 - revdiv.offsetWidth / 2 - skodiv.offsetWidth - 62) + "px";
  /** @type {string} */
  revdiv.style.top = Math.round(hh / 2 + 120 + 94 * skoboym) + "px";
}
/**
 * @return {?}
 */
csk.onclick = function() {
  if (!playing && -1 == dead_mtm) {
    resetGame();
    /** @type {boolean} */
    choosing_skin = true;
    /** @type {number} */
    pskh.style.opacity = 0;
    /** @type {number} */
    nskh.style.opacity = 0;
    /** @type {number} */
    bskh.style.opacity = 0;
    /** @type {number} */
    scosh.style.opacity = 0;
    /** @type {number} */
    skodiv.style.opacity = 0;
    /** @type {number} */
    revdiv.style.opacity = 0;
    /** @type {string} */
    pskh.style.display = "inline";
    /** @type {string} */
    nskh.style.display = "inline";
    /** @type {string} */
    bskh.style.display = "inline";
    if (hacos) {
      /** @type {string} */
      scosh.style.display = "inline";
    }
    /** @type {string} */
    skodiv.style.display = "inline";
    /** @type {string} */
    revdiv.style.display = "none";
    reposSkinStuff();
    /** @type {boolean} */
    nick.disabled = true;
    if (0 == mscps) {
      setMscps(300);
    }
    /** @type {!Array} */
    var options = [];
    /** @type {number} */
    var i = 27;
    for (; 1 <= i; i--) {
      options.push({
        xx : grd / 2 - 10 * i,
        yy : grd / 2,
        fx : 0,
        fy : 0,
        exs : [],
        eys : [],
        efs : [],
        ems : [],
        eiu : 0,
        da : 0,
        ebx : 10,
        eby : 0
      });
    }
    /** @type {number} */
    var next = 0;
    try {
      var value = localStorage.snakercv;
      if (value == "" + Number(value)) {
        /** @type {number} */
        next = Number(value);
      }
    } catch (q) {
    }
    /** @type {null} */
    value = null;
    /** @type {boolean} */
    i = false;
    /** @type {string} */
    var a = "";
    try {
      /** @type {boolean} */
      i = "1" == localStorage.want_custom_skin;
      a = localStorage.custom_skin;
    } catch (q) {
    }
    if (i && a && 0 < a.length) {
      /** @type {!Array<string>} */
      a = ("" + a).split(",");
      /** @type {!Uint8Array} */
      value = new Uint8Array(a.length);
      /** @type {number} */
      i = 0;
      for (; i < a.length; i++) {
        /** @type {number} */
        value[i] = Number(a[i]);
      }
    }
    options = newSnake(1, grd / 2, grd / 2, next, 0, options, value);
    /** @type {number} */
    view_xx = grd / 2 - 105;
    /** @type {number} */
    view_yy = grd / 2;
    snake = options;
    try {
      var id = localStorage.cosmetic;
      if (id == "" + Number(id)) {
        /** @type {number} */
        snake.accessory = Number(id);
      }
    } catch (q) {
    }
    /** @type {string} */
    options.nk = "";
    options.eang = options.wang = options.ang;
    /** @type {number} */
    options.sp = 4.8;
    /** @type {number} */
    options.spang = options.sp / spangdv;
    if (1 < options.spang) {
      /** @type {number} */
      options.spang = 1;
    }
    /** @type {number} */
    options.sc = 1;
    /** @type {number} */
    options.scang = 1;
    options.ssp = nsp1 + nsp2 * options.sc;
    options.fsp = options.ssp + .1;
    /** @type {number} */
    options.wsep = 6 * options.sc;
    /** @type {number} */
    id = nsep / gsc;
    if (options.wsep < id) {
      /** @type {number} */
      options.wsep = id;
    }
    /** @type {number} */
    options.sep = options.wsep;
    snl(options);
    /** @type {number} */
    options.alive_amt = 1;
    /** @type {number} */
    options.rex = 1.66;
    ws = {
      send : function(b) {
      },
      close : function() {
      }
    };
    /** @type {boolean} */
    high_quality = playing = connected = true;
    /** @type {number} */
    gla = 1;
    /** @type {number} */
    wdfg = 0;
    /** @type {number} */
    qsm = 1;
    startShowGame();
    /** @type {string} */
    lbh.style.display = "none";
    /** @type {string} */
    lbs.style.display = "none";
    /** @type {string} */
    lbn.style.display = "none";
    /** @type {string} */
    lbp.style.display = "none";
    /** @type {string} */
    lbf.style.display = "none";
    /** @type {string} */
    vcm.style.display = "none";
    /** @type {string} */
    loch.style.display = "none";
  }
  return false;
};
/**
 * @return {?}
 */
etco.onclick = function() {
  if (!etco_sp_ii) {
    /** @type {!Element} */
    etco_sp_ii = document.createElement("img");
    /** @type {number} */
    etco_sp_ii.width = 100;
    /** @type {number} */
    etco_sp_ii.height = 100;
  }
  if (!playing && -1 == dead_mtm) {
    resetGame();
    /** @type {boolean} */
    entering_code = true;
    /** @type {boolean} */
    ending_enter_code = false;
    if (!ever_showed_entercode) {
      /** @type {boolean} */
      ever_showed_entercode = true;
      /** @type {number} */
      var type = etcobs.length - 1;
      for (; 0 <= type; type--) {
        /** @type {string} */
        etcobs[type].ii.src = 10 == type ? "/s/codedel.png" : "/s/code" + type + ".png";
      }
      /** @type {string} */
      etco_sp_ii.src = "/s/spinner.png";
      /** @type {number} */
      type = 0;
      for (; 11 >= type; type++) {
        /** @type {!Element} */
        var c = document.createElement("img");
        /** @type {number} */
        c.width = 54;
        /** @type {number} */
        c.height = 67;
        /** @type {number} */
        var cur = type;
        if (10 == type) {
          /** @type {string} */
          cur = "h";
        } else {
          if (11 == type) {
            /** @type {string} */
            cur = "b";
          }
        }
        /**
         * @return {undefined}
         */
        c.onload = function() {
          /** @type {number} */
          var duplexType = etcdis.length - 1;
          for (; 0 <= duplexType; duplexType--) {
            var data = etcdis[duplexType];
            if (data.ii == this) {
              /** @type {boolean} */
              data.loaded = true;
            }
          }
        };
        var data = {};
        /** @type {!Element} */
        data.ii = c;
        /** @type {boolean} */
        data.loaded = false;
        etcdis.push(data);
        /** @type {string} */
        c.src = "/s/cd" + cur + ".png";
      }
    }
    /** @type {string} */
    etcod.style.display = "inline";
    reposEnterCode();
    /** @type {boolean} */
    nick.disabled = true;
  }
  return false;
};
/**
 * @return {?}
 */
bsk.onclick = function() {
  if (playing && choosing_skin && !building_skin && !selecting_cosmetic) {
    var i;
    var v;
    var s;
    /** @type {number} */
    var t = s = 0;
    /** @type {!Array} */
    build_segments = [];
    alcsc = falcsc;
    /** @type {string} */
    var r = "";
    try {
      /** @type {string} */
      localStorage.want_custom_skin = "1";
      r = localStorage.custom_skin;
    } catch (A) {
    }
    if (r && 0 < r.length) {
      /** @type {!Array<string>} */
      r = ("" + r).split(",");
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      t = -1;
      /** @type {boolean} */
      var c = true;
      /** @type {number} */
      i = 8;
      for (; i < r.length; i++) {
        if (c) {
          /** @type {number} */
          n = Number(r[i]);
        } else {
          /** @type {number} */
          t = Number(r[i]);
          /** @type {number} */
          v = 0;
          for (; v < n; v++) {
            build_segments.push(t);
          }
        }
        /** @type {boolean} */
        c = !c;
      }
    }
    setSkin(snake, 0, getBuildSkinData(true));
    /** @type {boolean} */
    building_skin = true;
    /** @type {boolean} */
    ending_build_skin = false;
    /** @type {!Array} */
    n = [];
    /** @type {!Array} */
    c = [];
    /** @type {number} */
    i = 0;
    for (; 4 > i; i++) {
      /** @type {number} */
      r = 0;
      /** @type {number} */
      t = Math.floor(csks.length * (i + 1) / 4);
      /** @type {number} */
      v = s;
      for (; v < t; v++) {
        r++;
      }
      c.push(r);
      /** @type {number} */
      s = t;
    }
    c[0]--;
    c[1]--;
    c[2]++;
    c[3]++;
    /** @type {!Array} */
    t = [];
    /** @type {number} */
    i = s = 0;
    for (; 4 > i; i++) {
      /** @type {!Array} */
      t = [];
      n.push(t);
      /** @type {number} */
      v = 0;
      for (; v < c[i]; v++) {
        t.push(csks[s]);
        s++;
      }
    }
    /** @type {number} */
    r = 0;
    for (; r < n.length; r++) {
      t = n[r];
      /** @type {number} */
      i = 0;
      for (; i < t.length; i++) {
        if (v = t[i], 0 <= v && v < rrs.length) {
          s = {};
          var a = per_color_imgs[v].kmcs[0];
          /** @type {!Element} */
          c = document.createElement("canvas");
          /** @type {!Element} */
          s.ii = c;
          c.width = a.width;
          c.height = a.height;
          var x = c.getContext("2d");
          x.rotate(Math.PI);
          x.drawImage(a, -a.width, -a.height);
          /** @type {number} */
          c.style.opacity = 0;
          /** @type {string} */
          c.style.position = "absolute";
          /** @type {string} */
          c.style.left = "0px";
          /** @type {string} */
          c.style.top = "0px";
          /** @type {boolean} */
          c.draggable = false;
          /** @type {number} */
          s.xx = Math.floor(55 * t.length * (i - (t.length - 1) / 2) / t.length);
          /** @type {number} */
          s.yy = Math.floor(-32 - 62 * r);
          /** @type {!Element} */
          a = document.createElement("a");
          /** @type {boolean} */
          a.draggable = false;
          /** @type {string} */
          a.href = "#";
          /** @type {string} */
          a.className = "btn btnt";
          /** @type {number} */
          a.style.zIndex = 53;
          /** @type {string} */
          a.style.position = "fixed";
          a.appendChild(c);
          /** @type {!Element} */
          s.a = a;
          document.body.appendChild(a);
          s.cv = v;
          /**
           * @return {?}
           */
          a.onclick = function() {
            if (!choosing_skin || !building_skin || 47 <= build_segments.length) {
              return false;
            }
            /** @type {number} */
            var i = bskbtns.length - 1;
            for (; 0 <= i; i--) {
              if (bskbtns[i].a == this) {
                build_segments.push(bskbtns[i].cv);
                break;
              }
            }
            setSkin(snake, 0, getBuildSkinData(true));
            return false;
          };
          bskbtns.push(s);
        }
      }
    }
    reposBskbtns();
    /** @type {number} */
    revdiv.style.opacity = 0;
    /** @type {string} */
    revdiv.style.display = "inline";
  }
  return false;
};
/**
 * @return {?}
 */
scos.onclick = function() {
  if (playing && choosing_skin && !building_skin && !selecting_cosmetic) {
    /** @type {boolean} */
    selecting_cosmetic = true;
    /** @type {boolean} */
    ending_select_cosmetic = false;
    var data;
    /** @type {number} */
    var candidatesWidth = 0;
    /** @type {number} */
    var e = 1;
    /** @type {number} */
    var i = 0;
    for (; 32 > i; i++) {
      if (actco.length > i && 1 == actco[i]) {
        e++;
      }
    }
    if (8 < e) {
      /** @type {number} */
      e = 8;
    }
    /** @type {number} */
    i = 0;
    for (; 32 >= i; i++) {
      if (32 == i || actco.length > i && 1 == actco[i]) {
        data = {};
        /** @type {number} */
        data.v = 32 == i ? -1 : i;
        /** @type {!Element} */
        var element = document.createElement("img");
        /**
         * @return {undefined}
         */
        element.onload = function() {
          var src;
          /** @type {number} */
          var name = cosbtns.length - 1;
          for (; 0 <= name; name--) {
            if (src = cosbtns[name], src.ii == this) {
              if (-1 == src.v) {
                /** @type {number} */
                src.ww = .5 * this.width;
                /** @type {number} */
                src.hh = .5 * this.height;
              } else {
                /** @type {number} */
                src.ww = .35 * this.width;
                /** @type {number} */
                src.hh = .35 * this.height;
              }
              this.width = src.ww;
              this.height = src.hh;
              src.xx -= src.ww / 2;
              src.yy -= src.hh / 2;
              reposCosbtns();
              break;
            }
          }
        };
        element.src = 32 == i ? "/s/a_none.png" : a_imgs[i].u;
        /** @type {number} */
        element.style.opacity = 0;
        /** @type {string} */
        element.style.position = "absolute";
        /** @type {string} */
        element.style.left = "0px";
        /** @type {string} */
        element.style.top = "0px";
        /** @type {boolean} */
        element.draggable = false;
        /** @type {!Element} */
        data.ii = element;
        trf(element, "rotate(90deg)");
        /** @type {number} */
        data.xx = 102 * (candidatesWidth % 8 - (e / 2 - .5));
        /** @type {number} */
        data.yy = -22 - 80 * Math.floor(candidatesWidth / 8);
        candidatesWidth++;
        /** @type {!Element} */
        var a = document.createElement("a");
        /** @type {boolean} */
        a.draggable = false;
        /** @type {string} */
        a.href = "#";
        /** @type {string} */
        a.className = "btn btnt";
        /** @type {number} */
        a.style.zIndex = 53;
        /** @type {string} */
        a.style.position = "fixed";
        a.appendChild(element);
        /** @type {!Element} */
        data.a = a;
        document.body.appendChild(a);
        /**
         * @return {?}
         */
        a.onclick = function() {
          if (!choosing_skin || !selecting_cosmetic) {
            return false;
          }
          /** @type {number} */
          var i = cosbtns.length - 1;
          for (; 0 <= i; i--) {
            if (cosbtns[i].a == this) {
              snake.accessory = cosbtns[i].v;
              break;
            }
          }
          return false;
        };
        cosbtns.push(data);
      }
    }
    reposCosbtns();
  }
  return false;
};
/**
 * @return {undefined}
 */
nick.oninput = function() {
  var b = this.value;
  var a = asciize(b);
  if (24 < a.length) {
    a = a.substr(0, 24);
  }
  if (b != a) {
    this.value = a;
  }
  if ("bonkers" == b.toLowerCase()) {
    /** @type {boolean} */
    bonkz = true;
    /** @type {string} */
    etcoh.style.display = "inline";
    reposGraphicsQuality();
  }
};
/**
 * @return {undefined}
 */
victory.oninput = function() {
  var b = this.value;
  var a = asciize(b);
  if (140 < a.length) {
    a = a.substr(0, 140);
  }
  if (b != a) {
    this.value = a;
  }
};
nick.focus();
/** @type {string} */
s = "";
/** @type {number} */
i = 0;
for (; i < zzs.length; i++) {
  /** @type {string} */
  s = s + String.fromCharCode(zzs[i] + 32);
}
piar(s);
/** @type {!Element} */
var lmch = document.createElement("div");
/** @type {string} */
lmch.style.width = "450px";
/** @type {string} */
lmch.style.height = "115px";
/** @type {!Element} */
var lmc2 = document.createElement("canvas");
/** @type {!Element} */
var lmc = document.createElement("canvas");
/** @type {number} */
var lgsc = 1;
/** @type {number} */
var lw = 900;
/** @type {number} */
var lh = 270;
/** @type {number} */
lmc.width = lmc2.width = lw;
/** @type {number} */
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d");
var lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
/** @type {!Array} */
var lts = [];
lts.push({
  pts : [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
  kc : 22,
  ws : 4,
  wr : .025,
  qm : .025,
  sp : .06,
  sz : 11
}, {
  pts : [150, 30, 150, 107, 150, 184],
  kc : 66,
  ws : 4,
  wr : .05,
  qm : .025,
  sp : .06,
  sz : 11
}, {
  pts : [207, 96, 207, 140, 207, 184],
  kc : 46,
  ws : 4,
  wr : .03,
  qm : .035,
  sp : .06,
  sz : 11
}, {
  pts : [207, 47, 207, 48.5, 207, 50],
  kc : 11,
  ws : 2,
  wr : .06,
  qm : .05,
  sp : .06,
  sz : 15,
  r : .5
}, {
  pts : [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
  kc : 66,
  ws : 6,
  wr : -.025,
  qm : -.0125,
  sp : .06,
  sz : 11,
  r : 1.5
}, {
  pts : [243, 94, 268, 94, 293, 94],
  kc : 66,
  ws : 4,
  wr : .015,
  qm : .025,
  sp : .06,
  sz : 9,
  r : 1.2
}, {
  pts : [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
  kc : 46,
  ws : 4,
  wr : .005,
  qm : .02,
  sp : .06,
  sz : 11,
  r : 2.1
}, {
  pts : [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
  kc : 35,
  ws : 6,
  wr : -.013,
  qm : -.025,
  sp : .06,
  sz : 11,
  r : 1.3
}, {
  pts : [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
  kc : 38,
  ws : 4,
  wr : .01,
  qm : -.035,
  sp : .06,
  sz : 11
}, {
  pts : [663, 177, 663, 178.5, 663, 180],
  kc : 11,
  ws : 2,
  wr : .06,
  qm : .05,
  sp : .06,
  sz : 15
}, {
  pts : [717, 96, 717, 140, 717, 184],
  kc : 33,
  ws : 4,
  wr : .06,
  qm : .05,
  sp : .06,
  sz : 11
}, {
  pts : [717, 47, 717, 48.5, 717, 50],
  kc : 11,
  ws : 2,
  wr : .06,
  qm : .05,
  sp : .06,
  sz : 15
}, {
  pts : [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
  kc : 43,
  ws : 4,
  wr : 0,
  qm : .0274,
  sp : .073,
  sz : 11,
  r : 1.5
});
/** @type {number} */
i = 0;
for (; i < lts.length; i++) {
  /** @type {number} */
  lts[i].mwig = 5;
}
/** @type {number} */
var lga = 0;
/** @type {number} */
var lgss = 0;
/** @type {number} */
var ncka = 0;
/** @type {number} */
var mwig = 4;
/** @type {number} */
var lgfr = 0;
/** @type {number} */
var lgtm = Date.now();
/**
 * @param {string} e
 * @return {undefined}
 */
function showLogo(e) {
  /** @type {number} */
  var i = Date.now();
  /** @type {number} */
  var nMinPercentage = (i - lgtm) / 25;
  /** @type {number} */
  lgtm = i;
  var j;
  lgfr = lgfr + nMinPercentage;
  if (0 == lts[lts.length - 1].mwig && 1 == lga && 1 == lgss && 1 == ncka) {
    clearInterval(showlogo_iv);
    /** @type {number} */
    showlogo_iv = -1;
  } else {
    if (e || 1 != lga) {
      lga = lga + .05 * nMinPercentage;
      if (1 <= lga) {
        /** @type {number} */
        lga = 1;
      }
      lmc2.style.opacity = lga;
    }
    if (1 != lgss) {
      lgss = lgss + .00375 * nMinPercentage;
      if (1 <= lgss) {
        /** @type {number} */
        lgss = 1;
      }
    }
    if (e || 1 != ncka) {
      ncka = ncka + .006 * nMinPercentage;
      if (1 <= ncka) {
        /** @type {number} */
        ncka = 1;
      }
      /** @type {number} */
      nick_holder.style.opacity = Math.min(1, 6 * ncka);
      if (!is_mobile) {
        /** @type {number} */
        smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - .05)));
      }
      if (.01 <= ncka) {
        /** @type {number} */
        playh.style.opacity = Math.min(1, 5 * (ncka - .01));
      }
    }
    lctx.clearRect(0, 0, lw, lh);
    /** @type {number} */
    i = 0;
    for (; i < lts.length; i++) {
      var opts = lts[i];
      var world = opts.pts;
      var h = opts.kc;
      var host = opts.ws;
      var port = opts.wr;
      var btnCancelClick = opts.qm;
      var x = opts.sp;
      var foodSize = opts.sz;
      var callbacks = opts.r;
      var s = opts.mwig;
      if (e) {
        /** @type {boolean} */
        opts.wch = true;
        /** @type {number} */
        s = 1E-7;
      }
      if (opts.wch && 0 != s) {
        /** @type {number} */
        s = s * .982;
        /** @type {number} */
        s = s - .001 * nMinPercentage;
        if (1 == render_mode) {
          /** @type {number} */
          s = s - .005 * nMinPercentage;
        }
        if (0 >= s) {
          /** @type {number} */
          s = 0;
        }
        opts.mwig = s;
      }
      if (!callbacks) {
        /** @type {number} */
        callbacks = 1;
      }
      lctx.beginPath();
      if (9 > i) {
        var value = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc);
        value.addColorStop(0, "#80FFA0");
        value.addColorStop(1, "#008040");
      } else {
        value = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc);
        value.addColorStop(0, "#9850FF");
        value.addColorStop(1, "#281060");
      }
      lctx.fillStyle = value;
      /** @type {boolean} */
      var C = false;
      /** @type {number} */
      var width = 0;
      value = world[0];
      var x1 = world[1];
      var r = value;
      var y1 = x1;
      /** @type {number} */
      var theta = lgfr * x;
      /** @type {number} */
      j = 2;
      for (; j < world.length; j = j + 4) {
        x = value;
        var start = x1;
        cx2 = world[j];
        cy2 = world[j + 1];
        value = world[j + 2];
        x1 = world[j + 3];
        /** @type {number} */
        var v = 1;
        for (; v <= h; v++) {
          width++;
          /** @type {number} */
          var ratio = v / h;
          var y = x + (cx2 - x) * ratio;
          var t = start + (cy2 - start) * ratio;
          var height = cx2 + (value - cx2) * ratio;
          var rx = cy2 + (x1 - cy2) * ratio;
          y = y + (height - y) * ratio;
          t = t + (rx - t) * ratio;
          /** @type {number} */
          r = Math.atan2(t - y1, y - r);
          if (C) {
            if (r - b > Math.PI) {
              /** @type {number} */
              r = r - 2 * Math.PI;
            } else {
              if (r - b < -Math.PI) {
                /** @type {number} */
                r = r + 2 * Math.PI;
              }
            }
            /** @type {number} */
            b = b + .05 * (r - b);
            /** @type {number} */
            b = b % (2 * Math.PI);
          } else {
            /** @type {boolean} */
            C = true;
            /** @type {number} */
            var b = r;
          }
          r = y;
          y1 = t;
          y = y + Math.cos(Math.PI / 2 + b) * Math.sin(theta) * host * s;
          t = t + Math.sin(Math.PI / 2 + b) * Math.sin(theta) * host * s;
          /** @type {number} */
          theta = theta - .76 * btnCancelClick * host;
          host = host + port;
          lctx.beginPath();
          /** @type {number} */
          rx = 1.15 * foodSize * Math.min(1, lgsc * (.2 + .8 * lga) * (30 * lgss * callbacks - width / 20 - i / 2));
          if (.5 < rx) {
            lctx.arc(y * lgsc, t * lgsc, rx, 0, pi2);
            /** @type {boolean} */
            opts.wch = true;
          }
          lctx.fill();
        }
      }
    }
    lctx2.clearRect(0, 0, lw, lh);
    /** @type {string} */
    lctx2.shadowColor = "#000000";
    /** @type {number} */
    lctx2.shadowBlur = 16;
    /** @type {number} */
    lctx2.shadowOffsetY = 7;
    lctx2.drawImage(lmc, 0, 0);
  }
}
/** @type {number} */
var showlogo_iv = -1;
if (is_safari || is_mobile) {
  /** @type {number} */
  ncka = lgss = lga = 1;
  showLogo(true);
} else {
  /** @type {number} */
  showlogo_iv = setInterval(function() {
    showLogo(false);
  }, 25);
}
/**
 * @param {!Object} e
 * @return {undefined}
 */
document.onkeydown = function(e) {
  e = e || window.event;
  var c = e.keyCode;
  if (37 == c) {
    /** @type {boolean} */
    kd_l = true;
  } else {
    if (39 == c) {
      /** @type {boolean} */
      kd_r = true;
    } else {
      if (38 == c || 32 == c) {
        /** @type {boolean} */
        kd_u = true;
        setAcceleration(1);
      } else {
        if (48 <= c && 57 >= c) {
          if (entering_code) {
            enterCodeDigit(c - 48);
          }
        } else {
          if (8 == c) {
            if (entering_code) {
              deleteLastCodeDigit();
            }
          } else {
            if (13 == c || 10 == c) {
              if (want_victory_message) {
                if (0 < victory.value.length) {
                  save_btn.elem.onclick();
                }
              } else {
                if (!connecting && !connected) {
                  play_btn.elem.onclick();
                }
              }
            } else {
              if (16 == c && testing) {
                /** @type {boolean} */
                shifty = true;
                if (snake) {
                  snake.accessory++;
                  if (snake.accessory >= a_ct) {
                    /** @type {number} */
                    snake.accessory = 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (testing) {
    console.log("keydown: " + e.keyCode);
  }
};
/**
 * @param {string} e
 * @return {undefined}
 */
document.onkeyup = function(e) {
  e = e || window.event;
  e = e.keyCode;
  if (37 == e) {
    /** @type {boolean} */
    kd_l = false;
  } else {
    if (39 == e) {
      /** @type {boolean} */
      kd_r = false;
    } else {
      if (38 == e || 32 == e) {
        /** @type {boolean} */
        kd_u = false;
        setAcceleration(0);
      } else {
        if (16 == e && testing) {
          /** @type {boolean} */
          shifty = false;
        }
      }
    }
  }
};
/**
 * @param {string} value
 * @return {undefined}
 */
function loadSos(value) {
  if (!forcing && 0 < value.length) {
    /** @type {!Array} */
    sos = [];
    /** @type {!Array} */
    clus = [];
    value.charAt(0);
    /** @type {number} */
    var j = 1;
    var item = {};
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    item = i = 0;
    var t;
    /** @type {number} */
    var target = 0;
    /** @type {number} */
    var ws = 0;
    /** @type {!Array} */
    var a = [];
    /** @type {!Array} */
    var s = [];
    /** @type {!Array} */
    var tokens = [];
    /** @type {!Array} */
    var children = [];
    for (; j < value.length;) {
      if (t = (value.charCodeAt(j++) - 97 - ws) % 26, 0 > t && (t = t + 26), target = target * 16, target = target + t, ws = ws + 7, 1 == item) {
        if (0 == i) {
          a.push(target);
          if (4 == a.length) {
            i++;
          }
        } else {
          if (1 == i) {
            s.push(target);
            if (3 == s.length) {
              i++;
            }
          } else {
            if (2 == i) {
              tokens.push(target);
              if (3 == tokens.length) {
                i++;
              }
            } else {
              if (3 == i && (children.push(target), 1 == children.length)) {
                item = {};
                /** @type {number} */
                i = t = 0;
                for (; i < s.length; i++) {
                  /** @type {number} */
                  t = t * 256;
                  t = t + s[i];
                }
                /** @type {number} */
                i = s = 0;
                for (; i < tokens.length; i++) {
                  /** @type {number} */
                  s = s * 256;
                  s = s + tokens[i];
                }
                /** @type {string} */
                item.ip = a.join(".");
                item.po = t;
                item.ac = s;
                item.wg = s + 5;
                item.clu = children[0];
                if (clus[item.clu]) {
                  a = clus[item.clu];
                } else {
                  a = {};
                  clus[item.clu] = a;
                  /** @type {!Array} */
                  a.sis = [];
                  /** @type {!Array} */
                  a.ptms = [];
                  /** @type {number} */
                  a.swg = 0;
                  /** @type {number} */
                  a.tac = 0;
                  /** @type {!Array} */
                  a.sos = [];
                }
                /** @type {!Array} */
                item.cluo = a;
                a.swg += item.wg;
                a.sos.push(item);
                a.tac += s;
                sos.push(item);
                /** @type {!Array} */
                a = [];
                /** @type {!Array} */
                s = [];
                /** @type {!Array} */
                tokens = [];
                /** @type {!Array} */
                children = [];
                /** @type {number} */
                i = 0;
              }
            }
          }
        }
        /** @type {number} */
        item = target = 0;
      } else {
        item++;
      }
    }
    /** @type {number} */
    j = sos.length - 1;
    for (; 0 <= j; j--) {
      if (item = 1, a = sos[j].cluo) {
        /** @type {number} */
        i = a.sis.length - 1;
        for (; 0 <= i; i--) {
          if (a.sis[i].ip == sos[j].ip) {
            /** @type {number} */
            item = 0;
            break;
          }
        }
        if (1 == item) {
          a.sis.push({
            ip : sos[j].ip
          });
        }
      }
    }
    /** @type {number} */
    j = clus.length - 1;
    for (; 0 <= j; j--) {
      if ((a = clus[j]) && 0 < a.sis.length) {
        /** @type {number} */
        i = Math.floor(Math.random() * a.sis.length);
        value = a.sis[i].ip;
        /** @type {null} */
        ws = null;
        try {
          /** @type {!WebSocket} */
          ws = new WebSocket("ws://" + value + ":80/ptc");
        } catch (K) {
          /** @type {null} */
          ws = null;
        }
        if (ws) {
          /** @type {string} */
          ws.binaryType = "arraybuffer";
          /**
           * @param {?} event
           * @return {undefined}
           */
          ws.onerror = function(event) {
          };
          /**
           * @param {number} a
           * @return {undefined}
           */
          ws.onmessage = function(a) {
            /** @type {!Uint8Array} */
            a = new Uint8Array(a.data);
            if (1 == a.length && 112 == a[0]) {
              /** @type {number} */
              a = clus.length - 1;
              for (; 0 <= a; a--) {
                var tx = clus[a];
                if (tx && tx.ps == this) {
                  /** @type {number} */
                  var e = Date.now() - tx.stm;
                  if (testing) {
                    console.log(" ping time for cluster " + a + ": " + e);
                  }
                  tx.ptms.push(e);
                  if (4 > tx.ptms.length) {
                    /** @type {number} */
                    tx.stm = Date.now();
                    /** @type {!Uint8Array} */
                    a = new Uint8Array(1);
                    /** @type {number} */
                    a[0] = 112;
                    this.send(a);
                  } else {
                    if (waiting_for_sos && -1 == sos_ready_after_mtm) {
                      /** @type {number} */
                      sos_ready_after_mtm = Date.now() + 2E3;
                    }
                    this.close();
                    /** @type {null} */
                    tx.ps = null;
                  }
                  break;
                }
              }
            }
          };
          /**
           * @param {!Object} s
           * @return {undefined}
           */
          ws.onopen = function(s) {
            /** @type {boolean} */
            s = false;
            /** @type {number} */
            var self_name = clus.length - 1;
            for (; 0 <= self_name; self_name--) {
              var self = clus[self_name];
              if (self && self.ps == this) {
                /** @type {number} */
                self.stm = Date.now();
                /** @type {!Uint8Array} */
                s = new Uint8Array(1);
                /** @type {number} */
                s[0] = 112;
                this.send(s);
                /** @type {boolean} */
                s = true;
                break;
              }
            }
            if (!s) {
              this.close();
            }
          };
          /** @type {!WebSocket} */
          a.ps = ws;
        }
      }
    }
  }
}
/**
 * @return {undefined}
 */
function adjustCodeSpinner() {
  /** @type {number} */
  var b = hh / 1500;
  if (1 < b) {
    /** @type {number} */
    b = 1;
  }
  trf(etco_sp_ii, "scale(" + b + "," + b + ") rotate(" + Math.round(36E3 * etcsrv / 12) / 100 + "deg)");
}
/**
 * @return {undefined}
 */
function reposGraphicsQuality() {
  /** @type {string} */
  grqh.style.top = hacos || bonkz ? "160px" : "16px";
}
/**
 * @return {undefined}
 */
function reposEnterCode() {
  /** @type {number} */
  var multiplier = hh / 1500;
  if (1 < multiplier) {
    /** @type {number} */
    multiplier = 1;
  }
  /** @type {string} */
  etcod.style.width = Math.ceil(ww) + "px";
  /** @type {string} */
  etcod.style.height = Math.ceil(hh) + "px";
  /** @type {number} */
  var offset = Math.round(Math.max(42, .2 * (hh - 222)));
  /** @type {number} */
  var val = Math.round(Math.max(60, .5 * offset + .5 * (hh / 2 + 100 * multiplier - 67.5 + -155 * multiplier) - 33));
  /** @type {number} */
  var h = Math.round(.45 * val + .55 * (hh / 2 + 100 * multiplier - 67.5 + -155 * multiplier) - 33);
  /** @type {string} */
  etcot.style.left = Math.round(ww / 2 - 400) + "px";
  /** @type {string} */
  etcot.style.top = offset + "px";
  /** @type {string} */
  etcc.style.left = Math.round(ww / 2 - etc_ww / 2) + "px";
  /** @type {string} */
  etcc.style.top = val + "px";
  /** @type {string} */
  etco_sp_ii.style.left = Math.round(ww / 2 - 50) + "px";
  /** @type {string} */
  etco_sp_ii.style.top = h + "px";
  adjustCodeSpinner();
  /** @type {number} */
  offset = etcobs.length - 1;
  for (; 0 <= offset; offset--) {
    val = etcobs[offset];
    /** @type {number} */
    var w = h = 0;
    /** @type {number} */
    var m = multiplier;
    if (0 == offset) {
      /** @type {number} */
      h = 0;
      /** @type {number} */
      w = 2;
    } else {
      if (1 == offset) {
        /** @type {number} */
        w = h = -1;
      } else {
        if (2 == offset) {
          /** @type {number} */
          h = 0;
          /** @type {number} */
          w = -1;
        } else {
          if (3 == offset) {
            /** @type {number} */
            h = 1;
            /** @type {number} */
            w = -1;
          } else {
            if (4 == offset) {
              /** @type {number} */
              h = -1;
              /** @type {number} */
              w = 0;
            } else {
              if (5 == offset) {
                /** @type {number} */
                w = h = 0;
              } else {
                if (6 == offset) {
                  /** @type {number} */
                  h = 1;
                  /** @type {number} */
                  w = 0;
                } else {
                  if (7 == offset) {
                    /** @type {number} */
                    h = -1;
                    /** @type {number} */
                    w = 1;
                  } else {
                    if (8 == offset) {
                      /** @type {number} */
                      h = 0;
                      /** @type {number} */
                      w = 1;
                    } else {
                      if (9 == offset) {
                        /** @type {number} */
                        w = h = 1;
                      } else {
                        if (10 == offset) {
                          /** @type {number} */
                          h = 1;
                          /** @type {number} */
                          w = 2;
                          /** @type {number} */
                          m = m * .75;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    /** @type {string} */
    val.ii.style.left = Math.round(ww / 2 - 67.5 + h * multiplier * 155) + "px";
    /** @type {string} */
    val.ii.style.top = Math.round(hh / 2 + 100 * multiplier - 67.5 + w * multiplier * 155) + "px";
    trf(val.ii, "scale(" + m + "," + m + ")");
  }
  /** @type {number} */
  multiplier = hh / 750;
  if (1 < multiplier) {
    /** @type {number} */
    multiplier = 1;
  }
  trf(etcc, "scale(" + multiplier + "," + multiplier + ")");
  /** @type {string} */
  etcocdiv.style.left = Math.round(ww / 2 - etcocdiv.offsetWidth / 2) + "px";
  /** @type {string} */
  etcocdiv.style.bottom = Math.round(64 * multiplier) + "px";
}
/** @type {boolean} */
var buildia_shown = false;
/** @type {!Element} */
var build_v = document.createElement("video");
/** @type {number} */
var bv_width = 1095;
/** @type {number} */
var bv_height = 616;
/** @type {number} */
var buildia_close_after_tm = -1;
/**
 * @return {undefined}
 */
function reposBuildia() {
  if (build_v) {
    /** @type {number} */
    var remainingHeight = Math.min(ww / bv_width, hh / bv_height);
    /** @type {number} */
    var nw = Math.ceil(bv_width * remainingHeight);
    /** @type {number} */
    remainingHeight = Math.ceil(bv_height * remainingHeight);
    /** @type {string} */
    build_v.style.width = nw + "px";
    /** @type {string} */
    build_v.style.height = remainingHeight + "px";
    /** @type {string} */
    build_v.style.left = Math.floor(ww / 2 - nw / 2) + "px";
    /** @type {string} */
    build_v.style.top = Math.floor(hh / 2 - remainingHeight / 2) + "px";
  }
}
/**
 * @return {undefined}
 */
function trySkipBuildia() {
  if (buildia_shown && window.ut_csk) {
    /** @type {boolean} */
    shoa = buildia_shown = false;
    ut_d.removeChild(build_v);
    document.body.removeChild(ut_d);
    document.body.removeChild(ut_sk);
    clearInterval(ut_cd_iv);
    /** @type {null} */
    build_v = null;
  }
}
/**
 * @return {undefined}
 */
window.buildia = function() {
  /** @type {boolean} */
  buildia_shown = true;
  /** @type {number} */
  window.ut_ldt = Date.now();
  /** @type {!Element} */
  var el = document.createElement("div");
  /** @type {number} */
  el.style.zIndex = 2147483632;
  /** @type {string} */
  el.style.width = "100%";
  /** @type {string} */
  el.style.height = "100%";
  /** @type {string} */
  el.style.textAlign = "center";
  /** @type {string} */
  el.style.background = "rgba(0, 0, 0, .85)";
  /** @type {string} */
  el.style.margin = "0px";
  /** @type {string} */
  el.style.overflow = "hidden";
  /** @type {string} */
  el.style.position = "fixed";
  /** @type {number} */
  el.style.opacity = 1;
  /** @type {!Element} */
  window.ut_d = el;
  document.body.appendChild(el);
  var video = build_v;
  video.width = bv_width;
  video.height = bv_height;
  /** @type {string} */
  video.style.position = "absolute";
  el.appendChild(video);
  /** @type {number} */
  video.currentTime = 4;
  video.play();
  /** @type {number} */
  buildia_close_after_tm = Date.now() + 11E3;
  reposBuildia();
  /** @type {!Element} */
  el = document.createElement("div");
  /** @type {!Element} */
  window.ut_sk = el;
  /** @type {string} */
  el.style.width = "115px";
  /** @type {string} */
  el.style.height = "20px";
  /** @type {string} */
  el.style.background = "rgba(0, 0, 0, 1)";
  /** @type {string} */
  el.style.border = "1px solid rgba(255, 255, 255, .5)";
  /** @type {string} */
  el.style.fontFamily = "Verdana";
  /** @type {string} */
  el.style.color = "#ffffff";
  /** @type {string} */
  el.style.position = "fixed";
  /** @type {string} */
  el.style.right = "10px";
  /** @type {string} */
  el.style.bottom = "10px";
  /** @type {string} */
  el.textContent = "Skip Ad " + String.fromCharCode(9654);
  /** @type {string} */
  el.style.cursor = "pointer";
  /** @type {string} */
  el.style.textAlign = "center";
  /** @type {string} */
  el.style.padding = "8px";
  /** @type {string} */
  el.style.fontSize = "16px";
  /** @type {string} */
  el.style.borderRadius = "4px";
  /** @type {number} */
  el.style.opacity = .75;
  /** @type {string} */
  el.className = "nsi";
  /** @type {number} */
  el.style.zIndex = 2147483633;
  /**
   * @return {undefined}
   */
  el.onmouseenter = function() {
    /** @type {number} */
    ut_sk.style.opacity = 1;
  };
  /**
   * @return {undefined}
   */
  el.onmouseleave = function() {
    /** @type {number} */
    ut_sk.style.opacity = .75;
  };
  /**
   * @return {undefined}
   */
  el.onclick = function() {
    trySkipBuildia();
  };
  document.body.appendChild(el);
  /**
   * @return {undefined}
   */
  window.ut_skf = function() {
    Date.now();
    /** @type {number} */
    var x = -1;
    if ("1" == window.ut_dpr) {
      /** @type {number} */
      x = 0;
    }
    if (0 >= x) {
      /** @type {string} */
      ut_sk.textContent = "Skip Ad " + String.fromCharCode(9654);
      /** @type {boolean} */
      window.ut_csk = true;
    } else {
      /** @type {number} */
      x = Math.ceil(5 * Math.pow(x / 5E3, 1));
      /** @type {string} */
      ut_sk.textContent = "Skip in " + x;
    }
  };
  /** @type {number} */
  window.ut_cd_iv = setInterval("ut_skf()", 250);
  ut_skf();
};
/** @type {number} */
var fifth_iv = -1;
/**
 * @return {undefined}
 */
window.fifthia = function() {
  /** @type {number} */
  window.ut_ldt = Date.now();
  /** @type {!Element} */
  var el = document.createElement("div");
  /** @type {number} */
  el.style.zIndex = 2147483632;
  /** @type {string} */
  el.style.width = "100%";
  /** @type {string} */
  el.style.height = "100%";
  /** @type {string} */
  el.style.textAlign = "center";
  /** @type {string} */
  el.style.background = "rgba(0, 0, 0, .85)";
  /** @type {string} */
  el.style.margin = "0px";
  /** @type {string} */
  el.style.overflow = "hidden";
  /** @type {string} */
  el.style.position = "fixed";
  /** @type {!Element} */
  window.ut_d = el;
  document.body.appendChild(el);
  /** @type {!Element} */
  var node = document.createElement("div");
  /** @type {string} */
  node.style.background = 'url("/s/fifthsun3.jpg")';
  /** @type {string} */
  node.style.width = "1100px";
  /** @type {string} */
  node.style.height = "800px";
  /** @type {string} */
  node.style.marginTop = "30px";
  /** @type {string} */
  node.style.marginLeft = node.style.marginRight = "auto";
  /** @type {string} */
  node.style.position = "relative";
  /** @type {string} */
  node.style.border = "3px solid #CCDDFF";
  /** @type {!Element} */
  window.ut_v = node;
  el.appendChild(node);
  /** @type {!Element} */
  el = document.createElement("div");
  /** @type {string} */
  el.style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
  /** @type {string} */
  el.style.position = "absolute";
  /** @type {string} */
  el.style.left = "320px";
  /** @type {string} */
  el.style.top = "126px";
  /** @type {string} */
  el.style.width = "150px";
  /** @type {string} */
  el.style.padding = "18px";
  /** @type {string} */
  el.style.textAlign = "center";
  /** @type {string} */
  el.style.color = "#000000";
  /** @type {string} */
  el.style.fontWeight = "bold";
  /** @type {string} */
  el.style.textAlign = "center";
  /** @type {string} */
  el.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
  /** @type {string} */
  el.style.fontSize = "23px";
  /** @type {string} */
  el.style.cursor = "pointer";
  /** @type {string} */
  el.textContent = "Shop Now";
  /** @type {string} */
  el.className = "nsi shbtn";
  /** @type {!Element} */
  var a = document.createElement("a");
  /** @type {string} */
  a.className = "btnt";
  /** @type {boolean} */
  a.draggable = false;
  /** @type {string} */
  a.href = "https://www.fifthsun.com/brands/video-games/slither-io";
  /** @type {string} */
  a.target = "_blank";
  a.appendChild(el);
  node.appendChild(a);
  /** @type {!Element} */
  window.ut_sn = el;
  /** @type {!Element} */
  node = document.createElement("div");
  /** @type {!Element} */
  window.ut_sk = node;
  /** @type {string} */
  node.style.width = "115px";
  /** @type {string} */
  node.style.height = "20px";
  /** @type {string} */
  node.style.background = "rgba(0, 0, 0, 1)";
  /** @type {string} */
  node.style.border = "1px solid rgba(255, 255, 255, .5)";
  /** @type {string} */
  node.style.fontFamily = "Verdana";
  /** @type {string} */
  node.style.color = "#ffffff";
  /** @type {string} */
  node.style.position = "fixed";
  /** @type {string} */
  node.style.right = "10px";
  /** @type {string} */
  node.style.bottom = "10px";
  /** @type {string} */
  node.textContent = "Skip Ad " + String.fromCharCode(9654);
  /** @type {string} */
  node.style.cursor = "pointer";
  /** @type {string} */
  node.style.textAlign = "center";
  /** @type {string} */
  node.style.padding = "8px";
  /** @type {string} */
  node.style.fontSize = "16px";
  /** @type {string} */
  node.style.borderRadius = "4px";
  /** @type {number} */
  node.style.opacity = .75;
  /** @type {string} */
  node.className = "nsi";
  /** @type {number} */
  node.style.zIndex = 2147483633;
  /**
   * @return {undefined}
   */
  node.onclick = function() {
    if (window.ut_csk) {
      /** @type {boolean} */
      shoa = false;
      ut_d.removeChild(ut_v);
      document.body.removeChild(ut_d);
      document.body.removeChild(ut_sk);
      clearInterval(ut_cd_iv);
    }
  };
  /**
   * @return {undefined}
   */
  node.onmouseenter = function() {
    /** @type {number} */
    ut_sk.style.opacity = 1;
  };
  /**
   * @return {undefined}
   */
  node.onmouseleave = function() {
    /** @type {number} */
    ut_sk.style.opacity = .75;
  };
  document.body.appendChild(node);
  /**
   * @return {undefined}
   */
  window.ut_skf = function() {
    Date.now();
    /** @type {number} */
    var x = -1;
    if ("1" == window.ut_dpr) {
      /** @type {number} */
      x = 0;
    }
    if (0 >= x) {
      /** @type {string} */
      ut_sk.textContent = "Skip Ad " + String.fromCharCode(160, 9654);
      /** @type {boolean} */
      window.ut_csk = true;
    } else {
      /** @type {number} */
      x = Math.ceil(5 * Math.pow(x / 5E3, 1));
      /** @type {string} */
      ut_sk.textContent = "Skip in " + x;
    }
  };
  /** @type {number} */
  window.ut_cd_iv = setInterval("ut_skf()", 250);
  ut_skf();
};
/** @type {boolean} */
var partycity_shown = false;
/** @type {number} */
var pcy_width = 1132;
/** @type {number} */
var pcy_height = 832;
/** @type {number} */
var partycity_iv = -1;
/**
 * @return {undefined}
 */
window.partycityia = function() {
  /** @type {number} */
  window.ut_ldt = Date.now();
  /** @type {!Element} */
  var el = document.createElement("div");
  /** @type {number} */
  el.style.zIndex = 2147483632;
  /** @type {string} */
  el.style.width = "100%";
  /** @type {string} */
  el.style.height = "100%";
  /** @type {string} */
  el.style.textAlign = "center";
  /** @type {string} */
  el.style.background = "rgba(0, 0, 0, .85)";
  /** @type {string} */
  el.style.margin = "0px";
  /** @type {string} */
  el.style.overflow = "hidden";
  /** @type {string} */
  el.style.position = "fixed";
  /** @type {!Element} */
  window.ut_d = el;
  document.body.appendChild(el);
  /** @type {!Element} */
  var node = document.createElement("div");
  /** @type {string} */
  node.style.background = 'url("/s/partycity2.jpg")';
  /** @type {string} */
  node.style.width = "1100px";
  /** @type {string} */
  node.style.height = "800px";
  /** @type {string} */
  node.style.position = "absolute";
  /** @type {string} */
  node.style.border = "3px solid #CCDDFF";
  /** @type {string} */
  node.style.borderRadius = "42px";
  /** @type {!Element} */
  window.ut_v = node;
  el.appendChild(node);
  /** @type {!Element} */
  el = document.createElement("div");
  /** @type {string} */
  el.style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
  /** @type {string} */
  el.style.position = "absolute";
  /** @type {string} */
  el.style.left = "410px";
  /** @type {string} */
  el.style.top = "707px";
  /** @type {string} */
  el.style.width = "244px";
  /** @type {string} */
  el.style.padding = "18px";
  /** @type {string} */
  el.style.textAlign = "center";
  /** @type {string} */
  el.style.color = "#000000";
  /** @type {string} */
  el.style.fontWeight = "bold";
  /** @type {string} */
  el.style.textAlign = "center";
  /** @type {string} */
  el.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
  /** @type {string} */
  el.style.fontSize = "36px";
  /** @type {string} */
  el.style.cursor = "pointer";
  /** @type {string} */
  el.style.borderRadius = "12px";
  /** @type {string} */
  el.textContent = "Shop Now";
  /** @type {string} */
  el.className = "nsi shbtn";
  /** @type {!Element} */
  var a = document.createElement("a");
  /** @type {string} */
  a.className = "btnt";
  /** @type {boolean} */
  a.draggable = false;
  /** @type {string} */
  a.href = testing ? "https://www.zombo.com/" : "https://www.partycity.com/slither-party-supplies?extcmp=dsp|banner|slither.io|slitherpartysupplies";
  /** @type {string} */
  a.target = "_blank";
  a.appendChild(el);
  node.appendChild(a);
  /** @type {!Element} */
  window.ut_sn = el;
  /** @type {!Element} */
  node = document.createElement("div");
  /** @type {!Element} */
  window.ut_sk = node;
  /** @type {string} */
  node.style.width = "115px";
  /** @type {string} */
  node.style.height = "20px";
  /** @type {string} */
  node.style.background = "rgba(0, 0, 0, 1)";
  /** @type {string} */
  node.style.border = "1px solid rgba(255, 255, 255, .5)";
  /** @type {string} */
  node.style.fontFamily = "Verdana";
  /** @type {string} */
  node.style.color = "#ffffff";
  /** @type {string} */
  node.style.position = "fixed";
  /** @type {string} */
  node.style.right = "10px";
  /** @type {string} */
  node.style.bottom = "10px";
  /** @type {string} */
  node.textContent = "Skip Ad " + String.fromCharCode(9654);
  /** @type {string} */
  node.style.cursor = "pointer";
  /** @type {string} */
  node.style.textAlign = "center";
  /** @type {string} */
  node.style.padding = "8px";
  /** @type {string} */
  node.style.fontSize = "16px";
  /** @type {string} */
  node.style.borderRadius = "4px";
  /** @type {number} */
  node.style.opacity = .75;
  /** @type {string} */
  node.className = "nsi";
  /** @type {number} */
  node.style.zIndex = 2147483633;
  /**
   * @return {undefined}
   */
  node.onclick = function() {
    if (window.ut_csk) {
      /** @type {boolean} */
      shoa = false;
      ut_d.removeChild(ut_v);
      document.body.removeChild(ut_d);
      document.body.removeChild(ut_sk);
      clearInterval(ut_cd_iv);
      /** @type {boolean} */
      partycity_shown = false;
    }
  };
  /**
   * @return {undefined}
   */
  node.onmouseenter = function() {
    /** @type {number} */
    ut_sk.style.opacity = 1;
  };
  /**
   * @return {undefined}
   */
  node.onmouseleave = function() {
    /** @type {number} */
    ut_sk.style.opacity = .75;
  };
  document.body.appendChild(node);
  /**
   * @return {undefined}
   */
  window.ut_skf = function() {
    Date.now();
    /** @type {number} */
    var x = -1;
    if ("1" == window.ut_dpr) {
      /** @type {number} */
      x = 0;
    }
    if (0 >= x) {
      /** @type {string} */
      ut_sk.textContent = "Skip Ad " + String.fromCharCode(160, 9654);
      /** @type {boolean} */
      window.ut_csk = true;
    } else {
      /** @type {number} */
      x = Math.ceil(5 * Math.pow(x / 5E3, 1));
      /** @type {string} */
      ut_sk.textContent = "Skip in " + x;
    }
  };
  /** @type {number} */
  window.ut_cd_iv = setInterval("ut_skf()", 250);
  ut_skf();
  /** @type {boolean} */
  partycity_shown = true;
  reposPartyCity();
};
/**
 * @return {undefined}
 */
function reposPartyCity() {
  if (partycity_shown) {
    /** @type {number} */
    var maxPeaks = Math.min(ww / pcy_width, hh / pcy_height);
    if (1 < maxPeaks) {
      /** @type {number} */
      maxPeaks = 1;
    }
    /** @type {number} */
    var selectWidth = Math.ceil(pcy_width * maxPeaks);
    /** @type {number} */
    var e = Math.ceil(pcy_height * maxPeaks);
    trf(ut_v, "scale(" + maxPeaks + "," + maxPeaks + ")");
    trfo(ut_v, "0% 0%");
    /** @type {string} */
    ut_v.style.left = Math.floor(ww / 2 - selectWidth / 2) + "px";
    /** @type {string} */
    ut_v.style.top = Math.floor(hh / 2 - e / 2) + "px";
  }
}
/** @type {null} */
var mba = null;
/** @type {null} */
var mbi = null;
if (is_ios || is_android) {
  /** @type {!Element} */
  mba = document.createElement("a");
  /** @type {!Element} */
  mbi = document.createElement("img");
  /** @type {number} */
  mbi.border = 0;
  /** @type {boolean} */
  mbi.draggable = false;
  /** @type {string} */
  mbi.className = "nsi";
  /** @type {number} */
  mbi.width = 1245;
  /** @type {number} */
  mbi.height = 260;
  /** @type {string} */
  mbi.style.position = "fixed";
  /** @type {string} */
  mbi.style.left = "0px";
  /** @type {string} */
  mbi.style.bottom = "0px";
  /** @type {number} */
  mbi.style.zIndex = 70;
  /** @type {string} */
  mbi.src = "/s/n2.jpg";
  mba.appendChild(mbi);
  document.body.appendChild(mba);
  if (is_ios) {
    /** @type {string} */
    mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8";
  } else {
    if (is_android) {
      /** @type {string} */
      mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" : "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither";
    }
  }
}
resize();
recalculateActivatedCosmetics();
o = {
  f : function(name, status, count) {
    if ("success" == status) {
      loadSos(name);
    }
  }
};
getData("/i33628.txt", o);
