# P12 · Sample pass, hidden fail
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** OA · **एक सीख:** हर OA के नियम अलग होते हैं; code लिखने से पहले constraints से complexity तय करो, edge cases लिखो और overflow देखो।

## 🎙️ वॉइसओवर
पिछले OA में brute force pass हुआ था, तो आज भी वही लगाया, samples green हुए, और submit करते ही hidden tests लाल हो गए। Sample pass होना bathroom में गाकर खुद को singer समझने जैसा है, असली test तो stage पर होता है। गलती मेहनत की नहीं, अंदाज़े की थी, क्योंकि हर OA अलग होता है। कई service based tests में aptitude, basics और सही output पर focus होता है, जबकि ज़्यादातर product based OAs में constraints बड़े होते हैं और hidden tests speed और edge cases पकड़ते हैं। दोनों ठीक हैं, नियम अलग हैं। पुराने तरीके पर अटकना Einstellung effect है, यानी जो तरीका पहले चला, दिमाग बार बार उसी पर जाता है। हिसाब देखो, n एक लाख है तो O(n²) करीब हज़ार करोड़ operations है, और rule of thumb से judge एक second में करीब दस करोड़ करता है, यानी करीब सौ seconds, जबकि limit अक्सर एक दो seconds होती है। इसलिए CEO check लगाओ। C यानी constraints, n देखकर complexity तय करो। E यानी edge cases, code से पहले empty input, एक element और duplicates लिख लो। O यानी overflow, बड़े sums के लिए long long या long लो। Comment में OA लिखो, मैं तुम्हें पूरी checklist DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook:** editor में test panel: "Sample 1 ✅ Sample 2 ✅" → Submit बटन दबता है → नीचे लाल लाइनें "Hidden 4 ❌ TLE · Hidden 7 ❌ Wrong Answer"; stick figure का मुँह 😶।
- **Bathroom singer कार्ड:** बाएँ stick figure shower में माइक की तरह शैम्पू की बोतल, caption "Sample tests 🎤"; दाएँ वही stick figure stage पर, सामने भीड़ के 👀, caption "Hidden tests"।
- **दो अलग नियम (respectful split):** बाएँ कार्ड "कई service-based tests: aptitude · reasoning · basics · सही output"; दाएँ कार्ड "ज़्यादातर product OAs: बड़े constraints · hidden tests · speed + edge cases"; बीच में ⚖️ "दोनों ठीक, नियम अलग"। कोई company का नाम या logo नहीं।
- **Psychology कार्ड:** gold में `Einstellung effect`, तीर, नीचे: "जो तरीका पहले चला, दिमाग वहीं भागता है"; छोटा icon 🔁।
- **हिसाब कार्ड:** `n = 1,00,000` → `O(n²) ≈ 10¹⁰` (हज़ार करोड़) → `÷ ~10⁸ /sec` → `≈ 100 sec` लाल, बगल में `limit: 1–2 sec` हरा; कोने में छोटा टैग "rule of thumb"।
- **CEO check + CTA:** gold में तीन अक्षर `C · E · O` एक-एक कर जलते हैं: "Constraints → complexity", "Edge cases पहले", "Overflow → long long / long"; फिर chat bubble "OA" + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** OA Checklist (CEO check) · **Keyword:** OA
- **Constraints → complexity (1 second limit, ~10⁸ simple operations/sec का rule of thumb):** n ≤ 10 → O(n!) चल सकता है · n ≤ 20 → O(2ⁿ) · n ≤ 500 → O(n³) · n ≤ 5,000 → O(n²) · n ≤ 10⁵ से 10⁶ → O(n log n) या O(n) · n ≈ 10⁹ या उससे बड़ा → O(log n) या O(1) / math।
- **Edge cases, code से पहले लिखो:** empty input या n = 1 · सारे elements same · negative numbers और zero · duplicates · पहले से sorted / उल्टा sorted · सबसे बड़ी values · strings में space, uppercase/lowercase · graph में disconnected हिस्से या self-loop।
- **Overflow:** `int` की limit करीब 2.1 × 10⁹ (2³¹ − 1) है। Sum, product या count इससे ऊपर जा सकता है तो C++ में `long long`, Java में `long`। Python में int overflow नहीं होता।
- **Fast input:** C++ में `ios::sync_with_stdio(false); cin.tie(nullptr);` · Java में बड़े input के लिए `Scanner` की जगह `BufferedReader` · Python में `sys.stdin.readline`।
- **Recursion depth:** Python की default recursion limit 1000 है, तो बहुत गहरा DFS crash कर सकता है। Iterative (stack वाला) version बेहतर।
- **Output format exact रखो:** extra space, newline, "YES" vs "Yes", decimal places। Format गलत तो सही answer भी Wrong Answer।
- **Submit से पहले 30 second:** सबसे बड़े n पर मन में complexity गिनो, और अपने लिखे edge cases पर एक बार run करो।
- **Partial marks:** कई platforms पर हर test case के अलग marks मिलते हैं, तो time खत्म हो रहा हो तो चलने वाला brute force submit करना खाली छोड़ने से बेहतर।
- **Test का pattern पहले से पता करो:** company के official page या placement cell से sections, time और language options देखो। जैसे TCS NQT में Foundation (numerical, verbal, reasoning) और Advanced (advanced quant/reasoning + coding) sections होते हैं, और Advanced वाला हिस्सा Digital/Prime जैसे higher roles के लिए मायने रखता है।

## ✅ ध्यान रखो / सोर्स
- **किसी company का मज़ाक नहीं, और "service वाले tests आसान होते हैं" भी नहीं।** कई service companies के higher-track tests (जैसे TCS NQT का Advanced coding section) काफी tough होते हैं। VO में "कई" और "ज़्यादातर" जानबूझकर है।
- **"Service tests में hidden test cases नहीं होते" मत बोलो**; वहाँ भी होते हैं। फर्क constraints और focus का है।
- "90% students ऐसा करते हैं" जैसा कोई stat नहीं डाला।
- 10⁸ operations/sec **rule of thumb** है, law नहीं: language (Python धीमा), judge machine और operations के type पर depend करता है। VO में "rule of thumb" और "करीब" दोनों बोले गए हैं।
- Math check: 10⁵ का square = 10¹⁰ = हज़ार करोड़; 10⁸ = दस करोड़; 10¹⁰ / 10⁸ = 100 seconds।
- Framework का नाम अपना: **CEO check** (Constraints, Edge cases, Overflow)।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Einstellung effect: Abraham S. Luchins (1942), "Mechanization in problem solving: The effect of Einstellung", *Psychological Monographs* 54(6), No. 248। (Water jar experiment: पुराना लंबा formula सीखने वाले लोगों ने आसान solution मिस कर दिया।)
  - ~10⁸ operations/second: USACO Guide, "Time Complexity" (https://usaco.guide/bronze/time-comp)।
  - Input size → complexity table: Antti Laaksonen, *Competitive Programmer's Handbook*, Chapter 2 "Time complexity", "Estimating efficiency" (1 second limit मानकर)। O(2ⁿ) वाली row पर editions में n ≤ 20 / n ≤ 25 का फर्क है, इसलिए cheat sheet में conservative 20।
  - Python default recursion limit 1000: Python docs, `sys.getrecursionlimit()` / `sys.setrecursionlimit()`।
  - TCS NQT pattern (Foundation + Advanced, Ninja/Digital/Prime tracks): third-party summaries (जैसे https://www.faceprep.in/article/tcs-exam-pattern/)। Post से पहले official https://nextstep.tcs.com पर check कर लेना, pattern बदलता रहता है।
