# P21 · 5 सवाल रोज़ vs 1 सवाल पर 2 घंटे: दोनों गड़बड़
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 75 सेकंड · **Keyword:** BALANCE · **एक सीख:** गिनती patterns से मिलवाती है, गहराई नए सवाल से लड़ना सिखाती है; fixed think time से दोनों साथ चलते हैं।

## 🎙️ वॉइसओवर
तुम्हारा roommate रोज़ 5 सवाल करके LeetCode का counter ऐसे बढ़ाता है जैसे Instagram के followers, और तुम एक ही सवाल पर 2 घंटे से ऐसे बैठे हो जैसे उसी से शादी करनी है। सच ये है कि तुम दोनों गलत हो, बस अलग तरीके से। Roommate के साथ Goodhart's law चल रहा है, यानी जब कोई number ही target बन जाए तो वो सही नाप नहीं रहता, क्योंकि counter के चक्कर में आसान और मिलते जुलते सवाल ही चुने जाते हैं। और तुम्हारे साथ sunk cost fallacy चल रही है, यानी ये सोच कि इतना time लगा दिया, अब solution देखा तो सब बेकार, जबकि गया हुआ time वैसे भी वापस नहीं आता। अब समझो दोनों क्या देते हैं। ज़्यादा सवाल patterns से मिलवाते हैं, और गहराई से सोचना नए सवाल पर लड़ना सिखाता है, इसलिए दोनों चाहिए। तो पहले core patterns पकड़ो, जैसे sliding window, binary search, BFS और DP, और random सवाल बाद में करो। हर सवाल को 20 से 30 मिनट का fixed time दो, फिर बिना guilt के solution पढ़कर समझो। और गिनती सिर्फ़ उन सवालों की करो जो कुछ दिन बाद blank file से दोबारा बन गए। Comment में BALANCE लिखो, मैं तुम्हें daily practice routine DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Split screen:** बाएँ stick figure roommate, ऊपर counter `147 → 152 ✅✅✅✅✅` और "📈 grind"; दाएँ तुम, एक ही सवाल, घड़ी 🕐 → 🕒 और ऊपर "💍 इसी से शादी करूँगा"।
- **Concept card 1:** gold "Goodhart's law" → तीर → "number target बना, तो number झूठ बोलने लगता है"। नीचे छोटा: counter 📈 पर "Easy, Easy, वही वाला Easy 🙃"।
- **Concept card 2:** gold "Sunk cost fallacy" → तीर → "2 घंटे लगा दिए, अब छोड़ूँ कैसे?"; 🕒 पर लाल ✗ और "गया time वापस नहीं आता"।
- **Balance तराज़ू:** एक पलड़े पर "गिनती = patterns से पहचान", दूसरे पर "गहराई = नए सवाल पर दिमाग़"; बीच में gold "⏱️ 20–30 min"।
- **Rule card (3 lines, एक एक करके):** "core patterns पहले" → "fixed think time, फिर solution" → "गिनती = जो दोबारा बना"।
- **Ending:** comment bubble "BALANCE" + DM icon + "FOLLOW"; नीचे छोटा "उस roommate को भेजो जिसका counter तुमसे ज़्यादा है 😤"।

## 📄 Cheat sheet (comment → DM)
**नाम:** गिनती + गहराई: Daily Practice Routine (करीब 2 घंटे) · **Keyword:** BALANCE
- **0–10 min, warm-up re-solve:** 3 या 7 दिन पहले वाला एक सवाल blank file से, बिना पुराना code देखे।
- **10–55 min, नया सवाल 1 (इस हफ़्ते का pattern):** 25 min खुद सोचो। न बने तो सिर्फ़ hint या approach पढ़ो (code नहीं) और 10 min और दो। फिर पूरा solution पढ़ो, बंद करो, और खुद लिखो।
- **55–95 min, नया सवाल 2 (उसी pattern का, थोड़ा कठिन):** वही rule: पहले खुद, फिर hint, फिर solution।
- **95–110 min, notes:** हर सवाल के लिए 3 lines: pattern का नाम, असली trick एक line में, और "मेरी गलती क्या थी"।
- **110–120 min, tracker:** सवाल के आगे re-solve की तारीखें लिखो (3 दिन बाद, 7 दिन बाद)।
- **Think time का rule of thumb:** Easy करीब 15 min, Medium (सबसे आम, VO वाला) 20–30 min, Hard करीब 40 min। इसके बाद भी बिना नए idea के अटके रहना अक्सर सीख कम, थकान ज़्यादा होती है।
- **Pattern order (एक आम क्रम):** arrays और hashing → two pointers → sliding window → stack → binary search → linked list → trees → heap → backtracking → graphs → DP। एक pattern पर 4 से 6 सवाल, फिर आगे।
- **हफ़्ते में एक दिन mixed set:** अलग अलग patterns के 3 सवाल, topic tag छुपाकर। इससे पता चलता है कि तुम pattern *पहचान* पाते हो या सिर्फ़ topic देखकर कर पाते हो।
- **Week का score:** "कितने सवाल" नहीं, बल्कि (1) कितने नए patterns आए, (2) re-solve में कितने सवाल बिना देखे बने।
- **कम time वाले दिन (1 घंटा):** 1 re-solve + 1 नया सवाल। Streak टूटने से अच्छा है छोटा दिन।

## ✅ ध्यान रखो / सोर्स
- "Mere exposure effect" यहाँ **मत लो**। उसका मतलब है बार बार देखी चीज़ हमें ज़्यादा *पसंद* आने लगती है; उसका सवाल हल करने की skill से कोई लेना देना नहीं।
- "रोज़ 5 सवाल वाले कभी select नहीं होते" जैसा absolute दावा मत करो। VO का point है कि सिर्फ़ गिनती को target बनाना गड़बड़ है, ज़्यादा सवाल करना अपने आप में गलत नहीं।
- 20 से 30 मिनट और ऊपर का time table एक rule of thumb है, research का number नहीं। VO और sheet में इसे "rule" / "rule of thumb" ही कहो।
- Goodhart's law असल में economics से आया concept है (Goodhart, 1975); "जब measure target बन जाए, तो वो अच्छा measure नहीं रहता" वाली wording Marilyn Strathern (1997) की generalization है। VO में इसे "psychology research" मत कहो, सिर्फ़ नाम और मतलब बोलो।
- Roommate का मज़ाक हल्का रखो, किसी को नीचा दिखाए बिना।
- **सोर्स:**
  - Goodhart's law: Goodhart, C. A. E. (1975), UK monetary policy पर paper; आम wording: Strathern, M. (1997). *'Improving ratings': audit in the British University system.* European Review, 5(3), 305–321.
  - Sunk cost: Arkes, H. R., & Blumer, C. (1985). *The psychology of sunk cost.* Organizational Behavior and Human Decision Processes, 35, 124–140.
  - पहले खुद जूझो, फिर solution से सीखो (fixed think time का logic): Kapur, M. (2008). *Productive failure.* Cognition and Instruction, 26(3), 379–424. (Paper कोई minute की limit नहीं देता; 20–30 min हमारा rule of thumb है।)
