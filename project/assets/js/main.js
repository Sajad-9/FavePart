"use strict";
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const faNum = n => Number(n).toLocaleString("fa-IR");
const faPrice = n => faNum(n) + `<small> تومان</small>`;
const faPriceText = n => faNum(n) + " تومان";
const offPct = p => p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
const CATEGORIES = [
    { id: "engine", name: "قطعات موتور", icon: "i-gear" },
    { id: "brakes", name: "سیستم ترمز", icon: "i-disc" },
    { id: "suspension", name: "سیستم تعلیق", icon: "i-spring" },
    { id: "electrical", name: "قطعات برقی", icon: "i-bolt" },
    { id: "filters", name: "فیلترها", icon: "i-funnel" },
    { id: "cooling", name: "سیستم خنک‌کننده", icon: "i-fan" },
    { id: "gearbox", name: "گیربکس", icon: "i-gears" },
    { id: "lighting", name: "چراغ و روشنایی", icon: "i-bulb" },
    { id: "steering", name: "فرمان", icon: "i-steer" },
    { id: "exhaust", name: "اگزوز", icon: "i-exhaust" },
    { id: "body", name: "قطعات بدنه", icon: "i-car" },
    { id: "consumables", name: "لوازم مصرفی", icon: "i-wrench" }
];
const catName = id => (CATEGORIES.find(c => c.id === id) || {}).name || "";
const BRANDS = [
    { en: "Bosch", fa: "بوش" }, { en: "Brembo", fa: "برمبو" }, { en: "Continental", fa: "کانتیننتال" }, { en: "Denso", fa: "دنسو" },
    { en: "Valeo", fa: "والئو" }, { en: "Sachs", fa: "زاکس" }, { en: "Mann-Filter", fa: "مان فیلتر" }, { en: "NGK", fa: "ان‌جی‌کی" },
    { en: "Hella", fa: "هلا" }, { en: "TRW", fa: "تی‌آر‌دبلیو" }, { en: "Walker", fa: "واکر" }, { en: "Varta", fa: "وارتا" }, { en: "Nissens", fa: "نیسنز" }
];
const PRODUCTS = [
    { id: 1, name: "لنت ترمز جلو برمبو", brand: "Brembo", sku: "P-06-072", category: "brakes", price: 12900000, oldPrice: 15900000, rating: 4.9, reviews: 128, stock: true, added: 9, compatibility: ["بی‌ام‌وو سری ۳", "بی‌ام‌وو سری ۴"], desc: "لنت ترمز جلو برمبو با فرمولاسیون سرامیکی کم‌غبار، عملکردی یکنواخت در دماهای بالا ارائه می‌دهد و عمر دیسک را افزایش می‌دهد. مناسب رانندگی شهری و جاده‌ای.", specs: [["جنس", "سرامیکی کم‌غبار"], ["عرض", "۱۵۵ میلی‌متر"], ["ضخامت", "۱۷ میلی‌متر"], ["استاندارد", "ECE-R90"], ["گارانتی", "۱۸ ماه"]] },
    { id: 2, name: "دیسک ترمز جلو بوش", brand: "Bosch", sku: "BD-2210", category: "brakes", price: 8400000, oldPrice: 9900000, rating: 4.7, reviews: 96, stock: true, added: 8, compatibility: ["پژو ۲۰۶", "پژو ۲۰۷", "رانا"], desc: "دیسک ترمز بوش با آلیاژ چدن تقویت‌شده و پوشش ضدزنگ، لرزش ترمز را به حداقل می‌رساند و در ترمزهای پی‌در‌پی پایدار می‌ماند.", specs: [["قطر", "۲۶۶ میلی‌متر"], ["ضخامت", "۲۲ میلی‌متر"], ["نوع", "تهویه‌دار"], ["پوشش", "ضدزنگ UV"], ["گارانتی", "۱۲ ماه"]] },
    { id: 3, name: "فیلتر هوای بوش", brand: "Bosch", sku: "AF-5541", category: "filters", price: 1450000, oldPrice: null, rating: 4.6, reviews: 210, stock: true, added: 6, compatibility: ["سمند", "دنا پلاس"], desc: "فیلتر هوای بوش با کاغذ چین‌دار میکروفایبر، تا ۹۹٪ ذرات معلق را جذب می‌کند و تنفس موتور را بهبود می‌بخشد.", specs: [["جنس", "میکروفایبر"], ["راندمان فیلتراسیون", "۹۹٪"], ["طول عمر", "۲۰٬۰۰۰ کیلومتر"], ["استاندارد", "ISO 5011"]] },
    { id: 4, name: "شمع ایریدیوم NGK", brand: "NGK", sku: "ILZKR-7B", category: "electrical", price: 2980000, oldPrice: 3500000, rating: 4.8, reviews: 340, stock: true, added: 9, compatibility: ["تویوتا کمری", "هیوندای سوناتا"], desc: "شمع ایریدیوم NGK با الکترود مرکزی ۰٫۶ میلی‌متری، جرقه‌ای قوی و پایدار تولید می‌کند و مصرف سوخت را کاهش می‌دهد.", specs: [["الکترود", "ایریدیوم"], ["فاصله الکترود", "۱٫۱ میلی‌متر"], ["طول عمر", "۱۰۰٬۰۰۰ کیلومتر"], ["ساخت", "ژاپن"]] },
    { id: 5, name: "کمک‌فنر عقب زاکس", brand: "Sachs", sku: "315-872", category: "suspension", price: 7600000, oldPrice: 8900000, rating: 4.7, reviews: 154, stock: true, added: 7, compatibility: ["بی‌ام‌وو سری ۳"], desc: "کمک‌فنر گازی زاکس با تنظیمات کارخانه‌ای دقیق، تعادل و فرمان‌پذیری خودرو را در سطح استاندارد کارخانه سازنده حفظ می‌کند.", specs: [["نوع", "گازی دولوله‌ای"], ["طول", "۴۱۲ میلی‌متر"], ["محل نصب", "محور عقب"], ["گارانتی", "۲۴ ماه"]] },
    { id: 6, name: "کیت کلاچ والئو", brand: "Valeo", sku: "826-360", category: "gearbox", price: 21500000, oldPrice: 24900000, rating: 4.8, reviews: 87, stock: true, added: 8, compatibility: ["پژو ۴۰۵", "سمند"], desc: "کیت کامل کلاچ والئو شامل دیسک، صفحه و بلبرینگ؛ با تعویض نرم دنده و عمر مفید بالا، انتخاب اول تعمیرگاه‌های تخصصی است.", specs: [["قطر دیسک", "۲۱۵ میلی‌متر"], ["تعداد دنده", "۲۱"], ["اجزا", "دیسک، صفحه، بلبرینگ"], ["گارانتی", "۱۲ ماه"]] },
    { id: 7, name: "فیلتر روغن مان", brand: "Mann-Filter", sku: "W-712/95", category: "filters", price: 1150000, oldPrice: 1350000, rating: 4.9, reviews: 412, stock: true, added: 9, compatibility: ["بی‌ام‌وو سری ۳", "مرسدس بنز C200"], desc: "فیلتر روغن مان فیلتر با سوپاپ ضدبازگشت سیلیکونی، از روغن‌کشی مجدد موتور هنگام استارت جلوگیری می‌کند.", specs: [["قطر", "۷۶ میلی‌متر"], ["ارتفاع", "۹۳ میلی‌متر"], ["سوپاپ", "ضدبازگشت سیلیکونی"], ["ساخت", "آلمان"]] },
    { id: 8, name: "سنسور اکسیژن دنسو", brand: "Denso", sku: "DOX-2047", category: "electrical", price: 6400000, oldPrice: null, rating: 4.5, reviews: 73, stock: true, added: 5, compatibility: ["تویوتا کرولا", "کیا سراتو"], desc: "سنسور اکسیژن دنسو با پاسخ‌دهی سریع به تغییرات مخلوط سوخت، به بهینه‌سازی مصرف و کاهش آلایندگی کمک می‌کند.", specs: [["تعداد سیم", "۴"], ["ولتاژ", "۱۲ ولت"], ["زمان پاسخ", "کمتر از ۱۰۰ میلی‌ثانیه"], ["ساخت", "ژاپن"]] },
    { id: 9, name: "تسمه تایم کانتیننتال", brand: "Continental", sku: "CT-1189", category: "engine", price: 4950000, oldPrice: 5800000, rating: 4.8, reviews: 190, stock: true, added: 6, compatibility: ["پژو ۲۰۶", "رانا"], desc: "تسمه تایم کانتیننتال با الیاف شیشه مقاوم در برابر کشش، همگام‌سازی دقیق سوپاپ‌ها را در طولانی‌مدت تضمین می‌کند.", specs: [["تعداد دنده", "۱۲۹"], ["عرض", "۲۵٫۴ میلی‌متر"], ["الیاف", "شیشه تقویت‌شده"], ["طول عمر", "۹۰٬۰۰۰ کیلومتر"]] },
    { id: 10, name: "رادیاتور آب نیسنز", brand: "Nissens", sku: "NS-63042", category: "cooling", price: 9800000, oldPrice: 11200000, rating: 4.6, reviews: 64, stock: true, added: 4, compatibility: ["سمند", "دنا پلاس"], desc: "رادیاتور آب نیسنز با لوله‌های آلومینیومی پره‌دار، انتقال حرارت بهینه را حتی در ترافیک سنگین تابستان تضمین می‌کند.", specs: [["جنس", "آلومینیوم"], ["عرض لوله", "۲۶ میلی‌متر"], ["محل نصب", "جلو"], ["گارانتی", "۱۲ ماه"]] },
    { id: 11, name: "چراغ جلو هلا", brand: "Hella", sku: "HL-9102", category: "lighting", price: 18500000, oldPrice: 21900000, rating: 4.7, reviews: 58, stock: true, added: 7, compatibility: ["بی‌ام‌وو سری ۳"], desc: "چراغ جلو هلا با تکنولوژی LED و لنز پلی‌کربنات ضدخش، نوردهی دقیق و استاندارد را با مصرف پایین فراهم می‌کند.", specs: [["تکنولوژی", "LED"], ["لنز", "پلی‌کربنات ضدخش"], ["استاندارد", "ECE R112"], ["گارانتی", "۲۴ ماه"]] },
    { id: 12, name: "قرقره فرمان TRW", brand: "TRW", sku: "JTE-1140", category: "steering", price: 7200000, oldPrice: null, rating: 4.5, reviews: 41, stock: false, added: 3, compatibility: ["هیوندای النترا"], desc: "قرقره فرمان TRW با بوش‌های تقویت‌شده، لقی فرمان را حذف کرده و پاسخ‌دهی دقیق فرمان را بازیابی می‌کند.", specs: [["جنس", "فولاد فورج"], ["محل نصب", "چپ و راست"], ["گارانتی", "۱۲ ماه"]] },
    { id: 13, name: "منبع اگزوز واکر", brand: "Walker", sku: "WK-5502", category: "exhaust", price: 5300000, oldPrice: 6100000, rating: 4.4, reviews: 37, stock: true, added: 3, compatibility: ["پژو ۲۰۷"], desc: "منبع اگزوز واکر با ورق گالوانیزه دوجداره، صدای موتور را نرم کرده و در برابر خوردگی مقاوم است.", specs: [["جنس", "فولاد گالوانیزه"], ["ساختار", "دوجداره"], ["محل نصب", "عقب"], ["گارانتی", "۱۲ ماه"]] },
    { id: 14, name: "آینه بغل راست برقی", brand: "Valeo", sku: "YM-3301", category: "body", price: 8900000, oldPrice: null, rating: 4.3, reviews: 29, stock: false, added: 2, compatibility: ["کیا سراتو"], desc: "آینه بغل راست برقی با موتور تنظیم اصلی و راهنما، دقیقاً منطبق بر نقاط اتصال کارخانه نصب می‌شود.", specs: [["نوع", "برقی با راهنما"], ["تعداد سیم", "۶"], ["رنگ", "آماده رنگ"], ["گارانتی", "۶ ماه"]] },
    { id: 15, name: "لنت ترمز عقب برمبو", brand: "Brembo", sku: "P-06-073", category: "brakes", price: 9900000, oldPrice: 12400000, rating: 4.8, reviews: 102, stock: true, added: 8, compatibility: ["بی‌ام‌وو سری ۴"], desc: "لنت ترمز عقب برمبو با لایه زیرساز عایق صدا، ترمزی بی‌صدا و پایدار را برای محور عقب فراهم می‌کند.", specs: [["جنس", "سرامیکی"], ["عرض", "۱۲۳ میلی‌متر"], ["استاندارد", "ECE-R90"], ["گارانتی", "۱۸ ماه"]] },
    { id: 16, name: "باتری ۷۴ آمپر وارتا", brand: "Varta", sku: "D-59", category: "electrical", price: 12800000, oldPrice: 14200000, rating: 4.7, reviews: 233, stock: true, added: 9, compatibility: ["سمند", "پژو ۴۰۵", "دنا پلاس"], desc: "باتری وارتا با فناوری کلسیم-نقره، استارتی قدرتمند در سرما و عمر مفید بالا ارائه می‌دهد.", specs: [["ظرفیت", "۷۴ آمپرساعت"], ["ولتاژ", "۱۲ ولت"], ["آمپر استارت", "۶۸۰ آمپر"], ["گارانتی", "۱۸ ماه"]] }
];
const REVIEWS_POOL = [
    { name: "امیر رضایی", date: "۲ هفته پیش", text: "قطعه کاملاً اصلی بود و دقیقاً با خودروی من سازگار شد. بسته‌بندی هم خیلی حرفه‌ای بود." },
    { name: "سارا محمدی", date: "۱ ماه پیش", text: "قیمتش نسبت به بازار منصفانه‌تر بود. ارسال سریع انجام شد و پشتیبانی هم برای انتخاب قطعه راهنمایی‌ام کرد." },
    { name: "محمد کاظمی", date: "۲ ماه پیش", text: "بعد از نصب، عملکردش عالی بود. حتماً برای خریدهای بعدی دوباره از این فروشگاه خرید می‌کنم." }
];
const VEHICLES = {
    "ایران خودرو": { "پژو ۲۰۶": { years: ["۱۳۹۲", "۱۳۹۵", "۱۳۹۸", "۱۴۰۱"], engines: ["۱.۶ لیتری TU5", "۱.۴ لیتری TU3"] }, "پژو ۴۰۵": { years: ["۱۳۹۰", "۱۳۹۵", "۱۴۰۰"], engines: ["۱.۸ لیتری XU7"] }, "سمند": { years: ["۱۳۹۲", "۱۳۹۷", "۱۴۰۱"], engines: ["۱.۸ لیتری XU7", "۱.۶ لیتری EF7"] }, "دنا پلاس": { years: ["۱۳۹۸", "۱۴۰۰", "۱۴۰۲"], engines: ["۱.۷ لیتری EF7", "۱.۷ لیتری توربو"] } },
    "سایپا": { "پراید": { years: ["۱۳۹۰", "۱۳۹۵", "۱۴۰۰"], engines: ["۱.۳ لیتری M13"] }, "کوییک": { years: ["۱۳۹۷", "۱۴۰۰", "۱۴۰۳"], engines: ["۱.۵ لیتری M15"] }, "تیبا": { years: ["۱۳۹۲", "۱۳۹۶", "۱۴۰۰"], engines: ["۱.۵ لیتری SA35"] } },
    "بی‌ام‌وو": { "سری ۳": { years: ["۱۳۹۸", "۱۴۰۰", "۱۴۰۲"], engines: ["۲.۰ لیتری توربو", "۳.۰ لیتری توربو"] }, "سری ۵": { years: ["۱۳۹۷", "۱۴۰۰", "۱۴۰۳"], engines: ["۲.۰ لیتری توربو"] } },
    "مرسدس بنز": { "C200": { years: ["۱۳۹۶", "۱۳۹۹", "۱۴۰۲"], engines: ["۲.۰ لیتری توربو"] }, "E200": { years: ["۱۳۹۷", "۱۴۰۰"], engines: ["۲.۰ لیتری توربو"] } },
    "تویوتا": { "کمری": { years: ["۱۳۹۵", "۱۳۹۸", "۱۴۰۱"], engines: ["۲.۵ لیتری"] }, "کرولا": { years: ["۱۳۹۶", "۱۳۹۹", "۱۴۰۲"], engines: ["۱.۸ لیتری هیبرید"] } },
    "هیوندای": { "النترا": { years: ["۱۳۹۵", "۱۳۹۸", "۱۴۰۱"], engines: ["۲.۰ لیتری", "۱.۶ لیتری توربو"] }, "سوناتا": { years: ["۱۳۹۴", "۱۳۹۸"], engines: ["۲.۴ لیتری"] } },
    "کیا": { "سراتو": { years: ["۱۳۹۳", "۱۳۹۷", "۱۴۰۰"], engines: ["۲.۰ لیتری"] }, "اسپورتیج": { years: ["۱۳۹۶", "۱۳۹۹", "۱۴۰۲"], engines: ["۲.۰ لیتری", "۱.۶ لیتری توربو"] } }
};
const CAT_HUE = { engine: "#3d6bff", brakes: "#5c8dff", suspension: "#7a5cff", electrical: "#4d7dff", filters: "#6a5cff", cooling: "#3dd4ff", gearbox: "#8d6aff", lighting: "#ffb84d", steering: "#5c9dff", exhaust: "#7a8cff", body: "#4dc9ff", consumables: "#6dff9d" };
const CAT_ART = {
    engine: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9 19 19M19 5l-2.1 2.1M7.1 16.9 5 19"/>',
    brakes: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.6"/><circle cx="12" cy="6.5" r=".8" fill="HUE" stroke="none"/><circle cx="16.8" cy="9.3" r=".8" fill="HUE" stroke="none"/><circle cx="16.8" cy="14.7" r=".8" fill="HUE" stroke="none"/><circle cx="12" cy="17.5" r=".8" fill="HUE" stroke="none"/><circle cx="7.2" cy="14.7" r=".8" fill="HUE" stroke="none"/><circle cx="7.2" cy="9.3" r=".8" fill="HUE" stroke="none"/>',
    suspension: '<path d="M8 2.5h8M8 21.5h8M9 5l6 2-6 2 6 2-6 2 6 2-6 2"/>',
    electrical: '<path d="M13 2 5 13.2h5.4L9.5 22l8-11.2h-5.4z"/>',
    filters: '<path d="M3 4.5h18l-7 8v5.8l-4 2.2v-8z"/>',
    cooling: '<circle cx="12" cy="12" r="2.1"/><path d="M12 9.9c0-3 1-5.9 3-5.9 2.5 0 2.1 4.1-3 5.9M14.1 12c3 0 5.9 1 5.9 3 0 2.5-4.1 2.1-5.9-3M12 14.1c0 3-1 5.9-3 5.9-2.5 0-2.1-4.1 3-5.9M9.9 12c-3 0-5.9-1-5.9-3 0-2.5 4.1-2.1 5.9 3"/>',
    gearbox: '<circle cx="9" cy="9" r="3"/><path d="M9 3.5V5M9 13v1.5M3.5 9H5M13 9h1.5M5.1 5.1l1.1 1.1M11.8 11.8l1.1 1.1M12.9 5.1l-1.1 1.1M6.2 11.8l-1.1 1.1"/><circle cx="16.5" cy="16.5" r="2.4"/><path d="M16.5 12v1.2M16.5 19.8V21M12 16.5h1.2M19.8 16.5H21"/>',
    lighting: '<path d="M9.5 18h5M10.5 21h3M12 3a6 6 0 0 0-3.8 10.6c.8.7 1.3 1.4 1.3 2.4h5c0-1 .5-1.7 1.3-2.4A6 6 0 0 0 12 3z"/>',
    steering: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.6"/><path d="M3.4 10h6M14.6 10h6M12 14.6V21"/>',
    exhaust: '<path d="M2 8h9a5 5 0 0 1 5 5v.5A3.5 3.5 0 0 0 19.5 17H22M2 12h7M2 16h5"/>',
    body: '<path d="M3 13l1.6-4.6A2 2 0 0 1 6.5 7h11a2 2 0 0 1 1.9 1.4L21 13M3 13h18M3 13v5h2.3M21 13v5h-2.3M7 18h10"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
    consumables: '<path d="M15.5 7.5a4.2 4.2 0 0 1 5.6-5L18 5.6l.4 2 2 .4 3.1-3.1a4.2 4.2 0 0 1-5.7 5.4L8.4 19.7a2.1 2.1 0 0 1-3-3z"/>'
};
function productImage(p, variant = 0) {
    const hue = CAT_HUE[p.category] || "#3d6bff";
    const art = (CAT_ART[p.category] || CAT_ART.engine).replaceAll("HUE", hue);
    const rot = variant * 40, op = .16 + variant * .05;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0e1730"/><stop offset="1" stop-color="#141f42"/></linearGradient>
        <radialGradient id="r" cx="${.3 + variant * .2}" cy=".35" r=".8"><stop offset="0" stop-color="${hue}" stop-opacity="${op}"/><stop offset="1" stop-color="${hue}" stop-opacity="0"/></radialGradient></defs>
        <rect width="600" height="450" fill="url(#g)"/><rect width="600" height="450" fill="url(#r)"/>
        <g stroke="rgba(148,163,255,.07)" stroke-width="1">${Array.from({ length: 11 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="450"/>`).join("")}${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="600" y2="${i * 60}"/>`).join("")}</g>
        <circle cx="${120 + rot}" cy="${360 - rot / 2}" r="90" stroke="${hue}" stroke-opacity=".25" stroke-width="1.5" fill="none" stroke-dasharray="4 8"/>
        <g transform="translate(300 215) scale(${7 + variant * .4}) translate(-12 -12)" fill="none" stroke="${hue}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${art}</g>
        <text x="300" y="400" text-anchor="middle" font-family="monospace" font-size="15" fill="rgba(234,240,251,.45)" letter-spacing="3">${p.brand.toUpperCase()} · ${p.sku}</text></svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}


const store = {
    get: (k, d) => {
        try {
            const v = localStorage.getItem(k);
            return v ? JSON.parse(v) : d;
        }
        catch (e) {
            return d;
        }
    },
    set: (k, v) => {
        try {
            localStorage.setItem(k, JSON.stringify(v));
        }
        catch (e) { }
    }
};
let cart = store.get("fave_cart", []);
let wishlist = store.get("fave_wishlist", []);
const filters = { cats: new Set(), brands: new Set(), min: null, max: null, rating: 0, stockOnly: false, query: "", sort: "featured" };
const prod = id => PRODUCTS.find(p => p.id === id);
function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    $("#theme-icon use").setAttribute("href", t === "dark" ? "#i-sun" : "#i-moon");
    $("#theme-btn").setAttribute("aria-label", t === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک");
}


function initTheme() {
    const saved = store.get("fave_theme", null);
    const sys = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    applyTheme(saved || sys || "dark");
    $("#theme-btn").addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(next); store.set("fave_theme", next);
        showToast(next === "dark" ? "حالت تاریک فعال شد." : "حالت روشن فعال شد.");
    });
}


function showToast(msg, type = "ok") {
    const t = document.createElement("div");
    t.className = "toast" + (type === "err" ? " err" : "");
    t.setAttribute("role", "status");
    t.innerHTML = `<svg width="19" height="19"><use href="#${type === "err" ? "i-x" : "i-check"}"/></svg><span>${msg}</span>`;
    $("#toasts").appendChild(t);
    setTimeout(() => { t.classList.add("hide"); setTimeout(() => t.remove(), 320) }, 2800);
}


function openDrawer(id) { $(id).classList.add("open"); $("#overlay").classList.add("open"); document.body.style.overflow = "hidden"; $(id).querySelector("[data-close]")?.focus(); }
function closeAll() {
    $$(".drawer").forEach(d => d.classList.remove("open"));
    $("#product-modal").classList.remove("open");
    $("#overlay").classList.remove("open");
    document.body.style.overflow = "";
}


function initNavigation() {
    $("#menu-btn").addEventListener("click", () => openDrawer("#menu-drawer"));
    $("#cart-btn").addEventListener("click", () => { renderCart(); openDrawer("#cart-drawer") });
    $("#wishlist-btn").addEventListener("click", () => { renderWishlist(); openDrawer("#wish-drawer") });
    $("#filter-toggle").addEventListener("click", () => openDrawer("#filter-drawer"));
    $("#account-btn").addEventListener("click", () => showToast("ورود به حساب کاربری پس از اتصال بک‌اند فعال می‌شود."));
    $("#overlay").addEventListener("click", closeAll);
    $$("[data-close]").forEach(b => b.addEventListener("click", closeAll));
    $$("#menu-drawer .mnav-links a").forEach(a => a.addEventListener("click", closeAll));
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") { closeAll(); $$(".ac-panel").forEach(p => p.classList.remove("open")); }
    });
}


function renderCategories() {
    $("#cats-grid").innerHTML = CATEGORIES.map(c => {
        const n = PRODUCTS.filter(p => p.category === c.id).length;
        return `<div class="cat-card" role="button" tabindex="0" data-cat="${c.id}" aria-label="${c.name}">
            <span class="ic"><svg width="26" height="26"><use href="#${c.icon}"/></svg></span>
            <h3>${c.name}</h3><span>${faNum(n)} محصول</span></div>`;
    }).join("");
    $$("#cats-grid .cat-card").forEach(el => {
        const go = () => { clearFilters(false); filters.cats.add(el.dataset.cat); syncFilterUI(); renderProducts(); closeAll(); document.getElementById("shop").scrollIntoView({ behavior: "smooth" }); };
        el.addEventListener("click", go);
        el.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
        });
    });
}


function renderBrands() {
    const main = BRANDS.slice(0, 8);
    $("#brands-grid").innerHTML = main.map(b => `<div class="brand-cell" role="button" tabindex="0" data-brand="${b.en}" aria-label="برند ${b.fa}"><span class="bn">${b.en}</span><span class="bf">${b.fa}</span></div>`).join("");
    $$("#brands-grid .brand-cell").forEach(el => {
        const go = () => { clearFilters(false); filters.brands.add(el.dataset.brand); syncFilterUI(); renderProducts(); document.getElementById("shop").scrollIntoView({ behavior: "smooth" }); };
        el.addEventListener("click", go);
        el.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
        });
    });
}


function filtersHTML(suffix) {
    const cats = CATEGORIES.map(c => `<label class="f-check"><input type="checkbox" data-f="cat" value="${c.id}"><span class="box"><svg width="12" height="12"><use href="#i-check"/></svg></span>${c.name}<span class="cnt">${faNum(PRODUCTS.filter(p => p.category === c.id).length)}</span></label>`).join("");
    const brands = [...new Set(PRODUCTS.map(p => p.brand))].map(b => {
        const fa = (BRANDS.find(x => x.en === b) || {}).fa || b;
        return `<label class="f-check"><input type="checkbox" data-f="brand" value="${b}"><span class="box"><svg width="12" height="12"><use href="#i-check"/></svg></span>${fa} <span style="color:var(--muted-2);font-size:.72rem">(${b})</span></label>`;
    }).join("");
    return `
    <div class="f-group"><div class="f-title">دسته‌بندی</div>${cats}</div>
    <div class="f-group"><div class="f-title">برند</div>${brands}</div>
    <div class="f-group"><div class="f-title">محدوده قیمت (تومان)</div>
    <div class="price-row">
    <input type="number" inputmode="numeric" placeholder="از" data-f="min" aria-label="حداقل قیمت" min="0">
    <span>تا</span>
    <input type="number" inputmode="numeric" placeholder="تا" data-f="max" aria-label="حداکثر قیمت" min="0">
    </div>
    <button class="f-apply" data-f="apply-price">اعمال قیمت</button>
    </div>
    <div class="f-group"><div class="f-title">امتیاز</div>
    <label class="f-radio"><input type="radio" name="rating${suffix}" data-f="rating" value="0" checked><span class="rd"></span>همه</label>
    <label class="f-radio"><input type="radio" name="rating${suffix}" data-f="rating" value="4.5"><span class="rd"></span>۴٫۵ و بالاتر</label>
    <label class="f-radio"><input type="radio" name="rating${suffix}" data-f="rating" value="4"><span class="rd"></span>۴ و بالاتر</label>
    </div>
    <div class="f-group"><label class="f-check"><input type="checkbox" data-f="stock"><span class="box"><svg width="12" height="12"><use href="#i-check"/></svg></span>فقط کالاهای موجود</label></div>`;
}


function bindFilters(container) {
    container.addEventListener("change", e => {
        const f = e.target.dataset.f; if (!f) return;
        if (f === "cat") { e.target.checked ? filters.cats.add(e.target.value) : filters.cats.delete(e.target.value); }
        if (f === "brand") { e.target.checked ? filters.brands.add(e.target.value) : filters.brands.delete(e.target.value); }
        if (f === "rating") { filters.rating = +e.target.value; }
        if (f === "stock") { filters.stockOnly = e.target.checked; }
        syncFilterUI(container); renderProducts();
    });
    container.addEventListener("click", e => {
        if (e.target.dataset.f === "apply-price") {
            const min = +container.querySelector('[data-f="min"]').value || null;
            const max = +container.querySelector('[data-f="max"]').value || null;
            filters.min = min; filters.max = max; syncFilterUI(); renderProducts();
        }
    });
}


function syncFilterUI(changedFrom) {
    ["#filters-body", "#filters-body-mobile"].forEach(sel => {
        if (changedFrom && changedFrom === $(sel)) return;
        const c = $(sel); if (!c) return;
        c.querySelectorAll('[data-f="cat"]').forEach(i => i.checked = filters.cats.has(i.value));
        c.querySelectorAll('[data-f="brand"]').forEach(i => i.checked = filters.brands.has(i.value));
        c.querySelectorAll('[data-f="rating"]').forEach(i => i.checked = +i.value === filters.rating);
        const st = c.querySelector('[data-f="stock"]'); if (st) st.checked = filters.stockOnly;
        const mn = c.querySelector('[data-f="min"]'); if (mn) mn.value = filters.min ?? "";
        const mx = c.querySelector('[data-f="max"]'); if (mx) mx.value = filters.max ?? "";
    });
}


function clearFilters(toast = true) {
    filters.cats.clear(); filters.brands.clear(); filters.min = null; filters.max = null; filters.rating = 0; filters.stockOnly = false; filters.query = "";
    $$(".search-input, #header-search-input, #hero-search-input, #mnav-search-input").forEach(i => i.value = "");
    syncFilterUI(); renderProducts();
    if (toast) showToast("فیلترها پاک شد.");
}


function renderChips() {
    const chips = [];
    filters.cats.forEach(c => chips.push({ l: catName(c), t: "cat", v: c }));
    filters.brands.forEach(b => chips.push({ l: "برند: " + ((BRANDS.find(x => x.en === b) || {}).fa || b), t: "brand", v: b }));
    if (filters.min != null || filters.max != null) chips.push({ l: `قیمت: ${filters.min ? faNum(filters.min) : "۰"} تا ${filters.max ? faNum(filters.max) : "..."} تومان`, t: "price" });
    if (filters.rating) chips.push({ l: `امتیاز ${faNum(filters.rating)}+`, t: "rating" });
    if (filters.stockOnly) chips.push({ l: "فقط موجود", t: "stock" });
    if (filters.query) chips.push({ l: `جستجو: «${filters.query}»`, t: "query" });
    $("#chips").innerHTML = chips.map((c, i) => `<span class="chip">${c.l}<button data-chip="${i}" aria-label="حذف فیلتر ${c.l}"><svg width="13" height="13"><use href="#i-x"/></svg></button></span>`).join("");
    $$("#chips [data-chip]").forEach(b => b.addEventListener("click", () => {
        const c = chips[+b.dataset.chip];
        if (c.t === "cat") filters.cats.delete(c.v);
        if (c.t === "brand") filters.brands.delete(c.v);
        if (c.t === "price") { filters.min = null; filters.max = null; }
        if (c.t === "rating") filters.rating = 0;
        if (c.t === "stock") filters.stockOnly = false;
        if (c.t === "query") { filters.query = ""; $$("input[type=search]").forEach(i => i.value = ""); }
        syncFilterUI(); renderProducts();
    }));
}


function getFiltered() {
    let list = PRODUCTS.filter(p => {
        if (filters.cats.size && !filters.cats.has(p.category)) return false;
        if (filters.brands.size && !filters.brands.has(p.brand)) return false;
        if (filters.min != null && p.price < filters.min) return false;
        if (filters.max != null && p.price > filters.max) return false;
        if (filters.rating && p.rating < filters.rating) return false;
        if (filters.stockOnly && !p.stock) return false;
        if (filters.query) {
            const q = filters.query.toLowerCase();
            const hay = (p.name + " " + p.brand + " " + p.sku + " " + catName(p.category) + " " + ((BRANDS.find(x => x.en === p.brand) || {}).fa || "")).toLowerCase();
            if (!hay.includes(q)) return false;
        }
        return true;
    });
    const s = filters.sort;
    if (s === "cheap") list.sort((a, b) => a.price - b.price);
    else if (s === "expensive") list.sort((a, b) => b.price - a.price);
    else if (s === "popular") list.sort((a, b) => b.reviews - a.reviews);
    else if (s === "newest") list.sort((a, b) => b.added - a.added);
    else if (s === "discount") list.sort((a, b) => offPct(b) - offPct(a));
    else list.sort((a, b) => b.rating - a.rating);
    return list;
}


function renderProductCard(p) {
    const off = offPct(p);
    const inWish = wishlist.includes(p.id);
    const brandFa = (BRANDS.find(x => x.en === p.brand) || {}).fa || p.brand;
    return `<article class="p-card" data-id="${p.id}">
        <div class="p-media" data-open="${p.id}" role="button" tabindex="0" aria-label="مشاهده جزئیات ${p.name}">
        ${off ? `<span class="p-off">${faNum(off)}٪ تخفیف</span>` : ""}
        <img src="${productImage(p)}" alt="${p.name} — ${brandFa}" loading="lazy">
        <button class="p-wish ${inWish ? "active" : ""}" data-wish="${p.id}" aria-label="${inWish ? "حذف از" : "افزودن به"} علاقه‌مندی‌ها" aria-pressed="${inWish}"><svg width="17" height="17"><use href="#i-heart"/></svg></button>
        </div>
        <div class="p-body">
        <span class="p-brand">${brandFa} · ${p.brand}</span>
        <h3 class="p-name" data-open="${p.id}">${p.name}</h3>
        <span class="p-sku">شماره فنی: ${p.sku}</span>
        <div class="p-rate"><svg width="14" height="14"><use href="#i-star"/></svg><b>${faNum(p.rating)}</b> <span>(${faNum(p.reviews)} نظر)</span></div>
        <span class="p-stock ${p.stock ? "in" : "out"}"><i></i>${p.stock ? "موجود در انبار" : "ناموجود"}</span>
        <div class="p-price"><span class="now">${faPrice(p.price)}</span>${p.oldPrice ? `<span class="old">${faNum(p.oldPrice)}</span>` : ""}</div>
        <button class="p-add" data-add="${p.id}" ${p.stock ? "" : "disabled"} data-testid="add-to-cart-${p.id}">
        <svg width="16" height="16"><use href="#i-cart"/></svg>${p.stock ? "افزودن به سبد خرید" : "ناموجود"}
        </button>
        </div>
        </article>`;
}


function renderProducts() {
    const list = getFiltered();
    renderChips();
    $("#results-info").innerHTML = `نمایش <b>${faNum(list.length)}</b> از <b>${faNum(PRODUCTS.length)}</b> محصول`;
    $("#products-grid").innerHTML = list.length ? list.map(renderProductCard).join("") :
        `<div class="empty-state"><svg width="52" height="52"><use href="#i-box"/></svg><h3>محصولی پیدا نشد</h3><p>فیلترها یا عبارت جستجو را تغییر دهید.</p><button class="btn btn-ghost" onclick="clearFilters()">پاک کردن فیلترها</button></div>`;
    bindProductCards();
}


function bindProductCards() {
    $$("#products-grid [data-open]").forEach(el => {
        const open = () => openProductModal(+el.dataset.open);
        el.addEventListener("click", open);
        if (el.getAttribute("role") === "button") el.addEventListener("keydown", e => {
            if (e.key === "Enter") { e.preventDefault(); open(); }
        });
    });
    $$("#products-grid [data-wish]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); toggleWishlist(+b.dataset.wish); }));
    $$("#products-grid [data-add]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); addToCart(+b.dataset.add, 1); }));
}


function initFilters() {
    $("#filters-body").innerHTML = filtersHTML("d");
    $("#filters-body-mobile").innerHTML = filtersHTML("m");
    bindFilters($("#filters-body"));
    bindFilters($("#filters-body-mobile"));
    $("#clear-filters").addEventListener("click", () => clearFilters());
    $("#clear-filters-m").addEventListener("click", () => clearFilters());
    $("#sort-select").addEventListener("change", e => { filters.sort = e.target.value; renderProducts(); });
}


function searchProducts(q) {
    q = q.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(p => {
        const hay = (p.name + " " + p.brand + " " + p.sku + " " + catName(p.category) + " " + ((BRANDS.find(x => x.en === p.brand) || {}).fa || "")).toLowerCase();
        return hay.includes(q);
    }).slice(0, 6);
}


function makeSearch(inputSel, panelSel) {
    const input = $(inputSel), panel = $(panelSel);
    const run = () => {
        filters.query = input.value.trim(); renderProducts();
    };
    input.addEventListener("input", () => {
        const res = searchProducts(input.value);
        if (!input.value.trim()) { panel.classList.remove("open"); filters.query = ""; renderProducts(); return; }
        panel.innerHTML = res.length ? res.map(p => `<button class="ac-item" data-open="${p.id}" role="option">
        <img src="${productImage(p)}" alt="" loading="lazy">
        <span><span class="t">${p.name}</span><br><span class="m">${(BRANDS.find(x => x.en === p.brand) || {}).fa || p.brand} · ${p.sku}</span></span>
        <span class="p">${faPriceText(p.price)}</span></button>`).join("")
            : `<div class="ac-empty">نتیجه‌ای برای «${input.value}» پیدا نشد.</div>`;
        panel.classList.add("open");
        panel.querySelectorAll(".ac-item").forEach(it => it.addEventListener("click", () => { panel.classList.remove("open"); openProductModal(+it.dataset.open); }));
        run();
    });
    input.addEventListener("keydown", e => {
        if (e.key === "Enter") { e.preventDefault(); panel.classList.remove("open"); run(); document.getElementById("shop").scrollIntoView({ behavior: "smooth" }); }
    });
    document.addEventListener("click", e => { if (!panel.contains(e.target) && e.target !== input) panel.classList.remove("open"); });
}


function initSearch() {
    makeSearch("#header-search-input", "#header-ac");
    makeSearch("#hero-search-input", "#hero-ac");
    $("#hero-search-btn").addEventListener("click", () => { filters.query = $("#hero-search-input").value.trim(); renderProducts(); document.getElementById("shop").scrollIntoView({ behavior: "smooth" }); });
    $$(".hero-hints button").forEach(b => b.addEventListener("click", () => {
        $("#hero-search-input").value = b.dataset.q; $("#hero-search-input").dispatchEvent(new Event("input"));
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    }));
    const mi = $("#mnav-search-input");
    mi.addEventListener("keydown", e => {
        if (e.key === "Enter") { filters.query = mi.value.trim(); renderProducts(); closeAll(); document.getElementById("shop").scrollIntoView({ behavior: "smooth" }); }
    });
}


let vehicleResultCount = 0, vehicleResultCat = "";
function fillSelect(sel, items, ph) { sel.innerHTML = `<option value="">${ph}</option>` + items.map(i => `<option value="${i}">${i}</option>`).join(""); }
function initVehicleFinder() {
    const b = $("#v-brand"), m = $("#v-model"), y = $("#v-year"), e = $("#v-engine"), c = $("#v-cat");
    fillSelect(b, Object.keys(VEHICLES), "انتخاب کنید");
    fillSelect(c, CATEGORIES.map(x => x.name), "همه دسته‌ها");
    b.addEventListener("change", () => {
        m.disabled = !b.value; y.disabled = true; e.disabled = true;
        y.innerHTML = `<option value="">ابتدا مدل را انتخاب کنید</option>`; e.innerHTML = `<option value="">ابتدا سال را انتخاب کنید</option>`;
        if (b.value) { fillSelect(m, Object.keys(VEHICLES[b.value]), "انتخاب کنید"); m.disabled = false; }
    });
    m.addEventListener("change", () => {
        y.disabled = true; e.disabled = true; e.innerHTML = `<option value="">ابتدا سال را انتخاب کنید</option>`;
        if (m.value) { fillSelect(y, VEHICLES[b.value][m.value].years, "انتخاب کنید"); y.disabled = false; }
    });
    y.addEventListener("change", () => {
        e.disabled = true;
        if (y.value) { fillSelect(e, VEHICLES[b.value][m.value].engines, "انتخاب کنید"); e.disabled = false; }
    });
    $("#v-find").addEventListener("click", () => {
        if (!b.value || !m.value) { showToast("لطفاً ابتدا برند و مدل خودرو را انتخاب کنید.", "err"); return; }
        const catId = c.value ? (CATEGORIES.find(x => x.name === c.value) || {}).id : "";
        const matches = PRODUCTS.filter(p => {
            const catOk = !catId || p.category === catId;
            const vehOk = p.compatibility.some(v => v.includes(m.value) || m.value.includes(v)) || p.compatibility.some(v => v.includes(b.value));
            return catOk && vehOk;
        });
        const n = Math.max(matches.length, PRODUCTS.filter(p => !catId || p.category === catId).length % 7);
        vehicleResultCount = matches.length ? matches.length : n;
        vehicleResultCat = catId;
        $("#v-result-text").innerHTML = `خودروی شما: <b>${b.value} ${m.value}</b>${y.value ? ` ${y.value}` : ""} — <b>${faNum(vehicleResultCount)}</b> قطعه سازگار پیدا شد`;
        $("#v-result").classList.add("show");
    });
    $("#v-show").addEventListener("click", () => {
        clearFilters(false);
        if (vehicleResultCat) filters.cats.add(vehicleResultCat);
        syncFilterUI(); renderProducts();
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });
}


function saveCart() { store.set("fave_cart", cart); updateBadges(); }
function addToCart(id, qty = 1, silent = false) {
    const p = prod(id); if (!p || !p.stock) return;
    const it = cart.find(i => i.id === id);
    if (it) it.qty = Math.min(it.qty + qty, 9); else cart.push({ id, qty });
    saveCart(); renderCart();
    if (!silent) showToast("محصول با موفقیت به سبد خرید اضافه شد.");
}


function removeFromCart(id) { cart = cart.filter(i => i.id !== id); saveCart(); renderCart(); showToast("محصول از سبد خرید حذف شد."); }
function changeQty(id, d) {
    const it = cart.find(i => i.id === id); if (!it) return;
    it.qty += d;
    if (it.qty < 1) return removeFromCart(id);
    if (it.qty > 9) it.qty = 9;
    saveCart(); renderCart();
}


function updateCart() { renderCart(); updateBadges(); }
function cartTotals() {
    const items = cart.map(i => ({ ...i, p: prod(i.id) })).filter(i => i.p);
    const sum = items.reduce((a, i) => a + i.p.price * i.qty, 0);
    const disc = items.reduce((a, i) => a + (i.p.oldPrice ? (i.p.oldPrice - i.p.price) * i.qty : 0), 0);
    const ship = sum === 0 ? 0 : (sum >= 5000000 ? 0 : 150000);
    return { items, sum, disc, ship, total: sum + ship };
}


function renderCart() {
    const { items, sum, disc, ship, total } = cartTotals();
    const body = $("#cart-body");
    if (!items.length) {
        body.innerHTML = `<div class="drawer-empty"><svg width="52" height="52"><use href="#i-cart"/></svg><p>سبد خرید شما خالی است.</p><button class="btn btn-primary" onclick="closeAll();document.getElementById('shop').scrollIntoView({behavior:'smooth'})">مشاهده قطعات</button></div>`;
        $("#cart-foot").innerHTML = "";
    } else {
        body.innerHTML = items.map(i => `<div class="cart-item">
        <img src="${productImage(i.p)}" alt="${i.p.name}">
        <div class="ci-body">
        <div class="ci-name">${i.p.name}</div>
        <div class="ci-price">${faPriceText(i.p.price)}</div>
        <div class="ci-row">
        <span class="qty">
        <button data-qty="${i.id}:1" aria-label="افزایش تعداد"><svg width="14" height="14"><use href="#i-plus"/></svg></button>
        <span class="qv">${faNum(i.qty)}</span>
        <button data-qty="${i.id}:-1" aria-label="کاهش تعداد"><svg width="14" height="14"><use href="#i-minus"/></svg></button>
        </span>
        <button class="ci-remove" data-remove="${i.id}"><svg width="14" height="14"><use href="#i-trash"/></svg> حذف</button>
        </div>
        </div>
        </div>`).join("");
        $("#cart-foot").innerHTML = `
        <div class="sum-row"><span>جمع اقلام</span><span>${faPriceText(sum + disc)}</span></div>
        ${disc ? `<div class="sum-row disc"><span>سود شما از خرید</span><span>${faPriceText(disc)}-</span></div>` : ""}
        <div class="sum-row"><span>هزینه ارسال</span><span>${ship === 0 ? '<span class="free">رایگان</span>' : faPriceText(ship)}</span></div>
        <div class="sum-row total"><span>مبلغ نهایی</span><span>${faPriceText(total)}</span></div>
        <button class="btn btn-primary btn-block" style="margin-top:12px" data-testid="checkout-btn" onclick="showToast('درگاه پرداخت پس از اتصال بک‌اند فعال می‌شود.')">ادامه فرآیند خرید</button>`;
        $$("#cart-body [data-qty]").forEach(b => b.addEventListener("click", () => { const [id, d] = b.dataset.qty.split(":"); changeQty(+id, +d); }));
        $$("#cart-body [data-remove]").forEach(b => b.addEventListener("click", () => removeFromCart(+b.dataset.remove)));
    }
    updateBadges();
}


function toggleWishlist(id) {
    const on = wishlist.includes(id);
    wishlist = on ? wishlist.filter(x => x !== id) : [...wishlist, id];
    store.set("fave_wishlist", wishlist);
    showToast(on ? "از علاقه‌مندی‌ها حذف شد." : "به علاقه‌مندی‌ها اضافه شد.");
    updateBadges(); renderProducts(); renderWishlist();
}


function renderWishlist() {
    const body = $("#wish-body");
    if (!wishlist.length) {
        body.innerHTML = `<div class="drawer-empty"><svg width="52" height="52"><use href="#i-heart"/></svg><p>هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.</p><button class="btn btn-primary" onclick="closeAll();document.getElementById('shop').scrollIntoView({behavior:'smooth'})">مشاهده قطعات</button></div>`;
    } else {
        body.innerHTML = wishlist.map(id => {
            const p = prod(id); if (!p) return ""; return `<div class="cart-item">
            <img src="${productImage(p)}" alt="${p.name}">
            <div class="ci-body">
            <div class="ci-name">${p.name}</div>
            <div class="ci-price">${faPriceText(p.price)}</div>
            <div class="ci-row">
            <button class="ci-remove" style="color:var(--primary)" data-move="${p.id}" ${p.stock ? "" : "disabled"}><svg width="14" height="14"><use href="#i-cart"/></svg> انتقال به سبد</button>
            <button class="ci-remove" data-unwish="${p.id}"><svg width="14" height="14"><use href="#i-trash"/></svg> حذف</button>
            </div>
            </div>
            </div>`;
        }).join("");
        $$("#wish-body [data-move]").forEach(b => b.addEventListener("click", () => { addToCart(+b.dataset.move, 1, true); toggleWishlist(+b.dataset.move); showToast("محصول به سبد خرید منتقل شد."); }));
        $$("#wish-body [data-unwish]").forEach(b => b.addEventListener("click", () => toggleWishlist(+b.dataset.unwish)));
    }
    updateBadges();
}


function updateBadges() {
    const cq = cart.reduce((a, i) => a + i.qty, 0);
    [["#cart-count", cq], ["#cart-drawer-count", cq], ["#wishlist-count", wishlist.length], ["#wish-drawer-count", wishlist.length]].forEach(([sel, n]) => {
        const el = $(sel); el.textContent = faNum(n); el.hidden = !n;
    });
}


let modalTabBound = false;
function openProductModal(id) {
    const p = prod(id); if (!p) return;
    const off = offPct(p), inWish = wishlist.includes(id);
    const brandFa = (BRANDS.find(x => x.en === p.brand) || {}).fa || p.brand;
    const thumbs = [0, 1, 2, 3].map(v => `<button class="${v === 0 ? "active" : ""}" data-thumb="${v}" aria-label="تصویر ${faNum(v + 1)}"><img src="${productImage(p, v)}" alt=""></button>`).join("");
    $("#modal-content").innerHTML = `
        <button class="icon-btn modal-close" data-close-modal aria-label="بستن جزئیات محصول" data-testid="modal-close-btn"><svg width="18" height="18"><use href="#i-x"/></svg></button>
        <div class="modal-grid">
        <div class="gallery">
        <div class="main"><img id="md-img" src="${productImage(p, 0)}" alt="${p.name} — ${brandFa}"></div>
        <div class="thumbs">${thumbs}</div>
        </div>
        <div>
        <span class="md-brand">${brandFa} · ${p.brand}</span>
        <h2 class="md-title">${p.name}</h2>
        <div class="md-sku">شماره فنی: ${p.sku} · دسته: ${catName(p.category)}</div>
        <div class="md-meta">
        <span class="p-rate"><svg width="15" height="15"><use href="#i-star"/></svg><b>${faNum(p.rating)}</b> (${faNum(p.reviews)} نظر)</span>
        <span class="p-stock ${p.stock ? "in" : "out"}"><i></i>${p.stock ? "موجود در انبار" : "ناموجود"}</span>
        </div>
        <div class="md-price-box">
        <span class="now">${faPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="old">${faNum(p.oldPrice)}</span><span class="off-tag">${faNum(off)}٪ تخفیف</span>` : ""}
        </div>
        <p class="md-compat"><b>سازگار با:</b> ${p.compatibility.join("، ")}</p>
        <div class="md-actions">
        <span class="qty">
        <button id="md-plus" aria-label="افزایش تعداد"><svg width="15" height="15"><use href="#i-plus"/></svg></button>
        <span class="qv" id="md-qty">۱</span>
        <button id="md-minus" aria-label="کاهش تعداد"><svg width="15" height="15"><use href="#i-minus"/></svg></button>
        </span>
        <button class="btn btn-primary" id="md-add" ${p.stock ? "" : "disabled"} data-testid="modal-add-cart-btn"><svg width="17" height="17"><use href="#i-cart"/></svg> افزودن به سبد</button>
        <button class="btn btn-ghost" id="md-buy" ${p.stock ? "" : "disabled"} data-testid="modal-buy-btn">خرید فوری</button>
        <button class="p-wish ${inWish ? "active" : ""}" style="position:static;width:46px;height:46px" id="md-wish" aria-label="علاقه‌مندی" aria-pressed="${inWish}"><svg width="19" height="19"><use href="#i-heart"/></svg></button>
        </div>
        </div>
        </div>
        <div class="tabs">
        <div class="tab-btns" role="tablist">
        <button class="active" data-tab="desc" role="tab" aria-selected="true">توضیحات</button>
        <button data-tab="specs" role="tab" aria-selected="false">مشخصات فنی</button>
        <button data-tab="compat" role="tab" aria-selected="false">خودروهای سازگار</button>
        <button data-tab="reviews" role="tab" aria-selected="false">نظرات کاربران (${faNum(p.reviews)})</button>
        </div>
        <div class="tab-pane active" data-pane="desc"><p>${p.desc}</p><p style="margin-top:10px">این قطعه با ضمانت اصالت و سلامت فیزیکی عرضه می‌شود و در صورت عدم سازگاری با خودروی اعلام‌شده، تا ۷ روز قابل مرجوع است.</p></div>
        <div class="tab-pane" data-pane="specs"><table class="spec-tbl"><tbody>${p.specs.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join("")}<tr><td>شماره فنی</td><td dir="ltr" style="text-align:right">${p.sku}</td></tr><tr><td>برند</td><td>${brandFa} (${p.brand})</td></tr></tbody></table></div>
        <div class="tab-pane" data-pane="compat"><div class="compat-list">${p.compatibility.map(c => `<span>${c}</span>`).join("")}</div><p style="margin-top:14px">برای اطمینان از سازگاری دقیق، از بخش «انتخاب خودرو» استفاده کنید یا با پشتیبانی در تماس باشید.</p></div>
        <div class="tab-pane" data-pane="reviews">${REVIEWS_POOL.map(r => `<div class="review"><div class="rv-head"><span class="avatar">${r.name[0]}</span><div><div class="rv-name">${r.name}</div><div class="rv-date">${r.date}</div></div><span class="p-rate" style="margin-inline-start:auto"><svg width="13" height="13"><use href="#i-star"/></svg><b>${faNum(5)}</b></span></div><p>${r.text}</p></div>`).join("")}</div>
        </div>`;
    let qty = 1;
    const setQ = v => { qty = Math.max(1, Math.min(9, v)); $("#md-qty").textContent = faNum(qty); };
    $("#md-plus").addEventListener("click", () => setQ(qty + 1));
    $("#md-minus").addEventListener("click", () => setQ(qty - 1));
    $("#md-add").addEventListener("click", () => addToCart(id, qty));
    $("#md-buy").addEventListener("click", () => { addToCart(id, qty, true); closeAll(); renderCart(); openDrawer("#cart-drawer"); });
    $("#md-wish").addEventListener("click", () => { toggleWishlist(id); $("#md-wish").classList.toggle("active", wishlist.includes(id)); });
    $$("#modal-content [data-thumb]").forEach(b => b.addEventListener("click", () => {
        $$("#modal-content [data-thumb]").forEach(x => x.classList.remove("active")); b.classList.add("active");
        $("#md-img").src = productImage(p, +b.dataset.thumb);
    }));
    $$("#modal-content [data-tab]").forEach(b => b.addEventListener("click", () => {
        $$("#modal-content [data-tab]").forEach(x => { x.classList.remove("active"); x.setAttribute("aria-selected", "false"); });
        b.classList.add("active"); b.setAttribute("aria-selected", "true");
        $$("#modal-content [data-pane]").forEach(pn => pn.classList.toggle("active", pn.dataset.pane === b.dataset.tab));
    }));
    $$("#modal-content [data-close-modal]").forEach(b => b.addEventListener("click", closeProductModal));
    $$(".modal-bg").forEach(b => b.onclick = closeProductModal);
    $("#product-modal").classList.add("open");
    document.body.style.overflow = "hidden";
    $("#modal-content .modal-close").focus();
}


function closeProductModal() { $("#product-modal").classList.remove("open"); if (!$$(".drawer.open").length) document.body.style.overflow = ""; }
function initCountdown() {
    let end = store.get("fave_offer_end", 0);
    if (!end || end < Date.now()) { end = Date.now() + (3 * 24 * 3600 + 7 * 3600 + 42 * 60) * 1000; store.set("fave_offer_end", end); }
    const pad = n => faNum(String(n).padStart(2, "0"));
    const tick = () => {
        let d = Math.max(0, end - Date.now());
        const days = Math.floor(d / 86400000); d %= 86400000;
        const h = Math.floor(d / 3600000); d %= 3600000;
        const m = Math.floor(d / 60000); const s = Math.floor(d % 60000 / 1000);
        $("#cd-d").textContent = pad(days); $("#cd-h").textContent = pad(h); $("#cd-m").textContent = pad(m); $("#cd-s").textContent = pad(s);
    };
    tick(); setInterval(tick, 1000);
    $("#offer-cta").addEventListener("click", () => {
        clearFilters(false); filters.cats.add("brakes"); syncFilterUI(); renderProducts();
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });
}


function initNewsletter() {
    $("#news-form").addEventListener("submit", e => {
        e.preventDefault();
        const v = $("#news-email").value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { $("#news-err").textContent = "لطفاً یک ایمیل معتبر وارد کنید."; $("#news-email").focus(); return; }
        $("#news-err").textContent = ""; $("#news-email").value = "";
        showToast("عضویت شما در خبرنامه با موفقیت ثبت شد.");
    });
}


function initReveal() {
    const io = new IntersectionObserver(es => es.forEach(x => {
        if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
    }), { threshold: .12 });
    $$(".reveal").forEach(el => io.observe(el));
}


document.addEventListener("DOMContentLoaded", () => {
    initTheme(); initNavigation(); renderCategories(); renderBrands();
    initFilters(); renderProducts(); initSearch(); initVehicleFinder();
    renderCart(); renderWishlist(); initCountdown(); initNewsletter(); initReveal();

    let newProduct = fetch("https://favepart.com/fa/%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%DB%8C%D8%AF%DA%A9%DB%8C-%D9%86%DB%8C%D8%B3%D8%A7%D9%86-%D9%88%D8%A7%D9%86%D8%AA-%D8%AF%DB%8C%D8%B2%D9%84/%D9%82%D8%B7%D8%B9%D8%A7%D8%AA-%DB%8C%D8%AF%DA%A9%DB%8C-%D8%A7%D8%B5%D9%84%DB%8C-%D9%86%DB%8C%D8%B3%D8%A7%D9%86-%D9%88%D8%A7%D9%86%D8%AA-%D8%AF%DB%8C%D8%B2%D9%84-faw/%D9%BE%D8%B1%D9%88%D8%A7%D9%86%D9%87-9-%D9%BE%D8%B1-%D9%86%DB%8C%D8%B3%D8%A7%D9%86-%D8%AF%DB%8C%D8%B2%D9%84-%D9%88-%D8%B3%D8%A7%DB%8C%D9%BE%D8%A7");
    console.log(newProduct);
    // PRODUCTS.push(newProduct);
});