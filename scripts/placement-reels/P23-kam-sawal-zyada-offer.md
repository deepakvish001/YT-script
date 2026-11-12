# P23 · 500 सवाल वाला रह गया, 200 वाला ले गया offer
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 75 सेकंड · **Keyword:** SMART · **एक सीख:** कितने सवाल नहीं, कौन से सवाल: ज़रूरी patterns पहले, अटकने की limit, और sheet की छँटाई।

## 🎙️ वॉइसओवर
तुमने LeetCode पर 500 सवाल किए, दोस्त ने 200, फिर भी offer letter उसके inbox में आया और घर पर रिश्तेदार पूछ रहे हैं, बेटा, placement का क्या हुआ? दुख होता है, पर interview में counter नहीं गिना जाता, वहाँ देखा जाता है कि नए सवाल पर तुम सोच पाते हो या नहीं। ज़्यादा सवाल safe लगते हैं, क्योंकि हर green tick progress जैसा लगता है, पर एक जैसे सवाल दोहराना असल में आराम है। इसके उलट चीज़ को deliberate practice कहते हैं, यानी गिनती की जगह अपनी कमज़ोर जगह पर, feedback के साथ practice करना। तो कम सवालों में ज़्यादा तैयारी के लिए तीन आदतें बनाओ। पहली, पक्का माल पहले, यानी वो patterns जो interviews में बार बार आते हैं, जैसे hashing, sliding window, binary search, trees, graphs और DP। दूसरी, अटकने का alarm, यानी 20 से 30 मिनट तक न बने तो solution से सीखो और कुछ दिन बाद दोबारा बनाओ। तीसरी, AI वाली छलनी, यानी 400 सवालों वाली sheet AI को दो और हर pattern के तीन से पाँच core सवाल छँटवा लो, पर list खुद check करना, क्योंकि AI गलत भी हो सकता है। Comment में SMART लिखो, मैं तुम्हें high yield pattern list और shortlist prompt DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook split:** बाएँ तुम्हारा profile card "Solved: 500 🏋️", दाएँ दोस्त का "Solved: 200 😌"; दोस्त के ऊपर 📩 "Offer Letter" गिरता है, तुम्हारे ऊपर chat bubble: "बेटा, placement का क्या हुआ? 👀 (रिश्तेदार)"।
- **Counter vs दिमाग़ card:** interviewer stick figure के हाथ में magnifier 🔍, counter `500` के पास से निकल कर "नया सवाल 🤔" पर रुकता है।
- **Concept card:** gold "Deliberate practice" → तीर → "कमज़ोर जगह + feedback, सिर्फ़ गिनती नहीं"। नीचे छोटा: "✅✅✅ एक जैसे Easy = आराम 🛋️"।
- **3 आदतें (एक एक करके, gold नाम):** "📦 पक्का माल पहले", "⏰ अटकने का alarm (20–30 min)", "🧹 AI वाली छलनी (400 → core)"।
- **छलनी animation:** ऊपर लंबी list गिरती है, छलनी से नीचे सिर्फ़ pattern-wise छोटे डिब्बे निकलते हैं; बगल में "⚠️ खुद verify करो"।
- **Ending:** comment bubble "SMART" + DM icon + "FOLLOW"।

## 📄 Cheat sheet (comment → DM)
**नाम:** पक्का माल: High-Yield Pattern List + Shortlist Prompt · **Keyword:** SMART
- **High-yield patterns (ज़्यादातर curated interview lists में बार बार):** (1) arrays + hashing, (2) two pointers, (3) sliding window, (4) prefix sum, (5) stack / monotonic stack, (6) binary search (answer पर binary search भी), (7) linked list, (8) trees: DFS / BFS / BST, (9) heap / top-K, (10) intervals + sorting, (11) graphs: BFS / DFS / topological sort, (12) backtracking, (13) DP: 1D और 2D grid / strings। Advanced (बाद में): union find, trie, greedy proofs, bit manipulation।
- **हर pattern के लिए 3–5 सवाल काफ़ी:** एक आसान (idea सीखने के लिए), दो medium (variation), एक कठिन (stretch)। छठा सवाल तभी जब re-solve में दिक्कत हो।
- **अटकने का alarm:** Easy करीब 15 min, Medium 20–30 min। Alarm बजे तो पहले सिर्फ़ hint, फिर solution पढ़ो, बंद करो, खुद लिखो, और 3–7 दिन बाद re-solve।
- **Shortlist prompt (AI वाली छलनी):** "नीचे एक DSA sheet के सवालों के नाम हैं: [paste]। इन्हें pattern के हिसाब से group करो। हर pattern से 3–5 सवाल चुनो जो core idea को easy से medium-hard तक cover करें, और जो सवाल एक ही trick दोहराते हैं उन्हें हटा दो। Output table में दो: pattern, सवाल का नाम, क्यों चुना (एक line)। List में जो सवाल नहीं है, वो अपनी तरफ़ से मत जोड़ना।"
- **Verify करो (ज़रूरी):** (1) AI ने कोई सवाल अपनी तरफ़ से तो नहीं जोड़ा, हर नाम असली list में ढूँढो। (2) ऊपर के 13 patterns में से हर एक cover हुआ या नहीं। (3) Grind 75 या NeetCode 150 जैसी जानी मानी list से मिलाकर देखो कि कोई ज़रूरी pattern छूटा तो नहीं।
- **Quality check (हर हफ़्ते):** mixed set के 3 नए सवाल topic tag छुपाकर करो। अगर pattern पहचान में आ गया, तो count कम होकर भी तैयारी सही दिशा में है।
- **Company specific:** जिस company का OA है, उसके पिछले सवालों का pattern देखो (seniors, discussion posts), पर पहले core patterns पक्के करो।
- **क्या skip करो (शुरू में):** बहुत rare tricks वाले सवाल, एक ही pattern के 15वें-20वें सवाल, और वो सवाल जो सिर्फ़ counter बढ़ाने के लिए हैं।

## ✅ ध्यान रखो / सोर्स
- "AlgoMonster analytics prove करते हैं", "40% time बचता है" जैसी lines **मत बोलो**; इनका कोई भरोसेमंद source नहीं।
- "Interviews में सिर्फ़ यही patterns आते हैं" मत कहो। "बार बार आते हैं" और cheat sheet में "ज़्यादातर curated lists में" ही रखो।
- 500 / 200 / 400 VO में कहानी के illustrative numbers हैं, कोई data नहीं। "Interview में counter नहीं गिना जाता" का मतलब है कि selection interview की performance से होता है; कोई कंपनी profile देख भी ले, तो भी फ़ैसला वहीं होता है। "200 वाले को हमेशा offer मिलता है" जैसा मत बोलो।
- Deliberate practice पर ज़्यादा बड़ा दावा मत करो (जैसे "10,000 hours rule" या "सिर्फ़ practice से सब होता है"); इसके effect के size पर बाद की studies में बहस है (Macnamara & Maitra, 2019)।
- P21 से फ़र्क: P21 = रोज़ का routine (गिनती vs गहराई का balance); P23 = *कौन से* सवाल चुनें (selection)।
- **सोर्स:**
  - Deliberate practice: Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). *The role of deliberate practice in the acquisition of expert performance.* Psychological Review, 100(3), 363–406.
  - बहस / replication: Macnamara, B. N., & Maitra, M. (2019). *The role of deliberate practice in expert performance: revisiting Ericsson, Krampe & Tesch-Römer (1993).* Royal Society Open Science, 6(8), 190327.
  - Curated lists: Grind 75 (Yangshun Tay, techinterviewhandbook.org/grind75), NeetCode 150 (neetcode.io)। Pattern list इन्हीं जैसी lists के topics से बनाई गई है, कोई frequency data नहीं।
