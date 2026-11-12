# P20 · Keyboard से पहले दो मिनट की पर्ची
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 73 सेकंड · **Keyword:** PEN · **एक सीख:** Type करने से पहले दो मिनट constraints, edge cases और brute idea कागज़ पर लिखो, ताकि पहले idea की सुरंग में न फँसो।

## 🎙️ वॉइसओवर
सवाल आते ही एक बंदा keyboard पर ऐसे टूट पड़ता है जैसे Tatkal ticket book कर रहा हो, और दूसरा दो मिनट चुपचाप कागज़ पर लिखता है। पहले वाले को लगता है वो race जीत रहा है, पर बीस मिनट बाद वही पूछता है, भाई n कितना था? ऐसा क्यों होता है? पहली वजह है Einstellung effect, यानी जो पहला idea दिमाग में बैठ गया उसी पर अटके रहना, भले आसान रास्ता सामने हो। Luchins ने 1942 में पानी के jars वाले experiment में दिखाया कि एक लंबा तरीका सीखने के बाद लोग उन सवालों पर भी वही लंबा तरीका लगाते रहे जिनका छोटा हल सामने था। दूसरी वजह है working memory, यानी दिमाग का छोटा सा RAM, तो syntax और constraints साथ संभालोगे तो कुछ न कुछ गिरेगा। कागज़ पर लिखना ये RAM खाली करता है, और इसे cognitive offloading कहते हैं। इसलिए type करने से पहले दो मिनट की पर्ची बनाओ, और ये इकलौती पर्ची है जिस पर कोई तुम्हें exam hall से नहीं निकालेगा। उसमें constraints, edge cases, हाथ से एक छोटा example, सबसे सीधा brute force idea और target complexity लिखो, फिर keyboard छुओ। Comment में PEN लिखो, मैं तुम्हें ये पूरी checklist DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (split screen):** बाएँ stick figure keyboard पर दोनों हाथ से टूट पड़ा, ऊपर "Tatkal 10:00:00 ⏰" वाला timer; दाएँ stick figure शांत, पेन और कागज़, चाय का कप ☕।
- **20 मिनट बाद:** बाएँ वाले के editor में 80 lines, सिर पर chat bubble "भाई n कितना था? 🥲"; दाएँ वाले के कागज़ पर `n ≤ 10^5` पहले से gold में घिरा हुआ।
- **Einstellung कार्ड:** gold में `Einstellung effect`, तीर, नीचे "पहला idea = सुरंग 🚇"। तीन पानी के jars (A, B, C) का simple drawing: लंबा रास्ता `B − A − 2C` लाल, छोटा रास्ता `A − C` हरा, stick figure फिर भी लाल वाला पकड़े हुए।
- **दिमाग का RAM:** सिर में छोटा RAM stick, उस पर "syntax · constraints · edge cases · logic" ठूँसे हुए, एक नीचे गिरता है; फिर कागज़ आता है और RAM खाली, gold में `cognitive offloading`।
- **पर्ची reveal:** पीली पर्ची पर एक-एक लाइन लिखी जाती है: Constraints · Edge cases · Example · Brute idea · Target O(?); कोने में stick figure invigilator 👍 "ये वाली allowed है"।
- **CTA:** "Comment: PEN ✍️" chat bubble + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** दो मिनट की पर्ची (pre-coding checklist) · **Keyword:** PEN
- **1 · Constraints:** n, values की range, time limit लिखो और target complexity तय करो (`n ≤ 10^5` → O(n log n) या कम; पूरी table के लिए LIMIT वाली reel)।
- **2 · Input/Output format:** 0-indexed या 1-indexed? multiple test cases? output किस format में, किस क्रम में?
- **3 · Edge cases:** खाली input, एक element, सब same, negative/zero, सबसे बड़ा size, overflow।
- **4 · छोटा example हाथ से:** sample को खुद solve करो और देखो सवाल सही समझा या नहीं।
- **5 · Brute force idea + उसकी complexity:** एक line में लिखो, भले धीमा हो।
- **6 · Gap देखो:** brute की complexity target से कितनी दूर है; वही gap बताता है कि क्या बदलना है।
- **7 · दूसरा रास्ता:** पहला idea लिखने के बाद 30 सेकंड एक अलग approach भी सोचो। Einstellung से बचने का सबसे सीधा तरीका।
- **8 · Overflow check:** values × n अगर 2^31 के करीब या ऊपर (10^5 × 10^9 = 10^14) → C++ `long long`, Java `long`।
- **9 · Interview में:** ये सब बोलते हुए लिखो और clarifying questions पूछो; online interview में editor के ऊपर comments में यही पर्ची लिख सकते हो।

## ✅ ध्यान रखो / सोर्स
- "Typing करने वाला हमेशा हारता है" या "research कहती है लिखने वाले X% आगे निकलते हैं" मत बोलो; ऐसा कोई number नहीं है। VO सिर्फ़ आदत और वजह बताता है।
- Luchins experiment के बारे में सिर्फ़ इतना बोलो जितना VO में है; कितने % लोग अटके, ये number VO में नहीं डालना।
- Online assessment (proctored) में कागज़ allowed है या नहीं, ये platform के rules पर depend करता है; पर्ची वाला joke humor है, rule नहीं। Proctored test में rough sheet के rules पढ़ लो।
- P27 से फ़र्क: ये reel **constraints और सोचने का plan** है; dry run और edge-case tracing P27 में है।
- Framework का नाम अपना है: **दो मिनट की पर्ची**। एक ही comment-ask है (PEN)।
- DM का वादा तभी जब comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Einstellung effect: Abraham S. Luchins (1942), "Mechanization in problem solving: The effect of Einstellung", *Psychological Monographs* 54(6), Whole No. 248 (water jar experiment)। Overview: https://en.wikipedia.org/wiki/Einstellung_effect
  - Cognitive offloading: Evan F. Risko & Sam J. Gilbert (2016), "Cognitive Offloading", *Trends in Cognitive Sciences* 20(9), 676–688 (परिभाषा: शरीर से की गई कोई क्रिया, जैसे लिखना, जो काम का दिमागी बोझ कम करे)। https://pubmed.ncbi.nlm.nih.gov/27542527/
  - Working memory की limit: Nelson Cowan (2001), *Behavioral and Brain Sciences* 24(1), 87–114 (करीब 4 chunks)।
