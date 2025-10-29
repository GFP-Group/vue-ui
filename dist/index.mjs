import { defineComponent as y, createElementBlock as l, openBlock as s, normalizeClass as v, renderSlot as z, computed as g, useSlots as oe, cloneVNode as fe, createElementVNode as i, Fragment as E, renderList as P, createBlock as N, resolveDynamicComponent as U, toDisplayString as _, useAttrs as ke, createCommentVNode as M, createVNode as S, ref as D, onMounted as J, onUnmounted as Q, unref as I, withModifiers as O, withCtx as H, normalizeStyle as Y, nextTick as de, mergeProps as be, createTextVNode as te, watch as re, withDirectives as ce, vShow as ue, getCurrentInstance as _e, watchEffect as $e, resolveComponent as Me, inject as ve, provide as xe, createStaticVNode as he } from "vue";
import { BiChevronDown as Ce, BiSolidMoon as ze, BiSearch as Be } from "vue-icons-plus/bi";
import { Io5Menu as De } from "vue-icons-plus/io5";
import { AiOutlineMinus as Se, AiOutlinePlus as Ze, AiFillSun as Te } from "vue-icons-plus/ai";
import { Fa6Check as Ee } from "vue-icons-plus/fa6";
import { LuCalendarDays as Ie } from "vue-icons-plus/lu";
import { BsCheckLg as Ne, BsChevronLeft as Pe, BsChevronRight as je } from "vue-icons-plus/bs";
import { GoAlert as Ge } from "vue-icons-plus/go";
import { EpWarning as Ve, EpClose as Fe } from "vue-icons-plus/ep";
import { FaChevronDown as ye } from "vue-icons-plus/fa";
import { IpClose as Oe } from "vue-icons-plus/ip";
const Re = /* @__PURE__ */ y({
  __name: "Badge",
  props: {
    color: { default: "zinc" },
    size: { default: "md" },
    pill: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  setup(a) {
    const t = a, e = {
      red: "bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/25 dark:text-red-200 dark:border-red-800/40",
      orange: "bg-orange-100 text-orange-800 border border-orange-200 dark:bg-orange-900/25 dark:text-orange-200 dark:border-orange-800/40",
      amber: "bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/25 dark:text-amber-200 dark:border-amber-800/40",
      yellow: "bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/25 dark:text-yellow-200 dark:border-yellow-800/40",
      lime: "bg-lime-100 text-lime-800 border border-lime-200 dark:bg-lime-900/25 dark:text-lime-200 dark:border-lime-800/40",
      green: "bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/25 dark:text-green-200 dark:border-green-800/40",
      emerald: "bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-900/25 dark:text-emerald-200 dark:border-emerald-800/40",
      teal: "bg-teal-100 text-teal-800 border border-teal-200 dark:bg-teal-900/25 dark:text-teal-200 dark:border-teal-800/40",
      cyan: "bg-cyan-100 text-cyan-800 border border-cyan-200 dark:bg-cyan-900/25 dark:text-cyan-200 dark:border-cyan-800/40",
      sky: "bg-sky-100 text-sky-800 border border-sky-200 dark:bg-sky-900/25 dark:text-sky-200 dark:border-sky-800/40",
      blue: "bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900/25 dark:text-blue-200 dark:border-blue-800/40",
      indigo: "bg-indigo-100 text-indigo-800 border border-indigo-200 dark:bg-indigo-900/25 dark:text-indigo-200 dark:border-indigo-800/40",
      violet: "bg-violet-100 text-violet-800 border border-violet-200 dark:bg-violet-900/25 dark:text-violet-200 dark:border-violet-800/40",
      purple: "bg-purple-100 text-purple-800 border border-purple-200 dark:bg-purple-900/25 dark:text-purple-200 dark:border-purple-800/40",
      fuchsia: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200 dark:bg-fuchsia-900/25 dark:text-fuchsia-200 dark:border-fuchsia-800/40",
      pink: "bg-pink-100 text-pink-800 border border-pink-200 dark:bg-pink-900/25 dark:text-pink-200 dark:border-pink-800/40",
      rose: "bg-rose-100 text-rose-800 border border-rose-200 dark:bg-rose-900/25 dark:text-rose-200 dark:border-rose-800/40",
      zinc: "bg-zinc-100 text-zinc-800 border border-zinc-200 dark:bg-zinc-600/25 dark:text-zinc-200 dark:border-zinc-600/40"
    }, o = {
      xs: "text-[10px] px-2 py-0.5",
      sm: "text-xs px-2.5 py-0.5",
      md: "text-sm px-3 py-1",
      lg: "text-base px-3.5 py-1.5",
      xl: "text-lg px-4 py-2"
    };
    return (c, n) => (s(), l("span", {
      class: v([
        "inline-flex items-center font-medium select-none",
        t.pill ? "rounded-full" : "rounded-sm",
        o[t.size],
        e[t.color],
        t.className
      ])
    }, [
      z(c.$slots, "default")
    ], 2));
  }
}), Ae = "w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-2 shadow-soft transition hover:shadow-md inline-flex flex-col items-center justify-center text-center select-none cursor-pointer hover:border-gray-300 dark:hover:border-gray-500", He = /* @__PURE__ */ y({
  __name: "BlockButton",
  props: {
    label: {},
    className: {},
    onClick: {},
    labelSizeSm: { default: "text-sm" },
    labelSizeMd: { default: "text-base" },
    labelSizeLg: { default: "text-base" },
    labelSizeXl: { default: "text-lg" },
    labelSize2xl: { default: "text-lg" }
  },
  setup(a) {
    const t = a, e = g(
      () => `${Ae} p-8 gap-2 lg:p-10 lg:gap-3 lg:gap-4 2xl:p-13 ${t.className ?? ""}`
    ), o = g(() => "h-12 w-12 lg:h-14"), c = (u, f) => u ? `${u}:${f}` : f, n = g(() => {
      const u = c(null, t.labelSizeSm || "text-sm"), f = c("md", t.labelSizeMd || "text-base"), h = c("lg", t.labelSizeLg || "text-lg"), r = c("xl", t.labelSizeXl || "text-lg"), b = c("2xl", t.labelSize2xl || "text-lg");
      return `${u} ${f} ${h} ${r} ${b} text-dark dark:text-gray-200`;
    }), p = g(() => 24), d = oe(), C = g(() => {
      const u = d.default ? d.default() : [], f = "h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12";
      return u.map(
        (h, r) => {
          var b;
          return fe(h, {
            class: [((b = h.props) == null ? void 0 : b.class) || "", f],
            key: h.key ?? r
          });
        }
      );
    });
    return (u, f) => (s(), l("button", {
      type: "button",
      class: v(e.value),
      onClick: f[0] || (f[0] = (h) => {
        var r;
        return (r = t.onClick) == null ? void 0 : r.call(t, h);
      })
    }, [
      i("span", {
        class: v(["inline-flex items-center justify-center", o.value])
      }, [
        u.$slots.default ? (s(!0), l(E, { key: 0 }, P(C.value, (h, r) => (s(), N(U(h), { key: r }))), 128)) : z(u.$slots, "default", {
          key: 1,
          iconClass: o.value,
          size: p.value
        })
      ], 2),
      i("span", {
        class: v(n.value)
      }, _(t.label), 3)
    ], 2));
  }
}), We = ["stroke"], Ke = ["stroke"], A = /* @__PURE__ */ y({
  __name: "Spinner",
  props: {
    variant: { default: "light" },
    invert: { type: Boolean, default: !1 },
    color: {}
  },
  setup(a) {
    const t = a, e = ke(), o = g(() => {
      const n = ["animate-spin"];
      return e.class ? n.push(e.class) : n.push("w-8", "h-8"), n;
    }), c = g(() => t.color ? {
      ring: t.variant === "dark" ? "rgba(255, 255, 255, 0.2)" : "#E5E7EB",
      spinner: t.color
    } : t.invert ? {
      ring: "rgba(0, 0, 0, 0.2)",
      spinner: "rgba(0, 0, 0, 1)"
    } : t.variant === "dark" ? {
      ring: "rgba(255, 255, 255, 0.2)",
      spinner: "rgba(255, 255, 255, 1)"
    } : {
      ring: "#E5E7EB",
      spinner: "#168ac9"
      // Use Tailwind primary color
    });
    return (n, p) => (s(), l("svg", {
      viewBox: "0 0 40 41",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: v(o.value)
    }, [
      i("circle", {
        cx: "20",
        cy: "20.5",
        r: "18",
        stroke: c.value.ring,
        "stroke-width": "4"
      }, null, 8, We),
      p[0] || (p[0] = i("mask", {
        id: "spinner-mask",
        fill: "white"
      }, [
        i("path", { d: "M38.0028 20.5C39.1058 20.5 40.0103 19.6036 39.9004 18.5061C39.5397 14.9057 38.2071 11.457 36.0279 8.53735C33.4491 5.08217 29.8228 2.55283 25.6895 1.32633C21.5562 0.0998324 17.1372 0.241843 13.0912 1.7312C9.67218 2.98973 6.67421 5.15341 4.40811 7.97427C3.71731 8.83418 3.9865 10.0789 4.91099 10.6805C5.83548 11.2821 7.06377 11.0105 7.77579 10.1681C9.55682 8.06082 11.8606 6.44059 14.471 5.47969C17.709 4.28779 21.2454 4.17414 24.5532 5.15568C27.861 6.13723 30.7631 8.16141 32.8269 10.9265C34.4907 13.1557 35.5378 15.7703 35.8812 18.5079C36.0185 19.6024 36.8998 20.5 38.0028 20.5Z" })
      ], -1)),
      i("path", {
        d: "M38.0028 20.5C39.1058 20.5 40.0103 19.6036 39.9004 18.5061C39.5397 14.9057 38.2071 11.457 36.0279 8.53735C33.4491 5.08217 29.8228 2.55283 25.6895 1.32633C21.5562 0.0998324 17.1372 0.241843 13.0912 1.7312C9.67218 2.98973 6.67421 5.15341 4.40811 7.97427C3.71731 8.83418 3.9865 10.0789 4.91099 10.6805C5.83548 11.2821 7.06377 11.0105 7.77579 10.1681C9.55682 8.06082 11.8606 6.44059 14.471 5.47969C17.709 4.28779 21.2454 4.17414 24.5532 5.15568C27.861 6.13723 30.7631 8.16141 32.8269 10.9265C34.4907 13.1557 35.5378 15.7703 35.8812 18.5079C36.0185 19.6024 36.8998 20.5 38.0028 20.5Z",
        stroke: c.value.spinner,
        "stroke-width": "8",
        mask: "url(#spinner-mask)"
      }, null, 8, Ke)
    ], 2));
  }
}), Xe = ["disabled"], qe = {
  key: 0,
  class: "mr-2 inline-flex items-center"
}, Ye = {
  key: 1,
  class: "mr-2 inline-flex items-center"
}, Je = {
  key: 2,
  class: "mr-2 inline-flex items-center"
}, Ue = {
  key: 3,
  class: "ml-2 inline-flex items-center"
}, Qe = {
  key: 4,
  class: "ml-2 inline-flex items-center"
}, et = "border inline-flex items-center justify-center text-center font-medium transition-opacity", pe = /* @__PURE__ */ y({
  __name: "Button",
  props: {
    label: {},
    labelLoading: {},
    type: { default: "default" },
    size: { default: "md" },
    className: {},
    onClick: {},
    primary: { type: Boolean },
    default: { type: Boolean },
    light: { type: Boolean },
    danger: { type: Boolean },
    warning: { type: Boolean },
    success: { type: Boolean },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = {
      primary: "bg-dark border-dark text-white dark:border-white dark:hover:bg-gray-200 dark:bg-white dark:text-dark hover:bg-dark-3",
      default: "border-gray-400 dark:border-dark-2 text-dark dark:text-white hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-700",
      light: "border-gray-300 dark:border-dark-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700",
      success: "bg-green-600 border-green-600 text-white hover:brightness-115",
      danger: "bg-red-600 border-red-600 text-white hover:brightness-115",
      warning: "bg-yellow-500 border-yellow-500 text-white hover:brightness-115"
    }, o = {
      xs: "text-[11px] py-0.75 px-2 rounded-sm",
      sm: "text-xs py-1.5 px-3 rounded-md",
      md: "text-sm py-2 px-5 rounded-md",
      lg: "text-lg py-2.5 px-8 rounded-lg",
      xl: "text-xl py-4 px-9 rounded-[10px]"
    }, c = g(() => t.default ? "default" : t.light ? "light" : t.danger ? "danger" : t.warning ? "warning" : t.success ? "success" : t.primary ? "primary" : t.type ?? "primary"), n = g(() => t.loading || t.disabled), p = g(() => {
      const B = n.value ? "opacity-80" : "", $ = n.value ? "cursor-not-allowed" : "cursor-pointer";
      return `${et} ${o[t.size]} ${e[c.value]} ${B} ${$} ${t.className ?? ""}`;
    }), d = oe(), C = {
      xs: "pl-2",
      sm: "pl-2",
      md: "pl-3",
      lg: "pl-4",
      xl: "pl-6"
    }, u = {
      xs: "pr-2",
      sm: "pr-2",
      md: "pr-3",
      lg: "pr-4",
      xl: "pr-6"
    }, f = g(() => {
      const B = d.prefix || t.loading ? C[t.size] : "", $ = d.suffix ? u[t.size] : "";
      return `${B} ${$}`.trim();
    }), h = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7"
    }, r = g(() => {
      const B = c.value;
      return B === "primary" || B === "success" || B === "danger" || B === "warning" ? "dark" : "light";
    }), b = g(() => c.value === "primary"), k = g(() => d.prefix && !t.loading), m = g(() => d.suffix && !t.loading), w = g(() => !!t.loading), Z = g(() => d.prefix ? "prefix" : d.suffix ? "suffix" : "default"), j = g(() => t.loading && t.labelLoading ? t.labelLoading : t.label);
    return (B, $) => (s(), l("button", {
      type: "button",
      class: v([p.value, f.value]),
      disabled: n.value,
      onClick: $[0] || ($[0] = (W) => {
        var G;
        return (G = t.onClick) == null ? void 0 : G.call(t, W);
      })
    }, [
      w.value && Z.value === "prefix" ? (s(), l("span", qe, [
        b.value ? (s(), l(E, { key: 1 }, [
          S(A, {
            variant: "dark",
            class: v([h[t.size], "dark:hidden"])
          }, null, 8, ["class"]),
          S(A, {
            invert: "",
            class: v([h[t.size], "hidden dark:inline-flex"])
          }, null, 8, ["class"])
        ], 64)) : (s(), N(A, {
          key: 0,
          variant: r.value,
          class: v(h[t.size])
        }, null, 8, ["variant", "class"]))
      ])) : k.value ? (s(), l("span", Ye, [
        z(B.$slots, "prefix")
      ])) : M("", !0),
      w.value && Z.value === "default" ? (s(), l("span", Je, [
        b.value ? (s(), l(E, { key: 1 }, [
          S(A, {
            variant: "dark",
            class: v([h[t.size], "dark:hidden"])
          }, null, 8, ["class"]),
          S(A, {
            invert: "",
            class: v([h[t.size], "hidden dark:inline-flex"])
          }, null, 8, ["class"])
        ], 64)) : (s(), N(A, {
          key: 0,
          variant: r.value,
          class: v(h[t.size])
        }, null, 8, ["variant", "class"]))
      ])) : M("", !0),
      i("span", null, _(j.value), 1),
      w.value && Z.value === "suffix" ? (s(), l("span", Ue, [
        b.value ? (s(), l(E, { key: 1 }, [
          S(A, {
            variant: "dark",
            class: v([h[t.size], "dark:hidden"])
          }, null, 8, ["class"]),
          S(A, {
            invert: "",
            class: v([h[t.size], "hidden dark:inline-flex"])
          }, null, 8, ["class"])
        ], 64)) : (s(), N(A, {
          key: 0,
          variant: r.value,
          class: v(h[t.size])
        }, null, 8, ["variant", "class"]))
      ])) : m.value ? (s(), l("span", Qe, [
        z(B.$slots, "suffix")
      ])) : M("", !0)
    ], 10, Xe));
  }
}), tt = ["onClick"], we = /* @__PURE__ */ y({
  __name: "Dropdown",
  props: {
    label: {},
    items: {},
    primary: { type: Boolean },
    outline: { type: Boolean },
    danger: { type: Boolean },
    warning: { type: Boolean },
    success: { type: Boolean },
    size: {}
  },
  setup(a) {
    const t = a, e = D(!1), o = D(null), c = D(null), n = oe(), p = g(() => t.label ?? "Dropdown Button"), d = {
      xs: 11,
      sm: 13,
      md: 17,
      lg: 19,
      xl: 22
    }, C = g(() => d[t.size ?? "md"]), u = D("down"), f = D("left"), h = D(null), r = () => {
      if (!o.value || !c.value) return;
      const $ = o.value.getBoundingClientRect(), W = window.innerWidth, G = window.innerHeight, K = 8, le = c.value.offsetWidth, se = G - $.bottom, x = $.top;
      se >= x ? u.value = se > K ? "down" : "up" : u.value = x > K ? "up" : "down", h.value = Math.max(
        0,
        (u.value === "down" ? se : x) - K
      );
      const L = $.left + le > W - K, T = $.right - le < K;
      L && !T ? f.value = "right" : f.value = "left";
    }, b = async () => {
      e.value ? e.value = !1 : (e.value = !0, await de(), r());
    }, k = g(() => t.items ?? []), m = ($) => {
      o.value && !o.value.contains($.target) && (e.value = !1);
    }, w = ($) => {
      $.key === "Escape" && (e.value = !1);
    }, Z = ($, W) => {
      var G;
      (G = $.onClick) == null || G.call($, W), e.value = !1;
    };
    J(() => {
      document.addEventListener("click", m), document.addEventListener("keydown", w), window.addEventListener("resize", () => e.value && r()), window.addEventListener("scroll", () => e.value && r(), !0);
    }), Q(() => {
      document.removeEventListener("click", m), document.removeEventListener("keydown", w), window.removeEventListener("resize", () => e.value && r()), window.removeEventListener("scroll", () => e.value && r(), !0);
    });
    const j = g(
      () => f.value === "right" ? "right-0 left-auto" : "left-0 right-auto"
    ), B = g(() => u.value === "up" ? "bottom-full" : "top-full");
    return ($, W) => (s(), l("div", {
      ref_key: "wrapperRef",
      ref: o,
      class: "relative inline-block text-left [&>*]:mb-0"
    }, [
      I(n).trigger ? z($.$slots, "trigger", {
        key: 0,
        toggle: b,
        open: e.value
      }) : I(n).default ? (s(), l("span", {
        key: 1,
        class: "inline-flex [&_*]:mb-0",
        onClick: b
      }, [
        z($.$slots, "default")
      ])) : (s(), N(pe, {
        key: 2,
        label: p.value,
        primary: t.primary,
        outline: t.outline,
        danger: t.danger,
        warning: t.warning,
        success: t.success,
        size: t.size,
        onClick: O(b, ["prevent"])
      }, {
        suffix: H(() => [
          S(I(Ce), {
            size: C.value,
            class: v(["transition-transform duration-200", e.value ? "rotate-180" : ""])
          }, null, 8, ["size", "class"])
        ]),
        _: 1
      }, 8, ["label", "primary", "outline", "danger", "warning", "success", "size"])),
      i("div", {
        ref_key: "menuRef",
        ref: c,
        class: v(["shadow-1 dark:shadow-box-dark absolute z-40 mt-2 min-w-[12rem] rounded-md bg-white dark:bg-dark-2 py-[10px] transition-all duration-200 overflow-auto", [j.value, e.value ? B.value + " opacity-100 visible" : "hidden"]]),
        style: Y({
          maxHeight: h.value != null ? h.value + "px" : void 0,
          maxWidth: "calc(100vw - 16px)"
        })
      }, [
        (s(!0), l(E, null, P(k.value, (G) => (s(), l("button", {
          key: G.text,
          type: "button",
          class: v([
            "block w-full text-left px-5 py-2 text-base cursor-pointer",
            G.danger ? "text-red-500 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-white/3 hover:text-red-600 dark:hover:text-red-300" : "text-body-color dark:text-dark-6 hover:bg-gray-50 dark:hover:bg-white/3 hover:text-black dark:hover:text-white"
          ]),
          onClick: (K) => Z(G, K)
        }, _(G.text), 11, tt))), 128))
      ], 6)
    ], 512));
  }
}), rt = {
  key: 1,
  class: "inline-flex"
}, at = { class: "inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-400 dark:border-gray-500 text-dark hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer" }, st = /* @__PURE__ */ y({
  __name: "ButtonGroup",
  props: {
    buttons: {},
    className: { default: "" },
    collapseBelowPx: { default: 1300 }
  },
  setup(a) {
    const t = a, e = D(!0), o = () => {
      typeof window > "u" || (e.value = window.innerWidth >= (t.collapseBelowPx ?? 1300));
    };
    return J(() => {
      o(), window.addEventListener("resize", o);
    }), Q(() => window.removeEventListener("resize", o)), (c, n) => e.value ? (s(), l("div", {
      key: 0,
      class: v(["flex items-center gap-2", t.className])
    }, [
      (s(!0), l(E, null, P(t.buttons, (p, d) => (s(), N(pe, {
        key: d,
        label: p.label,
        type: p.type ?? "default",
        size: p.size ?? "md",
        onClick: (C) => {
          var u;
          return (u = p.onClick) == null ? void 0 : u.call(p);
        }
      }, null, 8, ["label", "type", "size", "onClick"]))), 128))
    ], 2)) : (s(), l("div", rt, [
      S(we, {
        items: t.buttons.map((p) => ({
          text: p.label,
          onClick: () => {
            var d;
            return (d = p.onClick) == null ? void 0 : d.call(p);
          },
          danger: p.type === "danger"
        }))
      }, {
        default: H(() => [
          i("button", at, [
            S(I(De), { size: "18" })
          ])
        ]),
        _: 1
      }, 8, ["items"])
    ]));
  }
}), ae = /* @__PURE__ */ y({
  __name: "Text",
  props: {
    title: { type: Boolean },
    pageTitle: { type: Boolean },
    h1: { type: Boolean },
    h2: { type: Boolean },
    h3: { type: Boolean },
    h4: { type: Boolean },
    h5: { type: Boolean },
    h6: { type: Boolean },
    p: { type: Boolean },
    small: { type: Boolean },
    className: {},
    noMargin: { type: Boolean },
    faint: { type: Boolean }
  },
  setup(a) {
    const t = a, e = g(() => t.title || t.pageTitle || t.h1 ? "h1" : t.h2 ? "h2" : t.h3 ? "h3" : t.h4 ? "h4" : t.h5 ? "h5" : t.h6 ? "h6" : (t.small, "p")), o = g(() => t.title ? "text-4xl md:text-5xl font-medium leading-tight text-dark dark:text-white" : t.pageTitle ? "text-2xl md:text-3xl font-medium leading-tight text-dark dark:text-white px-3 pt-5 pb-0 md:p-0" : t.h1 ? "text-2xl md:text-3xl font-medium leading-tight text-dark dark:text-white" : t.h2 ? "text-xl md:text-2xl font-medium leading-snug text-dark dark:text-white" : t.h3 ? "text-lg md:text-xl font-medium leading-snug text-dark dark:text-white" : t.h4 ? "text-xl md:text-lg font-medium leading-snug text-dark dark:text-white" : t.h5 ? "text-xs md:text-sm font-medium leading-snug text-dark dark:text-white" : t.h6 ? "text-xs font-medium leading-snug text-dark dark:text-white" : t.small ? "text-xs md:text-sm leading-relaxed text-body-color dark:text-gray-300" : "text-base leading-relaxed text-body-color dark:text-gray-300"), c = g(() => t.noMargin ? "mb-0" : t.title ? "mb-5" : t.pageTitle ? "mb-9" : t.h1 ? "mb-3" : t.h2 || t.h3 || t.h4 ? "mb-2" : t.h5 || t.h6 ? "mb-1" : "mb-6"), n = g(
      () => `${o.value} ${c.value}${t.faint ? " opacity-50" : ""}${t.className ? ` ${t.className}` : ""}`
    );
    return (p, d) => (s(), N(U(e.value), {
      class: v(n.value)
    }, {
      default: H(() => [
        z(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ot = ["aria-label"], Le = /* @__PURE__ */ y({
  __name: "IconButton",
  props: {
    size: { default: 20 },
    bgClass: { default: "bg-white dark:bg-dark-2 hover:bg-gray-100 dark:hover:bg-gray-700/20 cursor-pointer" },
    onClick: { type: Function, default: void 0 },
    ariaLabel: { default: void 0 },
    naked: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = g(() => ({ width: `${t.size}px`, height: `${t.size}px` })), o = g(() => Math.max(1, Math.round(t.size * 0.5))), c = g(() => `w-[${o.value}px] h-[${o.value}px]`), n = g(() => t.naked ? "inline-flex items-center justify-center rounded-full aspect-square border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition hover:bg-gray-100 dark:hover:bg-gray-700/20 text-dark dark:text-gray-200 p-0 leading-none shrink-0 overflow-hidden cursor-pointer" : "inline-flex items-center justify-center rounded-full aspect-square border border-gray-200 dark:border-gray-700 shadow-soft transition hover:shadow-md text-dark dark:text-gray-200 p-0 leading-none shrink-0 overflow-hidden"), p = g(() => t.naked ? n.value : `${n.value} ${t.bgClass ?? ""}`), d = oe(), C = g(() => {
      var f;
      return (((f = d.default) == null ? void 0 : f.call(d)) ?? []).map((h, r) => {
        var k;
        const b = ((k = h.props) == null ? void 0 : k.class) ?? "";
        return fe(h, {
          class: [b, c.value],
          key: h.key ?? r,
          // Many icons in vue-icons-plus accept numeric `size` prop (pixels)
          size: o.value
        });
      });
    });
    return (u, f) => (s(), l("button", {
      type: "button",
      "aria-label": a.ariaLabel,
      class: v(p.value),
      style: Y(e.value),
      onClick: f[0] || (f[0] = (h) => {
        var r;
        return (r = t.onClick) == null ? void 0 : r.call(t, h);
      })
    }, [
      u.$slots.default ? (s(!0), l(E, { key: 0 }, P(C.value, (h, r) => (s(), N(U(h), { key: r }))), 128)) : (s(), l(E, { key: 1 }, [], 64))
    ], 14, ot));
  }
}), lt = {
  key: 0,
  class: "flex justify-between items-center mb-6"
}, nt = { class: "flex gap-2" }, it = { key: 1 }, dt = /* @__PURE__ */ y({
  __name: "Card",
  props: {
    title: {},
    titleType: { default: "h3" },
    class: {},
    darkDarker: { type: Boolean, default: !1 },
    disableBlockAppearanceMobile: { type: Boolean, default: !1 },
    collapsible: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = D(!1), o = () => {
      e.value = !e.value;
    }, c = g(() => {
      const p = t.darkDarker ? "dark:bg-dark" : "dark:bg-dark-2", d = t.disableBlockAppearanceMobile ? "border-1 rounded-lg" : "border-t-1 border-b-1 md:border-1 md:rounded-lg";
      return `bg-white shadow-soft ${p} px-4 py-5 md:px-8 md:py-6 ${d} border-gray-200/70 dark:border-dark-3`;
    }), n = g(() => ({
      [t.titleType]: !0
    }));
    return (p, d) => (s(), l("div", be({
      class: [c.value, t.class]
    }, p.$attrs), [
      t.title ? (s(), l("div", lt, [
        S(ae, be(n.value, {
          class: "text-lg font-medium dark:text-white",
          "no-margin": ""
        }), {
          default: H(() => [
            te(_(t.title), 1)
          ]),
          _: 1
        }, 16),
        i("div", nt, [
          z(p.$slots, "actions"),
          t.collapsible ? (s(), N(Le, {
            key: 0,
            size: 32,
            class: "mr-[-15px]",
            naked: "",
            onClick: o
          }, {
            default: H(() => [
              e.value ? (s(), N(I(Ze), { key: 1 })) : (s(), N(I(Se), { key: 0 }))
            ]),
            _: 1
          })) : M("", !0)
        ])
      ])) : M("", !0),
      e.value ? M("", !0) : (s(), l("div", it, [
        z(p.$slots, "default")
      ]))
    ], 16));
  }
}), ct = ["for"], ut = { class: "relative" }, pt = ["id", "name", "checked", "disabled"], ft = { class: "opacity-0 group-has-checked:opacity-100 transition-opacity" }, ht = { class: "text-[13px]" }, gt = /* @__PURE__ */ y({
  __name: "Checkbox",
  props: {
    label: { default: "Checkbox" },
    modelValue: { type: Boolean, default: void 0 },
    checked: { type: Boolean, default: void 0 },
    id: {},
    name: {},
    disabled: { type: Boolean, default: !1 },
    className: {},
    onChange: {}
  },
  emits: ["update:modelValue", "update:checked", "change"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = `cb_${Math.random().toString(36).slice(2, 9)}`, n = g(() => e.id || c), p = g(() => e.modelValue !== void 0 || e.checked !== void 0), d = g({
      get() {
        return e.modelValue !== void 0 ? !!e.modelValue : e.checked !== void 0 ? !!e.checked : !1;
      },
      set(h) {
        o("update:modelValue", h), o("update:checked", h);
      }
    }), C = (h) => {
      var k;
      const r = h.target, b = r.checked;
      if (!p.value) {
        r.checked = d.value, h.preventDefault();
        return;
      }
      d.value = b, o("change", b, h), (k = e.onChange) == null || k.call(e, b, h);
    }, u = (h) => {
      p.value || (h.preventDefault(), h.stopPropagation());
    }, f = (h) => {
      !p.value && (h.key === " " || h.key === "Spacebar" || h.key === "Enter") && (h.preventDefault(), h.stopPropagation());
    };
    return (h, r) => (s(), l("label", {
      for: n.value,
      class: v(["flex items-center cursor-pointer select-none text-dark dark:text-white group", e.className])
    }, [
      i("div", ut, [
        i("input", {
          id: n.value,
          type: "checkbox",
          class: "sr-only",
          name: e.name,
          checked: d.value,
          disabled: e.disabled,
          onChange: C,
          onClick: u,
          onKeydown: f
        }, null, 40, pt),
        i("div", {
          class: v(["flex items-center justify-center w-5 h-5 mr-3 border rounded-[5px] transition dark:border-gray-500", [
            e.disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
            d.value ? "bg-black border-black text-white dark:bg-white dark:border-white dark:text-black" : "bg-transparent border-gray-7 dark:border-dark-3"
          ]])
        }, [
          i("span", ft, [
            S(I(Ee), { size: "12" })
          ])
        ], 2)
      ]),
      i("span", ht, _(e.label), 1)
    ], 10, ct));
  }
}), mt = {
  key: 2,
  class: "text-sm"
}, bt = /* @__PURE__ */ y({
  __name: "DarkModeToggle",
  props: {
    showLabel: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = D(!1), o = () => {
      const u = document.documentElement;
      e.value ? u.classList.add("dark") : u.classList.remove("dark");
    }, c = () => window.matchMedia("(prefers-color-scheme: dark)").matches, n = () => {
      const u = localStorage.getItem("theme:dark");
      u === "true" || u === "false" ? e.value = u === "true" : e.value = c(), o();
    }, p = () => {
      e.value = !e.value, localStorage.setItem("theme:dark", String(e.value)), o();
    };
    let d = null;
    const C = (u) => {
      e.value = u.matches, o();
    };
    return J(() => {
      n(), d = window.matchMedia("(prefers-color-scheme: dark)"), d.addEventListener("change", C);
    }), Q(() => {
      d == null || d.removeEventListener("change", C);
    }), (u, f) => (s(), l("button", {
      type: "button",
      class: "flex items-center gap-2 py-2 rounded cursor-pointer dark:text-white",
      onClick: p
    }, [
      e.value ? (s(), N(I(Te), { key: 1 })) : (s(), N(I(ze), { key: 0 })),
      t.showLabel ? (s(), l("span", mt, "Dark mode")) : M("", !0)
    ]));
  }
}), kt = ["placeholder", "value"], vt = { class: "flex items-center justify-between pb-2" }, xt = {
  id: "currentMonth",
  class: "text-base font-medium text-dark dark:text-white"
}, Ct = { class: "flex items-center justify-end space-x-[10px]" }, yt = { class: "grid grid-cols-7 text-sm font-normal capitalize text-body-color dark:text-dark-6" }, wt = ["data-date", "onClick"], Lt = {
  key: 0,
  class: "flex items-center space-x-3 pt-3 sm:space-x-4"
}, _t = { class: "h-[32px] flex-1 rounded border border-stroke bg-transparent px-4 text-xs font-medium text-body-color hover:border-primary focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:hover:border-gray-600" }, $t = { class: "h-[32px] flex-1 rounded border border-stroke bg-transparent px-4 text-xs font-medium text-body-color hover:border-primary focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:hover:border-gray-600" }, Mt = { class: "pt-3 flex justify-center" }, zt = /* @__PURE__ */ y({
  __name: "DateInput",
  props: {
    placeholder: { default: "Pick a date" },
    value: {},
    valueStartDate: {},
    valueEndDate: {},
    solid: { type: Boolean },
    darkLighter: { type: Boolean, default: !1 },
    darkDarker: { type: Boolean, default: !1 },
    error: { type: Boolean },
    success: { type: Boolean },
    onChange: {},
    range: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "update:valueStartDate", "update:valueEndDate", "change"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = D(/* @__PURE__ */ new Date()), n = D(null), p = D(null), d = D(null), C = D(!1), u = D(null), f = D(null), h = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], r = (x) => x < 10 ? `0${x}` : `${x}`, b = (x) => `${r(x.getDate())}/${r(x.getMonth() + 1)}/${x.getFullYear()}`, k = (x) => {
      if (!x) return null;
      const [L, T, F] = x.split("/"), R = Number(L), V = Number(T), X = Number(F);
      return !R || !V || !X ? null : new Date(X, V - 1, R);
    }, m = () => {
      const x = c.value.getFullYear(), L = c.value.getMonth(), T = new Date(x, L, 1).getDay(), F = new Date(x, L + 1, 0).getDate(), R = [];
      for (let V = 0; V < T; V++)
        R.push({ day: "", className: "", dayString: "" });
      for (let V = 1; V <= F; V++) {
        const X = new Date(x, L, V), ee = b(X);
        let q = "text-sm font-medium text-dark dark:text-white flex h-[46px] w-[46px] items-center justify-center rounded-full mb-2";
        if (e.range) {
          n.value && ee === n.value && (q += " bg-primary text-white dark:text-white rounded-r-none hover:brightness-90"), p.value && ee === p.value && (q += " bg-primary text-white dark:text-white rounded-l-none hover:brightness-90");
          const ne = k(n.value), ie = k(p.value);
          ne && ie && X > ne && X < ie && (q += " bg-dark-3 text-white rounded-none hover:bg-dark"), (!n.value && !p.value || !(ne && ie && X > ne && X < ie) && !(n.value === ee || p.value === ee)) && (q += " hover:bg-gray-2 dark:hover:bg-dark-2");
        } else
          d.value && ee === d.value ? q += " bg-primary text-white hover:brightness-90" : q += " hover:bg-gray-2 dark:hover:bg-dark-2";
        R.push({ day: V, className: q, dayString: ee });
      }
      return R;
    }, w = (x) => {
      var L, T;
      if (e.range) {
        if (!n.value || n.value && p.value)
          n.value = x, p.value = null;
        else {
          const R = k(n.value), V = k(x);
          R && V && V < R ? (p.value = n.value, n.value = x) : p.value = x;
        }
        const F = { startDate: n.value, endDate: p.value };
        o("update:valueStartDate", n.value), o("update:valueEndDate", p.value), o("change", F), (L = e.onChange) == null || L.call(e, F);
      } else {
        d.value = x;
        const F = x;
        o("update:value", F), o("change", F), (T = e.onChange) == null || T.call(e, F), C.value = !1;
      }
    }, Z = () => n.value && p.value ? `${n.value}-${p.value}` : n.value ? n.value : "", j = () => {
      if (e.range) {
        const x = k(e.valueStartDate ?? n.value) || k(e.valueEndDate ?? p.value);
        c.value = x ?? /* @__PURE__ */ new Date();
      } else {
        const x = k(e.value ?? d.value);
        c.value = x ?? /* @__PURE__ */ new Date();
      }
      C.value = !0;
    }, B = () => {
      C.value = !1;
    }, $ = (x) => {
      setTimeout(() => {
        const L = x.relatedTarget;
        u.value && !u.value.contains(document.activeElement) && !u.value.contains(L) && B();
      }, 0);
    }, W = g(
      () => c.value.toLocaleString("default", { month: "long", year: "numeric" })
    ), G = (x) => {
      c.value = new Date(c.value.setMonth(c.value.getMonth() + x));
    };
    J(() => {
      if (e.range) {
        n.value = e.valueStartDate ?? null, p.value = e.valueEndDate ?? null;
        const x = k(e.valueStartDate ?? e.valueEndDate ?? null);
        x && (c.value = x);
      } else if (e.value) {
        d.value = e.value;
        const x = k(e.value);
        x && (c.value = x);
      }
    }), re(
      () => e.value,
      (x) => {
        if (!e.range) {
          d.value = x ?? null;
          const L = k(x ?? null);
          L && (c.value = L);
        }
      }
    ), re([() => e.valueStartDate, () => e.valueEndDate], ([x, L]) => {
      if (e.range) {
        n.value = x ?? null, p.value = L ?? null;
        const T = k(x ?? L ?? null);
        T && (c.value = T);
      }
    });
    const K = () => {
      var x;
      (x = f.value) == null || x.focus();
    }, me = g(() => e.range ? e.valueStartDate || e.valueEndDate ? [e.valueStartDate ?? "", e.valueEndDate ?? ""].filter(Boolean).join("-") : Z() : e.value ?? d.value ?? ""), le = g(() => {
      const x = [
        "h-12",
        "w-full",
        "appearance-none",
        "pl-4",
        "pr-12",
        "rounded-md",
        "text-sm",
        "font-normal",
        "text-dark",
        "placeholder:text-dark-6",
        "outline-none",
        "transition",
        "border",
        "dark:text-white"
      ];
      return e.solid ? (x.push("bg-gray-2", "focus:bg-gray-2.5"), e.darkDarker ? x.push("dark:bg-[#0F131C]", "focus:dark:bg-[#06070A]") : e.darkLighter ? x.push("dark:bg-dark-2", "focus:dark:bg-dark-3") : x.push("dark:bg-dark", "focus:dark:bg-dark-darker")) : x.push("bg-transparent"), e.error ? x.push("border-red-600", "focus:border-red-700", "dark:focus:border-red-400") : e.success ? x.push("border-green-600", "focus:border-green-700", "dark:focus:border-green-400") : e.solid ? (x.push("border-gray-2", "focus:border-gray-2.5"), e.darkDarker ? x.push("dark:border-[#0F131C]", "focus:dark:border-[#06070A]") : e.darkLighter ? x.push("dark:border-dark-2", "focus:dark:border-dark-3") : x.push("dark:border-dark", "focus:dark:border-dark-darker")) : x.push(
        "border-gray-7",
        "focus:border-black",
        "active:border-black",
        "dark:border-gray-600",
        "focus:dark:border-gray-300"
      ), x.join(" ");
    }), se = () => {
      var x, L;
      if (e.range) {
        n.value = null, p.value = null, o("update:valueStartDate", null), o("update:valueEndDate", null);
        const T = { startDate: null, endDate: null };
        o("change", T), (x = e.onChange) == null || x.call(e, T);
      } else
        d.value = null, o("update:value", ""), o("change", ""), (L = e.onChange) == null || L.call(e, "");
    };
    return (x, L) => (s(), l("div", {
      ref_key: "wrapperRef",
      ref: u,
      class: "relative inline-block w-full mb-3"
    }, [
      i("input", {
        id: "datepicker",
        ref_key: "inputRef",
        ref: f,
        type: "text",
        placeholder: e.placeholder,
        class: v(le.value),
        value: me.value,
        readonly: "",
        onFocus: j,
        onBlur: $,
        onClick: j
      }, null, 42, kt),
      i("span", {
        class: "absolute inset-y-0 right-0 flex h-12 w-12 items-center justify-center text-dark-5 cursor-pointer",
        onMousedown: O(K, ["prevent"]),
        onClick: L[0] || (L[0] = O(() => {
        }, ["stop"]))
      }, [
        S(I(Ie))
      ], 32),
      ce(i("div", {
        id: "datepicker-container",
        class: v([
          "shadow-soft absolute left-0 z-40 mt-2 w-[340px] flex flex-col rounded-lg border border-stroke bg-white px-4 py-6 sm:px-6 sm:py-[30px] dark:border-dark-3 dark:bg-dark transition-all duration-200",
          C.value ? "top-full opacity-100 visible" : "top-[110%] invisible opacity-0 pointer-events-none"
        ]),
        onMousedown: L[3] || (L[3] = O(() => {
        }, ["prevent"])),
        onClick: L[4] || (L[4] = O(() => {
        }, ["stop"]))
      }, [
        i("div", vt, [
          i("p", xt, _(W.value), 1),
          i("div", Ct, [
            i("span", {
              id: "prevMonth",
              class: "flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white",
              onClick: L[1] || (L[1] = (T) => G(-1))
            }, [...L[5] || (L[5] = [
              i("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                class: "fill-current"
              }, [
                i("path", { d: "M10.825 14.325C10.675 14.325 10.525 14.275 10.425 14.15L4.77501 8.40002C4.55001 8.17502 4.55001 7.82502 4.77501 7.60002L10.425 1.85002C10.65 1.62502 11 1.62502 11.225 1.85002C11.45 2.07502 11.45 2.42502 11.225 2.65002L5.97501 8.00003L11.25 13.35C11.475 13.575 11.475 13.925 11.25 14.15C11.1 14.25 10.975 14.325 10.825 14.325Z" })
              ], -1)
            ])]),
            i("span", {
              id: "nextMonth",
              class: "flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark dark:text-white",
              onClick: L[2] || (L[2] = (T) => G(1))
            }, [...L[6] || (L[6] = [
              i("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                class: "fill-current"
              }, [
                i("path", { d: "M5.17501 14.325C5.02501 14.325 4.90001 14.275 4.77501 14.175C4.55001 13.95 4.55001 13.6 4.77501 13.375L10.025 8.00003L4.77501 2.65002C4.55001 2.42502 4.55001 2.07502 4.77501 1.85002C5.00001 1.62502 5.35001 1.62502 5.57501 1.85002L11.225 7.60002C11.45 7.82502 11.45 8.17502 11.225 8.40002L5.57501 14.15C5.47501 14.25 5.32501 14.325 5.17501 14.325Z" })
              ], -1)
            ])])
          ])
        ]),
        i("div", yt, [
          (s(), l(E, null, P(h, (T) => i("div", {
            key: T,
            class: "mb-2 mt-4 flex h-[38px] w-[38px] items-center justify-center"
          }, _(T), 1)), 64)),
          (s(!0), l(E, null, P(m(), (T, F) => (s(), l("div", {
            key: F,
            class: v(T.className),
            "data-date": T.dayString,
            onClick: (R) => w(T.dayString)
          }, _(T.day), 11, wt))), 128))
        ]),
        e.range ? (s(), l("div", Lt, [
          i("button", _t, _(n.value || "Select Start Date"), 1),
          i("button", $t, _(p.value || "Select End Date"), 1)
        ])) : M("", !0),
        i("div", Mt, [
          i("button", {
            type: "button",
            class: "h-[32px] w-full rounded border border-stroke bg-transparent px-4 text-xs font-medium text-body-color hover:border-primary focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:hover:border-gray-600 cursor-pointer",
            onClick: se
          }, _(e.range ? "Clear Dates" : "Clear Date"), 1)
        ])
      ], 34), [
        [ue, C.value]
      ])
    ], 512));
  }
}), Bt = {
  key: 1,
  class: "pb-3 text-xl font-medium text-dark dark:text-white sm:text-2xl"
}, Dt = {
  key: 2,
  class: "text-base leading-relaxed mb-7 text-body-color dark:text-dark-6"
}, St = {
  key: 3,
  class: "mb-7 text-left"
}, Zt = { class: "-mx-2 flex flex-wrap justify-center" }, Tt = /* @__PURE__ */ y({
  __name: "Dialog",
  props: {
    visible: { type: Boolean, default: !1 },
    title: { default: "" },
    message: { default: "" },
    type: { default: "default" },
    buttons: { default: () => [] },
    confirmText: { default: "OK" },
    cancelText: { default: "Cancel" },
    showCancel: { type: Boolean, default: !0 },
    closeOnOutside: { type: Boolean, default: !0 },
    className: { default: "" }
  },
  emits: ["update:visible", "confirm", "cancel", "close"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = D(null), n = (m) => {
      o("update:visible", m), o("close");
    }, p = (m) => {
      m.key === "Escape" && n(!1);
    }, d = g(
      () => e.visible ? "opacity-100" : "opacity-0 pointer-events-none"
    ), C = g(
      () => e.visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
    );
    J(() => {
      document.addEventListener("keydown", p);
    }), Q(() => {
      document.removeEventListener("keydown", p);
    });
    const u = g(() => e.type === "danger" ? {
      colorClasses: "bg-red-light-5 text-red-dark",
      Icon: Ge
    } : e.type === "success" ? {
      colorClasses: "bg-green-100 text-green-600",
      Icon: Ne
    } : e.type === "warning" ? {
      colorClasses: "bg-yellow-100 text-yellow-600",
      Icon: Ve
    } : null), f = g(() => {
      const m = e.type === "danger" ? "danger" : e.type === "success" ? "success" : e.type === "warning" ? "warning" : "primary", w = [];
      return e.showCancel && w.push({ label: e.cancelText ?? "Cancel", action: "cancel", type: "light" }), w.push({ label: e.confirmText ?? "OK", action: "confirm", type: m }), w;
    }), h = g(
      () => {
        var m;
        return (m = e.buttons) != null && m.length ? e.buttons : f.value;
      }
    ), r = g(() => h.value.length === 1), b = (m) => ({
      primary: m === "primary",
      default: m === "default",
      light: m === "light",
      danger: m === "danger",
      warning: m === "warning",
      success: m === "success"
    }), k = (m) => {
      var w, Z, j;
      if (m.action === "cancel") {
        o("cancel"), n(!1), (w = m.onClick) == null || w.call(m);
        return;
      }
      if (m.action === "confirm") {
        o("confirm"), n(!1), (Z = m.onClick) == null || Z.call(m);
        return;
      }
      (j = m.onClick) == null || j.call(m);
    };
    return (m, w) => {
      var Z, j;
      return s(), l("div", {
        class: v(["fixed top-0 left-0 flex items-center justify-center w-full h-full min-h-screen px-4 py-5 bg-dark/70 dark:bg-[#8094BD]/40 z-50 transition-opacity duration-200", d.value]),
        onClick: w[0] || (w[0] = O((B) => e.closeOnOutside ? n(!1) : void 0, ["self"]))
      }, [
        i("div", {
          ref_key: "modalContainer",
          ref: c,
          class: v(["w-full max-w-[450px] rounded-lg bg-white dark:bg-dark py-8 px-6 text-center md:py-[42px] md:px-[60px] mt-[-15vh] transform transition-all duration-300", [C.value, e.className]]),
          role: "dialog",
          "aria-modal": "true"
        }, [
          u.value ? (s(), l("div", {
            key: 0,
            class: v(["mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full", (Z = u.value) == null ? void 0 : Z.colorClasses])
          }, [
            (s(), N(U((j = u.value) == null ? void 0 : j.Icon), { size: "26" }))
          ], 2)) : M("", !0),
          e.title ? (s(), l("h3", Bt, _(e.title), 1)) : M("", !0),
          e.message ? (s(), l("p", Dt, _(e.message), 1)) : M("", !0),
          m.$slots.default ? (s(), l("div", St, [
            z(m.$slots, "default")
          ])) : M("", !0),
          i("div", Zt, [
            (s(!0), l(E, null, P(h.value, (B, $) => (s(), l("div", {
              key: $,
              class: v([r.value ? "w-full max-w-[320px]" : "w-1/2", "px-2"])
            }, [
              S(pe, {
                label: B.label,
                primary: b(B.type).primary,
                default: b(B.type).default,
                light: b(B.type).light,
                danger: b(B.type).danger,
                warning: b(B.type).warning,
                success: b(B.type).success,
                "class-name": "block w-full",
                onClick: (W) => k(B)
              }, null, 8, ["label", "primary", "default", "light", "danger", "warning", "success", "onClick"])
            ], 2))), 128))
          ])
        ], 2)
      ], 2);
    };
  }
}), Et = {
  key: 0,
  class: "mb-4 flex justify-between flex-shrink-0"
}, It = { class: "flex-1 overflow-y-auto space-y-[30px]" }, Nt = {
  key: 1,
  class: "pt-5 flex-shrink-0"
}, Pt = /* @__PURE__ */ y({
  __name: "Drawer",
  props: {
    visible: { type: Boolean, default: !1 },
    side: { default: "right" },
    title: {},
    afterOpen: {}
  },
  emits: ["close"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = D(null), n = g(
      () => e.side === "right" ? "right-0 translate-x-0" : "left-0 -translate-x-0"
    ), p = g(
      () => e.side === "right" ? "translate-x-full" : "-translate-x-full"
    ), d = (f) => {
      f.key === "Escape" && e.visible && o("close");
    }, C = () => {
      document.body.style.overflow = "hidden", document.body.style.overflowY = "hidden", document.body.style.overflowX = "hidden", document.documentElement.style.overflowX = "hidden";
    }, u = () => {
      document.body.style.overflow = "", document.body.style.overflowY = "", document.body.style.overflowX = "", document.documentElement.style.overflowX = "";
    };
    return re(
      () => e.visible,
      (f) => {
        f ? (C(), de(() => {
          var k;
          const h = c.value;
          if (!h) {
            (k = e.afterOpen) == null || k.call(e);
            return;
          }
          const r = () => {
            var m;
            clearTimeout(b), h.removeEventListener("transitionend", r), (m = e.afterOpen) == null || m.call(e);
          }, b = setTimeout(r, 350);
          h.addEventListener("transitionend", r);
        })) : u();
      }
    ), J(() => {
      document.addEventListener("keydown", d);
    }), Q(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = "";
    }), (f, h) => (s(), l(E, null, [
      i("div", {
        class: v(["fixed inset-0 z-40 bg-black/40 transition-opacity duration-300", e.visible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"]),
        onClick: h[0] || (h[0] = (r) => f.$emit("close"))
      }, null, 2),
      i("div", {
        ref_key: "panelRef",
        ref: c,
        class: v(["fixed top-0 z-50 h-screen w-[85vw] md:w-full md:max-w-[400px] bg-white dark:bg-dark-2 py-6 px-5 sm:px-9 shadow-xl transition-transform duration-300 will-change-transform flex flex-col", [
          e.visible ? n.value : p.value,
          e.side === "right" ? "right-0" : "left-0"
        ]])
      }, [
        i("button", {
          class: "absolute top-5 right-5 z-10 text-dark-5 hover:text-black dark:hover:text-white cursor-pointer",
          onClick: h[1] || (h[1] = (r) => f.$emit("close"))
        }, [
          S(I(Fe))
        ]),
        e.title ? (s(), l("div", Et, [
          S(ae, { h3: "" }, {
            default: H(() => [
              te(_(e.title), 1)
            ]),
            _: 1
          })
        ])) : M("", !0),
        i("div", It, [
          z(f.$slots, "default")
        ]),
        f.$slots.footer ? (s(), l("div", Nt, [
          z(f.$slots, "footer")
        ])) : M("", !0)
      ], 2)
    ], 64));
  }
}), jt = {
  key: 0,
  class: "mb-1 md:mb-2 block text-[13px] text-dark dark:text-white"
}, Gt = {
  key: 1,
  class: "mb-2"
}, Vt = {
  key: 2,
  class: "mt-2"
}, Ft = {
  key: 3,
  class: "mt-2 text-xs text-red-600 dark:text-red-500"
}, Ot = {
  key: 4,
  class: "mt-2 text-xs text-green-600 dark:text-green-500"
}, Rt = /* @__PURE__ */ y({
  __name: "Field",
  props: {
    label: {},
    error: {},
    success: {},
    note: {},
    notePosition: { default: "above" },
    class: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (s(), l("div", {
      class: v(["w-full", t.class])
    }, [
      t.label ? (s(), l("label", jt, _(t.label), 1)) : M("", !0),
      t.note && t.notePosition === "above" ? (s(), l("div", Gt, [
        S(ae, {
          small: "",
          faint: "",
          "no-margin": ""
        }, {
          default: H(() => [
            te(_(t.note), 1)
          ]),
          _: 1
        })
      ])) : M("", !0),
      i("div", null, [
        z(e.$slots, "default")
      ]),
      t.note && t.notePosition === "below" ? (s(), l("div", Vt, [
        S(ae, {
          small: "",
          faint: "",
          "no-margin": ""
        }, {
          default: H(() => [
            te(_(t.note), 1)
          ]),
          _: 1
        })
      ])) : M("", !0),
      t.error ? (s(), l("div", Ft, _(t.error), 1)) : M("", !0),
      t.success ? (s(), l("div", Ot, _(t.success), 1)) : M("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ y({
  __name: "Fieldset",
  props: {
    gap: { default: 6 },
    className: {}
  },
  setup(a) {
    const t = a, e = g(() => {
      const c = Number.isFinite(t.gap) ? Math.floor(t.gap) : 0;
      return c < 0 ? 0 : c;
    }), o = g(() => [
      "flex flex-col w-full",
      `gap-${e.value}`,
      t.className
    ]);
    return (c, n) => (s(), l("div", {
      class: v(o.value)
    }, [
      z(c.$slots, "default")
    ], 2));
  }
}), Ht = {
  key: 0,
  class: "relative"
}, Wt = { class: "pl-4 pr-2 text-dark-5 flex items-center" }, Kt = ["value", "placeholder"], Xt = ["type", "value", "placeholder"], qt = /* @__PURE__ */ y({
  __name: "Input",
  props: {
    type: { default: "text" },
    value: { default: void 0 },
    placeholder: { default: "" },
    solid: { type: Boolean },
    darkLighter: { type: Boolean, default: !1 },
    darkDarker: { type: Boolean, default: !1 },
    error: { type: Boolean },
    success: { type: Boolean },
    className: { default: "" },
    onChange: { type: Function, default: void 0 }
  },
  emits: ["update:value", "change"],
  setup(a, { expose: t, emit: e }) {
    const o = a, c = e, n = g(() => {
      const r = [
        "w-full",
        "rounded-md",
        "py-[13px]",
        "px-5",
        "text-sm",
        "font-normal",
        "text-dark",
        "placeholder:text-dark-6",
        "outline-none",
        "transition",
        "disabled:cursor-default",
        "disabled:bg-gray-2",
        "disabled:border-gray-2",
        "border",
        "dark:text-white"
      ];
      return o.solid ? (r.push("bg-gray-2", "focus:bg-gray-2.5"), o.darkDarker ? r.push("dark:bg-[#0F131C]", "focus:dark:bg-[#06070A]", "focus:dark:border-[#06070A]") : o.darkLighter ? r.push("dark:bg-dark-2", "focus:dark:bg-dark-3", "focus:dark:border-dark-3") : r.push("dark:bg-dark", "focus:dark:bg-dark-darker", "focus:dark:border-dark-darker")) : r.push("bg-transparent"), o.error ? r.push("border-red-600", "focus:border-red-700", "dark:focus:border-red-400") : o.success ? r.push("border-green-600", "focus:border-green-700", "dark:focus:border-green-400") : o.solid ? (r.push("border-gray-2", "focus:border-gray-2.5"), o.darkDarker ? r.push("dark:border-[#0F131C]", "focus:dark:border-[#06070A]") : o.darkLighter ? r.push("dark:border-dark-2", "focus:dark:border-dark-3") : r.push("dark:border-dark", "focus:dark:border-dark-darker")) : r.push(
        "border-gray-7",
        "dark:border-gray-600",
        "focus:border-black",
        "active:border-black",
        "dark:focus:border-gray-300",
        "dark:active:border-white"
      ), o.className && r.push(o.className), r.join(" ");
    }), p = g(() => {
      const r = [
        "w-full",
        "rounded-md",
        "border",
        "transition",
        "flex",
        "items-center"
      ];
      return o.solid ? (r.push("bg-gray-2"), o.darkDarker ? r.push("dark:bg-[#0F131C]") : o.darkLighter ? r.push("dark:bg-dark-2") : r.push("dark:bg-dark")) : r.push("bg-transparent"), o.error ? r.push("border-red-600") : o.success ? r.push("border-green-600") : o.solid ? (r.push("border-gray-2"), o.darkDarker ? r.push("dark:border-[#0F131C]") : o.darkLighter ? r.push("dark:border-dark-2") : r.push("dark:border-dark")) : r.push("border-gray-7", "dark:border-gray-600"), o.className && r.push(o.className), r.join(" ");
    }), d = (r) => {
      const b = r.target;
      let k = b.value;
      o.type === "number" && (k = b.value === "" ? void 0 : Number(b.value)), c("update:value", k);
    }, C = (r) => {
      var b;
      c("change", r), (b = o.onChange) == null || b.call(o, r);
    }, u = D(null), f = () => {
      var b;
      const r = (b = u.value) == null ? void 0 : b.parentElement;
      r && (o.solid ? o.darkDarker ? r.classList.add(
        "bg-gray-2.5",
        "border-gray-2.5",
        "!dark:bg-[#06070A]",
        "!dark:border-[#06070A]"
      ) : o.darkLighter ? r.classList.add("bg-gray-2.5", "border-gray-2.5", "dark:bg-dark-3", "dark:border-dark-3") : r.classList.add(
        "bg-gray-2.5",
        "border-gray-2.5",
        "dark:bg-dark-darker",
        "dark:border-dark-darker"
      ) : r.classList.add("border-black", "dark:ring-gray-300"));
    }, h = () => {
      var b;
      const r = (b = u.value) == null ? void 0 : b.parentElement;
      r && (r.classList.remove("border-black", "dark:ring-gray-300"), o.solid && (r.classList.remove("bg-gray-2.5", "border-gray-2.5"), o.darkDarker ? r.classList.remove("!dark:bg-[#06070A]", "!dark:border-[#06070A]") : o.darkLighter ? r.classList.remove("dark:bg-dark-3", "dark:border-dark-3") : r.classList.remove("dark:bg-dark-darker", "dark:border-dark-darker")));
    };
    return t({
      focus: () => {
        var r;
        return (r = u.value) == null ? void 0 : r.focus();
      }
    }), (r, b) => o.type === "search" ? (s(), l("div", Ht, [
      i("div", {
        class: v([p.value, "peer"])
      }, [
        i("span", Wt, [
          S(I(Be), { size: "18" })
        ]),
        i("input", {
          ref_key: "inputRef",
          ref: u,
          type: "search",
          value: o.value,
          placeholder: o.placeholder,
          class: "flex-1 bg-transparent outline-none text-sm font-normal text-dark dark:text-white py-[13px] pr-4",
          onFocus: b[0] || (b[0] = (k) => f()),
          onBlur: b[1] || (b[1] = (k) => h()),
          onInput: d,
          onChange: C
        }, null, 40, Kt)
      ], 2)
    ])) : (s(), l("input", {
      key: 1,
      ref_key: "inputRef",
      ref: u,
      type: o.type,
      value: o.value,
      placeholder: o.placeholder,
      class: v(n.value),
      onInput: d,
      onChange: C
    }, null, 42, Xt));
  }
}), Yt = ["href", "target", "rel"], Jt = /* @__PURE__ */ y({
  __name: "Link",
  props: {
    to: {},
    href: {},
    underline: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  emits: ["click"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = _e(), n = c == null ? void 0 : c.appContext.config.globalProperties.$router, p = g(() => e.href ? e.href.startsWith("http://") || e.href.startsWith("https://") : !1), d = g(() => {
      const u = [
        "text-primary",
        "hover:text-primary-dark",
        "dark:brightness-110",
        "transition-colors",
        "cursor-pointer",
        "inline-flex",
        "items-center"
      ];
      return e.underline ? u.push("underline") : u.push("hover:underline"), e.className && u.push(e.className), u.join(" ");
    }), C = (u) => {
      o("click", u), e.to && n && (u.preventDefault(), n.push(e.to));
    };
    return (u, f) => e.href ? (s(), l("a", {
      key: 0,
      href: e.href,
      target: p.value ? "_blank" : void 0,
      rel: p.value ? "noopener noreferrer" : void 0,
      class: v(d.value)
    }, [
      z(u.$slots, "default")
    ], 10, Yt)) : e.to ? (s(), l("a", {
      key: 1,
      class: v(d.value),
      onClick: C
    }, [
      z(u.$slots, "default")
    ], 2)) : (s(), l("span", {
      key: 2,
      class: v(d.value)
    }, [
      z(u.$slots, "default")
    ], 2));
  }
}), Ut = ["onClick"], Qt = { key: 1 }, er = { class: "text-xl font-medium text-white truncate" }, tr = { class: "mt-3" }, rr = ["onClick"], ar = "#F5F7F9", sr = "#F5F7F9", or = /* @__PURE__ */ y({
  __name: "MainNav",
  props: {
    items: {},
    className: {},
    activeValue: {},
    collapseBreakpointPx: { default: 1120 },
    largeGapBreakpointPx: { default: 1300 }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, o = D(!1), c = D(!1), n = D(!1), p = () => {
      const r = window.innerWidth;
      c.value = r >= (e.collapseBreakpointPx ?? 1120), n.value = r >= (e.largeGapBreakpointPx ?? 1300);
    };
    J(() => {
      p(), window.addEventListener("resize", p);
    }), Q(() => {
      window.removeEventListener("resize", p);
    });
    const d = (r) => e.activeValue === (r ?? ""), C = t, u = (r, b) => C("select", r, b), f = g(() => e.items.find((r) => d(r.value))), h = g(() => {
      var r, b;
      return ((r = f.value) == null ? void 0 : r.label) ?? ((b = f.value) == null ? void 0 : b.value) ?? "";
    });
    return (r, b) => (s(), l("nav", {
      class: v(["w-full", [e.className, (c.value, "md:pt-3")]])
    }, [
      i("div", {
        class: v(["w-full flex md:items-end justify-between", c.value ? "pl-2" : "pl-0"])
      }, [
        i("div", {
          class: v([c.value ? "flex" : "hidden", "pl-2", n.value ? "gap-3" : "gap-1"])
        }, [
          (s(!0), l(E, null, P(e.items, (k) => (s(), l("a", {
            key: (k.label || "") + String(k.value),
            href: "#",
            class: v([
              n.value ? "text-base h-10" : "text-sm h-8",
              "font-medium hover:text-white flex flex-col items-center justify-between",
              d(k.value) ? "text-white font-semibold" : "text-gray-400",
              k.icon ? "px-0" : "px-3"
            ]),
            onClick: O((m) => k.onClick ? k.onClick() : u(String(k.value ?? "")), ["prevent"])
          }, [
            k.icon ? (s(), N(U(k.icon), {
              key: 0,
              size: "19"
            })) : (s(), l("span", Qt, _(k.label), 1)),
            d(k.value) ? (s(), l("span", {
              key: 2,
              class: "pointer-events-none h-0 w-0 rotate-180 border-l-[5px] border-r-[5px] border-t-[7px] dark:hidden",
              style: Y({
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderTopColor: k.color || ar
              })
            }, null, 4)) : M("", !0),
            d(k.value) ? (s(), l("span", {
              key: 3,
              class: "hidden dark:inline-block pointer-events-none h-0 w-0 rotate-180 border-l-[5px] border-r-[5px] border-t-[7px]",
              style: Y({
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderTopColor: k.colorDark || k.color || sr
              })
            }, null, 4)) : M("", !0)
          ], 10, Ut))), 128))
        ], 2),
        i("div", {
          class: v([c.value ? "hidden" : "flex", "flex-1 flex-col grow-1"])
        }, [
          i("button", {
            type: "button",
            class: "h-14 text-gray-300 hover:text-white transition flex items-center gap-3 py-3 px-4 cursor-pointer",
            "aria-label": "Toggle navigation",
            onClick: b[0] || (b[0] = (k) => o.value = !o.value)
          }, [
            S(I(ye), {
              class: v([o.value ? "rotate-180" : "rotate-0", "transition-transform"]),
              size: "12"
            }, null, 8, ["class"]),
            i("div", er, _(h.value), 1)
          ])
        ], 2),
        z(r.$slots, "default")
      ], 2),
      ce(i("div", tr, [
        (s(!0), l(E, null, P(e.items, (k) => (s(), l("a", {
          key: "m-" + (k.label || "") + String(k.value),
          href: "#",
          class: v([
            "block px-3 py-4 text-sm font-medium",
            d(k.value) ? "bg-white/16 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
          ]),
          onClick: O(
            () => {
              o.value = !1, k.onClick ? k.onClick() : u(String(k.value ?? ""));
            },
            ["prevent"]
          )
        }, _(k.label ?? k.value), 11, rr))), 128))
      ], 512), [
        [ue, o.value]
      ])
    ], 2));
  }
}), lr = /* @__PURE__ */ y({
  __name: "MasonaryGrid",
  props: {
    containerClass: { default: "columns-1 min-[1200px]:columns-2 min-[1800px]:columns-3 gap-6" },
    itemClass: { default: "mb-6 break-inside-avoid" }
  },
  setup(a) {
    const t = a, e = oe(), o = g(() => (e.default ? e.default() : []).map((n, p) => {
      var d;
      return fe(n, {
        class: [(d = n.props) == null ? void 0 : d.class, t.itemClass],
        key: n.key ?? p
      });
    }));
    return (c, n) => (s(), l("div", {
      class: v(t.containerClass)
    }, [
      (s(!0), l(E, null, P(o.value, (p, d) => (s(), N(U(p), {
        key: p.key ?? d
      }))), 128))
    ], 2));
  }
}), nr = {
  key: 0,
  class: "flex-shrink-0 px-4 md:px-12 pt-6 md:pt-10 sm:px-8 sm:pt-8 pb-4"
}, ir = { class: "flex-1 overflow-y-auto px-4 md:px-12 sm:px-8" }, dr = {
  key: 1,
  class: "flex-shrink-0 h-16 bg-white/95 dark:bg-dark backdrop-blur flex items-center justify-end gap-3 px-4 md:px-12 sm:px-8"
}, cr = /* @__PURE__ */ y({
  __name: "Modal",
  props: {
    visible: { type: Boolean, default: !1 },
    title: {},
    fullScreen: { type: Boolean, default: !1 },
    disableOverlayClickClose: { type: Boolean, default: !1 },
    beforeOpen: {},
    afterOpen: {},
    beforeClose: {},
    afterClose: {}
  },
  emits: ["close"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = () => {
      e.disableOverlayClickClose || o("close");
    }, n = D(null), p = g(
      () => e.visible ? "opacity-100" : "opacity-0 pointer-events-none"
    ), d = g(
      () => e.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
    ), C = g(
      () => e.fullScreen ? "fixed inset-0 w-screen h-screen rounded-none bg-white dark:bg-dark shadow-none dark:shadow-none transition-all duration-200 transform overflow-hidden flex flex-col" : "fixed top-0 md:top-[120px] bottom-0 w-[100vw] mx-0 md:w-[90vw] md:mx-[5vw] min-[1300px]:w-[1170px] min-[1300px]:mx-auto min-[1300px]:left-1/2 min-[1300px]:-translate-x-1/2 md:rounded-t-xl bg-white dark:bg-dark shadow-1 dark:shadow-card transition-all duration-200 transform overflow-hidden flex flex-col"
    ), u = () => {
      document.body.style.overflow = "hidden";
    }, f = () => {
      document.body.style.overflow = "";
    }, h = (r) => {
      if (typeof r == "function")
        try {
          r();
        } catch (b) {
          console.error(b);
        }
    };
    return re(
      () => e.visible,
      (r) => {
        r ? (u(), h(e.beforeOpen), de(() => {
          const b = n.value;
          if (!b) {
            h(e.afterOpen);
            return;
          }
          const k = () => {
            clearTimeout(m), b.removeEventListener("transitionend", k), h(e.afterOpen);
          }, m = setTimeout(k, 250);
          b.addEventListener("transitionend", k);
        })) : (h(e.beforeClose), de(() => {
          const b = n.value;
          if (!b) {
            h(e.afterClose), f();
            return;
          }
          const k = () => {
            clearTimeout(m), b.removeEventListener("transitionend", k), h(e.afterClose), f();
          }, m = setTimeout(k, 250);
          b.addEventListener("transitionend", k);
        }));
      }
    ), J(() => {
    }), Q(() => f()), (r, b) => (s(), l(E, null, [
      i("div", {
        class: v(["fixed inset-0 z-40 bg-dark/70 dark:bg-[#8094BD]/40 transition-opacity duration-200", p.value]),
        onClick: c
      }, null, 2),
      i("div", {
        class: v([p.value, "fixed inset-0 z-50 transition-opacity duration-200"]),
        "aria-modal": "true",
        role: "dialog",
        onClick: O(c, ["self"])
      }, [
        i("div", {
          ref_key: "panelRef",
          ref: n,
          class: v([C.value, d.value])
        }, [
          i("button", {
            class: "absolute top-5 right-5 z-10 text-dark-5 hover:text-black cursor-pointer dark:text-white/80 dark:hover:text-white",
            onClick: b[0] || (b[0] = (k) => r.$emit("close"))
          }, [
            S(I(Oe))
          ]),
          e.title ? (s(), l("div", nr, [
            S(ae, { h2: "" }, {
              default: H(() => [
                te(_(e.title), 1)
              ]),
              _: 1
            })
          ])) : M("", !0),
          i("div", ir, [
            z(r.$slots, "default")
          ]),
          r.$slots.footer ? (s(), l("div", dr, [
            z(r.$slots, "footer")
          ])) : M("", !0)
        ], 2)
      ], 2)
    ], 64));
  }
}), ur = { class: "inline-flex overflow-hidden rounded-lg border border-stroke dark:border-white/5" }, pr = ["disabled"], fr = ["onClick"], hr = { key: 0 }, gr = { key: 1 }, mr = ["disabled"], br = /* @__PURE__ */ y({
  __name: "Pagination",
  props: {
    currentPage: { default: 1 },
    totalPages: { default: void 0 },
    totalItems: { default: 0 },
    pageSize: { default: 10 },
    maxVisible: { default: 5 },
    className: { default: "" },
    align: { default: "right" }
  },
  emits: ["update:currentPage", "change"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = D(e.currentPage);
    re(
      () => e.currentPage,
      (m) => {
        typeof m == "number" && m !== c.value && (c.value = m);
      }
    );
    const n = g(() => {
      if (e.totalPages && e.totalPages > 0) return e.totalPages;
      const m = Math.max(0, e.totalItems || 0), w = Math.max(1, e.pageSize || 1);
      return Math.max(1, Math.ceil(m / w));
    }), p = (m) => Math.min(n.value, Math.max(1, m)), d = (m) => {
      const w = p(m);
      w !== c.value && (c.value = w, o("update:currentPage", w), o("change", w));
    }, C = (m) => d(c.value + m), u = D([]);
    $e(() => {
      const m = Math.max(1, e.maxVisible || 5), w = Math.max(1, c.value - Math.floor(m / 2)), Z = Math.min(n.value, w + m - 1), j = Math.max(1, Z - m + 1), B = [];
      for (let $ = j; $ <= Z; $++) B.push($);
      u.value = B;
    });
    const f = g(() => {
      const m = Math.max(1, e.maxVisible || 5), w = u.value[u.value.length - 1];
      return n.value > m && w < n.value;
    }), h = g(() => {
      const m = Math.max(1, e.maxVisible || 5);
      return n.value > m && c.value <= n.value - m + 2;
    }), r = g(() => c.value <= 1), b = g(() => c.value >= n.value), k = g(
      () => e.align === "left" ? "justify-start" : e.align === "right" ? "justify-end" : "justify-center"
    );
    return (m, w) => (s(), l("div", {
      class: v(["flex items-center", k.value, e.className])
    }, [
      i("ul", ur, [
        i("li", null, [
          i("button", {
            type: "button",
            disabled: r.value,
            class: "flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2 disabled:opacity-50 disabled:cursor-not-allowed dark:border-white/10 dark:text-white dark:hover:bg-white/5",
            onClick: w[0] || (w[0] = (Z) => C(-1))
          }, [
            S(I(Pe), { size: "14" })
          ], 8, pr)
        ]),
        (s(!0), l(E, null, P(u.value, (Z) => (s(), l("li", { key: Z }, [
          i("button", {
            type: "button",
            class: v([
              "flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium transition-colors dark:border-white/10 cursor-pointer",
              Z === c.value ? "bg-gray-2 text-black hover:brightness-110 dark:bg-gray-700 dark:text-white dark:border-r-transparent" : "text-dark/80 dark:text-white/80 hover:bg-gray-2 dark:hover:bg-white/5"
            ]),
            onClick: (j) => d(Z)
          }, _(Z), 11, fr)
        ]))), 128)),
        h.value ? (s(), l("li", hr, [...w[3] || (w[3] = [
          i("span", { class: "flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base text-dark dark:text-white dark:border-white/10" }, "…", -1)
        ])])) : M("", !0),
        f.value ? (s(), l("li", gr, [
          i("button", {
            type: "button",
            class: "flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2 dark:border-white/10 dark:text-white dark:hover:bg-white/5",
            onClick: w[1] || (w[1] = (Z) => d(n.value))
          }, _(n.value), 1)
        ])) : M("", !0),
        i("li", null, [
          i("button", {
            type: "button",
            disabled: b.value,
            class: "flex h-10 min-w-10 items-center justify-center px-2 text-base font-medium text-dark hover:bg-gray-2 disabled:opacity-50 disabled:cursor-not-allowed dark:border-white/10 dark:text-white dark:hover:bg-white/5",
            onClick: w[2] || (w[2] = (Z) => C(1))
          }, [
            S(I(je), { size: "14" })
          ], 8, mr)
        ])
      ])
    ], 2));
  }
}), kr = ["onClick"], vr = /* @__PURE__ */ y({
  __name: "RadioGroup",
  props: {
    options: { default: () => [] },
    modelValue: {},
    className: {},
    disabled: { type: Boolean, default: !1 },
    size: { default: "md" },
    onChange: {}
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = g(
      () => e.options.map((u) => typeof u == "string" ? { label: u, value: u } : u)
    ), n = (u) => e.modelValue === u, p = (u) => {
      var f;
      e.disabled || (o("update:modelValue", u), o("change", u), (f = e.onChange) == null || f.call(e, u));
    }, d = {
      xs: "text-[11px] py-0.75 px-2",
      sm: "text-xs py-1.5 px-3",
      md: "text-sm py-2 px-5",
      lg: "text-lg py-2.5 px-8",
      xl: "text-xl py-4 px-9"
    }, C = {
      xs: { first: "rounded-l-sm", last: "rounded-r-sm" },
      sm: { first: "rounded-l-md", last: "rounded-r-md" },
      md: { first: "rounded-l-md", last: "rounded-r-md" },
      lg: { first: "rounded-l-lg", last: "rounded-r-lg" },
      xl: { first: "rounded-l-[10px]", last: "rounded-r-[10px]" }
    };
    return (u, f) => (s(), l("div", {
      class: v(["inline-flex items-center", e.className])
    }, [
      (s(!0), l(E, null, P(c.value, (h, r) => (s(), l("button", {
        key: String(h.value),
        type: "button",
        class: v(["font-medium outline-none border border-gray-7 dark:border-gray-500 cursor-pointer", [
          // size
          d[e.size],
          // shape
          r === 0 ? C[e.size].first : "-ml-px",
          r === c.value.length - 1 ? C[e.size].last : "",
          // state
          e.disabled ? "opacity-60 cursor-not-allowed" : "",
          n(h.value) ? "bg-primary text-white border-primary hover:brightness-90 dark:border-primary" : "text-black/70 dark:text-white/70 border-stroke hover:bg-gray-2 hover:text-black hover:dark:bg-gray-800 hover:dark:text-white"
        ]]),
        onClick: (b) => p(h.value)
      }, _(h.label), 11, kr))), 128))
    ], 2));
  }
}), xr = ["name", "value", "disabled"], Cr = {
  key: 0,
  value: "",
  disabled: "",
  selected: "",
  hidden: ""
}, yr = ["value", "disabled"], wr = /* @__PURE__ */ y({
  __name: "Select",
  props: {
    options: { default: () => [] },
    modelValue: {},
    placeholder: { default: "" },
    name: {},
    disabled: { type: Boolean, default: !1 },
    solid: { type: Boolean, default: !1 },
    darkDarker: { type: Boolean, default: !1 },
    selectClass: {},
    discColor: {},
    onChange: {}
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: t }) {
    const e = a, o = ke(), c = t, n = g(
      () => e.options.map((f) => typeof f == "string" ? { label: f, value: f } : f)
    ), p = g(
      () => e.modelValue === void 0 || e.modelValue === null || e.modelValue === ""
    ), d = g(() => e.discColor ? {
      success: "#10b981",
      // green
      danger: "#ef4444",
      // red
      warning: "#f59e0b"
      // orange/amber
    }[e.discColor] || e.discColor : void 0), C = g(() => {
      const f = [
        "w-full",
        "appearance-none",
        "rounded-md",
        "border",
        "py-[13px]",
        d.value ? "pl-9" : "pl-4",
        "pr-12",
        "text-sm",
        "font-normal",
        p.value ? "text-dark/50 dark:text-white/50" : "text-dark dark:text-white",
        "placeholder:text-dark-6",
        "outline-none",
        "transition",
        e.disabled ? "cursor-not-allowed opacity-60" : ""
      ];
      return e.solid ? (f.push("bg-gray-2", "focus:bg-gray-2.5"), e.darkDarker ? f.push("dark:bg-[#0F131C]", "focus:dark:bg-[#06070A]", "focus:dark:border-[#06070A]") : f.push("dark:bg-dark", "focus:dark:bg-dark-darker", "focus:dark:border-dark-darker")) : f.push("bg-transparent"), e.solid ? (f.push("border-gray-2", "focus:border-gray-2.5"), e.darkDarker ? f.push("dark:border-[#0F131C]", "focus:dark:border-[#06070A]") : f.push("dark:border-dark", "focus:dark:border-dark-darker")) : f.push(
        "border-gray-7",
        "focus:border-black",
        "active:border-black",
        "dark:border-gray-600",
        "dark:focus:border-gray-300"
      ), e.selectClass && f.push(e.selectClass), f.join(" ");
    }), u = (f) => {
      var b;
      const r = f.target.value;
      c("update:modelValue", r), c("change", r, f), (b = e.onChange) == null || b.call(e, r, f);
    };
    return (f, h) => (s(), l("div", {
      class: v(["relative inline-block w-full", I(o).class])
    }, [
      i("select", {
        name: a.name,
        value: e.modelValue ?? "",
        disabled: e.disabled,
        class: v(C.value),
        onChange: u
      }, [
        e.placeholder ? (s(), l("option", Cr, _(e.placeholder), 1)) : M("", !0),
        (s(!0), l(E, null, P(n.value, (r) => (s(), l("option", {
          key: String(r.value),
          value: r.value,
          disabled: r.disabled
        }, _(r.label), 9, yr))), 128))
      ], 42, xr),
      d.value ? (s(), l("span", {
        key: 0,
        class: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full",
        style: Y({ backgroundColor: d.value })
      }, null, 4)) : M("", !0),
      i("span", {
        class: v(["pointer-events-none absolute right-0 top-0 flex h-full w-12 items-center justify-center text-dark-5 dark:text-gray-500 opacity-80", e.disabled ? "opacity-50" : ""])
      }, [
        S(I(Ce), { size: "19" })
      ], 2)
    ], 2));
  }
}), Lr = { class: "flex flex-col gap-3" }, _r = ["onClick"], $r = /* @__PURE__ */ y({
  __name: "Sidebar",
  props: {
    items: {},
    activeRoute: { default: "" },
    className: { default: "" }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, o = (d) => e.activeRoute === (d ?? ""), c = t, n = (d, C) => c("select", d, C), p = (d) => {
      const C = String(d.value ?? "");
      d.onClick && d.onClick(C, d), n(C, d);
    };
    return (d, C) => (s(), l("nav", {
      class: v(["w-full py-9", e.className])
    }, [
      i("ul", Lr, [
        (s(!0), l(E, null, P(e.items, (u) => (s(), l("li", {
          key: (u.label || "") + String(u.value)
        }, [
          i("a", {
            href: "#",
            class: v([
              "text-sm font-medium flex items-center px-6 py-1 border-l-5",
              o(u.value) ? "text-black border-black dark:text-white dark:border-white" : "text-gray-500 hover:text-black border-transparent dark:text-gray-400 dark:hover:text-white"
            ]),
            onClick: O((f) => p(u), ["prevent"])
          }, [
            i("span", null, _(u.label ?? u.value), 1)
          ], 10, _r)
        ]))), 128))
      ])
    ], 2));
  }
}), Mr = { class: "px-4 py-3" }, zr = { class: "flex items-center justify-between gap-4" }, Br = { class: "flex items-center gap-3 min-w-0 flex-1" }, Dr = ["onClick"], Sr = {
  key: 2,
  class: "opacity-100"
}, Zr = {
  key: 3,
  class: "opacity-60"
}, Tr = { class: "flex items-center gap-3" }, Er = /* @__PURE__ */ y({
  __name: "SubHeader",
  props: {
    icon: {},
    breadcrumbs: { default: () => [] },
    color: { default: "bg-primary" },
    colorDark: {},
    className: {},
    darkText: { type: Boolean }
  },
  setup(a) {
    const t = a, e = g(() => (t.color || "").startsWith("bg-")), o = g(() => (t.colorDark || "").startsWith("bg-")), c = g(() => {
      var C;
      const d = [];
      return e.value && d.push(t.color), o.value && d.push(
        (C = t.colorDark) != null && C.startsWith("dark:") ? t.colorDark : `dark:${t.colorDark}`
      ), d.push("text-white w-full", t.className), d.filter(Boolean);
    }), n = g(() => {
      const d = {};
      return !e.value && t.color && (d["--subheader-bg"] = String(t.color)), !o.value && t.colorDark && (d["--subheader-bg-dark"] = String(t.colorDark)), Object.keys(d).length ? d : void 0;
    }), p = g(() => t.darkText ? "text-black" : "text-white");
    return (d, C) => {
      const u = Me("router-link");
      return s(), l("div", {
        class: v([
          c.value,
          // Apply raw color variables via arbitrary property utilities
          !e.value && t.color ? "[background:var(--subheader-bg)]" : "",
          !o.value && t.colorDark ? "dark:[background:var(--subheader-bg-dark)]" : ""
        ]),
        style: Y(n.value),
        "data-test": "subheader"
      }, [
        i("div", Mr, [
          i("div", zr, [
            i("div", Br, [
              t.icon ? (s(), N(U(t.icon), {
                key: 0,
                size: "19",
                class: v(p.value)
              }, null, 8, ["class"])) : M("", !0),
              i("nav", {
                "aria-label": "Breadcrumb",
                class: v([
                  "flex items-center gap-3 text-sm flex-1 min-w-0 overflow-hidden flex-wrap",
                  p.value
                ])
              }, [
                (s(!0), l(E, null, P(t.breadcrumbs, (f, h) => (s(), l(E, {
                  key: f.label + h
                }, [
                  f.to ? (s(), N(u, {
                    key: 0,
                    to: f.to,
                    class: "md:flex-none opacity-90 hover:opacity-100 flex-wrap",
                    onClick: O((r) => f.onClick ? f.onClick() : void 0, ["stop", "prevent"])
                  }, {
                    default: H(() => [
                      te(_(f.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "onClick"])) : f.onClick ? (s(), l("button", {
                    key: 1,
                    type: "button",
                    class: "block flex-1 opacity-90 hover:opacity-100 text-left",
                    onClick: (r) => f.onClick()
                  }, _(f.label), 9, Dr)) : (s(), l("span", Sr, _(f.label), 1)),
                  h < t.breadcrumbs.length - 1 ? (s(), l("span", Zr, "›")) : M("", !0)
                ], 64))), 128))
              ], 2)
            ]),
            i("div", Tr, [
              z(d.$slots, "default")
            ])
          ])
        ])
      ], 6);
    };
  }
}), Ir = /* @__PURE__ */ y({
  __name: "TabContent",
  props: {
    name: {},
    className: {}
  },
  setup(a) {
    const t = a, e = ve("tabsActiveName"), o = g(() => e ? e.value === t.name : !1);
    return (c, n) => ce((s(), l("div", {
      class: v(t.className)
    }, [
      z(c.$slots, "default")
    ], 2)), [
      [ue, o.value]
    ]);
  }
}), Nr = { class: "w-full border-separate border-spacing-0 text-left text-sm text-dark dark:text-gray-200" }, Pr = /* @__PURE__ */ y({
  __name: "Table",
  props: {
    className: { default: "" },
    dense: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a;
    return (e, o) => (s(), l("div", {
      class: v(["overflow-x-auto w-full", t.className])
    }, [
      i("table", Nr, [
        z(e.$slots, "default")
      ])
    ], 2));
  }
}), ge = (a, t) => {
  const e = a.__vccOpts || a;
  for (const [o, c] of t)
    e[o] = c;
  return e;
}, jr = {}, Gr = { class: "divide-y divide-gray-100 dark:divide-dark-3" };
function Vr(a, t) {
  return s(), l("tbody", Gr, [
    z(a.$slots, "default")
  ]);
}
const Fr = /* @__PURE__ */ ge(jr, [["render", Vr]]), Or = {}, Rr = { class: "py-4 px-4 text-sm text-dark dark:text-gray-200 align-middle border-b border-gray-200 dark:border-dark-3" };
function Ar(a, t) {
  return s(), l("td", Rr, [
    z(a.$slots, "default")
  ]);
}
const Hr = /* @__PURE__ */ ge(Or, [["render", Ar]]), Wr = { class: "top-0 z-10" }, Kr = /* @__PURE__ */ y({
  __name: "TableHead",
  setup(a) {
    return xe("isTableHead", !0), (t, e) => (s(), l("thead", Wr, [
      z(t.$slots, "default")
    ]));
  }
}), Xr = {}, qr = { class: "text-[11px] tracking-widest uppercase text-black dark:text-white font-semibold py-3 px-4 border-b-2 border-black dark:border-gray-500" };
function Yr(a, t) {
  return s(), l("th", qr, [
    z(a.$slots, "default")
  ]);
}
const Jr = /* @__PURE__ */ ge(Xr, [["render", Yr]]), Ur = /* @__PURE__ */ y({
  __name: "TableRow",
  props: {
    noHover: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = ve("isTableHead", !1), o = g(() => t.noHover || e), c = g(() => {
      const n = "border-b border-gray-200 dark:border-dark-3 last:border-b-0", p = o.value ? "" : "hover:bg-gray-50 dark:hover:bg-dark-3/40";
      return `${n} ${p}`;
    });
    return (n, p) => (s(), l("tr", {
      class: v(c.value)
    }, [
      z(n.$slots, "default")
    ], 2));
  }
}), Qr = { class: "truncate" }, ea = { class: "pb-2" }, ta = ["onClick"], ra = { class: "hidden md:block border-b-3 border-gray-100 dark:border-dark-2" }, aa = { class: "flex -mx-4" }, sa = ["onClick"], oa = { class: "mt-8 text-base text-body-color dark:text-dark-6" }, la = /* @__PURE__ */ y({
  __name: "Tabs",
  props: {
    items: {},
    activeTab: { default: 0 },
    className: {}
  },
  emits: ["update:activeTab", "change"],
  setup(a, { emit: t }) {
    const e = a, o = t, c = D(e.activeTab ?? 0);
    re(
      () => e.activeTab,
      (r) => {
        typeof r == "number" && r !== c.value && (c.value = r);
      }
    );
    const n = g({
      get: () => c.value,
      set: (r) => {
        c.value = r, o("update:activeTab", r), o("change", r);
      }
    }), p = g(() => {
      var r;
      return ((r = e.items[n.value]) == null ? void 0 : r.name) ?? "";
    });
    xe("tabsActiveName", p);
    const d = (r) => {
      r < 0 || r >= e.items.length || (n.value = r);
    }, C = D(!1), u = g(() => {
      var r;
      return ((r = e.items[n.value]) == null ? void 0 : r.title) ?? "";
    }), f = g(() => {
      var r;
      return ((r = e.items[n.value]) == null ? void 0 : r.color) ?? null;
    }), h = (r) => {
      d(r), C.value = !1;
    };
    return (r, b) => (s(), l("div", null, [
      i("div", {
        class: v(["md:hidden border-b-3", f.value ? "" : "border-gray-100 dark:border-dark-2"]),
        style: Y(f.value ? { borderColor: f.value } : void 0)
      }, [
        i("button", {
          type: "button",
          class: "w-full flex items-center justify-between py-3 text-base font-medium text-black dark:text-white cursor-pointer",
          onClick: b[0] || (b[0] = (k) => C.value = !C.value)
        }, [
          i("span", Qr, _(u.value), 1),
          S(I(ye), {
            class: v([C.value ? "rotate-180" : "rotate-0", "transition-transform"]),
            size: "12"
          }, null, 8, ["class"])
        ]),
        ce(i("div", ea, [
          (s(!0), l(E, null, P(e.items, (k, m) => (s(), l("button", {
            key: m,
            type: "button",
            class: v([
              "block w-full text-left px-3 py-2 rounded text-sm cursor-pointer",
              n.value === m ? "bg-gray-2 dark:bg-white/10 text-black dark:text-white" : "text-gray-600 dark:text-dark-6 hover:text-black dark:hover:text-white"
            ]),
            onClick: (w) => h(m)
          }, _(k.title), 11, ta))), 128))
        ], 512), [
          [ue, C.value]
        ])
      ], 6),
      i("div", ra, [
        i("div", aa, [
          (s(!0), l(E, null, P(e.items, (k, m) => (s(), l("div", {
            key: m,
            class: "px-4"
          }, [
            i("button", {
              class: v([{
                "text-black dark:text-white": n.value === m,
                "border-black dark:border-white": n.value === m && !k.color,
                "text-gray-500 border-transparent hover:text-black dark:text-dark-6 dark:hover:text-white": n.value !== m
              }, "-mb-[3px] w-full border-b-3 py-2 text-base font-medium cursor-pointer"]),
              style: Y(n.value === m && k.color ? { borderColor: k.color } : void 0),
              type: "button",
              onClick: (w) => d(m)
            }, _(k.title), 15, sa)
          ]))), 128))
        ])
      ]),
      i("div", oa, [
        z(r.$slots, "default")
      ])
    ]));
  }
}), na = ["width", "height"], Da = /* @__PURE__ */ y({
  __name: "GfpPulpitIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 267 452",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("g", { transform: "matrix(5.64729e-17,0.922273,-1.13952,6.97756e-17,388.2,191.388)" }, [
        i("path", {
          d: "M213.637,180.599L213.637,131.614C213.637,127.355 217.909,123.896 223.172,123.896L272.212,123.896C277.475,123.896 281.748,127.355 281.748,131.614L281.748,315.962C281.748,320.222 277.475,323.68 272.212,323.68L223.172,323.68C217.909,323.68 213.637,320.222 213.637,315.962L213.637,266.977L-25.336,266.977C-28.281,266.977 -30.672,265.042 -30.672,262.658L-30.672,184.918C-30.672,182.534 -28.281,180.599 -25.336,180.599L213.637,180.599Z",
          fill: "currentColor"
        })
      ], -1),
      i("g", { transform: "matrix(1.89489,0,0,1.89489,-209.167,-2.47326)" }, [
        i("path", {
          d: "M221.291,46.582L244.371,46.582C246.29,46.582 248.114,47.419 249.366,48.873C250.618,50.327 251.173,52.255 250.887,54.153L240.887,120.567C240.402,123.791 237.632,126.176 234.371,126.176L211.135,126.176L211.135,88.476C211.135,85.062 208.363,82.289 204.948,82.289L155.451,82.289C152.036,82.289 149.264,85.062 149.264,88.476L149.264,126.176L126.975,126.176C123.714,126.176 120.944,123.791 120.458,120.567L110.458,54.153C110.172,52.255 110.728,50.327 111.98,48.873C113.232,47.419 115.056,46.582 116.975,46.582L213.73,46.582L213.73,36.752L196.379,24.045C194.291,25.583 191.712,26.492 188.922,26.492C181.972,26.492 176.329,20.849 176.329,13.898C176.329,6.948 181.972,1.305 188.922,1.305C195.873,1.305 201.515,6.948 201.515,13.898C201.515,15.315 201.281,16.677 200.849,17.948L219.744,31.786C220.716,32.498 221.291,33.63 221.291,34.835L221.291,46.582Z",
          fill: "currentColor"
        })
      ], -1)
    ])], 8, na));
  }
}), ia = ["width", "height"], Sa = /* @__PURE__ */ y({
  __name: "GfpHoodIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 265 372",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("g", { transform: "matrix(1,0,0,1,-114.233,-77.5304)" }, [
        i("path", {
          d: "M270.841,448.561L222.555,448.561L114.233,131.683L172.812,77.634L229.508,308.737C229.665,309.379 230.129,309.901 230.748,310.133L246.698,316.112L262.648,310.133C263.267,309.901 263.731,309.379 263.889,308.737L320.584,77.634L379.164,131.683L270.841,448.561ZM246.698,311.84L233.141,306.758L176.905,77.53L246.698,119.33L316.491,77.53L260.255,306.758L246.698,311.84ZM246.698,164.934L222.555,153.401L246.698,250.345L270.841,153.401L246.698,164.934Z",
          fill: "currentColor"
        })
      ], -1)
    ])], 8, ia));
  }
}), da = ["width", "height"], Za = /* @__PURE__ */ y({
  __name: "GfpPlaqueIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 273 340",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("g", { transform: "matrix(1,0,0,1,-98.7812,-101.227)" }, [
        i("path", {
          d: "M234.793,440.863L98.781,394.356L98.781,140.02C116.103,131.793 130.347,118.123 139.298,101.227L330.288,101.227C339.239,118.123 353.483,131.793 370.805,140.02L370.805,394.356L234.793,440.863ZM317.488,125.949L152.098,125.949C151.08,125.949 150.145,126.511 149.669,127.41C142.372,141.165 130.761,152.293 116.641,158.991C115.681,159.446 115.07,160.413 115.07,161.475L115.07,376.365C115.07,377.553 115.833,378.607 116.962,378.978L234.793,419.843L352.624,378.978C353.753,378.607 354.516,377.553 354.516,376.365L354.516,161.475C354.516,160.413 353.904,159.446 352.945,158.991C338.825,152.293 327.214,141.165 319.917,127.41C319.44,126.511 318.506,125.949 317.488,125.949ZM234.793,412.863L120.57,374.373L120.57,163.193C134.552,156.171 146.131,145.065 153.732,131.449L234.793,131.449L315.854,131.449C323.455,145.065 335.034,156.171 349.016,163.193L349.016,374.373L234.793,412.863Z",
          fill: "currentColor"
        })
      ], -1)
    ])], 8, da));
  }
}), ca = ["width", "height"], Ta = /* @__PURE__ */ y({
  __name: "GfpPulpitDraftIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      he('<g transform="matrix(0.763639,0,0,0.763639,60.5085,60.5085)"><g transform="matrix(5.64729e-17,0.922273,-1.13952,6.97756e-17,511.011,221.77)"><path d="M213.637,180.599L213.637,131.614C213.637,127.355 217.909,123.896 223.172,123.896L272.212,123.896C277.475,123.896 281.748,127.355 281.748,131.614L281.748,315.962C281.748,320.222 277.475,323.68 272.212,323.68L223.172,323.68C217.909,323.68 213.637,320.222 213.637,315.962L213.637,266.977L-25.336,266.977C-28.281,266.977 -30.672,265.042 -30.672,262.658L-30.672,184.918C-30.672,182.534 -28.281,180.599 -25.336,180.599L213.637,180.599Z" fill="currentColor"></path></g><g transform="matrix(1.89489,0,0,1.89489,-86.3553,27.9082)"><path d="M221.291,46.582L244.371,46.582C246.29,46.582 248.114,47.419 249.366,48.873C250.618,50.327 251.173,52.255 250.887,54.153L240.887,120.567C240.402,123.791 237.632,126.176 234.371,126.176L211.135,126.176L211.135,88.476C211.135,85.062 208.363,82.289 204.948,82.289L155.451,82.289C152.036,82.289 149.264,85.062 149.264,88.476L149.264,126.176L126.975,126.176C123.714,126.176 120.944,123.791 120.458,120.567L110.458,54.153C110.172,52.255 110.728,50.327 111.98,48.873C113.232,47.419 115.056,46.582 116.975,46.582L213.73,46.582L213.73,36.752L196.379,24.045C194.291,25.583 191.712,26.492 188.922,26.492C181.972,26.492 176.329,20.849 176.329,13.898C176.329,6.948 181.972,1.305 188.922,1.305C195.873,1.305 201.515,6.948 201.515,13.898C201.515,15.315 201.281,16.677 200.849,17.948L219.744,31.786C220.716,32.498 221.291,33.63 221.291,34.835L221.291,46.582Z" fill="currentColor"></path></g></g><g transform="matrix(1.08097,0,0,1.08097,-23.1109,-24.2593)"><path d="M460.912,38.245L460.912,22.518L487.087,22.518C491.429,22.518 494.95,26.039 494.95,30.381L494.95,56.556L479.223,56.556L479.223,38.245L460.912,38.245ZM479.223,95.761L494.95,95.761L494.95,148.108L479.223,148.108L479.223,95.761ZM479.223,187.315L494.95,187.315L494.95,239.663L479.223,239.663L479.223,187.315ZM479.223,278.868L494.95,278.868L494.95,331.216L479.223,331.216L479.223,278.868ZM479.223,370.421L494.95,370.421L494.95,422.769L479.223,422.769L479.223,370.421ZM479.223,461.975L494.95,461.975L494.95,488.149C494.95,492.492 491.429,496.012 487.087,496.012L460.912,496.012L460.912,480.286L479.223,480.286L479.223,461.975ZM421.708,480.286L421.708,496.012L369.36,496.012L369.36,480.286L421.708,480.286ZM330.153,480.286L330.153,496.012L277.805,496.012L277.805,480.286L330.153,480.286ZM238.6,480.286L238.6,496.012L186.252,496.012L186.252,480.286L238.6,480.286ZM147.047,480.286L147.047,496.012L94.699,496.012L94.699,480.286L147.047,480.286ZM55.493,480.286L55.493,496.012L29.319,496.012C24.976,496.012 21.456,492.492 21.456,488.149L21.456,461.975L37.182,461.975L37.182,480.286L55.493,480.286ZM37.182,422.77L21.456,422.77L21.456,370.422L37.182,370.422L37.182,422.77ZM37.182,331.216L21.456,331.216L21.456,278.868L37.182,278.868L37.182,331.216ZM37.182,239.663L21.456,239.663L21.456,187.315L37.182,187.315L37.182,239.663ZM37.182,148.109L21.456,148.109L21.456,95.761L37.182,95.761L37.182,148.109ZM37.182,56.556L21.456,56.556L21.456,30.381C21.456,26.039 24.976,22.518 29.319,22.518L55.493,22.518L55.493,38.245L37.182,38.245L37.182,56.556ZM94.698,38.245L94.698,22.518L147.046,22.518L147.046,38.245L94.698,38.245ZM186.252,38.245L186.252,22.518L238.601,22.518L238.601,38.245L186.252,38.245ZM277.806,38.245L277.806,22.518L330.154,22.518L330.154,38.245L277.806,38.245ZM369.359,38.245L369.359,22.518L421.707,22.518L421.707,38.245L369.359,38.245Z" fill="currentColor"></path></g>', 2)
    ])], 8, ca));
  }
}), ua = ["width", "height"], Ea = /* @__PURE__ */ y({
  __name: "GfpRegaliaScanIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("g", { transform: "matrix(9.29731,0,0,9.29731,-1.08233,26.7965)" }, [
        i("path", {
          d: "M0.131,52.188L0.131,37.813L3.381,37.813L3.381,48.938L14.506,48.938L14.506,52.188L0.131,52.188ZM40.83,52.188L40.83,48.938L51.954,48.938L51.954,37.813L55.204,37.813L55.204,52.188L40.83,52.188ZM0.131,11.443L0.131,-2.932L14.506,-2.932L14.506,0.318L3.381,0.318L3.381,11.443L0.131,11.443ZM51.958,11.443L51.958,0.318L40.83,0.318L40.83,-2.932L55.204,-2.932L55.204,11.443L51.958,11.443Z",
          fill: "currentColor"
        })
      ], -1),
      i("g", { transform: "matrix(9.29731,0,0,9.29731,17.7628,12.5266)" }, [
        i("path", {
          d: "M13.245,22.895L24.505,27.604C25.032,27.823 25.592,27.938 26.162,27.938C26.733,27.938 27.292,27.823 27.82,27.604L40.866,22.146C41.35,21.944 41.662,21.468 41.662,20.938C41.662,20.407 41.35,19.931 40.866,19.729L27.82,14.271C27.292,14.052 26.733,13.938 26.162,13.938C25.592,13.938 25.032,14.052 24.505,14.271L11.459,19.729C10.974,19.931 10.662,20.407 10.662,20.938L10.662,37.125C10.662,37.852 11.238,38.438 11.954,38.438C12.67,38.438 13.245,37.852 13.245,37.125L13.245,22.895ZM15.829,26.811L15.829,33.188C15.829,36.086 20.457,38.438 26.162,38.438C31.867,38.438 36.495,36.086 36.495,33.188L36.495,26.811L28.805,30.032C27.965,30.382 27.072,30.563 26.162,30.563C25.253,30.563 24.359,30.382 23.52,30.032L15.829,26.811Z",
          fill: "currentColor"
        })
      ], -1)
    ])], 8, ua));
  }
}), pa = ["width", "height"], Ia = /* @__PURE__ */ y({
  __name: "GfpTeddyIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 63 63",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("path", {
        d: "M30.0757 17.957C29.8602 17.957 29.6493 18.0197 29.4688 18.1375C29.2884 18.2553 29.1461 18.4231 29.0595 18.6204C28.9419 18.8889 29.0817 19.184 29.2902 19.3903L30.3996 20.4997C30.5027 20.603 30.6251 20.685 30.7599 20.7409C30.8946 20.7969 31.0391 20.8256 31.1851 20.8256C31.331 20.8256 31.4755 20.7969 31.6102 20.7409C31.745 20.685 31.8674 20.603 31.9705 20.4997L33.0799 19.3903C33.2862 19.184 33.4282 18.8889 33.3106 18.6204C33.224 18.4231 33.0817 18.2553 32.9013 18.1375C32.7208 18.0197 32.5099 17.957 32.2944 17.957H30.0757Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        d: "M15.6541 5.91002C15.6541 7.09705 16.0269 8.19755 16.6614 9.10058C14.6934 11.6876 13.4354 14.8161 13.4354 18.2951C13.4354 23.2118 15.4344 26.5 18.6649 28.5568L3.66841 37.2144C2.17545 38.0748 1.07436 39.4808 0.59674 41.1364C0.119121 42.7921 0.302197 44.5685 1.10746 46.0919C1.91272 47.6154 3.27742 48.7671 4.9145 49.305C6.55158 49.8429 8.33346 49.7249 9.88535 48.976C9.36652 50.2196 9.18023 51.5768 9.34478 52.9142C9.50933 54.2517 10.0191 55.5233 10.8239 56.604L12.8097 59.2732C13.5328 60.2456 14.4735 61.0353 15.5565 61.5791C16.6395 62.1228 17.8347 62.4056 19.0466 62.4047C20.2584 62.4039 21.4532 62.1194 22.5355 61.5741C23.6177 61.0288 24.5573 60.2378 25.279 59.2643C27.1766 59.9316 29.1738 60.2715 31.1853 60.2694C33.2643 60.2694 35.259 59.9144 37.1116 59.2554C37.8326 60.2302 38.7719 61.0227 39.8541 61.5693C40.9364 62.1159 42.1316 62.4016 43.3441 62.4033C44.5565 62.405 45.7526 62.1228 46.8364 61.5793C47.9202 61.0357 48.8617 60.2459 49.5854 59.2732L51.5734 56.604C52.3799 55.521 52.8901 54.2463 53.0535 52.9059C53.2169 51.5654 53.028 50.2055 52.5053 48.9604C54.0414 49.7344 55.8175 49.8836 57.4612 49.3769C59.1049 48.8702 60.4886 47.7469 61.3224 46.2424C62.1561 44.7379 62.375 42.9691 61.9333 41.3067C61.4916 39.6444 60.4236 38.2175 58.953 37.3253L44.1251 28.2772C47.1071 26.2116 48.9354 22.9966 48.9354 18.2951C48.9354 14.8161 47.6773 11.6876 45.7093 9.10058C46.5543 7.91303 46.8979 6.44063 46.6659 5.00174C46.4338 3.56284 45.6448 2.27309 44.4694 1.41134C43.2939 0.549587 41.8266 0.185093 40.3845 0.396667C38.9425 0.608241 37.6416 1.37888 36.7633 2.54196C34.8862 1.84749 32.9759 1.47252 31.1853 1.47252C29.3948 1.47252 27.4845 1.84749 25.6074 2.54196C24.903 1.62069 23.9276 0.943367 22.8183 0.605236C21.7089 0.267104 20.5215 0.28517 19.423 0.656893C18.3245 1.02862 17.3701 1.7353 16.6941 2.67757C16.018 3.61985 15.6543 4.75032 15.6541 5.91002ZM21.201 2.5819C22.0796 2.5819 22.8783 2.92358 23.473 3.47827C21.517 4.47156 19.7339 5.77366 18.1923 7.33446C17.9521 6.82713 17.8441 6.26728 17.8783 5.70698C17.9126 5.14669 18.088 4.60415 18.3882 4.12986C18.6885 3.65557 19.1038 3.26493 19.5956 2.99428C20.0874 2.72363 20.6396 2.58177 21.201 2.5819ZM42.2791 44.8313C41.0229 45.3711 39.9315 46.2329 39.1152 47.3297L37.1272 49.9988C36.071 51.4177 35.5309 53.1546 35.5962 54.9222C34.2428 55.508 32.7518 55.8319 31.1853 55.8319C29.6278 55.8319 28.1457 55.5124 26.8011 54.9333C26.8689 53.1619 26.3287 51.4207 25.2702 49.9988L23.2822 47.3297C22.4599 46.2251 21.3588 45.359 20.0916 44.8202V44.7381C20.0916 41.7959 21.2604 38.9742 23.3409 36.8937C25.4214 34.8132 28.2431 33.6444 31.1853 33.6444C34.1276 33.6444 36.9493 34.8132 39.0298 36.8937C41.1103 38.9742 42.2791 41.7959 42.2791 44.7381V44.8313ZM44.4979 5.91002C44.4979 6.42033 44.3825 6.90402 44.1784 7.33446C42.6368 5.77366 40.8537 4.47156 38.8977 3.47827C39.3717 3.0355 39.9647 2.74086 40.6038 2.63057C41.243 2.52029 41.9004 2.59916 42.4953 2.85749C43.0902 3.11583 43.5967 3.54237 43.9525 4.08467C44.3083 4.62698 44.4978 5.26143 44.4979 5.91002ZM25.6385 15.7391C25.3442 15.7391 25.0621 15.6222 24.854 15.4142C24.646 15.2061 24.5291 14.9239 24.5291 14.6297C24.5291 14.3355 24.646 14.0533 24.854 13.8453C25.0621 13.6372 25.3442 13.5203 25.6385 13.5203C25.9327 13.5203 26.2149 13.6372 26.4229 13.8453C26.631 14.0533 26.7478 14.3355 26.7478 14.6297C26.7478 14.9239 26.631 15.2061 26.4229 15.4142C26.2149 15.6222 25.9327 15.7391 25.6385 15.7391ZM31.1853 27.9422C26.8965 27.9422 23.4197 24.3478 23.4197 21.286C23.4197 18.2241 26.8965 15.7391 31.1853 15.7391C35.4742 15.7391 38.951 18.2241 38.951 21.286C38.951 24.3478 35.4742 27.9422 31.1853 27.9422ZM37.8416 14.6297C37.8416 14.9239 37.7247 15.2061 37.5167 15.4142C37.3086 15.6222 37.0265 15.7391 36.7322 15.7391C36.438 15.7391 36.1558 15.6222 35.9478 15.4142C35.7397 15.2061 35.6228 14.9239 35.6228 14.6297C35.6228 14.3355 35.7397 14.0533 35.9478 13.8453C36.1558 13.6372 36.438 13.5203 36.7322 13.5203C37.0265 13.5203 37.3086 13.6372 37.5167 13.8453C37.7247 14.0533 37.8416 14.3355 37.8416 14.6297ZM20.6773 49.3531L22.6653 52.0245C23.0134 52.492 23.2659 53.0235 23.4086 53.5886C23.5512 54.1537 23.5812 54.7414 23.4967 55.3181C23.4122 55.8947 23.215 56.4491 22.9163 56.9496C22.6175 57.45 22.2232 57.8868 21.7557 58.2348C21.2882 58.5828 20.7567 58.8354 20.1916 58.978C19.6265 59.1207 19.0388 59.1506 18.4621 59.0662C17.8854 58.9817 17.331 58.7845 16.8306 58.4857C16.3301 58.187 15.8934 57.7926 15.5454 57.3251L13.5574 54.6537C12.8548 53.7096 12.556 52.525 12.7268 51.3605C12.8976 50.1961 13.524 49.1472 14.4682 48.4446C15.4123 47.742 16.597 47.4432 17.7614 47.614C18.9258 47.7848 19.9747 48.409 20.6773 49.3531ZM41.72 49.3554C42.0682 48.888 42.505 48.4938 43.0055 48.1953C43.5061 47.8967 44.0605 47.6997 44.6372 47.6154C45.2139 47.5312 45.8015 47.5613 46.3665 47.7042C46.9315 47.847 47.4629 48.0997 47.9303 48.4479C48.3976 48.7961 48.7918 49.2329 49.0904 49.7334C49.3889 50.234 49.5859 50.7884 49.6702 51.3651C49.7545 51.9418 49.7243 52.5294 49.5815 53.0944C49.4386 53.6595 49.1859 54.1908 48.8377 54.6582L46.8519 57.3273C46.5039 57.7948 46.0672 58.1892 45.5667 58.4879C45.0663 58.7867 44.5119 58.9839 43.9352 59.0684C43.3585 59.1528 42.7709 59.1229 42.2058 58.9803C41.6406 58.8376 41.1092 58.5851 40.6417 58.237C40.1742 57.889 39.7798 57.4523 39.4811 56.9518C39.1823 56.4514 38.9851 55.897 38.9006 55.3203C38.8162 54.7436 38.8461 54.1559 38.9887 53.5908C39.1314 53.0257 39.3839 52.4942 39.732 52.0267L41.72 49.3554Z",
        fill: "currentColor"
      }, null, -1)
    ])], 8, pa));
  }
}), fa = ["width", "height"], Na = /* @__PURE__ */ y({
  __name: "GfpFrameIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 306 231",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      he('<g transform="matrix(1,0,0,1,-170.562,-186.567)"><g transform="matrix(1,0,0,1,82.6044,57.2476)"><path d="M95.553,335.891C95.553,335.891 89.926,332.697 89.926,309.872C89.926,287.047 93.919,259.658 92.479,254.101C91.04,248.543 87.957,244.699 87.957,244.699C87.957,244.699 91.04,240.855 92.479,235.297C93.919,229.74 89.926,202.351 89.926,179.526C89.926,156.701 95.553,153.507 95.553,153.507C95.553,153.507 100.635,135.588 136.957,135.588C173.278,135.588 216.861,148.303 225.704,143.719C234.548,139.135 240.665,129.32 240.665,129.32C240.665,129.32 246.783,139.135 255.626,143.719C264.47,148.303 308.052,135.588 344.374,135.588C380.695,135.588 385.777,153.507 385.777,153.507C385.777,153.507 391.404,156.701 391.404,179.526C391.404,202.351 387.411,229.74 388.851,235.297C390.29,240.855 393.373,244.699 393.373,244.699C393.373,244.699 390.29,248.543 388.851,254.101C387.411,259.658 391.404,287.047 391.404,309.872C391.404,332.697 385.777,335.891 385.777,335.891C385.777,335.891 380.695,353.81 344.374,353.81C308.052,353.81 264.47,341.095 255.626,345.679C246.783,350.263 240.665,360.078 240.665,360.078C240.665,360.078 234.548,350.263 225.704,345.679C216.861,341.095 173.278,353.81 136.957,353.81C100.635,353.81 95.553,335.891 95.553,335.891ZM376.647,157.933L104.751,157.933L104.751,331.641L376.647,331.641L376.647,157.933Z" fill="currentColor"></path></g><g transform="matrix(0.969932,0,0,0.95763,75.4066,67.324)"><path d="M390.665,331.395L120.428,331.395L120.428,158.612L390.665,158.612L390.665,331.395ZM383.448,165.921L127.645,165.921L127.645,324.086L383.448,324.086L383.448,165.921Z" fill="currentColor"></path></g></g>', 1)
    ])], 8, fa));
  }
}), ha = ["width", "height"], Pa = /* @__PURE__ */ y({
  __name: "GfpStagePhotographyIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      he('<g transform="matrix(1,0,0,1,-1.13687e-13,9.86088)"><g transform="matrix(5.58006,0,0,5.58006,-10.4261,56.6733)"><path d="M34.119,16.914L39.151,16.914L42.506,13.559L52.572,13.559L55.927,16.914L60.959,16.914C61.849,16.914 62.702,17.267 63.332,17.896C63.961,18.526 64.314,19.379 64.314,20.269L64.314,40.399C64.314,41.289 63.961,42.142 63.332,42.771C62.702,43.401 61.849,43.754 60.959,43.754L34.119,43.754C33.229,43.754 32.376,43.401 31.746,42.771C31.117,42.142 30.764,41.289 30.764,40.399L30.764,20.269C30.764,19.379 31.117,18.526 31.746,17.896C32.376,17.267 33.229,16.914 34.119,16.914ZM47.539,21.946C45.314,21.946 43.181,22.83 41.608,24.403C40.035,25.976 39.151,28.109 39.151,30.334C39.151,32.558 40.035,34.692 41.608,36.265C43.181,37.838 45.314,38.722 47.539,38.722C49.764,38.722 51.897,37.838 53.47,36.265C55.043,34.692 55.927,32.558 55.927,30.334C55.927,28.109 55.043,25.976 53.47,24.403C51.897,22.83 49.764,21.946 47.539,21.946ZM47.539,25.301C48.874,25.301 50.154,25.831 51.097,26.775C52.041,27.719 52.572,28.999 52.572,30.334C52.572,31.669 52.041,32.949 51.097,33.892C50.154,34.836 48.874,35.366 47.539,35.366C46.204,35.366 44.924,34.836 43.98,33.892C43.037,32.949 42.506,31.669 42.506,30.334C42.506,28.999 43.037,27.719 43.98,26.775C44.924,25.831 46.204,25.301 47.539,25.301Z" fill="currentColor"></path></g><g transform="matrix(5.58006,0,0,5.58006,-10.4261,56.6733)"><path d="M4.699,11.745L2.991,10.91C1.998,10.425 1.587,9.228 2.072,8.235L3.869,4.557C4.354,3.565 5.552,3.153 6.544,3.638L10.714,5.676L7.161,12.948L6.982,12.861L6.982,53.582L88.51,53.582L88.51,12.86L88.332,12.948L84.778,5.676L88.948,3.638C89.94,3.153 91.138,3.565 91.623,4.557L93.42,8.235C93.905,9.228 93.494,10.425 92.501,10.91L90.793,11.745L90.793,53.582L90.959,53.582C91.162,53.582 91.326,53.746 91.326,53.949L91.326,64.106C91.326,64.309 91.162,64.473 90.959,64.473L3.86,64.473C3.658,64.473 3.493,64.309 3.493,64.106L3.493,53.949C3.493,53.746 3.658,53.582 3.86,53.582L4.699,53.582L4.699,11.745ZM17.774,6.354L12.035,18.101L7.161,12.948L10.714,5.676L17.774,6.354ZM77.718,6.354L84.778,5.676L88.331,12.948L83.458,18.101L77.718,6.354Z" fill="currentColor"></path></g></g>', 1)
    ])], 8, ha));
  }
}), ga = ["width", "height"], ja = /* @__PURE__ */ y({
  __name: "GfpStudioPhotographyIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("g", { transform: "matrix(7.74898,0,0,7.74898,-40.0087,4.62726)" }, [
        i("path", {
          d: "M9.58,25.876L16.205,25.876L20.621,21.459L33.871,21.459L38.288,25.876L44.913,25.876C46.085,25.876 47.208,26.341 48.036,27.169C48.864,27.997 49.33,29.121 49.33,30.292L49.33,56.792C49.33,57.964 48.864,59.087 48.036,59.915C47.208,60.744 46.085,61.209 44.913,61.209L9.58,61.209C8.408,61.209 7.285,60.744 6.457,59.915C5.628,59.087 5.163,57.964 5.163,56.792L5.163,30.292C5.163,29.121 5.628,27.997 6.457,27.169C7.285,26.341 8.408,25.876 9.58,25.876ZM27.246,32.501C24.318,32.501 21.51,33.664 19.439,35.735C17.368,37.805 16.205,40.614 16.205,43.542C16.205,46.471 17.368,49.279 19.439,51.35C21.51,53.421 24.318,54.584 27.246,54.584C30.175,54.584 32.983,53.421 35.054,51.35C37.125,49.279 38.288,46.471 38.288,43.542C38.288,40.614 37.125,37.805 35.054,35.735C32.983,33.664 30.175,32.501 27.246,32.501ZM27.246,36.917C29.004,36.917 30.689,37.615 31.931,38.858C33.173,40.1 33.871,41.785 33.871,43.542C33.871,45.299 33.173,46.984 31.931,48.227C30.689,49.469 29.004,50.167 27.246,50.167C25.489,50.167 23.804,49.469 22.562,48.227C21.319,46.984 20.621,45.299 20.621,43.542C20.621,41.785 21.319,40.1 22.562,38.858C23.804,37.615 25.489,36.917 27.246,36.917Z",
          fill: "currentColor"
        }),
        i("path", {
          d: "M63.192,4.22L63.154,3.67L64.103,3.67L64.103,4.623L64.405,4.575C64.661,4.534 64.917,4.491 65.172,4.445C65.558,4.394 65.949,4.394 66.334,4.445C67.375,4.569 67.359,4.535 67.359,6.625L67.359,8.344L67.859,8.656C70.051,10.013 71.684,12.684 71.126,13.992C71.001,14.286 65.577,19.427 65.409,19.411C65.383,19.411 64.817,18.624 64.153,17.669C63.053,16.09 62.886,15.892 62.316,15.5C61.551,14.972 61.658,14.968 60.848,15.561L60.174,16.053L59.782,15.852C59.318,15.535 58.888,15.17 58.498,14.765L57.608,13.878L58.853,12.716L60.099,11.554L60.126,8.562L60.152,5.569L60.39,5.375C60.868,5.132 61.393,4.996 61.929,4.975L63.225,4.77L63.188,4.22M65.938,6.42C65.966,5.947 65.927,5.472 65.82,5.011C65.224,5.007 64.635,5.144 64.103,5.412C64.103,5.687 63.566,5.768 63.316,5.533C63.179,5.408 63.091,5.405 62.451,5.511C61.469,5.672 61.5,5.584 61.498,8.188L61.498,10.314L62.824,9.096C64.328,7.721 64.631,7.561 65.515,7.73L65.968,7.817L65.944,6.425M64.728,8.774C64.64,8.524 64.303,8.774 62.2,10.682C59.89,12.771 59.807,12.859 60.056,12.948C61.712,11.67 63.274,10.275 64.731,8.774M65.957,9.049C65.978,8.716 65.638,8.972 63.496,10.9C61.48,12.713 60.922,13.321 61.351,13.237C62.964,11.931 64.502,10.534 65.957,9.053M67.921,10.153C67.921,9.954 67.745,9.937 67.552,10.117C67.441,10.227 67.374,10.374 67.363,10.53L67.363,10.764L67.638,10.513C67.759,10.419 67.853,10.296 67.913,10.154M64.24,12.093C65.839,10.636 65.985,10.479 65.953,10.24C65.934,10.102 65.898,10.018 65.872,10.068C65.846,10.117 65.032,10.88 64.06,11.765C62.41,13.258 62.044,13.677 62.356,13.677C63.017,13.19 63.647,12.661 64.24,12.093ZM68.764,10.746C68.764,10.5 68.402,10.663 67.9,11.137C67.495,11.521 67.368,11.703 67.368,11.898C67.368,12.147 67.389,12.134 68.065,11.506C68.332,11.286 68.568,11.03 68.764,10.746ZM69.398,11.571C69.457,11.27 69.168,11.433 68.273,12.227C67.519,12.891 67.364,13.072 67.365,13.284C67.365,13.566 69.332,11.909 69.398,11.571ZM64.723,13.167C65.729,12.24 65.984,11.96 65.96,11.792C64.894,12.425 63.951,13.245 63.176,14.212C63.176,14.52 63.414,14.35 64.71,13.163M69.968,12.493C69.968,12.185 69.556,12.453 68.493,13.446C67.595,14.288 67.353,14.564 67.378,14.719C68.359,14.127 69.235,13.374 69.968,12.493ZM50.941,12.856C52.392,12.623 53.874,12.686 55.3,13.042L56.774,13.366C56.774,13.366 58.905,15.514 58.648,15.484C58.554,15.473 54.816,15.609 54.816,15.609L52.929,14.688C51.087,13.789 47.618,13.027 48.778,12.99C49.149,12.979 50.123,12.918 50.941,12.852M65.3,14C65.85,13.472 65.977,13.313 65.952,13.12C65.923,12.903 65.856,12.948 64.9,13.846C64.137,14.564 63.907,14.829 63.986,14.904C64.123,15.041 64.423,14.832 65.3,14ZM68.144,15.74C70.186,13.881 70.441,13.617 70.309,13.515C70.177,13.413 69.982,13.56 68.738,14.692C67.955,15.404 66.928,16.342 66.455,16.761C65.673,17.467 65.405,17.861 65.711,17.85C65.775,17.85 66.869,16.899 68.144,15.74ZM65.442,15.256C65.854,14.872 65.974,14.696 65.951,14.538C65.915,14.288 64.658,15.337 64.662,15.615C64.666,15.892 64.889,15.78 65.442,15.256ZM60.914,15.766C62.014,14.99 62,14.982 65.612,20.083C67.192,22.316 68.465,24.162 68.439,24.185C68.133,24.002 67.848,23.784 67.591,23.536C66.92,22.966 66.174,22.491 65.373,22.124L63.957,21.401L63.341,20.519C63.003,20.035 62.179,18.869 61.512,17.92L60.299,16.202L60.914,15.766ZM66.199,16.027C66.92,15.349 66.932,15.331 66.66,15.331C66.341,15.331 65.054,16.452 65.171,16.628C65.288,16.804 65.469,16.715 66.199,16.027ZM56.221,15.742C56.338,15.731 56.455,15.714 56.57,15.693C56.618,15.85 56.634,16.016 56.617,16.18C56.617,17.846 58.564,20.108 60.757,20.992C61.736,21.385 62.99,21.204 62.99,20.67C62.99,20.472 63.128,20.544 63.339,20.86L63.55,21.164L63.247,21.423C62.215,22.301 60.125,21.78 58.29,20.185C56.543,18.673 55.234,15.858 56.221,15.744M52.812,16.743C53.45,16.708 54.088,16.677 54.726,16.651L55.165,16.631L56.933,19.003L58.699,21.377L57.612,22.399C56.459,23.447 55.155,24.316 53.743,24.976C51.506,22.294 48.381,18.256 48.485,18.189C48.557,18.143 49.228,17.817 49.974,17.464L51.334,16.82L52.812,16.741M59.412,22.014C59.439,21.974 63.605,22.231 63.605,22.231L64.268,26.027L63.348,28.995L57.142,28.073C57.142,28.073 59.388,22.052 59.412,22.014Z",
          fill: "currentColor"
        })
      ], -1)
    ])], 8, ga));
  }
}), ma = ["width", "height"], Ga = /* @__PURE__ */ y({
  __name: "GfpDeferCeremonyIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("g", { transform: "matrix(8.52702,0,0,8.52702,-46.4843,-62.8893)" }, [
        i("path", {
          d: "M31.198,59.553L38.159,59.553C38.764,59.553 39.256,60.046 39.256,60.654L39.256,66.318C39.256,66.926 38.764,67.42 38.159,67.42L11.961,67.42C11.355,67.42 10.864,66.926 10.864,66.318L10.864,60.654C10.864,60.046 11.355,59.553 11.961,59.553L18.922,59.553L18.922,38.611C18.922,38.27 19.197,37.994 19.536,37.994L30.584,37.994C30.923,37.994 31.198,38.27 31.198,38.611L31.198,59.553Z",
          fill: "currentColor"
        }),
        i("path", {
          d: "M34.658,28.313L40.112,28.313C40.566,28.313 40.997,28.512 41.293,28.857C41.589,29.202 41.72,29.659 41.652,30.11L39.289,45.87C39.174,46.635 38.52,47.201 37.749,47.201L32.258,47.201L32.258,38.255C32.258,37.445 31.603,36.787 30.796,36.787L19.099,36.787C18.292,36.787 17.637,37.445 17.637,38.255L17.637,47.201L12.37,47.201C11.599,47.201 10.945,46.635 10.83,45.87L8.467,30.11C8.399,29.659 8.53,29.202 8.826,28.857C9.122,28.512 9.553,28.313 10.007,28.313L32.871,28.313L32.871,25.98L28.771,22.965C28.278,23.33 27.668,23.546 27.009,23.546C25.366,23.546 24.033,22.206 24.033,20.557C24.033,18.908 25.366,17.568 27.009,17.568C28.651,17.568 29.985,18.908 29.985,20.557C29.985,20.893 29.93,21.216 29.827,21.518L34.293,24.802C34.522,24.971 34.658,25.239 34.658,25.525L34.658,28.313Z",
          fill: "currentColor"
        }),
        i("path", {
          d: "M38.561,14.459L38.561,14.458C38.561,14.426 38.562,14.393 38.564,14.361C38.574,14.204 38.608,14.053 38.663,13.913C38.738,13.721 38.852,13.546 39,13.398L44.583,7.814C45.169,7.229 46.119,7.229 46.705,7.814C47.29,8.4 47.29,9.35 46.705,9.936L43.681,12.959L55.415,12.959C57.293,12.959 59.095,13.705 60.423,15.034C61.752,16.362 62.498,18.164 62.498,20.042C62.498,21.921 61.752,23.723 60.423,25.051C59.095,26.379 57.293,27.126 55.415,27.126L54.019,27.126C53.191,27.126 52.519,26.454 52.519,25.626C52.519,24.798 53.191,24.126 54.019,24.126L55.415,24.126C56.498,24.126 57.536,23.695 58.302,22.93C59.068,22.164 59.498,21.125 59.498,20.042C59.498,18.959 59.068,17.921 58.302,17.155C57.536,16.389 56.498,15.959 55.415,15.959L43.683,15.959L46.705,18.981C47.29,19.566 47.29,20.517 46.705,21.102C46.119,21.688 45.169,21.688 44.583,21.102L39.018,15.537C38.736,15.264 38.561,14.882 38.561,14.459Z",
          fill: "currentColor"
        })
      ], -1)
    ])], 8, ma));
  }
}), ba = ["width", "height"], Va = /* @__PURE__ */ y({
  __name: "GfpColorsIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("g", { transform: "matrix(7.10071,0,0,7.10071,-4.92479,12.9765)" }, [
        i("circle", {
          cx: "36.747",
          cy: "17.707",
          r: "17.039",
          style: { fill: "rgb(255, 79, 138)" }
        }),
        i("circle", {
          cx: "55.708",
          cy: "50.744",
          r: "17.039",
          style: { fill: "rgb(93, 241, 255)" }
        }),
        i("circle", {
          cx: "17.785",
          cy: "50.744",
          r: "17.039",
          style: { fill: "rgb(122, 245, 124)" }
        })
      ], -1)
    ])], 8, ba));
  }
}), ka = ["width", "height"], Fa = /* @__PURE__ */ y({
  __name: "GfpGownIcon",
  props: {
    size: { default: 24 }
  },
  setup(a) {
    return (t, e) => (s(), l("svg", {
      width: a.size,
      height: a.size,
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[0] || (e[0] = [
      i("g", { transform: "matrix(1.65147,0,0,1.65147,-166.776,-180.786)" }, [
        i("g", { id: "Layer1" }, [
          i("path", {
            d: "M353.67,419.497L158.33,419.497L176.955,229.858L172.525,229.858L158.33,373.954L102.549,333.433L130.117,158.335C130.117,158.335 130.622,151.988 138.295,148.186C145.968,144.383 176.955,129.456 176.955,129.456L249.861,202.671L249.861,243.157L262.139,243.157L262.139,202.671L335.045,129.456C335.045,129.456 366.032,144.383 373.705,148.186C381.378,151.988 381.883,158.335 381.883,158.335L409.451,333.433L353.67,373.954L339.475,229.858L335.045,229.858L353.67,419.497ZM256,183.728L193.254,121.201L215.693,109.47L296.307,109.47L318.746,121.201L256,183.728ZM292.897,121.201L219.103,121.201L256,155.804L292.897,121.201Z",
            fill: "currentColor"
          })
        ])
      ], -1)
    ])], 8, ka));
  }
}), Oa = {
  install(a) {
    a.component("Badge", Re), a.component("BlockButton", He), a.component("Button", pe), a.component("ButtonGroup", st), a.component("Card", dt), a.component("Checkbox", gt), a.component("DarkModeToggle", bt), a.component("DateInput", zt), a.component("Dialog", Tt), a.component("Drawer", Pt), a.component("Dropdown", we), a.component("Field", Rt), a.component("Fieldset", At), a.component("IconButton", Le), a.component("Input", qt), a.component("Link", Jt), a.component("MainNav", or), a.component("MasonaryGrid", lr), a.component("Modal", cr), a.component("Pagination", br), a.component("RadioGroup", vr), a.component("Select", wr), a.component("Sidebar", $r), a.component("Spinner", A), a.component("SubHeader", Er), a.component("TabContent", Ir), a.component("Table", Pr), a.component("TableBody", Fr), a.component("TableCell", Hr), a.component("TableHead", Kr), a.component("TableHeader", Jr), a.component("TableRow", Ur), a.component("Tabs", la), a.component("Text", ae);
  }
};
export {
  Re as Badge,
  He as BlockButton,
  pe as Button,
  st as ButtonGroup,
  dt as Card,
  gt as Checkbox,
  bt as DarkModeToggle,
  zt as DateInput,
  Tt as Dialog,
  Pt as Drawer,
  we as Dropdown,
  Rt as Field,
  At as Fieldset,
  Va as GfpColorsIcon,
  Ga as GfpDeferCeremonyIcon,
  Na as GfpFrameIcon,
  Fa as GfpGownIcon,
  Sa as GfpHoodIcon,
  Za as GfpPlaqueIcon,
  Ta as GfpPulpitDraftIcon,
  Da as GfpPulpitIcon,
  Ea as GfpRegaliaScanIcon,
  Pa as GfpStagePhotographyIcon,
  ja as GfpStudioPhotographyIcon,
  Ia as GfpTeddyIcon,
  Le as IconButton,
  qt as Input,
  Jt as Link,
  or as MainNav,
  lr as MasonaryGrid,
  cr as Modal,
  br as Pagination,
  vr as RadioGroup,
  wr as Select,
  $r as Sidebar,
  A as Spinner,
  Er as SubHeader,
  Ir as TabContent,
  Pr as Table,
  Fr as TableBody,
  Hr as TableCell,
  Kr as TableHead,
  Jr as TableHeader,
  Ur as TableRow,
  la as Tabs,
  ae as Text,
  Oa as default
};
//# sourceMappingURL=index.mjs.map
