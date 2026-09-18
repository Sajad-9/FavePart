    <?php include (__DIR__ . "/includes/header.php"); ?>

    <?php
        // include_once ("https://favepart.com/fa/%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%DB%8C%D8%AF%DA%A9%DB%8C-%D9%86%DB%8C%D8%B3%D8%A7%D9%86-%D9%88%D8%A7%D9%86%D8%AA-%D8%AF%DB%8C%D8%B2%D9%84/%D9%82%D8%B7%D8%B9%D8%A7%D8%AA-%DB%8C%D8%AF%DA%A9%DB%8C-%D8%A7%D8%B5%D9%84%DB%8C-%D9%86%DB%8C%D8%B3%D8%A7%D9%86-%D9%88%D8%A7%D9%86%D8%AA-%D8%AF%DB%8C%D8%B2%D9%84-faw/%D9%BE%D8%B1%D9%88%D8%A7%D9%86%D9%87-9-%D9%BE%D8%B1-%D9%86%DB%8C%D8%B3%D8%A7%D9%86-%D8%AF%DB%8C%D8%B2%D9%84-%D9%88-%D8%B3%D8%A7%DB%8C%D9%BE%D8%A7");
    
        $data = file_get_contents("./includes/footer.php");
        echo $data;

    ?>

    <main>
        <section class="hero">
            <div class="hero-orb a"></div>
            <div class="hero-orb b"></div>
            <div class="container hero-inner">
                <div>
                    <span class="hero-tag"><span class="dot"></span> بیش از ۱۲٬۰۰۰ قطعه با ضمانت اصالت</span>
                    <h1>قطعه درست،<br>برای <span class="grad">خودروی شما</span></h1>
                    <p class="lead">قطعات یدکی باکیفیت را بر اساس خودرو، برند یا شماره فنی به‌سرعت پیدا کنید؛ با ارسال
                        سریع و پشتیبانی تخصصی.</p>
                    <div class="hero-search" role="search">
                        <div class="box">
                            <svg width="19" height="19">
                                <use href="#i-search" />
                            </svg>
                            <input type="search" id="hero-search-input"
                                placeholder="نام قطعه، برند یا شماره فنی را جستجو کنید..."
                                aria-label="جستجوی قطعه، برند یا شماره فنی" autocomplete="off"
                                data-testid="hero-search-input">
                            <button class="btn btn-primary" id="hero-search-btn"
                                data-testid="hero-search-btn">جستجو</button>
                        </div>
                        <div class="ac-panel" id="hero-ac" role="listbox" aria-label="پیشنهادهای جستجو"></div>
                        <div class="hero-hints">
                            <span>جستجوهای پرتکرار:</span>
                            <button data-q="لنت ترمز">لنت ترمز</button>
                            <button data-q="فیلتر">فیلتر</button>
                            <button data-q="شمع">شمع</button>
                            <button data-q="بوش">بوش</button>
                        </div>
                    </div>
                    <div class="hero-cta">
                        <a href="#shop" class="btn btn-primary" data-testid="hero-cta-shop">مشاهده قطعات <svg width="17"
                                height="17">
                                <use href="#i-arrow" />
                            </svg></a>
                        <a href="#vehicle-finder" class="btn btn-ghost" data-testid="hero-cta-vehicle"><svg width="18"
                                height="18">
                                <use href="#i-car" />
                            </svg> انتخاب خودرو</a>
                    </div>
                    <div class="hero-stats">
                        <div>
                            <div class="num">۱۲٬۴۰۰+</div>
                            <div class="lbl">قطعه فعال</div>
                        </div>
                        <div>
                            <div class="num">۴۸+</div>
                            <div class="lbl">برند معتبر</div>
                        </div>
                        <div>
                            <div class="num">۹۸٪</div>
                            <div class="lbl">رضایت مشتریان</div>
                        </div>
                    </div>
                </div>
                <div class="hero-visual" aria-hidden="true">
                    <svg viewBox="0 0 480 420" fill="none">
                        <defs>
                            <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stop-color="#3d6bff" />
                                <stop offset="1" stop-color="#7a5cff" />
                            </linearGradient>
                            <radialGradient id="hg2" cx=".5" cy=".5" r=".5">
                                <stop offset="0" stop-color="#3d6bff" stop-opacity=".35" />
                                <stop offset="1" stop-color="#3d6bff" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                        <circle cx="240" cy="210" r="190" fill="url(#hg2)" />
                        <circle cx="240" cy="210" r="150" stroke="url(#hg1)" stroke-width="1.5" stroke-dasharray="4 10"
                            opacity=".6" />
                        <circle cx="240" cy="210" r="118" stroke="currentColor" stroke-opacity=".25"
                            stroke-width="14" />
                        <circle cx="240" cy="210" r="118" stroke="url(#hg1)" stroke-width="14"
                            stroke-dasharray="420 360" stroke-linecap="round" />
                        <circle cx="240" cy="210" r="46" stroke="url(#hg1)" stroke-width="10" />
                        <circle cx="240" cy="210" r="16" fill="url(#hg1)" />
                        <g stroke="currentColor" stroke-opacity=".4" stroke-width="6" stroke-linecap="round">
                            <circle cx="240" cy="130" r="7" fill="none" />
                            <circle cx="309" cy="170" r="7" fill="none" />
                            <circle cx="309" cy="250" r="7" fill="none" />
                            <circle cx="240" cy="290" r="7" fill="none" />
                            <circle cx="171" cy="250" r="7" fill="none" />
                            <circle cx="171" cy="170" r="7" fill="none" />
                        </g>
                        <path d="M96 330h288" stroke="url(#hg1)" stroke-width="2" stroke-linecap="round" opacity=".5" />
                        <path d="M126 352h228" stroke="currentColor" stroke-opacity=".15" stroke-width="2"
                            stroke-linecap="round" />
                    </svg>
                    <div class="float-chip c1"><svg width="16" height="16">
                            <use href="#i-badge" />
                        </svg> ضمانت اصالت قطعه</div>
                    <div class="float-chip c2"><svg width="16" height="16">
                            <use href="#i-truck" />
                        </svg> ارسال سریع سراسری</div>
                </div>
            </div>
        </section>
        <section class="section" id="vehicle-finder" style="padding-top:0;margin-top:-36px;position:relative;z-index:5">
            <div class="container">
                <div class="vehicle reveal">
                    <div class="vehicle-head">
                        <span class="ic"><svg width="24" height="24">
                                <use href="#i-car-check" />
                            </svg></span>
                        <div>
                            <h2>قطعه مناسب خودروی خود را پیدا کنید</h2>
                            <p>خودروی خود را انتخاب کنید تا فقط قطعات سازگار نمایش داده شود.</p>
                        </div>
                    </div>
                    <div class="vehicle-grid">
                        <div class="field"><label for="v-brand">برند خودرو</label><select id="v-brand"
                                data-testid="vehicle-brand-select">
                                <option value="">انتخاب کنید</option>
                            </select></div>
                        <div class="field"><label for="v-model">مدل</label><select id="v-model" disabled
                                data-testid="vehicle-model-select">
                                <option value="">ابتدا برند را انتخاب کنید</option>
                            </select></div>
                        <div class="field"><label for="v-year">سال ساخت</label><select id="v-year" disabled
                                data-testid="vehicle-year-select">
                                <option value="">ابتدا مدل را انتخاب کنید</option>
                            </select></div>
                        <div class="field"><label for="v-engine">موتور</label><select id="v-engine" disabled
                                data-testid="vehicle-engine-select">
                                <option value="">ابتدا سال را انتخاب کنید</option>
                            </select></div>
                        <div class="field"><label for="v-cat">دسته قطعه</label><select id="v-cat"
                                data-testid="vehicle-cat-select">
                                <option value="">همه دسته‌ها</option>
                            </select></div>
                        <button class="btn btn-primary" id="v-find" data-testid="vehicle-find-btn"
                            style="height:46px;white-space:nowrap">نمایش قطعات سازگار</button>
                    </div>
                    <div class="vehicle-result" id="v-result" role="status">
                        <svg width="20" height="20">
                            <use href="#i-check" />
                        </svg>
                        <span id="v-result-text"></span>
                        <button id="v-show" data-testid="vehicle-show-btn">مشاهده نتایج</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="categories">
            <div class="container">
                <div class="section-head reveal">
                    <div>
                        <h2 class="section-title">دسته‌بندی قطعات</h2>
                        <p class="section-sub">دسته موردنظر را انتخاب کنید تا مستقیم به قطعات آن بروید.</p>
                    </div>
                    <a href="#shop" class="link-more">مشاهده همه قطعات <svg width="15" height="15">
                            <use href="#i-arrow" />
                        </svg></a>
                </div>
                <div class="cats reveal" id="cats-grid"></div>
            </div>
        </section>
        <section class="section" id="offer">
            <div class="container">
                <div class="offer reveal">
                    <div>
                        <span class="tag">پیشنهاد محدود</span>
                        <h2>هفته عملکرد خودرو</h2>
                        <p>تا ۲۵٪ تخفیف برای قطعات منتخب سیستم ترمز — فقط تا پایان این هفته.</p>
                        <div class="countdown" id="countdown" aria-label="زمان باقی‌مانده پیشنهاد">
                            <div class="cell">
                                <div class="v" id="cd-d">۰</div>
                                <div class="l">روز</div>
                            </div>
                            <div class="cell">
                                <div class="v" id="cd-h">۰</div>
                                <div class="l">ساعت</div>
                            </div>
                            <div class="cell">
                                <div class="v" id="cd-m">۰</div>
                                <div class="l">دقیقه</div>
                            </div>
                            <div class="cell">
                                <div class="v" id="cd-s">۰</div>
                                <div class="l">ثانیه</div>
                            </div>
                        </div>
                        <button class="btn btn-light" id="offer-cta" data-testid="offer-cta-btn">مشاهده قطعات تخفیف‌دار
                            <svg width="17" height="17">
                                <use href="#i-arrow" />
                            </svg></button>
                    </div>
                    <div class="offer-visual" aria-hidden="true">
                        <svg viewBox="0 0 300 240" fill="none">
                            <circle cx="150" cy="120" r="100" stroke="rgba(255,255,255,.25)" stroke-width="16" />
                            <circle cx="150" cy="120" r="100" stroke="#fff" stroke-width="16" stroke-dasharray="300 330"
                                stroke-linecap="round" />
                            <circle cx="150" cy="120" r="34" stroke="#fff" stroke-width="9" />
                            <circle cx="150" cy="120" r="12" fill="#fff" />
                            <g stroke="rgba(255,255,255,.6)" stroke-width="5" stroke-linecap="round">
                                <circle cx="150" cy="58" r="5" />
                                <circle cx="212" cy="89" r="5" />
                                <circle cx="212" cy="151" r="5" />
                                <circle cx="150" cy="182" r="5" />
                                <circle cx="88" cy="151" r="5" />
                                <circle cx="88" cy="89" r="5" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="shop" style="padding-top:20px">
            <div class="container">
                <div class="section-head reveal">
                    <div>
                        <h2 class="section-title">فروشگاه قطعات</h2>
                        <p class="section-sub">از بین قطعات اصلی و باکیفیت، مناسب‌ترین را برای خودروی خود انتخاب کنید.
                        </p>
                    </div>
                </div>
                <div class="shop-layout">
                    <aside class="filters" id="filters-panel" aria-label="فیلتر محصولات">
                        <div class="filters-head">
                            <h3><svg width="18" height="18">
                                    <use href="#i-filter" />
                                </svg> فیلترها</h3>
                            <button class="clear-filters" id="clear-filters" data-testid="clear-filters-btn">پاک کردن
                                فیلترها</button>
                        </div>
                        <div id="filters-body"></div>
                    </aside>
                    <div>
                        <div class="shop-toolbar">
                            <button class="btn btn-ghost filter-toggle" id="filter-toggle"
                                data-testid="mobile-filter-btn"><svg width="17" height="17">
                                    <use href="#i-filter" />
                                </svg> فیلترها</button>
                            <span class="results-info" id="results-info" role="status"></span>
                            <div class="sort-wrap">
                                <label for="sort-select">مرتب‌سازی:</label>
                                <select id="sort-select" data-testid="sort-select">
                                    <option value="featured">پیشنهاد شده</option>
                                    <option value="newest">جدیدترین</option>
                                    <option value="cheap">ارزان‌ترین</option>
                                    <option value="expensive">گران‌ترین</option>
                                    <option value="popular">محبوب‌ترین</option>
                                    <option value="discount">بیشترین تخفیف</option>
                                </select>
                            </div>
                        </div>
                        <div class="chips" id="chips"></div>
                        <div class="products-grid" id="products-grid"></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="support" style="padding-top:24px">
            <div class="container">
                <div class="benefits reveal">
                    <div class="benefit"><span class="ic"><svg width="22" height="22">
                                <use href="#i-badge" />
                            </svg></span>
                        <h3>قطعات باکیفیت</h3>
                        <p>محصولات انتخاب‌شده از برندهای معتبر با ضمانت اصالت کالا.</p>
                    </div>
                    <div class="benefit"><span class="ic"><svg width="22" height="22">
                                <use href="#i-car-check" />
                            </svg></span>
                        <h3>سازگاری با خودرو</h3>
                        <p>پیدا کردن قطعه مناسب خودرو بر اساس برند، مدل و سال ساخت.</p>
                    </div>
                    <div class="benefit"><span class="ic"><svg width="22" height="22">
                                <use href="#i-truck" />
                            </svg></span>
                        <h3>ارسال سریع</h3>
                        <p>ارسال مطمئن سفارش‌ها به سراسر کشور در کوتاه‌ترین زمان.</p>
                    </div>
                    <div class="benefit"><span class="ic"><svg width="22" height="22">
                                <use href="#i-shield" />
                            </svg></span>
                        <h3>پرداخت امن</h3>
                        <p>فرآیند خرید امن با درگاه‌های معتبر بانکی.</p>
                    </div>
                    <div class="benefit"><span class="ic"><svg width="22" height="22">
                                <use href="#i-headset" />
                            </svg></span>
                        <h3>پشتیبانی تخصصی</h3>
                        <p>راهنمایی کارشناسان برای انتخاب دقیق قطعه مناسب.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="brands" style="padding-top:0">
            <div class="container">
                <div class="section-head reveal">
                    <div>
                        <h2 class="section-title">برندهای معتبر</h2>
                        <p class="section-sub">تأمین مستقیم از برندهای شناخته‌شده بازار جهانی.</p>
                    </div>
                </div>
                <div class="brands-strip reveal" id="brands-grid"></div>
            </div>
        </section>
        <section class="section" style="padding-top:0">
            <div class="container">
                <div class="newsletter reveal">
                    <h2>از سرویس خودرو عقب نمانید</h2>
                    <p>برای دریافت پیشنهادهای ویژه و نکات نگهداری خودرو ایمیل خود را ثبت کنید.</p>
                    <form class="news-form" id="news-form" novalidate>
                        <input type="email" id="news-email" placeholder="ایمیل خود را وارد کنید" aria-label="ایمیل"
                            data-testid="newsletter-email-input" dir="ltr" style="text-align:left">
                        <button type="submit" class="btn btn-primary" data-testid="newsletter-submit-btn">عضویت</button>
                    </form>
                    <div class="news-err" id="news-err" role="alert"></div>
                </div>
            </div>
        </section>
    </main>

    <?php include (__DIR__ . "/includes/footer.php"); ?>
</body>

</html>