# P15 · LeetCode पर शेर, portal पर ढेर
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 75 सेकंड · **Keyword:** PORTAL · **एक सीख:** जैसा test होगा, वैसी practice करो: हफ़्ते में कुछ दिन दूसरे portal पर पूरा program खुद लिखो।

## 🎙️ वॉइसओवर
LeetCode पर तुम्हारी 200 दिन की streak है, लेकिन OA का portal खुलते ही तुम screen ऐसे घूर रहे हो जैसे घर का खाना खाने वाला बच्चा hostel mess की थाली घूरता है। गलती आदत की है, क्योंकि LeetCode पर तुम बस function भरते हो और input platform खुद पढ़ता है। लेकिन कई OA portals पर पूरा program खुद लिखना पड़ता है, यानी input stdin से पढ़ो और answer print करो। सवाल कहता है कि पहली line में T test cases हैं, फिर हर case में n और n numbers, और दिमाग़ पूछता है, main function कहाँ है भाई? ऊपर से Enter n जैसा कुछ print कर दिया, तो सही logic भी wrong answer बन जाएगा। इसके पीछे एक concept है, transfer-appropriate processing, यानी जैसी practice करोगे, दिमाग़ वैसे ही test में बेहतर चलता है। एक ही platform आराम देता है, पर आराम को तैयारी समझना ही असली धोखा है। इसलिए हफ़्ते में दो दिन HackerEarth या Codeforces जैसे platform पर पूरा program खुद लिखो, और custom input से edge cases चलाओ। ऐसे बदल बदल कर practice करोगे, तो नया portal भी अपना लगेगा। Comment में PORTAL लिखो, मैं तुम्हें fast input output templates और portal checklist DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Expectation vs Reality split:** बाएँ dark editor में function stub `int solve(vector<int>& a)` और ऊपर 🔥 200; दाएँ बिल्कुल blank editor, सिर्फ़ blinking cursor और stick figure का speech bubble "main कहाँ है भाई? 😵"। (कोई असली platform logo नहीं, सिर्फ़ generic editor।)
- **थाली वाला card:** stick figure, बाएँ "घर का खाना 🍛 = LeetCode", दाएँ "mess का पहला दिन 😶 = नया portal"।
- **Sample input decode:** काले bg पर box `2 / 3 / 1 2 3 / 2 / 5 7`, gold तीर हर हिस्से पर: "T = 2 cases", "n = 3", "numbers"। ऊपर gold keyword `stdin` → "input खुद पढ़ो"।
- **Wrong Answer card:** बाएँ "तुम्हारा output: `Enter n: 6`", दाएँ "expected: `6`", बीच में लाल ✗ और नीचे छोटा "logic सही था, फिर भी 🤡"।
- **Concept card:** gold में "Transfer-appropriate processing" → तीर → "जैसी practice, वैसा test"।
- **Ending:** हफ़्ते का calendar, दो दिन पर "portal day 🔁" stamp; फिर comment bubble "PORTAL" + DM icon + "FOLLOW"।

## 📄 Cheat sheet (comment → DM)
**नाम:** Portal-Proof Kit (Fast I/O + OA checklist) · **Keyword:** PORTAL
- **C++ fast I/O:** `ios::sync_with_stdio(false); cin.tie(nullptr);` main की पहली line में। Output में `endl` की जगह `'\n'` (endl हर बार flush करता है)। Sync बंद करने के बाद `scanf/printf` और `cin/cout` को मिलाओ मत।
  ```cpp
  int t; cin >> t;
  while (t--) { int n; cin >> n; vector<long long> a(n); for (auto &x : a) cin >> x; /* solve */ cout << ans << '\n'; }
  ```
- **Java fast I/O:** `Scanner` छोटे input पर ठीक है, बड़े input पर धीमा पड़ता है। `BufferedReader` + `StringTokenizer` लो, और output `PrintWriter` से दो। आख़िर में `out.flush()` भूले तो output खाली जाएगा।
  ```java
  static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  static StringTokenizer st;
  static String next() throws IOException {
      while (st == null || !st.hasMoreTokens()) st = new StringTokenizer(br.readLine());
      return st.nextToken();
  }
  static PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));
  // int n = Integer.parseInt(next());   out.println(ans);   आख़िर में: out.flush();
  ```
- **Python fast I/O:** पूरा input एक बार में पढ़ो: `data = sys.stdin.buffer.read().split()` (ये bytes देता है, string चाहिए तो `.decode()`)। या `input = sys.stdin.readline`, पर string पढ़ते वक़्त `.strip()` लगाओ, वरना आख़िरी `'\n'` साथ आएगा। Output जोड़कर एक बार छापो: `sys.stdout.write("\n".join(map(str, res)) + "\n")`।
- **T नहीं दिया, EOF तक पढ़ना है:** C++ `while (cin >> x)`, Java `while ((line = br.readLine()) != null)`, Python `for line in sys.stdin:`।
- **Code से पहले input format पढ़ो:** T है या नहीं? n पहले आता है? numbers एक line में या अलग अलग lines में? 0-indexed या 1-indexed? Sample input पर उँगली रखकर हर हिस्सा पहचानो।
- **Constraints देखो:** n कितना बड़ा है, उससे complexity तय करो। Sum `int` की limit (करीब 2.1 × 10⁹) पार कर सकता है तो C++/Java में `long long`/`long` लो।
- **Function stub है या full program?** Stub है तो सिर्फ़ function भरो, locked/template वाला code मत छेड़ो। Full program है तो main खुद लिखो। Java में class का नाम वही रखो जो template में है।
- **Language version dropdown देखो:** `auto [a, b]` के लिए C++17 चाहिए, Java में `var` के लिए Java 10+, Python में `match` के लिए 3.10+। पुराने version पर इन features की गारंटी नहीं: Java 8 पर `var` और Python 3.9 पर `match` सीधा error देंगे, और C++14 पर कुछ compilers सिर्फ़ warning देकर छोड़ देते हैं, तो भरोसा मत करो, version पहले चुनो।
- **Custom input चलाओ:** sample के अलावा कम से कम 3 अपने cases: सबसे छोटा (n = 1), सब numbers same, और negative या सबसे बड़ा value।
- **Output exact रखो:** कोई "Enter n", कोई debug print नहीं। Space और new line sample output जैसा ही। Proctored OA हो तो full screen, tab switch नहीं, और camera/mic पहले से test कर लो।
- **Practice कहाँ करें:** HackerEarth, Codeforces और CodeChef पर ज़्यादातर पूरा program stdin/stdout से लिखना होता है; HackerRank पर दोनों तरह के सवाल मिलते हैं (function stub भी, full program भी)। हफ़्ते में 2 दिन यहाँ, बाकी दिन LeetCode।

## ✅ ध्यान रखो / सोर्स
- "80% लोग portal पर fail होते हैं" या कोई भी ऐसा stat **मत बोलो**। इसका कोई source नहीं।
- "हर OA में input खुद पढ़ना पड़ता है" **मत बोलो**। VO में "कई OA portals पर" ही रखो: Codility जैसे portals पर function (`solution(A)`) भरना होता है, HackerRank पर सवाल के हिसाब से stub या full program दोनों मिलते हैं।
- "Interleaving" शब्द VO में नहीं लिया, क्योंकि interleaving असल में अलग अलग *तरह के सवाल* मिलाने की बात है। Platform बदलना varied practice के ज़्यादा करीब है, इसलिए VO में सादा "बदल बदल कर practice" रखा।
- किसी platform या company का मज़ाक नहीं; screen पर असली logos नहीं।
- "DM कर दूँगा" तभी बोलो जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना हाथ से भेजो।
- **सोर्स:**
  - Transfer-appropriate processing: Morris, C. D., Bransford, J. D., & Franks, J. J. (1977). *Levels of processing versus transfer appropriate processing.* Journal of Verbal Learning and Verbal Behavior, 16(5), 519–533.
  - Varied practice से transfer बेहतर: Kerr, R., & Booth, B. (1978). *Specific and varied practice of motor skill.* Perceptual and Motor Skills, 46(2), 395–401. (ये बच्चों की throwing skill पर study है, coding पर नहीं; इसलिए VO में इसे "research कहती है" बनाकर नहीं बोला, सिर्फ़ सादी सलाह रखी।)
  - HackerEarth पर input STDIN से, output STDOUT पर, और output में extra text = wrong: [HackerEarth "Basics of Input/Output" tutorial](https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/tutorial)
  - Codility का function-style stub (`class Solution { public int solution(int[] A) }`): Codility के demo/training task pages।
  - C++ `sync_with_stdio`: [cppreference: std::ios_base::sync_with_stdio](https://en.cppreference.com/w/cpp/io/ios_base/sync_with_stdio)
