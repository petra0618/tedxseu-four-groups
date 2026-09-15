/* =====================================================================
   TEDxSEU 四组介绍互动组件 · four-groups.js
   负责：读取 config.js → 生成结构 → 应用参数 → 绑定交互。
   日常无需修改本文件。
   ===================================================================== */
(function () {
  "use strict";

  var cfg = window.FOUR_GROUPS_CONFIG || {};
  var groups = cfg.groups || {};
  var colors = cfg.colors || {};
  var size = cfg.size || {};
  var typo = cfg.typography || {};
  var texts = cfg.texts || {};

  var root = document.getElementById("four-groups");
  if (!root) return;

  /* 阅读顺序：上 → 右 → 左 → 下 = 嘉宾｜编辑｜设计｜社群 */
  var REGIONS = [
    { key: "talker",   side: "上" },
    { key: "editor",   side: "右" },
    { key: "designer", side: "左" },
    { key: "outreach", side: "下" }
  ];

  /* ---------- 把 config.js 的参数写入 CSS 变量 ---------- */
  function v(name, value) { if (value !== undefined && value !== null) root.style.setProperty(name, value); }
  v("--fg-w", (size.width || 340) + "px");
  v("--fg-h", (size.height || 340) + "px");
  v("--fg-x-width", (size.xLineWidth !== undefined ? size.xLineWidth : 4) + "px");
  v("--fg-bg", colors.background);
  v("--fg-x-color", colors.xColor);
  v("--fg-front", colors.frontText);
  v("--fg-e-color", colors.frontEnglish);
  v("--fg-cx-color", colors.centerMark);
  v("--fg-hover", colors.hoverFill);
  v("--fg-b-title-color", colors.backTitle);
  v("--fg-b-en-color", colors.backEnglish);
  v("--fg-b-body-color", colors.backBody);
  v("--fg-b-hint-color", colors.backHint);
  v("--fg-b-tick", colors.backTick);
  v("--fg-b-pad", (size.backPadding || 28) + "px");
  v("--fg-font-cn", typo.fontCN);
  v("--fg-font-en", typo.fontEN);
  v("--fg-t-size", (typo.frontTitleSize || 16) + "px");
  v("--fg-t-weight", typo.frontTitleWeight || 700);
  v("--fg-t-lh", typo.frontTitleLineHeight);
  v("--fg-t-track", typo.frontTitleTracking);
  v("--fg-e-size", (typo.frontEnglishSize || 11) + "px");
  v("--fg-e-weight", typo.frontEnglishWeight);
  v("--fg-e-track", typo.frontEnglishTracking);
  v("--fg-label-gap", (typo.frontLabelGap || 6) + "px");
  v("--fg-b-title-size", (typo.backTitleSize || 28) + "px");
  v("--fg-b-title-weight", typo.backTitleWeight || 700);
  v("--fg-b-title-lh", typo.backTitleLineHeight);
  v("--fg-b-title-track", typo.backTitleTracking);
  v("--fg-b-en-size", (typo.backEnglishSize || 11) + "px");
  v("--fg-b-en-weight", typo.backEnglishWeight);
  v("--fg-b-en-track", typo.backEnglishTracking);
  v("--fg-b-title-en-gap", (typo.backTitleEnglishGap || 6) + "px");
  v("--fg-b-body-size", (typo.backBodySize || 15) + "px");
  v("--fg-b-body-weight", typo.backBodyWeight || 400);
  v("--fg-b-body-lh", typo.backBodyLineHeight);
  v("--fg-b-body-track", typo.backBodyTracking);
  v("--fg-b-gap", (typo.backTitleGap || 18) + "px");
  v("--fg-b-hint-size", (typo.backHintSize || 12) + "px");
  v("--fg-cx-size", (typo.centerMarkSize || 14) + "px");
  v("--fg-cx-weight", typo.centerMarkWeight || 700);

  /* ---------- 工具 ---------- */
  var NS = "http://www.w3.org/2000/svg";
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function svgEl(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  /* ---------- 结构 ---------- */
  var box = el("div", "fg-box");
  box.setAttribute("data-state", "front");

  /* X 的内缩（0–49%），让 X 可以在正方形内整体缩放 */
  var inset = Math.max(0, Math.min(49, Number(size.xInset) || 0)) * 3.4;

  var svg = svgEl("svg", { class: "fg-xsvg", viewBox: "0 0 340 340", preserveAspectRatio: "xMidYMid meet" });
  svg.appendChild(svgEl("line", { x1: inset, y1: inset, x2: 340 - inset, y2: 340 - inset }));
  svg.appendChild(svgEl("line", { x1: 340 - inset, y1: inset, x2: inset, y2: 340 - inset }));

  var HOTSPOTS = {
    talker:   inset + "," + inset + " " + (340 - inset) + "," + inset + " 170,170",
    editor:   (340 - inset) + "," + inset + " " + (340 - inset) + "," + (340 - inset) + " 170,170",
    designer: inset + "," + (340 - inset) + " " + inset + "," + inset + " 170,170",
    outreach: (340 - inset) + "," + (340 - inset) + " " + inset + "," + (340 - inset) + " 170,170"
  };

  REGIONS.forEach(function (r) {
    var g = groups[r.key] || {};
    var p = svgEl("polygon", {
      class: "fg-hit",
      "data-g": r.key,
      points: HOTSPOTS[r.key],
      tabindex: "0",
      role: "button",
      "aria-label": (g.title || r.key) + "（" + r.side + "）"
    });
    p.addEventListener("click", function () { box.setAttribute("data-state", r.key); });
    p.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); box.setAttribute("data-state", r.key); }
    });
    svg.appendChild(p);
  });
  box.appendChild(svg);

  /* 前面：四个标签 + 中心 ✕ */
  var front = el("div", "fg-front");
  var LAB_CLASSES = { talker: "fg-lab-top", editor: "fg-lab-right", designer: "fg-lab-left", outreach: "fg-lab-bottom" };
  REGIONS.forEach(function (r) {
    var g = groups[r.key] || {};
    var lab = el("div", "fg-lab " + LAB_CLASSES[r.key]);
    lab.appendChild(el("span", "fg-cn", g.title || ""));
    lab.appendChild(el("span", "fg-en", g.english || ""));
    front.appendChild(lab);
  });
  front.appendChild(el("div", "fg-cx", texts.centerMark !== undefined ? texts.centerMark : "X"));
  box.appendChild(front);

  /* 背面：四个详情面板 */
  REGIONS.forEach(function (r) {
    var g = groups[r.key] || {};
    var back = el("div", "fg-back");
    back.setAttribute("data-g", r.key);
    back.setAttribute("tabindex", "0");
    back.setAttribute("role", "button");
    back.setAttribute("aria-label", "返回四组");

    var tick = svgEl("svg", { class: "fg-tick", viewBox: "0 0 18 18", "aria-hidden": "true" });
    tick.appendChild(svgEl("path", { d: "M2 2 L2 16 L16 16", fill: "none", "stroke-width": "3" }));

    back.appendChild(tick);
    back.appendChild(el("div", "fg-b-title", g.title || ""));
    back.appendChild(el("div", "fg-b-en", g.english || ""));
    back.appendChild(el("div", "fg-b-desc", g.description || ""));
    back.appendChild(el("div", "fg-b-hint", texts.backHint !== undefined ? texts.backHint : "点击任意处返回"));

    back.addEventListener("click", function () { box.setAttribute("data-state", "front"); });
    back.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); box.setAttribute("data-state", "front"); }
    });
    box.appendChild(back);
  });

  root.appendChild(box);
})();
