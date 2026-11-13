# P02 · C++, Java या Python: placement किसकी लगेगी?
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 75 सेकंड · **Keyword:** LANG · **एक सीख:** Language से placement नहीं लगती; goal से एक language चुनो, उस पर टिको, और उसकी library में गहराई लाओ।

## 🎙️ वॉइसओवर
Hostel के एक कमरे में C++ वाला और Python वाला रहते हैं, और रात को दोनों सोचते हैं कि गलत language मैंने चुनी है। सच ये है कि कोई official data नहीं कहता कि एक language से placement पक्की है, और DSA round में ज़्यादातर logic ही देखा जाता है। फिर भी तुम हफ्तों से comparison videos ही देख रहे हो, और यही choice overload है, यानी options ज़्यादा हों तो दिमाग फैसला टालने लगता है। इसलिए language goal से चुनो। Competitive coding के लिए C++ लो, जो fast है और जिसकी STL में sort, map, priority queue ready मिलते हैं। Backend के लिए Java लो, जो service और product companies में खूब चलती है, पर Android के लिए Google 2019 से Kotlin first है। AI या data science के लिए Python लो, जिसका syntax सबसे आसान माना जाता है, पर strict judge पर वही logic slow होकर TLE दे सकता है। मेरा rule है चुनो, चिपको, चमको, यानी एक language चुनो, एक semester उससे चिपके रहो, और उसकी library में इतना गहरा उतरो कि interview में चमक जाओ। Comment में LANG लिखो, मैं तुम्हें language cheat sheet DM कर दूँगा। उस दोस्त को भेजो जो छह महीने से language ही decide कर रहा है, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (bunk bed):** hostel का double-decker bed, ऊपर stick figure के laptop पर `C++`, नीचे वाले पर `Python`; दोनों के ऊपर एक जैसा thought bubble "गलत language चुन ली? 😰"। नीचे छोटा caption: "रात 2 बजे की सबसे बड़ी चिंता"।
- **सच वाला कार्ड:** काला bg, gold में `Language ≠ Placement`, तीर, नीचे छोटा: "DSA round में ज़्यादातर logic देखा जाता है"।
- **Choice overload मीम:** browser में 40 tabs, हर tab पर "C++ vs Java vs Python (FINAL answer)"; stick figure पर मकड़ी का जाला 🕸️, ऊपर loading bar "Decision… 99%" जो कभी 100 नहीं होता। Gold में `choice overload` → "options ज़्यादा = फैसला टलता है"।
- **Goal → language board:** तीन column, gold headings `C++` / `Java` / `Python`; नीचे icons: ⚡ "CP + STL", ☕ "Backend", 🤖 "AI / Data"। Java column के नीचे छोटा tag "Android? → Kotlin-first (Google, 2019)"। कोई official logo नहीं, सिर्फ़ text।
- **TLE कार्ड:** "same logic, 10^8 जोड़" → `C++ ≈ 0.1 s ✅` vs `Python ≈ 6 s ⏱️`, कोने में छोटा "हमारी machine पर test"। नीचे: "strict judge पर Python = TLE का risk"।
- **Rule + CTA:** तीन gold stamps एक-एक करके लगते हैं `चुनो → चिपको → चमको`; फिर chat bubble "भाई कौन सी language लूँ?" (sent: 6 months ago 💀) और "Comment: LANG" + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** चुनो-चिपको-चमको: C++ vs Java vs Python sheet · **Keyword:** LANG
- **Goal → language:** competitive coding / tight time limit → **C++**; backend, enterprise → **Java** (Spring Boot ecosystem); AI, ML, data → **Python** (NumPy, pandas, PyTorch); Android app → **Kotlin** (Google 2019 से Kotlin-first, Java अभी भी supported)।
- **DSA की ज़रूरी चीज़ें, तीनों में:** dynamic array `vector` / `ArrayList` / `list` · hash map `unordered_map` / `HashMap` / `dict` · sorted map `map` / `TreeMap` / (Python में built-in नहीं, sorted list + `bisect`) · heap `priority_queue` / `PriorityQueue` / `heapq` · deque `deque` / `ArrayDeque` / `collections.deque`।
- **Heap का trap:** C++ `priority_queue` default में **max-heap** है, जबकि Java `PriorityQueue` और Python `heapq` default में **min-heap** हैं। Language बदलो तो ये उल्टा याद रखो।
- **C++ traps:** बड़े sum पर `int` overflow → `long long`; function में `vector<int>& v` (reference) भेजो, वरना पूरी copy बनती है; fast I/O: `ios::sync_with_stdio(false); cin.tie(nullptr);`; contests में `unordered_map` anti-hash tests से धीमा पड़ सकता है।
- **Java traps:** बहुत बड़े input पर `Scanner` धीमा, `BufferedReader` लो; `Integer` objects को `==` से compare मत करो (127 तक `true`, 128 पर `false` आ सकता है), `.equals()` लो; loop में string जोड़ने के लिए `StringBuilder`।
- **Python traps:** fast input `sys.stdin.readline`; default recursion limit 1000 है, गहरे DFS को iterative लिखो; platform PyPy दे तो try करो; अपने loops की जगह built-ins (`sorted`, `sum`, `Counter`) use करो।
- **TLE का असली rule:** n = 10^5 पर O(n²) मतलब 10^10 operations, जो किसी भी language में TLE है। पहले algorithm ठीक करो, language का फर्क constant factor का है।
- **Time limit हर platform पर अलग:** कुछ judges सब languages को एक ही limit देते हैं, कुछ (जैसे CodeChef) slow languages को extra multiplier देते रहे हैं। Problem page / FAQ पर check करो।
- **Interview में:** ज़्यादातर DSA rounds में mainstream language चुन सकते हो, पर OA platform की language list पहले देख लो; role-specific round (जैसे Java backend) में उसी language के सवाल आ सकते हैं।
- **Language कब बदलें:** जब goal बदले, तब। Trend देखकर नहीं। दूसरी language तब जोड़ो जब पहली में basic DSA बिना Google किए लिख लो।

## ✅ ध्यान रखो / सोर्स
- **मत बोलो:** "C++ वालों की ही placement होती है", "Python से TLE पक्का", "Android = Java", "X language बेकार है"। किसी language या उसके users का मज़ाक नहीं।
- "Python का syntax सबसे आसान" आम राय है, measured fact नहीं; इसीलिए VO में "माना जाता है"।
- Choice overload हर हालत में नहीं होता: Scheibehenne et al. (2010) के meta-analysis में average effect लगभग zero था, और Chernev et al. (2015) ने पाया कि ये तब ज़्यादा होता है जब options complex हों और अपनी preference साफ़ न हो। Students की language वाली उलझन ठीक यही हालत है, फिर भी "हमेशा" मत बोलना।
- Time limit multipliers के exact numbers (2x, 5x) स्क्रीन पर मत दिखाओ: forum posts में अलग-अलग साल के अलग numbers हैं, कोई current official page नहीं मिला। Codeforces पर community के मुताबिक़ सब languages के लिए एक ही limit है।
- स्क्रीन वाला 0.1 s vs 6 s हमारा अपना test है, universal number नहीं (12 Nov 2026, g++ 13.3 `-O2` vs CPython 3.13, `10^8` बार जोड़: ≈0.09 s vs ≈6.1 s)। "Python 60 गुना slow होता है" जैसा absolute दावा मत करो।
- Framework का नाम अपना है: **चुनो → चिपको → चमको**।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Android Kotlin-first (Google I/O 2019): https://developer.android.com/kotlin/first
  - Iyengar & Lepper (2000), "When choice is demotivating", *Journal of Personality and Social Psychology* 79(6), 995–1006।
  - Scheibehenne, Greifeneder & Todd (2010), "Can there ever be too many options? A meta-analytic review of choice overload", *Journal of Consumer Research* 37(3), 409–425।
  - Chernev, Böckenholt & Goodman (2015), "Choice overload: A conceptual review and meta-analysis", *Journal of Consumer Psychology* 25(2), 333–358, doi:10.1016/j.jcps.2014.08.002।
  - CodeChef time multipliers (forum): https://discuss.codechef.com/t/time-limit-for-different-languages-in-codechef-contests/13180 · Codeforces एक ही limit (community): https://codeforces.com/blog/entry/61298
  - **Test किया (12 Nov 2026):** C++ `priority_queue` में 5,1,3 → top `5` ✓ · Java `PriorityQueue` → peek `1` ✓ · Python `heapq` → `1` ✓ · Java `Integer 127==127 → true`, `128==128 → false`, `.equals → true` ✓ (OpenJDK 21) · Python `sys.getrecursionlimit()` → `1000` ✓।
