/**
 * GramKalyan - Eligibility Matching Engine & Direct Benefit ROI Calculator
 */

class EligibilityEngine {
  constructor(schemes) {
    this.schemes = schemes || [];
    this.selectedOccupation = "all";
    this.selectedIncomeTier = "low"; // low, mid, above
    this.selectedCategory = "all";   // all, female, scst
  }

  setFilters(occupation, incomeTier, category) {
    this.selectedOccupation = occupation || "all";
    this.selectedIncomeTier = incomeTier || "low";
    this.selectedCategory = category || "all";
  }

  getMatchingSchemes() {
    return this.schemes.filter(scheme => {
      // 1. Occupation Match
      if (this.selectedOccupation !== "all") {
        if (!scheme.eligibility.occupations.includes(this.selectedOccupation)) {
          return false;
        }
      }

      // 2. Gender / Category Match
      if (scheme.eligibility.gender === "female" && this.selectedCategory !== "female") {
        // If scheme is strictly for women, show only if female is chosen or if occupation is women
        if (this.selectedOccupation !== "women") {
          return false;
        }
      }

      // 3. Income Tier Match
      let maxCap = scheme.eligibility.maxIncome;
      if (this.selectedIncomeTier === "above" && maxCap < 500000) {
        return false;
      }
      if (this.selectedIncomeTier === "mid" && maxCap < 250000) {
        return false;
      }

      return true;
    });
  }

  calculateDirectBenefits(matchingList) {
    let listToCalculate = matchingList && matchingList.length > 0 ? matchingList : this.getMatchingSchemes();
    
    let totals = {
      annualCash: 0,
      creditLoan: 0,
      insurance: 0,
      toolkits: 0,
      schemeCount: listToCalculate.length
    };

    listToCalculate.forEach(item => {
      totals.annualCash += item.annualCashSupport || 0;
      totals.creditLoan += item.creditSupport || 0;
      totals.insurance = Math.max(totals.insurance, item.insuranceCover || 0);
      totals.toolkits += item.toolkitSupport || 0;
    });

    return totals;
  }
}

window.EligibilityEngine = EligibilityEngine;
