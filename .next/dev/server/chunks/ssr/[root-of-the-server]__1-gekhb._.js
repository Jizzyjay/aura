module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/cover-image.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoverImage",
    ()=>CoverImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const FALLBACK = "/images/hero.jpg";
function CoverImage({ src, alt, className, fallback = FALLBACK }) {
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: failed ? fallback : src,
        alt: alt,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("block max-w-none", className),
        referrerPolicy: "no-referrer",
        onError: ()=>setFailed(true)
    }, void 0, false, {
        fileName: "[project]/components/cover-image.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-ssr] (ecmascript)");
;
;
function Icon({ name, className, filled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("material-symbols-outlined", className),
        style: filled ? {
            fontVariationSettings: "'FILL' 1"
        } : undefined,
        "aria-hidden": "true",
        children: name
    }, void 0, false, {
        fileName: "[project]/components/icon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/site-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cover$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cover-image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const NAV = [
    {
        href: "/",
        label: "Destinations"
    },
    {
        href: "/sanctuaries",
        label: "Sanctuaries"
    },
    {
        href: "/#journeys",
        label: "Curated Journeys"
    },
    {
        href: "/#concierge",
        label: "Private Concierge"
    }
];
function SiteHeader() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-surface/75 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20 max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-gutter flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-space-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-space-sm min-w-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                alt: "AURA Luxury Sanctuaries Logo",
                                className: "h-7 sm:h-8 w-auto object-contain shrink-0",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].logo
                            }, void 0, false, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/site-header.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/site-header.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex items-center gap-space-xl",
                        children: NAV.map((item)=>{
                            const active = item.href === "/" ? pathname === "/" : item.href.startsWith("/sanctuaries") && pathname.startsWith("/sanctuaries");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                "aria-current": active ? "page" : undefined,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("uppercase transition-colors", active ? "text-primary font-medium" : "font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface"),
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/site-header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-space-md md:gap-space-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-space-xs font-label-caps text-label-caps text-tertiary px-space-sm py-space-xs bg-surface-container-low rounded-lg cursor-pointer",
                                role: "button",
                                tabIndex: 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "USD"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-header.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-outline",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/reserve",
                                className: "px-space-sm md:px-space-md py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-fixed-dim hover:text-on-primary-fixed-variant transition-all whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "lg:hidden",
                                        children: "Reserve"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-header.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden lg:inline",
                                        children: "Reserve Sanctuary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-header.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "lg:hidden text-on-surface min-h-11 min-w-11 inline-flex items-center justify-center",
                                "aria-label": "Open navigation",
                                onClick: ()=>setOpen((value)=>!value),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: open ? "close" : "menu",
                                    className: "text-[22px]"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden lg:flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cover$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoverImage"], {
                                    alt: "Profile",
                                    className: "w-8 h-8 rounded-full object-cover",
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].profile
                                }, void 0, false, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site-header.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site-header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "lg:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl px-gutter-mobile py-space-md flex flex-col gap-space-sm",
                children: NAV.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: "font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface py-space-sm min-h-11 flex items-center",
                        onClick: ()=>setOpen(false),
                        children: item.label
                    }, item.href, false, {
                        fileName: "[project]/components/site-header.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/site-header.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/site-header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
}),
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "COORDINATES",
    ()=>COORDINATES,
    "DEFAULT_STAY",
    ()=>DEFAULT_STAY,
    "HOME_MEDIA",
    ()=>HOME_MEDIA,
    "VILLA_GALLERY",
    ()=>VILLA_GALLERY,
    "VILLA_MEDIA",
    ()=>VILLA_MEDIA,
    "featuredEstates",
    ()=>featuredEstates,
    "getSanctuary",
    ()=>getSanctuary,
    "landscapes",
    ()=>landscapes,
    "sanctuaries",
    ()=>sanctuaries,
    "stayTotal",
    ()=>stayTotal
]);
const BRAND = {
    name: "AURA",
    legal: "AURA Sanctuaries Ltd.",
    logo: "/logo.svg",
    profile: "/images/profile.jpg"
};
const DEFAULT_STAY = {
    checkIn: "Oct 14, 2025",
    checkOut: "Oct 21, 2025",
    nights: 7,
    guests: 2
};
const sanctuaries = [
    {
        slug: "cedar-pavilion",
        name: "The Cedar Pavilion",
        location: "Kyoto, Japan",
        region: "Asia",
        country: "Japan",
        badge: "Architectural Masterpiece",
        description: "Minimalist hinoki wood villa nestled in secluded Sagano groves, featuring geothermal ofuro baths and serene tatami tea rooms.",
        guests: 4,
        suites: 2,
        baths: 2.5,
        sqft: "3,400",
        pricePerNight: 2100,
        nights: 7,
        rating: 4.99,
        reviews: 24,
        galleryCount: 5,
        image: "/images/kyoto.jpg",
        imageAlt: "Modern Japanese luxury architectural villa made of pale hinoki wood and blackened steel, nestled inside an ethereal Kyoto bamboo forest at twilight."
    },
    {
        slug: "villa-belvedere",
        name: "Villa Belvedere",
        location: "Ravello, Amalfi Coast",
        region: "Europe",
        country: "Italy",
        badge: "Coastal Icon",
        description: "Panoramic cliff-hung sanctuary featuring tiered solariums, private funicular down to turquoise sea access, and personal sommelier cellars.",
        guests: 8,
        suites: 4,
        baths: 5,
        sqft: "6,200",
        pricePerNight: 3200,
        nights: 7,
        rating: 5,
        reviews: 52,
        galleryCount: 7,
        image: "/images/amalfi.jpg",
        imageAlt: "Dramatic UNESCO cliffside Italian luxury villa in Ravello perched over the sapphire Mediterranean Sea."
    },
    {
        slug: "monolith-house",
        name: "Monolith House",
        location: "Joshua Tree, California",
        region: "Americas",
        country: "United States",
        badge: "Off-Grid Luxury",
        description: "Mirrored desert monolith nestled in a registered dark sky reserve with integrated basalt plunge pools and celestial viewing skylights.",
        guests: 2,
        suites: 1,
        baths: 1.5,
        sqft: "2,200",
        pricePerNight: 1650,
        nights: 7,
        rating: 4.94,
        reviews: 39,
        galleryCount: 6,
        image: "/images/joshua.jpg",
        imageAlt: "Avant-garde mirrored brutalist desert sanctuary pavilion in Joshua Tree California."
    },
    {
        slug: "chalet-le-sommet",
        name: "Chalet Le Sommet",
        location: "Zermatt, Switzerland",
        region: "Europe",
        country: "Switzerland",
        badge: "Winter Haven",
        description: "Ski-in ski-out charred timber sanctum offering direct Matterhorn views, cedar hydrotherapy circuits, and dedicated alpine guides.",
        guests: 10,
        suites: 5,
        baths: 6,
        sqft: "7,800",
        pricePerNight: 4100,
        nights: 7,
        rating: 4.98,
        reviews: 18,
        galleryCount: 8,
        image: "/images/zermatt.jpg",
        imageAlt: "Monolithic modern Swiss alpine chalet in Zermatt facing the Matterhorn."
    },
    {
        slug: "dune-compound",
        name: "The Dune Compound",
        location: "Al Wadi Desert, UAE",
        region: "Middle East",
        country: "United Arab Emirates",
        badge: "Oasis Sanctuary",
        description: "Rammed-earth architectural pavilion surrounded by rolling red dunes, private moonlit infinity pool, and dedicated desert falconry.",
        guests: 6,
        suites: 3,
        baths: 4,
        sqft: "5,100",
        pricePerNight: 2850,
        nights: 7,
        rating: 4.97,
        reviews: 31,
        galleryCount: 6,
        image: "/images/dunes.jpg",
        imageAlt: "Sculptural luxury desert estate amidst golden sand dunes in Ras Al Khaimah."
    },
    {
        slug: "finca-escondida",
        name: "Finca Escondida",
        location: "Deià, Mallorca",
        region: "Europe",
        country: "Spain",
        badge: "Heritage Hideaway",
        description: "Restored 18th-century stone finca framed by century-old olive groves, Tramuntana mountain panoramas, and private coastal coves.",
        guests: 8,
        suites: 4,
        baths: 4.5,
        sqft: "4,900",
        pricePerNight: 2400,
        nights: 7,
        rating: 4.96,
        reviews: 44,
        galleryCount: 9,
        image: "/images/mallorca.jpg",
        imageAlt: "Restored historic 18th-century dry stone luxury estate in Deià Mallorca."
    }
];
const landscapes = [
    {
        slug: "cedar-pavilion",
        name: "Cedar Zen Enclave",
        location: "KYOTO, JAPAN",
        climate: "19°C MIST",
        badge: "Limited • 2 Estates",
        icon: "water_drop",
        description: "Sacred temple gardens adjoining untouched Arashiyama bamboo slopes.",
        footnote: "Exclusive Access Only",
        image: "/images/kyoto.jpg",
        imageAlt: "Minimalist Japanese cedar wood pavilion hidden among mossy Kyoto bamboo forest mist."
    },
    {
        slug: "villa-belvedere",
        name: "Cliffside Estate",
        location: "RAVELLO, ITALY",
        climate: "24°C COASTAL",
        badge: "Private Funicular",
        icon: "sailing",
        description: "Perched 350 meters above the Tyrrhenian sea with private harbor anchorage.",
        footnote: "Helipad Equipped",
        image: "/images/amalfi.jpg",
        imageAlt: "Brutalist stone terrace carved into vertical Ravello Amalfi cliffs."
    },
    {
        slug: "monolith-house",
        name: "Desert Monolith",
        location: "CALIFORNIA, USA",
        climate: "21°C ARID",
        badge: "Dark Sky Certified",
        icon: "wb_twilight",
        description: "Eighty acres of silence, astronomical stargazing lens, and zero light bleed.",
        footnote: "Sound Meditation Dome",
        image: "/images/joshua.jpg",
        imageAlt: "Monolithic blackened steel and rammed earth architecture in Joshua Tree."
    },
    {
        slug: "chalet-le-sommet",
        name: "Chalet Solitude",
        location: "ZERMATT, SWISS",
        climate: "-2°C GLACIER",
        badge: "Ski-In Helicopter",
        icon: "ac_unit",
        description: "Private thermal baths overlooking the Matterhorn silhouette at midnight.",
        footnote: "Private Mountain Guide",
        image: "/images/zermatt.jpg",
        imageAlt: "Modern charred timber alpine chalet facing snow covered peaks of Zermatt."
    }
];
const featuredEstates = [
    {
        slug: "villa-belvedere",
        name: "Villa L'Ombra",
        location: "Amalfi Coast",
        suitesLabel: "4 Suites",
        rating: 5,
        reviewsLabel: "(48 private reviews)",
        estateId: "Estate ID: IT-AML-04",
        description: "Carved directly into volcanic sea-cliffs. Features private subterranean funicular, 4 master suites, and dedicated sea grotto access.",
        amenities: [
            "Private Funicular",
            "Wine Cellar",
            "Yacht Tender"
        ],
        pricePerNight: 2450,
        image: "/images/pool.jpg",
        imageAlt: "Villa L'Ombra architectural cliffside terrace in Amalfi."
    },
    {
        slug: "dune-compound",
        name: "Sabi Sabi Solitude",
        location: "Serengeti",
        suitesLabel: "3 Pavilions",
        rating: 4.98,
        reviewsLabel: "(36 reviews)",
        estateId: "Estate ID: TZ-SRG-01",
        description: "An unbordered wildlife sanctuary with a private Cessna landing strip, personal field biologist, and open-air stargazing canopies.",
        amenities: [
            "Bush Airstrip",
            "Personal Ranger",
            "Solar Powered"
        ],
        pricePerNight: 3800,
        image: "/images/serengeti.jpg",
        imageAlt: "Luxury modern architectural lodge in the Serengeti plains."
    },
    {
        slug: "finca-escondida",
        name: "Casa Mirador",
        location: "Mallorca",
        suitesLabel: "5 Suites",
        rating: 4.95,
        reviewsLabel: "(62 reviews)",
        estateId: "Estate ID: ES-MLC-12",
        description: "Set amid 300-year-old olive groves in Deià. Includes private Michelin-trained resident chef and panoramic Tramuntana terrace.",
        amenities: [
            "Resident Chef",
            "Organic Grove",
            "Lap Pool"
        ],
        pricePerNight: 1950,
        image: "/images/mallorca.jpg",
        imageAlt: "Casa Mirador contemporary stone architecture in Mallorca olive groves."
    }
];
const HOME_MEDIA = {
    hero: "/images/hero.jpg",
    helicopter: "/images/helicopter.jpg",
    cellar: "/images/cellar.jpg",
    invitation: "/images/invitation.jpg"
};
const VILLA_GALLERY = [
    {
        src: "/images/amalfi.jpg",
        alt: "Cinematic wide-angle architectural exterior of Villa Belvedere carved into the limestone cliffs of Ravello.",
        caption: "Ravello Cliffside Panorama • 340m Elevation"
    },
    {
        src: "/images/pool.jpg",
        alt: "Minimalist dark basalt infinity plunge pool cantilevered over the Amalfi coastline.",
        caption: "Infinity Plunge Basin"
    },
    {
        src: "/images/suite.jpg",
        alt: "Editorial master bedroom interior with linen bedding and a panoramic archway to the sea.",
        caption: "Master Belvedere Suite"
    },
    {
        src: "/images/dining.jpg",
        alt: "Mediterranean al fresco dining terrace shaded by a lemon grove trellis.",
        caption: "Lemon Pergola Dining"
    },
    {
        src: "/images/bath.jpg",
        alt: "Sculptural freestanding Roman travertine soaking bathtub.",
        caption: "Monolithic Travertine Spa"
    }
];
const VILLA_MEDIA = {
    director: "/images/director.jpg",
    map: "/images/map.jpg",
    concierge: "/images/concierge.jpg",
    booking: "/images/pool.jpg"
};
const COORDINATES = [
    {
        href: "/sanctuaries/cedar-pavilion",
        label: "Kyoto, Japan"
    },
    {
        href: "/sanctuaries/villa-belvedere",
        label: "Amalfi, Italy"
    },
    {
        href: "/sanctuaries/monolith-house",
        label: "Joshua Tree, California"
    },
    {
        href: "/sanctuaries/chalet-le-sommet",
        label: "Zermatt, Switzerland"
    },
    {
        href: "/sanctuaries",
        label: "Serengeti, Tanzania"
    }
];
function getSanctuary(slug) {
    return sanctuaries.find((item)=>item.slug === slug);
}
function stayTotal(pricePerNight, nights = DEFAULT_STAY.nights) {
    return pricePerNight * nights;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1-gekhb._.js.map