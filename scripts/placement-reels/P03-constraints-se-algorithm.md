# P03 · Constraints पढ़ो, algorithm पकड़ो
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 73 सेकंड · **Keyword:** LIMIT · **एक सीख:** सवाल की story से पहले constraints पढ़ो, n का size ही बता देता है कि कितना तेज़ algorithm चाहिए।

## 🎙️ वॉइसओवर
एक ही सवाल पर एक बंदा story में खो जाता है, और दूसरा सीधा constraints देखकर पाँच सेकंड में algorithm का अंदाज़ा लगा लेता है। हम constraints को Terms and Conditions की तरह skip करते हैं, और फिर TLE पर judge को कोसते हैं। इसके पीछे satisficing है, यानी best की जगह पहले चलने वाले तरीके पर रुक जाना, इसलिए sample pass होते ही दिमाग बोलता है बस हो गया। इसका इलाज है एक second का बजट, क्योंकि rule of thumb है कि judge एक second में करीब 10 की power 8 simple operations चलाता है। अब n है 10 की power 5 और तुमने n square लिखा, तो हुए 10 की power 10, यानी बजट से सौ गुना ज़्यादा, सीधा TLE। वहाँ n log n या उससे तेज़ चाहिए, जैसे sorting, binary search या heap। n बीस तक है तो 2 की power n चलेगा, यानी backtracking या bitmask DP। पाँच सौ तक n cube, और पाँच हज़ार तक n square चलेगा। और n 10 की power 18 हो तो एक loop भी नहीं चलेगा, वहाँ log n चाहिए, जैसे binary exponentiation। ये reel save कर लो। Comment में LIMIT लिखो, मैं तुम्हें पूरी constraint table DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (split screen):** दोनों तरफ़ वही सवाल खुला। बाएँ stick figure लंबी story पढ़ रहा है (आँखें 😵‍💫); दाएँ stick figure का अंगूठा सीधा नीचे scroll, `1 ≤ n ≤ 10^5` gold में चमकता है, सिर पर 💡।
- **T&C मीम:** फ़ोन पर "Terms & Conditions" वाली लंबी स्क्रीन, नीचे "☑ I agree" पर तुरंत टिक; उसके नीचे वही अंदाज़ "Constraints ☑ skip", फिर लाल **TLE** stamp और stick figure judge पर मुक्का हिलाता हुआ।
- **Satisficing कार्ड:** gold में `satisficing`, तीर, नीचे "पहला चलने वाला तरीका = बस हो गया"। sample test पर हरा ✓, hidden tests पर लाल ⏱️।
- **बजट मीटर:** पैसों वाले wallet जैसा मीटर "1 sec बजट ≈ 10^8"; `n = 10^5`, `O(n²)` डालते ही बिल `10^10` आता है, मीटर फटता है 💥 "100 गुना ओवर बजट"।
- **Table reveal:** एक-एक row आती है: `n ≤ 20 → 2^n` · `n ≤ 500 → n³` · `n ≤ 5000 → n²` · `n ≤ 10^6 → n log n` · `n ~ 10^18 → log n`।
- **CTA:** "Save 🔖" icon हिलता है, फिर "Comment: LIMIT" chat bubble + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** 1 Second Budget Table · **Keyword:** LIMIT
- **Base rule:** 1 second में करीब 10^8 simple operations (rule of thumb, judge और language पर depend)। Python जैसी languages में ये बजट काफ़ी कम मानो।
- `n ≤ 10` → **O(n!)** → सारे permutations try करो।
- `n ≤ 20` → **O(2^n)** या O(2^n · n) → सारे subsets, backtracking, bitmask DP।
- `n ≤ 500` → **O(n³)** → तीन nested loops, Floyd–Warshall, interval DP।
- `n ≤ 5000` → **O(n²)** → दो loops, LCS/edit distance जैसी 2D DP।
- `n ≤ 10^5 से 10^6` → **O(n log n) या O(n)** → sorting, binary search, heap, two pointers, prefix sum, hashing, sliding window।
- `n ~ 10^9 से 10^18` → **O(log n) या O(1)** → binary exponentiation, binary search on answer, math formula, recurrence के लिए matrix exponentiation। (n ~ 10^9 तक O(√n) भी चल जाता है, जैसे divisors या prime check: √10^9 ≈ 31,623 steps।)
- **Multiple test cases:** "sum of n over all test cases ≤ ..." वाली line ढूंढो; बजट उसी पर लगता है, एक test के n पर नहीं।
- **Value constraints भी पढ़ो:** values 10^9 तक और n 10^5 तक हैं तो sum 10^14 तक जा सकता है, यानी `int` overflow; C++ में `long long`, Java में `long` लो।
- **Memory भी बजट है:** 256 MB में करीब 6.7 करोड़ (4-byte) `int` आते हैं; उससे बड़ा array बनाने का plan है तो approach बदलो।

## ✅ ध्यान रखो / सोर्स
- "10^8 exactly" या "हमेशा" मत बोलो; ये **rule of thumb** है। Judge की machine, language और operation कितना simple है, इस पर बदलता है।
- "n square हमेशा TLE" मत बोलो; `n = 10^5` पर O(n²) करीब 10^10 operations है, जो 1 second की limit में आम तौर पर नहीं चलता। छोटे n पर n² बिल्कुल ठीक है।
- Satisficing अपने आप में बुरी चीज़ नहीं है (रोज़ के फ़ैसलों में काम की है); problem तब है जब "sample pass" को "सही और तेज़" मान लिया जाए।
- Framework का नाम अपना है: **एक second का बजट**। दूसरे creator का नाम ("constraint cheat code") नहीं लिया।
- DM का वादा तभी जब comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Constraint → complexity table और "a modern computer can perform some hundreds of millions of operations in a second": Antti Laaksonen, *Competitive Programmer's Handbook*, Chapter 2 "Time complexity" → "Estimating efficiency" (table: n ≤ 10 → O(n!), n ≤ 20 → O(2^n), n ≤ 500 → O(n³), n ≤ 5000 → O(n²), n ≤ 10^6 → O(n log n) या O(n), n large → O(1) या O(log n))। Source: https://github.com/pllk/cphb (chapter02.tex), book: https://cses.fi/book/book.pdf
  - Satisficing: Herbert A. Simon (1956), "Rational choice and the structure of the environment", *Psychological Review* 63(2), 129–138 (concept 1955 के "A Behavioral Model of Rational Choice" से शुरू)।
