# P14 · तुम्हारी train पहले स्टेशन पर क्यों खड़ी है
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 72 सेकंड · **Keyword:** CONTEST · **एक सीख:** हर problem चार स्टेशन से गुज़रता है; हर स्टेशन का time नापो, और दो चांस में बात न बने तो skip करके बाद में लौटो।

## 🎙️ वॉइसओवर
Roommate और तुमने same sheet के same questions किए, फिर भी contest में वो तीन solve करके सो गया, और तुम पहले question को ऐसे घूर रहे हो जैसे घूरने से AC आएगा। फ़र्क knowledge का नहीं, time के बँटवारे का है। हर problem एक train है, जो चार स्टेशन से गुज़रती है, समझना, logic, dry run और typing। Practice का मतलब है हर स्टेशन का halt घटाना, पर तुम्हारी train पहले स्टेशन पर ही आधे घंटे से खड़ी है। वो हिलती क्यों नहीं? इसे sunk cost fallacy कहते हैं, यानी डूबा हुआ time बचाने के चक्कर में और time डुबोना। इसलिए दो चांस rule अपनाओ। पहला चांस पूरे focus से समझने पर लगाओ, यानी input, output और constraints। दूसरा चांस logic पर लगाओ। दोनों में बात नहीं बनी, तो बिना guilt अगले problem पर जाओ और बाद में लौटो। लौटने पर अक्सर नया रास्ता दिखता है, इसे incubation effect कहते हैं, यानी थोड़ा हटकर लौटो तो नज़र fresh होती है। Practice में countdown छुपा दो, बस हर स्टेशन के बाद घड़ी का time लिख लो, हफ़्ते भर में दिख जाएगा कि train कहाँ अटकती है। Comment में CONTEST लिखो, मैं तुम्हें strategy sheet DM कर दूँगा, और ऐसे ही placement के सच के लिए follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (Expectation vs Reality):** बाएँ "Roommate" stick figure बिस्तर में 😴, ऊपर scoreboard `A ✓ B ✓ C ✓`; दाएँ "तुम" stick figure screen को घूर रहा है 👁️👄👁️, ऊपर `A: 0/1 · 38:12`, कोने में छोटा टैग "घूरने से AC नहीं आता"।
- **चार स्टेशन वाला track:** gold रेल-लाइन पर चार स्टेशन बोर्ड: `समझना → Logic → Dry run → Typing`। एक छोटी stick-drawn train पहले स्टेशन पर रुकी है, ऊपर बोर्ड "Halt: 30 min 🐌"।
- **Sunk cost मीम:** stick figure एक डूबती नाव पकड़े हुए, नाव पर लिखा "Q1 पर 35 मिनट"; speech bubble "इतना कर लिया, अब कैसे छोड़ूँ?" नीचे gold में `sunk cost fallacy`, तीर, "डूबे time को बचाने में और time डुबोना"।
- **दो चांस कार्ड:** दो gold टोकन ① "समझना" ② "Logic"; दोनों पर लाल ✗ आते ही तीर मुड़ता है "Skip ↪ अगला problem", और नीचे छोटा "बाद में लौटो 🔁"।
- **Incubation कार्ड:** stick figure problem से मुँह मोड़कर अगला सवाल करता है, फिर लौटता है और सिर पर 💡; gold में `incubation effect`, नीचे "थोड़ा हटो, fresh नज़र"।
- **Station log + CTA:** notebook जैसी table (Q1 · Q2 · Q3 × चार स्टेशन, मिनट हाथ से लिखे), सबसे बड़ा नंबर लाल घेरे में; फिर "Comment: CONTEST" chat bubble + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** Contest Strategy Sheet · **Keyword:** CONTEST
- **Contest से पहले (5 मिनट):** language और editor तय, अपना template तैयार (fast I/O, common imports), पानी और rough पेज पास में। Platform के rules एक बार पढ़ लो (जैसे पहले से लिखा template allowed है या नहीं)।
- **पहले 2–3 मिनट:** सारे problems के title और constraints पर एक नज़र। Codeforces/LeetCode में आम तौर पर आसान पहले आता है, पर OA (online assessment) में ये ज़रूरी नहीं, इसलिए पहले सबसे आसान दिखने वाला पकड़ो।
- **स्टेशन 1 · समझना:** input, output, constraints अलग से लिखो; sample को हाथ से चलाओ। Constraints से अंदाज़ा: n ≤ 10^5 → O(n log n) या O(n) चाहिए।
- **स्टेशन 2 · Logic:** पहले brute force सोचो, फिर देखो constraints में चलेगा या नहीं। नहीं चलेगा तो देखो कौनसा काम बार बार दोहराया जा रहा है, और उसे sorting, prefix sum, hash map या binary search से छोटा करो।
- **स्टेशन 3 · Dry run:** sample + कम से कम एक edge case (n = 1, सब same, सब negative, सबसे बड़ा value → overflow? `long long`/`long`)।
- **स्टेशन 4 · Typing:** code लिखते वक़्त logic दोबारा मत सोचो; दिक्कत हो तो समझो स्टेशन 2 अधूरा था।
- **दो चांस rule:** एक पूरा focused try समझने पर, एक logic पर। दोनों में बात न बने तो उस problem पर एक line का note लिखो ("कहाँ अटका") और अगले पर जाओ; बचे time में लौटो।
- **Wrong Answer आए तो:** अंधाधुंध दोबारा submit मत करो, पहले edge case सोचो। LeetCode contest में पहले Accepted से पहले के Wrong Answer/TLE submissions penalty time में जुड़ते हैं।
- **Practice में:** countdown छुपाओ, हर स्टेशन खत्म होने पर घड़ी का time लिखो। हफ़्ते के आख़िर में देखो कौनसा स्टेशन सबसे लंबा है, अगले हफ़्ते सिर्फ़ उसी पर काम।
- **Upsolve:** contest के बाद जो नहीं बना, editorial पढ़ के 1–2 दिन में खुद बिना देखे लिखो। अगला contest यहीं से सुधरता है।

## ✅ ध्यान रखो / सोर्स
- "Skip करना हमेशा सही है" मत बोलो; दो चांस rule practice का rule of thumb है। कभी-कभी आख़िरी 10 मिनट में एक ही problem पर टिके रहना ठीक होता है।
- Incubation effect को जादू मत बताना: research में औसतन फ़ायदा दिखता है, पर हर problem पर नहीं; और पहले ठीक से कोशिश की हो तो effect बड़ा दिखता है (Sio & Ormerod: लंबी preparation के बाद incubation का फ़ायदा ज़्यादा)।
- "Codeforces में problems हमेशा difficulty order में होते हैं" मत बोलो; "आम तौर पर" बोलो। LeetCode contest penalty का exact मिनट वाला नंबर VO में मत डालो (rules बदलते रहते हैं)।
- Roommate वाला मज़ाक हल्का रखो, किसी का नाम/college नहीं।
- **चार स्टेशन** और **दो चांस rule** हमारे अपने नाम हैं (दूसरे creator का framework नाम नहीं)।
- DM का वादा तभी जब comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Sunk cost fallacy: Arkes, H. R., & Blumer, C. (1985). *The psychology of sunk cost.* Organizational Behavior and Human Decision Processes, 35(1), 124–140.
  - Incubation effect: Sio, U. N., & Ormerod, T. C. (2009). *Does incubation enhance problem solving? A meta-analytic review.* Psychological Bulletin, 135(1), 94–120. https://doi.org/10.1037/a0014212 (औसतन positive effect, task के हिसाब से अलग)
  - LeetCode contest: पहले Accepted से पहले के "Wrong Answer/Time Limit Exceeded" submissions penalty time में गिने जाते हैं: LeetCode contest rules (हर contest page का Rules section; "New Contest Rule" post: https://leetcode.com/discuss/post/951105/)। Rules बदलते रहते हैं, publish से पहले contest page पर एक बार देख लो।
  - Constraints → complexity अंदाज़ा: Antti Laaksonen, *Competitive Programmer's Handbook*, Ch. 2 "Estimating efficiency" (https://cses.fi/book/book.pdf)।
