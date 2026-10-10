/**
 * GramKalyan - Livelihood Schemes Dataset
 * Central Government & Karnataka State Welfare Programs
 */

const schemesData = [
  {
    id: "pm-kisan",
    category: "farmer",
    level: "central",
    annualCashSupport: 6000,
    creditSupport: 0,
    toolkitSupport: 0,
    insuranceCover: 0,
    names: {
      kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ (PM-KISAN)",
      hi: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)",
      en: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)"
    },
    shortDesc: {
      kn: "ಭೂಮಿ ಹೊಂದಿರುವ ಎಲ್ಲಾ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ನೇರ ನಗದು ವರ್ಗಾವಣೆ (ತಲಾ ₹2,000 ನಂತೆ 3 ಕಂತುಗಳಲ್ಲಿ).",
      hi: "सभी पात्र भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 की सीधी नकद सहायता (₹2,000 की 3 किस्तों में)।",
      en: "Direct financial support of ₹6,000 per year in three equal installments of ₹2,000 directly into the bank accounts of farmer families."
    },
    eligibility: {
      occupations: ["farmer"],
      maxIncome: 500000,
      gender: "all",
      criteria: {
        kn: ["ಕೃಷಿ ಭೂಮಿಯನ್ನು ಹೊಂದಿರುವ ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರು.", "ಆಧಾರ್‌ಗೆ ಲಿಂಕ್ ಆಗಿರುವ ಬ್ಯಾಂಕ್ ಖಾತೆ ಹೊಂದಿರಬೇಕು.", "ಸಾಂಸ್ಥಿಕ ಭೂಹಿಡುವಳಿದಾರರು ಅಥವಾ ಆದಾಯ ತೆರಿಗೆ ಪಾವತಿದಾರರಾಗಿರಬಾರದು."],
        hi: ["कृषि योग्य भूमि रखने वाले सभी किसान परिवार।", "आधार से जुड़ा सक्रिय बैंक खाता होना अनिवार्य है।", "आयकर दाता या सरकारी पेंशनभोगी पात्र नहीं हैं।"],
        en: ["Small and marginal farmers owning cultivable agricultural land.", "Aadhaar seeded bank account.", "Institutional landholders or income-tax payees are excluded."]
      }
    },
    benefits: {
      kn: ["ವರ್ಷಕ್ಕೆ ₹6,000 ನೇರ ನಗದು ನೆರವು (ಡಿಬಿಟಿ).", "ಬೀಜ, ರಸಗೊಬ್ಬರ ಮತ್ತು ಕೃಷಿ ವೆಚ್ಚಗಳಿಗೆ ಸಕಾಲಿಕ ಆರ್ಥಿಕ ಬೆಂಬಲ."],
      hi: ["वार्षिक ₹6,000 की सीधी वित्तीय सहायता।", "खाद, बीज और कृषि इनपुट लागत में त्वरित राहत।"],
      en: ["Direct bank transfer of ₹6,000 per annum.", "Helps procure seeds, fertilizers, and agricultural inputs on time."]
    },
    requiredDocs: ["aadhaar", "ration", "land_record", "bank_passbook"],
    portalUrl: "https://pmkisan.gov.in",
    helpline: "155261 / 1800-115-526"
  },
  {
    id: "raitha-siri",
    category: "farmer",
    level: "karnataka",
    annualCashSupport: 10000,
    creditSupport: 0,
    toolkitSupport: 0,
    insuranceCover: 0,
    names: {
      kn: "ರೈತ ಸಿರಿ ಯೋಜನೆ (ಕರ್ನಾಟಕ ಸರ್ಕಾರ)",
      hi: "रैता सिरी योजना (कर्नाटक सरकार)",
      en: "Raitha Siri Scheme (Govt of Karnataka)"
    },
    shortDesc: {
      kn: "ಕಿರುಧಾನ್ಯಗಳನ್ನು (ಸಿರಿಧಾನ್ಯ - ರಾಗಿ, ನವಣೆ, ಸಾಮೆ, ಹಾರಕ ಇತ್ಯಾದಿ) ಬೆಳೆಯುವ ರೈತರಿಗೆ ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ ₹10,000 ಪ್ರೋತ್ಸಾಹ ಧನ.",
      hi: "मिलेट्स (मोटा अनाज/बाजरा/रागी) उगाने वाले किसानों को ₹10,000 प्रति हेक्टेयर की प्रोत्साहन राशि।",
      en: "Financial assistance of ₹10,000 per hectare for farmers cultivating millets (Siri Dhanya like Ragi, Foxtail millet, Little millet)."
    },
    eligibility: {
      occupations: ["farmer"],
      maxIncome: 400000,
      gender: "all",
      criteria: {
        kn: ["ಕರ್ನಾಟಕದ ನಿವಾಸಿಯಾಗಿರುವ ರೈತರು.", "ಸಿರಿಧಾನ್ಯ ಬೆಳೆಯುತ್ತಿರುವ ಭೂಮಿಯ ಮಾನ್ಯವಾದ RTC/ಪಹಣಿ ಹೊಂದಿರಬೇಕು.", "ಫ್ರೂಟ್ಸ್ (FRUITS) ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿಯಾಗಿರಬೇಕು."],
        hi: ["कर्नाटक के स्थायी निवासी किसान।", "मिलेट्स की खेती करने वाले मान्य भूमि रिकॉर्ड (RTC/Pahani) धारक।", "कर्नाटक FRUITS पोर्टल पर पंजीकृत किसान।"],
        en: ["Resident farmers in Karnataka.", "Valid RTC/Pahani showing millet crop cultivation.", "Must be registered on Karnataka FRUITS portal."]
      }
    },
    benefits: {
      kn: ["ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ ₹10,000 ನಗದು ಪ್ರೋತ್ಸಾಹ (ಗರಿಷ್ಠ 2 ಹೆಕ್ಟೇರ್ ವರೆಗೆ ₹20,000).", "ಬರಪೀಡಿತ ಪ್ರದೇಶದ ಒಣಭೂಮಿ ರೈತರ ಆರ್ಥಿಕ ಸುಧಾರಣೆ."],
      hi: ["प्रति हेक्टेयर ₹10,000 का सीधा अनुदान (अधिकतम ₹20,000)।", "सूखा प्रभावित क्षेत्रों में बाजरा उत्पादक किसानों को सुरक्षा।"],
      en: ["₹10,000 direct cash incentive per hectare (up to 2 hectares / ₹20,000 max).", "Improves economic resilience of dryland farmers."]
    },
    requiredDocs: ["aadhaar", "ration", "land_record", "bank_passbook"],
    portalUrl: "https://fruits.karnataka.gov.in",
    helpline: "080-22212861"
  },
  {
    id: "pm-vishwakarma",
    category: "artisan",
    level: "central",
    annualCashSupport: 3000,
    creditSupport: 300000,
    toolkitSupport: 15000,
    insuranceCover: 0,
    names: {
      kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (PM Vishwakarma)",
      hi: "प्रधानमंत्री विश्वकर्मा योजना (PM Vishwakarma)",
      en: "Pradhan Mantri Vishwakarma Scheme"
    },
    shortDesc: {
      kn: "18 ಸಾಂಪ್ರದಾಯಿಕ ಕಸುಬುಗಾರರಿಗೆ (ಬಡಗಿ, ಕಮ್ಮಾರ, ಅಕ್ಕಸಾಲಿಗ, ಕುಂಬಾರ, ಚಮ್ಮಾರ, ಕ್ಷೌರಿಕ, ನೇಕಾರ ಇತ್ಯಾದಿ) ₹15,000 ಉಚಿತ ಟೂಲ್‌ಕಿಟ್ ಮತ್ತು ₹3 ಲಕ್ಷದವರೆಗೆ ಕೇವಲ 5% ಬಡ್ಡಿಯಲ್ಲಿ ಸಾಲ.",
      hi: "18 पारंपरिक कारीगरों व शिल्पकारों (बढ़ई, लोहार, कुम्हार, मोची, दर्जी आदि) को ₹15,000 का मुफ्त टूलकिट वाउचर और 5% ब्याज पर ₹3 लाख तक का संपार्श्विक-मुक्त ऋण।",
      en: "Empowering 18 traditional artisan trades with ₹15,000 free modern toolkit voucher, basic training stipend (₹500/day), and collateral-free credit up to ₹3,00,000 at only 5% interest."
    },
    eligibility: {
      occupations: ["artisan"],
      maxIncome: 300000,
      gender: "all",
      criteria: {
        kn: ["18 ನಿಗದಿತ ಸಾಂಪ್ರದಾಯಿಕ ವೃತ್ತಿಗಳಲ್ಲಿ ಒಂದರಲ್ಲಿ ತೊಡಗಿಕೊಂಡಿರುವ ಕುಶಲಕರ್ಮಿ (ಕನಿಷ್ಠ 18 ವರ್ಷ ವಯಸ್ಸು).", "ಕುಟುಂಬದ ಒಬ್ಬ ಸದಸ್ಯನಿಗೆ ಮಾತ್ರ ಈ ಯೋಜನೆ ಲಭ್ಯ.", "ಕಳೆದ 5 ವರ್ಷಗಳಲ್ಲಿ ಪಿಎಂಇಜಿಪಿ ಅಥವಾ ಮುದ್ರಾ ಸಾಲದ ಸುಸ್ತಿದಾರರಾಗಿರಬಾರದು."],
        hi: ["18 निर्धारित पारंपरिक व्यवसायों में कार्यरत कारीगर (आयु 18+)।", "एक परिवार में केवल एक सदस्य पात्र।", "पीएमईजीपी या मुद्रा में सक्रिय डिफॉल्टर नहीं होना चाहिए।"],
        en: ["Artisans/craftspeople engaged in 18 notified family-based trades.", "Minimum age 18 years; 1 member per family.", "Should not have availed similar central credit schemes in last 5 years."]
      }
    },
    benefits: {
      kn: ["ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಮಾನ್ಯತೆ ಪಡೆದ ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ಐಡಿ ಕಾರ್ಡ್.", "₹15,000 ಮೌಲ್ಯದ ಉಚಿತ ಆಧುನಿಕ ಟೂಲ್‌ಕಿಟ್ ಇ-ವೋಚರ್.", "ಮೊದಲ ಹಂತದಲ್ಲಿ ₹1 ಲಕ್ಷ ಮತ್ತು ಎರಡನೇ ಹಂತದಲ್ಲಿ ₹2 ಲಕ್ಷ (ಕೇವಲ 5% ಬಡ್ಡಿ ದರದಲ್ಲಿ).", "ತರಬೇತಿ ಅವಧಿಯಲ್ಲಿ ದಿನಕ್ಕೆ ₹500 ಶಿಷ್ಯವೇತನ."],
      hi: ["मान्यता प्राप्त पीएम विश्वकर्मा डिजिटल सर्टिफिकेट व पहचान पत्र।", "₹15,000 का निःशुल्क टूलकिट ई-वाउचर।", "प्रथम चरण में ₹1 लाख तथा द्वितीय चरण में ₹2 लाख का रियायती ऋण (मात्र 5% ब्याज)।", "5-7 दिवसीय प्रशिक्षण में ₹500 प्रतिदिन वजीफा।"],
      en: ["PM Vishwakarma Certificate & Identity Card.", "₹15,000 free modern digital toolkit voucher.", "Subsidized loan: ₹1 Lakh (Tranche 1) & ₹2 Lakh (Tranche 2) at only 5% interest.", "Daily training stipend of ₹500 during skill upgradation."]
    },
    requiredDocs: ["aadhaar", "ration", "caste_income", "bank_passbook"],
    portalUrl: "https://pmvishwakarma.gov.in",
    helpline: "1800-267-7777 / 14434"
  },
  {
    id: "pm-svanidhi",
    category: "vendor",
    level: "central",
    annualCashSupport: 1200,
    creditSupport: 80000,
    toolkitSupport: 0,
    insuranceCover: 0,
    names: {
      kn: "ಪಿಎಂ ಸ್ವನಿಧಿ ಯೋಜನೆ (PM SVANidhi - ಬೀದಿ ವ್ಯಾಪಾರಿಗಳ ನೆರವು)",
      hi: "पीएम स्वनिधि योजना (PM SVANidhi - स्ट्रीट वेंडर्स)",
      en: "PM SVANidhi Scheme (Street Vendors Micro-Credit)"
    },
    shortDesc: {
      kn: "ಬೀದಿ ಬದಿ ತರಕಾರಿ, ಹಣ್ಣು, ತಿಂಡಿ ಮಾರಾಟಗಾರರಿಗೆ ಯಾವುದೇ ಶ್ಯೂರಿಟಿ ಇಲ್ಲದೆ ₹10,000 ದಿಂದ ₹50,000 ವರೆಗೆ ಹಂತ ಹಂತವಾಗಿ ಕಡಿಮೆ ಬಡ್ಡಿಯಲ್ಲಿ ಬಂಡವಾಳ ಸಾಲ.",
      hi: "सड़क किनारे रेहड़ी-पटरी, फल-सब्जी विक्रेताओं को बिना किसी गारंटी के ₹10,000 से ₹50,000 तक का कार्यशील पूंजी ऋण व डिजिटल कैशबैक।",
      en: "Collateral-free working capital loan for street vendors: ₹10,000 (1st tranche), ₹20,000 (2nd tranche), up to ₹50,000 (3rd tranche) with 7% interest subsidy and cashback."
    },
    eligibility: {
      occupations: ["vendor"],
      maxIncome: 250000,
      gender: "all",
      criteria: {
        kn: ["ನಗರ, ಪಟ್ಟಣ ಅಥವಾ ಗ್ರಾಮೀಣ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರ ಮಾಡುವವರು.", "ಸ್ಥಳೀಯ ಪುರಸಭೆ/ಪಂಚಾಯತ್‌ನಿಂದ ವೆಂಡಿಂಗ್ ಪ್ರಮಾಣಪತ್ರ (CoVs) ಅಥವಾ ಶಿಫಾರಸು ಪತ್ರ (LoR)."],
        hi: ["शहरी या ग्रामीण हाट-बाजारों में फेरी/दुकान लगाने वाले वेंडर।", "स्थानीय निकाय द्वारा जारी वेंडिंग प्रमाण पत्र या अनुशंसा पत्र (LoR)।"],
        en: ["Street vendors vending in urban, semi-urban, or peri-urban rural markets.", "Certificate of Vending (CoV) or Letter of Recommendation (LoR) from local body/panchayat."]
      }
    },
    benefits: {
      kn: ["ಯಾವುದೇ ಜಾಮೀನು ಇಲ್ಲದೆ ಸುಲಭ ಬ್ಯಾಂಕ್ ಸಾಲ.", "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮರುಪಾವತಿಸಿದರೆ 7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ.", "ಯುಪಿಐ ಡಿಜಿಟಲ್ ವಹಿವಾಟು ನಡೆಸಿದರೆ ತಿಂಗಳಿಗೆ ₹100 ವರೆಗೆ (ವರ್ಷಕ್ಕೆ ₹1,200) ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್."],
      hi: ["संपार्श्विक-मुक्त आसान कार्यशील पूंजी ऋण।", "समय पर भुगतान पर 7% वार्षिक ब्याज सब्सिडी।", "डिजिटल लेनदेन करने पर ₹1,200 प्रति वर्ष तक कैशबैक।"],
      en: ["Collateral-free instant working capital loan.", "7% interest subsidy on timely repayment.", "Monthly digital cashback incentive up to ₹1,200 per year."]
    },
    requiredDocs: ["aadhaar", "ration", "bank_passbook"],
    portalUrl: "https://pmsvanidhi.mohua.gov.in",
    helpline: "1800-11-1979"
  },
  {
    id: "day-nrlm-sanjeevini",
    category: "women",
    level: "karnataka",
    annualCashSupport: 15000,
    creditSupport: 500000,
    toolkitSupport: 0,
    insuranceCover: 0,
    names: {
      kn: "ಸಂಜೀವಿನಿ - ಗ್ರಾಮೀಣ ಜೀವನೋಪಾಯ ಅಭಿಯಾನ (KSRLPS / DAY-NRLM)",
      hi: "संजीवनी - राष्ट्रीय ग्रामीण आजीविका मिशन (DAY-NRLM)",
      en: "Sanjeevini - National Rural Livelihoods Mission (KSRLPS)"
    },
    shortDesc: {
      kn: "ಗ್ರಾಮೀಣ ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘಗಳಿಗೆ (SHG) ₹15,000 ಸುತ್ತು ನಿಧಿ (Revolving Fund) ಮತ್ತು ಕಿರು ಉದ್ಯಮಗಳಿಗೆ ₹5 ಲಕ್ಷದವರೆಗೆ ಬಡ್ಡಿಸಹಿತ ಆರ್ಥಿಕ ನೆರವು.",
      hi: "ग्रामीण महिला स्वयं सहायता समूहों (SHG) को ₹15,000 रिवॉल्विंग फंड और सामूहिक कुटीर उद्योग हेतु ₹5 लाख तक का रियायती ऋण।",
      en: "Mobilizing rural women into Self-Help Groups (SHGs) with ₹15,000 Revolving Fund, Community Investment Funds, and bank credit linkage up to ₹5 Lakhs for micro-enterprises."
    },
    eligibility: {
      occupations: ["women"],
      maxIncome: 250000,
      gender: "female",
      criteria: {
        kn: ["ಗ್ರಾಮೀಣ ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘದ (SHG) ಸಕ್ರಿಯ ಸದಸ್ಯರಾಗಿರಬೇಕು.", "ಕನಿಷ್ಠ 3 ತಿಂಗಳು ಯಶಸ್ವಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿರಬೇಕು ಮತ್ತು ನಿಯಮಿತ ಉಳಿತಾಯ ಮಾಡುತ್ತಿರಬೇಕು."],
        hi: ["ग्रामीण महिला स्वयं सहायता समूह (SHG) की सक्रिय सदस्य।", "समूह न्यूनतम 3 महीने से सक्रिय और नियमित बचत कर रहा हो।"],
        en: ["Rural women belonging to active SHGs.", "Group must follow regular savings and panchasutra norms for at least 3 months."]
      }
    },
    benefits: {
      kn: ["ಹೈನುಗಾರಿಕೆ, ಹೊಲಿಗೆ, ತರಕಾರಿ ಮಾರಾಟ, ಅಗರಬತ್ತಿ ಇತ್ಯಾದಿ ಕಿರು ಉದ್ಯಮ ಸ್ಥಾಪನೆಗೆ ಬಂಡವಾಳ.", "ಬ್ಯಾಂಕುಗಳ ಮೂಲಕ ಶೇಕಡಾ 4% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರದಲ್ಲಿ ಸಾಲ ಸೌಲಭ್ಯ."],
      hi: ["डेयरी, सिलाई, खाद्य प्रसंस्करण, हस्तशिल्प जैसे सूक्ष्म उद्यमों के लिए पूंजी।", "महिला समूहों को 4% की अत्यंत कम ब्याज दर पर बैंक ऋण सुविधा।"],
      en: ["Seed capital for micro-enterprises (dairy, tailoring, pickle/masala units).", "Bank credit linkage at subsidized 4% interest rate with prompt repayment subvention."]
    },
    requiredDocs: ["aadhaar", "ration", "bank_passbook"],
    portalUrl: "https://ksrlps.karnataka.gov.in",
    helpline: "080-22238421 / 1800-425-4555"
  },
  {
    id: "udyogini-scheme",
    category: "women",
    level: "karnataka",
    annualCashSupport: 0,
    creditSupport: 300000,
    toolkitSupport: 0,
    insuranceCover: 0,
    names: {
      kn: "ಉದ್ಯೋಗಿನಿ ಮಹಿಳಾ ಯೋಜನೆ (ಕರ್ನಾಟಕ ಸರ್ಕಾರ)",
      hi: "उद्योगिनी योजना (कर्नाटक सरकार)",
      en: "Udyogini Women Entrepreneurship Scheme"
    },
    shortDesc: {
      kn: "ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರು ಸ್ವಂತ ವ್ಯಾಪಾರ-ವ್ಯವಹಾರ ಆರಂಭಿಸಲು ₹3,00,000 ವರೆಗೆ ಸಾಲ ಹಾಗೂ ಶೇ 30% ರಿಂದ 50% ವರೆಗೆ ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ (ಅನುದಾನ).",
      hi: "ग्रामीण महिलाओं को नया व्यवसाय/दुकान शुरू करने हेतु ₹3 लाख तक का बैंक ऋण एवं 30% से 50% तक सरकारी सब्सिडी।",
      en: "Financial assistance up to ₹3,00,000 for aspiring women entrepreneurs in rural/semi-urban areas with 30% to 50% government capital subsidy."
    },
    eligibility: {
      occupations: ["women"],
      maxIncome: 200000,
      gender: "female",
      criteria: {
        kn: ["ವಯಸ್ಸು 18 ರಿಂದ 55 ವರ್ಷದೊಳಗಿನ ಮಹಿಳೆಯರು.", "ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹2 ಲಕ್ಷ ಮೀರಬಾರದು (ಎಸ್.ಸಿ/ಎಸ್.ಟಿ ಮಹಿಳೆಯರಿಗೆ ಯಾವುದೇ ಆದಾಯ ಮಿತಿ ಇಲ್ಲ)."],
        hi: ["महिला की आयु 18 से 55 वर्ष के बीच हो।", "पारिवारिक आय ₹2 लाख से कम हो (एससी/एसटी महिलाओं के लिए कोई आय सीमा नहीं)।"],
        en: ["Women aged between 18 to 55 years.", "Annual family income < ₹2 Lakhs (No income limit for SC/ST women entrepreneurs)."]
      }
    },
    benefits: {
      kn: ["ಎಸ್.ಸಿ / ಎಸ್.ಟಿ ಮಹಿಳೆಯರಿಗೆ ಶೇ. 50% ರವರೆಗೆ (ಗರಿಷ್ಠ ₹1.5 ಲಕ್ಷ) ನೇರ ಸಬ್ಸಿಡಿ.", "ಸಾಮಾನ್ಯ ಮಹಿಳೆಯರಿಗೆ ಶೇ. 30% ರವರೆಗೆ (ಗರಿಷ್ಠ ₹90,000) ಸರ್ಕಾರದ ಸಬ್ಸಿಡಿ."],
      hi: ["एससी/एसटी महिलाओं को 50% तक (अधिकतम ₹1.5 लाख) पूंजीगत सब्सिडी।", "सामान्य/ओबीसी महिलाओं को 30% (अधिकतम ₹90,000) सरकारी सब्सिडी।"],
      en: ["Up to 50% subsidy (max ₹1.5 Lakhs) for SC/ST women beneficiaries.", "Up to 30% capital subsidy (max ₹90,000) for General/OBC women categories."]
    },
    requiredDocs: ["aadhaar", "ration", "caste_income", "bank_passbook"],
    portalUrl: "https://kswdc.karnataka.gov.in",
    helpline: "080-22266485"
  },
  {
    id: "pmkvy-youth",
    category: "youth",
    level: "central",
    annualCashSupport: 8000,
    creditSupport: 0,
    toolkitSupport: 5000,
    insuranceCover: 0,
    names: {
      kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಕೌಶಲ್ಯ ವಿಕಾಸ ಯೋಜನೆ 4.0 (PMKVY)",
      hi: "प्रधानमंत्री कौशल विकास योजना 4.0 (PMKVY)",
      en: "Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY)"
    },
    shortDesc: {
      kn: "ಗ್ರಾಮೀಣ ಯುವಕ-ಯುವತಿಯರಿಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ತಾಂತ್ರಿಕ ಹಾಗೂ ಕೌಶಲ್ಯ ತರಬೇತಿ, ಸರ್ಕಾರಿ ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ಉದ್ಯೋಗ ನಿಯೋಜನೆ ಸಹಾಯ.",
      hi: "ग्रामीण बेरोजगार युवाओं को पूर्णतः निःशुल्क कौशल व तकनीकी प्रशिक्षण, सरकारी प्रमाण पत्र तथा रोजगार सहायता।",
      en: "Free industry-relevant skill training across agriculture, solar tech, retail, automotive, and electronics for school/college dropouts and unemployed rural youth."
    },
    eligibility: {
      occupations: ["youth"],
      maxIncome: 400000,
      gender: "all",
      criteria: {
        kn: ["15 ರಿಂದ 45 ವರ್ಷದೊಳಗಿನ ಭಾರತೀಯ ಯುವಕರು/ಯುವತಿಯರು.", "ಶಾಲಾ ಅಥವಾ ಕಾಲೇಜು ಶಿಕ್ಷಣ ಪೂರ್ಣಗೊಳಿಸದ ಅಥವಾ ಉದ್ಯೋಗ ಹುಡುಕುತ್ತಿರುವ ನಿರುದ್ಯೋಗಿಗಳು."],
        hi: ["15 से 45 वर्ष की आयु के युवा।", "ड्रॉपआउट या बेरोजगार युवा जो रोजगारपरक हुनर सीखना चाहते हैं।"],
        en: ["Indian youth aged 15-45 years.", "Dropouts or unemployed individuals seeking certified market skills."]
      }
    },
    benefits: {
      kn: ["100% ಉಚಿತ ಊಟ, ವಸತಿ ಅಥವಾ ಪ್ರಯಾಣ ಭತ್ಯೆಯೊಂದಿಗೆ ತರಬೇತಿ.", "ಕೇಂದ್ರ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಎನ್.ಎಸ್.ಡಿ.ಸಿ (NSDC) ಪ್ರಮಾಣಪತ್ರ.", "ತರಬೇತಿ ಯಶಸ್ವಿಯಾಗಿ ಮುಗಿಸಿದ ನಂತರ ₹8,000 ಪೋಸ್ಟ್-ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಪ್ರೋತ್ಸಾಹ ಧನ."],
      hi: ["निःशुल्क प्रशिक्षण एवं प्रमाणन।", "मान्यता प्राप्त एनएसडीसी (NSDC) कौशल प्रमाणपत्र।", "कोर्स उपरांत रोजगार सहायता एवं ₹8,000 तक का वित्तीय वजीफा।"],
      en: ["Completely free hands-on skill certification.", "Government recognized NSDC Skill Certificate.", "Post-placement financial support up to ₹8,000 and job fair access."]
    },
    requiredDocs: ["aadhaar", "bank_passbook"],
    portalUrl: "https://pmkvyofficial.org",
    helpline: "088000-55555 / 1800-123-9626"
  },
  {
    id: "yuva-nidhi-karnataka",
    category: "youth",
    level: "karnataka",
    annualCashSupport: 36000,
    creditSupport: 0,
    toolkitSupport: 0,
    insuranceCover: 0,
    names: {
      kn: "ಯುವ ನಿಧಿ ಯೋಜನೆ (ಕರ್ನಾಟಕ ಸರ್ಕಾರ)",
      hi: "युवा निधि योजना (कर्नाटक सरकार)",
      en: "Yuva Nidhi Scheme (Govt of Karnataka)"
    },
    shortDesc: {
      kn: "ಕರ್ನಾಟಕದ ನಿರುದ್ಯೋಗಿ ಪದವೀಧರರಿಗೆ ತಿಂಗಳಿಗೆ ₹3,000 ಹಾಗೂ ಡಿಪ್ಲೋಮಾ ಪದವೀಧರರಿಗೆ ₹1,500 ಮಾಸಿಕ ನಿರುದ್ಯೋಗ ಭತ್ಯೆ (2 ವರ್ಷಗಳವರೆಗೆ).",
      hi: "कर्नाटक के बेरोजगार स्नातकों को ₹3,000 प्रति माह एवं डिप्लोमा धारकों को ₹1,500 प्रति माह बेरोजगारी भत्ता (2 वर्ष तक)।",
      en: "Monthly unemployment stipend of ₹3,000 for graduates and ₹1,500 for diploma holders in Karnataka for up to 2 years while seeking employment or self-enterprise."
    },
    eligibility: {
      occupations: ["youth"],
      maxIncome: 350000,
      gender: "all",
      criteria: {
        kn: ["ಕರ್ನಾಟಕದಲ್ಲಿ ಕನಿಷ್ಠ 6 ವರ್ಷ ನೆಲೆಸಿರುವ ನಿವಾಸಿಗಳು.", "2023 ರ ನಂತರ ಪದವಿ ಅಥವಾ ಡಿಪ್ಲೋಮಾ ತೇರ್ಗಡೆಯಾಗಿ 6 ತಿಂಗಳಿನಿಂದ ನಿರುದ್ಯೋಗಿಯಾಗಿರುವವರು.", "ಖಾಸಗಿ ಅಥವಾ ಸರ್ಕಾರಿ ಕೆಲಸದಲ್ಲಿರಬಾರದು, ಉನ್ನತ ವಿದ್ಯಾಭ್ಯಾಸ ಮಾಡುತ್ತಿರಬಾರದು."],
        hi: ["कर्नाटक का निवासी युवा (कम से कम 6 वर्ष का अधिवास)।", "2023 के बाद स्नातक/डिप्लोमा उत्तीर्ण जिन्होंने 6 माह से नौकरी नहीं पाई है।", "उच्च शिक्षा या किसी सरकारी/निजी नौकरी में कार्यरत नहीं होना चाहिए।"],
        en: ["Domicile of Karnataka (minimum 6 years).", "Graduated or passed diploma after 2023, remaining unemployed for 6+ months.", "Not employed in government/private sector and not enrolled in higher studies."]
      }
    },
    benefits: {
      kn: ["ಪದವೀಧರರಿಗೆ ವರ್ಷಕ್ಕೆ ₹36,000 (ತಿಂಗಳಿಗೆ ₹3,000) ನೇರ ಬ್ಯಾಂಕ್ ಜಮೆ.", "ಡಿಪ್ಲೋಮಾದಾರರಿಗೆ ವರ್ಷಕ್ಕೆ ₹18,000 (ತಿಂಗಳಿಗೆ ₹1,500) ಆರ್ಥಿಕ ನೆರವು."],
      hi: ["स्नातकों को ₹36,000 प्रति वर्ष (₹3,000 प्रतिमाह) सीधा बैंक ट्रांसफर।", "डिप्लोमा धारकों को ₹18,000 प्रति वर्ष (₹1,500 प्रतिमाह)।"],
      en: ["Graduates receive ₹36,000/year (₹3,000/month) direct benefit transfer.", "Diploma holders receive ₹18,000/year (₹1,500/month) financial relief."]
    },
    requiredDocs: ["aadhaar", "ration", "bank_passbook"],
    portalUrl: "https://sevasindhugs.karnataka.gov.in",
    helpline: "1800-425-9333 / 1902"
  },
  {
    id: "ayushman-arogya-karnataka",
    category: "worker",
    level: "central",
    annualCashSupport: 0,
    creditSupport: 0,
    toolkitSupport: 0,
    insuranceCover: 500000,
    names: {
      kn: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ - ಆರೋಗ್ಯ ಕರ್ನಾಟಕ (AB-ArK)",
      hi: "आयुष्मान भारत - आरोग्य कर्नाटक (AB-ArK)",
      en: "Ayushman Bharat - Arogya Karnataka (AB-ArK)"
    },
    shortDesc: {
      kn: "ಬಡ ಮತ್ತು ಗ್ರಾಮೀಣ ಕುಟುಂಬಗಳಿಗೆ ಗಂಭೀರ ಕಾಯಿಲೆಗಳ ಚಿಕಿತ್ಸೆಗಾಗಿ ವರ್ಷಕ್ಕೆ ₹5,00,000 ವರೆಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ನಗದು ರಹಿತ (Cashless) ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ.",
      hi: "गरीब और ग्रामीण परिवारों को गंभीर बीमारियों के इलाज हेतु प्रति वर्ष ₹5 लाख तक का कैशलेस सरकारी व निजी अस्पताल कवरेज।",
      en: "Cashless secondary and tertiary hospitalization coverage up to ₹5,00,000 per family per year, shielding rural households from catastrophic medical debt."
    },
    eligibility: {
      occupations: ["farmer", "artisan", "vendor", "women", "youth", "worker"],
      maxIncome: 300000,
      gender: "all",
      criteria: {
        kn: ["ಬಿಪಿಎಲ್ (BPL) ಅಥವಾ ಅಂತ್ಯೋದಯ ಪಡಿತರ ಚೀಟಿ ಹೊಂದಿರುವ ಎಲ್ಲಾ ಕುಟುಂಬಗಳು.", "ಕರ್ನಾಟಕದ ನೋಂದಾಯಿತ ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಕಾರ್ಡ್ ಹೊಂದಿರುವವರು."],
        hi: ["बीपीएल (BPL) अथवा अंत्योदय राशन कार्ड धारक परिवार।", "सक्रिय आयुष्मान भारत गोल्डन कार्ड धारक नागरिक।"],
        en: ["All BPL (Below Poverty Line) and Antyodaya ration card holder families in Karnataka.", "Valid PM-JAY / AB-ArK health card holders."]
      }
    },
    benefits: {
      kn: ["ಸರ್ಕಾರಿ ಮತ್ತು ನೂರಾರು ಹೆಸರಾಂತ ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಉಚಿತ ಚಿಕಿತ್ಸೆ.", "1,650 ಕ್ಕೂ ಹೆಚ್ಚು ಕಾಯಿಲೆಗಳು ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು ಉಚಿತವಾಗಿ ಒಳಗೊಂಡಿವೆ."],
      hi: ["सूचीबद्ध सरकारी व प्रमुख निजी अस्पतालों में पूर्णतः मुफ्त इलाज।", "1,650 से अधिक सर्जरी और गंभीर बीमारियों का निःशुल्क पैकेज।"],
      en: ["Completely cashless treatment across empaneled public & network private hospitals.", "Covers 1,650+ surgical and medical procedures without out-of-pocket costs."]
    },
    requiredDocs: ["aadhaar", "ration"],
    portalUrl: "https://arogya.karnataka.gov.in",
    helpline: "104 / 14555"
  },
  {
    id: "eshram-worker",
    category: "worker",
    level: "central",
    annualCashSupport: 0,
    creditSupport: 0,
    toolkitSupport: 0,
    insuranceCover: 200000,
    names: {
      kn: "ಇ-ಶ್ರಮ್ ಮತ್ತು ಅಸಂಘಟಿತ ಕಾರ್ಮಿಕರ ಸಾಮಾಜಿಕ ಭದ್ರತೆ (e-Shram)",
      hi: "ई-श्रम एवं असंगठित कर्मकार सुरक्षा (e-Shram)",
      en: "e-Shram Portal for Unorganized Workers"
    },
    shortDesc: {
      kn: "ಕೃಷಿ ಕಾರ್ಮಿಕರು, ಕಟ್ಟಡ ಕಾರ್ಮಿಕರು, ಆಟೋ ಚಾಲಕರು ಮತ್ತು ಮನೆಗೆಲಸದವರಿಗೆ ₹2 ಲಕ್ಷ ಉಚಿತ ಅಪಘಾತ ವಿಮೆ ಮತ್ತು ಯುಎಎನ್ (UAN) ಕಾರ್ಡ್.",
      hi: "कृषि मजदूरों, निर्माण श्रमिकों, घरेलू कामगारों को ₹2 लाख का मुफ्त दुर्घटना बीमा और राष्ट्रीय ई-श्रम पहचान पत्र (UAN)।",
      en: "National database of unorganized workers offering universal UAN identity card, ₹2 Lakh free accidental insurance, and priority access to disaster relief."
    },
    eligibility: {
      occupations: ["worker", "vendor"],
      maxIncome: 250000,
      gender: "all",
      criteria: {
        kn: ["ವಯಸ್ಸು 16 ರಿಂದ 59 ವರ್ಷದೊಳಗಿನ ಅಸಂಘಟಿತ ಕಾರ್ಮಿಕರು.", "ಇಪಿಎಫ್ಒ (EPFO) ಅಥವಾ ಇಎಸ್ಐಸಿ (ESIC) ಸದಸ್ಯರಾಗಿರಬಾರದು."],
        hi: ["आयु 16 से 59 वर्ष के बीच के असंगठित क्षेत्र के मजदूर।", "ईपीएफओ (EPFO) या ईएसआईसी (ESIC) के सदस्य नहीं होने चाहिए।"],
        en: ["Unorganized sector laborers aged 16-59 years.", "Must not be a member of EPFO or ESIC; non-income tax payer."]
      }
    },
    benefits: {
      kn: ["ಆಕಸ್ಮಿಕ ಮರಣ ಅಥವಾ ಶಾಶ್ವತ ಅಂಗವೈಕಲ್ಯಕ್ಕೆ ₹2,00,000 ಪರಿಹಾರ.", "ಭಾಗಶಃ ಅಂಗವೈಕಲ್ಯಕ್ಕೆ ₹1,00,000 ವಿಮಾ ಪರಿಹಾರ.", "ವಿಪತ್ತು ಅಥವಾ ಬರಗಾಲದ ಸಂದರ್ಭಗಳಲ್ಲಿ ಸರ್ಕಾರದಿಂದ ನೇರ ನಗದು ವರ್ಗಾವಣೆ ಆದ್ಯತೆ."],
      hi: ["दुर्घटना में मृत्यु अथवा पूर्ण दिव्यांगता पर ₹2 लाख की बीमा राशि।", "आंशिक दिव्यांगता पर ₹1 लाख की सहायता।", "राष्ट्रीय आपदाओं के समय सीधे बैंक खाते में राहत सहायता।"],
      en: ["₹2,00,000 accidental death or permanent total disability cover.", "₹1,00,000 for partial disability.", "Immediate direct financial relief during crises or drought emergencies."]
    },
    requiredDocs: ["aadhaar", "bank_passbook"],
    portalUrl: "https://eshram.gov.in",
    helpline: "14434"
  },
  {
    id: "mudra-loan",
    category: "vendor",
    level: "central",
    annualCashSupport: 0,
    creditSupport: 1000000,
    toolkitSupport: 0,
    insuranceCover: 0,
    names: {
      kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (PMMY - ಕಿರು ಸಾಲ)",
      hi: "प्रधानमंत्री मुद्रा योजना (PMMY)",
      en: "Pradhan Mantri MUDRA Yojana (PMMY)"
    },
    shortDesc: {
      kn: "ಸಣ್ಣ ಅಂಗಡಿ, ಗ್ಯಾರೇಜ್, ಕಿರಾಣಿ ಅಂಗಡಿ, ಹೈನುಗಾರಿಕೆ ವಿಸ್ತರಣೆಗೆ ₹50,000 ದಿಂದ ₹10 ಲಕ್ಷದವರೆಗೆ ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನವಿಲ್ಲದೆ ಸಾಲ.",
      hi: "छोटे व्यापार, दुकान, डेयरी या वर्कशॉप विस्तार हेतु बिना किसी संपत्ति बंधक के ₹50,000 से ₹10 लाख तक का सस्ता बैंक ऋण।",
      en: "Low-interest institutional loans without collateral for small micro-enterprises, rural kirana shops, and agricultural allied services (Shishu, Kishore, Tarun categories)."
    },
    eligibility: {
      occupations: ["vendor", "artisan", "women", "youth"],
      maxIncome: 600000,
      gender: "all",
      criteria: {
        kn: ["ಭಾರತೀಯ ನಾಗರಿಕರು (ವಯಸ್ಸು 18+).", "ಕೃಷಿಯೇತರ ಕಿರು ಅಥವಾ ಸಣ್ಣ ಉದ್ಯಮ ಅಥವಾ ಅಂಗಡಿ ಆರಂಭಿಸುವ ಅಥವಾ ವಿಸ್ತರಿಸುವ ಉದ್ದೇಶ ಹೊಂದಿರಬೇಕು."],
        hi: ["18 वर्ष से अधिक आयु का कोई भी भारतीय नागरिक।", "गैर-कॉरपोरेट, गैर-कृषि लघु व्यवसाय या स्वरोजगार चलाने वाला व्यक्ति।"],
        en: ["Any Indian citizen aged 18+.", "Non-farm micro or small business ventures seeking capital for inventory or machinery."]
      }
    },
    benefits: {
      kn: ["ಶಿಶು ಸಾಲ: ₹50,000 ವರೆಗೆ (ಯಾವುದೇ ಪ್ರೊಸೆಸಿಂಗ್ ಶುಲ್ಕವಿಲ್ಲ).", "ಕಿಶೋರ ಸಾಲ: ₹50,000 ದಿಂದ ₹5,00,000 ವರೆಗೆ.", "ತರುಣ್ ಸಾಲ: ₹5,00,000 ದಿಂದ ₹10,00,000 ವರೆಗೆ."],
      hi: ["शिशु ऋण: ₹50,000 तक (शून्य प्रोसेसिंग फीस)।", "किशोर ऋण: ₹50,000 से ₹5 लाख तक।", "तरुण ऋण: ₹5 लाख से ₹10 लाख तक विस्तार हेतु।"],
      en: ["Shishu: Up to ₹50,000 (No processing fee).", "Kishore: ₹50,000 to ₹5 Lakhs for expanding business.", "Tarun: ₹5 Lakhs to ₹10 Lakhs for established enterprises."]
    },
    requiredDocs: ["aadhaar", "ration", "caste_income", "bank_passbook"],
    portalUrl: "https://mudra.org.in",
    helpline: "1800-180-1111 / 1800-11-0001"
  }
];

window.schemesData = schemesData;
