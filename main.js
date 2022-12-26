alert(' Development in progress');
const customLanguageDictionaries = {
    english: {
      "how": "engana",
      "when": "eppa",
      "where": "evde",
      "how are you": "Rahathalle"
    },

  };
  function translate(text, inputLanguage, outputLanguage) {
    let translatedText = "";
    if (inputLanguage === "custom-language") {
      const dictionaries = customLanguageDictionaries[outputLanguage];
      // Split the text into words or phrases
      const words = text.split(" ");
      for (const word of words) {
        // Look up the translation of the word or phrase in the dictionaries
        const translation = dictionaries[word.toLowerCase()];
        if (translation) {
          // If a translation is found, add it to the translated text
          translatedText += `${translation} `;
        } else {
          // If no translation is found, leave the word or phrase unchanged
          translatedText += `${word} `;
        }
      }
      translatedText = translatedText.trim();
    } else {
      // Use a different set of dictionaries or a translation API to translate from a standard language to another language
      translatedText = text;
    }
    return translatedText;
  }
  
  
  document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const inputLanguage = this["input-language"].value;
  const inputText = this["input-text"].value;
  const outputLanguage = this["output-language"].value;
  let outputText = "";
  outputText = translate(inputText, inputLanguage, outputLanguage);
  this["output-text"].value = outputText;
  });
  
  
  
