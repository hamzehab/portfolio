import { u as Qt, Q as Ot, a as rt } from "./uid.49347e9d.js";
import {
  u as St,
  a as Tt,
  b as Wt,
  c as Ct,
  _ as Ut,
  Q as ut,
  d as Kt,
} from "./FooterComponent.ed0c5b74.js";
import {
  c as Gt,
  a as X,
  n as It,
  l as Jt,
  b as Le,
  p as je,
  d as ct,
  s as be,
  e as He,
  r as x,
  f as b,
  w as G,
  g as ce,
  h as y,
  T as De,
  i as Xt,
  j as me,
  k as Ze,
  K as Yt,
  m as Z,
  v as Zt,
  o as ea,
  q as oe,
  t as Y,
  H as Fe,
  u as Pt,
  x as ta,
  Q as Ne,
  y as tt,
  z as ae,
  A as aa,
  B as na,
  C as ia,
  D as oa,
  E as Qe,
  F as At,
  G as la,
  R as sa,
  I as ra,
  J as ua,
  L as Ce,
  M as ca,
  N as da,
  O as va,
  P as fa,
  S as ma,
  U as ha,
  V as ne,
  W as ie,
  X as d,
  Y as w,
  Z as fe,
  _ as J,
  $ as C,
  a0 as N,
  a1 as Ee,
  a2 as Oe,
  a3 as ye,
  a4 as ge,
} from "./index.002bdaab.js";
import {
  c as ga,
  g as ba,
  a as ya,
  h as pa,
  u as wa,
  b as xa,
  d as _a,
  e as et,
  f as Me,
  i as qa,
  j as ka,
  k as Sa,
  r as dt,
  l as vt,
  m as Ta,
  n as Ca,
  Q as Ia,
  o as We,
} from "./QList.87e652c4.js";
const at = {
    left: !0,
    right: !0,
    up: !0,
    down: !0,
    horizontal: !0,
    vertical: !0,
  },
  Pa = Object.keys(at);
at.all = !0;
function ft(e) {
  const t = {};
  for (const o of Pa) e[o] === !0 && (t[o] = !0);
  return Object.keys(t).length === 0
    ? at
    : (t.horizontal === !0
        ? (t.left = t.right = !0)
        : t.left === !0 && t.right === !0 && (t.horizontal = !0),
      t.vertical === !0
        ? (t.up = t.down = !0)
        : t.up === !0 && t.down === !0 && (t.vertical = !0),
      t.horizontal === !0 && t.vertical === !0 && (t.all = !0),
      t);
}
const Aa = ["INPUT", "TEXTAREA"];
function mt(e, t) {
  return (
    t.event === void 0 &&
    e.target !== void 0 &&
    e.target.draggable !== !0 &&
    typeof t.handler == "function" &&
    Aa.includes(e.target.nodeName.toUpperCase()) === !1 &&
    (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1)
  );
}
function La(e) {
  const t = [0.06, 6, 50];
  return (
    typeof e == "string" &&
      e.length &&
      e.split(":").forEach((o, i) => {
        const n = parseFloat(o);
        n && (t[i] = n);
      }),
    t
  );
}
var Ba = Gt({
  name: "touch-swipe",
  beforeMount(e, { value: t, arg: o, modifiers: i }) {
    if (i.mouse !== !0 && X.has.touch !== !0) return;
    const n = i.mouseCapture === !0 ? "Capture" : "",
      a = {
        handler: t,
        sensitivity: La(o),
        direction: ft(i),
        noop: It,
        mouseStart(l) {
          mt(l, a) &&
            Jt(l) &&
            (Le(a, "temp", [
              [document, "mousemove", "move", `notPassive${n}`],
              [document, "mouseup", "end", "notPassiveCapture"],
            ]),
            a.start(l, !0));
        },
        touchStart(l) {
          if (mt(l, a)) {
            const u = l.target;
            Le(a, "temp", [
              [u, "touchmove", "move", "notPassiveCapture"],
              [u, "touchcancel", "end", "notPassiveCapture"],
              [u, "touchend", "end", "notPassiveCapture"],
            ]),
              a.start(l);
          }
        },
        start(l, u) {
          X.is.firefox === !0 && je(e, !0);
          const c = ct(l);
          a.event = {
            x: c.left,
            y: c.top,
            time: Date.now(),
            mouse: u === !0,
            dir: !1,
          };
        },
        move(l) {
          if (a.event === void 0) return;
          if (a.event.dir !== !1) {
            be(l);
            return;
          }
          const u = Date.now() - a.event.time;
          if (u === 0) return;
          const c = ct(l),
            s = c.left - a.event.x,
            v = Math.abs(s),
            P = c.top - a.event.y,
            q = Math.abs(P);
          if (a.event.mouse !== !0) {
            if (v < a.sensitivity[1] && q < a.sensitivity[1]) {
              a.end(l);
              return;
            }
          } else if (window.getSelection().toString() !== "") {
            a.end(l);
            return;
          } else if (v < a.sensitivity[2] && q < a.sensitivity[2]) return;
          const k = v / u,
            $ = q / u;
          a.direction.vertical === !0 &&
            v < q &&
            v < 100 &&
            $ > a.sensitivity[0] &&
            (a.event.dir = P < 0 ? "up" : "down"),
            a.direction.horizontal === !0 &&
              v > q &&
              q < 100 &&
              k > a.sensitivity[0] &&
              (a.event.dir = s < 0 ? "left" : "right"),
            a.direction.up === !0 &&
              v < q &&
              P < 0 &&
              v < 100 &&
              $ > a.sensitivity[0] &&
              (a.event.dir = "up"),
            a.direction.down === !0 &&
              v < q &&
              P > 0 &&
              v < 100 &&
              $ > a.sensitivity[0] &&
              (a.event.dir = "down"),
            a.direction.left === !0 &&
              v > q &&
              s < 0 &&
              q < 100 &&
              k > a.sensitivity[0] &&
              (a.event.dir = "left"),
            a.direction.right === !0 &&
              v > q &&
              s > 0 &&
              q < 100 &&
              k > a.sensitivity[0] &&
              (a.event.dir = "right"),
            a.event.dir !== !1
              ? (be(l),
                a.event.mouse === !0 &&
                  (document.body.classList.add("no-pointer-events--children"),
                  document.body.classList.add("non-selectable"),
                  ga(),
                  (a.styleCleanup = (V) => {
                    (a.styleCleanup = void 0),
                      document.body.classList.remove("non-selectable");
                    const R = () => {
                      document.body.classList.remove(
                        "no-pointer-events--children"
                      );
                    };
                    V === !0 ? setTimeout(R, 50) : R();
                  })),
                a.handler({
                  evt: l,
                  touch: a.event.mouse !== !0,
                  mouse: a.event.mouse,
                  direction: a.event.dir,
                  duration: u,
                  distance: { x: v, y: q },
                }))
              : a.end(l);
        },
        end(l) {
          a.event !== void 0 &&
            (He(a, "temp"),
            X.is.firefox === !0 && je(e, !1),
            a.styleCleanup !== void 0 && a.styleCleanup(!0),
            l !== void 0 && a.event.dir !== !1 && be(l),
            (a.event = void 0));
        },
      };
    if (((e.__qtouchswipe = a), i.mouse === !0)) {
      const l = i.mouseCapture === !0 || i.mousecapture === !0 ? "Capture" : "";
      Le(a, "main", [[e, "mousedown", "mouseStart", `passive${l}`]]);
    }
    X.has.touch === !0 &&
      Le(a, "main", [
        [
          e,
          "touchstart",
          "touchStart",
          `passive${i.capture === !0 ? "Capture" : ""}`,
        ],
        [e, "touchmove", "noop", "notPassiveCapture"],
      ]);
  },
  updated(e, t) {
    const o = e.__qtouchswipe;
    o !== void 0 &&
      (t.oldValue !== t.value &&
        (typeof t.value != "function" && o.end(), (o.handler = t.value)),
      (o.direction = ft(t.modifiers)));
  },
  beforeUnmount(e) {
    const t = e.__qtouchswipe;
    t !== void 0 &&
      (He(t, "main"),
      He(t, "temp"),
      X.is.firefox === !0 && je(e, !1),
      t.styleCleanup !== void 0 && t.styleCleanup(),
      delete e.__qtouchswipe);
  },
});
function $a() {
  const e = new Map();
  return {
    getCache: function (t, o) {
      return e[t] === void 0 ? (e[t] = o) : e[t];
    },
    getCacheWithFn: function (t, o) {
      return e[t] === void 0 ? (e[t] = o()) : e[t];
    },
  };
}
const Lt = { name: { required: !0 }, disable: Boolean },
  ht = {
    setup(e, { slots: t }) {
      return () =>
        y("div", { class: "q-panel scroll", role: "tabpanel" }, me(t.default));
    },
  },
  Bt = {
    modelValue: { required: !0 },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    vertical: Boolean,
    transitionPrev: String,
    transitionNext: String,
    transitionDuration: { type: [String, Number], default: 300 },
    keepAlive: Boolean,
    keepAliveInclude: [String, Array, RegExp],
    keepAliveExclude: [String, Array, RegExp],
    keepAliveMax: Number,
  },
  $t = ["update:modelValue", "beforeTransition", "transition"];
function Et() {
  const { props: e, emit: t, proxy: o } = ce(),
    { getCacheWithFn: i } = $a();
  let n, a;
  const l = x(null),
    u = x(null);
  function c(m) {
    const T = e.vertical === !0 ? "up" : "left";
    I((o.$q.lang.rtl === !0 ? -1 : 1) * (m.direction === T ? 1 : -1));
  }
  const s = b(() => [
      [
        Ba,
        c,
        void 0,
        { horizontal: e.vertical !== !0, vertical: e.vertical, mouse: !0 },
      ],
    ]),
    v = b(
      () => e.transitionPrev || `slide-${e.vertical === !0 ? "down" : "right"}`
    ),
    P = b(
      () => e.transitionNext || `slide-${e.vertical === !0 ? "up" : "left"}`
    ),
    q = b(() => `--q-transition-duration: ${e.transitionDuration}ms`),
    k = b(() =>
      typeof e.modelValue == "string" || typeof e.modelValue == "number"
        ? e.modelValue
        : String(e.modelValue)
    ),
    $ = b(() => ({
      include: e.keepAliveInclude,
      exclude: e.keepAliveExclude,
      max: e.keepAliveMax,
    })),
    V = b(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  G(
    () => e.modelValue,
    (m, T) => {
      const H = h(m) === !0 ? M(m) : -1;
      a !== !0 && A(H === -1 ? 0 : H < M(T) ? -1 : 1),
        l.value !== H &&
          ((l.value = H),
          t("beforeTransition", m, T),
          Ze(() => {
            t("transition", m, T);
          }));
    }
  );
  function R() {
    I(1);
  }
  function O() {
    I(-1);
  }
  function W(m) {
    t("update:modelValue", m);
  }
  function h(m) {
    return m != null && m !== "";
  }
  function M(m) {
    return n.findIndex(
      (T) =>
        T.props.name === m && T.props.disable !== "" && T.props.disable !== !0
    );
  }
  function D() {
    return n.filter((m) => m.props.disable !== "" && m.props.disable !== !0);
  }
  function A(m) {
    const T =
      m !== 0 && e.animated === !0 && l.value !== -1
        ? "q-transition--" + (m === -1 ? v.value : P.value)
        : null;
    u.value !== T && (u.value = T);
  }
  function I(m, T = l.value) {
    let H = T + m;
    for (; H > -1 && H < n.length; ) {
      const Q = n[H];
      if (Q !== void 0 && Q.props.disable !== "" && Q.props.disable !== !0) {
        A(m),
          (a = !0),
          t("update:modelValue", Q.props.name),
          setTimeout(() => {
            a = !1;
          });
        return;
      }
      H += m;
    }
    e.infinite === !0 &&
      n.length !== 0 &&
      T !== -1 &&
      T !== n.length &&
      I(m, m === -1 ? n.length : -1);
  }
  function g() {
    const m = M(e.modelValue);
    return l.value !== m && (l.value = m), !0;
  }
  function j() {
    const m = h(e.modelValue) === !0 && g() && n[l.value];
    return e.keepAlive === !0
      ? [
          y(Yt, $.value, [
            y(
              V.value === !0
                ? i(k.value, () => ({ ...ht, name: k.value }))
                : ht,
              { key: k.value, style: q.value },
              () => m
            ),
          ]),
        ]
      : [
          y(
            "div",
            {
              class: "q-panel scroll",
              style: q.value,
              key: k.value,
              role: "tabpanel",
            },
            [m]
          ),
        ];
  }
  function B() {
    if (n.length !== 0)
      return e.animated === !0 ? [y(De, { name: u.value }, j)] : j();
  }
  function K(m) {
    return (
      (n = Xt(me(m.default, [])).filter(
        (T) =>
          T.props !== null && T.props.slot === void 0 && h(T.props.name) === !0
      )),
      n.length
    );
  }
  function ee() {
    return n;
  }
  return (
    Object.assign(o, { next: R, previous: O, goTo: W }),
    {
      panelIndex: l,
      panelDirectives: s,
      updatePanelsList: K,
      updatePanelIndex: g,
      getPanelContent: B,
      getEnabledPanels: D,
      getPanels: ee,
      isValidPanelName: h,
      keepAliveProps: $,
      needsUniqueKeepAliveWrapper: V,
      goToPanelByOffset: I,
      goToPanel: W,
      nextPanel: R,
      previousPanel: O,
    }
  );
}
var qe = Z({
  name: "QCarouselSlide",
  props: { ...Lt, imgSrc: String },
  setup(e, { slots: t }) {
    const o = b(() =>
      e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {}
    );
    return () =>
      y("div", { class: "q-carousel__slide", style: o.value }, me(t.default));
  },
});
let ke = 0;
const Ea = { fullscreen: Boolean, noRouteFullscreenExit: Boolean },
  Ma = ["update:fullscreen", "fullscreen"];
function Ra() {
  const e = ce(),
    { props: t, emit: o, proxy: i } = e;
  let n, a, l;
  const u = x(!1);
  Zt(e) === !0 &&
    G(
      () => i.$route.fullPath,
      () => {
        t.noRouteFullscreenExit !== !0 && v();
      }
    ),
    G(
      () => t.fullscreen,
      (P) => {
        u.value !== P && c();
      }
    ),
    G(u, (P) => {
      o("update:fullscreen", P), o("fullscreen", P);
    });
  function c() {
    u.value === !0 ? v() : s();
  }
  function s() {
    u.value !== !0 &&
      ((u.value = !0),
      (l = i.$el.parentNode),
      l.replaceChild(a, i.$el),
      document.body.appendChild(i.$el),
      ke++,
      ke === 1 && document.body.classList.add("q-body--fullscreen-mixin"),
      (n = { handler: v }),
      Fe.add(n));
  }
  function v() {
    u.value === !0 &&
      (n !== void 0 && (Fe.remove(n), (n = void 0)),
      l.replaceChild(i.$el, a),
      (u.value = !1),
      (ke = Math.max(0, ke - 1)),
      ke === 0 &&
        (document.body.classList.remove("q-body--fullscreen-mixin"),
        i.$el.scrollIntoView !== void 0 &&
          setTimeout(() => {
            i.$el.scrollIntoView();
          })));
  }
  return (
    ea(() => {
      a = document.createElement("span");
    }),
    oe(() => {
      t.fullscreen === !0 && s();
    }),
    Y(v),
    Object.assign(i, {
      toggleFullscreen: c,
      setFullscreen: s,
      exitFullscreen: v,
    }),
    { inFullscreen: u, toggleFullscreen: c }
  );
}
const Da = ["top", "right", "bottom", "left"],
  Fa = ["regular", "flat", "outline", "push", "unelevated"];
var za = Z({
  name: "QCarousel",
  props: {
    ...St,
    ...Bt,
    ...Ea,
    transitionPrev: { type: String, default: "fade" },
    transitionNext: { type: String, default: "fade" },
    height: String,
    padding: Boolean,
    controlColor: String,
    controlTextColor: String,
    controlType: {
      type: String,
      validator: (e) => Fa.includes(e),
      default: "flat",
    },
    autoplay: [Number, Boolean],
    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,
    navigation: Boolean,
    navigationPosition: { type: String, validator: (e) => Da.includes(e) },
    navigationIcon: String,
    navigationActiveIcon: String,
    thumbnails: Boolean,
  },
  emits: [...Ma, ...$t],
  setup(e, { slots: t }) {
    const {
        proxy: { $q: o },
      } = ce(),
      i = Tt(e, o);
    let n = null,
      a;
    const {
        updatePanelsList: l,
        getPanelContent: u,
        panelDirectives: c,
        goToPanel: s,
        previousPanel: v,
        nextPanel: P,
        getEnabledPanels: q,
        panelIndex: k,
      } = Et(),
      { inFullscreen: $ } = Ra(),
      V = b(() =>
        $.value !== !0 && e.height !== void 0 ? { height: e.height } : {}
      ),
      R = b(() => (e.vertical === !0 ? "vertical" : "horizontal")),
      O = b(
        () =>
          `q-carousel q-panel-parent q-carousel--with${
            e.padding === !0 ? "" : "out"
          }-padding` +
          ($.value === !0 ? " fullscreen" : "") +
          (i.value === !0 ? " q-carousel--dark q-dark" : "") +
          (e.arrows === !0 ? ` q-carousel--arrows-${R.value}` : "") +
          (e.navigation === !0 ? ` q-carousel--navigation-${D.value}` : "")
      ),
      W = b(() => {
        const B = [
          e.prevIcon || o.iconSet.carousel[e.vertical === !0 ? "up" : "left"],
          e.nextIcon ||
            o.iconSet.carousel[e.vertical === !0 ? "down" : "right"],
        ];
        return e.vertical === !1 && o.lang.rtl === !0 ? B.reverse() : B;
      }),
      h = b(() => e.navigationIcon || o.iconSet.carousel.navigationIcon),
      M = b(() => e.navigationActiveIcon || h.value),
      D = b(
        () => e.navigationPosition || (e.vertical === !0 ? "right" : "bottom")
      ),
      A = b(() => ({
        color: e.controlColor,
        textColor: e.controlTextColor,
        round: !0,
        [e.controlType]: !0,
        dense: !0,
      }));
    G(
      () => e.modelValue,
      () => {
        e.autoplay && I();
      }
    ),
      G(
        () => e.autoplay,
        (B) => {
          B ? I() : n !== null && (clearTimeout(n), (n = null));
        }
      );
    function I() {
      const B = ta(e.autoplay) === !0 ? Math.abs(e.autoplay) : 5e3;
      n !== null && clearTimeout(n),
        (n = setTimeout(() => {
          (n = null), B >= 0 ? P() : v();
        }, B));
    }
    oe(() => {
      e.autoplay && I();
    }),
      Y(() => {
        n !== null && clearTimeout(n);
      });
    function g(B, K) {
      return y(
        "div",
        {
          class:
            `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${B} q-carousel__navigation--${D.value}` +
            (e.controlColor !== void 0 ? ` text-${e.controlColor}` : ""),
        },
        [
          y(
            "div",
            { class: "q-carousel__navigation-inner flex flex-center no-wrap" },
            q().map(K)
          ),
        ]
      );
    }
    function j() {
      const B = [];
      if (e.navigation === !0) {
        const K =
            t["navigation-icon"] !== void 0
              ? t["navigation-icon"]
              : (m) =>
                  y(Ne, {
                    key: "nav" + m.name,
                    class: `q-carousel__navigation-icon q-carousel__navigation-icon--${
                      m.active === !0 ? "" : "in"
                    }active`,
                    ...m.btnProps,
                    onClick: m.onClick,
                  }),
          ee = a - 1;
        B.push(
          g("buttons", (m, T) => {
            const H = m.props.name,
              Q = k.value === T;
            return K({
              index: T,
              maxIndex: ee,
              name: H,
              active: Q,
              btnProps: {
                icon: Q === !0 ? M.value : h.value,
                size: "sm",
                ...A.value,
              },
              onClick: () => {
                s(H);
              },
            });
          })
        );
      } else if (e.thumbnails === !0) {
        const K = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
        B.push(
          g("thumbnails", (ee) => {
            const m = ee.props;
            return y("img", {
              key: "tmb#" + m.name,
              class:
                `q-carousel__thumbnail q-carousel__thumbnail--${
                  m.name === e.modelValue ? "" : "in"
                }active` + K,
              src: m.imgSrc || m["img-src"],
              onClick: () => {
                s(m.name);
              },
            });
          })
        );
      }
      return (
        e.arrows === !0 &&
          k.value >= 0 &&
          ((e.infinite === !0 || k.value > 0) &&
            B.push(
              y(
                "div",
                {
                  key: "prev",
                  class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${R.value} absolute flex flex-center`,
                },
                [y(Ne, { icon: W.value[0], ...A.value, onClick: v })]
              )
            ),
          (e.infinite === !0 || k.value < a - 1) &&
            B.push(
              y(
                "div",
                {
                  key: "next",
                  class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${R.value} absolute flex flex-center`,
                },
                [y(Ne, { icon: W.value[1], ...A.value, onClick: P })]
              )
            )),
        tt(t.control, B)
      );
    }
    return () => (
      (a = l(t)),
      y(
        "div",
        { class: O.value, style: V.value },
        [
          Pt(
            "div",
            { class: "q-carousel__slides-container" },
            u(),
            "sl-cont",
            e.swipeable,
            () => c.value
          ),
        ].concat(j())
      )
    );
  },
});
function Va(e, t, o) {
  let i;
  function n() {
    i !== void 0 && (Fe.remove(i), (i = void 0));
  }
  return (
    Y(() => {
      e.value === !0 && n();
    }),
    {
      removeFromHistory: n,
      addToHistory() {
        (i = { condition: () => o.value === !0, handler: t }), Fe.add(i);
      },
    }
  );
}
let Se = 0,
  Ue,
  Ke,
  Te,
  Ge = !1,
  gt,
  bt,
  yt,
  ve = null;
function ja(e) {
  Ha(e) && be(e);
}
function Ha(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = aa(e),
    o = e.shiftKey && !e.deltaX,
    i = !o && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    n = o || i ? e.deltaY : e.deltaX;
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    if (pa(l, i))
      return i
        ? n < 0 && l.scrollTop === 0
          ? !0
          : n > 0 && l.scrollTop + l.clientHeight === l.scrollHeight
        : n < 0 && l.scrollLeft === 0
        ? !0
        : n > 0 && l.scrollLeft + l.clientWidth === l.scrollWidth;
  }
  return !0;
}
function pt(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Be(e) {
  Ge !== !0 &&
    ((Ge = !0),
    requestAnimationFrame(() => {
      Ge = !1;
      const { height: t } = e.target,
        { clientHeight: o, scrollTop: i } = document.scrollingElement;
      (Te === void 0 || t !== window.innerHeight) &&
        ((Te = o - t), (document.scrollingElement.scrollTop = i)),
        i > Te &&
          (document.scrollingElement.scrollTop -= Math.ceil((i - Te) / 8));
    }));
}
function wt(e) {
  const t = document.body,
    o = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: i, overflowX: n } = window.getComputedStyle(t);
    (Ue = ba(window)),
      (Ke = ya(window)),
      (gt = t.style.left),
      (bt = t.style.top),
      (yt = window.location.href),
      (t.style.left = `-${Ue}px`),
      (t.style.top = `-${Ke}px`),
      n !== "hidden" &&
        (n === "scroll" || t.scrollWidth > window.innerWidth) &&
        t.classList.add("q-body--force-scrollbar-x"),
      i !== "hidden" &&
        (i === "scroll" || t.scrollHeight > window.innerHeight) &&
        t.classList.add("q-body--force-scrollbar-y"),
      t.classList.add("q-body--prevent-scroll"),
      (document.qScrollPrevented = !0),
      X.is.ios === !0 &&
        (o === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              "resize",
              Be,
              ae.passiveCapture
            ),
            window.visualViewport.addEventListener(
              "scroll",
              Be,
              ae.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", pt, ae.passiveCapture));
  }
  X.is.desktop === !0 &&
    X.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", ja, ae.notPassive),
    e === "remove" &&
      (X.is.ios === !0 &&
        (o === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              Be,
              ae.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              Be,
              ae.passiveCapture
            ))
          : window.removeEventListener("scroll", pt, ae.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = gt),
      (t.style.top = bt),
      window.location.href === yt && window.scrollTo(Ue, Ke),
      (Te = void 0));
}
function Na(e) {
  let t = "add";
  if (e === !0) {
    if ((Se++, ve !== null)) {
      clearTimeout(ve), (ve = null);
      return;
    }
    if (Se > 1) return;
  } else {
    if (Se === 0 || (Se--, Se > 0)) return;
    if (((t = "remove"), X.is.ios === !0 && X.is.nativeMobile === !0)) {
      ve !== null && clearTimeout(ve),
        (ve = setTimeout(() => {
          wt(t), (ve = null);
        }, 100));
      return;
    }
  }
  wt(t);
}
function Qa() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), Na(t));
    },
  };
}
let $e = 0;
const Oa = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  xt = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  };
var Wa = Z({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...wa,
    ...xa,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (e) =>
        e === "standard" || ["top", "bottom", "left", "right"].includes(e),
    },
  },
  emits: [..._a, "shake", "click", "escapeKey"],
  setup(e, { slots: t, emit: o, attrs: i }) {
    const n = ce(),
      a = x(null),
      l = x(!1),
      u = x(!1);
    let c = null,
      s = null,
      v,
      P;
    const q = b(
        () =>
          e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
      ),
      { preventBodyScroll: k } = Qa(),
      { registerTimeout: $ } = et(),
      { registerTick: V, removeTick: R } = Me(),
      { transitionProps: O, transitionStyle: W } = qa(
        e,
        () => xt[e.position][0],
        () => xt[e.position][1]
      ),
      {
        showPortal: h,
        hidePortal: M,
        portalIsAccessible: D,
        renderPortal: A,
      } = ka(n, a, Ie, "dialog"),
      { hide: I } = Sa({
        showing: l,
        hideOnRouteChange: q,
        handleShow: T,
        handleHide: H,
        processOnMount: !0,
      }),
      { addToHistory: g, removeFromHistory: j } = Va(l, I, q),
      B = b(
        () =>
          `q-dialog__inner flex no-pointer-events q-dialog__inner--${
            e.maximized === !0 ? "maximized" : "minimized"
          } q-dialog__inner--${e.position} ${Oa[e.position]}` +
          (u.value === !0 ? " q-dialog__inner--animating" : "") +
          (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") +
          (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") +
          (e.square === !0 ? " q-dialog__inner--square" : "")
      ),
      K = b(() => l.value === !0 && e.seamless !== !0),
      ee = b(() => (e.autoClose === !0 ? { onClick: se } : {})),
      m = b(() => [
        `q-dialog fullscreen no-pointer-events q-dialog--${
          K.value === !0 ? "modal" : "seamless"
        }`,
        i.class,
      ]);
    G(
      () => e.maximized,
      (_) => {
        l.value === !0 && we(_);
      }
    ),
      G(K, (_) => {
        k(_), _ === !0 ? (Ta(he), Ca(le)) : (dt(he), vt(le));
      });
    function T(_) {
      g(),
        (s =
          e.noRefocus === !1 && document.activeElement !== null
            ? document.activeElement
            : null),
        we(e.maximized),
        h(),
        (u.value = !0),
        e.noFocus !== !0
          ? (document.activeElement !== null && document.activeElement.blur(),
            V(Q))
          : R(),
        $(() => {
          if (n.proxy.$q.platform.is.ios === !0) {
            if (e.seamless !== !0 && document.activeElement) {
              const { top: E, bottom: xe } =
                  document.activeElement.getBoundingClientRect(),
                { innerHeight: Pe } = window,
                _e =
                  window.visualViewport !== void 0
                    ? window.visualViewport.height
                    : Pe;
              E > 0 &&
                xe > _e / 2 &&
                (document.scrollingElement.scrollTop = Math.min(
                  document.scrollingElement.scrollHeight - _e,
                  xe >= Pe
                    ? 1 / 0
                    : Math.ceil(
                        document.scrollingElement.scrollTop + xe - _e / 2
                      )
                )),
                document.activeElement.scrollIntoView();
            }
            (P = !0), a.value.click(), (P = !1);
          }
          h(!0), (u.value = !1), o("show", _);
        }, e.transitionDuration);
    }
    function H(_) {
      R(),
        j(),
        pe(!0),
        (u.value = !0),
        M(),
        s !== null &&
          ((
            (_ && _.type.indexOf("key") === 0
              ? s.closest('[tabindex]:not([tabindex^="-"])')
              : void 0) || s
          ).focus(),
          (s = null)),
        $(() => {
          M(!0), (u.value = !1), o("hide", _);
        }, e.transitionDuration);
    }
    function Q(_) {
      Wt(() => {
        let E = a.value;
        E === null ||
          E.contains(document.activeElement) === !0 ||
          ((E =
            (_ !== "" ? E.querySelector(_) : null) ||
            E.querySelector(
              "[autofocus][tabindex], [data-autofocus][tabindex]"
            ) ||
            E.querySelector(
              "[autofocus] [tabindex], [data-autofocus] [tabindex]"
            ) ||
            E.querySelector("[autofocus], [data-autofocus]") ||
            E),
          E.focus({ preventScroll: !0 }));
      });
    }
    function de(_) {
      _ && typeof _.focus == "function" ? _.focus({ preventScroll: !0 }) : Q(),
        o("shake");
      const E = a.value;
      E !== null &&
        (E.classList.remove("q-animate--scale"),
        E.classList.add("q-animate--scale"),
        c !== null && clearTimeout(c),
        (c = setTimeout(() => {
          (c = null),
            a.value !== null && (E.classList.remove("q-animate--scale"), Q());
        }, 170)));
    }
    function le() {
      e.seamless !== !0 &&
        (e.persistent === !0 || e.noEscDismiss === !0
          ? e.maximized !== !0 && e.noShake !== !0 && de()
          : (o("escapeKey"), I()));
    }
    function pe(_) {
      c !== null && (clearTimeout(c), (c = null)),
        (_ === !0 || l.value === !0) &&
          (we(!1), e.seamless !== !0 && (k(!1), dt(he), vt(le))),
        _ !== !0 && (s = null);
    }
    function we(_) {
      _ === !0
        ? v !== !0 &&
          ($e < 1 && document.body.classList.add("q-body--dialog"),
          $e++,
          (v = !0))
        : v === !0 &&
          ($e < 2 && document.body.classList.remove("q-body--dialog"),
          $e--,
          (v = !1));
    }
    function se(_) {
      P !== !0 && (I(_), o("click", _));
    }
    function re(_) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0
        ? I(_)
        : e.noShake !== !0 && de();
    }
    function he(_) {
      e.allowFocusOutside !== !0 &&
        D.value === !0 &&
        na(a.value, _.target) !== !0 &&
        Q('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(n.proxy, {
      focus: Q,
      shake: de,
      __updateRefocusTarget(_) {
        s = _ || null;
      },
    }),
      Y(pe);
    function Ie() {
      return y(
        "div",
        {
          role: "dialog",
          "aria-modal": K.value === !0 ? "true" : "false",
          ...i,
          class: m.value,
        },
        [
          y(De, { name: "q-transition--fade", appear: !0 }, () =>
            K.value === !0
              ? y("div", {
                  class: "q-dialog__backdrop fixed-full",
                  style: W.value,
                  "aria-hidden": "true",
                  tabindex: -1,
                  onClick: re,
                })
              : null
          ),
          y(De, O.value, () =>
            l.value === !0
              ? y(
                  "div",
                  {
                    ref: a,
                    class: B.value,
                    style: W.value,
                    tabindex: -1,
                    ...ee.value,
                  },
                  me(t.default)
                )
              : null
          ),
        ]
      );
    }
    return A;
  },
});
const Ua = { ratio: [String, Number] };
function Ka(e, t) {
  return b(() => {
    const o = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(o) !== !0 && o > 0 ? { paddingBottom: `${100 / o}%` } : null;
  });
}
const Ga = 16 / 9;
var Re = Z({
  name: "QImg",
  props: {
    ...Ua,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: { type: String, default: "lazy" },
    fetchpriority: { type: String, default: "auto" },
    width: String,
    height: String,
    initialRatio: { type: [Number, String], default: Ga },
    placeholderSrc: String,
    fit: { type: String, default: "cover" },
    position: { type: String, default: "50% 50%" },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String,
  },
  emits: ["load", "error"],
  setup(e, { slots: t, emit: o }) {
    const i = x(e.initialRatio),
      n = Ka(e, i);
    let a = null,
      l = !1;
    const u = [x(null), x(R())],
      c = x(0),
      s = x(!1),
      v = x(!1),
      P = b(() => `q-img q-img--${e.noNativeMenu === !0 ? "no-" : ""}menu`),
      q = b(() => ({ width: e.width, height: e.height })),
      k = b(
        () =>
          `q-img__image ${
            e.imgClass !== void 0 ? e.imgClass + " " : ""
          }q-img__image--with${e.noTransition === !0 ? "out" : ""}-transition`
      ),
      $ = b(() => ({
        ...e.imgStyle,
        objectFit: e.fit,
        objectPosition: e.position,
      }));
    G(() => V(), O);
    function V() {
      return e.src || e.srcset || e.sizes
        ? { src: e.src, srcset: e.srcset, sizes: e.sizes }
        : null;
    }
    function R() {
      return e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null;
    }
    function O(g) {
      a !== null && (clearTimeout(a), (a = null)),
        (v.value = !1),
        g === null
          ? ((s.value = !1), (u[c.value ^ 1].value = R()))
          : (s.value = !0),
        (u[c.value].value = g);
    }
    function W({ target: g }) {
      l !== !0 &&
        (a !== null && (clearTimeout(a), (a = null)),
        (i.value =
          g.naturalHeight === 0 ? 0.5 : g.naturalWidth / g.naturalHeight),
        h(g, 1));
    }
    function h(g, j) {
      l === !0 ||
        j === 1e3 ||
        (g.complete === !0
          ? M(g)
          : (a = setTimeout(() => {
              (a = null), h(g, j + 1);
            }, 50)));
    }
    function M(g) {
      l !== !0 &&
        ((c.value = c.value ^ 1),
        (u[c.value].value = null),
        (s.value = !1),
        (v.value = !1),
        o("load", g.currentSrc || g.src));
    }
    function D(g) {
      a !== null && (clearTimeout(a), (a = null)),
        (s.value = !1),
        (v.value = !0),
        (u[c.value].value = null),
        (u[c.value ^ 1].value = R()),
        o("error", g);
    }
    function A(g) {
      const j = u[g].value,
        B = {
          key: "img_" + g,
          class: k.value,
          style: $.value,
          crossorigin: e.crossorigin,
          decoding: e.decoding,
          referrerpolicy: e.referrerpolicy,
          height: e.height,
          width: e.width,
          loading: e.loading,
          fetchpriority: e.fetchpriority,
          "aria-hidden": "true",
          draggable: e.draggable,
          ...j,
        };
      return (
        c.value === g
          ? ((B.class += " q-img__image--waiting"),
            Object.assign(B, { onLoad: W, onError: D }))
          : (B.class += " q-img__image--loaded"),
        y(
          "div",
          { class: "q-img__container absolute-full", key: "img" + g },
          y("img", B)
        )
      );
    }
    function I() {
      return s.value !== !0
        ? y(
            "div",
            {
              key: "content",
              class: "q-img__content absolute-full q-anchor--skip",
            },
            me(t[v.value === !0 ? "error" : "default"])
          )
        : y(
            "div",
            {
              key: "loading",
              class: "q-img__loading absolute-full flex flex-center",
            },
            t.loading !== void 0
              ? t.loading()
              : e.noSpinner === !0
              ? void 0
              : [y(ia, { color: e.spinnerColor, size: e.spinnerSize })]
          );
    }
    return (
      O(V()),
      Y(() => {
        (l = !0), a !== null && (clearTimeout(a), (a = null));
      }),
      () => {
        const g = [];
        return (
          n.value !== null &&
            g.push(y("div", { key: "filler", style: n.value })),
          v.value !== !0 &&
            (u[0].value !== null && g.push(A(0)),
            u[1].value !== null && g.push(A(1))),
          g.push(y(De, { name: "q-transition--fade" }, I)),
          y(
            "div",
            {
              class: P.value,
              style: q.value,
              role: "img",
              "aria-label": e.alt,
            },
            g
          )
        );
      }
    );
  },
});
let Ja = 0;
const Xa = ["click", "keydown"],
  Ya = {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    alertIcon: String,
    name: { type: [Number, String], default: () => `t_${Ja++}` },
    noCaps: Boolean,
    tabindex: [String, Number],
    disable: Boolean,
    contentClass: String,
    ripple: { type: [Boolean, Object], default: !0 },
  };
function Za(e, t, o, i) {
  const n = oa(At, Qe);
  if (n === Qe)
    return (
      console.error("QTab/QRouteTab component needs to be child of QTabs"), Qe
    );
  const { proxy: a } = ce(),
    l = x(null),
    u = x(null),
    c = x(null),
    s = b(() =>
      e.disable === !0 || e.ripple === !1
        ? !1
        : Object.assign(
            { keyCodes: [13, 32], early: !0 },
            e.ripple === !0 ? {} : e.ripple
          )
    ),
    v = b(() => n.currentModel.value === e.name),
    P = b(
      () =>
        "q-tab relative-position self-stretch flex flex-center text-center" +
        (v.value === !0
          ? " q-tab--active" +
            (n.tabProps.value.activeClass
              ? " " + n.tabProps.value.activeClass
              : "") +
            (n.tabProps.value.activeColor
              ? ` text-${n.tabProps.value.activeColor}`
              : "") +
            (n.tabProps.value.activeBgColor
              ? ` bg-${n.tabProps.value.activeBgColor}`
              : "")
          : " q-tab--inactive") +
        (e.icon && e.label && n.tabProps.value.inlineLabel === !1
          ? " q-tab--full"
          : "") +
        (e.noCaps === !0 || n.tabProps.value.noCaps === !0
          ? " q-tab--no-caps"
          : "") +
        (e.disable === !0
          ? " disabled"
          : " q-focusable q-hoverable cursor-pointer") +
        (i !== void 0 ? i.linkClass.value : "")
    ),
    q = b(
      () =>
        "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " +
        (n.tabProps.value.inlineLabel === !0
          ? "row no-wrap q-tab__content--inline"
          : "column") +
        (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")
    ),
    k = b(() =>
      e.disable === !0 ||
      n.hasFocus.value === !0 ||
      (v.value === !1 && n.hasActiveTab.value === !0)
        ? -1
        : e.tabindex || 0
    );
  function $(h, M) {
    if ((M !== !0 && l.value !== null && l.value.focus(), e.disable === !0)) {
      i !== void 0 && i.hasRouterLink.value === !0 && be(h);
      return;
    }
    if (i === void 0) {
      n.updateModel({ name: e.name }), o("click", h);
      return;
    }
    if (i.hasRouterLink.value === !0) {
      const D = (A = {}) => {
        let I;
        const g =
          A.to === void 0 || ca(A.to, e.to) === !0
            ? (n.avoidRouteWatcher = Qt())
            : null;
        return i
          .navigateToRouterLink(h, { ...A, returnRouterError: !0 })
          .catch((j) => {
            I = j;
          })
          .then((j) => {
            if (
              (g === n.avoidRouteWatcher &&
                ((n.avoidRouteWatcher = !1),
                I === void 0 &&
                  (j === void 0 ||
                    j.message.startsWith("Avoided redundant navigation") ===
                      !0) &&
                  n.updateModel({ name: e.name })),
              A.returnRouterError === !0)
            )
              return I !== void 0 ? Promise.reject(I) : j;
          });
      };
      o("click", h, D), h.defaultPrevented !== !0 && D();
      return;
    }
    o("click", h);
  }
  function V(h) {
    ra(h, [13, 32])
      ? $(h, !0)
      : ua(h) !== !0 &&
        h.keyCode >= 35 &&
        h.keyCode <= 40 &&
        h.altKey !== !0 &&
        h.metaKey !== !0 &&
        n.onKbdNavigate(h.keyCode, a.$el) === !0 &&
        be(h),
      o("keydown", h);
  }
  function R() {
    const h = n.tabProps.value.narrowIndicator,
      M = [],
      D = y("div", {
        ref: c,
        class: ["q-tab__indicator", n.tabProps.value.indicatorClass],
      });
    e.icon !== void 0 && M.push(y(Ce, { class: "q-tab__icon", name: e.icon })),
      e.label !== void 0 &&
        M.push(y("div", { class: "q-tab__label" }, e.label)),
      e.alert !== !1 &&
        M.push(
          e.alertIcon !== void 0
            ? y(Ce, {
                class: "q-tab__alert-icon",
                color: e.alert !== !0 ? e.alert : void 0,
                name: e.alertIcon,
              })
            : y("div", {
                class:
                  "q-tab__alert" + (e.alert !== !0 ? ` text-${e.alert}` : ""),
              })
        ),
      h === !0 && M.push(D);
    const A = [
      y("div", { class: "q-focus-helper", tabindex: -1, ref: l }),
      y("div", { class: q.value }, tt(t.default, M)),
    ];
    return h === !1 && A.push(D), A;
  }
  const O = {
    name: b(() => e.name),
    rootRef: u,
    tabIndicatorRef: c,
    routeData: i,
  };
  Y(() => {
    n.unregisterTab(O);
  }),
    oe(() => {
      n.registerTab(O);
    });
  function W(h, M) {
    const D = {
      ref: u,
      class: P.value,
      tabindex: k.value,
      role: "tab",
      "aria-selected": v.value === !0 ? "true" : "false",
      "aria-disabled": e.disable === !0 ? "true" : void 0,
      onClick: $,
      onKeydown: V,
      ...M,
    };
    return la(y(h, D, R()), [[sa, s.value]]);
  }
  return { renderTab: W, $tabs: n };
}
var Je = Z({
  name: "QTab",
  props: Ya,
  emits: Xa,
  setup(e, { slots: t, emit: o }) {
    const { renderTab: i } = Za(e, t, o);
    return () => i("div");
  },
});
function en() {
  const e = x(!da.value);
  return (
    e.value === !1 &&
      oe(() => {
        e.value = !0;
      }),
    e
  );
}
const Mt = typeof ResizeObserver != "undefined",
  _t =
    Mt === !0
      ? {}
      : {
          style:
            "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
          url: "about:blank",
        };
var tn = Z({
  name: "QResizeObserver",
  props: { debounce: { type: [String, Number], default: 100 } },
  emits: ["resize"],
  setup(e, { emit: t }) {
    let o = null,
      i,
      n = { width: -1, height: -1 };
    function a(c) {
      c === !0 || e.debounce === 0 || e.debounce === "0"
        ? l()
        : o === null && (o = setTimeout(l, e.debounce));
    }
    function l() {
      if ((o !== null && (clearTimeout(o), (o = null)), i)) {
        const { offsetWidth: c, offsetHeight: s } = i;
        (c !== n.width || s !== n.height) &&
          ((n = { width: c, height: s }), t("resize", n));
      }
    }
    const { proxy: u } = ce();
    if (Mt === !0) {
      let c;
      const s = (v) => {
        (i = u.$el.parentNode),
          i
            ? ((c = new ResizeObserver(a)), c.observe(i), l())
            : v !== !0 &&
              Ze(() => {
                s(!0);
              });
      };
      return (
        oe(() => {
          s();
        }),
        Y(() => {
          o !== null && clearTimeout(o),
            c !== void 0 &&
              (c.disconnect !== void 0 ? c.disconnect() : i && c.unobserve(i));
        }),
        It
      );
    } else {
      let v = function () {
          o !== null && (clearTimeout(o), (o = null)),
            s !== void 0 &&
              (s.removeEventListener !== void 0 &&
                s.removeEventListener("resize", a, ae.passive),
              (s = void 0));
        },
        P = function () {
          v(),
            i &&
              i.contentDocument &&
              ((s = i.contentDocument.defaultView),
              s.addEventListener("resize", a, ae.passive),
              l());
        };
      const c = en();
      let s;
      return (
        oe(() => {
          Ze(() => {
            (i = u.$el), i && P();
          });
        }),
        Y(v),
        (u.trigger = a),
        () => {
          if (c.value === !0)
            return y("object", {
              style: _t.style,
              tabindex: -1,
              type: "text/html",
              data: _t.url,
              "aria-hidden": "true",
              onLoad: P,
            });
        }
      );
    }
  },
});
let Rt = !1;
{
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"),
    Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }),
    document.body.appendChild(e),
    e.appendChild(t),
    (e.scrollLeft = -1e3),
    (Rt = e.scrollLeft >= 0),
    e.remove();
}
function an(e, t, o) {
  const i = o === !0 ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === !0 ? i[0] : i[1]}${e ? ` text-${e}` : ""}`;
}
const nn = ["left", "center", "right", "justify"];
var on = Z({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (e) => nn.includes(e),
    },
    breakpoint: { type: [String, Number], default: 600 },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array],
  },
  setup(e, { slots: t, emit: o }) {
    const { proxy: i } = ce(),
      { $q: n } = i,
      { registerTick: a } = Me(),
      { registerTick: l } = Me(),
      { registerTick: u } = Me(),
      { registerTimeout: c, removeTimeout: s } = et(),
      { registerTimeout: v, removeTimeout: P } = et(),
      q = x(null),
      k = x(null),
      $ = x(e.modelValue),
      V = x(!1),
      R = x(!0),
      O = x(!1),
      W = x(!1),
      h = [],
      M = x(0),
      D = x(!1);
    let A = null,
      I = null,
      g;
    const j = b(() => ({
        activeClass: e.activeClass,
        activeColor: e.activeColor,
        activeBgColor: e.activeBgColor,
        indicatorClass: an(e.indicatorColor, e.switchIndicator, e.vertical),
        narrowIndicator: e.narrowIndicator,
        inlineLabel: e.inlineLabel,
        noCaps: e.noCaps,
      })),
      B = b(() => {
        const r = M.value,
          f = $.value;
        for (let p = 0; p < r; p++) if (h[p].name.value === f) return !0;
        return !1;
      }),
      K = b(
        () =>
          `q-tabs__content--align-${
            V.value === !0 ? "left" : W.value === !0 ? "justify" : e.align
          }`
      ),
      ee = b(
        () =>
          `q-tabs row no-wrap items-center q-tabs--${
            V.value === !0 ? "" : "not-"
          }scrollable q-tabs--${
            e.vertical === !0 ? "vertical" : "horizontal"
          } q-tabs__arrows--${
            e.outsideArrows === !0 ? "outside" : "inside"
          } q-tabs--mobile-with${e.mobileArrows === !0 ? "" : "out"}-arrows` +
          (e.dense === !0 ? " q-tabs--dense" : "") +
          (e.shrink === !0 ? " col-shrink" : "") +
          (e.stretch === !0 ? " self-stretch" : "")
      ),
      m = b(
        () =>
          "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " +
          K.value +
          (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")
      ),
      T = b(() =>
        e.vertical === !0
          ? {
              container: "height",
              content: "offsetHeight",
              scroll: "scrollHeight",
            }
          : {
              container: "width",
              content: "offsetWidth",
              scroll: "scrollWidth",
            }
      ),
      H = b(() => e.vertical !== !0 && n.lang.rtl === !0),
      Q = b(() => Rt === !1 && H.value === !0);
    G(H, re),
      G(
        () => e.modelValue,
        (r) => {
          de({ name: r, setCurrent: !0, skipEmit: !0 });
        }
      ),
      G(() => e.outsideArrows, le);
    function de({ name: r, setCurrent: f, skipEmit: p }) {
      $.value !== r &&
        (p !== !0 &&
          e["onUpdate:modelValue"] !== void 0 &&
          o("update:modelValue", r),
        (f === !0 || e["onUpdate:modelValue"] === void 0) &&
          (we($.value, r), ($.value = r)));
    }
    function le() {
      a(() => {
        pe({ width: q.value.offsetWidth, height: q.value.offsetHeight });
      });
    }
    function pe(r) {
      if (T.value === void 0 || k.value === null) return;
      const f = r[T.value.container],
        p = Math.min(
          k.value[T.value.scroll],
          Array.prototype.reduce.call(
            k.value.children,
            (z, L) => z + (L[T.value.content] || 0),
            0
          )
        ),
        F = f > 0 && p > f;
      (V.value = F),
        F === !0 && l(re),
        (W.value = f < parseInt(e.breakpoint, 10));
    }
    function we(r, f) {
      const p =
          r != null && r !== "" ? h.find((z) => z.name.value === r) : null,
        F = f != null && f !== "" ? h.find((z) => z.name.value === f) : null;
      if (p && F) {
        const z = p.tabIndicatorRef.value,
          L = F.tabIndicatorRef.value;
        A !== null && (clearTimeout(A), (A = null)),
          (z.style.transition = "none"),
          (z.style.transform = "none"),
          (L.style.transition = "none"),
          (L.style.transform = "none");
        const S = z.getBoundingClientRect(),
          U = L.getBoundingClientRect();
        (L.style.transform =
          e.vertical === !0
            ? `translate3d(0,${S.top - U.top}px,0) scale3d(1,${
                U.height ? S.height / U.height : 1
              },1)`
            : `translate3d(${S.left - U.left}px,0,0) scale3d(${
                U.width ? S.width / U.width : 1
              },1,1)`),
          u(() => {
            A = setTimeout(() => {
              (A = null),
                (L.style.transition =
                  "transform .25s cubic-bezier(.4, 0, .2, 1)"),
                (L.style.transform = "none");
            }, 70);
          });
      }
      F && V.value === !0 && se(F.rootRef.value);
    }
    function se(r) {
      const {
          left: f,
          width: p,
          top: F,
          height: z,
        } = k.value.getBoundingClientRect(),
        L = r.getBoundingClientRect();
      let S = e.vertical === !0 ? L.top - F : L.left - f;
      if (S < 0) {
        (k.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] +=
          Math.floor(S)),
          re();
        return;
      }
      (S += e.vertical === !0 ? L.height - z : L.width - p),
        S > 0 &&
          ((k.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] +=
            Math.ceil(S)),
          re());
    }
    function re() {
      const r = k.value;
      if (r === null) return;
      const f = r.getBoundingClientRect(),
        p = e.vertical === !0 ? r.scrollTop : Math.abs(r.scrollLeft);
      H.value === !0
        ? ((R.value = Math.ceil(p + f.width) < r.scrollWidth - 1),
          (O.value = p > 0))
        : ((R.value = p > 0),
          (O.value =
            e.vertical === !0
              ? Math.ceil(p + f.height) < r.scrollHeight
              : Math.ceil(p + f.width) < r.scrollWidth));
    }
    function he(r) {
      I !== null && clearInterval(I),
        (I = setInterval(() => {
          _e(r) === !0 && E();
        }, 5));
    }
    function Ie() {
      he(Q.value === !0 ? Number.MAX_SAFE_INTEGER : 0);
    }
    function _() {
      he(Q.value === !0 ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function E() {
      I !== null && (clearInterval(I), (I = null));
    }
    function xe(r, f) {
      const p = Array.prototype.filter.call(
          k.value.children,
          (U) =>
            U === f || (U.matches && U.matches(".q-tab.q-focusable") === !0)
        ),
        F = p.length;
      if (F === 0) return;
      if (r === 36) return se(p[0]), p[0].focus(), !0;
      if (r === 35) return se(p[F - 1]), p[F - 1].focus(), !0;
      const z = r === (e.vertical === !0 ? 38 : 37),
        L = r === (e.vertical === !0 ? 40 : 39),
        S = z === !0 ? -1 : L === !0 ? 1 : void 0;
      if (S !== void 0) {
        const U = H.value === !0 ? -1 : 1,
          te = p.indexOf(f) + S * U;
        return (
          te >= 0 && te < F && (se(p[te]), p[te].focus({ preventScroll: !0 })),
          !0
        );
      }
    }
    const Pe = b(() =>
      Q.value === !0
        ? {
            get: (r) => Math.abs(r.scrollLeft),
            set: (r, f) => {
              r.scrollLeft = -f;
            },
          }
        : e.vertical === !0
        ? {
            get: (r) => r.scrollTop,
            set: (r, f) => {
              r.scrollTop = f;
            },
          }
        : {
            get: (r) => r.scrollLeft,
            set: (r, f) => {
              r.scrollLeft = f;
            },
          }
    );
    function _e(r) {
      const f = k.value,
        { get: p, set: F } = Pe.value;
      let z = !1,
        L = p(f);
      const S = r < L ? -1 : 1;
      return (
        (L += S * 5),
        L < 0
          ? ((z = !0), (L = 0))
          : ((S === -1 && L <= r) || (S === 1 && L >= r)) &&
            ((z = !0), (L = r)),
        F(f, L),
        re(),
        z
      );
    }
    function nt(r, f) {
      for (const p in r) if (r[p] !== f[p]) return !1;
      return !0;
    }
    function Dt() {
      let r = null,
        f = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const p = h.filter(
          (S) =>
            S.routeData !== void 0 && S.routeData.hasRouterLink.value === !0
        ),
        { hash: F, query: z } = i.$route,
        L = Object.keys(z).length;
      for (const S of p) {
        const U = S.routeData.exact.value === !0;
        if (
          S.routeData[U === !0 ? "linkIsExactActive" : "linkIsActive"].value !==
          !0
        )
          continue;
        const {
            hash: te,
            query: ze,
            matched: Ht,
            href: Nt,
          } = S.routeData.resolvedLink.value,
          Ve = Object.keys(ze).length;
        if (U === !0) {
          if (te !== F || Ve !== L || nt(z, ze) === !1) continue;
          r = S.name.value;
          break;
        }
        if ((te !== "" && te !== F) || (Ve !== 0 && nt(ze, z) === !1)) continue;
        const ue = {
          matchedLen: Ht.length,
          queryDiff: L - Ve,
          hrefLen: Nt.length - te.length,
        };
        if (ue.matchedLen > f.matchedLen) {
          (r = S.name.value), (f = ue);
          continue;
        } else if (ue.matchedLen !== f.matchedLen) continue;
        if (ue.queryDiff < f.queryDiff) (r = S.name.value), (f = ue);
        else if (ue.queryDiff !== f.queryDiff) continue;
        ue.hrefLen > f.hrefLen && ((r = S.name.value), (f = ue));
      }
      (r === null &&
        h.some((S) => S.routeData === void 0 && S.name.value === $.value) ===
          !0) ||
        de({ name: r, setCurrent: !0 });
    }
    function Ft(r) {
      if (
        (s(),
        D.value !== !0 &&
          q.value !== null &&
          r.target &&
          typeof r.target.closest == "function")
      ) {
        const f = r.target.closest(".q-tab");
        f &&
          q.value.contains(f) === !0 &&
          ((D.value = !0), V.value === !0 && se(f));
      }
    }
    function zt() {
      c(() => {
        D.value = !1;
      }, 30);
    }
    function Ae() {
      ot.avoidRouteWatcher === !1 ? v(Dt) : P();
    }
    function it() {
      if (g === void 0) {
        const r = G(() => i.$route.fullPath, Ae);
        g = () => {
          r(), (g = void 0);
        };
      }
    }
    function Vt(r) {
      h.push(r),
        M.value++,
        le(),
        r.routeData === void 0 || i.$route === void 0
          ? v(() => {
              if (V.value === !0) {
                const f = $.value,
                  p =
                    f != null && f !== ""
                      ? h.find((F) => F.name.value === f)
                      : null;
                p && se(p.rootRef.value);
              }
            })
          : (it(), r.routeData.hasRouterLink.value === !0 && Ae());
    }
    function jt(r) {
      h.splice(h.indexOf(r), 1),
        M.value--,
        le(),
        g !== void 0 &&
          r.routeData !== void 0 &&
          (h.every((f) => f.routeData === void 0) === !0 && g(), Ae());
    }
    const ot = {
      currentModel: $,
      tabProps: j,
      hasFocus: D,
      hasActiveTab: B,
      registerTab: Vt,
      unregisterTab: jt,
      verifyRouteModel: Ae,
      updateModel: de,
      onKbdNavigate: xe,
      avoidRouteWatcher: !1,
    };
    va(At, ot);
    function lt() {
      A !== null && clearTimeout(A), E(), g !== void 0 && g();
    }
    let st;
    return (
      Y(lt),
      fa(() => {
        (st = g !== void 0), lt();
      }),
      ma(() => {
        st === !0 && it(), le();
      }),
      () =>
        y(
          "div",
          {
            ref: q,
            class: ee.value,
            role: "tablist",
            onFocusin: Ft,
            onFocusout: zt,
          },
          [
            y(tn, { onResize: pe }),
            y("div", { ref: k, class: m.value, onScroll: re }, me(t.default)),
            y(Ce, {
              class:
                "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" +
                (R.value === !0 ? "" : " q-tabs__arrow--faded"),
              name:
                e.leftIcon || n.iconSet.tabs[e.vertical === !0 ? "up" : "left"],
              onMousedownPassive: Ie,
              onTouchstartPassive: Ie,
              onMouseupPassive: E,
              onMouseleavePassive: E,
              onTouchendPassive: E,
            }),
            y(Ce, {
              class:
                "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" +
                (O.value === !0 ? "" : " q-tabs__arrow--faded"),
              name:
                e.rightIcon ||
                n.iconSet.tabs[e.vertical === !0 ? "down" : "right"],
              onMousedownPassive: _,
              onTouchstartPassive: _,
              onMouseupPassive: E,
              onMouseleavePassive: E,
              onTouchendPassive: E,
            }),
          ]
        )
    );
  },
});
const ln = ["top", "middle", "bottom"];
var Xe = Z({
    name: "QBadge",
    props: {
      color: String,
      textColor: String,
      floating: Boolean,
      transparent: Boolean,
      multiLine: Boolean,
      outline: Boolean,
      rounded: Boolean,
      label: [Number, String],
      align: { type: String, validator: (e) => ln.includes(e) },
    },
    setup(e, { slots: t }) {
      const o = b(() =>
          e.align !== void 0 ? { verticalAlign: e.align } : null
        ),
        i = b(() => {
          const n = (e.outline === !0 && e.color) || e.textColor;
          return (
            `q-badge flex inline items-center no-wrap q-badge--${
              e.multiLine === !0 ? "multi" : "single"
            }-line` +
            (e.outline === !0
              ? " q-badge--outline"
              : e.color !== void 0
              ? ` bg-${e.color}`
              : "") +
            (n !== void 0 ? ` text-${n}` : "") +
            (e.floating === !0 ? " q-badge--floating" : "") +
            (e.rounded === !0 ? " q-badge--rounded" : "") +
            (e.transparent === !0 ? " q-badge--transparent" : "")
          );
        });
      return () =>
        y(
          "div",
          {
            class: i.value,
            style: o.value,
            role: "status",
            "aria-label": e.label,
          },
          tt(t.default, e.label !== void 0 ? [e.label] : [])
        );
    },
  }),
  Ye = Z({
    name: "QTabPanel",
    props: Lt,
    setup(e, { slots: t }) {
      return () =>
        y("div", { class: "q-tab-panel", role: "tabpanel" }, me(t.default));
    },
  }),
  sn = Z({
    name: "QTabPanels",
    props: { ...Bt, ...St },
    emits: $t,
    setup(e, { slots: t }) {
      const o = ce(),
        i = Tt(e, o.proxy.$q),
        { updatePanelsList: n, getPanelContent: a, panelDirectives: l } = Et(),
        u = b(
          () =>
            "q-tab-panels q-panel-parent" +
            (i.value === !0 ? " q-tab-panels--dark q-dark" : "")
        );
      return () => (
        n(t),
        Pt("div", { class: u.value }, a(), "pan", e.swipeable, () => l.value)
      );
    },
  });
const rn = { class: "skill" },
  un = { class: "q-mx-xl q-my-md" },
  cn = { class: "q-mt-md text-center" },
  dn = { class: "q-mt-md text-center" },
  vn = { class: "q-mt-md text-center" },
  fn = {
    __name: "SkillLogos",
    setup(e) {
      const t = Ct(),
        o = ["lang", "lib", "dev"],
        i = x(o[0]),
        a = setInterval(() => {
          const c = (o.indexOf(i.value) + 1) % o.length;
          i.value = o[c];
        }, 1e4);
      Y(() => {
        clearInterval(a);
      });
      const l = {
        Languages: [
          { src: "static/logos/html.png", alt: "HTML" },
          { src: "static/logos/css.png", alt: "CSS" },
          { src: "static/logos/python.png", alt: "Python" },
          { src: "static/logos/sql.png", alt: "SQL" },
          { src: "static/logos/postgresql.png", alt: "PostgreSQL" },
          { src: "static/logos/javascript.png", alt: "JavaScript" },
          { src: "static/logos/php.png", alt: "PHP" },
          { src: "static/logos/java.png", alt: "Java" },
          { src: "static/logos/c.png", alt: "C" },
        ],
        "Frameworks & Libraries": [
          { src: "static/logos/vue-js.png", alt: "Vue.js" },
          { src: "/favicon.ico", alt: "Quasar" },
          { src: "", alt: "Flask" },
          { src: "static/logos/FastAPI.png", alt: "FastAPI" },
        ],
        "Developer Tools": [
          { src: "static/logos/git.png", alt: "Git" },
          { src: "", alt: "Github" },
          { src: "static/logos/docker.png", alt: "Docker" },
          { src: "static/logos/jupyter.png", alt: "Jupyter Notebook" },
          { src: "static/logos/vsCode.png", alt: "VS Code" },
        ],
      };
      return (
        ha(() => {
          t.dark.isActive
            ? ((l["Frameworks & Libraries"][2].src =
                "static/logos/flaskDM.png"),
              (l["Developer Tools"][1].src =
                "static/socials/github/githubDarkMode.png"))
            : ((l["Frameworks & Libraries"][2].src = "static/logos/flask.png"),
              (l["Developer Tools"][1].src =
                "static/socials/github/github.png"));
        }),
        oe(() => {
          const u = document.querySelectorAll(".skill"),
            c = new IntersectionObserver(
              (s) => {
                s.forEach((v) => {
                  v.target.classList.toggle("animated", v.isIntersecting),
                    v.target.classList.toggle("slideInLeft", v.isIntersecting),
                    v.target.classList.toggle("fast", v.isIntersecting),
                    v.isIntersecting && c.unobserve(v.target);
                });
              },
              { rootMargin: "-50px" }
            );
          u.forEach((s) => {
            c.observe(s);
          });
        }),
        (u, c) => (
          ne(),
          ie("div", rn, [
            d(
              "div",
              {
                class: J([
                  "text-weight-bolder text-center text-h5 q-pt-xl",
                  C(t).dark.isActive ? "text-grey-8" : "text-grey-6",
                ]),
              },
              [
                w(Ce, { name: "construction" }),
                fe("Technologies I have experience with ... "),
              ],
              2
            ),
            d("div", un, [
              w(
                on,
                {
                  modelValue: i.value,
                  "onUpdate:modelValue": c[0] || (c[0] = (s) => (i.value = s)),
                  dense: "",
                  class: "text-grey",
                  "active-color": C(t).dark.isActive ? "deep-purple" : "indigo",
                  "indicator-color": C(t).dark.isActive
                    ? "deep-purple"
                    : "indigo",
                  align: "justify",
                  "narrow-indicator": "",
                  style: {
                    "border-top-left-radius": "10px",
                    "border-top-right-radius": "10px",
                  },
                },
                {
                  default: N(() => [
                    w(Je, {
                      class: "q-py-sm",
                      name: "lang",
                      label: "Languages",
                    }),
                    w(Je, {
                      class: "q-py-sm",
                      name: "lib",
                      label: "Frameworks & Libraries",
                    }),
                    w(Je, {
                      class: "q-py-sm",
                      name: "dev",
                      label: "Developer Tools",
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue", "active-color", "indicator-color"]
              ),
              w(
                sn,
                {
                  class: J(["q-py-lg", C(t).dark.isActive ? "" : "bg-grey-2"]),
                  style: {
                    "border-bottom-left-radius": "10px",
                    "border-bottom-right-radius": "10px",
                  },
                  modelValue: i.value,
                  "onUpdate:modelValue": c[1] || (c[1] = (s) => (i.value = s)),
                  animated: "",
                },
                {
                  default: N(() => [
                    w(
                      Ye,
                      { name: "lang", class: "row justify-evenly" },
                      {
                        default: N(() => [
                          (ne(!0),
                          ie(
                            Ee,
                            null,
                            Oe(
                              l.Languages,
                              (s, v) => (
                                ne(),
                                ie("div", { key: v }, [
                                  w(
                                    Re,
                                    {
                                      class: "q-mx-sm",
                                      style: { width: "96px", height: "96px" },
                                      src: s.src,
                                      alt: s.alt,
                                    },
                                    null,
                                    8,
                                    ["src", "alt"]
                                  ),
                                  d("div", cn, [
                                    w(
                                      Xe,
                                      {
                                        class: "q-pa-sm",
                                        rounded: "",
                                        color: C(t).dark.isActive
                                          ? "deep-purple"
                                          : "indigo",
                                      },
                                      {
                                        default: N(() => [fe(ye(s.alt), 1)]),
                                        _: 2,
                                      },
                                      1032,
                                      ["color"]
                                    ),
                                  ]),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                    w(
                      Ye,
                      { name: "lib", class: "row justify-evenly" },
                      {
                        default: N(() => [
                          (ne(!0),
                          ie(
                            Ee,
                            null,
                            Oe(
                              l["Frameworks & Libraries"],
                              (s, v) => (
                                ne(),
                                ie("div", { key: v }, [
                                  w(
                                    Re,
                                    {
                                      class: "q-mx-sm",
                                      style: { width: "96px", height: "96px" },
                                      src: s.src,
                                      alt: s.alt,
                                    },
                                    null,
                                    8,
                                    ["src", "alt"]
                                  ),
                                  d("div", dn, [
                                    w(
                                      Xe,
                                      {
                                        class: "q-pa-sm",
                                        rounded: "",
                                        color: C(t).dark.isActive
                                          ? "deep-purple"
                                          : "indigo",
                                      },
                                      {
                                        default: N(() => [fe(ye(s.alt), 1)]),
                                        _: 2,
                                      },
                                      1032,
                                      ["color"]
                                    ),
                                  ]),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                    w(
                      Ye,
                      { name: "dev", class: "row justify-evenly" },
                      {
                        default: N(() => [
                          (ne(!0),
                          ie(
                            Ee,
                            null,
                            Oe(
                              l["Developer Tools"],
                              (s, v) => (
                                ne(),
                                ie("div", { key: v }, [
                                  w(
                                    Re,
                                    {
                                      class: "q-mx-sm",
                                      style: { width: "96px", height: "96px" },
                                      src: s.src,
                                      alt: s.alt,
                                    },
                                    null,
                                    8,
                                    ["src", "alt"]
                                  ),
                                  d("div", vn, [
                                    w(
                                      Xe,
                                      {
                                        class: "q-pa-sm",
                                        rounded: "",
                                        color: C(t).dark.isActive
                                          ? "deep-purple"
                                          : "indigo",
                                      },
                                      {
                                        default: N(() => [fe(ye(s.alt), 1)]),
                                        _: 2,
                                      },
                                      1032,
                                      ["color"]
                                    ),
                                  ]),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["class", "modelValue"]
              ),
            ]),
          ])
        )
      );
    },
  },
  mn = { class: "bropic" },
  hn = { class: "text-white absolute-center text-h2 full-width" },
  gn = d("span", { class: "text-black typed-text" }, "Hi, I'm", -1),
  bn = { class: "typed-text" },
  yn = d("span", { class: "blinking-cursor" }, "|", -1),
  qt = 100,
  pn = 50,
  kt = 2e3,
  wn = {
    __name: "TypeAnimation",
    setup(e) {
      const t = x(""),
        o = x(!1),
        i = x([
          "Hamzeh Abdallah",
          "a Software Engineer",
          "a gamer at heart",
          "a Family Guy",
        ]),
        n = x(0),
        a = x(0),
        l = () => {
          a.value < i.value[n.value].length
            ? (o.value || (o.value = !0),
              (t.value += i.value[n.value].charAt(a.value)),
              (a.value += 1),
              setTimeout(l, qt))
            : ((o.value = !1), setTimeout(u, kt));
        },
        u = () => {
          a.value > 0
            ? (o.value || (o.value = !0),
              (t.value = i.value[n.value].substring(0, a.value - 1)),
              (a.value -= 1),
              setTimeout(u, pn))
            : ((o.value = !1),
              (n.value += 1),
              n.value >= i.value.length && (n.value = 0),
              setTimeout(l, qt + 1e3));
        };
      return (
        oe(() => {
          setTimeout(l, kt + 200);
        }),
        (c, s) => (
          ne(),
          ie("div", null, [
            d("div", mn, [
              d("div", hn, [
                gn,
                d("span", bn, "\xA0" + ye(t.value), 1),
                yn,
                d(
                  "span",
                  { class: J(["cursor", { typing: o.value }]) },
                  "\xA0",
                  2
                ),
              ]),
            ]),
          ])
        )
      );
    },
  },
  xn = { class: "q-pa-md" },
  _n = d("div", { class: "text-h6" }, "More About Me", -1),
  qn = d("div", { class: "text-caption" }, "Background & History", -1),
  kn = d(
    "div",
    { class: "q-mb-lg", id: "born" },
    " Let's start from the day I was born which would be October 13, 2001 at St. Joseph's Hospital in Paterson, New Jersey. From this day onward I was blessed with two amazing parents along with a supportive family, including the extended family. At the time my mother was caring for two children, myself and my older sister, only a year between us. We were living in Woodridge, NJ, where my father was running an Italian restaurant, named Emilia Romagna, with his brother. My father would work hard to support the two children and wife he had back home by working long shifts. What made my father an even harder worker is that ever since he moved from Jordan to the United States, he would try to make a life not only for himself but for his mother and his siblings plus his children and his wife. A year later, my parents brought a younger sister into this world and after a few quiet years, three to be exact, I was given a baby brother that can be spotted in the picture in the background. ",
    -1
  ),
  Sn = d(
    "div",
    { id: "education" },
    [
      d(
        "div",
        { class: "q-mb-lg" },
        " When I was three years old, I moved to a new house located in Ridgewood, NJ. Today the year is 2023 and I am almost 22 years old, making it close to 19 years since I have been living here, not just a house but a place I call home. Shortly after when I turned four years old, my parents placed me in a private Islamic school, name Al-Hikmah Elementary School that tought children from ages 3-12 (PreK - 6th Grade). Here is when and where my journey began, where the pieces of my life were being put together, where I would make friends that would become brothers today, where the foundation of everyting all began. With a blink of an eye, sixth grade ended quickly, and it was time to move the a different school, named Al-Ghazaly High School. I also spent the remainder of middle school and high school here from 7th grade all the way until senior year. If it weren't for my family, friends, and teachers I would not be here today. "
      ),
      d(
        "div",
        null,
        " Long story short, during senior year I decided to enroll at New Jersey Institute of Technology or NJIT for short for undergrad where I would be majoring in Computer Science. I spent 1.5 semesters in person and on campus before COVID-19 hit the US. Everything here shifted, from studies to personal life, it was so different. When my third semester came in, I was stressing 24/7 and believed it to be the degree I was pursuing. With the third semester coming to an end, it was at this point I decided to change career paths and transfer to a different school. The new career I chose was to become a Lawyer and transferred to Montclair State University. After only one semester of studying Law, I immediately switched back to Computer Science as I knew that I was not cut out for it and that I was better suited for my previous studies as the concepts made more sense to me and came easier than anything else. I can still remember the first day of university as if it were yesterday. "
      ),
    ],
    -1
  ),
  Tn = { class: "q-mt-lg" },
  Cn = d(
    "div",
    { class: "q-mb-md text-center text-h5" },
    " Grow Up With Me Through Pictures ",
    -1
  ),
  In = d(
    "video",
    { style: { width: "100%", height: "inherit" }, controls: "", autoplay: "" },
    [d("source", { src: "static/cgrad.MP4", type: "video/mp4" })],
    -1
  ),
  Pn = { class: "q-mt-lg text-body2 text-center text-grey" },
  An = {
    class: "q-pa-md row justify-center q-gutter-x-xl text-h5 items-center",
  },
  Ln = { style: { "max-width": "1000px" } },
  Bn = d(
    "div",
    {
      class:
        "animation text-h5 text-center text-weight-bold text-grey-5 q-my-lg",
    },
    [
      d(
        "div",
        null,
        " \u{1F44B} Hi everyone!! Firstly, I want to thank you for taking the time to view my portfolio. "
      ),
      d(
        "div",
        null,
        " If you couldn't tell from the animation above, my name is Hamzeh Abdallah. "
      ),
    ],
    -1
  ),
  $n = d(
    "div",
    { class: "animation q-my-lg" },
    " I am 22 years old. I live at home with my mother and father along with my brother and two sisters. A little more about myself: ",
    -1
  ),
  En = d(
    "img",
    {
      class: "q-mr-md",
      width: "25",
      height: "25",
      src: "https://img.icons8.com/color/48/palestine.png",
      alt: "palestine_flag",
    },
    null,
    -1
  ),
  Mn = d("div", { class: "q-mr-sm" }, "\u{1F393}", -1),
  Rn = d("div", { class: "q-mr-sm" }, "\u{1F4BB}", -1),
  Dn = { class: "q-px-xl q-pt-xl" },
  Fn = { class: "q-py-lg q-mx-xl", style: { width: "400px" } },
  zn = { class: "animation" },
  Vn = ["src"],
  jn = d(
    "div",
    { class: "animation text-caption" },
    " I've been a gamer since I was three, starting with Nintendo's Mario games, and I've now transitioned into a dedicated PC gamer. Whether it be with family and friends or solo sessions I always seem to enjoy my time and the moments. Gaming titles such as League of Legends, Rocket League, Teamfight Tactics, Valorant, etc. are the games I have been playing recently. ",
    -1
  ),
  Hn = { class: "q-py-lg q-mx-xl", style: { width: "350px" } },
  Nn = { class: "animation" },
  Qn = ["src"],
  On = d(
    "div",
    { class: "animation text-caption" },
    " Out of all the sports out there, I believe basketball to be the one I enjoy the most. Most if not all my PE classes throughout elementary, middle, and high school my classmates and I would play basketball. Although I do not watch any professional basketball, I still consider myself to love the sport. ",
    -1
  ),
  Wn = { class: "q-py-lg q-mx-xl", style: { width: "400px" } },
  Un = { class: "animation" },
  Kn = ["src"],
  Gn = d(
    "div",
    { class: "animation text-caption" },
    " My family and friends are everything to me in my life. Without them I would not be where I am today. Whenever I have free time I enjoy spending that time with those closest to me and engage in meaningful conversations or even just enjoying each other's company. ",
    -1
  ),
  Jn = { class: "q-py-lg q-mx-xl", style: { width: "400px" } },
  Xn = { class: "animation" },
  Yn = ["src"],
  Zn = ["src"],
  ei = d(
    "div",
    { class: "animation text-caption" },
    " As a person, I don't have much of a preference for having a good time. I am always down for anything as long as we're enjoying each other's company. Anything outdoors such as bowling, hiking, a walk on the beach, or even sitting at home and playing games. ",
    -1
  ),
  ti = { class: "q-py-xl q-mx-xl", style: { width: "400px" } },
  ai = { class: "animation" },
  ni = ["src"],
  ii = d(
    "div",
    { class: "animation text-caption" },
    " In my free time or even when I am busy with tasks, music is something I look forward to and never fails to lift me up or make things slightly better. It sets a mood which allows me to unwind after a long/busy day or even when going to the gym. ",
    -1
  ),
  ui = {
    __name: "IndexPage",
    setup(e) {
      const t = Ct(),
        o = x(!1),
        i = x(!0),
        n = x(1),
        a = x([
          "Baby picture of myself",
          "Making Pizza at Home",
          "Elementary School",
          "High School Graduation",
          "College Graduation",
        ]);
      return (
        G(n, () => {
          n.value == 5 &&
            ((i.value = !1),
            setTimeout(() => {
              i.value = !0;
            }, 2750));
        }),
        oe(() => {
          const l = document.querySelectorAll(".animation"),
            u = new IntersectionObserver((c) => {
              c.forEach((s) => {
                s.target.classList.toggle("animated", s.isIntersecting),
                  s.target.classList.toggle("fadeIn", s.isIntersecting),
                  s.target.classList.toggle("slow", s.isIntersecting),
                  s.isIntersecting && u.unobserve(s.target);
              });
            });
          l.forEach((c) => {
            u.observe(c);
          });
        }),
        (l, u) => (
          ne(),
          ie(
            Ee,
            null,
            [
              w(Ut),
              w(wn),
              d("div", xn, [
                w(
                  Wa,
                  {
                    modelValue: o.value,
                    "onUpdate:modelValue":
                      u[1] || (u[1] = (c) => (o.value = c)),
                    "full-width": C(t).platform.is.mobile,
                  },
                  {
                    default: N(() => [
                      w(
                        Ot,
                        {
                          flat: "",
                          bordered: "",
                          style: { "border-radius": "1rem" },
                        },
                        {
                          default: N(() => [
                            w(rt, null, { default: N(() => [_n, qn]), _: 1 }),
                            w(ut),
                            w(
                              rt,
                              {
                                style: { "max-height": "70vh" },
                                class: "text-body1 scroll q-my-sm",
                              },
                              {
                                default: N(() => [
                                  d(
                                    "div",
                                    {
                                      class: J(
                                        C(t).platform.is.mobile ? "" : "q-mx-xl"
                                      ),
                                    },
                                    [
                                      kn,
                                      Sn,
                                      d("div", Tn, [
                                        Cn,
                                        w(
                                          za,
                                          {
                                            style: {
                                              "border-radius": "1rem",
                                              height: "30vh",
                                            },
                                            infinite: "",
                                            arrows: "",
                                            autoplay: i.value,
                                            animated: "",
                                            modelValue: n.value,
                                            "onUpdate:modelValue":
                                              u[0] ||
                                              (u[0] = (c) => (n.value = c)),
                                            "transition-prev": "slide-right",
                                            "transition-next": "slide-left",
                                          },
                                          {
                                            default: N(() => [
                                              w(qe, {
                                                name: 1,
                                                "img-src":
                                                  "static/images/babypic.jpg",
                                              }),
                                              w(qe, {
                                                name: 2,
                                                "img-src":
                                                  "static/images/makingPizza.jpeg",
                                              }),
                                              w(qe, {
                                                name: 3,
                                                "img-src":
                                                  "static/images/elementary.jpeg",
                                              }),
                                              w(qe, {
                                                name: 4,
                                                "img-src":
                                                  "static/images/hsgrad.jpg",
                                              }),
                                              w(
                                                qe,
                                                { name: 5 },
                                                { default: N(() => [In]), _: 1 }
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["autoplay", "modelValue"]
                                        ),
                                        d(
                                          "div",
                                          Pn,
                                          " Figure " +
                                            ye(n.value) +
                                            ": \xA0" +
                                            ye(a.value[n.value - 1]),
                                          1
                                        ),
                                      ]),
                                    ],
                                    2
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue", "full-width"]
                ),
              ]),
              d("div", An, [
                w(Re, {
                  class: "animation",
                  src: "static/images/portrait.jpg",
                  style: {
                    width: "500px",
                    height: "45vh",
                    "border-radius": "1rem",
                  },
                }),
                d("div", Ln, [
                  Bn,
                  $n,
                  w(
                    Ia,
                    { class: "text-weight-regular" },
                    {
                      default: N(() => [
                        w(
                          We,
                          { class: "animation" },
                          {
                            default: N(() => [
                              En,
                              fe(
                                " I am a Palestinian American but was born and raised in NJ "
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        w(
                          We,
                          { class: "animation" },
                          {
                            default: N(() => [
                              Mn,
                              fe(
                                " I received my Bachelors Degree from Montclair State University and graduated with a 3.919 GPA awarded with the title Summa Cum Laude "
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        w(
                          We,
                          { class: "animation" },
                          {
                            default: N(() => [
                              Rn,
                              fe(
                                " I currently work as a software engineer at AYA Holdings Group, where I collaborate with my team to develop and deploy a full stack application. "
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  d(
                    "div",
                    {
                      class:
                        "text-body2 q-mt-lg cursor-pointer text-grey text-right",
                      onClick: u[2] || (u[2] = (c) => (o.value = !0)),
                    },
                    " View More... "
                  ),
                ]),
              ]),
              w(fn),
              d("div", Dn, [
                d(
                  "div",
                  {
                    class: J([
                      "animation gt-xs text-weight-bolder text-h4 q-ml-xl q-pb-md",
                      C(t).dark.isActive ? "text-grey-8" : "text-grey-6",
                    ]),
                  },
                  " Hobbies ",
                  2
                ),
                d(
                  "div",
                  {
                    class: J([
                      "animation lt-sm text-center text-weight-bolder text-h4 q-pb-md",
                      C(t).dark.isActive ? "text-grey-8" : "text-grey-6",
                    ]),
                  },
                  " Hobbies ",
                  2
                ),
                w(ut),
                d(
                  "div",
                  {
                    class: J([
                      "row justify-center text-center q-py-xl",
                      C(t).dark.isActive ? "text-white" : "",
                    ]),
                  },
                  [
                    d("div", Fn, [
                      d("div", zn, [
                        d(
                          "img",
                          {
                            class: "animation",
                            src: C(t).dark.isActive
                              ? "static/hobbies/gamesDM.png"
                              : "static/hobbies/games.png",
                            alt: "controller",
                            style: ge([
                              {
                                border: "2px solid",
                                "border-radius": "3rem",
                                padding: "15px",
                              },
                              C(t).dark.isActive
                                ? "border-color: #673ab7;"
                                : " border-color: #3F51B5;",
                            ]),
                          },
                          null,
                          12,
                          Vn
                        ),
                      ]),
                      d(
                        "div",
                        {
                          class: J([
                            "animation text-h6 q-mx-md",
                            C(t).dark.isActive
                              ? "text-deep-purple"
                              : "text-indigo",
                          ]),
                        },
                        " Video Games ",
                        2
                      ),
                      jn,
                    ]),
                    d("div", Hn, [
                      d("div", Nn, [
                        d(
                          "img",
                          {
                            src: C(t).dark.isActive
                              ? "static/hobbies/basketballDM.png"
                              : "static/hobbies/basketball.png",
                            alt: "basketball",
                            style: ge([
                              {
                                border: "2px solid",
                                "border-radius": "3rem",
                                padding: "15px",
                              },
                              C(t).dark.isActive
                                ? "border-color: #673ab7;"
                                : " border-color: #3F51B5;",
                            ]),
                          },
                          null,
                          12,
                          Qn
                        ),
                      ]),
                      d(
                        "div",
                        {
                          class: J([
                            "animation text-h6 q-mx-md",
                            C(t).dark.isActive
                              ? "text-deep-purple"
                              : "text-indigo",
                          ]),
                        },
                        " Basketball ",
                        2
                      ),
                      On,
                    ]),
                    d("div", Wn, [
                      d("div", Un, [
                        d(
                          "img",
                          {
                            src: C(t).dark.isActive
                              ? "static/hobbies/familyDM.png"
                              : "static/hobbies/family.png",
                            alt: "family",
                            style: ge([
                              {
                                border: "2px solid",
                                "border-radius": "3rem",
                                padding: "16px",
                              },
                              C(t).dark.isActive
                                ? "border-color: #673ab7;"
                                : " border-color: #3F51B5;",
                            ]),
                          },
                          null,
                          12,
                          Kn
                        ),
                      ]),
                      d(
                        "div",
                        {
                          class: J([
                            "animation text-h6 q-mx-md",
                            C(t).dark.isActive
                              ? "text-deep-purple"
                              : "text-indigo",
                          ]),
                        },
                        " Family and Friends ",
                        2
                      ),
                      d(
                        "span",
                        {
                          class: J([
                            "animation text-caption text-weight-bolder",
                            C(t).dark.isActive ? "text-amber" : "text-grey",
                          ]),
                        },
                        " I prefer real talk over small talk ",
                        2
                      ),
                      Gn,
                    ]),
                    d("div", Jn, [
                      d("div", Xn, [
                        d(
                          "img",
                          {
                            class: "q-mr-md",
                            src: C(t).dark.isActive
                              ? "static/hobbies/sunDM.png"
                              : "static/hobbies/sun.png",
                            alt: "sun",
                            style: ge([
                              {
                                border: "2px solid",
                                "border-radius": "3rem",
                                padding: "15px",
                              },
                              C(t).dark.isActive
                                ? "border-color: #673ab7;"
                                : " border-color: #3F51B5;",
                            ]),
                          },
                          null,
                          12,
                          Yn
                        ),
                        d(
                          "img",
                          {
                            src: C(t).dark.isActive
                              ? "static/hobbies/homeDM.png"
                              : "static/hobbies/home.png",
                            alt: "Home",
                            style: ge([
                              {
                                border: "2px solid",
                                "border-radius": "3rem",
                                padding: "15px",
                              },
                              C(t).dark.isActive
                                ? "border-color: #673ab7;"
                                : " border-color: #3F51B5;",
                            ]),
                          },
                          null,
                          12,
                          Zn
                        ),
                      ]),
                      d(
                        "div",
                        {
                          class: J([
                            "animation text-h6 q-mx-md",
                            C(t).dark.isActive
                              ? "text-deep-purple"
                              : "text-indigo",
                          ]),
                        },
                        " Outdoors or Indoors ",
                        2
                      ),
                      ei,
                    ]),
                    d("div", ti, [
                      d("div", ai, [
                        d(
                          "img",
                          {
                            src: C(t).dark.isActive
                              ? "static/hobbies/musicDM.png"
                              : "static/hobbies/music.png",
                            alt: "Music",
                            style: ge([
                              {
                                border: "2px solid",
                                "border-radius": "3rem",
                                padding: "10px",
                              },
                              C(t).dark.isActive
                                ? "border-color: #673ab7;"
                                : " border-color: #3F51B5;",
                            ]),
                          },
                          null,
                          12,
                          ni
                        ),
                      ]),
                      d(
                        "div",
                        {
                          class: J([
                            "animation text-h6 q-mx-md",
                            C(t).dark.isActive
                              ? "text-deep-purple"
                              : "text-indigo",
                          ]),
                        },
                        " Music ",
                        2
                      ),
                      ii,
                    ]),
                  ],
                  2
                ),
              ]),
              w(Kt),
            ],
            64
          )
        )
      );
    },
  };
export { ui as default };
