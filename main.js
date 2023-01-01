  
//  alert(' Development in progress');
const customLanguageDictionaries = {
    english: {
   
      "what":"endre","how": "engana","when": "eppa","where": "evde","name": "per","your": "ninde","you": "nin","my": "nande","me":"nan","chell":"say","yes":"haan","noo":"alla",
      "no": "illa","do":"ak","new":"pudye","friend": "changayi","then":"pinne","afternoon":"ucche","morning":"subey","night":"jawu","sleep":"keda","get":"kit",
       "up":"mel","down":"keel","right":"bala","left":"yeda","middle":"nadu","see":"nok","she":"awl","he":"awn","love":"pirsa","like":"ista", "animal":"prani",
       "question":"prashna'","answer":"utthara","box":"petti","go":"po","come":"ba","cold":"sheetha","fever":"pani","cough":"chame","play":"kali","sorry":"maaf","":"",
      "they":"anga",  "which":"ed",  "them":"anga",  "some":"korya",  "home":"aga","apple":"yeppulu","man":"manisa","take":"yed","outside":"parth","inside":"ulga",
      "want":"benu","sad":"bejar","happy":"kosi","more":"yara","thing":"samana","azlan":"ajju", "beatiful":"chanda","fragrance":"kammane","":"","":"",
      "smell":"mana","good":"nalle","woman":"penn","boy":"an","girl":"penn","men":"an","life":"jeema","worst":"bedak","there":"awda","here":"ooda",
      "after":"pinne","now":"ippa","call":"bili","much":"chomme","meaning":"artha","selfish":"meen bikkrawnu","":"","":"","":"",
      "":"",
      //animals:
      "goat":"aad","cow":"pai","horse":"kudre","hen":"koli","cat":"poocha","lion":"simha","rabit":"mola","monkey":"manga","tiger":"pili","camel":"wanta' ","crocodile":"modhala",
      "fish":"meen","parror":"gili","bear":"karadi","donkey":"katthe' ","dog":"nayi","deer":"jinke","pig":"panni","cheetah":"chirathe","elephant":"aane",
      "snake":"ucchi","cobra":"pambu","sheep":"kuri","duck":"bathukoli","tortoise":"aame","buffalo":"yard","":"","":"",
      
     //sentences:
        "howareyou": "nin engana ulla","whatisyourname": "ninde per endre","iamnotwell":"nakk husharilla","whatshouldisay":"nan endre chellon","doyouknowme":"nikk nande gurtha unda",
        "mynameis":"nande per","theydidn'tsayanything": "anga endum chenthla","hedidn'tsayanything": "awn endum chenthla","shedidn'tsayanything": "awl endum chenthla","iloveyou": "nan ninde pirsakra",
        "ilikeyou":"nakk nin ista","willyoubemyfriend":"nin nande changayi awre", "ihaveafewquestions":"nakk korea questions und", 
      "ilikeher":"nakk awl ista","iloveher":"nan awlle pirsakre","ilikehim":"nakk awn ista","ilovehim":"nan awnde pirsa akre","canisaysomething":"na endre ayeng chellata",
      "whatcanidoforyou":"nan nikk endre akon","iamfine":"nan husharulla","whatareyoudoing":"nin endre akyo ulla",
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
  
