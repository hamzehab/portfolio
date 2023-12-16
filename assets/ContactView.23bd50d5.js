import { u as Be, Q as Oe, a as fe } from "./uid.1dfa7606.js";
import {
  b as Me,
  u as Te,
  a as je,
  f as $e,
  c as Le,
  _ as Pe,
  d as De,
  Q as be,
} from "./FooterComponent.95ddb73b.js";
import {
  D as Ne,
  w as P,
  q as de,
  t as ce,
  an as ze,
  g as le,
  r as T,
  f as w,
  ao as Ue,
  ag as Ve,
  ap as He,
  s as Ke,
  k as W,
  P as Ze,
  S as Qe,
  N as Je,
  h as q,
  aq as ee,
  L as te,
  C as Ye,
  j as oe,
  T as Ge,
  J as We,
  a as Ae,
  m as Xe,
  ar as ye,
  n as me,
  as as et,
  at as tt,
  V as nt,
  W as lt,
  Y as D,
  X as k,
  a0 as ae,
  _ as ge,
  $ as J,
  Q as ot,
  a1 as at,
} from "./index.559d1f88.js";
function rt({ validate: e, resetValidation: t, requiresQForm: i }) {
  const n = Ne(ze, !1);
  if (n !== !1) {
    const { props: u, proxy: d } = le();
    Object.assign(d, { validate: e, resetValidation: t }),
      P(
        () => u.disable,
        (c) => {
          c === !0
            ? (typeof t == "function" && t(), n.unbindComponent(d))
            : n.bindComponent(d);
        }
      ),
      de(() => {
        u.disable !== !0 && n.bindComponent(d);
      }),
      ce(() => {
        u.disable !== !0 && n.unbindComponent(d);
      });
  } else i === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const _e = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  ke = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  xe = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  re =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  se =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  ve = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => _e.test(e),
    hexaColor: (e) => ke.test(e),
    hexOrHexaColor: (e) => xe.test(e),
    rgbColor: (e) => re.test(e),
    rgbaColor: (e) => se.test(e),
    rgbOrRgbaColor: (e) => re.test(e) || se.test(e),
    hexOrRgbColor: (e) => _e.test(e) || re.test(e),
    hexaOrRgbaColor: (e) => ke.test(e) || se.test(e),
    anyColor: (e) => xe.test(e) || re.test(e) || se.test(e),
  },
  st = [!0, !1, "ondemand"],
  it = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: { type: [Boolean, String], validator: (e) => st.includes(e) },
  };
function ut(e, t) {
  const { props: i, proxy: n } = le(),
    u = T(!1),
    d = T(null),
    c = T(null);
  rt({ validate: $, resetValidation: I });
  let v = 0,
    A;
  const M = w(
      () => i.rules !== void 0 && i.rules !== null && i.rules.length !== 0
    ),
    g = w(() => i.disable !== !0 && M.value === !0),
    m = w(() => i.error === !0 || u.value === !0),
    E = w(() =>
      typeof i.errorMessage == "string" && i.errorMessage.length !== 0
        ? i.errorMessage
        : d.value
    );
  P(
    () => i.modelValue,
    () => {
      z();
    }
  ),
    P(
      () => i.reactiveRules,
      (h) => {
        h === !0
          ? A === void 0 &&
            (A = P(
              () => i.rules,
              () => {
                z(!0);
              }
            ))
          : A !== void 0 && (A(), (A = void 0));
      },
      { immediate: !0 }
    ),
    P(e, (h) => {
      h === !0
        ? c.value === null && (c.value = !1)
        : c.value === !1 &&
          ((c.value = !0),
          g.value === !0 &&
            i.lazyRules !== "ondemand" &&
            t.value === !1 &&
            R());
    });
  function I() {
    v++,
      (t.value = !1),
      (c.value = null),
      (u.value = !1),
      (d.value = null),
      R.cancel();
  }
  function $(h = i.modelValue) {
    if (g.value !== !0) return !0;
    const B = ++v,
      G =
        t.value !== !0
          ? () => {
              c.value = !0;
            }
          : () => {},
      H = (V, C) => {
        V === !0 && G(), (u.value = V), (d.value = C || null), (t.value = !1);
      },
      U = [];
    for (let V = 0; V < i.rules.length; V++) {
      const C = i.rules[V];
      let L;
      if (
        (typeof C == "function"
          ? (L = C(h, ve))
          : typeof C == "string" && ve[C] !== void 0 && (L = ve[C](h)),
        L === !1 || typeof L == "string")
      )
        return H(!0, L), !1;
      L !== !0 && L !== void 0 && U.push(L);
    }
    return U.length === 0
      ? (H(!1), !0)
      : ((t.value = !0),
        Promise.all(U).then(
          (V) => {
            if (V === void 0 || Array.isArray(V) === !1 || V.length === 0)
              return B === v && H(!1), !0;
            const C = V.find((L) => L === !1 || typeof L == "string");
            return B === v && H(C !== void 0, C), C === void 0;
          },
          (V) => (B === v && (console.error(V), H(!0)), !1)
        ));
  }
  function z(h) {
    g.value === !0 &&
      i.lazyRules !== "ondemand" &&
      (c.value === !0 || (i.lazyRules !== !0 && h !== !0)) &&
      R();
  }
  const R = Ue($, 0);
  return (
    ce(() => {
      A !== void 0 && A(), R.cancel();
    }),
    Object.assign(n, { resetValidation: I, validate: $ }),
    Ve(n, "hasError", () => m.value),
    {
      isDirtyModel: c,
      hasRules: M,
      hasError: m,
      errorMessage: E,
      validate: $,
      resetValidation: I,
    }
  );
}
const we = /^on[A-Z]/;
function dt(e, t) {
  const i = { listeners: T({}), attributes: T({}) };
  function n() {
    const u = {},
      d = {};
    for (const c in e)
      c !== "class" && c !== "style" && we.test(c) === !1 && (u[c] = e[c]);
    for (const c in t.props) we.test(c) === !0 && (d[c] = t.props[c]);
    (i.attributes.value = u), (i.listeners.value = d);
  }
  return He(n), n(), i;
}
function he(e) {
  return e === void 0 ? `f_${Be()}` : e;
}
function pe(e) {
  return e != null && ("" + e).length !== 0;
}
const ct = {
    ...Te,
    ...it,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: [Number, String],
  },
  ft = [
    "update:modelValue",
    "clear",
    "focus",
    "blur",
    "popupShow",
    "popupHide",
  ];
function mt() {
  const { props: e, attrs: t, proxy: i, vnode: n } = le();
  return {
    isDark: je(e, i.$q),
    editable: w(() => e.disable !== !0 && e.readonly !== !0),
    innerLoading: T(!1),
    focused: T(!1),
    hasPopupOpen: !1,
    splitAttrs: dt(t, n),
    targetUid: T(he(e.for)),
    rootRef: T(null),
    targetRef: T(null),
    controlRef: T(null),
  };
}
function gt(e) {
  const { props: t, emit: i, slots: n, attrs: u, proxy: d } = le(),
    { $q: c } = d;
  let v = null;
  e.hasValue === void 0 && (e.hasValue = w(() => pe(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (l) => {
        i("update:modelValue", l);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = { onFocusin: s, onFocusout: a }),
    Object.assign(e, {
      clearValue: f,
      onControlFocusin: s,
      onControlFocusout: a,
      focus: C,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = w(() => {
        if (t.counter !== !1) {
          const l =
              typeof t.modelValue == "string" || typeof t.modelValue == "number"
                ? ("" + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            _ = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return l + (_ !== void 0 ? " / " + _ : "");
        }
      }));
  const {
      isDirtyModel: A,
      hasRules: M,
      hasError: g,
      errorMessage: m,
      resetValidation: E,
    } = ut(e.focused, e.innerLoading),
    I =
      e.floatingLabel !== void 0
        ? w(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0
          )
        : w(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0
          ),
    $ = w(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        M.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    z = w(() =>
      t.filled === !0
        ? "filled"
        : t.outlined === !0
        ? "outlined"
        : t.borderless === !0
        ? "borderless"
        : t.standout
        ? "standout"
        : "standard"
    ),
    R = w(
      () =>
        `q-field row no-wrap items-start q-field--${z.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") +
        (t.rounded === !0 ? " q-field--rounded" : "") +
        (t.square === !0 ? " q-field--square" : "") +
        (I.value === !0 ? " q-field--float" : "") +
        (B.value === !0 ? " q-field--labeled" : "") +
        (t.dense === !0 ? " q-field--dense" : "") +
        (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") +
        (e.isDark.value === !0 ? " q-field--dark" : "") +
        (e.getControl === void 0 ? " q-field--auto-height" : "") +
        (e.focused.value === !0 ? " q-field--focused" : "") +
        (g.value === !0 ? " q-field--error" : "") +
        (g.value === !0 || e.focused.value === !0
          ? " q-field--highlighted"
          : "") +
        (t.hideBottomSpace !== !0 && $.value === !0
          ? " q-field--with-bottom"
          : "") +
        (t.disable === !0
          ? " q-field--disabled"
          : t.readonly === !0
          ? " q-field--readonly"
          : "")
    ),
    h = w(
      () =>
        "q-field__control relative-position row no-wrap" +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") +
        (g.value === !0
          ? " text-negative"
          : typeof t.standout == "string" &&
            t.standout.length !== 0 &&
            e.focused.value === !0
          ? ` ${t.standout}`
          : t.color !== void 0
          ? ` text-${t.color}`
          : "")
    ),
    B = w(() => t.labelSlot === !0 || t.label !== void 0),
    G = w(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && g.value !== !0
          ? ` text-${t.labelColor}`
          : "")
    ),
    H = w(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: I.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    U = w(() => {
      const l = { for: e.targetUid.value };
      return (
        t.disable === !0
          ? (l["aria-disabled"] = "true")
          : t.readonly === !0 && (l["aria-readonly"] = "true"),
        l
      );
    });
  P(
    () => t.for,
    (l) => {
      e.targetUid.value = he(l);
    }
  );
  function V() {
    const l = document.activeElement;
    let _ = e.targetRef !== void 0 && e.targetRef.value;
    _ &&
      (l === null || l.id !== e.targetUid.value) &&
      (_.hasAttribute("tabindex") === !0 || (_ = _.querySelector("[tabindex]")),
      _ && _ !== l && _.focus({ preventScroll: !0 }));
  }
  function C() {
    Me(V);
  }
  function L() {
    $e(V);
    const l = document.activeElement;
    l !== null && e.rootRef.value.contains(l) && l.blur();
  }
  function s(l) {
    v !== null && (clearTimeout(v), (v = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), i("focus", l));
  }
  function a(l, _) {
    v !== null && clearTimeout(v),
      (v = setTimeout(() => {
        (v = null),
          !(
            document.hasFocus() === !0 &&
            (e.hasPopupOpen === !0 ||
              e.controlRef === void 0 ||
              e.controlRef.value === null ||
              e.controlRef.value.contains(document.activeElement) !== !1)
          ) &&
            (e.focused.value === !0 && ((e.focused.value = !1), i("blur", l)),
            _ !== void 0 && _());
      }));
  }
  function f(l) {
    Ke(l),
      c.platform.is.mobile !== !0
        ? (
            (e.targetRef !== void 0 && e.targetRef.value) ||
            e.rootRef.value
          ).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === "file" && (e.inputRef.value.value = null),
      i("update:modelValue", null),
      i("clear", t.modelValue),
      W(() => {
        E(), c.platform.is.mobile !== !0 && (A.value = !1);
      });
  }
  function r() {
    const l = [];
    return (
      n.prepend !== void 0 &&
        l.push(
          q(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: ee,
            },
            n.prepend()
          )
        ),
      l.push(
        q(
          "div",
          {
            class:
              "q-field__control-container col relative-position row no-wrap q-anchor--skip",
          },
          b()
        )
      ),
      g.value === !0 &&
        t.noErrorIcon === !1 &&
        l.push(
          S("error", [
            q(te, { name: c.iconSet.field.error, color: "negative" }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? l.push(
            S(
              "inner-loading-append",
              n.loading !== void 0 ? n.loading() : [q(Ye, { color: t.color })]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          l.push(
            S("inner-clearable-append", [
              q(te, {
                class: "q-field__focusable-action",
                tag: "button",
                name: t.clearIcon || c.iconSet.field.clear,
                tabindex: 0,
                type: "button",
                "aria-hidden": null,
                role: null,
                onClick: f,
              }),
            ])
          ),
      n.append !== void 0 &&
        l.push(
          q(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: ee,
            },
            n.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        l.push(S("inner-append", e.getInnerAppend())),
      e.getControlChild !== void 0 && l.push(e.getControlChild()),
      l
    );
  }
  function b() {
    const l = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        l.push(
          q(
            "div",
            { class: "q-field__prefix no-pointer-events row items-center" },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        l.push(e.getShadowControl()),
      e.getControl !== void 0
        ? l.push(e.getControl())
        : n.rawControl !== void 0
        ? l.push(n.rawControl())
        : n.control !== void 0 &&
          l.push(
            q(
              "div",
              {
                ref: e.targetRef,
                class: "q-field__native row",
                tabindex: -1,
                ...e.splitAttrs.attributes.value,
                "data-autofocus": t.autofocus === !0 || void 0,
              },
              n.control(H.value)
            )
          ),
      B.value === !0 &&
        l.push(q("div", { class: G.value }, oe(n.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        l.push(
          q(
            "div",
            { class: "q-field__suffix no-pointer-events row items-center" },
            t.suffix
          )
        ),
      l.concat(oe(n.default))
    );
  }
  function p() {
    let l, _;
    g.value === !0
      ? m.value !== null
        ? ((l = [q("div", { role: "alert" }, m.value)]),
          (_ = `q--slot-error-${m.value}`))
        : ((l = oe(n.error)), (_ = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((l = [q("div", t.hint)]), (_ = `q--slot-hint-${t.hint}`))
          : ((l = oe(n.hint)), (_ = "q--slot-hint")));
    const Z = t.counter === !0 || n.counter !== void 0;
    if (t.hideBottomSpace === !0 && Z === !1 && l === void 0) return;
    const x = q("div", { key: _, class: "q-field__messages col" }, l);
    return q(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: ee,
      },
      [
        t.hideBottomSpace === !0
          ? x
          : q(Ge, { name: "q-transition--field-message" }, () => x),
        Z === !0
          ? q(
              "div",
              { class: "q-field__counter" },
              n.counter !== void 0 ? n.counter() : e.computedCounter.value
            )
          : null,
      ]
    );
  }
  function S(l, _) {
    return _ === null
      ? null
      : q(
          "div",
          {
            key: l,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          _
        );
  }
  let y = !1;
  return (
    Ze(() => {
      y = !0;
    }),
    Qe(() => {
      y === !0 && t.autofocus === !0 && d.focus();
    }),
    de(() => {
      Je.value === !0 && t.for === void 0 && (e.targetUid.value = he()),
        t.autofocus === !0 && d.focus();
    }),
    ce(() => {
      v !== null && clearTimeout(v);
    }),
    Object.assign(d, { focus: C, blur: L }),
    function () {
      const _ =
        e.getControl === void 0 && n.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              "data-autofocus": t.autofocus === !0 || void 0,
              ...U.value,
            }
          : U.value;
      return q(
        "label",
        { ref: e.rootRef, class: [R.value, u.class], style: u.style, ..._ },
        [
          n.before !== void 0
            ? q(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: ee,
                },
                n.before()
              )
            : null,
          q(
            "div",
            { class: "q-field__inner relative-position col self-stretch" },
            [
              q(
                "div",
                {
                  ref: e.controlRef,
                  class: h.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                r()
              ),
              $.value === !0 ? p() : null,
            ]
          ),
          n.after !== void 0
            ? q(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: ee,
                },
                n.after()
              )
            : null,
        ]
      );
    }
  );
}
const Ce = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  ue = {
    "#": { pattern: "[\\d]", negate: "[^\\d]" },
    S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
    N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
    A: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    a: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
    X: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    x: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
  },
  Re = Object.keys(ue);
Re.forEach((e) => {
  ue[e].regex = new RegExp(ue[e].pattern);
});
const vt = new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Re.join("") + "])|(.)",
    "g"
  ),
  Se = /[.*+?^${}()|[\]\\]/g,
  O = String.fromCharCode(1),
  ht = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function pt(e, t, i, n) {
  let u, d, c, v, A, M;
  const g = T(null),
    m = T(I());
  function E() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  P(() => e.type + e.autogrow, z),
    P(
      () => e.mask,
      (s) => {
        if (s !== void 0) R(m.value, !0);
        else {
          const a = C(m.value);
          z(), e.modelValue !== a && t("update:modelValue", a);
        }
      }
    ),
    P(
      () => e.fillMask + e.reverseFillMask,
      () => {
        g.value === !0 && R(m.value, !0);
      }
    ),
    P(
      () => e.unmaskedValue,
      () => {
        g.value === !0 && R(m.value);
      }
    );
  function I() {
    if ((z(), g.value === !0)) {
      const s = U(C(e.modelValue));
      return e.fillMask !== !1 ? L(s) : s;
    }
    return e.modelValue;
  }
  function $(s) {
    if (s < u.length) return u.slice(-s);
    let a = "",
      f = u;
    const r = f.indexOf(O);
    if (r > -1) {
      for (let b = s - f.length; b > 0; b--) a += O;
      f = f.slice(0, r) + a + f.slice(r);
    }
    return f;
  }
  function z() {
    if (
      ((g.value = e.mask !== void 0 && e.mask.length !== 0 && E()),
      g.value === !1)
    ) {
      (v = void 0), (u = ""), (d = "");
      return;
    }
    const s = Ce[e.mask] === void 0 ? e.mask : Ce[e.mask],
      a =
        typeof e.fillMask == "string" && e.fillMask.length !== 0
          ? e.fillMask.slice(0, 1)
          : "_",
      f = a.replace(Se, "\\$&"),
      r = [],
      b = [],
      p = [];
    let S = e.reverseFillMask === !0,
      y = "",
      l = "";
    s.replace(vt, (j, o, F, Q, K) => {
      if (Q !== void 0) {
        const N = ue[Q];
        p.push(N),
          (l = N.negate),
          S === !0 &&
            (b.push(
              "(?:" +
                l +
                "+)?(" +
                N.pattern +
                "+)?(?:" +
                l +
                "+)?(" +
                N.pattern +
                "+)?"
            ),
            (S = !1)),
          b.push("(?:" + l + "+)?(" + N.pattern + ")?");
      } else if (F !== void 0)
        (y = "\\" + (F === "\\" ? "" : F)),
          p.push(F),
          r.push("([^" + y + "]+)?" + y + "?");
      else {
        const N = o !== void 0 ? o : K;
        (y = N === "\\" ? "\\\\\\\\" : N.replace(Se, "\\\\$&")),
          p.push(N),
          r.push("([^" + y + "]+)?" + y + "?");
      }
    });
    const _ = new RegExp(
        "^" +
          r.join("") +
          "(" +
          (y === "" ? "." : "[^" + y + "]") +
          "+)?" +
          (y === "" ? "" : "[" + y + "]*") +
          "$"
      ),
      Z = b.length - 1,
      x = b.map((j, o) =>
        o === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + f + "*" + j)
          : o === Z
          ? new RegExp(
              "^" +
                j +
                "(" +
                (l === "" ? "." : l) +
                "+)?" +
                (e.reverseFillMask === !0 ? "$" : f + "*")
            )
          : new RegExp("^" + j)
      );
    (c = p),
      (v = (j) => {
        const o = _.exec(
          e.reverseFillMask === !0 ? j : j.slice(0, p.length + 1)
        );
        o !== null && (j = o.slice(1).join(""));
        const F = [],
          Q = x.length;
        for (let K = 0, N = j; K < Q; K++) {
          const X = x[K].exec(N);
          if (X === null) break;
          (N = N.slice(X.shift().length)), F.push(...X);
        }
        return F.length !== 0 ? F.join("") : j;
      }),
      (u = p.map((j) => (typeof j == "string" ? j : O)).join("")),
      (d = u.split(O).join(a));
  }
  function R(s, a, f) {
    const r = n.value,
      b = r.selectionEnd,
      p = r.value.length - b,
      S = C(s);
    a === !0 && z();
    const y = U(S),
      l = e.fillMask !== !1 ? L(y) : y,
      _ = m.value !== l;
    r.value !== l && (r.value = l),
      _ === !0 && (m.value = l),
      document.activeElement === r &&
        W(() => {
          if (l === d) {
            const x = e.reverseFillMask === !0 ? d.length : 0;
            r.setSelectionRange(x, x, "forward");
            return;
          }
          if (f === "insertFromPaste" && e.reverseFillMask !== !0) {
            const x = r.selectionEnd;
            let j = b - 1;
            for (let o = A; o <= j && o < x; o++) u[o] !== O && j++;
            B.right(r, j);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(f) > -1
          ) {
            const x =
              e.reverseFillMask === !0
                ? b === 0
                  ? l.length > y.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      l.length - (l === d ? 0 : Math.min(y.length, p) + 1)
                    ) + 1
                : b;
            r.setSelectionRange(x, x, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (_ === !0) {
              const x = Math.max(
                0,
                l.length - (l === d ? 0 : Math.min(y.length, p + 1))
              );
              x === 1 && b === 1
                ? r.setSelectionRange(x, x, "forward")
                : B.rightReverse(r, x);
            } else {
              const x = l.length - p;
              r.setSelectionRange(x, x, "backward");
            }
          else if (_ === !0) {
            const x = Math.max(0, u.indexOf(O), Math.min(y.length, b) - 1);
            B.right(r, x);
          } else {
            const x = b - 1;
            B.right(r, x);
          }
        });
    const Z = e.unmaskedValue === !0 ? C(l) : l;
    String(e.modelValue) !== Z && i(Z, !0);
  }
  function h(s, a, f) {
    const r = U(C(s.value));
    (a = Math.max(0, u.indexOf(O), Math.min(r.length, a))),
      (A = a),
      s.setSelectionRange(a, f, "forward");
  }
  const B = {
    left(s, a) {
      const f = u.slice(a - 1).indexOf(O) === -1;
      let r = Math.max(0, a - 1);
      for (; r >= 0; r--)
        if (u[r] === O) {
          (a = r), f === !0 && a++;
          break;
        }
      if (r < 0 && u[a] !== void 0 && u[a] !== O) return B.right(s, 0);
      a >= 0 && s.setSelectionRange(a, a, "backward");
    },
    right(s, a) {
      const f = s.value.length;
      let r = Math.min(f, a + 1);
      for (; r <= f; r++)
        if (u[r] === O) {
          a = r;
          break;
        } else u[r - 1] === O && (a = r);
      if (r > f && u[a - 1] !== void 0 && u[a - 1] !== O) return B.left(s, f);
      s.setSelectionRange(a, a, "forward");
    },
    leftReverse(s, a) {
      const f = $(s.value.length);
      let r = Math.max(0, a - 1);
      for (; r >= 0; r--)
        if (f[r - 1] === O) {
          a = r;
          break;
        } else if (f[r] === O && ((a = r), r === 0)) break;
      if (r < 0 && f[a] !== void 0 && f[a] !== O) return B.rightReverse(s, 0);
      a >= 0 && s.setSelectionRange(a, a, "backward");
    },
    rightReverse(s, a) {
      const f = s.value.length,
        r = $(f),
        b = r.slice(0, a + 1).indexOf(O) === -1;
      let p = Math.min(f, a + 1);
      for (; p <= f; p++)
        if (r[p - 1] === O) {
          (a = p), a > 0 && b === !0 && a--;
          break;
        }
      if (p > f && r[a - 1] !== void 0 && r[a - 1] !== O)
        return B.leftReverse(s, f);
      s.setSelectionRange(a, a, "forward");
    },
  };
  function G(s) {
    t("click", s), (M = void 0);
  }
  function H(s) {
    if ((t("keydown", s), We(s) === !0)) return;
    const a = n.value,
      f = a.selectionStart,
      r = a.selectionEnd;
    if ((s.shiftKey || (M = void 0), s.keyCode === 37 || s.keyCode === 39)) {
      s.shiftKey &&
        M === void 0 &&
        (M = a.selectionDirection === "forward" ? f : r);
      const b =
        B[
          (s.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      if ((s.preventDefault(), b(a, M === f ? r : f), s.shiftKey)) {
        const p = a.selectionStart;
        a.setSelectionRange(Math.min(M, p), Math.max(M, p), "forward");
      }
    } else
      s.keyCode === 8 && e.reverseFillMask !== !0 && f === r
        ? (B.left(a, f), a.setSelectionRange(a.selectionStart, r, "backward"))
        : s.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          f === r &&
          (B.rightReverse(a, r),
          a.setSelectionRange(f, a.selectionEnd, "forward"));
  }
  function U(s) {
    if (s == null || s === "") return "";
    if (e.reverseFillMask === !0) return V(s);
    const a = c;
    let f = 0,
      r = "";
    for (let b = 0; b < a.length; b++) {
      const p = s[f],
        S = a[b];
      if (typeof S == "string") (r += S), p === S && f++;
      else if (p !== void 0 && S.regex.test(p))
        (r += S.transform !== void 0 ? S.transform(p) : p), f++;
      else return r;
    }
    return r;
  }
  function V(s) {
    const a = c,
      f = u.indexOf(O);
    let r = s.length - 1,
      b = "";
    for (let p = a.length - 1; p >= 0 && r > -1; p--) {
      const S = a[p];
      let y = s[r];
      if (typeof S == "string") (b = S + b), y === S && r--;
      else if (y !== void 0 && S.regex.test(y))
        do
          (b = (S.transform !== void 0 ? S.transform(y) : y) + b),
            r--,
            (y = s[r]);
        while (f === p && y !== void 0 && S.regex.test(y));
      else return b;
    }
    return b;
  }
  function C(s) {
    return typeof s != "string" || v === void 0
      ? typeof s == "number"
        ? v("" + s)
        : s
      : v(s);
  }
  function L(s) {
    return d.length - s.length <= 0
      ? s
      : e.reverseFillMask === !0 && s.length !== 0
      ? d.slice(0, -s.length) + s
      : s + d.slice(s.length);
  }
  return {
    innerValue: m,
    hasMask: g,
    moveCursorForPaste: h,
    updateMaskValue: R,
    onMaskedKeydown: H,
    onMaskedClick: G,
  };
}
const bt = { name: String };
function yt(e) {
  return w(() => e.name || e.for);
}
function _t(e, t) {
  function i() {
    const n = e.modelValue;
    try {
      const u =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
          ? new ClipboardEvent("").clipboardData
          : void 0;
      return (
        Object(n) === n &&
          ("length" in n ? Array.from(n) : [n]).forEach((d) => {
            u.items.add(d);
          }),
        { files: u.files }
      );
    } catch {
      return { files: void 0 };
    }
  }
  return t === !0
    ? w(() => {
        if (e.type === "file") return i();
      })
    : w(i);
}
const kt =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  xt =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  wt = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  Ct = /[a-z0-9_ -]$/i;
function St(e) {
  return function (i) {
    if (i.type === "compositionend" || i.type === "change") {
      if (i.target.qComposing !== !0) return;
      (i.target.qComposing = !1), e(i);
    } else
      i.type === "compositionupdate" &&
        i.target.qComposing !== !0 &&
        typeof i.data == "string" &&
        (Ae.is.firefox === !0
          ? Ct.test(i.data) === !1
          : kt.test(i.data) === !0 ||
            xt.test(i.data) === !0 ||
            wt.test(i.data) === !0) === !0 &&
        (i.target.qComposing = !0);
  };
}
var ie = Xe({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...ct,
    ...ht,
    ...bt,
    modelValue: { required: !1 },
    shadowText: String,
    type: { type: String, default: "text" },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...ft, "paste", "change", "keydown", "click", "animationend"],
  setup(e, { emit: t, attrs: i }) {
    const { proxy: n } = le(),
      { $q: u } = n,
      d = {};
    let c = NaN,
      v,
      A,
      M = null,
      g;
    const m = T(null),
      E = yt(e),
      {
        innerValue: I,
        hasMask: $,
        moveCursorForPaste: z,
        updateMaskValue: R,
        onMaskedKeydown: h,
        onMaskedClick: B,
      } = pt(e, t, y, m),
      G = _t(e, !0),
      H = w(() => pe(I.value)),
      U = St(p),
      V = mt(),
      C = w(() => e.type === "textarea" || e.autogrow === !0),
      L = w(
        () =>
          C.value === !0 ||
          ["text", "search", "url", "tel", "password"].includes(e.type)
      ),
      s = w(() => {
        const o = {
          ...V.splitAttrs.listeners.value,
          onInput: p,
          onPaste: b,
          onChange: _,
          onBlur: Z,
          onFocus: ye,
        };
        return (
          (o.onCompositionstart =
            o.onCompositionupdate =
            o.onCompositionend =
              U),
          $.value === !0 && ((o.onKeydown = h), (o.onClick = B)),
          e.autogrow === !0 && (o.onAnimationend = S),
          o
        );
      }),
      a = w(() => {
        const o = {
          tabindex: 0,
          "data-autofocus": e.autofocus === !0 || void 0,
          rows: e.type === "textarea" ? 6 : void 0,
          "aria-label": e.label,
          name: E.value,
          ...V.splitAttrs.attributes.value,
          id: V.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          C.value === !1 && (o.type = e.type),
          e.autogrow === !0 && (o.rows = 1),
          o
        );
      });
    P(
      () => e.type,
      () => {
        m.value && (m.value.value = e.modelValue);
      }
    ),
      P(
        () => e.modelValue,
        (o) => {
          if ($.value === !0) {
            if (A === !0 && ((A = !1), String(o) === c)) return;
            R(o);
          } else
            I.value !== o &&
              ((I.value = o),
              e.type === "number" &&
                d.hasOwnProperty("value") === !0 &&
                (v === !0 ? (v = !1) : delete d.value));
          e.autogrow === !0 && W(l);
        }
      ),
      P(
        () => e.autogrow,
        (o) => {
          o === !0
            ? W(l)
            : m.value !== null && i.rows > 0 && (m.value.style.height = "auto");
        }
      ),
      P(
        () => e.dense,
        () => {
          e.autogrow === !0 && W(l);
        }
      );
    function f() {
      Me(() => {
        const o = document.activeElement;
        m.value !== null &&
          m.value !== o &&
          (o === null || o.id !== V.targetUid.value) &&
          m.value.focus({ preventScroll: !0 });
      });
    }
    function r() {
      m.value !== null && m.value.select();
    }
    function b(o) {
      if ($.value === !0 && e.reverseFillMask !== !0) {
        const F = o.target;
        z(F, F.selectionStart, F.selectionEnd);
      }
      t("paste", o);
    }
    function p(o) {
      if (!o || !o.target) return;
      if (e.type === "file") {
        t("update:modelValue", o.target.files);
        return;
      }
      const F = o.target.value;
      if (o.target.qComposing === !0) {
        d.value = F;
        return;
      }
      if ($.value === !0) R(F, !1, o.inputType);
      else if ((y(F), L.value === !0 && o.target === document.activeElement)) {
        const { selectionStart: Q, selectionEnd: K } = o.target;
        Q !== void 0 &&
          K !== void 0 &&
          W(() => {
            o.target === document.activeElement &&
              F.indexOf(o.target.value) === 0 &&
              o.target.setSelectionRange(Q, K);
          });
      }
      e.autogrow === !0 && l();
    }
    function S(o) {
      t("animationend", o), l();
    }
    function y(o, F) {
      (g = () => {
        (M = null),
          e.type !== "number" &&
            d.hasOwnProperty("value") === !0 &&
            delete d.value,
          e.modelValue !== o &&
            c !== o &&
            ((c = o),
            F === !0 && (A = !0),
            t("update:modelValue", o),
            W(() => {
              c === o && (c = NaN);
            })),
          (g = void 0);
      }),
        e.type === "number" && ((v = !0), (d.value = o)),
        e.debounce !== void 0
          ? (M !== null && clearTimeout(M),
            (d.value = o),
            (M = setTimeout(g, e.debounce)))
          : g();
    }
    function l() {
      requestAnimationFrame(() => {
        const o = m.value;
        if (o !== null) {
          const F = o.parentNode.style,
            { scrollTop: Q } = o,
            { overflowY: K, maxHeight: N } =
              u.platform.is.firefox === !0 ? {} : window.getComputedStyle(o),
            X = K !== void 0 && K !== "scroll";
          X === !0 && (o.style.overflowY = "hidden"),
            (F.marginBottom = o.scrollHeight - 1 + "px"),
            (o.style.height = "1px"),
            (o.style.height = o.scrollHeight + "px"),
            X === !0 &&
              (o.style.overflowY =
                parseInt(N, 10) < o.scrollHeight ? "auto" : "hidden"),
            (F.marginBottom = ""),
            (o.scrollTop = Q);
        }
      });
    }
    function _(o) {
      U(o),
        M !== null && (clearTimeout(M), (M = null)),
        g !== void 0 && g(),
        t("change", o.target.value);
    }
    function Z(o) {
      o !== void 0 && ye(o),
        M !== null && (clearTimeout(M), (M = null)),
        g !== void 0 && g(),
        (v = !1),
        (A = !1),
        delete d.value,
        e.type !== "file" &&
          setTimeout(() => {
            m.value !== null &&
              (m.value.value = I.value !== void 0 ? I.value : "");
          });
    }
    function x() {
      return d.hasOwnProperty("value") === !0
        ? d.value
        : I.value !== void 0
        ? I.value
        : "";
    }
    ce(() => {
      Z();
    }),
      de(() => {
        e.autogrow === !0 && l();
      }),
      Object.assign(V, {
        innerValue: I,
        fieldClass: w(
          () =>
            `q-${C.value === !0 ? "textarea" : "input"}` +
            (e.autogrow === !0 ? " q-textarea--autogrow" : "")
        ),
        hasShadow: w(
          () =>
            e.type !== "file" &&
            typeof e.shadowText == "string" &&
            e.shadowText.length !== 0
        ),
        inputRef: m,
        emitValue: y,
        hasValue: H,
        floatingLabel: w(
          () =>
            (H.value === !0 &&
              (e.type !== "number" || isNaN(I.value) === !1)) ||
            pe(e.displayValue)
        ),
        getControl: () =>
          q(C.value === !0 ? "textarea" : "input", {
            ref: m,
            class: ["q-field__native q-placeholder", e.inputClass],
            style: e.inputStyle,
            ...a.value,
            ...s.value,
            ...(e.type !== "file" ? { value: x() } : G.value),
          }),
        getShadowControl: () =>
          q(
            "div",
            {
              class:
                "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                (C.value === !0 ? "" : " text-no-wrap"),
            },
            [q("span", { class: "invisible" }, x()), q("span", e.shadowText)]
          ),
      });
    const j = gt(V);
    return (
      Object.assign(n, {
        focus: f,
        select: r,
        getNativeElement: () => m.value,
      }),
      Ve(n, "nativeEl", () => m.value),
      j
    );
  },
});
const ne = { _origin: "https://api.emailjs.com" },
  qt = (e, t = "https://api.emailjs.com") => {
    (ne._userID = e), (ne._origin = t);
  },
  Fe = (e, t, i) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!i)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class qe {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const Ie = (e, t, i = {}) =>
    new Promise((n, u) => {
      const d = new XMLHttpRequest();
      d.addEventListener("load", ({ target: c }) => {
        const v = new qe(c);
        v.status === 200 || v.text === "OK" ? n(v) : u(v);
      }),
        d.addEventListener("error", ({ target: c }) => {
          u(new qe(c));
        }),
        d.open("POST", ne._origin + e, !0),
        Object.keys(i).forEach((c) => {
          d.setRequestHeader(c, i[c]);
        }),
        d.send(t);
    }),
  Mt = (e, t, i, n) => {
    const u = n || ne._userID;
    Fe(u, e, t);
    const d = {
      lib_version: "3.11.0",
      user_id: u,
      service_id: e,
      template_id: t,
      template_params: i,
    };
    return Ie("/api/v1.0/email/send", JSON.stringify(d), {
      "Content-type": "application/json",
    });
  },
  Vt = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  At = (e, t, i, n) => {
    const u = n || ne._userID,
      d = Vt(i);
    Fe(u, e, t);
    const c = new FormData(d);
    return (
      c.append("lib_version", "3.11.0"),
      c.append("service_id", e),
      c.append("template_id", t),
      c.append("user_id", u),
      Ie("/api/v1.0/email/send-form", c)
    );
  };
var Rt = { init: qt, send: Mt, sendForm: At };
function Ft(e) {
  return et(e) === !0
    ? "__q_date|" + e.toUTCString()
    : tt(e) === !0
    ? "__q_expr|" + e.source
    : typeof e == "number"
    ? "__q_numb|" + e
    : typeof e == "boolean"
    ? "__q_bool|" + (e ? "1" : "0")
    : typeof e == "string"
    ? "__q_strn|" + e
    : typeof e == "function"
    ? "__q_strn|" + e.toString()
    : e === Object(e)
    ? "__q_objt|" + JSON.stringify(e)
    : e;
}
function It(e) {
  if (e.length < 9) return e;
  const i = e.substring(0, 8),
    n = e.substring(9);
  switch (i) {
    case "__q_date":
      return new Date(n);
    case "__q_expr":
      return new RegExp(n);
    case "__q_numb":
      return Number(n);
    case "__q_bool":
      return Boolean(n === "1");
    case "__q_strn":
      return "" + n;
    case "__q_objt":
      return JSON.parse(n);
    default:
      return e;
  }
}
function Et() {
  const e = () => null;
  return {
    has: () => !1,
    getLength: () => 0,
    getItem: e,
    getIndex: e,
    getKey: e,
    getAll: () => {},
    getAllKeys: () => [],
    set: me,
    remove: me,
    clear: me,
    isEmpty: () => !0,
  };
}
function Bt(e) {
  const t = window[e + "Storage"],
    i = (n) => {
      const u = t.getItem(n);
      return u ? It(u) : null;
    };
  return {
    has: (n) => t.getItem(n) !== null,
    getLength: () => t.length,
    getItem: i,
    getIndex: (n) => (n < t.length ? i(t.key(n)) : null),
    getKey: (n) => (n < t.length ? t.key(n) : null),
    getAll: () => {
      let n;
      const u = {},
        d = t.length;
      for (let c = 0; c < d; c++) (n = t.key(c)), (u[n] = i(n));
      return u;
    },
    getAllKeys: () => {
      const n = [],
        u = t.length;
      for (let d = 0; d < u; d++) n.push(t.key(d));
      return n;
    },
    set: (n, u) => {
      t.setItem(n, Ft(u));
    },
    remove: (n) => {
      t.removeItem(n);
    },
    clear: () => {
      t.clear();
    },
    isEmpty: () => t.length === 0,
  };
}
const Ee = Ae.has.webStorage === !1 ? Et() : Bt("session"),
  Y = {
    install({ $q: e }) {
      e.sessionStorage = Ee;
    },
  };
Object.assign(Y, Ee);
const Ot = k(
    "div",
    { class: "lt-sm", style: { "padding-bottom": "5rem" } },
    null,
    -1
  ),
  Tt = k(
    "div",
    { class: "gt-xs", style: { "padding-bottom": "15rem" } },
    null,
    -1
  ),
  jt = { class: "q-ma-md row justify-center items-center" },
  $t = { class: "card q-mb-xl" },
  Lt = k("img", { src: "static/images/babypic.jpg" }, null, -1),
  Pt = k("div", { class: "text-bold text-body1" }, "Hamzeh Abdallah", -1),
  Dt = k(
    "div",
    { class: "text-body2 q-py-sm" },
    " Software Engineer and Full Stack Developer",
    -1
  ),
  Nt = { class: "row justify-end" },
  zt = ["src"],
  Ut = ["src"],
  Ht = { class: "q-py-sm" },
  Kt = k("div", { class: "lt-sm" }, "hamzehhabdallah@gmail.com", -1),
  Zt = k("span", { class: "gt-xs" }, "hamzehhabdallah@gmail.com", -1),
  Qt = { class: "q-py-sm" },
  Jt = k("div", { class: "lt-sm" }, "+1 (201) 264 7063", -1),
  Yt = k("span", { class: "gt-xs" }, "+1 (201) 264 7063", -1),
  Gt = { class: "q-py-sm" },
  Wt = k("div", { class: "lt-sm" }, "Ridgewood, NJ", -1),
  Xt = k("span", { class: "gt-xs" }, "Ridgewood, NJ", -1),
  en = k(
    "div",
    { class: "gt-xs", style: { "margin-right": "128px" } },
    null,
    -1
  ),
  tn = { style: { "max-width": "100%", width: "500px" } },
  nn = { class: "form" },
  ln = { class: "text-center q-mt-xl" },
  on = k(
    "div",
    { class: "gt-xs", style: { "padding-bottom": "15rem" } },
    null,
    -1
  ),
  an = k(
    "div",
    { class: "lt-sm", style: { "padding-bottom": "5rem" } },
    null,
    -1
  ),
  dn = {
    __name: "ContactView",
    setup(e) {
      const t = Le(),
        i = (g) => {
          window.open(g, "_blank_");
        },
        n = T(Y.getItem("name") || null),
        u = T(Y.getItem("email") || null),
        d = T(Y.getItem("subject") || null),
        c = T(Y.getItem("body") || null),
        v = T(!1),
        A = T(Y.getItem("submission") || !1),
        M = async () => {
          if (((v.value = !0), A.value)) {
            setTimeout(() => {
              v.value = !1;
            }, 1e3);
            return;
          }
          try {
            const g = {
              from_name: n.value.trim(),
              message: c.value.trim(),
              subject: d.value.trim(),
              email: u.value.trim(),
            };
            (
              await Rt.send(
                "service_t1v57jf",
                "template_r5gh23z",
                g,
                "LONOwLZJYS63ujYp5"
              )
            ).status == 200 &&
              (Y.clear(), Y.set("submission", !0), (A.value = !0));
          } catch (g) {
            t.notify({ type: "negative", message: "Something went wrong" }),
              console.error(g);
          }
          setTimeout(() => {
            v.value = !1;
          }, 1e3);
        };
      return (
        P(n, (g) => {
          sessionStorage.setItem("name", g);
        }),
        P(u, (g) => {
          sessionStorage.setItem("email", g);
        }),
        P(d, (g) => {
          sessionStorage.setItem("subject", g);
        }),
        P(c, (g) => {
          sessionStorage.setItem("body", g);
        }),
        de(() => {
          const g = document.querySelector(".card"),
            m = document.querySelectorAll(".form"),
            E = document.querySelector(".button"),
            I = new IntersectionObserver((R) => {
              R.forEach((h) => {
                h.target.classList.toggle("animated", h.isIntersecting),
                  h.target.classList.toggle("bounceInLeft", h.isIntersecting),
                  h.isIntersecting && I.unobserve(h.target);
              });
            }),
            $ = new IntersectionObserver(
              (R) => {
                R.forEach((h) => {
                  h.target.classList.toggle("animated", h.isIntersecting),
                    h.target.classList.toggle("bounceInDown", h.isIntersecting),
                    h.isIntersecting && $.unobserve(h.target);
                });
              },
              { rootMargin: "-190px" }
            ),
            z = new IntersectionObserver((R) => {
              R.forEach((h) => {
                h.target.classList.toggle("animated", h.isIntersecting),
                  h.target.classList.toggle("bounceInUp", h.isIntersecting),
                  h.isIntersecting && z.unobserve(h.target);
              });
            });
          I.observe(g),
            m.forEach((R) => {
              $.observe(R);
            }),
            z.observe(E);
        }),
        (g, m) => (
          nt(),
          lt(
            at,
            null,
            [
              D(Pe),
              Ot,
              Tt,
              k("div", jt, [
                k("div", $t, [
                  D(
                    Oe,
                    {
                      class: ge(["my-card", (J(t).dark.isActive, "")]),
                      bordered: !J(t).dark.isActive,
                    },
                    {
                      default: ae(() => [
                        Lt,
                        D(
                          fe,
                          { class: "q-pa-lg" },
                          {
                            default: ae(() => [
                              Pt,
                              Dt,
                              k("div", Nt, [
                                k(
                                  "img",
                                  {
                                    class: "",
                                    src: J(t).dark.isActive
                                      ? "static/signatureDarkMode.png"
                                      : "static/signature.png",
                                    width: "150",
                                    alt: "my_signature",
                                  },
                                  null,
                                  8,
                                  zt
                                ),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                        D(be),
                        D(
                          fe,
                          { class: "text-center" },
                          {
                            default: ae(() => [
                              k("img", {
                                class: "cursor-pointer",
                                src: "static/socials/instagram/igColor.png",
                                width: "60",
                                height: "60",
                                alt: "Instagram",
                                onClick:
                                  m[0] ||
                                  (m[0] = (E) =>
                                    i("https://www.instagram.com/hazmeh_/")),
                              }),
                              k(
                                "img",
                                {
                                  class: "cursor-pointer",
                                  src: J(t).dark.isActive
                                    ? "static/socials/github/githubDarkMode.png"
                                    : "static/socials/github/github.png",
                                  width: "60",
                                  height: "60",
                                  alt: "GitHub",
                                  onClick:
                                    m[1] ||
                                    (m[1] = (E) =>
                                      i("https://github.com/hamzehab")),
                                },
                                null,
                                8,
                                Ut
                              ),
                              k("img", {
                                class: "cursor-pointer",
                                src: "static/socials/linkedin/linkedinColor.png",
                                width: "60",
                                height: "60",
                                alt: "LinkedIn",
                                onClick:
                                  m[2] ||
                                  (m[2] = (E) =>
                                    i(
                                      "https://www.linkedin.com/in/hamzeh-abdallah/"
                                    )),
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                        D(be),
                        D(
                          fe,
                          { class: "q-mx-md text-body2" },
                          {
                            default: ae(() => [
                              k("div", Ht, [
                                D(
                                  te,
                                  {
                                    name: "email",
                                    class: "q-mr-xl",
                                    color: J(t).dark.isActive ? "amber" : "",
                                  },
                                  null,
                                  8,
                                  ["color"]
                                ),
                                Kt,
                                Zt,
                              ]),
                              k("div", Qt, [
                                D(
                                  te,
                                  {
                                    name: "phone",
                                    class: "q-mr-xl",
                                    color: J(t).dark.isActive ? "amber" : "",
                                  },
                                  null,
                                  8,
                                  ["color"]
                                ),
                                Jt,
                                Yt,
                              ]),
                              k("div", Gt, [
                                D(
                                  te,
                                  {
                                    name: "home",
                                    class: "q-mr-xl",
                                    color: J(t).dark.isActive ? "amber" : "",
                                  },
                                  null,
                                  8,
                                  ["color"]
                                ),
                                Wt,
                                Xt,
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class", "bordered"]
                  ),
                ]),
                en,
                k("div", tn, [
                  k("div", null, [
                    k(
                      "div",
                      {
                        class: ge([
                          "form text-h5 text-weight-bolder",
                          J(t).dark.isActive ? "text-amber" : "text-indigo",
                        ]),
                      },
                      " Asking Costs Nothing ",
                      2
                    ),
                    k(
                      "div",
                      {
                        class: ge([
                          "form text-body1 q-pt-sm",
                          J(t).dark.isActive ? "text-grey" : "text-grey-9",
                        ]),
                      },
                      " Don't hesitate to get in touch with me! You can reach out through Instagram, GitHub, LinkedIn, drop me an email, or simply use the contact form here ",
                      2
                    ),
                  ]),
                  k("div", nn, [
                    D(
                      ie,
                      {
                        class: "q-my-lg",
                        modelValue: n.value,
                        "onUpdate:modelValue":
                          m[3] || (m[3] = (E) => (n.value = E)),
                        modelModifiers: { trim: !0 },
                        type: "text",
                        label: "Preferred Name",
                        "stack-label": "",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    D(
                      ie,
                      {
                        class: "q-my-lg",
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          m[4] || (m[4] = (E) => (u.value = E)),
                        modelModifiers: { trim: !0 },
                        type: "text",
                        label: "Email",
                        "stack-label": "",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    D(
                      ie,
                      {
                        class: "q-my-lg",
                        type: "text",
                        modelValue: d.value,
                        "onUpdate:modelValue":
                          m[5] || (m[5] = (E) => (d.value = E)),
                        modelModifiers: { trim: !0 },
                        label: "Subject",
                        "stack-label": "",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    D(
                      ie,
                      {
                        class: "q-my-lg",
                        type: "textarea",
                        modelValue: c.value,
                        "onUpdate:modelValue":
                          m[6] || (m[6] = (E) => (c.value = E)),
                        modelModifiers: { trim: !0 },
                        label: "Your Message",
                        "stack-label": "",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  k("div", ln, [
                    D(
                      ot,
                      {
                        rounded: "",
                        push: "",
                        loading: v.value,
                        class: "button bg-indigo q-py-sm",
                        style: { color: "white", width: "300px" },
                        label: A.value ? "Already submitted form" : "Submit",
                        disable: A.value,
                        onClick: M,
                      },
                      null,
                      8,
                      ["loading", "label", "disable"]
                    ),
                  ]),
                ]),
              ]),
              on,
              an,
              D(De),
            ],
            64
          )
        )
      );
    },
  };
export { dn as default };
