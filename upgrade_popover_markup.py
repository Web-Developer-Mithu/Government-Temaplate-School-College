# -*- coding: utf-8 -*-

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_popover = """<div id="kc-notice-popover" class="kc-notice-popover" aria-hidden="true" role="dialog" aria-label="নোটিশ প্রিভিউ">
    <div class="kc-notice-popover-backdrop" id="kc-popover-backdrop"></div>
    <div class="kc-popover-card" id="kc-popover-card">
        <!-- Close Button -->
        <button type="button" class="kc-popover-close-btn" id="kc-popover-close-btn" aria-label="বন্ধ করুন">
            <svg viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>

        <div class="kc-popover-grid">
            <!-- SIDE 1: LEFT FILE PREVIEW PANEL -->
            <div class="kc-popover-preview-col">
                <div class="kc-popover-file-badge-wrap">
                    <span class="kc-popover-file-type-pill" id="kc-popover-file-type-pill">PDF DOCUMENT</span>
                    <span class="kc-popover-file-size" id="kc-popover-file-size">২.৪ মেগাবাইট</span>
                </div>
                
                <div class="kc-popover-preview-viewport" id="kc-popover-preview-viewport">
                    <img id="kc-popover-preview-img" src="assets/images/notice-pdf-preview.svg" alt="নোটিশ ফাইল প্রিভিউ" class="kc-popover-preview-img" />
                    <div class="kc-popover-preview-overlay">
                        <a href="assets/images/notice-pdf-preview.svg" id="kc-popover-zoom-link" target="_blank" class="kc-popover-overlay-btn kc-btn-zoom">
                            <svg viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zM216 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H104c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80c0 8.8 7.2 16 16 16s16-7.2 16-16V224h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H216V112z"/></svg>
                            <span>বড় করে দেখুন</span>
                        </a>
                    </div>
                </div>
                
                <div class="kc-popover-file-footer">
                    <span class="kc-popover-file-icon">📄</span>
                    <span class="kc-popover-file-name" id="kc-popover-file-name">Academic-Council-117.pdf</span>
                </div>
            </div>

            <!-- SIDE 2: RIGHT DETAILS & ACTIONS PANEL -->
            <div class="kc-popover-details-col">
                <div class="kc-popover-details-header">
                    <span class="kc-popover-category-pill" id="kc-popover-category-pill">একাডেমিক</span>
                    <span class="kc-popover-date-pill" id="kc-popover-date-pill">
                        <svg viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 80c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V288c0-8.8-7.2-16-16-16H80z"/></svg>
                        <span id="kc-popover-date-text">০৫/১১/২০২৬</span>
                    </span>
                </div>

                <div class="kc-popover-ref-row">
                    <span class="kc-popover-ref-icon">🔖</span>
                    <span class="kc-popover-ref-text" id="kc-popover-ref-text">স্মারক নং: সআমক/একা/২০২৬/১১৮</span>
                </div>

                <h4 class="kc-popover-title" id="kc-popover-title">১১৭তম একাডেমিক কাউন্সিলের সভায় গৃহীত সিদ্ধান্ত</h4>

                <div class="kc-popover-divider"></div>

                <div class="kc-popover-body-scroll">
                    <p class="kc-popover-details-text" id="kc-popover-details-text">
                        সরকারি আদর্শ মডেল কলেজের সকল বিভাগীয় প্রধান ও শিক্ষক পরিষদের সকল সম্মানিত সদস্যগণের অবগতির জন্য জানানো যাচ্ছে যে, আগামী ১০ নভেম্বর ২০২৬ তারিখ রোজ মঙ্গলবার সকাল ১০:০০ ঘটিকায় কলেজ সম্মেলন কক্ষে ১১৭তম একাডেমিক কাউন্সিলের সাধারণ সভা অনুষ্ঠিত হবে। উক্ত সভায় যথাসময়ে উপস্থিত থাকার জন্য বিশেষভাবে অনুরোধ করা হলো।
                    </p>
                </div>

                <!-- Action Bar -->
                <div class="kc-popover-actions">
                    <a href="#" id="kc-popover-link-full" target="_blank" class="kc-popover-btn-primary">
                        <span>সম্পূর্ণ নোটিশ পড়ুন</span>
                        <svg viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-12.5-32.8 0-45.3s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </a>
                    <a href="assets/images/notice-pdf-preview.svg" id="kc-popover-btn-download" download="notice-file" target="_blank" class="kc-popover-btn-secondary">
                        <svg viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"/></svg>
                        <span>ডাউনলোড</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>"""

new_popover = """<div id="kc-notice-popover" class="kc-notice-popover kc-cinema-popover" aria-hidden="true" role="dialog" aria-label="নোটিশ সিনেমাটিক প্রিভিউ">
    <!-- Cinema Dark Frosted Backdrop -->
    <div class="kc-notice-popover-backdrop" id="kc-popover-backdrop">
        <div class="kc-cinema-esc-hint">
            <span class="kc-esc-key">ESC</span> অথবা বাইরে মাউস সরালে বন্ধ হবে
        </div>
    </div>

    <!-- Centered Cinematic Modal Card -->
    <div class="kc-popover-card kc-cinema-card" id="kc-popover-card">
        <!-- Close Button -->
        <button type="button" class="kc-popover-close-btn kc-cinema-close-btn" id="kc-popover-close-btn" aria-label="বন্ধ করুন" title="বন্ধ করুন (Esc)">
            <svg viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>

        <div class="kc-popover-grid kc-cinema-grid">
            <!-- SIDE 1: LEFT LARGE MEDIA / DOCUMENT STAGE (48% width) -->
            <div class="kc-popover-preview-col kc-cinema-preview-col">
                <div class="kc-cinema-stage-header">
                    <div class="kc-popover-file-badge-wrap">
                        <span class="kc-popover-file-type-pill" id="kc-popover-file-type-pill">PDF DOCUMENT</span>
                        <span class="kc-popover-file-size" id="kc-popover-file-size">২.৪ মেগাবাইট</span>
                    </div>
                    <div class="kc-cinema-stage-actions">
                        <a href="assets/images/notice-pdf-preview.svg" id="kc-popover-zoom-link" target="_blank" class="kc-cinema-tool-btn" title="নতুন ট্যাবে ফুল পেজ দেখুন">
                            <svg viewBox="0 0 448 512"><path d="M384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM160 144c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V182.6l-81.4 81.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 160H176c-8.8 0-16-7.2-16-16z"/></svg>
                            <span>ফুল ভিউ</span>
                        </a>
                    </div>
                </div>
                
                <div class="kc-popover-preview-viewport kc-cinema-viewport" id="kc-popover-preview-viewport">
                    <img id="kc-popover-preview-img" src="assets/images/notice-pdf-preview.svg" alt="নোটিশ ফাইল প্রিভিউ" class="kc-popover-preview-img kc-cinema-img" />
                    <div class="kc-popover-preview-overlay kc-cinema-overlay">
                        <a href="assets/images/notice-pdf-preview.svg" id="kc-cinema-overlay-btn" target="_blank" class="kc-popover-overlay-btn kc-btn-zoom">
                            <svg viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zM216 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H104c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80c0 8.8 7.2 16 16 16s16-7.2 16-16V224h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H216V112z"/></svg>
                            <span>উচ্চ রেজোলিউশনে দেখুন</span>
                        </a>
                    </div>
                </div>
                
                <div class="kc-popover-file-footer kc-cinema-file-footer">
                    <div class="kc-cinema-file-info-left">
                        <span class="kc-popover-file-icon">📄</span>
                        <span class="kc-popover-file-name" id="kc-popover-file-name">Academic-Council-117.pdf</span>
                    </div>
                    <span class="kc-cinema-verified-badge">✓ অফিসিয়াল নথি</span>
                </div>
            </div>

            <!-- SIDE 2: RIGHT EXPANDED INSTITUTIONAL DETAILS (52% width) -->
            <div class="kc-popover-details-col kc-cinema-details-col">
                <div class="kc-cinema-top-row">
                    <div class="kc-popover-details-header">
                        <span class="kc-popover-category-pill" id="kc-popover-category-pill">একাডেমিক</span>
                        <span class="kc-popover-date-pill" id="kc-popover-date-pill">
                            <svg viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 80c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V288c0-8.8-7.2-16-16-16H80z"/></svg>
                            <span id="kc-popover-date-text">০৫/১১/২০২৬</span>
                        </span>
                    </div>
                    <div class="kc-popover-ref-row">
                        <span class="kc-popover-ref-icon">🔖</span>
                        <span class="kc-popover-ref-text" id="kc-popover-ref-text">স্মারক নং: সআমক/একা/২০২৬/১১৮</span>
                    </div>
                </div>

                <h3 class="kc-popover-title kc-cinema-title" id="kc-popover-title">১১৭তম একাডেমিক কাউন্সিলের সভায় গৃহীত সিদ্ধান্ত</h3>

                <div class="kc-popover-divider kc-cinema-divider"></div>

                <!-- Rich Highlight Box -->
                <div class="kc-cinema-highlight-box">
                    <span class="kc-highlight-icon">📌</span>
                    <span class="kc-highlight-text">জরুরি অবগতি: নোটিশের নির্দেশনা অনুযায়ী নির্ধারিত তারিখ ও সময়ের মধ্যে করণীয় সম্পন্ন করার জন্য অনুরোধ করা যাচ্ছে।</span>
                </div>

                <!-- Full Scrollable Notice Text -->
                <div class="kc-popover-body-scroll kc-cinema-body-scroll">
                    <p class="kc-popover-details-text kc-cinema-details-text" id="kc-popover-details-text">
                        সরকারি আদর্শ মডেল কলেজের সকল বিভাগীয় প্রধান ও শিক্ষক পরিষদের সকল সম্মানিত সদস্যগণের অবগতির জন্য জানানো যাচ্ছে যে, আগামী ১০ নভেম্বর ২০২৬ তারিখ রোজ মঙ্গলবার সকাল ১০:০০ ঘটিকায় কলেজ সম্মেলন কক্ষে ১১৭তম একাডেমিক কাউন্সিলের সাধারণ সভা অনুষ্ঠিত হবে। উক্ত সভায় যথাসময়ে উপস্থিত থাকার জন্য বিশেষভাবে অনুরোধ করা হলো।
                    </p>
                </div>

                <!-- Bottom Command Action Bar -->
                <div class="kc-popover-actions kc-cinema-actions">
                    <a href="#" id="kc-popover-link-full" target="_blank" class="kc-popover-btn-primary kc-cinema-btn-primary">
                        <span>সম্পূর্ণ নোটিশ বিস্তারিত দেখুন</span>
                        <svg viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-12.5-32.8 0-45.3s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </a>
                    <a href="assets/images/notice-pdf-preview.svg" id="kc-popover-btn-download" download="notice-file" target="_blank" class="kc-popover-btn-secondary kc-cinema-btn-secondary">
                        <svg viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"/></svg>
                        <span>ডাউনলোড কপি</span>
                    </a>
                    <button type="button" class="kc-cinema-btn-print" id="kc-cinema-btn-print" onclick="window.print();" title="প্রিন্ট করুন">
                        <svg viewBox="0 0 512 512"><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H384v96h64V64c0-35.3-28.7-64-64-64H128zM384 416H128V320H384v96zm64-192c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v128h64v64c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V352h64V224zm-64 48c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"/></svg>
                        <span>প্রিন্ট</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>"""

if old_popover in content:
    content = content.replace(old_popover, new_popover, 1)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Replaced old popover with new Cinema Fullscreen Popover in index.html!")
else:
    print("Could not find old_popover string directly, finding by id...")
    import re
    m = re.search(r'<div id="kc-notice-popover"[\s\S]*?</div>\s*</div>\s*</div>', content)
    if m:
        content = content[:m.start()] + new_popover + content[m.end():]
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Replaced via regex!")
