/**
 * GramKalyan - Field Survey & Community Awareness Analytics
 * Tailored for VKIT Community Project academic field survey metrics
 */

// Baseline sample data gathered during community fieldwork near VKIT (Kumbalgodu, Kengeri, Bidadi rural fringes)
const defaultSurveyData = [
  { id: 1, village: "Kumbalgodu Rural", name: "Ramesh Gowda", age: 48, occupation: "farmer", awareBefore: false, docIssue: true, barrier: "docs" },
  { id: 2, village: "Kallugopahalli", name: "Lakshmi Bai", age: 39, occupation: "women", awareBefore: false, docIssue: true, barrier: "language" },
  { id: 3, village: "Bidadi Hobli", name: "Manjunath S.", age: 52, occupation: "artisan", awareBefore: false, docIssue: true, barrier: "internet" },
  { id: 4, village: "Channapatna Border", name: "Abdul Khader", age: 44, occupation: "artisan", awareBefore: true, docIssue: false, barrier: "docs" },
  { id: 5, village: "Kengeri Satellite", name: "Sunitha M.", age: 29, occupation: "women", awareBefore: false, docIssue: false, barrier: "language" },
  { id: 6, village: "Kumbalgodu Rural", name: "Basavaraju K.", age: 55, occupation: "farmer", awareBefore: true, docIssue: true, barrier: "docs" },
  { id: 7, village: "Gollahalli", name: "Nagaraju", age: 34, occupation: "vendor", awareBefore: false, docIssue: true, barrier: "bribery" },
  { id: 8, village: "Bidadi Hobli", name: "Pooja V.", age: 22, occupation: "youth", awareBefore: false, docIssue: false, barrier: "internet" },
  { id: 9, village: "Kallugopahalli", name: "Shivanna", age: 60, occupation: "worker", awareBefore: false, docIssue: true, barrier: "language" },
  { id: 10, village: "Ramanagara Fringe", name: "Siddalingappa", age: 47, occupation: "farmer", awareBefore: true, docIssue: false, barrier: "internet" },
  { id: 11, village: "Kumbalgodu Rural", name: "Shanta Kumari", age: 41, occupation: "women", awareBefore: false, docIssue: true, barrier: "docs" },
  { id: 12, village: "Hejjala", name: "Chandrashekar", age: 25, occupation: "youth", awareBefore: true, docIssue: false, barrier: "internet" },
  { id: 13, village: "Gollahalli", name: "Muniyappa", age: 50, occupation: "worker", awareBefore: false, docIssue: true, barrier: "bribery" },
  { id: 14, village: "Bidadi Hobli", name: "Gangamma", age: 58, occupation: "women", awareBefore: false, docIssue: true, barrier: "language" },
  { id: 15, village: "Kumbalgodu Rural", name: "Venkatesh", age: 36, occupation: "vendor", awareBefore: false, docIssue: false, barrier: "docs" }
];

class SurveyManager {
  constructor() {
    this.storageKey = "gramkalyan_vkit_surveys_v1";
    this.surveys = this.loadSurveys();
  }

  loadSurveys() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Could not load from localStorage:", e);
    }
    // Initialize with baseline project data
    return [...defaultSurveyData];
  }

  saveSurvey(newEntry) {
    newEntry.id = Date.now();
    this.surveys.unshift(newEntry);
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.surveys));
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
    return this.calculateMetrics();
  }

  calculateMetrics() {
    const total = this.surveys.length;
    if (total === 0) {
      return { total: 0, unawarePercent: 0, docReadyPercent: 0, topCategory: "—" };
    }

    const unawareCount = this.surveys.filter(s => !s.awareBefore).length;
    const docReadyCount = this.surveys.filter(s => !s.docIssue).length;

    // Category distribution
    const catCounts = {};
    const barrierCounts = { language: 0, docs: 0, internet: 0, bribery: 0 };

    this.surveys.forEach(s => {
      catCounts[s.occupation] = (catCounts[s.occupation] || 0) + 1;
      if (s.barrier && barrierCounts[s.barrier] !== undefined) {
        barrierCounts[s.barrier]++;
      }
    });

    let topCategory = "farmer";
    let maxCatVal = 0;
    for (let c in catCounts) {
      if (catCounts[c] > maxCatVal) {
        maxCatVal = catCounts[c];
        topCategory = c;
      }
    }

    return {
      total: total,
      unawareCount: unawareCount,
      unawarePercent: Math.round((unawareCount / total) * 100),
      docReadyCount: docReadyCount,
      docReadyPercent: Math.round((docReadyCount / total) * 100),
      topCategory: topCategory,
      barrierCounts: barrierCounts,
      categoryCounts: catCounts
    };
  }

  exportToCSV() {
    const headers = ["ID", "Village", "Name", "Age", "Occupation", "PreviouslyAware", "HasDocIssues", "PrimaryBarrier"];
    const rows = this.surveys.map(s => [
      s.id,
      `"${s.village}"`,
      `"${s.name}"`,
      s.age,
      s.occupation,
      s.awareBefore ? "Yes" : "No",
      s.docIssue ? "Yes" : "No",
      s.barrier
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `VKIT_Community_Project_Survey_Data_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  resetToDefault() {
    this.surveys = [...defaultSurveyData];
    localStorage.removeItem(this.storageKey);
    return this.calculateMetrics();
  }
}

window.surveyManager = new SurveyManager();
