/**
 * GramKalyan - Master Application Controller
 * Coordinates localization, UI rendering, speech, eligibility engine, and survey metrics
 */

document.addEventListener("DOMContentLoaded", () => {
  // Global Application State
  window.currentLang = "kn"; // Default: Kannada
  const engine = new window.EligibilityEngine(window.schemesData);
  let activeCategoryFilter = "all";
  let activeLevelFilter = "all"; // all, central, karnataka
  let searchQuery = "";

  // Elements
  const langButtons = document.querySelectorAll(".lang-btn");
  const schemesGrid = document.getElementById("schemesGrid");
  const modalContainer = document.getElementById("detailModal");
  const slipModalContainer = document.getElementById("slipModal");
  const evidenceModalContainer = document.getElementById("evidenceModal");

  // Occupation Category Icons Mapping
  const occupationIcons = {
    all: "✨",
    farmer: "🌾",
    artisan: "🛠️",
    vendor: "🛒",
    women: "🧵",
    youth: "🎓",
    worker: "🏗️"
  };

  // --- 1. LOCALIZATION & TRANSLATION SYSTEM ---
  function applyTranslations() {
    const t = window.translations[window.currentLang] || window.translations.kn;
    
    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      if (t[key]) {
        el.placeholder = t[key];
      }
    });

    // Update active lang button state
    langButtons.forEach(btn => {
      if (btn.getAttribute("data-lang") === window.currentLang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Re-render dynamic areas
    renderCategoryFilters();
    renderSchemes();
    updateBenefitCalculator();
    renderDocumentChecklist();
    renderSurveyAnalytics();
  }

  // --- 2. CATEGORY FILTERS ---
  function renderCategoryFilters() {
    const t = window.translations[window.currentLang];
    const catKeys = [
      { id: "all", key: "catAll" },
      { id: "farmer", key: "catFarmer" },
      { id: "artisan", key: "catArtisan" },
      { id: "vendor", key: "catVendor" },
      { id: "women", key: "catWomen" },
      { id: "youth", key: "catYouth" },
      { id: "worker", key: "catWorker" }
    ];

    const container = document.getElementById("categoryFilterBar");
    if (!container) return;

    container.innerHTML = catKeys.map(cat => `
      <button class="filter-pill ${activeCategoryFilter === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        <span class="pill-icon">${occupationIcons[cat.id]}</span>
        <span class="pill-text">${t[cat.key]}</span>
      </button>
    `).join("");

    container.querySelectorAll(".filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategoryFilter = btn.getAttribute("data-cat");
        engine.selectedOccupation = activeCategoryFilter;
        
        // Also sync the wizard radio button
        const wizardRadio = document.querySelector(`input[name="wizardOcc"][value="${activeCategoryFilter}"]`);
        if (wizardRadio) wizardRadio.checked = true;

        renderCategoryFilters();
        renderSchemes();
        updateBenefitCalculator();
      });
    });
  }

  // --- 3. SCHEMES RENDERING ---
  function renderSchemes() {
    if (!schemesGrid) return;
    const t = window.translations[window.currentLang];

    let filtered = engine.getMatchingSchemes();

    // Additional level filter (Central vs Karnataka)
    if (activeLevelFilter !== "all") {
      filtered = filtered.filter(s => s.level === activeLevelFilter);
    }

    // Search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(s => {
        const name = (s.names[window.currentLang] || s.names.en).toLowerCase();
        const desc = (s.shortDesc[window.currentLang] || s.shortDesc.en).toLowerCase();
        return name.includes(q) || desc.includes(q);
      });
    }

    const schemeCountEl = document.getElementById("matchingCount");
    if (schemeCountEl) {
      schemeCountEl.textContent = `${filtered.length} ${t.statSchemes}`;
    }

    if (filtered.length === 0) {
      schemesGrid.innerHTML = `
        <div class="empty-schemes-notice">
          <div class="notice-icon">🔍</div>
          <h3>ಯಾವುದೇ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ (No schemes found)</h3>
          <p>ದಯವಿಟ್ಟು ನಿಮ್ಮ ಫಿಲ್ಟರ್ ಬದಲಿಸಿ ಅಥವಾ ಮರುಹೊಂದಿಸಿ.</p>
          <button id="btnResetFilters" class="btn-primary-outline">${t.resetFilter}</button>
        </div>
      `;
      const resetBtn = document.getElementById("btnResetFilters");
      if (resetBtn) {
        resetBtn.addEventListener("click", resetAllFilters);
      }
      return;
    }

    schemesGrid.innerHTML = filtered.map(scheme => {
      const name = scheme.names[window.currentLang] || scheme.names.en;
      const desc = scheme.shortDesc[window.currentLang] || scheme.shortDesc.en;
      const levelBadge = scheme.level === "karnataka" 
        ? `<span class="badge badge-karnataka">🟡🔴 ${t.schemeTagKarnataka}</span>` 
        : `<span class="badge badge-central">🇮🇳 ${t.schemeTagCentral}</span>`;
      
      const occBadge = `<span class="badge badge-occ">${occupationIcons[scheme.category]} ${t['cat' + capitalize(scheme.category)] || scheme.category}</span>`;

      return `
        <div class="scheme-card" data-id="${scheme.id}">
          <div class="card-header">
            <div class="card-badges">
              ${levelBadge}
              ${occBadge}
            </div>
            <button class="btn-speech-trigger" data-scheme-id="${scheme.id}" title="${t.btnListen}">
              <span class="speech-icon">🔊</span>
              <span class="speech-label">${t.btnListen}</span>
            </button>
          </div>

          <h3 class="scheme-title">${name}</h3>
          <p class="scheme-desc">${desc}</p>

          <div class="scheme-highlights">
            ${scheme.annualCashSupport > 0 ? `<div class="highlight-item"><span class="h-icon">💰</span><span>₹${scheme.annualCashSupport.toLocaleString('en-IN')}/ವರ್ಷ ನಗದು</span></div>` : ''}
            ${scheme.creditSupport > 0 ? `<div class="highlight-item"><span class="h-icon">🏦</span><span>₹${(scheme.creditSupport/100000).toFixed(1)} ಲಕ್ಷ ಸಾಲ</span></div>` : ''}
            ${scheme.toolkitSupport > 0 ? `<div class="highlight-item"><span class="h-icon">🧰</span><span>₹${scheme.toolkitSupport.toLocaleString('en-IN')} ಉಚಿತ ಟೂಲ್‌ಕಿಟ್</span></div>` : ''}
            ${scheme.insuranceCover > 0 ? `<div class="highlight-item"><span class="h-icon">🛡️</span><span>₹${(scheme.insuranceCover/100000).toFixed(0)} ಲಕ್ಷ ವಿಮೆ</span></div>` : ''}
          </div>

          <div class="card-footer">
            <button class="btn-card-details" data-id="${scheme.id}">${t.btnViewDetails}</button>
            <a href="${scheme.portalUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-apply" title="${t.btnApply}">
              <span>${t.btnApply}</span>
              <span class="apply-arrow">↗</span>
            </a>
          </div>
        </div>
      `;
    }).join("");

    // Attach Speech Handlers
    schemesGrid.querySelectorAll(".btn-speech-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const schemeId = btn.getAttribute("data-scheme-id");
        const scheme = window.schemesData.find(s => s.id === schemeId);
        if (scheme) {
          const textToSpeak = `${scheme.names[window.currentLang] || scheme.names.en}. ${scheme.shortDesc[window.currentLang] || scheme.shortDesc.en}`;
          window.speechAssistant.speak(textToSpeak, window.currentLang, btn);
        }
      });
    });

    // Attach Details Modal Handlers
    schemesGrid.querySelectorAll(".btn-card-details").forEach(btn => {
      btn.addEventListener("click", () => {
        const schemeId = btn.getAttribute("data-id");
        openSchemeDetailModal(schemeId);
      });
    });
  }

  // --- 4. DIRECT BENEFIT CALCULATOR ---
  function updateBenefitCalculator() {
    const matching = engine.getMatchingSchemes();
    const totals = engine.calculateDirectBenefits(matching);

    const valCash = document.getElementById("calcAnnualCash");
    const valCredit = document.getElementById("calcCreditLoan");
    const valInsurance = document.getElementById("calcInsurance");
    const valToolkits = document.getElementById("calcToolkits");
    const valSchemeCount = document.getElementById("calcSchemeCount");

    if (valCash) animateValue(valCash, totals.annualCash, "₹");
    if (valCredit) animateValue(valCredit, totals.creditLoan, "₹");
    if (valInsurance) animateValue(valInsurance, totals.insurance, "₹");
    if (valToolkits) animateValue(valToolkits, totals.toolkits, "₹");
    if (valSchemeCount) valSchemeCount.textContent = `${totals.schemeCount}`;
  }

  function animateValue(element, target, prefix = "") {
    let current = 0;
    const duration = 600;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = `${prefix}${Math.round(current).toLocaleString('en-IN')}`;
    }, stepTime);
  }

  // --- 5. DOCUMENT READINESS CHECKLIST ---
  function renderDocumentChecklist() {
    const container = document.getElementById("docChecklistItems");
    if (!container) return;
    const t = window.translations[window.currentLang];

    container.innerHTML = window.standardDocuments.map(doc => {
      const isChecked = window.documentSlipManager.isDocChecked(doc.id);
      const name = doc.names[window.currentLang] || doc.names.en;

      return `
        <label class="doc-checkbox-card ${isChecked ? 'checked' : ''}" data-doc-id="${doc.id}">
          <input type="checkbox" ${isChecked ? 'checked' : ''} value="${doc.id}" />
          <span class="custom-check"></span>
          <div class="doc-text-wrap">
            <span class="doc-name">${name}</span>
            ${doc.essential ? '<span class="essential-tag">ಅಗತ್ಯ / Essential</span>' : ''}
          </div>
        </label>
      `;
    }).join("");

    container.querySelectorAll(".doc-checkbox-card input").forEach(input => {
      input.addEventListener("change", (e) => {
        const docId = e.target.value;
        const isChecked = e.target.checked;
        window.documentSlipManager.toggleDoc(docId, isChecked);
        renderDocumentChecklist();
        updateReadinessGauge();
      });
    });

    updateReadinessGauge();
  }

  function updateReadinessGauge() {
    const scoreObj = window.documentSlipManager.calculateReadinessScore();
    const t = window.translations[window.currentLang];

    const bar = document.getElementById("readinessProgressBar");
    const label = document.getElementById("readinessPercentLabel");
    const statusBox = document.getElementById("readinessStatusMsg");

    if (bar) bar.style.width = `${scoreObj.percentage}%`;
    if (label) label.textContent = `${scoreObj.percentage}%`;

    if (statusBox) {
      statusBox.className = `readiness-status status-${scoreObj.status}`;
      if (scoreObj.status === "high") {
        statusBox.textContent = `🟢 ${t.readinessHigh}`;
      } else if (scoreObj.status === "medium") {
        statusBox.textContent = `🟡 ${t.readinessMedium}`;
      } else {
        statusBox.textContent = `🔴 ${t.readinessLow}`;
      }
    }
  }

  // --- 6. FIELD SURVEY & ANALYTICS ---
  function renderSurveyAnalytics() {
    const metrics = window.surveyManager.calculateMetrics();
    const t = window.translations[window.currentLang];

    // Summary Metric Cards
    const elTotal = document.getElementById("metricSurveyTotal");
    const elUnaware = document.getElementById("metricSurveyUnaware");
    const elDocReady = document.getElementById("metricSurveyDocReady");
    const elTopCat = document.getElementById("metricSurveyTopCat");

    if (elTotal) elTotal.textContent = metrics.total;
    if (elUnaware) elUnaware.textContent = `${metrics.unawarePercent}%`;
    if (elDocReady) elDocReady.textContent = `${metrics.docReadyPercent}%`;
    if (elTopCat) elTopCat.textContent = `${occupationIcons[metrics.topCategory] || ''} ${t['cat' + capitalize(metrics.topCategory)] || metrics.topCategory}`;

    // Barrier Distribution Chart
    const barrierContainer = document.getElementById("barrierChartBars");
    if (barrierContainer) {
      const b = metrics.barrierCounts;
      const bTotal = Math.max(1, metrics.total);
      
      const barrierLabels = {
        language: t.barrierLanguage,
        docs: t.barrierDocs,
        internet: t.barrierInternet,
        bribery: t.barrierBribery
      };

      barrierContainer.innerHTML = Object.keys(b).map(k => {
        const pct = Math.round((b[k] / bTotal) * 100);
        return `
          <div class="chart-row">
            <div class="row-label">${barrierLabels[k] || k}</div>
            <div class="bar-track">
              <div class="bar-fill bar-${k}" style="width: ${pct}%"></div>
            </div>
            <div class="row-val">${pct}% (${b[k]})</div>
          </div>
        `;
      }).join("");
    }
  }

  // --- 7. MODALS (DETAIL, SLIP, EVIDENCE) ---
  function openSchemeDetailModal(schemeId) {
    const scheme = window.schemesData.find(s => s.id === schemeId);
    if (!scheme || !modalContainer) return;
    const t = window.translations[window.currentLang];

    const name = scheme.names[window.currentLang] || scheme.names.en;
    const desc = scheme.shortDesc[window.currentLang] || scheme.shortDesc.en;
    const criteria = scheme.eligibility.criteria[window.currentLang] || scheme.eligibility.criteria.en;
    const benefits = scheme.benefits[window.currentLang] || scheme.benefits.en;

    const modalContent = document.getElementById("modalBodyContent");
    if (!modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-scheme-header">
        <div class="modal-scheme-title-wrap">
          <span class="badge ${scheme.level === 'karnataka' ? 'badge-karnataka' : 'badge-central'}">
            ${scheme.level === 'karnataka' ? 'ಕರ್ನಾಟಕ ಸರ್ಕಾರ' : 'ಕೇಂದ್ರ ಸರ್ಕಾರ'}
          </span>
          <h2>${name}</h2>
        </div>
        <button class="btn-modal-speech" id="btnModalSpeech">🔊 ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಿ</button>
      </div>

      <p class="modal-scheme-intro">${desc}</p>

      <div class="modal-grid-sections">
        <div class="modal-section-card">
          <h4>✅ ${t.eligibilityCriteria}</h4>
          <ul>
            ${criteria.map(c => `<li>${c}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-section-card">
          <h4>🎁 ${t.benefitsList}</h4>
          <ul>
            ${benefits.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="modal-section-card">
        <h4>📋 ${t.requiredDocs}</h4>
        <div class="modal-docs-flex">
          ${scheme.requiredDocs.map(docId => {
            const docObj = window.standardDocuments.find(d => d.id === docId);
            return `<span class="doc-badge">📄 ${docObj ? (docObj.names[window.currentLang] || docObj.names.en) : docId}</span>`;
          }).join("")}
        </div>
      </div>

      <div class="modal-footer-box">
        <div class="modal-helpline">
          <span>📞 ${t.helplineText} <strong>${scheme.helpline}</strong></span>
        </div>
        <div class="modal-actions-right">
          <button id="btnAddToTokenSlip" class="btn-secondary">📝 ಟೋಕನ್ ಚೀಟಿಗೆ ಸೇರಿಸಿ</button>
          <a href="${scheme.portalUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            ${t.btnApply} ↗
          </a>
        </div>
      </div>
    `;

    modalContainer.classList.add("open");

    // Modal Speech
    const modalSpeechBtn = document.getElementById("btnModalSpeech");
    if (modalSpeechBtn) {
      modalSpeechBtn.addEventListener("click", () => {
        const fullText = `${name}. ${desc}. ${benefits.join(". ")}`;
        window.speechAssistant.speak(fullText, window.currentLang, modalSpeechBtn);
      });
    }

    // Add to slip action
    const addSlipBtn = document.getElementById("btnAddToTokenSlip");
    if (addSlipBtn) {
      addSlipBtn.addEventListener("click", () => {
        closeModals();
        openSlipModal();
      });
    }
  }

  function openSlipModal() {
    if (!slipModalContainer) return;
    const matched = engine.getMatchingSchemes();
    const userData = {
      name: document.getElementById("applicantNameInput")?.value || "",
      village: document.getElementById("applicantVillageInput")?.value || "",
      phone: document.getElementById("applicantPhoneInput")?.value || "",
      occupation: window.translations[window.currentLang]['cat' + capitalize(engine.selectedOccupation)] || "ಕೃಷಿ / ವ್ಯಾಪಾರ"
    };

    const previewContainer = document.getElementById("slipPreviewArea");
    if (previewContainer) {
      previewContainer.innerHTML = window.documentSlipManager.getPrintableSlipHtml(userData, matched, window.currentLang);
    }

    slipModalContainer.classList.add("open");
  }

  function closeModals() {
    window.speechAssistant.stop();
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
  }

  // --- 8. EVENT LISTENERS SETUP ---
  // Language switcher buttons
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.currentLang = btn.getAttribute("data-lang");
      window.speechAssistant.stop();
      applyTranslations();
    });
  });

  // Search input
  const searchInput = document.getElementById("schemeSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderSchemes();
    });
  }

  // Level selector buttons (All, Central, Karnataka)
  document.querySelectorAll(".level-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".level-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeLevelFilter = tab.getAttribute("data-level");
      renderSchemes();
    });
  });

  // Wizard Interactive Form
  const wizardForm = document.getElementById("quickWizardForm");
  if (wizardForm) {
    wizardForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const occ = document.querySelector('input[name="wizardOcc"]:checked')?.value || "all";
      const inc = document.querySelector('input[name="wizardIncome"]:checked')?.value || "low";
      const cat = document.querySelector('input[name="wizardGender"]:checked')?.value || "all";

      activeCategoryFilter = occ;
      engine.setFilters(occ, inc, cat);

      renderCategoryFilters();
      renderSchemes();
      updateBenefitCalculator();

      // Smooth scroll to results
      document.getElementById("schemesSection")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Reset Filters Button
  function resetAllFilters() {
    activeCategoryFilter = "all";
    activeLevelFilter = "all";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    engine.setFilters("all", "low", "all");

    const allRadio = document.querySelector('input[name="wizardOcc"][value="all"]');
    if (allRadio) allRadio.checked = true;

    document.querySelectorAll(".level-tab").forEach(t => {
      if (t.getAttribute("data-level") === "all") t.classList.add("active");
      else t.classList.remove("active");
    });

    renderCategoryFilters();
    renderSchemes();
    updateBenefitCalculator();
  }

  const btnReset = document.getElementById("btnResetFiltersMain");
  if (btnReset) btnReset.addEventListener("click", resetAllFilters);

  // Print Slip Buttons
  const btnOpenSlip = document.getElementById("btnOpenSlipModal");
  if (btnOpenSlip) btnOpenSlip.addEventListener("click", openSlipModal);

  const btnPrintAction = document.getElementById("btnPrintSlipAction");
  if (btnPrintAction) {
    btnPrintAction.addEventListener("click", () => {
      window.print();
    });
  }

  // Field Survey Submission
  const surveyForm = document.getElementById("villageSurveyForm");
  if (surveyForm) {
    surveyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newEntry = {
        village: document.getElementById("surveyVillage")?.value || "ಗ್ರಾಮ",
        name: document.getElementById("surveyName")?.value || "ಫಲಾನುಭವಿ",
        age: parseInt(document.getElementById("surveyAge")?.value || "35", 10),
        occupation: document.getElementById("surveyOccupation")?.value || "farmer",
        awareBefore: document.getElementById("surveyAwareYes")?.checked || false,
        docIssue: document.getElementById("surveyDocIssueYes")?.checked || false,
        barrier: document.getElementById("surveyBarrier")?.value || "docs"
      };

      window.surveyManager.saveSurvey(newEntry);
      surveyForm.reset();
      renderSurveyAnalytics();
      
      const successToast = document.getElementById("surveySuccessMsg");
      if (successToast) {
        successToast.style.display = "block";
        setTimeout(() => successToast.style.display = "none", 4000);
      }
    });
  }

  // Export Survey CSV
  const btnExportCsv = document.getElementById("btnExportSurveyCsv");
  if (btnExportCsv) {
    btnExportCsv.addEventListener("click", () => {
      window.surveyManager.exportToCSV();
    });
  }

  // 15-Week Evidence Dossier Modal Trigger
  const btnOpenEvidence = document.getElementById("btnOpenEvidenceModal");
  if (btnOpenEvidence && evidenceModalContainer) {
    btnOpenEvidence.addEventListener("click", () => {
      evidenceModalContainer.classList.add("open");
    });
  }

  // Close Modal buttons
  document.querySelectorAll(".btn-close-modal, .modal-backdrop").forEach(el => {
    el.addEventListener("click", closeModals);
  });

  // Hero Voice Listen
  const btnHeroListen = document.getElementById("btnHeroListen");
  if (btnHeroListen) {
    btnHeroListen.addEventListener("click", () => {
      const t = window.translations[window.currentLang];
      const introText = `${t.portalTitle}. ${t.heroTitle}. ${t.heroDesc}`;
      window.speechAssistant.speak(introText, window.currentLang, btnHeroListen);
    });
  }

  // Helper
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Initial Boot
  applyTranslations();
});
