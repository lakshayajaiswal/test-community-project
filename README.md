# GramKalyan (ಗ್ರಾಮ ಕಲ್ಯಾಣ)
### Government Scheme Awareness & Livelihood Empowerment Hub

**Institution**: Vivekananda Institute of Technology (VKIT), Bangalore  
**Affiliation**: Visvesvaraya Technological University (VTU)  
**Subject**: Community Project (2026)  
**Topic**: Government scheme awareness for betterment of livelihood  

---

## 🌟 Overview
**GramKalyan** is a native-language, voice-assisted digital awareness platform designed specifically for rural communities in Karnataka. It bridges the critical information gap between underprivileged citizens and life-changing welfare programs.

### 🎯 Key Measurable Engineering Outcomes
1. **Sub-60 Second Scheme Discovery**: Icon-driven 3-tap eligibility matcher without typing.
2. **100% Native Language Accessibility**: Full support for **Kannada (ಕನ್ನಡ)**, **Hindi (हिंदी)**, and **English**.
3. **Voice Assistance (Web Speech API)**: Audio read-aloud feature for semi-literate and low-vision citizens.
4. **Direct Benefit ROI Calculator ("ನನ್ನ ಲಾಭ ಲೆಕ್ಕಾಚಾರ")**: Aggregates direct cash transfers (₹), collateral-free credit lines, and free toolkit vouchers.
5. **Zero-Rejection Document Readiness**: Readiness gauge (0-100%) and 1-click printable **Grama One / Seva Sindhu / CSC Token Slip**.
6. **Field Survey & Live Analytics**: Real-time village survey collector with dynamic visual barrier charts and CSV export.

---

## 🚀 Live Demo & Getting Started

### Option 1: Open Directly
Double-click `index.html` to launch in any modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox). Zero build setup required.

### Option 2: Local HTTP Server
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📁 Repository Structure

```
.
├── index.html                           # Accessible Single Page Application
├── README.md                            # Project overview & instructions
├── css/
│   ├── style.css                        # Earth/forest palette, typography, glassmorphism
│   ├── components.css                   # Wizard, calculator cards, charts, audio wave
│   └── print.css                        # Clean A4 printable Grama One Kiosk Slip
├── js/
│   ├── translations.js                  # Kannada, Hindi, and English dictionaries
│   ├── schemes-data.js                  # Central & Karnataka state livelihood database
│   ├── eligibility.js                   # 3-tap matching engine and benefit calculator
│   ├── speech.js                        # HTML5 Web Speech API voice reader
│   ├── document-slip.js                 # Readiness score and printable token slip
│   ├── survey-analytics.js              # Village survey manager & dynamic charts
│   └── app.js                           # Master UI coordinator & language switch
└── docs/
    ├── VKIT_15_Week_Evidence_Dossier.md # Week 1 to 15 curriculum deliverables
    ├── Final_Project_Report.md          # Formal engineering project report
    └── Viva_Presentation_Guide.md       # 15-slide deck & viva question-answer bank
```

---

## 🏛️ Schemes Covered
- **Central Government**: PM-KISAN, PM Vishwakarma, PM SVANidhi, PM Mudra Yojana, PMKVY 4.0, Ayushman Bharat, e-Shram.
- **Karnataka State**: Raitha Siri (Millet farming grant), Sanjeevini (DAY-NRLM Women SHGs), Udyogini Scheme, Yuva Nidhi.

---

## 📜 Academic Curriculum & Rubrics
This repository includes complete documentation matching the **VKIT 15-Week Timeline** in the `docs/` folder:
- **Phase 1 (Weeks 1-5)**: Team plan, problem statement, baseline analysis.
- **Phase 2 (Weeks 6-9)**: Gantt chart, feasibility matrix, concept note, technical calculations.
- **Phase 3 (Weeks 10-12)**: App development, usability evaluation, field demonstration log.
- **Phase 4 (Weeks 13-15)**: Impact report, presentation slides, final viva voce guide.

---

## 📄 License
Open Educational Community Resource | Developed for VKIT Community Project.
