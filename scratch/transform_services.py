import re

with open('index.html', encoding='utf-8') as f:
    content = f.read()

# Extract the exact img tags for the four boxes
img_04 = re.search(r'(<img[^>]*assets/images/04\.png[^>]*>)', content).group(1)
img_01 = re.search(r'(<img[^>]*assets/images/01\.png[^>]*>)', content).group(1)
img_02 = re.search(r'(<img[^>]*assets/images/02\.png[^>]*>)', content).group(1)
img_03 = re.search(r'(<img[^>]*assets/images/03\.png[^>]*>)', content).group(1)

print("Found all 4 images successfully!")

# Define new CSS and HTML
new_services_code = f'''            <style>
                /* ==========================================================================
                   PREMIUM INSTITUTIONAL SERVICES (গুরুত্বপূর্ণ লিঙ্ক ও সেবা)
                   ========================================================================== */
                .sb-main-card-header,
                #left-content .block h5.title.sb-main-card-header {{
                    background: linear-gradient(135deg, #03703e 0%, #014d2a 100%) !important;
                    padding: 12px 18px !important;
                    margin: 0 !important;
                    color: #ffffff !important;
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    border-bottom: 3px solid #f59e0b !important;
                    box-sizing: border-box !important;
                }}

                .sb-main-title {{
                    display: flex !important;
                    align-items: center !important;
                    gap: 10px !important;
                    font-size: 16px !important;
                    font-weight: 700 !important;
                    color: #ffffff !important;
                    margin: 0 !important;
                }}

                .sb-main-title-icon {{
                    width: 28px !important;
                    height: 28px !important;
                    background: rgba(255, 255, 255, 0.16) !important;
                    border-radius: 8px !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    color: #fde68a !important;
                }}

                .sb-main-badge {{
                    font-size: 11.5px !important;
                    font-weight: 600 !important;
                    color: #014d2a !important;
                    background: #fde68a !important;
                    padding: 3px 10px !important;
                    border-radius: 20px !important;
                    letter-spacing: 0.2px !important;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    gap: 5px !important;
                }}

                .sb-main-badge::before {{
                    content: '';
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #16a34a;
                }}

                .important-services-grid {{
                    display: grid !important;
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 18px !important;
                    padding: 18px !important;
                    margin: 0 !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%) !important;
                    align-items: stretch !important;
                }}

                .service-box.box {{
                    position: relative !important;
                    background: #ffffff !important;
                    border: 1.5px solid #e2e8f0 !important;
                    border-radius: 14px !important;
                    padding: 0 !important;
                    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(15, 23, 42, 0.03) !important;
                    overflow: hidden !important;
                    display: flex !important;
                    flex-direction: column !important;
                    transition: all 0.28s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
                    box-sizing: border-box !important;
                    height: 100% !important;
                    min-height: auto !important;
                }}

                /* Top category accent bar */
                .service-box.box::before {{
                    content: '' !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    height: 3.5px !important;
                    background: var(--sb-grad) !important;
                    transition: height 0.25s ease !important;
                    z-index: 2 !important;
                }}

                .service-box.box:hover {{
                    transform: translateY(-4px) !important;
                    border-color: var(--sb-accent) !important;
                    box-shadow: 0 14px 28px -4px var(--sb-shadow), 0 4px 10px rgba(0, 0, 0, 0.03) !important;
                }}

                .service-box.box:hover::before {{
                    height: 4.5px !important;
                }}

                /* Card Header */
                .service-box.box h4 {{
                    margin: 0 !important;
                    padding: 12px 16px !important;
                    background: #ffffff !important;
                    border-bottom: 1px solid #f1f5f9 !important;
                    font-size: 16px !important;
                    font-weight: 700 !important;
                    color: #1e293b !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    letter-spacing: -0.2px !important;
                }}

                .sb-header-title-wrap {{
                    display: flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                }}

                .sb-header-icon {{
                    width: 26px !important;
                    height: 26px !important;
                    border-radius: 7px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    background: var(--sb-soft-bg) !important;
                    color: var(--sb-accent) !important;
                    flex-shrink: 0 !important;
                }}

                .sb-header-icon svg {{
                    width: 15px !important;
                    height: 15px !important;
                    stroke: currentColor !important;
                    stroke-width: 2 !important;
                    fill: none !important;
                }}

                .sb-header-count {{
                    font-size: 11px !important;
                    font-weight: 600 !important;
                    color: var(--sb-accent) !important;
                    background: var(--sb-soft-bg) !important;
                    padding: 2px 8px !important;
                    border-radius: 20px !important;
                    border: 1px solid var(--sb-border) !important;
                    line-height: 1.3 !important;
                }}

                /* Card Body */
                .service-box-body {{
                    display: flex !important;
                    align-items: center !important;
                    padding: 16px 14px !important;
                    gap: 14px !important;
                    flex: 1 !important;
                    box-sizing: border-box !important;
                }}

                /* Illustration Squircle Container */
                .service-box-icon {{
                    width: 82px !important;
                    height: 82px !important;
                    border-radius: 14px !important;
                    background: var(--sb-soft-bg) !important;
                    border: 1.5px solid var(--sb-border) !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    flex-shrink: 0 !important;
                    box-shadow: 0 4px 12px var(--sb-shadow-light) !important;
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease !important;
                    padding: 8px !important;
                    box-sizing: border-box !important;
                }}

                .service-box-icon img {{
                    max-width: 66px !important;
                    max-height: 66px !important;
                    width: auto !important;
                    height: auto !important;
                    object-fit: contain !important;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08)) !important;
                    transition: transform 0.3s ease !important;
                }}

                .service-box.box:hover .service-box-icon {{
                    transform: scale(1.06) translateY(-2px) !important;
                    box-shadow: 0 8px 18px var(--sb-shadow) !important;
                }}

                .service-box.box:hover .service-box-icon img {{
                    transform: scale(1.05) !important;
                }}

                /* Links List */
                .service-box-links {{
                    flex: 1 !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    list-style: none !important;
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 6px !important;
                }}

                .service-box-links li {{
                    margin: 0 !important;
                    padding: 0 !important;
                    list-style: none !important;
                    display: block !important;
                }}

                .service-box-links li::before {{
                    display: none !important;
                }}

                .service-box-links li a {{
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    padding: 6.5px 10px !important;
                    background: #f8fafc !important;
                    border: 1px solid #e2e8f0 !important;
                    border-radius: 8px !important;
                    font-size: 13.5px !important;
                    font-weight: 600 !important;
                    color: #334155 !important;
                    text-decoration: none !important;
                    transition: all 0.22s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
                    line-height: 1.35 !important;
                    box-sizing: border-box !important;
                }}

                .sb-link-text-wrap {{
                    display: flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                }}

                .sb-link-dot {{
                    width: 6px !important;
                    height: 6px !important;
                    border-radius: 50% !important;
                    background: var(--sb-accent) !important;
                    opacity: 0.65 !important;
                    flex-shrink: 0 !important;
                    transition: all 0.2s ease !important;
                }}

                .sb-link-arrow {{
                    display: flex !important;
                    align-items: center !important;
                    color: var(--sb-accent) !important;
                    opacity: 0.45 !important;
                    transform: translateX(0) !important;
                    transition: all 0.22s ease !important;
                    flex-shrink: 0 !important;
                }}

                .sb-link-arrow svg {{
                    width: 12px !important;
                    height: 12px !important;
                    stroke: currentColor !important;
                    stroke-width: 2.4 !important;
                    fill: none !important;
                }}

                /* Link Hover Interaction */
                .service-box-links li a:hover {{
                    background: var(--sb-soft-bg) !important;
                    border-color: var(--sb-accent) !important;
                    color: var(--sb-accent) !important;
                    transform: translateX(4px) !important;
                    box-shadow: 0 3px 8px var(--sb-shadow-light) !important;
                    text-decoration: none !important;
                }}

                .service-box-links li a:hover .sb-link-dot {{
                    opacity: 1 !important;
                    transform: scale(1.4) !important;
                }}

                .service-box-links li a:hover .sb-link-arrow {{
                    opacity: 1 !important;
                    transform: translateX(3px) !important;
                }}

                /* 4 Category Color Palettes */
                .sb-theme-institution {{
                    --sb-grad: linear-gradient(135deg, #059669 0%, #10b981 100%);
                    --sb-accent: #059669;
                    --sb-soft-bg: #ecfdf5;
                    --sb-border: #a7f3d0;
                    --sb-shadow: rgba(16, 185, 129, 0.18);
                    --sb-shadow-light: rgba(16, 185, 129, 0.1);
                }}

                .sb-theme-admin {{
                    --sb-grad: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
                    --sb-accent: #1d4ed8;
                    --sb-soft-bg: #eff6ff;
                    --sb-border: #bfdbfe;
                    --sb-shadow: rgba(37, 99, 235, 0.18);
                    --sb-shadow-light: rgba(37, 99, 235, 0.1);
                }}

                .sb-theme-academic {{
                    --sb-grad: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                    --sb-accent: #7c3aed;
                    --sb-soft-bg: #faf5ff;
                    --sb-border: #e9d5ff;
                    --sb-shadow: rgba(124, 58, 237, 0.18);
                    --sb-shadow-light: rgba(124, 58, 237, 0.1);
                }}

                .sb-theme-download {{
                    --sb-grad: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
                    --sb-accent: #d97706;
                    --sb-soft-bg: #fffbeb;
                    --sb-border: #fde68a;
                    --sb-shadow: rgba(217, 119, 6, 0.18);
                    --sb-shadow-light: rgba(217, 119, 6, 0.1);
                }}

                /* Responsive Breakpoints */
                @media screen and (max-width: 900px) {{
                    .important-services-grid {{
                        grid-template-columns: 1fr !important;
                        gap: 15px !important;
                        padding: 14px !important;
                    }}
                }}

                @media screen and (max-width: 576px) {{
                    .service-box-body {{
                        flex-direction: column !important;
                        align-items: center !important;
                        padding: 14px 10px !important;
                        gap: 12px !important;
                    }}
                    .service-box-icon {{
                        width: 72px !important;
                        height: 72px !important;
                    }}
                    .service-box-links {{
                        width: 100% !important;
                    }}
                    .sb-header-count {{
                        display: none !important;
                    }}
                }}
            </style>
            <div class="column block" bis_skin_checked="1">
                <h5 class="bk-org title sb-main-card-header">
                    <span class="sb-main-title">
                        <span class="sb-main-title-icon">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        </span>
                        গুরুত্বপূর্ণ লিঙ্ক ও সেবা
                    </span>
                    <span class="sb-main-badge">৪টি সেবা শাখা</span>
                </h5>

                <div class="important-services-grid" bis_skin_checked="1">
                    <!-- 1. প্রতিষ্ঠান সম্পর্কে -->
                    <div id="box-267" class="service-box box sb-theme-institution" bis_skin_checked="1">
                        <h4>
                            <span class="sb-header-title-wrap">
                                <span class="sb-header-icon">
                                    <svg viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4"></path></svg>
                                </span>
                                প্রতিষ্ঠান সম্পর্কে
                            </span>
                            <span class="sb-header-count">৩টি সেবা</span>
                        </h4>

                        <div class="service-box-body" bis_skin_checked="1">
                            <div class="service-box-icon" bis_skin_checked="1">
                                {img_04}
                            </div>

                            <ul class="service-box-links">
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/about-institution" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>প্রতিষ্ঠান সম্পর্কে</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/honor-board" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>অর্নার বোর্ড</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/founder-donor-info" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>প্রতিষ্ঠাতা এবং দানকারীর তথ্য</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 2. কলেজ প্রশাসন -->
                    <div id="box-268" class="service-box box sb-theme-admin" bis_skin_checked="1">
                        <h4>
                            <span class="sb-header-title-wrap">
                                <span class="sb-header-icon">
                                    <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </span>
                                কলেজ প্রশাসন
                            </span>
                            <span class="sb-header-count">৩টি সেবা</span>
                        </h4>

                        <div class="service-box-body" bis_skin_checked="1">
                            <div class="service-box-icon" bis_skin_checked="1">
                                {img_01}
                            </div>

                            <ul class="service-box-links">
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/principal-list" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>অধ্যক্ষবৃন্দের কার্যকাল</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/teacher-list" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>শিক্ষক-শিক্ষিকাদের তালিকা</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/staff-list" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>কমর্চারীদের তালিকা</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 3. একাডেমিক -->
                    <div id="box-269" class="service-box box sb-theme-academic" bis_skin_checked="1">
                        <h4>
                            <span class="sb-header-title-wrap">
                                <span class="sb-header-icon">
                                    <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                                </span>
                                একাডেমিক
                            </span>
                            <span class="sb-header-count">৬টি সেবা</span>
                        </h4>

                        <div class="service-box-body" bis_skin_checked="1">
                            <div class="service-box-icon" bis_skin_checked="1">
                                {img_02}
                            </div>

                            <ul class="service-box-links">
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/student-list" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>ছাত্র-ছাত্রীদের তালিকা</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/student-attendance" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>ছাত্র-ছাত্রীর উপস্থিতি</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/class-routine" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>ক্লাস-রুটিন</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/exam-routine" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>পরীক্ষার-রুটিন</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/exam-result" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>পরীক্ষার ফলাফল</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/syllabus" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>সিলেবাস</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 4. ডাউনলোড -->
                    <div id="box-270" class="service-box box sb-theme-download" bis_skin_checked="1">
                        <h4>
                            <span class="sb-header-title-wrap">
                                <span class="sb-header-icon">
                                    <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </span>
                                ডাউনলোড
                            </span>
                            <span class="sb-header-count">৪টি সেবা</span>
                        </h4>

                        <div class="service-box-body" bis_skin_checked="1">
                            <div class="service-box-icon" bis_skin_checked="1">
                                {img_03}
                            </div>

                            <ul class="service-box-links">
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/manual" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>ম্যানুয়েল</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/e-book" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>ই-বুক</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/lecture-sheet" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>লেকচার শীট</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.modelcollege.edu.bd/pages/book-list" target="_self" bis_skin_checked="1">
                                        <span class="sb-link-text-wrap">
                                            <span class="sb-link-dot"></span>
                                            <span>বুক লিস্ট</span>
                                        </span>
                                        <span class="sb-link-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>'''

# Locate old block in index.html: from line with '<style>' before .important-services-grid to the closing </div> of the block
start_target = content.rfind('<style>', 0, content.find('id="box-267"'))
# end target is before the <br> preceding '<h5 class="bk-org title"> ফটো গ্যালারি'
end_marker = 'ফটো গ্যালারি'
gallery_pos = content.find(end_marker)
# Find the '<div class="column block"' before gallery
block_before_gallery = content.rfind('<div class="column block"', 0, gallery_pos)
# Find '<br>' before that if present
br_pos = content.rfind('<br>', 0, block_before_gallery)

old_segment = content[start_target:br_pos].rstrip()

print("Length of old segment to replace:", len(old_segment))

# Replace old segment with new_services_code
new_content = content[:start_target] + new_services_code + '\n            ' + content[br_pos:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("index.html updated successfully!")

