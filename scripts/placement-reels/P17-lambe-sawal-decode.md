# P17 · दो page की कहानी, अंदर पुराना सवाल
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** DECODE · **एक सीख:** लंबा सवाल अक्सर जाना-पहचाना सवाल होता है जिसे कहानी के कपड़े पहनाए गए हैं; छन्नी लगाओ, pattern दिख जाएगा।

## 🎙️ वॉइसओवर
OA में सवाल खुला, उसमें एक राजा है, तीन सौ गाँव हैं, सड़कें हैं, टैक्स है, और तुमने scroll bar देखा और चुपचाप अगला सवाल खोल लिया। भाई ये coding test है या UPSC का essay paper? ये डर बेवजह नहीं है, क्योंकि लंबा text पढ़ते वक़्त working memory भर जाती है, जिसमें एक साथ कुछ ही चीज़ें टिकती हैं, और इसी बोझ को cognitive load कहते हैं। ऊपर से fear of the unknown, यानी जो पता न हो उसका डर, बोलता है कि ये ज़रूर कोई मुश्किल सवाल है। लेकिन अक्सर companies कोई जाना-पहचाना सवाल लेकर उसे कहानी के कपड़े पहना देती हैं, और उन्हें उतारने का मेरा तरीका है चाय की छन्नी। पहला, हर line से एक काम का शब्द उठाओ, जैसे गाँव, सड़क, खर्चा, सब जुड़े हों। दूसरा, इन शब्दों को चार डिब्बों में डालो, input, limits, rules और output। तीसरा, छन्नी लगाओ, यानी राजा की कहानी चाय पत्ती की तरह फेंक दो, तो बचता है गाँव मतलब node, सड़क मतलब weighted edge, और सबको कम से कम खर्चे में जोड़ना मतलब Minimum Spanning Tree। तो दो page का सवाल textbook का पुराना दोस्त निकला। Comment में DECODE लिखो, मैं तुम्हें template और एक solved example DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook:** OA screen पर सवाल खुलता है, scroll bar इतना छोटा कि दिखे भी नहीं; stick figure का पसीना 💧, cursor चुपचाप "Next Question ▶" पर।
- **Exam hall मीम:** दो कार्ड: "Expectation: 5 line का coding सवाल" vs "Reality: राजा, 300 गाँव, टैक्स, सड़कें 📜📜📜", ऊपर लिखा "UPSC essay paper?"।
- **दिमाग का RAM कार्ड:** stick figure के सिर में छोटा सा डिब्बा, उसमें चार खाने; लंबी story के शब्द अंदर ठूँसे जाते हैं और बाहर गिरते हैं; gold में `cognitive load`, नीचे "एक साथ ज़्यादा बोझ"। फिर एक 👻 कान में "ये बहुत मुश्किल है" → `fear of the unknown`।
- **छन्नी animation:** चाय की छन्नी में पूरा सवाल डाला जाता है; ऊपर पत्ती बचती है ("राजा", "टैक्स", "कहानी"), नीचे कप में साफ़ शब्द गिरते हैं: `node · weighted edge · सबको जोड़ो · min cost`।
- **चार डिब्बे:** INPUT · LIMITS · RULES · OUTPUT, हर डिब्बे में keyword उड़कर बैठता है।
- **Reveal + CTA:** कप पर gold में `Minimum Spanning Tree`, साथ में 🤝 "पुराना दोस्त"; फिर "Comment: DECODE" chat bubble + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** चाय की छन्नी Template · **Keyword:** DECODE
- **Step 1 · एक line, एक शब्द:** हर line के बगल में सिर्फ़ एक keyword लिखो (कौन चीज़, क्या करना है, कोई number)। पूरी story याद रखने की ज़रूरत नहीं।
- **Step 2 · चार डिब्बे:** INPUT (क्या मिला और किस format में) · LIMITS (n, values, time limit) · RULES (क्या allowed, क्या नहीं) · OUTPUT (क्या लौटाना है, कौनसा format)।
- **Step 3 · छन्नी:** नाम, जगह, कहानी हटाओ; बचे हुए शब्दों को नीचे वाले शब्दकोश से मिलाओ।
- **कहानी → pattern शब्दकोश:**
  - शहर/लोग/computers + उन्हें जोड़ने वाली चीज़ → **graph**
  - सबको कम से कम कुल खर्च में जोड़ो → **Minimum Spanning Tree** (Kruskal/Prim)
  - एक जगह से बाकी सब तक सबसे छोटा रास्ता → **BFS** (बिना weight) / **Dijkstra** (non-negative weight)
  - "X से पहले Y होना चाहिए" (course, task dependencies) → **topological sort**
  - दोस्त के दोस्त, groups, "क्या ये दोनों एक ही group में हैं" → **DSU / connected components**
  - लगातार दिन, लगातार हिस्सा (subarray) → **sliding window / prefix sum**
  - "कम से कम कितना X रखें कि काम हो जाए" → **binary search on answer**
  - हर कदम पर choice, best total चाहिए → **DP** (या साबित हो सके तो greedy)
- **Step 4 · छोटा example:** 3–4 nodes वाला अपना example बनाओ और देखो decoded सवाल sample output से मेल खाता है या नहीं।
- **Worked example:** "राजा 300 गाँवों को सड़कों से ऐसे जोड़ना चाहता है कि हर गाँव से हर गाँव तक जा सकें, और कुल खर्च सबसे कम हो; हर सड़क का खर्च दिया है" → INPUT: गाँव (nodes), सड़कें + खर्च (weighted edges) · LIMITS: 300 nodes · RULES: सब connected · OUTPUT: न्यूनतम कुल खर्च → **MST** (Kruskal: edges को खर्च से sort करो, DSU से cycle बचाओ)।
- **Trap:** "राजधानी से हर गाँव तक सबसे छोटा रास्ता" MST नहीं है, वो **shortest path (Dijkstra)** है। एक शब्द बदलने से pattern बदल जाता है, इसलिए OUTPUT वाला डिब्बा ध्यान से भरो।

## ✅ ध्यान रखो / सोर्स
- "80% सवालों में jargon नकली होता है" या "हर लंबा सवाल आसान होता है" मत बोलो; VO में "अक्सर" है, और कुछ लंबे सवाल सच में मुश्किल होते हैं।
- किसी company का नाम लेकर "ये company ऐसा करती है" मत बोलो।
- "Working memory में 7 चीज़ें" जैसा fixed number मत बोलो; VO में "कुछ ही चीज़ें" है (आज के research में अंदाज़ा करीब 3–5 chunks का है)।
- Fear of the unknown को "बीमारी" की तरह नहीं, एक आम इंसानी डर की तरह बोलो।
- Framework का नाम अपना है: **चाय की छन्नी**। दूसरे creator के step names नहीं लिए।
- DM का वादा तभी जब comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Cognitive load: John Sweller (1988), "Cognitive load during problem solving: Effects on learning", *Cognitive Science* 12(2), 257–285।
  - Working memory की limit: Nelson Cowan (2001), "The magical number 4 in short-term memory: A reconsideration of mental storage capacity", *Behavioral and Brain Sciences* 24(1), 87–114 (करीब 4 chunks)।
  - Fear of the unknown: R. Nicholas Carleton (2016), "Fear of the unknown: One fear to rule them all?", *Journal of Anxiety Disorders* 41, 5–21 (परिभाषा: जानकारी न होने की वजह से महसूस होने वाला डर)। https://pubmed.ncbi.nlm.nih.gov/27067453/
  - MST / Kruskal: Cormen et al., *Introduction to Algorithms* (CLRS), Chapter "Minimum Spanning Trees"।
