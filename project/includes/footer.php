    <footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-about">
                <a href="#" class="logo"><span class="logo-mark"><svg width="22" height="22" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M13 2 5 13.2h5.4L9.5 22l8-11.2h-5.4z" />
                        </svg></span><span>فاوه پارت<small>FAVE PART</small></span></a>
                <p>فاوه پارت، مرجع تخصصی قطعات یدکی خودرو؛ با هدف ارائه قطعات اصلی، قیمت منصفانه و تجربه خریدی
                    مطمئن برای صاحبان خودرو.</p>
                <div class="socials">
                    <a href="#" aria-label="اینستاگرام"><svg width="18" height="18">
                            <use href="#i-ig" />
                        </svg></a>
                    <a href="#" aria-label="تلگرام"><svg width="18" height="18">
                            <use href="#i-tg" />
                        </svg></a>
                    <a href="#" aria-label="واتس‌اپ"><svg width="18" height="18">
                            <use href="#i-wa" />
                        </svg></a>
                    <a href="#" aria-label="آپارات"><svg width="18" height="18">
                            <use href="#i-ap" />
                        </svg></a>
                </div>
            </div>
            <div class="footer-col">
                <h4>فروشگاه</h4>
                <ul>
                    <li><a href="#shop">همه قطعات</a></li>
                    <li><a href="#categories">دسته‌بندی‌ها</a></li>
                    <li><a href="#brands">برندها</a></li>
                    <li><a href="#offer">پیشنهادهای ویژه</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>پشتیبانی</h4>
                <ul>
                    <li><a href="#">راهنمای خرید</a></li>
                    <li><a href="#vehicle-finder">انتخاب قطعه</a></li>
                    <li><a href="#">ارسال سفارش</a></li>
                    <li><a href="#">مرجوعی</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>درباره ما</h4>
                <ul>
                    <li><a href="#">درباره فروشگاه</a></li>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#">همکاری</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>قوانین</h4>
                <ul>
                    <li><a href="#">حریم خصوصی</a></li>
                    <li><a href="#">قوانین و مقررات</a></li>
                    <li><a href="#">شرایط استفاده</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <span>© ۱۴۰۵ فاوه پارت — تمامی حقوق محفوظ است.</span>
            <div class="pay-methods"><span>درگاه امن بانکی</span><span>پرداخت در محل</span><span>کیف پول</span>
            </div>
        </div>
    </div>
    </footer>
    
    <div class="overlay" id="overlay"></div>
    <aside class="drawer" id="cart-drawer" role="dialog" aria-modal="true" aria-label="سبد خرید">
    <div class="drawer-head">
        <h3><svg width="20" height="20">
                <use href="#i-cart" />
            </svg> سبد خرید <span class="badge" id="cart-drawer-count" hidden>۰</span></h3><button class="icon-btn"
            data-close aria-label="بستن سبد خرید" data-testid="cart-close-btn"><svg width="18" height="18">
                <use href="#i-x" />
            </svg></button>
    </div>
    <div class="drawer-body" id="cart-body"></div>
    <div class="drawer-foot" id="cart-foot"></div>
    </aside>
    <aside class="drawer" id="wish-drawer" role="dialog" aria-modal="true" aria-label="علاقه‌مندی‌ها">
    <div class="drawer-head">
        <h3><svg width="20" height="20">
                <use href="#i-heart" />
            </svg> علاقه‌مندی‌ها <span class="badge" id="wish-drawer-count" hidden>۰</span></h3><button class="icon-btn"
            data-close aria-label="بستن علاقه‌مندی‌ها" data-testid="wishlist-close-btn"><svg width="18" height="18">
                <use href="#i-x" />
            </svg></button>
    </div>
    <div class="drawer-body" id="wish-body"></div>
    </aside>
    <aside class="drawer left" id="menu-drawer" role="dialog" aria-modal="true" aria-label="منوی موبایل">
    <div class="drawer-head">
        <h3>منو</h3><button class="icon-btn" data-close aria-label="بستن منو" data-testid="menu-close-btn"><svg
                width="18" height="18">
                <use href="#i-x" />
            </svg></button>
    </div>
    <div class="drawer-body">
        <div class="mnav-search" role="search">
            <svg width="17" height="17">
                <use href="#i-search" />
            </svg>
            <input type="search" id="mnav-search-input" placeholder="جستجوی قطعه، برند یا شماره فنی..."
                aria-label="جستجو" autocomplete="off" data-testid="mobile-search-input">
        </div>
        <nav class="mnav-links" aria-label="منوی موبایل">
            <a href="#">خانه <svg width="16" height="16">
                    <use href="#i-chev" />
                </svg></a>
            <a href="#shop">فروشگاه قطعات <svg width="16" height="16">
                    <use href="#i-chev" />
                </svg></a>
            <a href="#categories">دسته‌بندی‌ها <svg width="16" height="16">
                    <use href="#i-chev" />
                </svg></a>
            <a href="#brands">برندها <svg width="16" height="16">
                    <use href="#i-chev" />
                </svg></a>
            <a href="#offer">پیشنهادهای ویژه <svg width="16" height="16">
                    <use href="#i-chev" />
                </svg></a>
            <a href="#vehicle-finder">انتخاب خودرو <svg width="16" height="16">
                    <use href="#i-chev" />
                </svg></a>
            <a href="#support">پشتیبانی <svg width="16" height="16">
                    <use href="#i-chev" />
                </svg></a>
        </nav>
    </div>
    </aside>
    <aside class="drawer left" id="filter-drawer" role="dialog" aria-modal="true" aria-label="فیلتر محصولات">
    <div class="drawer-head">
        <h3><svg width="18" height="18">
                <use href="#i-filter" />
            </svg> فیلترها</h3><button class="icon-btn" data-close aria-label="بستن فیلترها"
            data-testid="filter-close-btn"><svg width="18" height="18">
                <use href="#i-x" />
            </svg></button>
    </div>
    <div class="drawer-body">
        <div id="filters-body-mobile"></div>
    </div>
    <div class="drawer-foot" style="display:flex;gap:10px"><button class="btn btn-ghost btn-block" id="clear-filters-m"
            data-testid="mobile-clear-filters-btn">پاک کردن فیلترها</button><button class="btn btn-primary btn-block"
            data-close data-testid="filter-apply-mobile-btn">نمایش نتایج</button>
    </div>
    </aside>
    <div class="modal-wrap" id="product-modal" role="dialog" aria-modal="true" aria-label="جزئیات محصول">
    <div class="modal-bg" data-close-modal></div>
    <div class="modal" id="modal-content"></div>
    </div>
    <div class="toasts" id="toasts" aria-live="polite"></div>
    
    <!-- Edit href path! -->
    <script type="text/js" src="/FavePart/project/assets/js/main.js"></script>
    <script type="module"
    src="https://static.cloudflareinsights.com/beacon.min.js/v31edd6df95cf4e85bb4c19e7a9bdbcba1788362987495"
    integrity="sha512-iIg7k2xntmwu6/uSb5tpc/hySgZc4eoL31yB29W6tJFo2akwjPWcEqnCEdJvGexCL0KEQwVYv5BlowfhVz26hg=="
    data-cf-beacon='{"version":"2024.11.0","token":"7f7b0fd8732c4326aae4b9d58d5c514a","spa":2}' crossorigin="anonymous">
    </script>
</body>

</html>