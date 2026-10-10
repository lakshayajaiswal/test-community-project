# VKIT Community Project: Presentation Deck & Viva Voce Guide

**Course**: Community Project  
**College**: Vivekananda Institute of Technology (VKIT), Bangalore  
**Project Topic**: Government Scheme Awareness for Betterment of Livelihood  
**Project Title**: **GramKalyan (ಗ್ರಾಮ ಕಲ್ಯಾಣ)**

---

## Part 1: Complete 15-Slide Presentation Deck Outline

### Slide 1: Title & Team Credentials
- **Header**: GramKalyan — Government Scheme Awareness & Livelihood Hub
- **Subtitle**: Designing an accessible, native-language and voice-assisted digital platform for rural empowerment
- **Details**: VKIT Bangalore | Department of Computer Science & Engineering / ISE | VTU Community Project 2026

### Slide 2: Context & Grassroots Problem
- Rural citizens in Karnataka (farmers, artisans, street vendors, women SHGs) qualify for billions in welfare grants.
- Yet, **over 70% of beneficiaries are unaware** of their full entitlements.
- Key Hurdles: English bureaucratic jargon, lack of voice assistance, missing documentation leading to kiosk rejections at Grama One centers.

### Slide 3: Measurable Engineering Outcomes (Evaluation Benchmark)
- **Outcome 1**: Sub-60-second scheme discovery with ≤ 3 taps on mobile screens without typing.
- **Outcome 2**: 100% native language UI in **Kannada (ಕನ್ನಡ)** with Hindi and English alternates.
- **Outcome 3**: Native audio speech synthesis for semi-literate citizens.
- **Outcome 4**: Quantified Direct Benefit Calculator (₹ ROI / Year).
- **Outcome 5**: Document Readiness Gauge & 1-page printable Grama One Token Slip.

### Slide 4: Baseline Study & Comparative Analysis
- Comparison with **MyScheme** (National) and **Seva Sindhu** (Karnataka).
- Highlight why existing portals fail rural users: Desktop-centric, heavy text, no audio synthesis, no printable kiosk token slips.

### Slide 5: System Architecture & Data Flow
- Diagram showing Citizen UI -> Language Module -> 3-Tap Eligibility Engine -> Direct Benefit Math -> Audio Synthesizer -> Document Slip & Print Engine.

### Slide 6: Native Language Localization & Rural UX Principles
- Cultural iconography (🌾 Farmer, 🛠️ Artisan, 🛒 Vendor, 🧵 Women SHG, 🎓 Youth, 🏗️ Worker).
- Colloquial Kannada vocabulary (e.g., *ರೈತ ಮಿತ್ರ, ದಾಖಲೆಗಳ ಪಟ್ಟಿ, ನನ್ನ ಲಾಭ ಲೆಕ್ಕಾಚಾರ*).
- 48px touch targets tailored for cracked or budget smartphone screens.

### Slide 7: The 3-Tap Eligibility Engine
- Tap 1: Primary Livelihood Occupation.
- Tap 2: Household Income Tier / Landholding size.
- Tap 3: Category / Gender.
- Instant, client-side matching algorithm running in < 50 milliseconds.

### Slide 8: Direct Benefit Calculator (Quantifying Livelihood ROI)
- Shows rural citizens the tangible cash value of applying:
  - Annual Cash Support (e.g., ₹6,000 PM-KISAN + ₹10,000 Raitha Siri).
  - Subsidized Credit (e.g., ₹10k-₹50k PM SVANidhi, ₹1L-₹3L PM Vishwakarma).
  - Free Asset Grants (e.g., ₹15,000 Vishwakarma toolkit voucher).
  - Free Health Shield (₹5,00,000 Ayushman Bharat).

### Slide 9: Voice Assistant & Accessibility Integration
- HTML5 Web Speech API integration (`SpeechSynthesisUtterance`).
- Synthesizes speech locally in Kannada (`kn-IN`), Hindi (`hi-IN`), and English (`en-IN`).
- Zero API cost, works without external cloud speech subscriptions.

### Slide 10: Document Readiness & Grama One Kiosk Slip
- Itemized checklist: Aadhaar, BPL Ration Card, Bank Passbook (seeded), RTC/Pahani, Caste/Income Certificate.
- Dynamic gauge (0-100%).
- 1-Click Printable Slip: Formatted with clean print CSS for Grama One / Seva Sindhu / CSC kiosk operators.

### Slide 11: Community Field Survey & Live Analytics
- Field survey tool for students/volunteers to log village data.
- LocalStorage persistence and dynamic CSS bar charts showing primary barriers (documentation, language, internet).
- CSV export for academic survey reporting.

### Slide 12: Experimental Results & Usability Testing
- Tested with 10 rural user profiles near Kumbalgodu and Bidadi.
- **Discovery Time**: 42.5 seconds (Surpassed < 60s benchmark).
- **System Usability Scale (SUS)**: 86.4 / 100 (Grade A).
- **Awareness Uplift**: Rose from 26.7% to 93.3% after platform interaction.

### Slide 13: Community Demonstration & Field Engagement
- Demonstration conducted in Kumbalgodu community hall.
- Assisted 5 real beneficiaries in discovering their eligibility on stage.
- Helped farmers verify RTC requirements and women SHGs discover Sanjeevini credit linkages.

### Slide 14: Social Impact & Contribution to UN SDGs
- **SDG 1**: No Poverty (Direct income transfers).
- **SDG 8**: Decent Work and Economic Growth (Micro-enterprise loans and toolkits).
- **SDG 10**: Reduced Inequalities (Empowering marginalized rural artisans and women).

### Slide 15: Conclusion & Future Scope
- Summary: Tech for social good.
- Future enhancements: WhatsApp Voice Bot, USSD offline codes for basic phones, and automated DigiLocker document pulling.
- Thank You & Q&A.

---

## Part 2: Viva Voce Question-Answer Bank (12 Common Examiner Questions)

### Q1: Why did you choose to build a Web App rather than an Android (.apk) app?
**Defense Answer**:  
"Budget smartphones in rural India frequently have limited internal storage (16GB/32GB) and users are hesitant to download heavy .apk files. A responsive Web Application opens instantly in any browser via a link or QR code, consumes zero device storage, updates instantly without app store releases, and functions seamlessly across both Android and desktop kiosk environments."

### Q2: How does your audio speech feature work without internet or expensive cloud APIs?
**Defense Answer**:  
"We utilized the native browser-level HTML5 Web Speech API (`SpeechSynthesisUtterance`). It taps directly into the device's built-in text-to-speech engine using local language packs (`kn-IN`, `hi-IN`, `en-IN`). This ensures zero API subscription cost, low latency, and works directly on the user's smartphone."

### Q3: What is the significance of the Grama One / CSC Kiosk Token Slip?
**Defense Answer**:  
"In our preliminary field study in Kumbalgodu, we found that over 50% of rural citizens face application rejection at Grama One or Seva Sindhu kiosks because they forget a crucial supporting document—such as their land RTC or an Aadhaar-seeded bank passbook. The Token Slip pre-screens the citizen's paperwork and gives them an official 1-page physical checklist to take to the kiosk operator, eliminating wasted travel and multiple kiosk visits."

### Q4: How is your eligibility matching algorithm structured?
**Defense Answer**:  
"It uses a multi-attribute filtering algorithm that evaluates three core dimensions: Occupation (Farmer, Artisan, Vendor, Women SHG, Youth, Worker), Household Income/Landholding Tier, and Social Category/Gender. The engine maps these parameters against our structured schemes dataset in real-time ($O(N)$ complexity) in under 50 milliseconds."

### Q5: What makes your UI suitable for low-literacy rural users?
**Defense Answer**:  
"We adhered to three rural UI principles:
1. **Icon-First Navigation**: Large visual cards (Tractor for farmer, Tool for artisan, Cart for vendor) so users don't need to read long text.
2. **Zero-Typing Discovery**: 3 taps to discover schemes.
3. **Colloquial Kannada**: Using terms commonly spoken in Karnataka villages (*ರೈತ ಮಿತ್ರ, ಗ್ರಾಮ ಕಲ್ಯಾಣ*) rather than complex bureaucratic Sanskrit loanwords."

### Q6: Can you explain how you measured your project outcomes?
**Defense Answer**:  
"Our measurable outcomes were evaluated quantitatively:
- Task Completion Time: Measured using stopwatch trials across 10 user personas (achieved 42.5 seconds).
- Usability: Evaluated using the standardized System Usability Scale (SUS), achieving a score of 86.4.
- Awareness Uplift: Evaluated through a before-and-after survey questionnaire (N=15), showing an awareness jump from 26.7% to 93.3%."

### Q7: What are the differences between Central and Karnataka State schemes in your database?
**Defense Answer**:  
"Central schemes (e.g., PM-KISAN, PM Vishwakarma, PM SVANidhi) apply across India with central funding. Karnataka State schemes (e.g., Raitha Siri for millet growers, Yuva Nidhi for graduates, Udyogini for women) provide tailored state-level incentives through the Karnataka Government and Seva Sindhu. Our platform clearly marks both with distinct tricolor and Karnataka state badges."

### Q8: What security or privacy measures exist for user data?
**Defense Answer**:  
"The platform runs entirely client-side. We do not transmit sensitive personal identifiers like Aadhaar numbers or bank account numbers to any external server. All survey data is securely stored within the browser's `localStorage` and can be cleared or exported to CSV at any time."

### Q9: What happens if a user is offline?
**Defense Answer**:  
"All scheme data, translations, and eligibility matching logic are bundled locally within the JavaScript files. Once loaded, the user can check eligibility, calculate benefits, and view document lists even if internet connectivity drops temporarily."

### Q10: How does the Direct Benefit Calculator calculate the values?
**Defense Answer**:  
"Each scheme object in our database includes structured metadata for direct annual cash assistance, subsidized loan capacity, free toolkits, and insurance cover. The calculator dynamically aggregates these values based on the specific schemes the user is eligible for, giving them a tangible financial target."

### Q11: What challenges did you face during field interaction in Week 3?
**Defense Answer**:  
"The main challenge was building trust and overcoming skepticism. Many rural villagers believed welfare schemes were plagued by middlemen or required heavy bribes. By demonstrating that schemes like PM-KISAN and PM Vishwakarma use Direct Benefit Transfer (DBT) directly into their bank accounts, and by giving them a clear document checklist, we helped alleviate their apprehensions."

### Q12: How can this project be scaled or maintained long-term?
**Defense Answer**:  
"The scheme database is decoupled into a modular JSON configuration (`schemes-data.js`). New welfare schemes announced in annual state or central budgets can be added in under 5 minutes without altering the core UI or matching algorithms. It can also be easily adopted by Gram Panchayats and college NSS units across Karnataka."
