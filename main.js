  
//  alert(' Development in progress');
const customLanguageDictionaries = {
    english: {
   
      "what":"endre","how": "engana","when": "eppa","where": "evde","name": "per","your": "ninde","you": "nin","my": "nande","me":"nan","chell":"say","yes":"haan","noo":"alla",
      "no": "illa","do":"ak","new":"pudye","friend": "changayi","then":"pinne","afternoon":"ucche","morning":"subey","night":"jawu","sleep":"keda","get":"kit",
       "up":"mel","down":"keel","right":"bala","left":"yeda","middle":"nadu","see":"nok","she":"awl","he":"awn","love":"pirsa","like":"ista", "animal":"prani",
       "question":"prashna'","answer":"utthara","box":"petti","go":"po","come":"ba","cold":"sheetha","fever":"pani","cough":"chame","play":"kali","sorry":"maaf","":"",
      "they":"anga",  "which":"ed",  "them":"anga",  "some":"korya",  "home":"aga","apple":"yeppulu","man":"manisa","take":"yed","outside":"parth","inside":"ulga",
      "want":"benu","sad":"bejar","happy":"kosi","more":"yara","thing":"samana","azlan":"ajju",
      "":"",
      "":"",
      
     //sentences:
        "howareyou": "nin engana ulla","whatisyourname": "ninde per endre","iamnotwell":"nakk husharilla","whatshouldisay":"nan endre chellon","doyouknowme":"nikk nande gurtha unda",
        "mynameis":"nande per","theydidn'tsayanything": "anga endum chenthla","hedidn'tsayanything": "awn endum chenthla","shedidn'tsayanything": "awl endum chenthla","iloveyou": "nan ninde pirsakra",
        "ilikeyou":"nakk nin ista","willyoubemyfriend":"nin nande changayi awre", "ihaveafewquestions":"nakk korea questions und", 
      "ilikeher":"nakk awl ista","iloveher":"nan awlle pirsakre","ilikehim":"nakk awn ista","ilovehim":"nan awnde pirsa akre","canisaysomething":"na endre ayeng chellata",
      "whatcanidoforyou":"nan nikk endre akon","":"","":"",
      "":"","":"","":"","":"","":"","":"","":"",
      "":"","":"","":"","":"","":"","":"","":"",
    },

  };
 
 
 function translate(text, inputLanguage, outputLanguage) {
  let translatedText = "";
  if (inputLanguage === "custom-language") {
    const dictionaries = customLanguageDictionaries[outputLanguage];

    
    text = text.replace(/ /g, "");

    const words = text.split(" ");
    for (const word of words) {
      
      const translation = dictionaries[word.toLowerCase()];
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
  
