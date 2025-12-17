(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/context/app-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const sampleTemplates = [
    {
        id: "gilded-floral",
        title: "Gilded Floral Enlace",
        previewUrl: "/images/28free-29-208-2b-20gilded-20floral-20enlace-20canva-20wedding-e2-80-a6.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "monogram",
                    type: "text",
                    label: "Monogram",
                    defaultValue: "H & M",
                    x: 180,
                    y: 40,
                    width: 120,
                    height: 40,
                    fontSize: 28,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "intro",
                    type: "text",
                    label: "Introduction",
                    defaultValue: "TOGETHER WITH THEIR FAMILIES",
                    x: 100,
                    y: 100,
                    width: 280,
                    height: 24,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "names",
                    type: "text",
                    label: "Couple Names",
                    defaultValue: "Hannah & Morgan",
                    x: 80,
                    y: 130,
                    width: 320,
                    height: 60,
                    fontSize: 42,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "invite-text",
                    type: "text",
                    label: "Invitation Text",
                    defaultValue: "INVITING YOU TO CELEBRATING\nTHEIR WEDDING",
                    x: 100,
                    y: 210,
                    width: 280,
                    height: 50,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "date",
                    type: "date",
                    label: "Wedding Date",
                    defaultValue: "SATURDAY, 15 JULY 2023",
                    x: 100,
                    y: 290,
                    width: 280,
                    height: 30,
                    fontSize: 16,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "time-venue",
                    type: "text",
                    label: "Time & Venue",
                    defaultValue: "CEREMONY | HOTEL WARNER\n2PM | & SPENCER",
                    x: 100,
                    y: 340,
                    width: 280,
                    height: 60,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "note",
                    type: "text",
                    label: "Note",
                    defaultValue: "PLEASE BRING\nTHIS INVITATION",
                    x: 130,
                    y: 420,
                    width: 220,
                    height: 40,
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "Gold",
        rating: 5,
        number: 301
    },
    {
        id: "modern-floral-blush",
        title: "Modern Floral Blush",
        previewUrl: "/images/cool-208-2b-20modern-20floral-20wedding-20invitation-20templates-e2-80-a6.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "intro",
                    type: "text",
                    label: "Introduction",
                    defaultValue: "TOGETHER WITH OUR LOVED\nFRIENDS AND FAMILY\ncelebrating our wedding",
                    x: 80,
                    y: 60,
                    width: 320,
                    height: 70,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center"
                },
                {
                    id: "bride",
                    type: "text",
                    label: "Bride Name",
                    defaultValue: "Karin",
                    x: 100,
                    y: 150,
                    width: 280,
                    height: 50,
                    fontSize: 48,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "and",
                    type: "text",
                    label: "And",
                    defaultValue: "and",
                    x: 180,
                    y: 200,
                    width: 120,
                    height: 30,
                    fontSize: 18,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center"
                },
                {
                    id: "groom",
                    type: "text",
                    label: "Groom Name",
                    defaultValue: "Kevin",
                    x: 100,
                    y: 230,
                    width: 280,
                    height: 50,
                    fontSize: 48,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "date",
                    type: "date",
                    label: "Wedding Date",
                    defaultValue: "September 15th, 2021",
                    x: 100,
                    y: 310,
                    width: 280,
                    height: 30,
                    fontSize: 18,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#5a4a3a",
                    textAlign: "center"
                },
                {
                    id: "time",
                    type: "time",
                    label: "Time",
                    defaultValue: "at five o'clock in the afternoon",
                    x: 100,
                    y: 340,
                    width: 280,
                    height: 24,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center"
                },
                {
                    id: "venue",
                    type: "location",
                    label: "Venue",
                    defaultValue: "The East Bay Hotel\n338 Richardson Street\nWaynesboro, PA 17268",
                    x: 100,
                    y: 380,
                    width: 280,
                    height: 70,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#5a4a3a",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "Pink",
        rating: 5,
        number: 302
    },
    {
        id: "dark-floral-frame",
        title: "Dark Floral Frame",
        previewUrl: "/images/die-20vorlage-20verf-c3-bcgt-20-c3-bcber-20ein-20gut-20ausgearbeitetes-e2-80-a6-20-281-29.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "intro",
                    type: "text",
                    label: "Introduction",
                    defaultValue: "TOGETHER WITH THEIR FAMILIES",
                    x: 80,
                    y: 120,
                    width: 240,
                    height: 24,
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "names",
                    type: "text",
                    label: "Couple Names",
                    defaultValue: "Sarah & James",
                    x: 60,
                    y: 160,
                    width: 280,
                    height: 60,
                    fontSize: 38,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "invite-text",
                    type: "text",
                    label: "Invitation Text",
                    defaultValue: "REQUEST THE PLEASURE OF YOUR\nCOMPANY AT THEIR WEDDING",
                    x: 60,
                    y: 240,
                    width: 280,
                    height: 50,
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "date",
                    type: "date",
                    label: "Wedding Date",
                    defaultValue: "SATURDAY, JUNE 20TH 2024",
                    x: 80,
                    y: 310,
                    width: 240,
                    height: 28,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "time",
                    type: "time",
                    label: "Time",
                    defaultValue: "AT 4 O'CLOCK IN THE AFTERNOON",
                    x: 80,
                    y: 340,
                    width: 240,
                    height: 24,
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "venue",
                    type: "location",
                    label: "Venue",
                    defaultValue: "THE GRAND BALLROOM\n123 ELEGANT AVENUE",
                    x: 80,
                    y: 380,
                    width: 240,
                    height: 50,
                    fontSize: 12,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "Black",
        rating: 5,
        number: 303
    },
    {
        id: "emerald-tropical",
        title: "Emerald Tropical Luxury",
        previewUrl: "/images/transform-20your-20wedding-20stationery-20instantly-20with-e2-80-a6.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "intro",
                    type: "text",
                    label: "Introduction",
                    defaultValue: "TOGETHER WITH\nTHEIR FAMILIES",
                    x: 120,
                    y: 80,
                    width: 200,
                    height: 50,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "names",
                    type: "text",
                    label: "Couple Names",
                    defaultValue: "George &\nSalomey",
                    x: 80,
                    y: 140,
                    width: 280,
                    height: 100,
                    fontSize: 44,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#d4af37",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "invite-text",
                    type: "text",
                    label: "Invitation Text",
                    defaultValue: "INVITES YOU TO THEIR\nWEDDING CELEBRATION",
                    x: 120,
                    y: 260,
                    width: 200,
                    height: 40,
                    fontSize: 10,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "date",
                    type: "date",
                    label: "Date",
                    defaultValue: "SAT, 25TH\nOCT. 2024",
                    x: 100,
                    y: 310,
                    width: 100,
                    height: 50,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "time",
                    type: "time",
                    label: "Time",
                    defaultValue: "12 PM\nGMT",
                    x: 220,
                    y: 310,
                    width: 100,
                    height: 50,
                    fontSize: 24,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "venue",
                    type: "location",
                    label: "Venue",
                    defaultValue: "@ THE CHURCH PREMISES\nASSEMBLIES OF GOD, MARVILE\nHOMES, MANET-TESHIE LINK,\nGREATER ACCRA",
                    x: 80,
                    y: 380,
                    width: 280,
                    height: 80,
                    fontSize: 9,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "Green",
        rating: 5,
        number: 304
    },
    {
        id: "gold-geometric-rings",
        title: "Gold Geometric Rings",
        previewUrl: "/images/june-205-2c-202022-20-20baryh-20stumbled-20upon-20this-20pin-e2-80-a6-20-281-29.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "intro",
                    type: "text",
                    label: "Introduction",
                    defaultValue: "TOGETHER WITH THEIR FAMILIES",
                    x: 80,
                    y: 80,
                    width: 240,
                    height: 24,
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center"
                },
                {
                    id: "names",
                    type: "text",
                    label: "Couple Names",
                    defaultValue: "Emma & Michael",
                    x: 60,
                    y: 120,
                    width: 280,
                    height: 60,
                    fontSize: 36,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#d4af37",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "invite-text",
                    type: "text",
                    label: "Invitation Text",
                    defaultValue: "REQUEST THE HONOR OF YOUR PRESENCE\nAT THEIR WEDDING CELEBRATION",
                    x: 60,
                    y: 200,
                    width: 280,
                    height: 50,
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "date",
                    type: "date",
                    label: "Wedding Date",
                    defaultValue: "SATURDAY, MARCH 15TH 2025",
                    x: 80,
                    y: 270,
                    width: 240,
                    height: 28,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "time",
                    type: "time",
                    label: "Time",
                    defaultValue: "AT 3 O'CLOCK IN THE AFTERNOON",
                    x: 80,
                    y: 300,
                    width: 240,
                    height: 24,
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "venue",
                    type: "location",
                    label: "Venue",
                    defaultValue: "THE GARDEN PAVILION\n456 ROSE AVENUE, CITY",
                    x: 80,
                    y: 340,
                    width: 240,
                    height: 50,
                    fontSize: 12,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "Gold",
        rating: 5,
        number: 305
    },
    {
        id: "beige-floral-nikkah",
        title: "Beige Floral Nikkah",
        previewUrl: "/images/elegant-20beige-20floral-20nikkah-20invite-20-20simple-20yet-e2-80-a6-20-281-29.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "bismillah",
                    type: "text",
                    label: "Bismillah",
                    defaultValue: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
                    x: 60,
                    y: 30,
                    width: 280,
                    height: 40,
                    fontSize: 20,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "intro",
                    type: "text",
                    label: "Introduction",
                    defaultValue: "TOGETHER\nWITH OUR FAMILIES",
                    x: 120,
                    y: 80,
                    width: 200,
                    height: 50,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center"
                },
                {
                    id: "bride",
                    type: "text",
                    label: "Bride Name",
                    defaultValue: "Halima",
                    x: 80,
                    y: 150,
                    width: 280,
                    height: 60,
                    fontSize: 48,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#5a4a3a",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "and",
                    type: "text",
                    label: "And",
                    defaultValue: "&",
                    x: 180,
                    y: 210,
                    width: 80,
                    height: 30,
                    fontSize: 24,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center"
                },
                {
                    id: "groom",
                    type: "text",
                    label: "Groom Name",
                    defaultValue: "Yunus",
                    x: 80,
                    y: 240,
                    width: 280,
                    height: 60,
                    fontSize: 48,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#5a4a3a",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "invite-text",
                    type: "text",
                    label: "Invitation Text",
                    defaultValue: "REQUEST THE HONOR OF YOUR\nPRESENCE AT THE NIKKAH ON",
                    x: 80,
                    y: 320,
                    width: 280,
                    height: 50,
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#8b7355",
                    textAlign: "center"
                },
                {
                    id: "month",
                    type: "text",
                    label: "Month",
                    defaultValue: "DECEMBER",
                    x: 140,
                    y: 380,
                    width: 160,
                    height: 28,
                    fontSize: 16,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "day-time",
                    type: "text",
                    label: "Day & Time",
                    defaultValue: "SUNDAY | 30 | AT 5 PM\n2023",
                    x: 100,
                    y: 410,
                    width: 240,
                    height: 50,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "venue",
                    type: "location",
                    label: "Venue",
                    defaultValue: "43 MEAM STREET\nBLACKBURN\nBB19TQ",
                    x: 120,
                    y: 480,
                    width: 200,
                    height: 60,
                    fontSize: 12,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#5a4a3a",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "Ivory",
        rating: 5,
        number: 306
    },
    {
        id: "navy-gold-luxury",
        title: "Navy & Gold Luxury",
        previewUrl: "/images/customize-20this-20design-20with-20your-20video-2c-20photos-20and-e2-80-a6.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "intro",
                    type: "text",
                    label: "Introduction",
                    defaultValue: "TOGETHER WITH THEIR\nFAMILIES",
                    x: 80,
                    y: 80,
                    width: 200,
                    height: 50,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#d4af37",
                    textAlign: "center"
                },
                {
                    id: "groom",
                    type: "text",
                    label: "Groom Name",
                    defaultValue: "Jason",
                    x: 100,
                    y: 150,
                    width: 160,
                    height: 50,
                    fontSize: 42,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#ffffff",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "and",
                    type: "text",
                    label: "And",
                    defaultValue: "&",
                    x: 150,
                    y: 200,
                    width: 60,
                    height: 30,
                    fontSize: 24,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#d4af37",
                    textAlign: "center"
                },
                {
                    id: "bride",
                    type: "text",
                    label: "Bride Name",
                    defaultValue: "Emmy",
                    x: 100,
                    y: 230,
                    width: 160,
                    height: 50,
                    fontSize: 42,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#ffffff",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "wedding",
                    type: "text",
                    label: "Wedding Text",
                    defaultValue: "WEDDING",
                    x: 80,
                    y: 290,
                    width: 200,
                    height: 40,
                    fontSize: 32,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#d4af37",
                    textAlign: "center"
                },
                {
                    id: "invite-text",
                    type: "text",
                    label: "Invitation Text",
                    defaultValue: "REQUEST THE PLEASURE\nOF YOUR COMPANY AT THE CELEBRATION OF THEIR",
                    x: 60,
                    y: 350,
                    width: 240,
                    height: 50,
                    fontSize: 10,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    color: "#ffffff",
                    textAlign: "center"
                },
                {
                    id: "date-time",
                    type: "date",
                    label: "Date & Time",
                    defaultValue: "DECEMBER 24TH 2020\nAT 9:00AM",
                    x: 60,
                    y: 420,
                    width: 200,
                    height: 50,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#d4af37",
                    textAlign: "left"
                },
                {
                    id: "quote",
                    type: "text",
                    label: "Quote",
                    defaultValue: "What God has joined let not man separate",
                    x: 60,
                    y: 490,
                    width: 240,
                    height: 30,
                    fontSize: 12,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#ffffff",
                    textAlign: "center",
                    isScript: true
                }
            ]
        },
        category: "Wedding",
        color: "Navy",
        rating: 5,
        number: 307
    },
    {
        id: "olive-minimalist",
        title: "Olive Branch Minimalist",
        previewUrl: "/images/simple-20wedding-20invitation-20card-2c-20simple-20wedding-e2-80-a6.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "intro",
                    type: "text",
                    label: "Introduction",
                    defaultValue: "No dia em que festejamos a nossa união\npedimos a honra da vossa presença",
                    x: 60,
                    y: 60,
                    width: 280,
                    height: 50,
                    fontSize: 12,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "bride",
                    type: "text",
                    label: "Bride Name",
                    defaultValue: "Marisa",
                    x: 80,
                    y: 130,
                    width: 240,
                    height: 50,
                    fontSize: 42,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "and",
                    type: "text",
                    label: "And",
                    defaultValue: "&",
                    x: 180,
                    y: 180,
                    width: 40,
                    height: 30,
                    fontSize: 24,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "groom",
                    type: "text",
                    label: "Groom Name",
                    defaultValue: "Daniel",
                    x: 80,
                    y: 210,
                    width: 240,
                    height: 50,
                    fontSize: 42,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "year",
                    type: "text",
                    label: "Year",
                    defaultValue: "2019",
                    x: 180,
                    y: 280,
                    width: 60,
                    height: 24,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                },
                {
                    id: "date",
                    type: "date",
                    label: "Date",
                    defaultValue: "Sexta-Feira | 13 | Setembro\n12:00",
                    x: 100,
                    y: 310,
                    width: 200,
                    height: 50,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "ceremony",
                    type: "location",
                    label: "Ceremony Venue",
                    defaultValue: "Igreja S. Julião, Praça do Bocage\nSetúbal, Portugal",
                    x: 80,
                    y: 380,
                    width: 240,
                    height: 50,
                    fontSize: 12,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "reception",
                    type: "location",
                    label: "Reception Venue",
                    defaultValue: "Segue-se a celebração - Quinta da Serralheira,\nPalmela, Setúbal",
                    x: 60,
                    y: 440,
                    width: 280,
                    height: 50,
                    fontSize: 12,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#666666",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "White",
        rating: 5,
        number: 308
    },
    // Keep some original templates
    {
        id: "1",
        title: "Olivia Benny Wedding",
        previewUrl: "/elegant-wedding-invitation-card-with-pink-flowers.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "names",
                    type: "text",
                    label: "Couple Names",
                    defaultValue: "Olivia & Benny",
                    x: 100,
                    y: 150,
                    width: 280,
                    height: 60,
                    fontSize: 38,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#d4af37",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "date",
                    type: "date",
                    label: "Wedding Date",
                    defaultValue: "23 APRIL 2026",
                    x: 140,
                    y: 230,
                    width: 200,
                    height: 30,
                    fontSize: 16,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center"
                },
                {
                    id: "venue",
                    type: "location",
                    label: "Venue",
                    defaultValue: "JACK HALL\nMIEZI BEACH",
                    x: 140,
                    y: 280,
                    width: 200,
                    height: 50,
                    fontSize: 14,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "Gold",
        rating: 5,
        number: 280
    },
    {
        id: "2",
        title: "Doreen Maria Save the Date",
        previewUrl: "/save-the-date-wedding-card-elegant-design.jpg",
        templateJson: {
            editableFields: [
                {
                    id: "names",
                    type: "text",
                    label: "Couple Names",
                    defaultValue: "Doreen & Maria",
                    x: 100,
                    y: 140,
                    width: 280,
                    height: 60,
                    fontSize: 36,
                    fontFamily: "script",
                    fontWeight: "normal",
                    color: "#1a1a1a",
                    textAlign: "center",
                    isScript: true
                },
                {
                    id: "date",
                    type: "date",
                    label: "Save the Date",
                    defaultValue: "April 21 2025",
                    x: 140,
                    y: 220,
                    width: 200,
                    height: 40,
                    fontSize: 24,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center"
                }
            ]
        },
        category: "Wedding",
        color: "Pink",
        rating: 5,
        number: 45
    }
];
const sampleDesigns = [
    {
        id: "1",
        userId: "1",
        title: "Mtoto wa Tenth J. Maruhe (Nyamiaga) mchango wa harusi",
        designJson: {},
        thumbnailUrl: "/wedding-invitation-card-blue-floral.jpg",
        createdAt: "2024-11-28T10:00:00Z",
        updatedAt: "2024-11-28T10:00:00Z"
    },
    {
        id: "2",
        userId: "1",
        title: "Stephen and Lucy Wedding Day",
        designJson: {},
        thumbnailUrl: "/wedding-day-invitation-elegant.jpg",
        createdAt: "2024-11-27T10:00:00Z",
        updatedAt: "2024-11-27T10:00:00Z"
    },
    {
        id: "3",
        userId: "1",
        title: "Kisula Wedding",
        designJson: {},
        thumbnailUrl: "/traditional-wedding-card-design.jpg",
        createdAt: "2024-11-26T10:00:00Z",
        updatedAt: "2024-11-26T10:00:00Z"
    }
];
function AppProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [designs, setDesigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sampleDesigns);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sampleTemplates);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AppProvider.useState": ()=>{
            try {
                const raw = localStorage.getItem("nyamizi_agents");
                return raw ? JSON.parse(raw) : [];
            } catch  {
                return [];
            }
        }
    }["AppProvider.useState"]);
    const [sentCards, setSentCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            const storedUser = localStorage.getItem("nyamizi_user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            const storedTheme = localStorage.getItem("nyamizi_theme");
            if (storedTheme) {
                setTheme(storedTheme);
                document.documentElement.classList.toggle("dark", storedTheme === "dark");
            }
        }
    }["AppProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            try {
                localStorage.setItem("nyamizi_agents", JSON.stringify(agents));
            } catch  {}
        }
    }["AppProvider.useEffect"], [
        agents
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem("nyamizi_theme", theme);
        }
    }["AppProvider.useEffect"], [
        theme
    ]);
    const normalizePhone = (p)=>p.replace(/\D/g, "");
    const addAgent = async (agent)=>{
        try {
            const res = await fetch("/api/agents", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(agent)
            });
            if (res.ok) {
                const json = await res.json();
                setAgents((prev)=>[
                        ...prev,
                        json.agent
                    ]);
                return json.agent;
            }
        } catch (err) {
            // fallback to local
            const next = [
                ...agents,
                agent
            ];
            setAgents(next);
            try {
                localStorage.setItem("nyamizi_agents", JSON.stringify(next));
            } catch  {}
            return agent;
        }
    };
    const removeAgent = async (id)=>{
        try {
            await fetch(`/api/agents?id=${id}`, {
                method: "DELETE"
            });
            setAgents((prev)=>prev.filter((a)=>a.id !== id));
        } catch  {
            setAgents((prev)=>prev.filter((a)=>a.id !== id));
            try {
                localStorage.setItem("nyamizi_agents", JSON.stringify(agents.filter((a)=>a.id !== id)));
            } catch  {}
        }
    };
    const login = async (phone, password)=>{
        if (!phone || !password) return false;
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone,
                    password
                })
            });
            if (res.ok) {
                const json = await res.json();
                if (json.ok && json.user) {
                    setUser(json.user);
                    localStorage.setItem("nyamizi_user", JSON.stringify(json.user));
                    addNotification({
                        message: `Welcome ${json.user.name}!`,
                        isRead: false,
                        type: "success"
                    });
                    return true;
                }
            }
        } catch (err) {
        // fallback to local logic
        }
        // fallback: check local agents or admin
        const normalized = normalizePhone(phone);
        const adminPhone = normalizePhone(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADMIN_PHONE || "0744427017");
        const adminPassword = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADMIN_PASSWORD || "nyanda1316";
        if (normalized === adminPhone && password === adminPassword) {
            const adminUser = {
                id: "admin",
                name: "NNYAMIZI STATIONERY",
                email: "nnyamizi@example.com",
                phone: "+255744427017",
                avatar: "/user-avatar-profile.png"
            };
            setUser(adminUser);
            localStorage.setItem("nyamizi_user", JSON.stringify(adminUser));
            addNotification({
                message: "Welcome back! You have successfully logged in.",
                isRead: false,
                type: "success"
            });
            return true;
        }
        const match = agents.find((a)=>normalizePhone(a.phone || "") === normalized);
        if (match && match.password && match.password === password) {
            const agentUser = {
                id: match.id,
                name: match.name,
                email: match.email || "",
                phone: match.phone,
                avatar: match.avatar || "/user-avatar-profile.png"
            };
            setUser(agentUser);
            localStorage.setItem("nyamizi_user", JSON.stringify(agentUser));
            addNotification({
                message: `Welcome ${agentUser.name}!`,
                isRead: false,
                type: "success"
            });
            return true;
        }
        return false;
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("nyamizi_user");
    };
    const addNotification = (notification)=>{
        const newNotification = {
            ...notification,
            id: Date.now().toString(),
            userId: user?.id || "",
            createdAt: new Date().toISOString()
        };
        setNotifications((prev)=>[
                newNotification,
                ...prev
            ]);
    };
    const markNotificationRead = (id)=>{
        setNotifications((prev)=>prev.map((n)=>n.id === id ? {
                    ...n,
                    isRead: true
                } : n));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: {
            user,
            setUser,
            isAuthenticated: !!user,
            login,
            logout,
            agents,
            setAgents,
            addAgent,
            removeAgent,
            designs,
            setDesigns,
            templates,
            setTemplates,
            sentCards,
            setSentCards,
            notifications,
            setNotifications,
            addNotification,
            markNotificationRead,
            sidebarCollapsed,
            setSidebarCollapsed,
            theme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/context/app-context.tsx",
        lineNumber: 1368,
        columnNumber: 5
    }, this);
}
_s(AppProvider, "z7uB4H9KtDFZqr54r09GYit9wNI=");
_c = AppProvider;
function useApp() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}
_s1(useApp, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST'
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: 'UPDATE_TOAST',
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: 'DISMISS_TOAST',
            toastId: id
        });
    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full', {
    variants: {
        variant: {
            default: 'border bg-background text-foreground',
            destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm opacity-90', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_666bea31._.js.map