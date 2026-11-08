/**
 * ==========================================================================
 * MASTER RESPONSIVE, BILINGUAL & INTERACTION SYSTEM
 * Govt. Keshab Chandra College (https://www.kccollege.edu.bd/)
 * File: responsive-fix.js
 * ==========================================================================
 */

(function() {
    'use strict';

    // --------------------------------------------------------------------------
    // 1. Speeches Data (Bengali & English) for Modal Popup
    // --------------------------------------------------------------------------
    var SPEECHES = {
        principal: {
            bn: {
                title: "অধ্যক্ষের বাণী",
                name: "প্রফেসর মোঃ মাসরুর-উল আলম",
                badge: "অধ্যক্ষ",
                institution: "সরকারি কেশব চন্দ্র কলেজ, ঝিনাইদহ",
                image: "https://cdn.learnerp.bd/massages/2xLGbBdarv2m7SubK79PzVtdyoFF7VA8I7b6bipq.jpg",
                paragraphs: [
                    "আমাদের উপর সত্য নির্ভরশীল নয়, সত্যের উপর আমরা নির্ভরশীল। তাই সত্যের উপর বিশ্বাস করে এবং উন্নত বিশ্বের সাথে তাল মিলিয়ে স্মার্ট বাংলাদেশ গঠনের লক্ষে শিক্ষার গুণগতমান বৃদ্ধির প্রত্যয়ে সরকারি কেশব চন্দ্র কলেজ, ঝিনাইদহ সামনের দিকে অগ্রসর হোক এই প্রত্যাশা।",
                    "জ্ঞানভিত্তিক সমাজ বিনির্মাণ এবং একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলায় আমাদের শিক্ষার্থীদের নৈতিক, মানবিক ও তথ্যপ্রযুক্তিভিত্তিক শিক্ষায় সুশিক্ষিত হতে হবে। সরকারি কেশব চন্দ্র কলেজ সর্বদা মানসম্মত শিক্ষা ও সহশিক্ষা কার্যক্রমে অগ্রণী ভূমিকা পালন করে আসছে এবং ভবিষ্যতেও করবে।",
                    "আমি কলেজের সকল শিক্ষক, কর্মকর্তা-কর্মচারী, শিক্ষার্থী ও অভিভাবকদের আন্তরিক সহযোগিতা কামনা করি।"
                ]
            },
            en: {
                title: "Principal's Message",
                name: "Prof. Md. Masrur-Ul-Alam",
                badge: "Principal",
                institution: "Govt. Keshab Chandra College, Jhenaidah",
                image: "https://cdn.learnerp.bd/massages/2xLGbBdarv2m7SubK79PzVtdyoFF7VA8I7b6bipq.jpg",
                paragraphs: [
                    "Truth does not depend on us; rather, we depend on the truth. Believing in truth and keeping pace with the developed world, Govt. Keshab Chandra College, Jhenaidah is committed to enhancing the quality of education in building a smart Bangladesh and advancing towards excellence.",
                    "To build a knowledge-based society and meet the challenges of the 21st century, our students must be well-equipped with moral, humanitarian, and technology-driven education. Govt. Keshab Chandra College has always played a pioneering role in quality education and co-curricular pursuits.",
                    "I warmly solicit the sincere cooperation of all teachers, staff, students, and respected guardians."
                ]
            }
        },
        vp: {
            bn: {
                title: "উপাধ্যক্ষের বাণী",
                name: "প্রফেসর মোঃ মিজানুর রহমান",
                badge: "উপাধ্যক্ষ",
                institution: "সরকারি কেশব চন্দ্র কলেজ, ঝিনাইদহ",
                image: "https://cdn.learnerp.bd/massages/Rvo8l4oDFdbfd44KdW7jBwlZGt39bxMbSQQgonO1.jpg",
                paragraphs: [
                    "বিসমিল্লাহির রাহমানির রাহিম।",
                    "সরকারি কেশব চন্দ্র কলেজ, ঝিনাইদহের সকল শিক্ষার্থী, অভিভাবক, শিক্ষক, কর্মকর্তা-কর্মচারী এবং শুভানুধ্যায়ীদের আন্তরিক শুভেচ্ছা ও অভিনন্দন।",
                    "শিক্ষা একটি জাতির অগ্রগতি ও সমৃদ্ধির প্রধান চালিকাশক্তি। একটি আদর্শ শিক্ষাপ্রতিষ্ঠান কেবল পাঠদানেই সীমাবদ্ধ থাকে না; বরং শিক্ষার্থীদের নৈতিকতা, শৃঙ্খলা, মানবিক মূল্যবোধ, দেশপ্রেম এবং নেতৃত্বের গুণাবলি বিকাশে গুরুত্বপূর্ণ ভূমিকা পালন করে। সরকারি কেশব চন্দ্র কলেজ তার গৌরবময় ঐতিহ্য, দক্ষ শিক্ষকবৃন্দ এবং মানসম্মত শিক্ষা কার্যক্রমের মাধ্যমে দীর্ঘদিন ধরে এই দায়িত্ব নিষ্ঠার সঙ্গে পালন করে আসছে।",
                    "আমাদের লক্ষ্য শিক্ষার্থীদের এমনভাবে গড়ে তোলা, যাতে তারা জ্ঞান, দক্ষতা ও সৃজনশীলতার সমন্বয়ে আধুনিক বিশ্বের চ্যালেঞ্জ মোকাবিলায় সক্ষম হয় এবং দেশ ও জাতির উন্নয়নে কার্যকর ভূমিকা রাখতে পারে। শিক্ষার পাশাপাশি সহশিক্ষা কার্যক্রম, গবেষণা, তথ্যপ্রযুক্তির ব্যবহার এবং সামাজিক দায়বদ্ধতার চর্চার মাধ্যমে একজন আদর্শ ও মানবিক নাগরিক হিসেবে নিজেকে প্রতিষ্ঠিত করাই আমাদের অঙ্গীকার।",
                    "আমি বিশ্বাস করি, শিক্ষক, শিক্ষার্থী, অভিভাবক এবং সংশ্লিষ্ট সকলের আন্তরিক সহযোগিতা ও সম্মিলিত প্রচেষ্টায় সরকারি কেশব চন্দ্র কলেজ ভবিষ্যতেও শিক্ষা, সংস্কৃতি ও নৈতিক মূল্যবোধ বিকাশে অগ্রণী ভূমিকা পালন করবে।",
                    "কলেজের উত্তরোত্তর সাফল্য, সুনাম ও সমৃদ্ধি কামনা করছি। মহান আল্লাহ আমাদের সকলের সহায় হোন।"
                ]
            },
            en: {
                title: "Vice-Principal's Message",
                name: "Prof. Md. Mizanur Rahman",
                badge: "Vice-Principal",
                institution: "Govt. Keshab Chandra College, Jhenaidah",
                image: "https://cdn.learnerp.bd/massages/Rvo8l4oDFdbfd44KdW7jBwlZGt39bxMbSQQgonO1.jpg",
                paragraphs: [
                    "Bismillahir Rahmanir Rahim.",
                    "Warmest greetings and congratulations to all students, guardians, teachers, officers, staff, and well-wishers of Govt. Keshab Chandra College, Jhenaidah.",
                    "Education is the foremost driving force behind a nation's progress and prosperity. An ideal educational institution does not merely impart classroom lessons; rather, it plays a vital role in developing students' moral values, discipline, humanism, patriotism, and leadership qualities. Govt. Keshab Chandra College has been dedicatedly serving this noble responsibility through its illustrious heritage, skilled educators, and quality academic programs.",
                    "Our goal is to prepare students to face modern global challenges with confidence through a blend of knowledge, competence, and creativity, enabling them to make meaningful contributions to the progress of the nation. In addition to academic pursuits, we encourage every student to develop as an enlightened and compassionate citizen through co-curricular activities, research, technological literacy, and social responsibility.",
                    "I firmly believe that with the sincere cooperation and collective efforts of teachers, students, parents, and all stakeholders, Govt. Keshab Chandra College will continue to reach newer heights of success, knowledge, and prestige.",
                    "Wishing the college continued success, honor, and prosperity. May Almighty Allah bless us all."
                ]
            }
        }
    };

    // --------------------------------------------------------------------------
    // 2. Comprehensive English Translation Dictionary
    // --------------------------------------------------------------------------
    var DICTIONARY = {
        // Branding & Header
        "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার": "Government of the People's Republic of Bangladesh",
        "সরকারি কেশব চন্দ্র কলেজ": "Govt. Keshab Chandra College",
        "সরকারি কেশব চন্দ্র কলেজ, ঝিনাইদহ": "Govt. Keshab Chandra College, Jhenaidah",
        "ঝিনাইদহ-৭৩০০": "Jhenaidah-7300",
        "প্রতিষ্ঠাকাল: ১৯৬০": "Established: 1960",
        "প্রতিষ্ঠাকাল:": "Est:",
        "ইআইআইএন: ১১৬৫৪৭": "EIIN: 116547",
        "কলেজ কোড: ৫৫০১": "College Code: 5501",
        "লগইন": "Login",
        "English": "English",
        "বাংলা": "বাংলা",

        // Main Navigation Menus
        "হোম": "Home",
        "প্রতিষ্ঠান সম্পর্কিত": "About College",
        "প্রতিষ্ঠান সম্পর্কে": "About Institution",
        "এমপিও ও জাতীয়করণের তথ্য": "MPO & Nationalization Info",
        "প্রতিষ্ঠাতা এবং দানকারীর তথ্য": "Founders & Donors Info",
        "ভূমির তথ্য": "Land & Property Info",
        "ভবন সংক্রান্ত তথ্য": "Building Info",
        "বিল্ডিং এবং রুম সংখ্যা": "Buildings & Rooms",
        "প্রশাসনিক তথ্য": "Administration",
        "অধ্যক্ষের কার্যালয়": "Principal's Office",
        "উপাধ্যক্ষের কার্যালয়": "Vice-Principal's Office",
        "শিক্ষক পরিষদের তথ্য": "Teachers' Council",
        "শিক্ষক-শিক্ষিকাদের তালিকা": "Faculty Members",
        "শিক্ষকবৃন্দের তালিকা": "Faculty Members",
        "কমর্চারীদের তালিকা": "Staff List",
        "প্রাক্তন শিক্ষক-শিক্ষিকার তালিকা": "Former Teachers",
        "একাডেমিক কাউন্সিল": "Academic Council",
        "একাডেমিক তথ্য": "Academic Info",
        "ছাত্র-ছাত্রীদের তালিকা": "Students List",
        "ছাত্র-ছাত্রীর তালিকা": "Student Directory",
        "উপবৃত্তি প্রাপ্ত ছাত্র-ছাত্রীদের তালিকা": "Stipend Students List",
        "উপবৃত্তি": "Stipend",
        "ছাত্র-ছাত্রীর উপস্থিতি": "Student Attendance",
        "পাঠ পরিকল্পনা": "Lesson Plan",
        "ক্লাস-রুটিন": "Class Routine",
        "ক্লাস রুটিন": "Class Routine",
        "কেন্দ্রীয় রুটিন": "Central Routine",
        "পরীক্ষার-রুটিন": "Exam Routine",
        "পরীক্ষার রুটিন": "Exam Routine",
        "পরীক্ষার আসন পরিকল্পনা": "Exam Seat Plan",
        "পরীক্ষার ফলাফল": "Exam Results",
        "পাবলিক পরীক্ষার ফলাফল": "Public Exam Results",
        "ভর্তির ফলাফল": "Admission Results",
        "শিক্ষা পঞ্জিকা": "Academic Calendar",
        "সিলেবাস": "Syllabus",
        "বুক লিস্ট": "Book List",
        "সাজেশন্স": "Suggestions",
        "লেকচার শীট": "Lecture Sheets",
        "বাৎসরিক ছুটির তালিকা": "Annual Holidays",
        "বাৎসরিক পরিকল্পনা": "Annual Plan",
        "ডিপার্টমেন্ট": "Departments",
        "বিভাগসমূহ": "Departments",
        "ইংরেজি": "English",
        "তথ্যাবলী": "Information",
        "সুবিধাসমূহ": "Facilities",
        "কম্পিউটার ল্যাব": "Computer Lab",
        "বিজ্ঞানাগার": "Science Labs",
        "মাল্টিমিডিিয়া শ্রেণীকক্ষ": "Multimedia Classrooms",
        "লাইব্রেরীর তথ্য": "Library Info",
        "হোস্টেলের তথ্য": "Hostel Info",
        "পরিচ্ছন্নতা, শরীরচর্চা": "Cleanliness & Sports",
        "স্যানিটেশন সংক্রান্ত তথ্য": "Sanitation Info",
        "কো-কারিকুলাম": "Co-Curriculum",
        "বিএনসিসির তথ্য": "BNCC Activities",
        "রোভার স্কাউট": "Rover Scout",
        "রোভার স্কাউটস": "Rover Scouts",
        "রেড ক্রিসেন্ট": "Red Crescent",
        "বিতর্ক ক্লাব": "Debate Club",
        "বাধন": "Badhon Blood Bank",
        "বাস্তুতত্ত্ব ক্লাব": "Ecology Club",
        "ক্যারিয়ার ক্লাব": "Career Club",
        "থিয়েটার": "Theatre Club",
        "ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠান": "Sports & Culture",
        "ডাউনলোড": "Downloads",
        "ম্যানুয়েল": "Manuals",
        "ই-বুক": "E-Books",
        "প্রকাশনা": "Publications",
        "বার্ষিক প্রতিবেদন": "Annual Report",
        "এনুয়াল রিপোর্ট": "Annual Report",
        "ফর্ম": "Forms",
        "ডিজিটাল ক্যাম্পাস": "Digital Campus",
        "যোগাযোগ": "Contact Us",
        "মেনু": "Menu",
        "মেনু নির্বাচন করুন": "Select Menu",

        // Notice & Ticker
        "সর্বশেষ নোটিশ :": "Latest Notice:",
        "সর্বশেষ নোটিশ": "Latest Notice",
        "সকল নোটিশ": "All Notices",
        "সকল": "All",
        "নোটিশ": "Notices",
        "নোটিশ বোর্ড": "Notice Board",
        "বিদ্যালয় নোটিশ": "College Notice",
        "বোর্ড নোটিশ": "Board Notice",

        // Speeches & Badges
        "অধ্যক্ষের বাণী": "Principal's Message",
        "উপাধ্যক্ষের বাণী": "Vice-Principal's Message",
        "অধ্যক্ষ": "Principal",
        "উপাধ্যক্ষ": "Vice-Principal",
        "প্রফেসর মোঃ মাসরুর-উল আলম": "Prof. Md. Masrur-Ul-Alam",
        "প্রফেসর মোঃ মিজানুর রহমান": "Prof. Md. Mizanur Rahman",
        "সম্পূর্ণ বাণী পড়ুন": "Read Full Message",
        "সম্পূর্ণ পড়ুন": "Read Full",
        "বাণী বিবরণ": "Message Details",
        "বন্ধ করুন": "Close",

        // Quick Menu
        "কুইক মেনু": "Quick Menu",
        "অনলাইন ভর্তি": "Online Admission",
        "অনলাইন ভর্তি আবেদন": "Online Admission Application",
        "বেতন পরিশোধ": "Fee Payment",
        "সনদ আবেদন": "Certificate Application",
        "ফলাফল": "Results",

        // Important Services & Links
        "গুরুত্বপূর্ণ লিঙ্ক ও সেবা": "Important Links & Services",
        "কলেজ প্রশাসন": "College Administration",
        "অভ্যন্তরীণ ই-সেবা": "Internal E-Services",
        "ই-সেবা লিঙ্ক": "E-Service Links",
        "অধ্যক্ষবৃন্দের কার্যকাল": "Principals' Tenures",
        "অর্নার বোর্ড": "Honor Board",
        "ইএমআইএস": "EMIS Portal",
        "কিশোর বাতায়ন": "Kishore Batayan",
        "মুক্তপাঠ": "Muktopaath",
        "শিক্ষক বাতায়ন": "Teachers' Portal",
        "মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ": "Secondary & Higher Ed. Div.",
        "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর": "Directorate of Secondary & Higher Ed.",
        "শিক্ষা মন্ত্রণালয়": "Ministry of Education",
        "যশোর শিক্ষাবোর্ড": "BISE Jessore",
        "আরো দেখুন": "See More",

        // Sidebar & Media
        "জাতীয় সংগীত": "National Anthem",
        "প্লে করুন": "Play",
        "পজ করুন": "Pause",
        "গুরুত্বপূর্ণ লিংক": "Important Links",
        "জরুরি হটলাইন": "Emergency Hotline",
        "ফটো গ্যালারি": "Photo Gallery",
        "ফটো গ্যালারী": "Photo Gallery",
        "ভিডিও গ্যালারি": "Video Gallery",
        "ভিডিও গ্যালারী": "Video Gallery",
        "অবস্থান ও গুগল ম্যাপ": "Location & Google Maps",
        "আরও ছবি": "More Photos",
        "আরও ভিডিও": "More Videos",

        // Footer & Credits
        "প্রয়োজনীয় লিংক": "Quick Links",
        "প্রয়োজনীয় লিংক": "Quick Links",
        "একাডেমিক ও সেবা": "Academic & Services",
        "যোগাযোগের তথ্য": "Contact Information",
        "শিক্ষক ও স্টাফ লগইন": "Teacher & Staff Login",
        "হোম পেজ": "Home Page",
        "নোটিশ বোর্ড": "Notice Board",
        "শিক্ষকবৃন্দের তালিকা": "Faculty List",
        "শিক্ষার্থীদের তালিকা": "Students List",
        "যোগাযোগের ঠিকানা": "Contact Information",
        "ক্লাস রুটিন": "Class Routine",
        "পরীক্ষার রুটিন": "Exam Routine",
        "পরীক্ষার ফলাফল": "Exam Results",
        "এডমিট কার্ড": "Admit Card",
        "অনলাইন ভর্তি আবেদন": "Online Admission",
        "হটলাইন / হেল্পডেস্ক": "Hotline / Helpdesk",
        "অফিসিয়াল ইমেইল": "Official Email",
        "সর্বস্বত্ব সংরক্ষিত": "All Rights Reserved"
    };

    // --------------------------------------------------------------------------
    // 3. Language Switching Engine
    // --------------------------------------------------------------------------
    var currentLang = localStorage.getItem('kcc_site_lang') || 'bn';

    window.toggleLanguage = function(e) {
        if (e && e.preventDefault) e.preventDefault();
        var nextLang = (currentLang === 'en') ? 'bn' : 'en';
        window.setLanguage(nextLang);
        return false;
    };

    window.setLanguage = function(lang) {
        currentLang = lang;
        localStorage.setItem('kcc_site_lang', lang);
        document.documentElement.lang = lang;

        var isEn = (lang === 'en');

        // A. Update all language button labels
        document.querySelectorAll('.kc-lang-label, #kc-lang-label, .kcc-lang-label, #kcc-floating-lang-text').forEach(function(el) {
            el.textContent = isEn ? 'বাংলা' : 'English';
        });

        var deskBtn = document.getElementById('kc-lang-toggle-btn') || document.getElementById('kcc-lang-btn-desk');
        if (deskBtn) {
            deskBtn.title = isEn ? 'বাংলা ভার্সন দেখুন' : 'Switch to English Version';
        }

        var loginLabel = document.querySelector('.kcc-login-label');
        if (loginLabel) {
            loginLabel.textContent = isEn ? 'Login' : 'লগইন';
        }

        // B. Update Excerpts and Buttons
        var pExcerpt = document.querySelector('#kc-speech-principal-box .kc-speech-excerpt');
        if (pExcerpt) {
            pExcerpt.textContent = isEn ?
                "Truth does not depend on us; rather, we depend on the truth. Believing in truth and keeping pace with the developed world, Govt. Keshab Chandra College is committed to enhancing education..." :
                "আমাদের উপর সত্য নির্ভরশীল নয়, সত্যের উপর আমরা নির্ভরশীল। তাই সত্যের উপর বিশ্বাস করে এবং উন্নত বিশ্বের সাথে তাল মিলিয়ে স্মার্ট বাংলাদেশ গঠনের লক্ষে শিক্ষার গুণগতমান বৃদ্ধির প্রত্যয়ে সরকারি কেশব চন্দ্র কলেজ সামনের দিকে অগ্রসর হোক...";
        }

        var vpExcerpt = document.querySelector('#kc-speech-vp-box .kc-speech-excerpt');
        if (vpExcerpt) {
            vpExcerpt.textContent = isEn ?
                "Bismillahir Rahmanir Rahim. Warmest greetings and congratulations to all students, guardians, teachers, officers, staff, and well-wishers of Govt. Keshab Chandra College, Jhenaidah. Education is the foremost driving force..." :
                "বিসমিল্লাহির রাহমানির রাহিম। সরকারি কেশব চন্দ্র কলেজ, ঝিনাইদহের সকল শিক্ষার্থী, অভিভাবক, শিক্ষক, কর্মকর্তা-কর্মচারী এবং শুভানুধ্যায়ীদের আন্তরিক শুভেচ্ছা ও অভিনন্দন। শিক্ষা একটি জাতির অগ্রগতি ও সমৃদ্ধির প্রধান চালিকাশক্তি...";
        }

        document.querySelectorAll('.kc-bani-btn span').forEach(function(sp) {
            sp.textContent = isEn ? 'Read Full' : 'সম্পূর্ণ পড়ুন';
        });

        document.querySelectorAll('.kc-bani-header-badge').forEach(function(b) {
            b.textContent = isEn ? 'Message' : 'বার্তা';
        });

        var pTitleSpan = document.querySelector('#kc-principal-card .kc-bani-header-left span');
        if (pTitleSpan) pTitleSpan.textContent = isEn ? "Principal's Message" : "অধ্যক্ষের বাণী";

        var vpTitleSpan = document.querySelector('#kc-vp-card .kc-bani-header-left span');
        if (vpTitleSpan) vpTitleSpan.textContent = isEn ? "Vice Principal's Message" : "উপাধ্যক্ষের বাণী";

        var pBadge = document.querySelector('#kc-principal-card .kc-bani-badge-text');
        if (pBadge) pBadge.textContent = isEn ? "Principal" : "অধ্যক্ষ";

        var vpBadge = document.querySelector('#kc-vp-card .kc-bani-badge-text');
        if (vpBadge) vpBadge.textContent = isEn ? "Vice Principal" : "উপাধ্যক্ষ";

        // C. Update active modal if already open
        var modal = document.getElementById('kc-speech-modal');
        if (modal && (modal.classList.contains('active') || modal.classList.contains('kc-modal-show'))) {
            var activeSpeaker = modal.getAttribute('data-speaker') || 'vp';
            window.openSpeechModal(activeSpeaker);
        }

        // D. Footer Specific Bilingual Updates
        var footerAddr = document.querySelector('.def-address-text');
        if (footerAddr) {
            footerAddr.textContent = isEn ? 'College Road, Sadar, Dinajpur-1200' : 'কলেজ রোড, সদর, দিনাজপুর-১২০০';
        }
        var footerCrSub = document.querySelector('.def-cr-sub');
        if (footerCrSub) {
            footerCrSub.textContent = isEn ? 'All Rights Reserved' : 'সর্বস্বত্ব সংরক্ষিত';
        }
        var footerLoginLinks = document.querySelectorAll('.def-login-link-highlight');
        footerLoginLinks.forEach(function(l) {
            l.textContent = isEn ? 'Teacher & Staff Login' : 'শিক্ষক ও স্টাফ লগইন';
        });
        var headerLabels = document.querySelectorAll('.def-header-label');
        if (headerLabels.length >= 3) {
            headerLabels[0].textContent = isEn ? 'Quick Links' : 'প্রয়োজনীয় লিংক';
            headerLabels[1].textContent = isEn ? 'Academic & Services' : 'একাডেমিক ও সেবা';
            headerLabels[2].textContent = isEn ? 'Contact Info' : 'যোগাযোগের তথ্য';
        }
        var phoneVal = document.querySelector('a[href^="tel:"]');
        if (phoneVal) {
            phoneVal.textContent = isEn ? '+880 1700-000000' : '+৮৮০ ১৭০০-০০০০০০';
        }

        // E. Walk DOM text nodes and translate
        walkTextNodes(document.body, isEn);
    };

    function walkTextNodes(rootNode, isEn) {
        var walker = document.createTreeWalker(
            rootNode,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    var parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    var tag = parent.tagName.toLowerCase();
                    if (tag === 'script' || tag === 'style' || tag === 'noscript' || tag === 'svg' || tag === 'path') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    if (parent.closest('#kc-speech-modal')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );

        var node;
        while ((node = walker.nextNode())) {
            var val = node.nodeValue.trim();
            if (!val) continue;

            if (isEn) {
                if (DICTIONARY[val]) {
                    if (node._orig_bn === undefined) {
                        node._orig_bn = node.nodeValue;
                    }
                    node.nodeValue = node.nodeValue.replace(val, DICTIONARY[val]);
                } else {
                    for (var bnKey in DICTIONARY) {
                        if (bnKey.length >= 4 && val.indexOf(bnKey) !== -1) {
                            if (node._orig_bn === undefined) {
                                node._orig_bn = node.nodeValue;
                            }
                            node.nodeValue = node.nodeValue.split(bnKey).join(DICTIONARY[bnKey]);
                            break;
                        }
                    }
                }
            } else {
                if (node._orig_bn !== undefined) {
                    node.nodeValue = node._orig_bn;
                }
            }
        }

        // Refresh slider translations (counter, badges, buttons)
        if (window.refreshSliderLanguage) {
            try { window.refreshSliderLanguage(); } catch(e){}
        }
        if (window.refreshNoticeLanguage) {
            try { window.refreshNoticeLanguage(); } catch(e){}
        }
    }

    window.setHeaderCampusImage = function(url) {
        if (!url) return;
        var img = document.getElementById('kcc-header-campus-img');
        if (img) {
            img.src = url;
            try { localStorage.setItem('kcc_header_campus_img', url); } catch(e){}
        }
    };

    // --------------------------------------------------------------------------
    // 4. Modal Popup Handlers
    // --------------------------------------------------------------------------
    window.openSpeechModal = function(type, e) {
        if (e && e.preventDefault) e.preventDefault();
        var modal = document.getElementById('kc-speech-modal');
        if (!modal) return false;

        var isEn = (currentLang === 'en');
        var data = SPEECHES[type] ? (isEn ? SPEECHES[type].en : SPEECHES[type].bn) : null;
        if (!data) return false;

        modal.setAttribute('data-speaker', type);

        var titleElem = document.getElementById('kc-modal-title');
        var nameElem = document.getElementById('kc-modal-name');
        var badgeElem = document.getElementById('kc-modal-badge');
        var instElem = document.getElementById('kc-modal-inst');
        var imgElem = document.getElementById('kc-modal-img');
        var contentElem = document.getElementById('kc-modal-content');
        var closeBtn = document.getElementById('kc-modal-footer-close-btn');

        if (titleElem) titleElem.textContent = data.title;
        if (nameElem) nameElem.textContent = data.name;
        if (badgeElem) badgeElem.textContent = data.badge;
        if (instElem) instElem.textContent = data.institution;
        if (imgElem) {
            imgElem.src = data.image;
            imgElem.alt = data.name;
        }
        if (closeBtn) closeBtn.textContent = isEn ? 'Close' : 'বন্ধ করুন';

        if (contentElem) {
            var html = '';
            for (var i = 0; i < data.paragraphs.length; i++) {
                html += '<p>' + data.paragraphs[i] + '</p>';
            }
            contentElem.innerHTML = html;
        }

        modal.classList.add('kc-modal-show');
        modal.classList.add('active');
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        return false;
    };

    window.closeSpeechModal = function() {
        var modal = document.getElementById('kc-speech-modal');
        if (!modal) return;
        modal.classList.remove('kc-modal-show');
        modal.classList.remove('active');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };


    // --------------------------------------------------------------------------
    // 4.5. ULTRA-HD CRISP 3D MOSAIC ASSEMBLY SLIDER SYSTEM (ZERO BLUR, 100% SHARP)
    // --------------------------------------------------------------------------
    function initFragmentSlider() {
        var wrapper = document.getElementById('kc-slider-wrapper');
        var mainImg = document.getElementById('kc-slider-main-img');
        var prevBtn = document.getElementById('kc-slider-prev-btn');
        var nextBtn = document.getElementById('kc-slider-next-btn');
        var captionText = document.getElementById('kc-slider-caption-text');
        var captionBadge = document.getElementById('kc-slider-badge');
        var thumbItems = document.querySelectorAll('.ad-thumb-list li');
        var progressBar = document.getElementById('kc-slider-progress-bar');
        var counterEl = document.getElementById('kc-slider-counter');
        var playPauseBtn = document.getElementById('kc-slider-playpause-btn');
        var fullscreenBtn = document.getElementById('kc-slider-fullscreen-btn');
        var ctaBtn = document.getElementById('kc-slider-cta-btn');

        // Lightbox Elements
        var lightbox = document.getElementById('kc-slider-lightbox');
        var lbImg = document.getElementById('kc-lightbox-img');
        var lbTitle = document.getElementById('kc-lightbox-title');
        var lbBadge = document.getElementById('kc-lightbox-badge');
        var lbCounter = document.getElementById('kc-lightbox-counter');
        var lbCloseBtn = document.getElementById('kc-lightbox-close-btn');
        var lbPrevBtn = document.getElementById('kc-lightbox-prev-btn');
        var lbNextBtn = document.getElementById('kc-lightbox-next-btn');
        var lbBackdrop = document.getElementById('kc-lightbox-backdrop');

        if (!wrapper || !mainImg) return;

        // Collect slides from DOM
        var slides = [];
        var thumbLinks = document.querySelectorAll('.ad-thumb-list li a');
        if (thumbLinks.length > 0) {
            thumbLinks.forEach(function(link, idx) {
                var img = link.querySelector('img');
                var title = '';
                if (img) {
                    title = img.getAttribute('title') || img.getAttribute('alt') || '';
                }
                slides.push({
                    src: link.getAttribute('href'),
                    title: title || ('ছবি - ' + (idx + 1))
                });
            });
        }

        if (slides.length === 0) {
            slides = [
                { src: "https://cdn.learnerp.bd/74/uploads/irG7fGwAmMoJYySXXZxpBoOtE2xQHKqoLIp5fgy8.jpg", title: "প্রাণিবিদ্যা বিভাগের পক্ষ থেকে অধ্যক্ষ মহোদয় কে ফুলেল্ল শুভেচ্ছা" },
                { src: "https://cdn.learnerp.bd/74/uploads/uRq77JJR6J6CcDm0q5p7uXg457s4l9h0eKzQ0y4r.jpg", title: "বাংলা নববর্ষ র‍্যালি" },
                { src: "https://cdn.learnerp.bd/74/uploads/KlaP9arWdlm5CxsyO9n6r9l3m9o5p7uX.jpg", title: "শিক্ষক পরিষদ" },
                { src: "https://cdn.learnerp.bd/74/uploads/Sd3O6yUHIOPwJmS0q5p7uX.jpg", title: "জুলাই গণঅভ্যুত্থান দিবস উপলক্ষে জুলাই স্মৃতিস্তম্ভে পুস্পস্তবক অর্পন" },
                { src: "https://cdn.learnerp.bd/74/uploads/KtcDBJlij5frkpt0q5p7uX.jpg", title: "পবিত্র ঈদ-ই মিলাদুন্নবী(সাঃ) উদযাপন" },
                { src: "https://cdn.learnerp.bd/74/uploads/fU2dU8PBctEFAJz0q5p7uX.jpg", title: "শিক্ষক দিবসের র‍্যালি" },
                { src: "https://cdn.learnerp.bd/74/uploads/fVahPqY6myAOapK0q5p7uX.jpg", title: "অধ্যক্ষ ও উপাধ্যক্ষ মহোদয়ের নেতৃত্যে পরিচ্ছন্নতা অভিযান" },
                { src: "https://cdn.learnerp.bd/74/uploads/cYNT736E4c8ezVRp9WhsiVI55wAQEWpvAQkqmWig.jpg", title: "অধ্যক্ষ মহোদয়কে ফুলেল শুভেচ্ছা" }
            ];
        }

        var currentIndex = 0;
        var isAnimating = false;
        var autoplayTimer = null;
        var AUTOPLAY_DELAY = 5500;
        var isPaused = false;
        var userPausedManually = false;
        var progressAnimFrame = null;
        var progressStartTime = 0;
        var progressElapsed = 0;

        // Preload all high-resolution slides into browser cache
        slides.forEach(function(s) {
            var img = new Image();
            img.src = s.src;
        });

        function formatNumber(n, lang) {
            var str = (n < 10 ? '0' : '') + n;
            if (lang === 'bn') {
                var bnDigits = {'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
                return str.split('').map(function(d){ return bnDigits[d] || d; }).join('');
            }
            return str;
        }

        function updateSlideCounter(idx) {
            var isBn = (typeof currentLang === 'undefined' || currentLang !== 'en');
            var curStr = formatNumber(idx + 1, isBn ? 'bn' : 'en');
            var totalStr = formatNumber(slides.length, isBn ? 'bn' : 'en');
            var counterText = curStr + ' / ' + totalStr;
            if (counterEl) counterEl.textContent = counterText;
            if (lbCounter) lbCounter.textContent = counterText;
        }

        function triggerKenBurns() {
            if (!mainImg) return;
            mainImg.classList.remove('active-burns');
            void mainImg.offsetWidth; // Force CSS reflow
            mainImg.classList.add('active-burns');
        }

        function updateThumbnails(idx) {
            if (!thumbItems || thumbItems.length === 0) return;
            thumbItems.forEach(function(li, i) {
                if (i === idx) {
                    li.classList.add('ad-active');
                    try {
                        var thumbsContainer = document.querySelector('.ad-thumbs');
                        if (thumbsContainer) {
                            var offset = li.offsetLeft - (thumbsContainer.clientWidth / 2) + (li.clientWidth / 2);
                            thumbsContainer.scrollTo({ left: offset, behavior: 'smooth' });
                        }
                    } catch(err) {}
                } else {
                    li.classList.remove('ad-active');
                }
            });
        }

        function updateCaption(slide) {
            if (captionText) {
                captionText.style.opacity = '0';
                captionText.style.transform = 'translateY(8px)';
                setTimeout(function() {
                    var isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
                    if (captionBadge) {
                        captionBadge.textContent = isEn ? 'Photo' : 'ছবি';
                    }
                    if (lbBadge) {
                        lbBadge.textContent = isEn ? 'Photo' : 'ছবি';
                    }
                    captionText.textContent = slide.title;
                    captionText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    captionText.style.opacity = '1';
                    captionText.style.transform = 'translateY(0)';
                }, 180);
            }
            updateSlideCounter(currentIndex);
        }

        // Progress Bar System
        function startProgress(startOffset) {
            if (!progressBar) return;
            if (progressAnimFrame) cancelAnimationFrame(progressAnimFrame);
            progressStartTime = performance.now() - (startOffset || 0);

            function step(now) {
                if (isPaused) return;
                progressElapsed = now - progressStartTime;
                var pct = Math.min(100, (progressElapsed / AUTOPLAY_DELAY) * 100);
                progressBar.style.width = pct + '%';
                if (pct < 100) {
                    progressAnimFrame = requestAnimationFrame(step);
                }
            }
            progressAnimFrame = requestAnimationFrame(step);
        }

        function stopProgress() {
            if (progressAnimFrame) {
                cancelAnimationFrame(progressAnimFrame);
                progressAnimFrame = null;
            }
        }

        function resetProgress() {
            stopProgress();
            progressElapsed = 0;
            if (progressBar) progressBar.style.width = '0%';
        }

        // 3D Ultra-HD Crisp Mosaic Fragment Assembly
        function assembleTransition(targetIndex, direction) {
            if (isAnimating) return;
            if (targetIndex === currentIndex) return;

            isAnimating = true;
            resetProgress();
            var targetSlide = slides[targetIndex];

            // Use exact integer wrapper dimensions
            var W = Math.round(wrapper.clientWidth) || 800;
            var H = Math.round(wrapper.clientHeight) || 410;

            // Crisp HD Grid:
            // Desktop: 16 columns x 10 rows = 160 crystal-clear fragments
            // Mobile: 10 columns x 6 rows = 60 fragments
            var isMobile = (W < 650);
            var cols = isMobile ? 10 : 16;
            var rows = isMobile ? 6 : 10;
            var tileW = W / cols;
            var tileH = H / rows;

            var oldStage = wrapper.querySelector('.kc-mosaic-stage');
            if (oldStage) oldStage.remove();

            var stage = document.createElement('div');
            stage.className = 'kc-mosaic-stage';
            stage.style.width = W + 'px';
            stage.style.height = H + 'px';

            var originX = (direction === 'prev') ? 0 : (direction === 'next' ? cols : cols / 2);
            var originY = rows / 2;
            var maxDist = Math.hypot(cols, rows);

            var fragDoc = document.createDocumentFragment();
            var pieceElements = [];

            for (var r = 0; r < rows; r++) {
                for (var c = 0; c < cols; c++) {
                    var piece = document.createElement('div');
                    piece.className = 'kc-fragment-piece';

                    // Integer pixel grid: Guaranteed zero subpixel gaps or blurry resampling
                    var leftPx = Math.round(c * tileW);
                    var topPx = Math.round(r * tileH);
                    var widthPx = Math.round((c + 1) * tileW) - leftPx;
                    var heightPx = Math.round((r + 1) * tileH) - topPx;

                    piece.style.left = leftPx + 'px';
                    piece.style.top = topPx + 'px';
                    piece.style.width = widthPx + 'px';
                    piece.style.height = heightPx + 'px';
                    piece.style.backgroundImage = 'url("' + targetSlide.src + '")';
                    piece.style.backgroundSize = W + 'px ' + H + 'px';
                    piece.style.backgroundPosition = (-leftPx) + 'px ' + (-topPx) + 'px';

                    // NO BLUR FILTER - 100% crisp, razor-sharp high-definition rendering
                    // Natural 3D depth translation without extreme texture squashing
                    var dx = (Math.random() - 0.5) * (W * 0.65);
                    var dy = (Math.random() - 0.5) * (H * 0.65);
                    var dz = Math.random() * 320 + 80;
                    var rx = (Math.random() - 0.5) * 60;
                    var ry = (Math.random() - 0.5) * 60;
                    var rz = (Math.random() - 0.5) * 30;
                    var sc = 0.88 + Math.random() * 0.12; // Crisp scale range: 0.88 to 1.0 (Zero blur!)

                    var dist = Math.hypot(c - originX, r - originY);
                    var delay = (dist / maxDist) * 240 + (Math.random() * 60);

                    piece.style.transform = 'translate3d(' + dx.toFixed(1) + 'px, ' + dy.toFixed(1) + 'px, ' + dz.toFixed(1) + 'px) ' +
                                            'rotateX(' + rx.toFixed(1) + 'deg) rotateY(' + ry.toFixed(1) + 'deg) rotateZ(' + rz.toFixed(1) + 'deg) ' +
                                            'scale(' + sc.toFixed(2) + ')';
                    piece.style.opacity = '0';
                    piece.style.transitionDelay = delay.toFixed(1) + 'ms';

                    fragDoc.appendChild(piece);
                    pieceElements.push(piece);
                }
            }

            stage.appendChild(fragDoc);
            wrapper.appendChild(stage);

            currentIndex = targetIndex;
            updateThumbnails(targetIndex);
            updateCaption(targetSlide);

            // Double RAF guarantees hardware-accelerated CSS transition starts smoothly
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    for (var i = 0; i < pieceElements.length; i++) {
                        var p = pieceElements[i];
                        p.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';
                        p.style.opacity = '1';
                    }
                });
            });

            // As elements assemble into place, smoothly dissolve hairline borders
            setTimeout(function() {
                for (var i = 0; i < pieceElements.length; i++) {
                    pieceElements[i].classList.add('assembled');
                }
            }, 550);

            // Seamlessly swap main image at transition completion and start Ken-Burns
            setTimeout(function() {
                mainImg.src = targetSlide.src;
                triggerKenBurns();
                if (stage && stage.parentNode) {
                    stage.parentNode.removeChild(stage);
                }
                isAnimating = false;

                // Resume progress if not paused
                if (!isPaused) {
                    startProgress();
                }
            }, 820);
        }

        function nextSlide() {
            var nextIdx = (currentIndex + 1) % slides.length;
            assembleTransition(nextIdx, 'next');
        }

        function prevSlide() {
            var prevIdx = (currentIndex - 1 + slides.length) % slides.length;
            assembleTransition(prevIdx, 'prev');
        }

        function startAutoplayTimer(remaining) {
            stopAutoplayTimer();
            var delay = remaining || AUTOPLAY_DELAY;
            autoplayTimer = setTimeout(function() {
                nextSlide();
                startAutoplayTimer();
            }, delay);
        }

        function stopAutoplayTimer() {
            if (autoplayTimer) {
                clearTimeout(autoplayTimer);
                autoplayTimer = null;
            }
        }

        function setPlayPauseState(paused, manual) {
            isPaused = paused;
            if (manual !== undefined) userPausedManually = manual;

            var pauseIcon = playPauseBtn ? playPauseBtn.querySelector('.kc-icon-pause') : null;
            var playIcon = playPauseBtn ? playPauseBtn.querySelector('.kc-icon-play') : null;

            if (isPaused) {
                stopAutoplayTimer();
                stopProgress();
                if (pauseIcon && playIcon) {
                    pauseIcon.style.display = 'none';
                    playIcon.style.display = 'block';
                }
            } else {
                var remaining = Math.max(500, AUTOPLAY_DELAY - progressElapsed);
                startAutoplayTimer(remaining);
                startProgress(progressElapsed);
                if (pauseIcon && playIcon) {
                    pauseIcon.style.display = 'block';
                    playIcon.style.display = 'none';
                }
            }
        }

        function restartAutoplay() {
            resetProgress();
            stopAutoplayTimer();
            if (!userPausedManually) {
                setPlayPauseState(false, false);
            }
        }

        // Navigation Arrows
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                restartAutoplay();
                nextSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                restartAutoplay();
                prevSlide();
            });
        }

        // Thumbnails Click
        if (thumbLinks.length > 0) {
            thumbLinks.forEach(function(link, index) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    restartAutoplay();
                    var dir = (index > currentIndex) ? 'next' : 'prev';
                    assembleTransition(index, dir);
                    return false;
                });
            });
        }

        // Play / Pause Toggle Button
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', function(e) {
                e.preventDefault();
                setPlayPauseState(!isPaused, !isPaused);
            });
        }

        // Lightbox Functions
        function openLightbox(idx) {
            if (!lightbox || !lbImg) return;
            var s = slides[idx];
            lbImg.src = s.src;
            if (lbTitle) lbTitle.textContent = s.title;
            updateSlideCounter(idx);
            lightbox.style.display = 'flex';
            requestAnimationFrame(function() {
                lightbox.classList.add('kc-lightbox-open');
            });
            setPlayPauseState(true, false);
        }

        function closeLightbox() {
            if (!lightbox) return;
            lightbox.classList.remove('kc-lightbox-open');
            setTimeout(function() {
                lightbox.style.display = 'none';
            }, 300);
            if (!userPausedManually) {
                setPlayPauseState(false, false);
            }
        }

        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', function(e) {
                e.preventDefault();
                openLightbox(currentIndex);
            });
        }

        if (ctaBtn) {
            ctaBtn.addEventListener('click', function(e) {
                e.preventDefault();
                openLightbox(currentIndex);
            });
        }

        if (lbCloseBtn) {
            lbCloseBtn.addEventListener('click', function(e) {
                e.preventDefault();
                closeLightbox();
            });
        }

        if (lbBackdrop) {
            lbBackdrop.addEventListener('click', function(e) {
                closeLightbox();
            });
        }

        if (lbNextBtn) {
            lbNextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                var nextIdx = (currentIndex + 1) % slides.length;
                assembleTransition(nextIdx, 'next');
                lbImg.src = slides[nextIdx].src;
                if (lbTitle) lbTitle.textContent = slides[nextIdx].title;
            });
        }

        if (lbPrevBtn) {
            lbPrevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                var prevIdx = (currentIndex - 1 + slides.length) % slides.length;
                assembleTransition(prevIdx, 'prev');
                lbImg.src = slides[prevIdx].src;
                if (lbTitle) lbTitle.textContent = slides[prevIdx].title;
            });
        }

        // Keyboard Controls
        window.addEventListener('keydown', function(e) {
            if (lightbox && lightbox.classList.contains('kc-lightbox-open')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowRight') {
                    if (lbNextBtn) lbNextBtn.click();
                } else if (e.key === 'ArrowLeft') {
                    if (lbPrevBtn) lbPrevBtn.click();
                }
            }
        });

        // Mobile Touch Swipe Support
        var touchStartX = 0;
        var touchStartY = 0;
        wrapper.addEventListener('touchstart', function(e) {
            if (e.touches && e.touches[0]) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }
            if (!userPausedManually) setPlayPauseState(true, false);
        }, { passive: true });

        wrapper.addEventListener('touchend', function(e) {
            if (e.changedTouches && e.changedTouches[0]) {
                var diffX = e.changedTouches[0].clientX - touchStartX;
                var diffY = e.changedTouches[0].clientY - touchStartY;
                if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX < 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                }
            }
            if (!userPausedManually) setPlayPauseState(false, false);
        }, { passive: true });

        // Hover Pause / Leave Resume
        wrapper.addEventListener('mouseenter', function() {
            if (!userPausedManually) {
                setPlayPauseState(true, false);
            }
        });

        wrapper.addEventListener('mouseleave', function() {
            if (!userPausedManually) {
                setPlayPauseState(false, false);
            }
        });

        // Expose language refresh hook
        window.refreshSliderLanguage = function() {
            updateSlideCounter(currentIndex);
            var isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
            if (captionBadge) captionBadge.textContent = isEn ? 'Photo' : 'ছবি';
            if (lbBadge) lbBadge.textContent = isEn ? 'Photo' : 'ছবি';
            var ctaSpan = document.querySelector('#kc-slider-cta-btn .kc-cta-text');
            if (ctaSpan) {
                ctaSpan.textContent = isEn ? 'View Fullscreen' : 'ফুলস্ক্রিন দেখুন';
            }
        };

        // Initialize First Slide
        updateThumbnails(0);
        updateSlideCounter(0);
        triggerKenBurns();
        startProgress();
        startAutoplayTimer();
    }

    // --------------------------------------------------------------------------
    // --------------------------------------------------------------------------
    // 4.8. Smooth Auto-scrolling Notice Board Engine (Bottom-to-Top Ticker)
    // --------------------------------------------------------------------------
    function initNoticeBoardTicker() {
        var viewport = document.getElementById('kc-notice-viewport');
        var scroller = document.getElementById('kc-notice-scroller');
        var list = document.getElementById('kc-notice-list');

        if (!viewport || !scroller || !list) return;

        // Clone notice list to achieve continuous infinite vertical loop
        var cloneList = list.cloneNode(true);
        cloneList.id = 'kc-notice-list-clone';
        scroller.appendChild(cloneList);

        var scrollPos = 0;
        var speed = 0.55; // 60 FPS smooth readable speed
        var isPaused = false;
        var animFrame = null;

        function step() {
            if (!isPaused) {
                scrollPos += speed;
                var singleHeight = list.offsetHeight;
                if (singleHeight > 0 && scrollPos >= singleHeight) {
                    scrollPos = 0; // seamless loop wrap
                }
                scroller.style.transform = 'translate3d(0, -' + scrollPos + 'px, 0)';
            }
            animFrame = requestAnimationFrame(step);
        }

        animFrame = requestAnimationFrame(step);

        // Pause on mouse hover so users can easily read & click
        viewport.addEventListener('mouseenter', function() {
            isPaused = true;
        });

        viewport.addEventListener('mouseleave', function() {
            isPaused = false;
        });

        // Touch support for mobile
        viewport.addEventListener('touchstart', function() {
            isPaused = true;
        }, { passive: true });

        viewport.addEventListener('touchend', function() {
            isPaused = false;
        }, { passive: true });

        // Expose language refresh hook for notices
        window.refreshNoticeLanguage = function() {
            var isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
            var title = document.querySelector('.kc-notice-title');
            if (title) title.textContent = isEn ? 'Notice Board' : 'নোটিশ বোর্ড';

            var badge = document.querySelector('.kc-notice-badge');
            if (badge) badge.textContent = isEn ? 'Latest' : 'সর্বশেষ তথ্য';

            var hBtn = document.querySelector('.kc-notice-header-all-btn span');
            if (hBtn) hBtn.textContent = isEn ? 'All Notices' : 'সকল নোটিশ';

            var fBtn = document.querySelector('.kc-notice-footer-btn span');
            if (fBtn) fBtn.textContent = isEn ? 'View All Notices' : 'সকল নোটিশ দেখুন';

            var cText = document.querySelector('.kc-notice-count-text');
            if (cText) cText.textContent = isEn ? 'Live Notices • Hover to Pause' : 'নোটিশ চলমান • মাউস রাখলে থামবে';

            document.querySelectorAll('.kc-new-badge').forEach(function(nb) {
                nb.innerHTML = isEn ? '<span class="kc-new-dot"></span> NEW' : '<span class="kc-new-dot"></span> নতুন';
            });
        };
    }

    // 5. Initialize All Listeners
    // --------------------------------------------------------------------------
    
    // --------------------------------------------------------------------------
    // 4.9. Professional 2-Sided Notice Hover Preview Flyout Popover Engine
    // --------------------------------------------------------------------------
    function initNoticeHoverPopover() {
        var popover = document.getElementById('kc-notice-popover');
        var popCard = document.getElementById('kc-popover-card');
        var backdrop = document.getElementById('kc-popover-backdrop');
        var closeBtn = document.getElementById('kc-popover-close-btn');

        if (!popover || !popCard) return;

        // Popover DOM Element References
        var fileTypePill = document.getElementById('kc-popover-file-type-pill');
        var fileSize = document.getElementById('kc-popover-file-size');
        var previewImg = document.getElementById('kc-popover-preview-img');
        var zoomLink = document.getElementById('kc-popover-zoom-link');
        var fileName = document.getElementById('kc-popover-file-name');
        var catPill = document.getElementById('kc-popover-category-pill');
        var dateText = document.getElementById('kc-popover-date-text');
        var refText = document.getElementById('kc-popover-ref-text');
        var title = document.getElementById('kc-popover-title');
        var detailsText = document.getElementById('kc-popover-details-text');
        var linkFull = document.getElementById('kc-popover-link-full');
        var btnDownload = document.getElementById('kc-popover-btn-download');

        var hoverTimer = null;
        var leaveTimer = null;
        var activeItem = null;
        var isMobile = function() { return window.innerWidth <= 768; };

        function showPopover(item) {
            if (!item) return;
            activeItem = item;

            // Extract rich metadata from notice item
            var noticeTitle = item.getAttribute('data-title') || (item.querySelector('.kc-notice-text') ? item.querySelector('.kc-notice-text').textContent : '');
            var noticeDate = item.getAttribute('data-date') || '০৫/১১/২০২৬';
            var noticeCategory = item.getAttribute('data-category') || 'নোটিশ';
            var categoryColor = item.getAttribute('data-category-color') || '#005a2b';
            var noticeRef = item.getAttribute('data-ref') || 'স্মারক নং: সআমক/২০২৬';
            var fileType = (item.getAttribute('data-file-type') || 'pdf').toLowerCase();
            var noticeFileName = item.getAttribute('data-file-name') || 'Notice-File.pdf';
            var noticeFileSize = item.getAttribute('data-file-size') || '২.০ মেগাবাইট';
            var previewUrl = item.getAttribute('data-preview-url') || 'assets/images/notice-pdf-preview.svg';
            var noticeDetails = item.getAttribute('data-details') || 'বিস্তারিত তথ্য দেখতে সম্পূর্ণ নোটিশ বাটনে ক্লিক করুন।';
            var noticeLink = item.getAttribute('data-link') || (item.querySelector('a') ? item.querySelector('a').getAttribute('href') : '#');

            // Populate Popover Content
            if (title) title.textContent = noticeTitle;
            if (dateText) dateText.textContent = noticeDate;
            if (refText) refText.textContent = noticeRef;
            if (detailsText) detailsText.textContent = noticeDetails;
            if (fileName) fileName.textContent = noticeFileName;
            if (fileSize) fileSize.textContent = noticeFileSize;

            if (catPill) {
                catPill.textContent = noticeCategory;
                catPill.style.color = categoryColor;
                catPill.style.borderColor = categoryColor;
                catPill.style.backgroundColor = categoryColor + '18';
            }

            if (fileTypePill) {
                if (fileType === 'pdf') {
                    fileTypePill.textContent = 'PDF DOCUMENT';
                    fileTypePill.className = 'kc-popover-file-type-pill';
                } else {
                    fileTypePill.textContent = 'IMAGE FLYER';
                    fileTypePill.className = 'kc-popover-file-type-pill type-img';
                }
            }

            if (previewImg) {
                previewImg.src = previewUrl;
                previewImg.alt = noticeTitle;
            }

            if (zoomLink) zoomLink.href = previewUrl;
            if (linkFull) linkFull.href = noticeLink;
            if (btnDownload) {
                btnDownload.href = previewUrl;
                btnDownload.setAttribute('download', noticeFileName);
            }

            // Positioning Logic
            if (!isMobile()) {
                var rect = item.getBoundingClientRect();
                var popWidth = 630;
                var popHeight = 350;
                var pad = 16;

                // Position horizontally with collision detection
                var left = rect.left + 50;
                if (left + popWidth > window.innerWidth - pad) {
                    left = window.innerWidth - popWidth - pad;
                }
                if (left < pad) left = pad;

                // Position vertically centered or anchored to item top
                var top = rect.top - 20;
                if (top + popHeight > window.innerHeight - pad) {
                    top = window.innerHeight - popHeight - pad;
                }
                if (top < pad) top = pad;

                popCard.style.position = 'fixed';
                popCard.style.left = Math.round(left) + 'px';
                popCard.style.top = Math.round(top) + 'px';
            } else {
                popCard.style.position = '';
                popCard.style.left = '';
                popCard.style.top = '';
            }

            popover.classList.add('kc-popover-active');
            popover.setAttribute('aria-hidden', 'false');
        }

        function hidePopover() {
            clearTimeout(hoverTimer);
            popover.classList.remove('kc-popover-active');
            popover.setAttribute('aria-hidden', 'true');
            activeItem = null;
        }

        // Event Delegation on Notice Viewport
        var viewport = document.getElementById('kc-notice-viewport');
        if (viewport) {
            viewport.addEventListener('mouseover', function(e) {
                if (isMobile()) return;
                var item = e.target.closest('.kc-notice-item');
                if (item) {
                    clearTimeout(leaveTimer);
                    clearTimeout(hoverTimer);
                    // Smart 150ms debounce
                    hoverTimer = setTimeout(function() {
                        showPopover(item);
                    }, 150);
                }
            });

            viewport.addEventListener('mouseout', function(e) {
                if (isMobile()) return;
                var item = e.target.closest('.kc-notice-item');
                if (item) {
                    clearTimeout(hoverTimer);
                    leaveTimer = setTimeout(function() {
                        hidePopover();
                    }, 220);
                }
            });

            // Mobile click handler
            viewport.addEventListener('click', function(e) {
                if (!isMobile()) return;
                var item = e.target.closest('.kc-notice-item');
                if (item) {
                    e.preventDefault();
                    showPopover(item);
                }
            });
        }

        // Keep popover open while mouse is inside it
        popCard.addEventListener('mouseenter', function() {
            clearTimeout(leaveTimer);
        });

        popCard.addEventListener('mouseleave', function() {
            if (isMobile()) return;
            leaveTimer = setTimeout(function() {
                hidePopover();
            }, 220);
        });

        // Close triggers
        if (closeBtn) closeBtn.addEventListener('click', hidePopover);
        if (backdrop) backdrop.addEventListener('click', hidePopover);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                hidePopover();
            }
        });
    }

    function initSystem() {
        // Slider Initialization
        initFragmentSlider();
        // Notice Board Auto-scroll Initialization
        initNoticeBoardTicker();
        initNoticeHoverPopover();
        // A. Wire Language Switchers
        var deskLangBtn = document.getElementById('kc-lang-toggle-btn') || document.getElementById('kcc-lang-btn-desk');
        if (deskLangBtn) deskLangBtn.addEventListener('click', window.toggleLanguage);

        var mobLangBtn = document.getElementById('kcc-lang-btn-mob');
        if (mobLangBtn) mobLangBtn.addEventListener('click', window.toggleLanguage);

        var floatLangBtn = document.getElementById('kcc-quick-lang-btn');
        if (floatLangBtn) floatLangBtn.addEventListener('click', window.toggleLanguage);

        // B. Wire Speech Modal Triggers
        document.querySelectorAll('.kc-bani-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                var type = this.getAttribute('data-bani') || 'principal';
                window.openSpeechModal(type, e);
                return false;
            });
        });

        // C. Wire Modal Close Buttons & Backdrop Click
        var closeBtn = document.getElementById('kc-modal-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', window.closeSpeechModal);

        var footerCloseBtn = document.getElementById('kc-modal-footer-close-btn');
        if (footerCloseBtn) footerCloseBtn.addEventListener('click', window.closeSpeechModal);

        var modal = document.getElementById('kc-speech-modal');
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    window.closeSpeechModal();
                }
            });
        }

        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                window.closeSpeechModal();
            }
        });

        // D. Mobile drawer toggle
        window.toggle_insertion_box = function(e) {
            if (e && e.preventDefault) e.preventDefault();
            var dawgdrops = document.getElementById('dawgdrops');
            var toggleBtn = document.querySelector('.t1-mobile-nav-toggle');
            if (!dawgdrops) return false;
            
            var isShowing = dawgdrops.classList.contains('show-dawgdrops') || 
                            window.getComputedStyle(dawgdrops).display === 'block';
            
            if (isShowing) {
                dawgdrops.classList.remove('show-dawgdrops');
                dawgdrops.style.display = 'none';
                if (toggleBtn) toggleBtn.classList.remove('active');
            } else {
                dawgdrops.classList.add('show-dawgdrops');
                dawgdrops.style.display = 'block';
                if (toggleBtn) toggleBtn.classList.add('active');
            }
            return false;
        };

        // E. Floating Smooth "Back to Top" Button
        if (!document.getElementById('kc-back-to-top')) {
            var btt = document.createElement('button');
            btt.id = 'kc-back-to-top';
            btt.setAttribute('aria-label', 'উপরে যান');
            btt.title = 'উপরে যান';
            btt.innerHTML = '<svg viewBox="0 0 448 512" style="width:16px;height:16px;" fill="currentColor"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>';
            document.body.appendChild(btt);

            window.addEventListener('scroll', function() {
                if (window.scrollY > 280) {
                    btt.classList.add('visible');
                } else {
                    btt.classList.remove('visible');
                }
            });

            btt.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // F. Auto-wrap tables in table-responsive container
        document.querySelectorAll('table').forEach(function(tbl) {
            if (!tbl.parentElement.classList.contains('table-responsive')) {
                var wrapper = document.createElement('div');
                wrapper.className = 'table-responsive';
                wrapper.style.width = '100%';
                wrapper.style.overflowX = 'auto';
                wrapper.style.webkitOverflowScrolling = 'touch';
                tbl.parentNode.insertBefore(wrapper, tbl);
                wrapper.appendChild(tbl);
            }
        });

        // G. Apply saved language state on start
        if (currentLang === 'en') {
            window.setLanguage('en');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSystem);
    } else {
        initSystem();
    }
})();
