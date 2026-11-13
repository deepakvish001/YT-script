# P13 · दिमाग blank? RSA reset चलाओ
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 72 सेकंड · **Keyword:** PANIC · **एक सीख:** Interview में दिमाग blank हो तो चुप मत रहो, सवाल दोहराओ, जो पक्का पता है वो बोलो, और clarifying सवाल पूछो।

## 🎙️ वॉइसओवर
एक ही question, solution दोनों को नहीं आता था, फिर भी offer एक को मिला, क्योंकि फ़र्क उस पल का था जब दिमाग blank हुआ। रात 2 बजे hostel में जो question चुटकी में बनता है, interviewer के सामने उसी पर दिमाग No internet दिखा देता है। ये कमज़ोरी नहीं है, इसे choking under pressure कहते हैं, यानी pressure में आसान काम का भी बिगड़ जाना। Sian Beilock की research में दिखा कि tension working memory, यानी दिमाग की RAM, खा जाती है। RAM फुल होते ही हम चुप हो जाते हैं या I don't know बोल देते हैं, जबकि interviewer तुम्हारी सोच भी देख रहा है। तो RSA reset चलाओ, encryption वाला नहीं, panic वाला। R यानी Repeat, question अपने शब्दों में दोहराओ, time मिलेगा और समझ दिखेगी। S यानी Sure, जो पक्का पता है वो बोलो, जैसे array sorted है तो binary search या two pointers चल सकते हैं। A यानी Ask, clarifying question पूछो, जैसे negative numbers हैं क्या, duplicates हैं क्या। कई बार answer ही hint होता है, सब positive निकले तो subarray sum में sliding window का रास्ता खुलता है। Comment में PANIC लिखो, emergency phrases की cheat sheet मैं DM कर दूँगा, और ऐसे ही placement के सच के लिए follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (split screen):** दो stick-figure candidates, दोनों के सिर पर "Solution? ❌"। बाएँ वाला चुप, ऊपर घड़ी की सुई घूमती है; दाएँ वाला बोल रहा है (chat bubbles)। आख़िर में सिर्फ़ दाएँ वाले के पास "Offer ✉️" उड़ कर आता है।
- **2 AM vs Interview:** बाएँ "2 बजे hostel वाला तुम 😎" (laptop की रोशनी, चाय, हरा ✓); दाएँ "Interview वाला तुम" का दिमाग एक browser जैसे कार्ड पर, अपना बनाया हुआ टूटा wifi icon + "No internet 🧠"।
- **RAM bar मीम:** gold में `working memory`, तीर, नीचे "दिमाग की RAM"। Bar भरता है लाल टैब्स से: "डर" · "क्या सोचेंगे" · "package" · "घरवाले"; आख़िरी छोटे कोने में धुंधला "logic" जिसे जगह नहीं मिलती।
- **RSA कार्ड:** तीन बड़े gold अक्षर एक-एक कर आते हैं, हर एक के नीचे तीर और छोटा मतलब: **R** "अपने शब्दों में दोहराओ" · **S** "जो पक्का है वो बोलो" · **A** "clarifying सवाल पूछो"। कोने में छोटा टैग "🔐 encryption नहीं, panic वाला"।
- **Hint वाला demo:** chat bubble "Negative numbers हैं क्या?" → interviewer bubble "नहीं, सब positive" → array `[2, 3, 1, 2, 4, 3]` पर gold खिड़की (window) फैलती-सिकुड़ती है, नीचे "positive ✓ → sliding window"।
- **CTA:** "Comment: PANIC" chat bubble + DM icon + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** Interview Emergency Phrases · **Keyword:** PANIC
- **सोचने का time माँगो (चुप्पी नहीं):** "Can I take a minute to think this through? I'll think out loud." Time माँगना कमज़ोरी नहीं, आम बात है।
- **R · Repeat:** "So, just to confirm, I'm given ___ and I need to return ___, right?" साथ में sample input पर expected output खुद बोल के check करो।
- **S · Sure:** "One thing I'm sure of: the array is sorted, so binary search or two pointers might help." या "A brute force would be O(n²); let me start there and then optimize."
- **A · Ask (clarifying सवाल):** input size कितना है? negative numbers? duplicates? empty input? answer में index चाहिए या value? एक से ज़्यादा answer हों तो कौनसा? input modify कर सकते हैं?
- **Clue map (answer से hint):** सब positive + subarray sum → sliding window · negatives भी हैं → prefix sum + hash map · sorted → binary search / two pointers · "top k" → heap · n ≤ 20 → backtracking / bitmask।
- **अटक जाओ तो सच बोलो, पर सोचते हुए:** "I'm stuck on ___. I'm thinking of ___ because ___." इससे interviewer को पता चलता है कि hint कहाँ देना है।
- **Hint मिले तो पकड़ो:** "That helps. So if I store ___ in a hash map, I can ___." Hint को आगे बढ़ाओ, सिर्फ़ "ok" मत बोलो।
- **"I don't know" की जगह:** "I haven't seen this exact problem, but let me try a smaller example first."
- **Code से पहले:** "Before I code, here's my plan: ___. Time O(___), space O(___). Does that sound good?"
- **Body reset (2 सेकंड):** एक लंबी साँस, पानी का घूँट, फिर पहला वाक्य R से शुरू।

## ✅ ध्यान रखो / सोर्स
- "दिमाग blank हुआ तो सीधा reject" या "interviewer को answer से मतलब ही नहीं" मत बोलो। सही बात: answer भी मायने रखता है, पर सोचने और बात करने का तरीका भी देखा जाता है।
- "90% candidates चुप हो जाते हैं" जैसा कोई नंबर नहीं, कोई source नहीं है।
- Beilock की research का दावा सिर्फ़ इतना बोलो: pressure working memory को घेर लेता है, इसलिए performance गिरती है। "Brain science ने prove किया" जैसा बढ़ा-चढ़ा के नहीं।
- Repeat का मतलब time-pass नहीं: एक बार, छोटा, अपने शब्दों में। Clarifying सवाल 2–3 काफ़ी हैं, बहुत ज़्यादा सवाल stalling लग सकते हैं।
- Sliding window वाली बात सिर्फ़ "सब positive" के लिए है; negatives हों तो window वाला trick टूटता है, वहाँ prefix sum + hash map।
- **RSA reset** नाम हमारा अपना mnemonic है (दूसरे creator का echo/anchor/pivot नहीं)। इसे industry term मत बताना।
- DM का वादा तभी जब comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Choking under pressure + working memory: Beilock, S. L., & Carr, T. H. (2005). *When high-powered people fail: Working memory and "choking under pressure" in math.* Psychological Science, 16(2), 101–105. https://doi.org/10.1111/j.0956-7976.2005.00789.x
  - Beilock, S. (2010). *Choke: What the Secrets of the Brain Reveal About Getting It Right When You Have To.* Free Press.
  - Clarifying questions पूछना (2–3), सवाल जानबूझ कर vague होते हैं, और approach बोल के बताना: Tech Interview Handbook, "Coding interview cheatsheet": https://www.techinterviewhandbook.org/cheatsheet/
  - सवाल ध्यान से सुनना/example बनाना, फिर brute force, फिर optimize: Gayle Laakmann McDowell, *Cracking the Coding Interview* (6th ed.), problem-solving flowchart ("Listen → Example → Brute Force → Optimize → Walk Through → Implement → Test")।
  - Sliding window सिर्फ़ positive numbers पर: LeetCode 209 "Minimum Size Subarray Sum" (input "array of positive integers") vs LeetCode 560 "Subarray Sum Equals K" (negatives allowed, prefix sum + hash map)।
