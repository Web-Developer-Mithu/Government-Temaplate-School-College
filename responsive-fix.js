var boundaryPoly = null;
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
        var cinemaOverlayBtn = document.getElementById('kc-cinema-overlay-btn');
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
        var currentActiveItem = null;
        var isMouseInsideModal = false;
        var isMouseInsideItem = false;
        var isMobile = function() { return window.innerWidth <= 900; };

        function populateAndShow(item) {
            if (!item) return;
            currentActiveItem = item;

            // Extract rich metadata from notice item
            var noticeTitle = item.getAttribute('data-title') || (item.querySelector('.kc-notice-text') ? item.querySelector('.kc-notice-text').textContent.trim() : '');
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
            if (cinemaOverlayBtn) cinemaOverlayBtn.href = previewUrl;
            if (linkFull) linkFull.href = noticeLink;
            if (btnDownload) {
                btnDownload.href = previewUrl;
                btnDownload.setAttribute('download', noticeFileName);
            }

            // Clean inline positioning to allow smooth CSS GPU centering
            popCard.style.position = '';
            popCard.style.left = '';
            popCard.style.top = '';

            // Activate modal
            popover.classList.add('kc-popover-active');
            popover.setAttribute('aria-hidden', 'false');
        }

        function hideModal() {
            clearTimeout(hoverTimer);
            clearTimeout(leaveTimer);
            popover.classList.remove('kc-popover-active');
            popover.setAttribute('aria-hidden', 'true');
            currentActiveItem = null;
            isMouseInsideModal = false;
            isMouseInsideItem = false;
        }

        // Attach non-bubbling mouseenter & mouseleave directly to notice items
        function attachItemEvents() {
            var items = document.querySelectorAll('.kc-notice-item');
            items.forEach(function(item) {
                // Remove any previous listener clones
                item.onmouseenter = function() {
                    if (isMobile()) return;
                    isMouseInsideItem = true;
                    clearTimeout(leaveTimer);

                    // If already showing the exact same item, keep it visible smoothly
                    if (currentActiveItem === item && popover.classList.contains('kc-popover-active')) {
                        return;
                    }

                    // Ultra-snappy 160ms intent debounce
                    clearTimeout(hoverTimer);
                    hoverTimer = setTimeout(function() {
                        populateAndShow(item);
                    }, 160);
                };

                item.onmouseleave = function() {
                    if (isMobile()) return;
                    isMouseInsideItem = false;
                    clearTimeout(hoverTimer);

                    // 250ms grace period so user can smoothly move mouse into the popup
                    leaveTimer = setTimeout(function() {
                        if (!isMouseInsideModal && !isMouseInsideItem) {
                            hideModal();
                        }
                    }, 250);
                };

                // Mobile tap handler
                item.onclick = function(e) {
                    if (isMobile()) {
                        e.preventDefault();
                        populateAndShow(item);
                    }
                };
            });
        }

        attachItemEvents();

        // Also re-attach after cloned items are generated in ticker
        setTimeout(attachItemEvents, 500);

        // Keep modal active while mouse is inside modal card
        popCard.onmouseenter = function() {
            isMouseInsideModal = true;
            clearTimeout(leaveTimer);
        };

        popCard.onmouseleave = function() {
            isMouseInsideModal = false;
            if (isMobile()) return;
            leaveTimer = setTimeout(function() {
                if (!isMouseInsideItem) {
                    hideModal();
                }
            }, 250);
        };

        // Instant close on backdrop click or close button
        if (closeBtn) closeBtn.onclick = hideModal;
        if (backdrop) backdrop.onclick = hideModal;

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                hideModal();
            }
        });
    }

                    // --------------------------------------------------------------------------
    // 4.10. Smart Google Maps Parser & Leaflet Real GPS 3D Marker Engine
    // --------------------------------------------------------------------------
    function parseGoogleMapEmbed(embedInput) {
        if (!embedInput || typeof embedInput !== 'string') return null;
        var src = embedInput;
        var srcMatch = embedInput.match(/src=["']([^"']+)["']/i);
        if (srcMatch && srcMatch[1]) {
            src = srcMatch[1];
        }
        var result = {};
        // 1. Google Embed PB format (!3d... !2d... !2s...)
        var latMatch = src.match(/!3d([0-9.-]+)/);
        var lngMatch = src.match(/!2d([0-9.-]+)/);
        var nameMatch = src.match(/!2s([^!&]+)/);
        if (latMatch && lngMatch) {
            result.lat = parseFloat(latMatch[1]);
            result.lng = parseFloat(lngMatch[1]);
        } else {
            // 2. Direct q=lat,lng or ll=lat,lng format
            var coordMatch = src.match(/[?&](?:q|ll|center)=([0-9.-]+),([0-9.-]+)/i);
            if (coordMatch) {
                result.lat = parseFloat(coordMatch[1]);
                result.lng = parseFloat(coordMatch[2]);
            }
        }
        if (nameMatch && nameMatch[1]) {
            try {
                result.name = decodeURIComponent(nameMatch[1].replace(/\+/g, ' '));
            } catch(e) {
                result.name = nameMatch[1];
            }
        }
        return (result.lat && result.lng) ? result : null;
    }

    function initMapFeatures() {
        window.initMapFeatures = initMapFeatures;
        var stageWrap = document.getElementById('kc-map-stage-wrap');
        if (!stageWrap || typeof L === 'undefined') return;

        // Auto-detect if user simply pasted a raw <iframe> into kc-map-stage-wrap
        var embedSource = document.getElementById('kc-map-embed-source') || stageWrap.querySelector('[data-src]');
        var existingIframe = stageWrap.querySelector('iframe');
        if (existingIframe) {
            try { existingIframe.parentNode.removeChild(existingIframe); } catch(e){}
        }
        var mapContainer = document.getElementById('kc-leaflet-map');

        if (!mapContainer) {
            mapContainer = document.createElement('div');
            mapContainer.id = 'kc-leaflet-map';
            mapContainer.style.width = '100%';
            mapContainer.style.height = '380px';
            stageWrap.insertBefore(mapContainer, stageWrap.firstChild);
        }

        var embedInput = null;
        if (embedSource) {
            embedInput = embedSource.getAttribute('data-src') || embedSource.getAttribute('src');
        } else if (existingIframe) {
            embedInput = existingIframe.getAttribute('src');
        }

        embedInput = embedInput ||
                     mapContainer.getAttribute('data-map-embed') ||
                     stageWrap.getAttribute('data-map-embed') ||
                     (window.KCC_MAP_CONFIG && window.KCC_MAP_CONFIG.embed);

        // Base Default School Configuration (Govt. K.C. College)
        var config = {
            lat: 23.5455,
            lng: 89.1701,
            zoom: 18,
            name: "সরকারি কে. সি. কলেজ",
            campus: "মূল ক্যাম্পাস",
            address: "এইচ.এস.এস রোড, ঝিনাইদহ সদর, ঝিনাইদহ-৭৩০০",
            transit: "পায়রা চত্বর বা কেন্দ্রীয় বাস টার্মিনাল থেকে মাত্র ৫ মিনিট",
            plusCode: "G5WC+63M (ঝিনাইদহ)",
            directionUrl: "https://www.google.com/maps/dir/?api=1&destination=23.5455,89.1701",
            boundary: [
                [23.5463, 89.1687],
                [23.5467, 89.1712],
                [23.5459, 89.1718],
                [23.5446, 89.1715],
                [23.5442, 89.1691],
                [23.5452, 89.1685]
            ]
        };

        // Merge with window.KCC_MAP_CONFIG if user defined
        if (window.KCC_MAP_CONFIG && typeof window.KCC_MAP_CONFIG === 'object') {
            for (var key in window.KCC_MAP_CONFIG) {
                if (window.KCC_MAP_CONFIG.hasOwnProperty(key)) {
                    config[key] = window.KCC_MAP_CONFIG[key];
                }
            }
        }

        // Automatic Google Maps Embed Parser (Admin Panel Dynamic Support!)
        if (embedInput) {
            var parsed = parseGoogleMapEmbed(embedInput);
            if (parsed) {
                config.lat = parsed.lat;
                config.lng = parsed.lng;
                if (parsed.name) config.name = parsed.name;
                
                // If Daulatpur College or another school parsed from embed
                if (config.name && config.name.toLowerCase().indexOf('daulatpur') !== -1) {
                    config.name = "দৌলতপুর কলেজ";
                    config.campus = "মূল ক্যাম্পাস, দৌলতপুর";
                    config.address = "কলেজ রোড, দৌলতপুর সদর, কুষ্টিয়া-৭০৪০";
                    config.transit = "দৌলতপুর বাসস্ট্যান্ড বা উপজেলা মোড় থেকে মাত্র ৩ মিনিট";
                    config.plusCode = "2V6C+32X (দৌলতপুর)";
                    config.directionUrl = "https://www.google.com/maps/dir/?api=1&destination=Daulatpur+College,+Daulatpur&destination_place_id=ChIJIViBwequ_jkRhF8y9FwK91g";
                    config.placeUrl = "https://www.google.com/maps/place/Daulatpur+College,+Daulatpur/@24.0098667,88.8727078,17z/data=!3m1!4b1!4m6!3m5!1s0x39feae9ac1814821:0x58f7245cf4325f84!8m2!3d24.0099265!4d88.872643!16s%2Fg%2F11bvt8c4f5";
                } else if (config.lat !== 23.5455) {
                    // Generic new school fallback
                    config.address = config.name + ", সদর রোড";
                    config.transit = "নিকটস্থ বাসস্ট্যান্ড বা বাজার মোড় থেকে ৩-৫ মিনিট";
                    config.plusCode = config.lat.toFixed(4) + ", " + config.lng.toFixed(4);
                    config.directionUrl = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(config.name);
                    config.placeUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(config.name);
                } else {
                    config.directionUrl = "https://www.google.com/maps/dir/?api=1&destination=" + config.lat + "," + config.lng;
                    config.placeUrl = "https://www.google.com/maps?q=" + config.lat + "," + config.lng;
                }

                // Check custom data attributes on container
                if (mapContainer.getAttribute('data-address')) config.address = mapContainer.getAttribute('data-address');
                if (mapContainer.getAttribute('data-transit')) config.transit = mapContainer.getAttribute('data-transit');
                if (mapContainer.getAttribute('data-plus-code')) config.plusCode = mapContainer.getAttribute('data-plus-code');

                // Dynamically compute campus perimeter for new school
                var d_lat = 0.0009;
                var d_lng = 0.0011;
                config.boundary = [
                    [config.lat + d_lat * 0.8, config.lng - d_lng * 0.9],
                    [config.lat + d_lat * 1.1, config.lng + d_lng * 0.8],
                    [config.lat + d_lat * 0.3, config.lng + d_lng * 1.2],
                    [config.lat - d_lat * 0.9, config.lng + d_lng * 0.9],
                    [config.lat - d_lat * 1.1, config.lng - d_lng * 0.7],
                    [config.lat - d_lat * 0.2, config.lng - d_lng * 1.1]
                ];
            }
        }

        // Dynamically update the 3 bottom transit info cards!
        var addrElem = document.getElementById('kc-info-address-val');
        if (addrElem && config.address) addrElem.textContent = config.address;

        var transitElem = document.getElementById('kc-info-transit-val');
        if (transitElem && config.transit) transitElem.textContent = config.transit;

        var plusElem = document.getElementById('kc-info-pluscode-val');
        if (plusElem && config.plusCode) {
            plusElem.innerHTML = '<code class="kc-plus-code">' + config.plusCode + '</code>';
        }

                if (mapContainer._leaflet_map) {
            try { mapContainer._leaflet_map.remove(); } catch(e){}
            mapContainer._leaflet_map = null;
        }
        mapContainer._leaflet_id = null;

        // Initialize Leaflet Map with smooth interactive zooming fully enabled!
        var map = L.map('kc-leaflet-map', {
            center: [config.lat, config.lng],
            zoom: config.zoom || 19,
            zoomControl: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            touchZoom: true,
            boxZoom: true,
            keyboard: true,
            attributionControl: false,
            zoomAnimation: true
        });

        // Explicitly ensure interactive zooming is active
        if (map.scrollWheelZoom) map.scrollWheelZoom.enable();
        if (map.doubleClickZoom) map.doubleClickZoom.enable();
        if (map.touchZoom) map.touchZoom.enable();

        // Google Maps Official Satellite Hybrid Layer (Real Aerial Photography + Buildings + Roads)
        var satelliteLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
            maxZoom: 21,
            maxNativeZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            keepBuffer: 1,
            updateWhenZooming: false,
            attribution: 'Google Satellite'
        });

        // Google Maps Official Vector Road Map Layer
        var roadmapLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 21,
            maxNativeZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            keepBuffer: 1,
            updateWhenZooming: false,
            attribution: 'Google Maps'
        });

        // Default to Real Google Satellite View with Building Detail!
        satelliteLayer.addTo(map);
        var currentActiveLayer = satelliteLayer;

        // Feature 4: Campus Boundary Neon Glow Perimeter
        if (config.boundary && config.boundary.length > 2) {
            boundaryPoly = L.polygon(config.boundary, {
                color: '#10b981',
                weight: 2.8,
                dashArray: '8, 6',
                fillColor: '#059669',
                fillOpacity: 0.16,
                className: 'kc-campus-boundary-pulse'
            }).addTo(map);

            boundaryPoly.bindTooltip("🏫 " + config.name + " • ক্যাম্পাস সীমানা", {
                permanent: false,
                direction: "top",
                className: "kc-boundary-tooltip",
                sticky: true
            });
        }

        // Feature 1: Holographic Vertical Light Beam + Touchdown Shockwave + 3D Spinning Pin
        var pinHtml = `
            <div class="kc-leaflet-marker" aria-label="লাইভ ক্যাম্পাস পিন">
                <!-- 0. Landing Touchdown Shockwave -->
                <div class="kc-landing-shockwave" id="kc-landing-shockwave"></div>

                <!-- 1. Holographic Vertical Laser Light Beam & Rings -->
                <div class="kc-holographic-beam"></div>
                <div class="kc-holo-ring"></div>
                <div class="kc-holo-ring ring-b"></div>

                <!-- 2. Continuous 360° Radar Scanner Beam & Sonar Rings -->
                <div class="kc-radar-scanner"><div class="kc-radar-beam"></div></div>
                <div class="kc-radar-ring ring-1"></div>
                <div class="kc-radar-ring ring-2"></div>
                <div class="kc-radar-ring ring-3"></div>

                <!-- 3. Dual Gyroscopic Orbit Rings -->
                <div class="kc-pin-orbit-ring ring-clockwise"><span class="kc-orbit-dot"></span></div>
                <div class="kc-pin-orbit-ring ring-counter"><span class="kc-orbit-dot dot-gold"></span></div>
                <div class="kc-pin-ground-shadow"></div>

                <!-- 4. 3D Rotating Location Pin & Interactive Tooltip -->
                <div class="kc-pin-anchor">
                    <div class="kc-pin-3d-spin-wrapper">
                        <div class="kc-live-pin-head">
                            <svg viewBox="0 0 640 512" class="kc-pin-icon"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L24.3 137.8C9.8 143.4 0 157.5 0 173.3s9.8 29.8 24.3 35.5l95.7 37.2v97.5c-19.6 9.8-32 30-32 52.5 0 33.1 26.9 60 60 60s60-26.9 60-60c0-22.5-12.4-42.7-32-52.5V254.9l80 31.1v97.5c-19.6 9.8-32 30-32 52.5 0 33.1 26.9 60 60 60s60-26.9 60-60c0-22.5-12.4-42.7-32-52.5V294.7l75.7-29.4c7.6-3 15.6-4.4 23.7-4.4s16.1 1.4 23.7 4.4L615.7 209c14.5-5.6 24.3-19.7 24.3-35.5s-9.8-29.8-24.3-35.5L343.7 36.1C336.1 33.4 328.1 32 320 32z"/></svg>
                        </div>
                        <div class="kc-live-pin-point"></div>
                    </div>
                    <div class="kc-live-pin-tooltip">
                        <span class="kc-tooltip-title">${config.name}</span>
                        <span class="kc-tooltip-sub">${config.campus} • ডিরেকশন দেখতে ক্লিক করুন ↗</span>
                    </div>
                </div>
            </div>
        `;

        var customIcon = L.divIcon({
            className: 'kc-custom-leaflet-pin',
            html: pinHtml,
            iconSize: [0, 0],
            iconAnchor: [0, 0]
        });

        var marker = L.marker([config.lat, config.lng], { icon: customIcon }).addTo(map);

        mapContainer._leaflet_map = map;
        marker.on('click', function() {
            window.open(config.directionUrl, '_blank', 'noopener,noreferrer');
        });

        var satSearchText = document.getElementById('kc-sat-search-text');
        var mapBlock = document.getElementById('kc-map-block') || stageWrap;
        var mapIsVisible = false;
        var mapFlightActive = false;
        var flightTimer = null;

        function updateMapAnimationState() {
            mapContainer.classList.toggle(
                'kc-map-animations-paused',
                !mapIsVisible || document.hidden || mapFlightActive
            );
        }

        // Cancel flight if user manually interacts (wheel, drag, touch, zoom button)
        function stopFlightOnUserInteraction() {
            if (mapFlightActive) {
                if (flightTimer) {
                    clearTimeout(flightTimer);
                    flightTimer = null;
                }
                mapFlightActive = false;
                try { map.stop(); } catch(e){}
                updateMapAnimationState();
                if (boundaryPoly) boundaryPoly.setStyle({ opacity: 1, fillOpacity: 0.16 });
                if (satSearchText) {
                    satSearchText.textContent = '📍 ' + config.name + ' (' + config.campus + ') • লাইভ ভিউ';
                }
            }
        }

        map.on('dragstart', stopFlightOnUserInteraction);
        map.on('wheel', stopFlightOnUserInteraction);
        map.on('touchstart', stopFlightOnUserInteraction);

        // Real Google Satellite Optical Zoom Flight (100% Live, Continuous, Soft, Zero Fake CGI)
        function triggerEarthToCampusFlight(revealOpeningGlobe) {
            if (mapFlightActive) return;
            mapFlightActive = true;
            updateMapAnimationState();

            if (boundaryPoly) {
                boundaryPoly.setStyle({ opacity: 0, fillOpacity: 0 });
            }

            if (satSearchText) {
                satSearchText.textContent = '🛰️ দক্ষিণ এশিয়া আকাশসীমা • বাংলাদেশ মানচিত্র স্পষ্ট হচ্ছে...';
            }

            // Start softly at continental altitude (Zoom 4: South Asia / Bay of Bengal / Bangladesh outline)
            map.setView([config.lat, config.lng], 4, { animate: false });
            map.invalidateSize();

            if (revealOpeningGlobe) revealOpeningGlobe();

            // Smooth continuous optical zoom through Bangladesh map down to college building rooftop
            map.flyTo([config.lat, config.lng], config.zoom || 19, {
                duration: 5.0,
                easeLinearity: 0.22
            });
        }

        function playOpeningGlobe(onComplete) {
            var finished = false;
            var frameId = 0;
            var renderer = null;
            var scene = null;
            var camera = null;
            var earth = null;
            var earthTexture = null;
            var lastTimestamp = 0;
            var elapsed = 0;
            var lastRenderTimestamp = 0;
            var overlay = document.createElement('div');
            var loadTimeout = null;
            var overlayLeaving = false;
            var mapFlightStarted = false;
            var startRotation = null;
            var targetRotation = null;

            overlay.className = 'kc-globe-overlay';
            overlay.setAttribute('aria-hidden', 'true');
            stageWrap.appendChild(overlay);
            mapContainer.classList.add('kc-map-animations-paused');

            function revealOverlay() {
                if (overlayLeaving) return;
                overlayLeaving = true;
                overlay.classList.add('kc-globe-overlay-leaving');
                setTimeout(function() {
                    if (earth) {
                        if (earth.geometry) earth.geometry.dispose();
                        if (earth.material) {
                            if (earth.material.map) earth.material.map.dispose();
                            earth.material.dispose();
                        }
                    }
                    if (earthTexture) earthTexture.dispose();
                    if (renderer) {
                        renderer.dispose();
                        renderer.forceContextLoss();
                    }
                    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                    mapContainer.classList.remove('kc-map-animations-paused');
                }, 800);
            }

            function complete(error) {
                if (finished) return;
                finished = true;
                if (loadTimeout) clearTimeout(loadTimeout);
                if (frameId) cancelAnimationFrame(frameId);
                if (error) console.error('Opening Earth animation could not be loaded.', error);
                openingGlobeResume = null;

                revealOverlay();
                if (onComplete) onComplete();
            }

            function animate(timestamp) {
                frameId = 0;
                if (finished) return;
                if (document.hidden || !mapIsVisible) {
                    lastTimestamp = 0;
                    return;
                }
                if (lastTimestamp) elapsed += Math.min(timestamp - lastTimestamp, 50);
                lastTimestamp = timestamp;

                // Phase 1 (0ms - 2400ms): 360° Earth Axial Rotation (প্রথম থেকেই দ্রুত ও মসৃণভাবে ঘুরবে)
                var spinProgress = Math.min(elapsed / 2400, 1);
                // Ease-out: starts spinning at full natural momentum from Frame 0, softly decelerates onto Bangladesh
                var easedSpin = 1 - Math.pow(1 - spinProgress, 2.2);
                var spinAngle = (1 - easedSpin) * -Math.PI * 2;
                var spinQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), spinAngle);
                if (earth && targetRotation) {
                    earth.quaternion.copy(targetRotation).multiply(spinQuat);
                }

                if (satSearchText && elapsed < 2400) {
                    satSearchText.textContent = '🌍 পৃথিবী আবর্তন করছে • স্যাটেলাইট ট্র্যাকিং সক্রিয়...';
                }

                // Phase 2 (2400ms - 3800ms): Earth Dives/Zooms In Towards Bangladesh (ঘোরার পর জুম হতে হতে)
                if (elapsed >= 2400 && camera) {
                    var zoomProgress = Math.min((elapsed - 2400) / 1400, 1);
                    var easedZoom = zoomProgress * zoomProgress * (3 - 2 * zoomProgress);
                    camera.position.z = 3.1 - easedZoom * 1.82; // Zooms camera smoothly down from 3.1 to 1.28
                    if (satSearchText && elapsed < 3500) {
                        satSearchText.textContent = '🛰️ পৃথিবীর কক্ষপথ থেকে বাংলাদেশ আকাশসীমায় প্রবেশ...';
                    }
                }

                // Phase 3 (3500ms): Seamless Hand-off to Real Google Satellite Map of Bangladesh
                if (elapsed >= 3500 && !mapFlightStarted) {
                    mapFlightStarted = true;
                    if (onComplete) {
                        onComplete(revealOverlay);
                    }
                }

                if (timestamp - lastRenderTimestamp >= 33 && renderer && scene && camera) {
                    renderer.render(scene, camera);
                    lastRenderTimestamp = timestamp;
                }

                // Phase 4 (4200ms): Globe animation finishes and dissolves
                if (elapsed >= 4200) {
                    complete();
                    return;
                }

                frameId = requestAnimationFrame(animate);
            }

            function resume() {
                if (!finished && earth && mapIsVisible && !document.hidden && !frameId) {
                    frameId = requestAnimationFrame(animate);
                }
            }
            openingGlobeResume = resume;

            function createInstantEarthCanvas() {
                var cvs = document.createElement('canvas');
                cvs.width = 1024;
                cvs.height = 512;
                var ctx = cvs.getContext('2d');
                if (!ctx) return null;

                // Deep space ocean gradient
                var ocean = ctx.createLinearGradient(0, 0, 0, 512);
                ocean.addColorStop(0, '#0a2342');
                ocean.addColorStop(0.3, '#0e3870');
                ocean.addColorStop(0.5, '#104580');
                ocean.addColorStop(0.7, '#0e3870');
                ocean.addColorStop(1, '#071830');
                ctx.fillStyle = ocean;
                ctx.fillRect(0, 0, 1024, 512);

                // Polar ice caps
                ctx.fillStyle = '#e2e8f0';
                ctx.beginPath();
                ctx.ellipse(512, 12, 512, 28, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(512, 500, 512, 32, 0, 0, Math.PI * 2);
                ctx.fill();

                // Continents (approximate equirectangular world map)
                ctx.fillStyle = '#2d6a4f';

                // Africa & Europe
                ctx.beginPath();
                ctx.moveTo(500, 130);
                ctx.lineTo(540, 120);
                ctx.lineTo(580, 150);
                ctx.lineTo(570, 190);
                ctx.lineTo(600, 220);
                ctx.lineTo(560, 340);
                ctx.lineTo(520, 320);
                ctx.lineTo(490, 230);
                ctx.lineTo(470, 190);
                ctx.closePath();
                ctx.fill();

                // Eurasia
                ctx.beginPath();
                ctx.moveTo(550, 110);
                ctx.lineTo(680, 80);
                ctx.lineTo(840, 90);
                ctx.lineTo(890, 140);
                ctx.lineTo(830, 210);
                ctx.lineTo(760, 230);
                ctx.lineTo(720, 190);
                ctx.lineTo(680, 170);
                ctx.closePath();
                ctx.fill();

                // Indian Subcontinent & Bangladesh (vibrant delta green)
                ctx.fillStyle = '#38b000';
                ctx.beginPath();
                ctx.moveTo(700, 195);
                ctx.lineTo(755, 195);
                ctx.lineTo(750, 230);
                ctx.lineTo(735, 235);
                ctx.lineTo(725, 260);
                ctx.lineTo(705, 225);
                ctx.closePath();
                ctx.fill();

                // Americas
                ctx.fillStyle = '#2d6a4f';
                ctx.beginPath();
                ctx.moveTo(140, 90);
                ctx.lineTo(260, 100);
                ctx.lineTo(280, 160);
                ctx.lineTo(240, 210);
                ctx.lineTo(200, 230);
                ctx.lineTo(170, 170);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(250, 240);
                ctx.lineTo(310, 270);
                ctx.lineTo(300, 350);
                ctx.lineTo(250, 420);
                ctx.lineTo(235, 340);
                ctx.closePath();
                ctx.fill();

                // Australia
                ctx.beginPath();
                ctx.moveTo(820, 330);
                ctx.lineTo(900, 330);
                ctx.lineTo(900, 390);
                ctx.lineTo(830, 385);
                ctx.closePath();
                ctx.fill();

                // Atmospheric clouds swirls (semi-transparent)
                ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
                ctx.beginPath();
                ctx.ellipse(300, 180, 160, 35, -0.15, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(650, 280, 180, 30, 0.1, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(750, 160, 140, 28, -0.08, 0, Math.PI * 2);
                ctx.fill();

                return new THREE.CanvasTexture(cvs);
            }

            function loadGlobe() {
                if (!window.THREE) {
                    var script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.149.0/three.min.js';
                    script.onload = function() {
                        if (window.THREE) initializeGlobe();
                        else complete(new Error('Three.js loaded without exposing its API.'));
                    };
                    script.onerror = function() {
                        complete(new Error('Three.js CDN script failed to load.'));
                    };
                    document.head.appendChild(script);
                    return;
                }
                initializeGlobe();
            }

            function initializeGlobe() {
                if (finished) return;
                try {
                    var THREE = window.THREE;
                    var width = Math.max(stageWrap.clientWidth, 1);
                    var height = Math.max(stageWrap.clientHeight, 1);
                    renderer = new THREE.WebGLRenderer({
                        antialias: false,
                        alpha: false,
                        powerPreference: 'low-power'
                    });
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1));
                    renderer.setSize(width, height);
                    renderer.outputEncoding = THREE.sRGBEncoding;
                    overlay.appendChild(renderer.domElement);

                    scene = new THREE.Scene();
                    scene.background = new THREE.Color('#020817');
                    camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
                    camera.position.set(0, 0, 3.1);
                    scene.add(new THREE.AmbientLight(0xffffff, 0.85));
                    var sunlight = new THREE.DirectionalLight(0xffffff, 1.4);
                    sunlight.position.set(-3, 2, 4);
                    scene.add(sunlight);

                    // Add subtle space stars background
                    var starCount = 180;
                    var starGeo = new THREE.BufferGeometry();
                    var starPositions = new Float32Array(starCount * 3);
                    for (var s = 0; s < starCount; s++) {
                        starPositions[s * 3] = (Math.random() - 0.5) * 35;
                        starPositions[s * 3 + 1] = (Math.random() - 0.5) * 35;
                        starPositions[s * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
                    }
                    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
                    var starMat = new THREE.PointsMaterial({ color: '#93c5fd', size: 0.08, transparent: true, opacity: 0.6 });
                    scene.add(new THREE.Points(starGeo, starMat));

                    // Calculate target orientation to center Bangladesh at camera
                    var lat = (config.lat || 24.0099) * Math.PI / 180;
                    var lng = (config.lng || 88.8726) * Math.PI / 180;
                    var targetDirection = new THREE.Vector3(
                        Math.cos(lat) * Math.sin(lng),
                        Math.sin(lat),
                        Math.cos(lat) * Math.cos(lng)
                    );
                    var destination = new THREE.Vector3(0, 0, 1);
                    targetRotation = new THREE.Quaternion().setFromUnitVectors(targetDirection, destination);

                    // Create instant procedural Earth canvas texture synchronously in 2ms
                    var instantTexture = createInstantEarthCanvas();
                    if (instantTexture) instantTexture.encoding = THREE.sRGBEncoding;
                    var earthMat = new THREE.MeshPhongMaterial({
                        map: instantTexture,
                        shininess: 16,
                        specular: new THREE.Color('#182c47')
                    });
                    earth = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), earthMat);

                    // Initial orientation: rotated 360° away around polar Y axis
                    var initialSpin = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI * 2);
                    earth.quaternion.copy(targetRotation).multiply(initialSpin);

                    // Glowing target indicator over Bangladesh on the globe
                    var targetMarker = new THREE.Group();
                    targetMarker.position.copy(targetDirection).multiplyScalar(1.008);
                    targetMarker.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), targetDirection);
                    targetMarker.add(new THREE.Mesh(
                        new THREE.SphereGeometry(0.015, 8, 6),
                        new THREE.MeshBasicMaterial({ color: '#ef4444' })
                    ));
                    targetMarker.add(new THREE.Mesh(
                        new THREE.RingGeometry(0.02, 0.038, 16),
                        new THREE.MeshBasicMaterial({ color: '#38bdf8', side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
                    ));
                    earth.add(targetMarker);

                    scene.add(earth);

                    // START ANIMATION IMMEDIATELY (Frame 0 - ZERO DELAY)
                    resume();

                    // Stream 2K NASA texture in the background asynchronously
                    var loader = new THREE.TextureLoader();
                    loader.setCrossOrigin('anonymous');
                    loader.load(
                        'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
                        function(texture) {
                            if (finished || !earth || !earth.material) {
                                texture.dispose();
                                return;
                            }
                            texture.encoding = THREE.sRGBEncoding;
                            earthTexture = texture;
                            earth.material.map = texture;
                            earth.material.needsUpdate = true;
                            if (instantTexture) instantTexture.dispose();
                        },
                        undefined,
                        function() {
                            // Instant canvas texture is already rendering smoothly
                        }
                    );
                } catch (error) {
                    complete(error);
                }
            }

            loadTimeout = setTimeout(function() {
                complete(new Error('Opening Earth animation timed out.'));
            }, 8000);
            loadGlobe();
        }

        // Softly update search bar during continuous zoom through Bangladesh into college
        map.on('zoom', function() {
            if (!mapFlightActive) return;
            var z = map.getZoom();
            if (satSearchText) {
                if (z < 6) {
                    satSearchText.textContent = '🛰️ দক্ষিণ এশিয়া আকাশসীমা • বাংলাদেশ মানচিত্রে প্রবেশ করছে...';
                } else if (z < 10) {
                    satSearchText.textContent = '🛰️ বাংলাদেশ ম্যাপ • পদ্মা ও যমুনা নদী অববাহিকা...';
                } else if (z < 15) {
                    satSearchText.textContent = '🛰️ কুষ্টিয়া জেলা • দৌলতপুর উপজেলা এলাকা জুম হচ্ছে...';
                } else {
                    satSearchText.textContent = '📍 ' + config.name + ' • মূল ক্যাম্পাস ছাদ ও সীমানা স্পষ্ট হচ্ছে...';
                }
            }
        });

        // Arrival touchdown at target Zoom
        map.on('moveend', function() {
            var currentZoom = map.getZoom();
            var targetZoom = config.zoom || 19;
            // Only trigger touchdown arrival once camera reaches campus destination
            if (mapFlightActive && currentZoom >= targetZoom - 1) {
                mapFlightActive = false;
                updateMapAnimationState();
                if (boundaryPoly) boundaryPoly.setStyle({ opacity: 1, fillOpacity: 0.16 });
                if (satSearchText) {
                    satSearchText.textContent = '📍 ' + config.name + ' (' + config.campus + ') • লাইভ স্যাটেলাইট';
                }
                var shockwave = document.getElementById('kc-landing-shockwave');
                if (shockwave) {
                    shockwave.classList.add('wave-active');
                    setTimeout(function() {
                        shockwave.classList.remove('wave-active');
                    }, 1500);
                }
            }
        });

        function updateMapVisibility(entries) {
            mapIsVisible = entries[0].isIntersecting;
            updateMapAnimationState();
            if (mapIsVisible && !mapContainer.dataset.globeIntroPlayed) {
                mapContainer.dataset.globeIntroPlayed = 'true';
                playOpeningGlobe(triggerEarthToCampusFlight);
            }
            if (document.hidden) return;
            if (mapIsVisible && openingGlobeResume) openingGlobeResume();
        }

        var openingGlobeResume = null;
        document.addEventListener('visibilitychange', function() {
            updateMapAnimationState();
            if (!document.hidden && openingGlobeResume) openingGlobeResume();
        });
        if ('IntersectionObserver' in window && mapBlock) {
            var mapVisibilityObserver = new IntersectionObserver(updateMapVisibility, { threshold: 0.25 });
            mapVisibilityObserver.observe(mapBlock);
        } else {
            mapIsVisible = true;
            updateMapAnimationState();
            mapContainer.dataset.globeIntroPlayed = 'true';
            setTimeout(function() {
                playOpeningGlobe(triggerEarthToCampusFlight);
            }, 500);
        }

        // Replay the smooth campus zoom on recenter
        var recenterBtn = document.getElementById('kc-map-recenter-btn');
        if (recenterBtn) {
            recenterBtn.addEventListener('click', function(e) {
                e.preventDefault();
                stopFlightOnUserInteraction();
                map.flyTo([config.lat, config.lng], config.zoom || 19, {
                    duration: 2.0,
                    easeLinearity: 0.25
                });
                if (satSearchText) {
                    satSearchText.textContent = '📍 ' + config.name + ' (' + config.campus + ')';
                }
            });
        }

        
        // View Toggle Listener (Satellite <-> Roadmap)
        var viewToggleBtn = document.getElementById('kc-map-view-toggle');
        if (viewToggleBtn) {
            viewToggleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (currentActiveLayer === satelliteLayer) {
                    map.removeLayer(satelliteLayer);
                    roadmapLayer.addTo(map);
                    currentActiveLayer = roadmapLayer;
                    viewToggleBtn.innerHTML = '<span>🗺️ রোডম্যাপ</span>';
                    viewToggleBtn.classList.remove('active-satellite');
                    viewToggleBtn.setAttribute('title', 'স্যাটেলাইট ভিউতে পরিবর্তন করুন');
                } else {
                    map.removeLayer(roadmapLayer);
                    satelliteLayer.addTo(map);
                    currentActiveLayer = satelliteLayer;
                    viewToggleBtn.innerHTML = '<span>🛰️ স্যাটেলাইট</span>';
                    viewToggleBtn.classList.add('active-satellite');
                    viewToggleBtn.setAttribute('title', 'সাধারণ রোডম্যাপে পরিবর্তন করুন');
                }
            });
        }

        // Fullscreen Google Maps button & Header Direction button
        var fsBtn = document.getElementById('kc-map-fullscreen-btn') || document.querySelector('.kc-map-fullscreen-btn');
        if (fsBtn) {
            fsBtn.href = config.placeUrl || config.directionUrl;
            fsBtn.setAttribute('title', config.name + ' সম্পূর্ণ গুগল ম্যাপে ওপেন করুন');
            fsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(config.placeUrl || config.directionUrl, '_blank', 'noopener,noreferrer');
            });
        }

        var dirBtn = document.getElementById('kc-map-dir-btn') || document.querySelector('.kc-map-dir-btn');
        if (dirBtn) {
            dirBtn.href = config.directionUrl;
            dirBtn.setAttribute('title', config.name + ' সরাসরি গুগল ম্যাপে ডিরেকশন ও নেভিগেশন পান');
            dirBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(config.directionUrl, '_blank', 'noopener,noreferrer');
            });
        }

        // Auto resize invalidation on window resize
        window.addEventListener('resize', function() {
            map.invalidateSize();
        });
    }

    function initSystem() {
        // Slider Initialization
        initFragmentSlider();
        // Notice Board Auto-scroll Initialization
        initNoticeBoardTicker();
        initNoticeHoverPopover();
        initMapFeatures();
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
