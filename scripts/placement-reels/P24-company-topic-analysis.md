# P24 · पहले company की कुंडली निकालो
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 73 सेकंड · **Keyword:** COMPANY · **एक सीख:** Pattern पहचानना talent से ज़्यादा exposure है; target company के पुराने सवालों से top topics निकालो, verify करो, फिर वहीं से तैयारी शुरू करो।

## 🎙️ वॉइसओवर
Interview में graph वाला सवाल आया, दोस्त ने दो second में बोल दिया कि BFS लगेगा, और तुम सवाल दूसरी बार पढ़ रहे थे। फिर तुमने मान लिया कि वो पैदाइशी genius है और तुम्हारी किस्मत में बस Ctrl C, Ctrl V लिखा है। लेकिन ये chunking का खेल है, यानी दिमाग बार बार देखी चीज़ों को तैयार packets में store कर लेता है। Chase और Simon की chess study में masters असली game की positions झट से याद कर लेते थे, पर random रखे pieces पर उनका फायदा लगभग खत्म हो गया। ये talent से ज़्यादा exposure की बात है, और अच्छी खबर ये है कि एक company के सवालों में topics अक्सर repeat होते हैं। इसलिए पहले company की कुंडली निकालो। पहला, उसके पुराने या tagged सवाल, interview experiences और seniors की बातें जमा करो। दूसरा, ये list ChatGPT को देकर topic के हिसाब से group और गिनती करवाओ। तीसरा, खुद cross check करो, क्योंकि AI गिनती में गलत हो सकता है और online lists पुरानी भी हो सकती हैं। चौथा, top topics पहले करो, पर fundamentals मत छोड़ो, क्योंकि हर interviewer अलग होता है। Comment में COMPANY लिखो, मैं तुम्हें कुंडली वाला template और prompt DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (split screen):** बाएँ दोस्त stick figure, सिर के ऊपर 💡 और gold में `BFS`, कोने में stopwatch "0:02"; दाएँ तुम, सवाल वाला page, ऊपर "पढ़ाई #2 👀"।
- **Genius वाला कार्ड:** दोस्त के सिर पर चमकता crown 👑 और caption "पैदाइशी genius?"; तुम्हारी तरफ़ keyboard पर सिर्फ दो keys चमकती हैं `Ctrl+C` `Ctrl+V` 😭।
- **Chunking कार्ड:** gold में `chunking`, तीर, "बार-बार देखा → तैयार packet"; visual: बिखरे हुए LEGO जैसे टुकड़े जुड़कर 3 बड़े डिब्बे बनते हैं: `BFS`, `heap`, `sliding window`। नीचे छोटा: "Chase & Simon, 1973: असली chess position ✅ · random ❌"।
- **कुंडली कार्ड:** पुरानी कुंडली जैसा चौकोर chart, पर खानों में grahon की जगह topics और गिनती: `Arrays 9`, `Graphs 6`, `DP 4`, `Heap 3` (ऊपर छोटा टैग "example"); stick figure पंडित नहीं, एक laptop 💻 "AI ने गिना, तुमने check किया ✅"।
- **4 step chain:** `जमा करो → गिनवाओ → check करो → top topics पहले`, आखिरी पर छोटा नोट "fundamentals साथ में"।
- **CTA:** chat bubble "COMPANY" + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** Company की कुंडली: analysis template + prompt · **Keyword:** COMPANY
- **कहाँ से जमा करो (30–50 सवाल का लक्ष्य):** LeetCode के company tags (premium feature, community-reported), GeeksforGeeks की company-wise lists और interview experiences, LeetCode Discuss के interview posts, college के seniors और placement cell। जहाँ हो सके, पिछले 1–2 साल वाले सवाल।
- **Sheet के columns:** सवाल का नाम · link · source · साल · round (OA / technical / managerial) · topic (AI से) · verified? (हाँ/ना)।
- **AI prompt (copy-paste):**
  ```
  Below are [N] coding questions reportedly asked by [COMPANY] for the [ROLE] role in [YEARS].
  1. Tag each question with ONE main topic from: arrays/strings, hashing, two pointers/sliding window,
     binary search, stack/queue, linked list, trees/BST, graphs, heap, DP, greedy, math/bit, other.
  2. Make a table: topic | count | question names.
  3. Rank topics by count and show the top 5.
  4. Flag questions whose topic is unclear or which can be solved in two ways.
  5. Do not add any question that is not in my list.
  [PASTE LIST]
  ```
- **Verify ऐसे करो:** top 3 topics के 5–10 सवाल खुद खोलकर देखो कि topic सही है; AI की गिनती को sheet में `COUNTIF` से दोबारा गिनो।
- **Priority:** ज़्यादा time top topics को, पर हर core topic (arrays, hashing, two pointers, binary search, trees, graphs, DP) को कम से कम थोड़ा time ज़रूर।
- **DSA के बाहर भी देखो:** कई campus interviews में OOP, DBMS, OS, CN के सवाल और SQL queries आते हैं; experiences में ये भी गिनो।
- **Red flags:** सिर्फ एक source वाली list, बहुत पुरानी list, "guaranteed questions" या "100% यही आएगा" वाले दावे।
- **Ethics:** किसी चल रहे OA के सवाल माँगना या share करना गलत है और कई companies की terms तोड़ता है; सिर्फ public interview experiences और practice lists use करो।
- **Interview से एक दिन पहले:** top topics के 1-1 सवाल बिना देखे दोबारा बोलकर solve करो।

## ✅ ध्यान रखो / सोर्स
- **"ये company हर बार यही पूछती है" या "guaranteed questions" मत बोलो।** VO में "अक्सर repeat होते हैं" और "हर interviewer अलग होता है" दोनों हैं, दोनों रहने चाहिए।
- Chess study को सही बोलना: masters की memory **असली game positions** पर बहुत बेहतर थी, **random positions** पर फायदा लगभग खत्म। "Masters की memory सुपर होती है" मत बोलो।
- AI वाली line ज़रूरी है: "AI गिनती में गलत हो सकता है", और online lists पुरानी/गलत हो सकती हैं।
- LeetCode company tags premium हैं और community-reported data पर बने हैं (Nov 2026 तक third-party reviews के हिसाब से); post से पहले leetcode.com पर एक बार check कर लेना।
- ये generic template है; किसी एक company की sheet या उसके "leaked" सवाल नहीं।
- दोस्त को "genius नहीं" कहकर नीचा नहीं दिखाया; message ये है कि skill exposure से आती है।
- Method का नाम अपना: **company की कुंडली**।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Chunking / chess: William G. Chase & Herbert A. Simon (1973), "Perception in chess", *Cognitive Psychology* 4(1), 55–81. doi:10.1016/0010-0285(73)90004-2
  - LeetCode Premium में company-tagged questions (frequency के हिसाब से sort): third-party comparisons, जैसे https://www.lodely.com/blog/leetcode-premium-cost (official feature list leetcode.com/subscribe पर देखो)।
