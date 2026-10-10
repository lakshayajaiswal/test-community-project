/**
 * GramKalyan - Web Speech API Voice Assistant
 * Supports Kannada (kn-IN), Hindi (hi-IN), and English (en-IN)
 */

class SpeechAssistant {
  constructor() {
    this.synth = window.speechSynthesis;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.activeButton = null;
  }

  isSupported() {
    return 'speechSynthesis' in window;
  }

  speak(text, lang = 'kn', buttonEl = null) {
    if (!this.isSupported()) {
      alert("ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಸೌಲಭ್ಯ ಲಭ್ಯವಿಲ್ಲ (Speech synthesis is not supported on this browser).");
      return;
    }

    // If currently speaking the same button, stop it
    if (this.isSpeaking && this.activeButton === buttonEl) {
      this.stop();
      return;
    }

    // Stop any ongoing speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map language code to standard locales
    if (lang === 'kn') {
      utterance.lang = 'kn-IN';
    } else if (lang === 'hi') {
      utterance.lang = 'hi-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    utterance.rate = 0.95; // Slightly slower for clear rural comprehension
    utterance.pitch = 1.0;

    this.activeButton = buttonEl;
    if (buttonEl) {
      buttonEl.classList.add('playing');
      const icon = buttonEl.querySelector('.speech-icon');
      if (icon) icon.textContent = '⏹️';
      const label = buttonEl.querySelector('.speech-label');
      if (label) {
        label.textContent = lang === 'kn' ? 'ನಿಲ್ಲಿಸಿ' : (lang === 'hi' ? 'रोकें' : 'Stop');
      }
    }

    utterance.onend = () => {
      this.resetButton(buttonEl);
      this.isSpeaking = false;
      this.currentUtterance = null;
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis error or cancelled:", e);
      this.resetButton(buttonEl);
      this.isSpeaking = false;
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    this.isSpeaking = true;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    if (this.activeButton) {
      this.resetButton(this.activeButton);
    }
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.activeButton = null;
  }

  resetButton(buttonEl) {
    if (!buttonEl) return;
    buttonEl.classList.remove('playing');
    const icon = buttonEl.querySelector('.speech-icon');
    if (icon) icon.textContent = '🔊';
    const label = buttonEl.querySelector('.speech-label');
    if (label) {
      const curLang = window.currentLang || 'kn';
      label.textContent = curLang === 'kn' ? 'ಕೇಳಿ' : (curLang === 'hi' ? 'सुनें' : 'Listen');
    }
  }
}

window.speechAssistant = new SpeechAssistant();
