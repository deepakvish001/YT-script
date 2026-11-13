# P22 · Solution 30 मिनट घूरना बंद, AI से बस उलझी lines पकड़ो
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 75 सेकंड · **Keyword:** PROMPT · **एक सीख:** पूरा solution नहीं, सिर्फ़ वो 3–4 lines समझो जिन पर logic टिका है; AI रास्ता दिखाए, dry run तुम करो।

## 🎙️ वॉइसओवर
तुम LeetCode का solution 30 मिनट से ऐसे घूर रहे हो जैसे वो खुद बोलकर समझा देगा, और बगल में चाय ठंडी होकर शरबत बन चुकी है। सच ये है कि input लेना, loop चलाना और return करना तो तुम्हें आता है, असली उलझन अक्सर बीच की बस तीन चार lines में होती है। लेकिन दिमाग़ पूरा code एक साथ पकड़ना चाहता है, और यहीं cognitive load बढ़ जाता है, यानी working memory एक बार में थोड़ी ही चीज़ें संभाल पाती है, और ज़्यादा डालो तो सब धुंधला हो जाता है। इसलिए पहले उलझी lines ढूँढो, और इसमें ChatGPT जैसा AI काम आता है। Problem और solution paste करो और लिखो, पूरा explain मत करो, सिर्फ़ वो lines बताओ जिन पर logic टिका है। फिर बोलो, एक छोटे test case पर उन lines से ठीक पहले तक variables की values बताओ। अब वहाँ से आगे की lines खुद कागज़ पर dry run करो, क्योंकि खुद चलाई चीज़ दिमाग़ में ज़्यादा बैठती है। पर याद रखना, AI भी गलत हो सकता है, तो code चलाकर print से values मिला लो। और ये practice के लिए है, contest या OA के लिए नहीं। Comment में PROMPT लिखो, मैं तुम्हें पूरा prompt pack DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook card:** stick figure screen घूर रहा है, बगल में ☕ पर timer 0:00 → 0:30:00 और चाय का icon ☕ → 🧊 "शरबत ready"।
- **Code highlight:** काले bg पर पूरा solution dim; सिर्फ़ बीच की 3 lines gold में जलती हैं, बाकी पर छोटा tag "ये तो आता है ✅"। ऊपर gold "Cognitive load" → तीर → "दिमाग़ की RAM छोटी है"।
- **Chat bubbles (generic AI chat, कोई logo नहीं):** तुम: "पूरा मत समझाओ, सिर्फ़ ज़रूरी lines बताओ" → AI: "Line 6, 7, 9"। तुम: "nums = [2, 7, 11, 15], target = 9, line 6 से पहले values?" → AI की छोटी table।
- **Dry run card:** कागज़ जैसा frame, हाथ से लिखी table में gold values भरती हैं: `i = 1, x = 7, need = 2, map = {2: 0}` → "मिला ✅ return [0, 1]"।
- **Warning card:** "AI भी गलत हो सकता है ⚠️" → terminal में `print` output और AI table के बीच ✔ / ✗ match।
- **Ending:** लाल stamp "contest / OA में नहीं 🚫", फिर comment bubble "PROMPT" + DM icon + "FOLLOW"।

## 📄 Cheat sheet (comment → DM)
**नाम:** उलझी Lines Prompt Pack · **Keyword:** PROMPT
- **Prompt 1, उलझी lines छाँटो:** "मैं ये problem practice कर रहा हूँ। नीचे problem और एक accepted solution है (language: ___)। पूरा explain मत करो। सिर्फ़ वो 3–4 lines, line number के साथ, बताओ जिन पर पूरा logic टिका है, और हर line का काम एक sentence में।"
- **Prompt 2, वहाँ तक की values:** "Test case: ___ (छोटा, 4–6 elements)। Line ___ तक पहुँचने से ठीक पहले तक, हर step पर सारे variables की values एक table में दो। उसके आगे की values मत बताना।"
- **फिर खुद:** आगे की lines कागज़ पर dry run करो। हर step पर लिखो कि कौन सा variable बदला और क्यों।
- **Prompt 3, मेरा dry run जाँचो:** "ये मेरा dry run है: ___। सिर्फ़ ये बताओ कि पहली गलती किस step पर है। सही answer मत बताना।"
- **Prompt 4, ये line क्यों ज़रूरी है:** "अगर line ___ हटा दें, या `<` की जगह `<=` कर दें, तो कौन सा छोटा test case fail होगा? सिर्फ़ test case दो।" फिर वो test case खुद चलाकर देखो।
- **Prompt 5, brute force से पुल:** "इस problem का brute force क्या होगा, और ये solution उसमें से कौन सा दोहराया हुआ काम हटाता है? 3 lines में।"
- **Prompt 6, pattern पहचानो:** "ये किस pattern का example है? इसी pattern के 2 और सवाल बताओ।" AI सवालों के नाम या number गलत बता सकता है, इसलिए link खोलकर check करो।
- **Verify step (ज़रूरी):** code खुद चलाओ, उलझी lines के पास `print` लगाओ, और output को AI की table से मिलाओ। Mismatch हो तो भरोसा चलते हुए code पर करो, AI पर नहीं।
- **Rule:** live contest या OA के दौरान problem या code AI में डालना ज़्यादातर platforms पर नियम के खिलाफ़ है। ये तरीका सिर्फ़ practice और contest के बाद upsolve के लिए है।

## ✅ ध्यान रखो / सोर्स
- "AI हमेशा सही समझाता है" जैसा कुछ मत बोलो। VO में "AI भी गलत हो सकता है, code चलाकर check करो" वाली line रहनी चाहिए (style guide का नियम)।
- "Working memory में सिर्फ़ 4 चीज़ें" जैसा पक्का number VO में नहीं डाला; ये estimate पर बहस है। "थोड़ी ही चीज़ें" बोलना सुरक्षित है।
- किसी AI tool को "best" मत कहो; "ChatGPT जैसा AI" ही रखो। Screen पर किसी AI company का logo नहीं।
- **सोर्स:**
  - Cognitive load: Sweller, J. (1988). *Cognitive load during problem solving: Effects on learning.* Cognitive Science, 12(2), 257–285.
  - खुद समझाने / खुद चलाने से सीख पक्की ("खुद चलाई चीज़ ज़्यादा बैठती है" वाली line का आधार, self-explanation effect; VO में concept का नाम नहीं लिया ताकि एक reel में एक ही नया शब्द रहे): Chi, M. T. H., Bassok, M., Lewis, M. W., Reimann, P., & Glaser, R. (1989). *Self-explanations: How students study and use examples in learning to solve problems.* Cognitive Science, 13(2), 145–182.
  - Contest में AI पर रोक: [LeetCode "New Contest Rule" (Sep 2024 update)](https://leetcode.com/discuss/general-discussion/951105/new-contest-rule-effective-from-december-2020): code generation tools और problem/test case/code को external assistance tools में डालना contest violation है। CodeChef और AtCoder के नियम भी AI-generated solutions रोकते हैं।
