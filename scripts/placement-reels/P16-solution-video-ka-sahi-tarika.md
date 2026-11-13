# P16 · Video में सब समझ आया, blank file में सब गायब
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 75 सेकंड · **Keyword:** NOTES · **एक सीख:** Solution देखकर "समझ आया" काफ़ी नहीं, video बंद करके खुद से लिख पाओ तभी आया।

## 🎙️ वॉइसओवर
Solution video देखते वक़्त तुम्हारा सिर ऐसे हिल रहा था जैसे शादी में DJ बज रहा हो, लेकिन blank file खुलते ही DJ बंद और cursor बस टिमटिमा रहा है। ये कमज़ोरी नहीं, illusion of competence है, यानी answer आँखों के सामने हो तो दिमाग़ को लगता है कि ये मुझे आता है। Video में तुम सिर्फ़ पहचान रहे थे, जबकि blank file में खुद से निकालना पड़ता है, और ये दो अलग skills हैं। Roediger और Karpicke की research में भी यही दिखा, बार बार पढ़ने वाले students ज़्यादा confident थे, पर एक हफ़्ते बाद ज़्यादा याद उन्हें रहा जिन्होंने खुद से याद करके लिखा। इसे testing effect कहते हैं, यानी खुद से निकालना, दोबारा देखने से ज़्यादा पक्का करता है। तो मेरा तरीका है, हाथ पीछे, keyword नीचे, video बंद। पहली बार keyboard से हाथ दूर रखकर सिर्फ़ ये समझो कि approach काम क्यों करती है। दूसरी बार हर हिस्से पर pause करके code की जगह बस छोटे keywords लिखो, जैसे map में count। फिर video बंद करो और उन keywords से पूरा code खुद लिखो, और अटको तो सिर्फ़ वही हिस्सा दोबारा देखो। Comment में NOTES लिखो, मैं तुम्हें solution study template DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Expectation vs Reality split:** बाएँ stick figure video देखते हुए सिर हिला रहा है, ऊपर 🎶 notes और "हाँ हाँ, obvious है 😌"; दाएँ वही figure blank editor के सामने, सिर्फ़ blinking cursor, ऊपर "🫠 ये क्या था?"।
- **Concept card:** gold में "Illusion of competence" → तीर → "answer सामने = लगता है आता है"। नीचे दो डिब्बे: "पहचानना 👀" vs "खुद से निकालना ✍️", बीच में "≠"।
- **Research card:** दो stick figures: एक के हाथ में "दोबारा पढ़ो 📖" और ऊपर "😎 100% sure"; दूसरे के हाथ में "खुद से लिखो ✍️"; "1 हफ़्ते बाद" stamp के बाद पहले वाले का 😎 → 😬। नीचे छोटा: "Roediger & Karpicke, 2006"।
- **Method card (3 step, एक एक करके जलते हैं):** "1. हाथ पीछे 🙌 = सिर्फ़ 'क्यों'", "2. keyword नीचे 📝 = 'map में count'", "3. video बंद ⛔ = खुद लिखो"।
- **Keyword demo:** काले bg पर Two Sum के keywords gold में एक के नीचे एक: `map बनाओ` → `target − x ढूँढो` → `मिला? index दो` → `नहीं? x डालो`, बगल में उसी क्रम में code की lines बनती हैं।
- **Ending:** comment bubble "NOTES" + DM icon + "FOLLOW"।

## 📄 Cheat sheet (comment → DM)
**नाम:** हाथ पीछे, keyword नीचे, video बंद: Solution Study Template · **Keyword:** NOTES
- **Video से पहले:** खुद कम से कम 20 से 30 मिनट try करो, और लिखो कि कहाँ अटके: `मैं यहाँ अटका: ________`। इससे video में तुम्हें पता होगा कि किस हिस्से को ध्यान से सुनना है।
- **Watch 1 (हाथ पीछे):** keyboard से हाथ दूर। सिर्फ़ तीन सवालों के जवाब लिखो: (1) brute force क्या था, (2) उसमें दिक्कत क्या थी (कितनी complexity), (3) नया idea एक line में, "क्योंकि" के साथ।
- **Watch 2 (keyword नीचे):** हर block पर pause करो, और code नहीं, 2 से 4 शब्द का action keyword लिखो। Example (Two Sum): `map बनाओ` → `हर x के लिए target − x map में ढूँढो` → `मिला तो दोनों index दो` → `नहीं मिला तो x और उसका index map में डालो`।
- **Video बंद (खुद लिखो):** tab बंद करो। सिर्फ़ keywords देखकर पूरा code लिखो। Run करने से पहले sample input पर एक बार dry run करो।
- **Gap log:** जहाँ अटके, उस keyword पर ✳ लगाओ और video में सिर्फ़ उसी हिस्से का timestamp खोलो, पूरी video दोबारा नहीं।
- **Complexity खुद निकालो:** time ___, space ___। फिर video से मिलाओ।
- **Edge cases की list:** खाली या एक element, duplicates, negative numbers, सबसे बड़ा n।
- **एक line का pattern tag:** "ये ______ pattern था, क्योंकि ______"। यही line revision में सबसे ज़्यादा काम आएगी।
- **Re-solve dates:** अगले दिन, फिर 3 दिन बाद, फिर 7 दिन बाद, हर बार blank file से, बिना keywords देखे।
- **Brute force का पुल:** video सीधे optimal पर कूदे, तो pause करके खुद brute force लिखो, फिर देखो optimal किस दोहराए हुए काम को हटाता है (जैसे Two Sum में हर number के लिए बाकी array को दोबारा scan करना, जिसे map एक बार में हटा देता है)। यही "क्यों" interview में पूछा जाता है।

## ✅ ध्यान रखो / सोर्स
- "Two views method" या किसी दूसरे creator के method का नाम **मत लो**। हमारा नाम: "हाथ पीछे, keyword नीचे, video बंद"।
- Roediger & Karpicke की study prose passages पर थी, coding पर नहीं। इसलिए VO में सिर्फ़ "research में यही दिखा" बोलो, "coding पर research prove करती है" मत बोलो। ज़्यादा confident वाला हिस्सा Experiment 2 का है: SSSS (चार बार पढ़ने वाले) group ने 1 हफ़्ते बाद की अपनी याद सबसे ज़्यादा आँकी, पर 1 हफ़्ते बाद STTT (एक बार पढ़ो, तीन बार खुद लिखो) group ने ज़्यादा याद रखा।
- कोई percentage मत बोलो ("50% ज़्यादा याद रहता है" वगैरह), क्योंकि असर delay और material पर निर्भर करता है।
- "Fluency illusion" और "illusion of competence" दोनों लगभग एक ही बात हैं; VO में सिर्फ़ एक नाम (illusion of competence) रखा है ताकि viewer confuse न हो।
- "DM कर दूँगा" तभी, जब comment-keyword automation चालू हो।
- **सोर्स:**
  - Illusion of competence: Koriat, A., & Bjork, R. A. (2005). *Illusions of competence in monitoring one's knowledge during study.* Journal of Experimental Psychology: Learning, Memory, and Cognition, 31(2), 187–194. (answer सामने होने पर लोग अपनी आगे की याद को ज़्यादा आँकते हैं)
  - Testing effect: Roediger, H. L., & Karpicke, J. D. (2006). *Test-enhanced learning: Taking memory tests improves long-term retention.* Psychological Science, 17(3), 249–255. (5 मिनट पर दोबारा पढ़ना आगे, पर 2 दिन और 1 हफ़्ते बाद testing वाला group आगे; दोबारा पढ़ने वाले ज़्यादा confident थे)
