alert(' Development in progress');
const customLanguageDictionaries = {
    english: {
      "what":"endre",
      "how": "engana",
      "when": "eppa",
      "where": "evde",
      "name": "per",
      "how are you": "Rahathalle",
      "your": "ninde",
      "you": "nin",
      "my": "nande",
      "me":"nan",
      
    },

  };
  function translate(text, inputLanguage, outputLanguage) {
    let translatedText = "";
    if (inputLanguage === "custom-language") {
      const dictionaries = customLanguageDictionaries[outputLanguage];
      
      const words = text.split(" ");
      for (const word of words) {
      
        const wordu = word.replace(/ /g, "_"); 
        const translation = dictionaries[word.toLowerCase()];
        translatedText
        
        if (translation) {
          
          translatedText += `${translation} `;
        } else {
        
          translatedText += `${word} `;
        }
      }
      translatedText = translatedText.trim();
    } else {
      
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
  
  
  
