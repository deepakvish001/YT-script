# P27 · पहले nets, फिर match: dry run
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** DRYRUN · **एक सीख:** Type करने से पहले छोटे और अजीब inputs पर logic कागज़ पर चलाओ; गलती code में नहीं, सोच में होती है, और वो कागज़ पर सस्ती पकड़ी जाती है।

## 🎙️ वॉइसओवर
पचास line लिखीं, run किया, output अजीब आया, और तुमने Ctrl A, Delete दबाकर बीस मिनट की मेहनत उड़ा दी। दोबारा लिखा, वही गलती फिर आई, क्योंकि गलती code में नहीं, सोच में थी। हम सोचने की जगह type क्यों करते हैं? क्योंकि दिमाग को typing असली काम लगती है और सोचना टाइमपास, इसे action bias कहते हैं, यानी चुप बैठने से बेहतर कुछ भी कर देने की खुजली। Penalty पर goalkeeper ज़्यादातर किसी side dive मारता है, क्योंकि खड़े-खड़े goal खाना ज़्यादा बुरा लगता है, और हम वही dive keyboard पर मारते हैं। इसलिए rule है, पहले nets, फिर match। पहला, algorithm कागज़ पर चार पाँच steps में लिखो। दूसरा, छोटा input लेकर table में हर step के बाद variables की value भरो, यही dry run है। तीसरा, edge cases फेंको, खाली array, एक element, duplicates, negative numbers और सबसे बड़ा size। जैसे maximum ढूंढने में max को zero से शुरू किया, तो सारे numbers negative होने पर answer zero आएगा, जो array में है ही नहीं, ये bug table में दिख जाता है। कागज़ पर सब सही चले, तब type करो, क्योंकि अब coding बस translation है। Comment में DRYRUN लिखो, मैं तुम्हें template और edge case list DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook:** editor में lines तेज़ी से भरती हैं (counter "Line 50"), run → output `0` लाल; फिर `Ctrl + A` और `Delete` keys दबती हैं, timer "20:00" टूटकर गिरता है 💔।
- **Replay मीम:** "Attempt 2" का title card, वही code, वही लाल `0`; stick figure: "फिर से?? 😭"; नीचे gold में "गलती code में नहीं, सोच में थी"।
- **Action bias कार्ड:** gold में `action bias`, तीर, नीचे "कुछ भी कर दो, बस खाली मत बैठो"। Stick figure goalkeeper पूरे जोश से एक side dive मारता है (ऊपर thought bubble: "कुछ तो किया 😤"); फिर वही goalkeeper keyboard पर dive मारता हुआ।
- **Nets vs Match:** cricket nets में stick figure batting practice 🏏 (कागज़ + पेन), फिर stadium (editor); gold में `पहले nets → फिर match`।
- **Dry run table:** `[-3, -1, -2]` input; columns `i | arr[i] | max`; पहली row में `max = 0` लाल घेरे में, आखिर में `answer = 0` पर ❌ "ये तो array में है ही नहीं"; फिर fix: `max = arr[0]` → `-1` ✓।
- **CTA:** edge-case chips उड़ते हैं (`[]` · `[x]` · duplicates · negative · max n), फिर "Comment: DRYRUN" chat bubble + follow button।

**स्क्रीन वाला code (C++ snippet, `<vector>` के साथ test किया: `[-3, -1, -2]` → गलत वाला `0`, सही वाला `-1`):**
```cpp
// गलत: सब negative हों तो 0 देगा
int findMaxGalat(const vector<int>& a) {
    int mx = 0;
    for (int x : a) if (x > mx) mx = x;
    return mx;
}

// सही: पहले element से शुरू (a खाली न हो, ये पहले check करो)
int findMax(const vector<int>& a) {
    int mx = a[0];
    for (int x : a) if (x > mx) mx = x;
    return mx;
}
```

## 📄 Cheat sheet (comment → DM)
**नाम:** Nets Practice Sheet (dry run template + edge cases) · **Keyword:** DRYRUN
- **Step 1 · Plan:** algorithm को 4–6 छोटे steps में हिंदी/English में लिखो, code में नहीं।
- **Step 2 · Table बनाओ:** columns = loop counter + हर ज़रूरी variable + एक "note" column। हर iteration के बाद एक row भरो।

  | step | i | arr[i] | var1 | var2 | note |
  |---|---|---|---|---|---|
  | 0 (शुरुआत) | – | – | init | init | शुरुआती value सही है? |
  | 1 | 0 | … | … | … | |

- **Step 3 · Edge cases एक-एक करके चलाओ:**
  - खाली input (`[]`, खाली string) → code crash तो नहीं करेगा?
  - एक element, दो elements
  - सब same / duplicates
  - सब negative, zero वाले values
  - पहले से sorted और उल्टा sorted
  - odd और even length (बीच वाला element / mid वाले सवालों में)
  - सबसे बड़ा size → हाथ से नहीं चलाना; सिर्फ़ complexity और overflow check करो
- **Initial values की गलती सबसे आम है:** max को `0` नहीं, `arr[0]` या सबसे छोटी possible value से शुरू करो; min के लिए उल्टा।
- **Boundaries:** loop `< n` है या `<= n`? पहला और आखिरी index table में ज़रूर आए (off-by-one यहीं पकड़ा जाता है)।
- **Step 4 · तब type करो:** table सही चल गई तो code बस translation है। Type करने के बाद वही inputs चलाकर table से output मिलाओ।
- **Interview में:** dry run बोलते हुए करो, interviewer को दिखता है कि तुमने code खुद test किया।

## ✅ ध्यान रखो / सोर्स
- "80% thinking, 20% typing" या ऐसा कोई ratio मत बोलो; ये आदत है, कोई नापा हुआ number नहीं।
- Goalkeeper वाली बात में "बीच में खड़ा रहना हमेशा बेहतर है" मत बोलो; उस study के इस निष्कर्ष पर बाद में सवाल उठे हैं (नीचे सोर्स)। VO सिर्फ़ इतना कहता है कि goalkeeper ज़्यादातर dive मारते हैं (उस data में करीब 94% बार) और वजह ये कि खड़े-खड़े goal खाना ज़्यादा बुरा लगता है, जो paper का अपना explanation है।
- "सबसे बड़ा size" को हाथ से dry run करने को मत बोलो; वहाँ सिर्फ़ complexity/overflow सोचना है (cheat sheet में साफ़ लिखा है)।
- P20 से फ़र्क: P20 = code से पहले constraints/plan लिखना; ये reel = logic को छोटे और edge inputs पर हाथ से चलाना।
- Framework का नाम अपना है: **पहले nets, फिर match**।
- DM का वादा तभी जब comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Action bias (term): Anthony Patt & Richard Zeckhauser (2000), "Action bias and environmental decisions", *Journal of Risk and Uncertainty* 21(1), 45–72।
  - Goalkeeper example: Bar-Eli, Azar, Ritov, Keidar-Levin & Schein (2007), "Action bias among elite soccer goalkeepers: The case of penalty kicks", *Journal of Economic Psychology* 28(5), 606–621 (286 penalties; goalkeepers ने करीब 93.7% बार dive मारी; explanation: norm theory, यानी dive करके goal खाना कम बुरा लगता है)। आलोचना: "Should I stay or should I go? Optimal decision making in penalty kicks" (2009), जो कहता है goalkeepers का व्यवहार strategic तौर पर ठीक हो सकता है। https://www.bps.org.uk/research-digest/dont-jump-advice-goalkeepers-economic-psychology
  - Hand tracing मदद करता है: Xie, Nelson & Ko (2018), "An Explicit Strategy to Scaffold Novice Program Tracing", SIGCSE '18, 344–349 (line-by-line trace + बीच की values लिखने वाले students का performance बेहतर रहा)। https://faculty.washington.edu/ajko/papers/Xie2018TracingStrategies.pdf
