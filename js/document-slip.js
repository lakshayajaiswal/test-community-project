/**
 * GramKalyan - Document Readiness Gauge & Grama One / CSC Kiosk Token Slip Generator
 */

const standardDocuments = [
  { id: "aadhaar", names: { kn: "ಆಧಾರ್ ಕಾರ್ಡ್ (Aadhaar Card)", hi: "आधार कार्ड (Aadhaar Card)", en: "Aadhaar Card (Linked to Mobile)" }, essential: true },
  { id: "ration", names: { kn: "ರೇಷನ್ ಕಾರ್ಡ್ - ಬಿಪಿಎಲ್ / ಅಂತ್ಯೋದಯ (Ration Card)", hi: "राशन कार्ड - BPL / अंत्योदय", en: "Ration Card (BPL / Antyodaya)" }, essential: true },
  { id: "bank_passbook", names: { kn: "ಬ್ಯಾಂಕ್ ಪಾಸ್ ಬುಕ್ (ಆಧಾರ್ ಜೋಡಣೆ ಹೊಂದಿರುವ ಖಾತೆ)", hi: "बैंक पासबुक (आधार से जुड़ा सक्रिय खाता)", en: "Bank Passbook (Aadhaar Seeded Account)" }, essential: true },
  { id: "land_record", names: { kn: "ಆರ್‌ಟಿಸಿ / ಪಹಣಿ / ಭೂ ದಾಖಲೆ (RTC / Pahani for Farmers)", hi: "खतौनी / भूमि रिकॉर्ड (RTC / Pahani)", en: "Land Records / RTC / Pahani (For Farmers)" }, essential: false },
  { id: "caste_income", names: { kn: "ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (Caste & Income Certificate)", hi: "जाति एवं आय प्रमाण पत्र", en: "Caste & Income Certificate" }, essential: false },
  { id: "mobile_link", names: { kn: "ಆಧಾರ್‌ಗೆ ಲಿಂಕ್ ಆದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (Active Mobile Number)", hi: "आधार से जुड़ा मोबाइल नंबर", en: "Mobile Number linked to Aadhaar" }, essential: true }
];

class DocumentSlipManager {
  constructor() {
    this.checkedDocs = new Set(["aadhaar", "bank_passbook", "mobile_link"]); // Default ready docs
  }

  toggleDoc(docId, isChecked) {
    if (isChecked) {
      this.checkedDocs.add(docId);
    } else {
      this.checkedDocs.delete(docId);
    }
    return this.calculateReadinessScore();
  }

  isDocChecked(docId) {
    return this.checkedDocs.has(docId);
  }

  calculateReadinessScore() {
    let totalCount = standardDocuments.length;
    let checkedCount = this.checkedDocs.size;
    let score = Math.round((checkedCount / totalCount) * 100);
    return {
      percentage: score,
      checkedCount: checkedCount,
      totalCount: totalCount,
      status: score >= 80 ? "high" : (score >= 50 ? "medium" : "low")
    };
  }

  getPrintableSlipHtml(userData, matchedSchemes, lang = 'kn') {
    const t = window.translations[lang] || window.translations.kn;
    const readiness = this.calculateReadinessScore();

    const readyList = standardDocuments.filter(d => this.checkedDocs.has(d.id));
    const pendingList = standardDocuments.filter(d => !this.checkedDocs.has(d.id));

    const schemeNamesHtml = matchedSchemes.map(s => `<li><strong>${s.names[lang] || s.names.en}</strong> (${s.level === 'karnataka' ? 'ಕರ್ನಾಟಕ' : 'ಕೇಂದ್ರ'})</li>`).join("");

    return `
      <div class="print-kiosk-slip">
        <div class="slip-header">
          <div class="slip-emblem">🏛️</div>
          <div class="slip-title-box">
            <h2>${t.slipTitle}</h2>
            <p>ಗ್ರಾಮೀಣ ಜೀವನೋಪಾಯ ಸೇವಾ ಕೇಂದ್ರ (Grama One / Seva Sindhu / CSC Kiosk Token)</p>
            <span class="token-id">ಟೋಕನ್ ಸಂಖ್ಯೆ / Token ID: GK-${Date.now().toString().slice(-6)}</span>
          </div>
        </div>

        <hr class="slip-divider" />

        <div class="slip-applicant-info">
          <table class="slip-table">
            <tr>
              <td><strong>ಅರ್ಜಿದಾರರ ಹೆಸರು / Name:</strong> ${userData.name || 'ಗ್ರಾಮ ಫಲಾನುಭವಿ'}</td>
              <td><strong>ಗ್ರಾಮ / Village:</strong> ${userData.village || 'ಗ್ರಾಮೀಣ ವಲಯ'}</td>
            </tr>
            <tr>
              <td><strong>ಮೊಬೈಲ್ / Mobile:</strong> ${userData.phone || '—'}</td>
              <td><strong>ಮುಖ್ಯ ಉದ್ಯೋಗ / Occupation:</strong> ${userData.occupation || 'ಕೃಷಿ / ಜೀವನೋಪಾಯ'}</td>
            </tr>
            <tr>
              <td><strong>ದಾಖಲೆ ಸಿದ್ಧತಾ ಸ್ಕೋರ್:</strong> <span class="score-badge ${readiness.status}">${readiness.percentage}% ಸಿದ್ಧವಾಗಿದೆ</span></td>
              <td><strong>ದಿನಾಂಕ / Date:</strong> ${new Date().toLocaleDateString('kn-IN')}</td>
            </tr>
          </table>
        </div>

        <div class="slip-section">
          <h3>🎯 ಅರ್ಹವಿರುವ ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು (Target Schemes):</h3>
          <ul class="slip-schemes-list">
            ${schemeNamesHtml || '<li>ಸಾಮಾನ್ಯ ಜೀವನೋಪಾಯ ಮತ್ತು ಸಾಮಾಜಿಕ ಭದ್ರತಾ ಯೋಜನೆಗಳು</li>'}
          </ul>
        </div>

        <div class="slip-docs-grid">
          <div class="docs-column ready">
            <h4>✅ ಸಿದ್ಧವಿರುವ ದಾಖಲೆಗಳು (${readyList.length})</h4>
            <ul>
              ${readyList.map(d => `<li>☑️ ${d.names[lang] || d.names.en}</li>`).join("")}
            </ul>
          </div>
          <div class="docs-column pending">
            <h4>⚠️ ಇನ್ನೂ ಬೇಕಾಗಿರುವ ದಾಖಲೆಗಳು (${pendingList.length})</h4>
            <ul>
              ${pendingList.length > 0 ? pendingList.map(d => `<li>⬜ ${d.names[lang] || d.names.en}</li>`).join("") : '<li>ಯಾವುದೂ ಇಲ್ಲ! ಎಲ್ಲಾ ದಾಖಲೆಗಳು ಸಂಪೂರ್ಣವಾಗಿವೆ.</li>'}
            </ul>
          </div>
        </div>

        <div class="slip-instructions">
          <h4>📌 ಗ್ರಾಮ ಒನ್ / ಸೇವಾ ಸಿಂಧು ಸಿಬ್ಬಂದಿಗೆ ವಿನಂತಿ:</h4>
          <p>ಮೇಲೆ ತಿಳಿಸಿದ ಅರ್ಜಿದಾರರು ಈ ಯೋಜನೆಗಳಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಬಯಸುತ್ತಾರೆ. ದಯವಿಟ್ಟು ಸಿದ್ಧವಿರುವ ದಾಖಲೆಗಳ ಮೂಲ ಪ್ರತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಫ್ರೂಟ್ಸ್ (FRUITS) / ಸೇವಾ ಸಿಂಧು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ತಕ್ಷಣ ಅರ್ಜಿ ನೋಂದಣಿ ಮಾಡಿಕೊಡಲು ವಿನಂತಿ.</p>
          <div class="slip-helplines">
            <span>ಸೇವಾ ಸಿಂಧು: <strong>14447</strong></span> | 
            <span>ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್: <strong>1800-180-1551</strong></span> | 
            <span>ಪಿಎಂ ವಿಶ್ವಕರ್ಮ: <strong>14434</strong></span>
          </div>
        </div>

        <div class="slip-footer">
          <small>ಅಭಿವೃದ್ಧಿಪಡಿಸಿದವರು: VKIT ವಿದ್ಯಾರ್ಥಿ ಸಮುದಾಯ ಯೋಜನೆ (Vivekananda Institute of Technology, Bangalore) | ಗ್ರಾಮ ಕಲ್ಯಾಣ</small>
        </div>
      </div>
    `;
  }
}

window.standardDocuments = standardDocuments;
window.documentSlipManager = new DocumentSlipManager();
