# -*- coding: utf-8 -*-

cinema_css = """
/* ==========================================================================
   CINEMATIC FULLSCREEN NOTICE HOVER PREVIEW FLYOUT (macOS QuickLook Style)
   ========================================================================== */

.kc-cinema-popover {
    position: fixed !important;
    inset: 0 !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 9999999 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 20px !important;
    box-sizing: border-box !important;
    pointer-events: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.28s !important;
}

.kc-cinema-popover.kc-popover-active {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
}

/* Fullscreen Radial Dark Frosted Glass Backdrop */
.kc-cinema-popover .kc-notice-popover-backdrop {
    display: flex !important;
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: radial-gradient(circle at center, rgba(6, 28, 16, 0.85) 0%, rgba(2, 10, 6, 0.94) 100%) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    z-index: 1 !important;
    opacity: 0 !important;
    transition: opacity 0.3s ease !important;
    align-items: flex-start !important;
    justify-content: center !important;
    padding-top: 24px !important;
    box-sizing: border-box !important;
    cursor: pointer !important;
}

.kc-cinema-popover.kc-popover-active .kc-notice-popover-backdrop {
    opacity: 1 !important;
}

.kc-cinema-esc-hint {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    padding: 6px 18px;
    color: #f1f5f9;
    font-size: 12px;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    animation: kcFadeDown 0.4s ease;
    pointer-events: none;
}

.kc-esc-key {
    background: rgba(255, 255, 255, 0.25);
    padding: 2px 7px;
    border-radius: 4px;
    font-family: monospace;
    font-weight: 800;
    color: #ffffff;
    margin-right: 4px;
}

@keyframes kcFadeDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Centered Cinematic Modal Card */
.kc-cinema-card {
    position: relative !important;
    z-index: 10 !important;
    width: 1060px !important;
    max-width: min(1060px, 94vw) !important;
    height: 620px !important;
    max-height: min(620px, 88vh) !important;
    background: #ffffff !important;
    border-radius: 20px !important;
    box-shadow: 0 35px 90px -15px rgba(0, 0, 0, 0.6),
                0 10px 30px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.4) !important;
    overflow: hidden !important;
    pointer-events: auto !important;
    display: flex !important;
    flex-direction: column !important;
    transform: scale(0.92) translateY(24px) !important;
    opacity: 0 !important;
    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s !important;
    margin: 0 auto !important;
}

.kc-cinema-popover.kc-popover-active .kc-cinema-card {
    transform: scale(1) translateY(0) !important;
    opacity: 1 !important;
}

/* Emerald Top Ribbon */
.kc-cinema-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #005a2b 0%, #10b636 50%, #f59e0b 100%);
    z-index: 20;
}

/* Close Button */
.kc-cinema-close-btn {
    position: absolute !important;
    top: 16px !important;
    right: 18px !important;
    width: 34px !important;
    height: 34px !important;
    background: #f1f5f9 !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    cursor: pointer !important;
    z-index: 60 !important;
    transition: all 0.2s ease !important;
    color: #475569 !important;
}

.kc-cinema-close-btn svg {
    width: 14px !important;
    height: 14px !important;
    fill: currentColor !important;
}

.kc-cinema-close-btn:hover {
    background: #fee2e2 !important;
    color: #ef4444 !important;
    border-color: #fca5a5 !important;
    transform: rotate(90deg) scale(1.08) !important;
}

/* 2-Sided Cinema Grid */
.kc-cinema-grid {
    display: flex !important;
    flex-direction: row !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important;
}

/* SIDE 1: MEDIA & DOCUMENT STAGE (48% width) */
.kc-cinema-preview-col {
    width: 48% !important;
    flex-shrink: 0 !important;
    background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%) !important;
    border-right: 1px solid #e2e8f0 !important;
    padding: 22px 20px 18px 24px !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    height: 100% !important;
}

.kc-cinema-stage-header {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    margin-bottom: 10px !important;
}

.kc-cinema-stage-actions {
    display: flex !important;
    gap: 8px !important;
}

.kc-cinema-tool-btn {
    display: inline-flex !important;
    align-items: center !important;
    gap: 5px !important;
    font-size: 11.5px !important;
    font-weight: 700 !important;
    color: #005a2b !important;
    background: rgba(0, 90, 43, 0.08) !important;
    border: 1px solid rgba(0, 90, 43, 0.2) !important;
    padding: 3px 10px !important;
    border-radius: 14px !important;
    text-decoration: none !important;
    transition: all 0.2s ease !important;
}

.kc-cinema-tool-btn svg {
    width: 11px !important;
    height: 11px !important;
    fill: currentColor !important;
}

.kc-cinema-tool-btn:hover {
    background: #005a2b !important;
    color: #ffffff !important;
}

.kc-cinema-tool-btn:hover svg {
    fill: #ffffff !important;
}

/* Viewport Stage */
.kc-cinema-viewport {
    position: relative !important;
    flex: 1 !important;
    width: 100% !important;
    min-height: 0 !important;
    border-radius: 12px !important;
    overflow: hidden !important;
    background: #ffffff !important;
    border: 1.5px solid #cbd5e1 !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}

.kc-cinema-img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.kc-cinema-viewport:hover .kc-cinema-img {
    transform: scale(1.03) !important;
}

.kc-cinema-overlay {
    position: absolute !important;
    inset: 0 !important;
    background: rgba(15, 23, 42, 0.45) !important;
    backdrop-filter: blur(2px) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    opacity: 0 !important;
    transition: opacity 0.22s ease !important;
}

.kc-cinema-viewport:hover .kc-cinema-overlay {
    opacity: 1 !important;
}

.kc-cinema-file-footer {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    margin-top: 12px !important;
    padding-top: 6px !important;
}

.kc-cinema-file-info-left {
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
    min-width: 0 !important;
}

.kc-cinema-verified-badge {
    font-size: 11px !important;
    font-weight: 700 !important;
    color: #15803d !important;
    background: #dcfce7 !important;
    border: 1px solid #86efac !important;
    border-radius: 12px !important;
    padding: 2px 8px !important;
    white-space: nowrap !important;
}

/* SIDE 2: DETAILS & ACTIONS STAGE (52% width) */
.kc-cinema-details-col {
    width: 52% !important;
    flex: 1 !important;
    padding: 24px 28px 20px 28px !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    height: 100% !important;
    min-width: 0 !important;
}

.kc-cinema-top-row {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    padding-right: 36px !important; /* space for close button */
}

.kc-cinema-title {
    font-size: 21px !important;
    font-weight: 800 !important;
    color: #0f172a !important;
    line-height: 1.35 !important;
    margin: 12px 0 8px 0 !important;
    letter-spacing: -0.3px !important;
}

.kc-cinema-divider {
    height: 3px !important;
    width: 100% !important;
    background: linear-gradient(90deg, #10b636 0%, #005a2b 40%, rgba(226, 232, 240, 0.4) 100%) !important;
    margin: 4px 0 12px 0 !important;
    border-radius: 3px !important;
}

.kc-cinema-highlight-box {
    background: #f0fdf4 !important;
    border: 1px solid #bbf7d0 !important;
    border-left: 3.5px solid #16a34a !important;
    border-radius: 8px !important;
    padding: 10px 14px !important;
    font-size: 13px !important;
    color: #166534 !important;
    display: flex !important;
    align-items: flex-start !important;
    gap: 8px !important;
    line-height: 1.5 !important;
    margin-bottom: 12px !important;
}

.kc-highlight-icon {
    font-size: 14px !important;
    flex-shrink: 0 !important;
}

.kc-cinema-body-scroll {
    flex: 1 !important;
    max-height: 200px !important;
    overflow-y: auto !important;
    padding-right: 8px !important;
    margin-bottom: 16px !important;
    scrollbar-width: thin !important;
    scrollbar-color: #cbd5e1 transparent !important;
}

.kc-cinema-body-scroll::-webkit-scrollbar {
    width: 5px !important;
}

.kc-cinema-body-scroll::-webkit-scrollbar-thumb {
    background: #94a3b8 !important;
    border-radius: 5px !important;
}

.kc-cinema-details-text {
    font-size: 14px !important;
    line-height: 1.7 !important;
    color: #334155 !important;
    margin: 0 !important;
    text-align: justify !important;
}

/* Action Command Bar */
.kc-cinema-actions {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    margin-top: auto !important;
    padding-top: 10px !important;
    border-top: 1px solid #f1f5f9 !important;
}

.kc-cinema-btn-primary {
    flex: 1 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 8px !important;
    background: linear-gradient(135deg, #005a2b 0%, #064e3b 100%) !important;
    color: #ffffff !important;
    font-size: 13.5px !important;
    font-weight: 800 !important;
    padding: 11px 18px !important;
    border-radius: 10px !important;
    text-decoration: none !important;
    box-shadow: 0 4px 14px rgba(0, 90, 43, 0.3) !important;
    transition: all 0.2s ease !important;
}

.kc-cinema-btn-primary:hover {
    background: linear-gradient(135deg, #066632 0%, #085a44 100%) !important;
    box-shadow: 0 6px 20px rgba(0, 90, 43, 0.4) !important;
    transform: translateY(-2px) !important;
}

.kc-cinema-btn-secondary {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    background: #f8fafc !important;
    color: #0f172a !important;
    border: 1.5px solid #cbd5e1 !important;
    font-size: 13.5px !important;
    font-weight: 700 !important;
    padding: 10px 16px !important;
    border-radius: 10px !important;
    text-decoration: none !important;
    transition: all 0.2s ease !important;
}

.kc-cinema-btn-secondary:hover {
    background: #ffffff !important;
    border-color: #005a2b !important;
    color: #005a2b !important;
    transform: translateY(-2px) !important;
}

.kc-cinema-btn-print {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    background: #f1f5f9 !important;
    color: #475569 !important;
    border: 1.5px solid #e2e8f0 !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    padding: 10px 14px !important;
    border-radius: 10px !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
}

.kc-cinema-btn-print svg {
    width: 14px !important;
    height: 14px !important;
    fill: currentColor !important;
}

.kc-cinema-btn-print:hover {
    background: #e2e8f0 !important;
    color: #0f172a !important;
    transform: translateY(-2px) !important;
}

/* ==========================================================================
   MOBILE & TABLET FULLSCREEN RESPONSIVE
   ========================================================================== */
@media (max-width: 900px) {
    .kc-cinema-card {
        width: 100% !important;
        max-width: 100% !important;
        height: 94vh !important;
        max-height: 94vh !important;
        border-radius: 20px 20px 0 0 !important;
        margin-top: auto !important;
        overflow-y: auto !important;
    }

    .kc-cinema-grid {
        flex-direction: column !important;
        overflow-y: auto !important;
    }

    .kc-cinema-preview-col {
        width: 100% !important;
        height: auto !important;
        padding: 18px 16px 14px 16px !important;
    }

    .kc-cinema-viewport {
        height: 220px !important;
    }

    .kc-cinema-details-col {
        width: 100% !important;
        height: auto !important;
        padding: 18px 16px !important;
    }

    .kc-cinema-title {
        font-size: 16px !important;
    }

    .kc-cinema-actions {
        flex-direction: column !important;
        gap: 8px !important;
    }

    .kc-cinema-btn-primary,
    .kc-cinema-btn-secondary,
    .kc-cinema-btn-print {
        width: 100% !important;
    }

    .kc-cinema-esc-hint {
        display: none !important;
    }
}
"""

with open('responsive-fix.css', 'a', encoding='utf-8') as f:
    f.write("\n" + cinema_css + "\n")

print("Appended Cinema Fullscreen CSS to responsive-fix.css!")
