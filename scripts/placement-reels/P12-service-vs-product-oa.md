# P12 · एक हफ्ता, दो OA, दो नतीजे
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** OA · **एक सीख:** हर OA के नियम अलग होते हैं, और samples सिर्फ तुम्हें सही साबित करते हैं; अपना code खुद तोड़ो: constraints, edge cases, overflow।

## 🎙️ वॉइसओवर
एक हफ्ते में दो OA दिए, पहले में पूरे marks आए, दूसरे में वही brute force लगाया तो TLE की line लग गई। Sample pass होना bathroom में गाकर खुद को singer समझने जैसा है, असली test तो stage पर होता है। गलती मेहनत की नहीं, अंदाज़े की थी, क्योंकि हर OA अलग होता है। कई service based tests में aptitude, basics और सही output देखा जाता है, जबकि ज़्यादातर product OAs में constraints बड़े होते हैं और hidden tests speed और edge cases पकड़ते हैं। दोनों ठीक हैं, नियम अलग हैं। हम सिर्फ samples पर भरोसा confirmation bias की वजह से करते हैं, यानी दिमाग वही examples ढूंढता है जो उसे सही साबित करें। Wason के 2, 4, 6 वाले experiment में सिर्फ fit होने वाले examples आज़माने वाले अक्सर गलत rule पर पक्के हो गए। Speed भी देखो, n एक लाख हो तो O(n²) करीब हज़ार करोड़ steps है, जो एक दो second में नहीं चलेगा। इसलिए CEO check लगाओ। C यानी constraints, n देखकर complexity तय करो। E यानी edge cases, empty input, एक element और duplicates खुद डालकर चलाओ। O यानी overflow, बड़े sums पर long long या long लो। Comment में OA लिखो, मैं तुम्हें checklist DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (calendar split):** एक हफ्ते का calendar; सोमवार पर "OA #1 · Full marks 🎉", शुक्रवार पर "OA #2" और नीचे लाल लाइनों की कतार "TLE ❌ · Wrong Answer ❌ · TLE ❌"; stick figure का मुँह 😶।
- **Bathroom singer कार्ड:** बाएँ stick figure shower में माइक की तरह शैम्पू की बोतल, caption "Sample tests 🎤"; दाएँ वही stick figure stage पर, सामने भीड़ के 👀, caption "Hidden tests"।
- **दो अलग नियम (respectful split):** बाएँ कार्ड "कई service-based tests: aptitude · reasoning · basics · सही output"; दाएँ कार्ड "ज़्यादातर product OAs: बड़े constraints · hidden tests · speed + edge cases"; बीच में ⚖️ "दोनों ठीक, नियम अलग"। कोई company का नाम या logo नहीं।
- **Psychology कार्ड:** gold में `confirmation bias`, तीर, नीचे: "दिमाग वही examples ढूंढता है जो उसे सही साबित करें"; फिर छोटा कार्ड `2, 4, 6 → ?` और stick figure सिर्फ `8, 10, 12 ✅` `20, 22, 24 ✅` आज़माता है, कोने में "तोड़ने वाला example? 🤷"।
- **हिसाब कार्ड (छोटा):** `n = 1,00,000` → `O(n²) ≈ 10¹⁰` (हज़ार करोड़ steps) लाल, बगल में `limit: 1–2 sec` हरा। (पूरी constraint table P03 में है, यहाँ सिर्फ एक झलक।)
- **CEO check + CTA:** gold में तीन अक्षर `C · E · O` एक-एक कर जलते हैं: "Constraints → complexity", "Edge cases पहले", "Overflow → long long / long"; फिर chat bubble "OA" + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** OA Checklist (CEO check) · **Keyword:** OA
- **Constraints → complexity (1 second limit, ~10⁸ simple operations/sec का rule of thumb):** n ≤ 10 → O(n!) चल सकता है · n ≤ 20 → O(2ⁿ) · n ≤ 500 → O(n³) · n ≤ 5,000 → O(n²) · n ≤ 10⁵ से 10⁶ → O(n log n) या O(n) · n ≈ 10⁹ या उससे बड़ा → O(log n) या O(1) / math।
- **Edge cases, code से पहले लिखो:** empty input या n = 1 · सारे elements same · negative numbers और zero · duplicates · पहले से sorted / उल्टा sorted · सबसे बड़ी values · strings में space, uppercase/lowercase · graph में disconnected हिस्से या self-loop।
- **Overflow:** `int` की limit करीब 2.1 × 10⁹ (2³¹ − 1) है। Sum, product या count इससे ऊपर जा सकता है तो C++ में `long long`, Java में `long`। Python में int overflow नहीं होता।
- **Fast input:** C++ में `ios::sync_with_stdio(false); cin.tie(nullptr);` · Java में बड़े input के लिए `Scanner` की जगह `BufferedReader` · Python में `sys.stdin.readline`।
- **Recursion depth:** Python की default recursion limit 1000 है, तो बहुत गहरा DFS crash कर सकता है। Iterative (stack वाला) version बेहतर।
- **Output format exact रखो:** extra space, newline, "YES" vs "Yes", decimal places। Format गलत तो सही answer भी Wrong Answer।
- **Confirmation bias तोड़ो:** submit से पहले खुद से पूछो "कौनसा input मेरा code तोड़ सकता है?" और कम से कम 3 ऐसे inputs custom test में चलाओ; सबसे बड़े n पर मन में complexity गिनो।
- **Partial marks:** कई platforms पर हर test case के अलग marks मिलते हैं, तो time खत्म हो रहा हो तो चलने वाला brute force submit करना खाली छोड़ने से बेहतर।
- **Test का pattern पहले से पता करो:** company के official page या placement cell से sections, time और language options देखो। जैसे TCS NQT में Foundation (numerical, verbal, reasoning) और Advanced (advanced quant/reasoning + coding) sections होते हैं, और Advanced वाला हिस्सा Digital/Prime जैसे higher roles के लिए मायने रखता है।

## ✅ ध्यान रखो / सोर्स
- **किसी company का मज़ाक नहीं, और "service वाले tests आसान होते हैं" भी नहीं।** कई service companies के higher-track tests (जैसे TCS NQT का Advanced coding section) काफी tough होते हैं। VO में "कई" और "ज़्यादातर" जानबूझकर है।
- **"Service tests में hidden test cases नहीं होते" मत बोलो**; वहाँ भी होते हैं। फर्क constraints और focus का है।
- "90% students ऐसा करते हैं" जैसा कोई stat नहीं डाला।
- 10⁸ operations/sec (cheat sheet में) **rule of thumb** है, law नहीं: language (Python धीमा), judge machine और operations के type पर depend करता है। VO में सिर्फ "करीब हज़ार करोड़ steps" और "एक दो second में नहीं चलेगा" है।
- Math check: 10⁵ का square = 10¹⁰ = हज़ार करोड़ (1 करोड़ = 10⁷)। 10⁸/sec के हिसाब से ~100 seconds।
- **Wason experiment सही बोलना:** जिन्होंने सिर्फ fit होने वाले (confirming) examples आज़माए, वो अक्सर गलत rule पर पहुँचे। बाद में Klayman & Ha (1987) ने इसे "positive test strategy" कहा, यानी ये हमेशा bias नहीं, पर जब असली rule तुम्हारे अंदाज़े से बड़ा हो (जैसे hidden tests) तब यही तरीका गलती छुपा देता है। "लोग बेवकूफ़ थे" जैसा मत बोलो।
- Series में दोहराव से बचने के लिए Einstellung effect (P20, P28 में है) और पूरी constraint table (P03 में है) यहाँ जानबूझकर नहीं ली।
- Framework का नाम अपना: **CEO check** (Constraints, Edge cases, Overflow)।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Confirmation / 2-4-6 task: P. C. Wason (1960), "On the failure to eliminate hypotheses in a conceptual task", *Quarterly Journal of Experimental Psychology* 12(3), 129–140. doi:10.1080/17470216008416717
  - Reinterpretation: Klayman & Ha (1987), "Confirmation, disconfirmation, and information in hypothesis testing", *Psychological Review* 94(2), 211–228.
  - ~10⁸ operations/second: USACO Guide, "Time Complexity" (https://usaco.guide/bronze/time-comp)।
  - Input size → complexity table: Antti Laaksonen, *Competitive Programmer's Handbook*, Chapter 2 "Time complexity", "Estimating efficiency" (1 second limit मानकर)। O(2ⁿ) वाली row पर editions में n ≤ 20 / n ≤ 25 का फर्क है, इसलिए cheat sheet में conservative 20।
  - Python default recursion limit 1000: Python docs, `sys.getrecursionlimit()` / `sys.setrecursionlimit()`।
  - TCS NQT pattern (Foundation + Advanced, Ninja/Digital/Prime tracks): third-party summaries (जैसे https://www.faceprep.in/article/tcs-exam-pattern/)। Post से पहले official https://nextstep.tcs.com पर check कर लेना, pattern बदलता रहता है।
