# P18 · DS रटो मत, दो सवाल पूछो
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** DS · **एक सीख:** Data structure याद नहीं करना, निकालना है: data का रिश्ता क्या है, और कौनसा काम तेज़ चाहिए।

## 🎙️ वॉइसओवर
तुमने पचास सवाल रट लिए कि इसमें heap लगेगा और उसमें stack, फिर OA में इक्यावनवाँ सवाल आया और दिमाग बोला, out of syllabus। ये वैसा है जैसे पिछले साल का paper रटा और teacher ने numbers बदल दिए। इसे inert knowledge कहते हैं, यानी ऐसा ज्ञान जो याद तो है पर नए सवाल में काम नहीं आता, क्योंकि तुमने answer याद किया, वजह नहीं। इसलिए DS चुनने से पहले दो सवाल पूछो, रिश्ता और रफ़्तार। पहला, रिश्ता, यानी data कैसे जुड़ा है? लाइन में है तो array, key value जोड़े हैं तो hash map, family tree जैसा है तो tree, शहरों जैसा जाल है तो graph। शादी की प्लेटों की तरह आखिरी वाली पहले निकले तो stack, और राशन की लाइन की तरह पहला पहले निकले तो queue। दूसरा, रफ़्तार, यानी कौनसा काम तेज़ चाहिए? बार-बार min या max चाहिए तो heap, झट से ढूंढना है तो hash set, हमेशा sorted चाहिए तो balanced BST, और range sum चाहिए तो prefix sum। Dijkstra देखो, शहर और सड़कें यानी graph, और हर बार सबसे कम दूरी वाला शहर चाहिए यानी min heap, ये combination रटना नहीं पड़ा, दो सवालों से निकल आया। Comment में DS लिखो, मैं तुम्हें पूरा map DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook:** stick figure के पीछे 50 chits की दीवार ("Q12 → heap", "Q31 → stack"...), फिर स्क्रीन पर "Q51" आता है और सारी chits उड़ जाती हैं 🍃; सिर पर "OUT OF SYLLABUS 😨"।
- **पिछले साल का paper मीम:** दो कार्ड: "Expectation: वही सवाल आएगा 😎" vs "Reality: numbers बदल गए 💀"।
- **Inert knowledge कार्ड:** gold में `inert knowledge`, तीर, नीचे "याद है, पर काम नहीं आता"; एक तिजोरी 🔒 में रखा ज्ञान जिसकी चाबी गायब।
- **सवाल 1 · रिश्ता:** छह छोटे आइकन एक-एक कर आते हैं: लाइन (array) · नाम-tag (hash map) · family tree (tree) · शहरों का जाल (graph) · शादी वाली प्लेटों का ढेर (stack) · राशन की लाइन (queue)।
- **सवाल 2 · रफ़्तार:** speedometer 🏎️, हर काम पर सुई घूमती है: min/max → heap · "है या नहीं?" → hash set · sorted → balanced BST · range sum → prefix sum।
- **Dijkstra reveal + CTA:** छोटा graph, हर step पर heap से सबसे छोटी दूरी वाला शहर उठता है; gold में `graph + min heap = Dijkstra`; फिर "Comment: DS" chat bubble + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** रिश्ता और रफ़्तार Map · **Keyword:** DS
- **सवाल 1 · रिश्ता (data कैसे बैठा है):**
  - क्रम में, index से पहुँचना है → **array / dynamic array** (C++ `vector`, Java `ArrayList`, Python `list`)
  - key → value जोड़ा → **hash map** (`unordered_map`, `HashMap`, `dict`)
  - parent-child, hierarchy → **tree**
  - किसी से भी किसी का connection → **graph** (adjacency list)
  - आखिरी अंदर, पहला बाहर (LIFO) → **stack**
  - पहला अंदर, पहला बाहर (FIFO) → **queue**; दोनों सिरों से काम → **deque**
- **सवाल 2 · रफ़्तार (कौनसा काम बार-बार):**
  - बार-बार min/max निकालना + insert → **heap / priority queue**: push/pop O(log n), top देखना O(1)। ध्यान: C++ `priority_queue` default **max**-heap है, Java `PriorityQueue` और Python `heapq` default **min**-heap।
  - "है या नहीं?" / count → **hash set / hash map**: average O(1)
  - हमेशा sorted, या "इससे बड़ा सबसे छोटा कौन" → **balanced BST** (Java `TreeMap`/`TreeSet`, C++ `map`/`set`): O(log n)। Python में built-in नहीं है।
  - range sum, array बदलता नहीं → **prefix sum**: O(n) build, हर query O(1)
  - range sum/min + बीच में updates → **segment tree** या **Fenwick tree**: O(log n)
  - groups जोड़ना, "क्या ये दोनों एक group में हैं" → **DSU (union-find)**
- **Combo examples:** Dijkstra = graph + min heap · LRU cache = hash map + doubly linked list · sliding window maximum = deque · BFS = graph + queue।
- **Dijkstra नोट:** सिर्फ़ non-negative weights पर सही; binary heap के साथ O((V + E) log V)।
- **आदत:** नया सवाल देखते ही पहले ये दो लाइन कागज़ पर लिखो: "रिश्ता: ___" · "तेज़ चाहिए: ___"।

## ✅ ध्यान रखो / सोर्स
- "Hash map हमेशा O(1)" मत बोलो; average O(1) है।
- "हर सवाल इन दो सवालों से solve हो जाएगा" मत बोलो; ये data structure **चुनने** में मदद करते हैं, पूरा algorithm (जैसे DP की state) अलग सोचना पड़ता है।
- VO में Dijkstra के लिए "algorithm खुद निकल आया" नहीं कहा, सिर्फ़ "combination" (graph + min heap) कहा है। यही सही दावा है।
- Inert knowledge को "रटना हमेशा बेकार" की तरह मत बोलो; basics याद रखना ज़रूरी है, problem तब है जब सिर्फ़ answer याद हो, वजह नहीं।
- Framework का नाम अपना है: **रिश्ता और रफ़्तार**।
- DM का वादा तभी जब comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Inert knowledge: Alfred North Whitehead (1929), *The Aims of Education and Other Essays* ("inert ideas": बिना इस्तेमाल किए दिमाग में रखे विचार); Renkl, Mandl & Gruber (1996), "Inert knowledge: Analyses and remedies", *Educational Psychologist* 31(2), 115–121।
  - Dijkstra + priority queue और complexity: Cormen et al., *Introduction to Algorithms* (CLRS), Chapter "Single-Source Shortest Paths" → Dijkstra's algorithm।
  - Language defaults: C++ `std::priority_queue` (cppreference: default `std::less` → largest on top), Java `PriorityQueue` docs ("least element" at head), Python `heapq` docs (min-heap)।
