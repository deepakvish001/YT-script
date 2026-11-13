# P29 · पिछले हफ़्ते Accepted, आज blank: "देखा हुआ है" syndrome
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 75 सेकंड · **Keyword:** REVISE · **एक सीख:** Revision = पुराना code पढ़ना नहीं, blank file से दोबारा बनाना, बढ़ते gap पर।

## 🎙️ वॉइसओवर
पिछले हफ़्ते जिस सवाल का Accepted screenshot तुमने status पर लगाया था, आज वही खोला तो दिमाग़ बोला, ये कौन है भाई? इसे मैं कहता हूँ "देखा हुआ है" syndrome, यानी सवाल पहचान में आता है, पर लिखा नहीं जाता। ये कमज़ोरी नहीं, forgetting curve है, जो Ebbinghaus ने 1885 में दिखाया था, यानी नई सीखी चीज़ शुरू में सबसे तेज़ी से भूलती है, अगर दोबारा याद न करो। ऊपर से हम revision के नाम पर पुराना code बस पढ़ लेते हैं, जिससे लगता है याद है, पर दिमाग़ ने खुद कुछ निकाला ही नहीं। तो revision ऐसे करो। Blank file खोलो, बिना देखे solve करो, और target रखो कि पहले run में ही सही चले। Test case fail हो तो solution tab मत खोलो, उसी failing case पर code line by line dry run करो, और जहाँ value गलत हुई वहीं logic ठीक करो। और हाँ, if n बराबर 5 तो return 3 लिखना fix नहीं, जुगाड़ है। ये re-solve बढ़ते gap पर करो, जैसे दिन 1, 3, 7 और 21 पर। इसके पीछे spacing effect है, यानी gap देकर किया revision एक साथ रटने से ज़्यादा टिकता है। Comment में REVISE लिखो, मैं तुम्हें revision tracker template DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook card:** phone frame में status "Accepted ✅ 🔥 (पिछले हफ़्ते)"; फिर आज का blank editor और stick figure का bubble "ये कौन है भाई? 🤨 पहले मिले हैं?"।
- **Syndrome card:** gold में "'देखा हुआ है' syndrome" → तीर → "पहचान ✅ · लिखना ✗"।
- **Forgetting curve:** काले bg पर gold curve जो शुरू में तेज़ी से नीचे गिरती है (कोई % नहीं, सिर्फ़ shape); हर re-solve पर curve ऊपर उछलती है और अगली बार धीरे गिरती है। नीचे छोटा "Ebbinghaus, 1885"।
- **Debug card:** failing test case `n = 5` → code की lines पर एक एक करके gold highlight, बगल में variables की table, जहाँ value गलत हुई वहाँ लाल घेरा। ऊपर "Solution tab 🔒 बंद"।
- **जुगाड़ meme:** code में `if (n == 5) return 3;` पर बड़ा लाल stamp "जुगाड़ 🩹, fix नहीं"।
- **Ending:** calendar पर Day 1, 3, 7, 21 पर gold ✓, फिर comment bubble "REVISE" + DM icon + "FOLLOW"।

## 📄 Cheat sheet (comment → DM)
**नाम:** Re-solve Tracker Template · **Keyword:** REVISE
- **Tracker के columns (Google Sheet / Notion / कागज़):** `सवाल | link | pattern | पहली बार कब (Day 0) | Day 1 | Day 3 | Day 7 | Day 21 | अटकने की जगह | 1 line trick`।
- **हर re-solve cell में एक code भरो:** ✅ = बिना देखे, पहले run में सही; 🟡 = खुद debug करके सही; 🔴 = solution देखना पड़ा।
- **Rule:** 🔴 आया तो उस सवाल की गिनती फिर Day 0 से शुरू (फिर से Day 1, 3, 7, 21)। ✅ आया तो अगला gap।
- **Re-solve का तरीका:** blank file, पुराना code और notes बंद। पहले 2 lines में approach लिखो, फिर code। Run से पहले एक sample पर dry run।
- **"पहले run में सही" का target:** run दबाने से पहले खुद से पूछो: खाली input, एक element, duplicates, सबसे बड़ा n, overflow (`int` vs `long long`)।
- **Fail होने पर debug ladder:** (1) failing input को सबसे छोटा बनाओ, (2) कागज़ पर उसी input का dry run, (3) जहाँ value उम्मीद से अलग हो वहाँ `print`, (4) logic ठीक करो। Solution tab तभी, जब 15–20 min बाद भी गलती न मिले।
- **Hardcoding मना:** `if (n == 5) return 3;` जैसा कुछ भी नहीं। अगर कोई fix सिर्फ़ एक test case के लिए है, तो वो fix नहीं है।
- **हफ़्ते का revision budget:** रोज़ के practice time का करीब एक चौथाई re-solve को दो (rule of thumb)। किसी दिन time कम हो, तो नए सवाल कम करो, revision नहीं।
- **Day 21 पर ✅ = pattern पक्का:** ऐसे सवाल को "interview ready" column में डालो और महीने में एक बार mixed set में फिर से आज़माओ।

## ✅ ध्यान रखो / सोर्स
- "SDE sheet amnesia" जैसा दूसरे creator का नाम **मत लो**। हमारा नाम: "देखा हुआ है" syndrome (ये कोई scientific term नहीं, VO में "इसे मैं कहता हूँ" बोलकर साफ़ है)।
- Forgetting curve पर कोई percentage मत बोलो ("1 दिन में 70% भूल जाते हो" वगैरह)। Ebbinghaus ने बेमतलब syllables पर खुद पर experiment किया था; असली रफ़्तार material और इंसान पर निर्भर करती है। सिर्फ़ shape बताओ: शुरू में तेज़, फिर धीमी।
- Day 1, 3, 7, 21 कोई research से निकला पक्का schedule नहीं है, एक rule of thumb है। Research सिर्फ़ इतना कहती है कि फैला हुआ revision एक साथ रटने से बेहतर है, और सबसे अच्छा gap इस पर निर्भर करता है कि कितने दिन बाद याद चाहिए (Cepeda et al., 2006)।
- **सोर्स:**
  - Forgetting curve: Ebbinghaus, H. (1885). *Über das Gedächtnis* (English: *Memory: A Contribution to Experimental Psychology*, 1913)। Replication: Murre, J. M. J., & Dros, J. (2015). *Replication and analysis of Ebbinghaus' forgetting curve.* PLOS ONE, 10(7), e0120644.
  - Spacing effect: Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). *Distributed practice in verbal recall tasks: A review and quantitative synthesis.* Psychological Bulletin, 132(3), 354–380.
  - खुद से निकालना > दोबारा पढ़ना (re-solve का आधार): Roediger, H. L., & Karpicke, J. D. (2006). *Test-enhanced learning.* Psychological Science, 17(3), 249–255.
