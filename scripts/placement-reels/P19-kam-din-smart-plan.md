# P19 · 5 दिन बचे? सवालों का बजट बनाओ
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 72 सेकंड · **Keyword:** PLAN · **एक सीख:** कम दिनों में ज़्यादा सवाल नहीं, सही सवाल चाहिए: पहले realistic बजट, फिर ऐसे सवाल जो ज़्यादा से ज़्यादा concepts cover करें।

## 🎙️ वॉइसओवर
Interview में पाँच दिन बचे हैं, तुमने डेढ़ सौ सवालों की list बना ली, और दोस्त सिर्फ बारह सवाल करके clear कर आया। पहले दिन वाला तुम कहता है आज चालीस सवाल करूँगा, और रात 2 बजे वाला तुम तीन सवाल और सैंतीस खुले tabs के साथ बैठा है। इसे planning fallacy कहते हैं, यानी हम काम का time अक्सर कम आंकते हैं, भले पिछली बार भी यही हुआ हो। ऊपर से रात जागकर पढ़ा हुआ कम याद रहता है, क्योंकि नई चीज़ें पक्की करने में नींद का बड़ा रोल है। इसलिए सवाल बजट plan अपनाओ। पहला, बजट निकालो, यानी एक दिन revision के लिए छोड़कर बचे दिन into रोज़ के realistic सवाल, जैसे चार into तीन बराबर बारह। दूसरा, उस company के पुराने या tagged सवाल ChatGPT को दो, और बोलो इनमें से बारह ऐसे चुनो जो सबसे ज़्यादा core concepts cover करें। मज़े की बात ये है कि ये खुद set cover नाम की DSA problem है, जिसका perfect answer निकालना मुश्किल है, इसलिए लक्ष्य perfect नहीं, max coverage है। तीसरा, AI की list खुद check करो, क्योंकि AI भी गलत हो सकता है। Comment में PLAN लिखो, मैं तुम्हें planner और prompt DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (split screen):** बाएँ तुम्हारी list, scroll होती जाती है "1, 2, 3 … 150" और ऊपर कैलेंडर "5 दिन ⏳"; दाएँ दोस्त की छोटी सी list "12 ✅", ऊपर हरा "Interview clear 🎉"।
- **Expectation vs Reality:** ऊपर "पहले दिन वाला तुम: आज 40 सवाल 💪"; नीचे "रात 2 बजे वाला तुम": stick figure, screen पर `3 solved` और browser में अनगिनत tabs, कोने में घड़ी 🌙 2:00।
- **Psychology कार्ड:** gold में `planning fallacy`, तीर, नीचे: "काम का time अक्सर कम आंकते हैं, पिछली बार से सीखे बिना"; छोटा icon 😴 "नींद कटी → याद कम"।
- **बजट कार्ड:** बड़ा सा calculator जैसा कार्ड: `(5 दिन − 1 revision) × 3 सवाल/दिन = 12` gold में।
- **Set cover कार्ड:** बाईं तरफ़ 30 सवालों के छोटे डिब्बे, दाईं तरफ़ concepts के रंगीन गोले (arrays, hashing, two pointers, binary search, trees, graphs, heap, DP…); 12 डिब्बे चुने जाते हैं और लगभग सारे गोले जल जाते हैं, एक-दो गोले ग्रे रह जाते हैं; caption "set cover · perfect नहीं, max coverage"। फिर ✅ "AI की list खुद check"।
- **CTA:** "Day 5 = सिर्फ revision 🔁" स्टैम्प, फिर chat bubble "PLAN" + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** सवाल बजट Planner + prompt · **Keyword:** PLAN
- **बजट formula:** कुल सवाल = (बचे दिन − 1) × रोज़ के realistic सवाल। आखिरी दिन बजट से बाहर, सिर्फ revision के लिए। "Realistic" = पिछले 2–3 दिनों में तुमने सच में कितने किए, जोश वाला number नहीं। Example: 5 दिन → (5 − 1) × 3 = 12।
- **सवाल कहाँ से:** target company के पुराने/tagged सवाल (company tags, interview experiences, seniors)। List जितनी लंबी हो, उतना अच्छा, फिर उसमें से छाँटो।
- **AI prompt (copy-paste):**
  ```
  I have an interview at [COMPANY] in [D] days. I can realistically solve [Q] problems per day,
  so my total budget is [B] problems (the last day is for revision only, not counted in [B]).
  Below is a list of this company's previously asked / tagged problems.
  1. For each problem, write its main pattern/concept in 2-4 words.
  2. From THIS list only, pick at most [B] problems that together cover the maximum number of
     different core concepts. Prefer medium difficulty. Do not invent new problems.
  3. List the core concepts (arrays/hashing, two pointers, sliding window, binary search, stack,
     linked list, trees, graphs, heap, DP, greedy) that are still not covered.
  4. Make a day-wise plan, easy to hard, with one revision slot each day.
  [PASTE LIST]
  ```
- **Verify:** हर चुने सवाल का link खोलो (AI कभी-कभी गलत नाम या concept बता देता है); concept tag खुद देखो; जो concept छूट गया उसके लिए अपनी तरफ़ से एक classic सवाल जोड़ो।
- **5 दिन का ढाँचा:** Day 1–4: रोज़ 3 नए सवाल + कल के 1 सवाल का बिना देखे re-solve · Day 5: कोई नया सवाल नहीं, notes revision + 1 timed mock (45–60 min) + 2 solutions ज़ोर से बोलकर।
- **25 मिनट rule (rule of thumb):** 25 मिनट तक कोई रास्ता न दिखे तो hint देखो, फिर solution समझो, और अगले दिन बिना देखे दोबारा लिखो।
- **Tracker columns:** सवाल · concept · status (खुद / hint से / नहीं हुआ) · time लगा · एक line का trick।
- **नींद मत काटो:** adults के लिए आम सलाह कम से कम 7 घंटे की है; नींद नई सीखी चीज़ों को पक्का करने में मदद करती है।
- **Buffer रखो:** plan में रोज़ 20–30 मिनट खाली छोड़ो, क्योंकि planning fallacy की वजह से कुछ सवाल अक्सर सोच से ज़्यादा time लेंगे।

## ✅ ध्यान रखो / सोर्स
- **"Mathematically 100% best set" मत बोलो।** Set cover NP-hard problem है, तो AI (या कोई भी) बस एक अच्छा approximation देगा। VO में "perfect नहीं, ज़्यादा से ज़्यादा coverage" इसी वजह से है।
- दोस्त वाला hook एक scene है, guarantee नहीं; fundamentals बहुत कमज़ोर हों तो 5 दिन में 12 सवाल काफी नहीं होंगे। "12 सवाल में select पक्का" मत बोलो।
- **"Burnout" को clinical term की तरह मत बोलो।** WHO के ICD-11 में burn-out workplace के chronic stress से जुड़ा occupational phenomenon है; इसलिए VO में "थकान/नींद" वाली बात है, burnout का label नहीं।
- AI वाली line ज़रूरी: "AI भी गलत हो सकता है, list खुद check करो"।
- ये reel P24 (company की कुंडली) से अलग है: P24 = top topics ढूँढना; P19 = कम time में बजट और max coverage वाला plan।
- Plan का नाम अपना: **सवाल बजट plan**।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Planning fallacy: Kahneman & Tversky (1979), "Intuitive prediction: Biases and corrective procedures", *TIMS Studies in Management Science* 12, 313–327; Buehler, Griffin & Ross (1994), "Exploring the 'planning fallacy': Why people underestimate their task completion times", *Journal of Personality and Social Psychology* 67(3), 366–381 (students ने thesis का time काफी कम आंका, पिछले अनुभव के बावजूद)।
  - नींद और memory: Diekelmann & Born (2010), "The memory function of sleep", *Nature Reviews Neuroscience* 11(2), 114–126. doi:10.1038/nrn2762
  - Set cover NP-complete (decision version): Richard M. Karp (1972), "Reducibility Among Combinatorial Problems", in *Complexity of Computer Computations*, 85–103।
  - Burn-out definition: WHO, "Burn-out an 'occupational phenomenon': International Classification of Diseases" (28 May 2019): https://www.who.int/news-room/detail/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases
  - 7+ घंटे नींद (18–60 साल के adults): CDC, "About Sleep" / AASM-SRS consensus (Watson et al., 2015, *Sleep* 38(6), 843–844)।
