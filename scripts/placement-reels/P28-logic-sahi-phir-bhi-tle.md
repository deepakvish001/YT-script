# P28 · Logic सही, फिर भी TLE?
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** TLE · **एक सीख:** Logic सही होने पर भी TLE आए तो तीन चीज़ें देखो: गलत data structure, अनजाने में बनी copy, और constraints के हिसाब से धीमा algorithm।

## 🎙️ वॉइसओवर
Sample पास, logic सही, फिर भी submit पर TLE आ गया, यानी time limit पार। Answer सही था, बस वो उस दोस्त जैसा निकला जो पाँच मिनट बोलकर घंटे भर बाद आता है। तीन वजहें होती हैं। पहली वजह गलत data structure है, जैसे loop में list पर contains हर बार पूरी list घूमता है, जबकि hash set में ये average O(1) है। n एक लाख हो तो करीब 10 की power 10 operations बनते हैं, यानी 1 second की limit में करीब सौ गुना देर। और बार बार minimum चाहिए, तो list नहीं, priority queue लो। ये आदत की गलती है, इसे Einstellung effect कहते हैं, यानी पुराना तरीका इतना पक्का कि बेहतर रास्ता दिखता ही नहीं। दूसरी वजह है अनजाने में बनी copy। C++ में recursion में vector by value भेजा तो हर call पर copy बनती है, const reference से भेजो। Java में array भेजने पर copy नहीं बनती, पर loop में String को plus से जोड़ना हर बार नई string बनाता है, StringBuilder लो। Python में slicing भी नई list बनाती है। तीसरी वजह है धीमा algorithm, तब constraints देखो और approach बदलो। Comment में TLE लिखो, मैं तुम्हें TLE checklist DM कर दूँगा, और ऐसे ही placement के सच के लिए follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook:** हरे ✓ `Sample 1 · Sample 2`, फिर Submit बटन दबते ही बड़ा लाल stamp **TLE ⏱️**। नीचे chat bubble: दोस्त "बस 5 min में आया 🏃" → घड़ी तेज़ घूमकर 1 घंटा आगे।
- **सौ गुना देर:** gold में `n = 10^5`, तीर, `10^5 × 10^5 = 10^10` vs `1 sec ≈ 10^8 (rule of thumb)`; बीच में कछुआ 🐢 "≈ 100 sec"। नीचे साइड-बाय-साइड: `list.contains(x)` लाल "पूरी list घूमो" vs `set.contains(x)` gold "average O(1)"।
- **Einstellung मीम (अपना drawing):** stick figure रोज़ वाली लंबी घुमावदार सड़क पर चल रहा है, बगल में सीधा पुल "HashSet / PriorityQueue" जिसे वो देख ही नहीं रहा; gold में `Einstellung effect`, नीचे "आदत ने रास्ता ढक दिया"।
- **Copy कार्ड (code, dark editor):**
  - C++: `int solve(int i, vector<int> a)` लाल ✗ "हर call पर copy" → `int solve(int i, const vector<int>& a)` gold ✓
  - Java: `for (...) s = s + c;` लाल ✗ → `sb.append(c);` gold ✓
  - Python: `solve(a[1:])` लाल ✗ → `solve(a, i + 1)` gold ✓
- **धीमा algorithm:** constraints पर gold घेरा `1 ≤ n ≤ 10^5`, साथ में `O(n²)` पर लाल ✗ और `O(n log n)` पर ✓, नीचे "trick नहीं, approach बदलो"।
- **CTA:** checklist का कागज़ ✅ (ऊपर "fast I/O भी" टैग) + "Comment: TLE" chat bubble + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** TLE Debugging Checklist · **Keyword:** TLE
- **1 · Constraints से complexity (1 second limit):** n ≤ 10 → O(n!) · n ≤ 20 → O(2^n) · n ≤ 500 → O(n³) · n ≤ 5000 → O(n²) · n ≤ 10^6 → O(n log n) या O(n)। Rule of thumb: 1 second में करीब 10^8 simple operations (C++ में; Python में इससे काफ़ी कम मानो)।
- **2 · Multiple test cases:** "sum of n over all test cases ≤ ..." पढ़ो। हर test case में पूरा MAX size array `memset`/`fill` मत करो, सिर्फ़ n तक साफ़ करो।
- **3 · Lookup:** list/`ArrayList`/`vector` में `contains`/`find`/`in` = O(n) → `HashSet` / `unordered_set` / Python `set` में average O(1)। Sorted चाहिए तो `TreeSet` / `std::set` (O(log n))।
- **4 · बार बार min/max:** हर बार sort या पूरा scan नहीं → priority queue (heap): add/poll O(log n)। ध्यान: Java `PriorityQueue` में `contains`/`remove(Object)` O(n) है।
- **5 · अनजाने copy:**
  - C++: `vector`/`string` by value → `const vector<int>&` (बदलना है तो `vector<int>&` + backtrack)। `s = s + c` हर बार नई string → `s += c` या `push_back`।
  - Java: array/object method में भेजने पर copy नहीं बनती (reference की value जाती है), पर loop में `String +=` हर बार नई String → `StringBuilder`।
  - Python: `a[1:]` जैसी slicing नई list बनाती है → index भेजो। Strings को loop में जोड़ने के बजाय `''.join(list)`।
- **6 · Recursion / DP:** एक ही state बार बार calculate हो रहा है? Memoization लगाओ।
- **7 · Infinite loop तो नहीं?** While loop में pointer/हद हर बार बदल रही है? (जैसे `while (lo < hi)` में `mid = (lo + hi) / 2` और `lo = mid` हो, तो दो elements बचने पर loop अटक जाता है; वहाँ `mid = (lo + hi + 1) / 2` लो)।
- **8 · Fast I/O:**
  - C++: `ios::sync_with_stdio(false); cin.tie(nullptr);` और `endl` की जगह `'\n'` (`endl` हर बार flush करता है)। इसके बाद `printf/scanf` को `cin/cout` के साथ मत मिलाओ।
  - Java: `Scanner` की जगह `BufferedReader` + `StringTokenizer`, output के लिए `StringBuilder`/`PrintWriter`।
  - Python: `import sys; input = sys.stdin.readline`; platform पर PyPy option हो तो वो भी try करो।
- **9 · खुद नापो:** max constraints वाला random input बनाओ और time देखो। Sample पास होना speed का सबूत नहीं।

## ✅ ध्यान रखो / सोर्स
- "Java में सब कुछ pass by reference है" मत बोलो। सही: Java में सब pass by value है; object/array के लिए reference की value जाती है, इसलिए array की copy नहीं बनती।
- "Python slicing हमेशा TLE देती है" मत बोलो; slicing O(k) copy है, recursion या loop के अंदर बार बार होने पर भारी पड़ती है।
- 10^8 operations/second **rule of thumb** है, exact नहीं (machine, language, operation पर depend)। "100 seconds" भी उसी अंदाज़े से है।
- Hash set का O(1) **average** है, worst case नहीं। (Codeforces जैसी जगह `unordered_map` पर anti-hash tests भी आते हैं; ये detail cheat sheet से बाहर रखी है।)
- C++ में `const vector<int>&` तब, जब function अंदर vector बदलता नहीं। बदलना हो तो non-const reference + backtracking।
- Fast I/O VO से बाहर रखा (शब्द-सीमा); cheat sheet में पूरा है, CTA कार्ड पर टैग से बताया है।
- Constraint वाली table P03 (LIMIT) में भी है; यहाँ सिर्फ़ checklist का एक point है, VO में दोहराई नहीं।
- **दोस्त वाला "5 मिनट"** मज़ाक हमारा अपना है।
- DM का वादा तभी जब comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Einstellung effect: Luchins, A. S. (1942). *Mechanization in problem solving: The effect of Einstellung.* Psychological Monographs, 54(6), i–95.
  - Constraint table: Antti Laaksonen, *Competitive Programmer's Handbook*, Ch. 2 "Estimating efficiency" (1 second time limit मान कर): https://cses.fi/book/book.pdf
  - Java complexities: `ArrayList` Javadoc ("All of the other operations run in linear time"), `HashSet` Javadoc ("constant time performance for the basic operations (add, remove, contains and size), assuming the hash function disperses the elements properly"), `PriorityQueue` Javadoc ("O(log(n)) time for the enqueuing and dequeuing methods ... linear time for the remove(Object) and contains(Object) methods")।
  - Java pass by value: Oracle Java Tutorials, "Passing Information to a Method or a Constructor" ("Reference data type parameters, such as objects, are also passed into methods by value")।
  - Python: slicing नई (shallow copy) list देती है: Python Tutorial §3.1.3 Lists; complexities: https://wiki.python.org/moin/TimeComplexity (list `in` O(n), set `in` O(1) average, get slice O(k)); string concatenation के लिए `''.join()`: PEP 8, "Programming Recommendations"।
  - C++ fast I/O: cppreference, `std::ios_base::sync_with_stdio`, `std::basic_ios::tie`, `std::endl` ("inserts a newline character ... and flushes it")।
