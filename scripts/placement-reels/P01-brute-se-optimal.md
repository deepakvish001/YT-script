# P01 · पहले कच्चा code, फिर पक्का
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** BRUTE · **एक सीख:** Hard सवाल genius से नहीं, process से solve होते हैं: पहले चलने वाला गंदा code, फिर सिर्फ़ धीमे हिस्से का इलाज।

## 🎙️ वॉइसओवर
तुम्हारा roommate hard सवाल submit करके Maggi बनाने चला गया, और तुम चालीस मिनट से एक medium पर खाली editor घूर रहे हो। मम्मी सोचती हैं बेटा coding कर रहा है, पर बेटा cursor से staring contest खेल रहा है। तुम्हें लगता है roommate genius है, पर उसके पास एक process है, और तुम्हारे पास एक ज़िद है। उस ज़िद का नाम है perfectionism, यानी पहली line में ही perfect answer की चाह, और गलती का यही डर अक्सर शुरुआत ही नहीं करने देता। इसलिए तीन step याद रखो, कच्चा, पकड़ो, पक्का। पहला, कच्चा, यानी सबसे बदसूरत code जो सही answer दे, जैसे Two Sum में दो loop से हर pair check करना, जो n square है पर चलता तो है। दूसरा, पकड़ो bottleneck, यानी सबसे धीमा हिस्सा, और यहाँ वो अंदर वाला loop है जो हर number के लिए बाकी array छानता है। तीसरा, पक्का, यानी सिर्फ़ उसी का इलाज, देखे हुए numbers hash map में रखो, तो search लगभग एक झटके में होगी और code n square से n पर आएगा। मतलब loop में बार-बार search दिखे तो hash map, और sorted data में linear search दिखे तो binary search। Comment में BRUTE लिखो, मैं तुम्हें पूरी bottleneck table DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (split screen):** बाएँ stick figure roommate, हाथ में Maggi का कटोरा, ऊपर हरा "Accepted ✓ (Hard)"; दाएँ stick figure तुम, खाली editor, cursor टिमटिमाता, कोने में घड़ी "40:00"।
- **मम्मी वाला कार्ड:** दरवाज़े पर speech bubble "बेटा coding कर रहा है 🥹", अंदर stick figure और cursor आमने-सामने, ऊपर लिखा "STARING CONTEST · Round 47"।
- **Perfectionism कार्ड:** काला bg, gold में `perfectionism`, तीर, नीचे छोटा: "पहली line में ही perfect की ज़िद → शुरुआत ही नहीं"। पीछे खाली page पर बड़ा सा "?"।
- **3 step chain:** gold में `कच्चा → पकड़ो → पक्का`, हर शब्द बोलते वक़्त जलता है।
- **Two Sum demo:** editor में दो loop वाला code type होता है, `O(n²)` लाल; अंदर वाला loop लाल घेरे में ("bottleneck 🐢"); फिर वो loop मिटकर `seen` hash map वाली line आती है, `O(n)` हरा, कछुआ 🐢 → खरगोश 🐇।
- **Rule कार्ड + CTA:** दो line: "loop में बार-बार search → hash map" · "sorted data में linear search → binary search"; फिर "Comment: BRUTE" chat bubble + follow button।

**स्क्रीन वाला code (Python, test किया: `[2,7,11,15], 9` → `[0, 1]` दोनों में):**
```python
# कच्चा: O(n^2)
def two_sum_kaccha(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]

# पक्का: O(n) average
def two_sum_pakka(nums, target):
    seen = {}                      # number -> index
    for i, x in enumerate(nums):
        if target - x in seen:
            return [seen[target - x], i]
        seen[x] = i
```

## 📄 Cheat sheet (comment → DM)
**नाम:** कच्चा-पक्का Table (bottleneck → इलाज) · **Keyword:** BRUTE
- **Step order हमेशा यही:** (1) कच्चा brute force जो सही answer दे, (2) उसकी complexity लिखो और सबसे धीमी line पकड़ो, (3) सिर्फ़ उस line का इलाज, (4) छोटे input पर दोनों versions का output मिलाकर check करो।
- **अंदर वाला loop कुछ "ढूंढ" रहा है** (complement, duplicate, पहले देखा हुआ number) → **hash set / hash map**: O(n²) → O(n) average।
- **Sorted array में एक-एक करके search** → **binary search**: हर query O(n) → O(log n)।
- **Sorted array में pair/triplet ढूंढना** (sum = target) → **two pointers**: pair के लिए sort के बाद O(n²) → O(n)।
- **बार-बार किसी range का sum** → **prefix sum**: हर query O(n) → O(1), एक बार O(n) में build।
- **Fixed size window बार-बार दोबारा जोड़ना** → **sliding window** (running sum; window max के लिए monotonic deque): O(n·k) → O(n)।
- **बार-बार सबसे छोटा/बड़ा निकालना, साथ में insert भी** → **heap**: हर बार O(n) scan → O(log n)।
- **Recursion में वही subproblem बार-बार** → **memoization / DP**: अक्सर exponential → polynomial।
- **हर element के लिए आगे "अगला बड़ा" ढूंढना** → **monotonic stack**: O(n²) → O(n)।
- **Interview tip:** brute force बोलो, उसकी complexity बोलो, फिर "यहाँ bottleneck ये है" बोलकर optimize करो। Interviewer को तुम्हारी सोच दिखती है।

## ✅ ध्यान रखो / सोर्स
- "Hash map हमेशा O(1)" मत बोलो: **average** O(1) है, worst case (बहुत collisions) O(n) तक जा सकता है। VO में "लगभग एक झटके में" इसी वजह से है।
- Roommate वाली line किसी का मज़ाक नहीं; tone ये रहे कि process सीखी जा सकती है, genius होना ज़रूरी नहीं।
- Perfectionism को बीमारी या label की तरह मत बोलो; सिर्फ़ "पहली बार में perfect की ज़िद" वाले हिस्से की बात है।
- Framework का नाम अपना है: **कच्चा → पकड़ो → पक्का**। दूसरे creator का नाम या "BUD" जैसे किताब के नाम इस्तेमाल नहीं किए।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Perfectionism और टालमटोल: Sirois, Molnar & Hirsch (2017), "A Meta-analytic and Conceptual Update on the Associations Between Procrastination and Multidimensional Perfectionism", *European Journal of Personality* 31(2), 137–159. Perfectionistic **concerns** (गलती का डर, खुद को कोसना) का procrastination से positive संबंध (r ≈ .23) मिला, जबकि perfectionistic **strivings** का negative। इसीलिए VO में "गलती का यही डर" कहा है, पूरा perfectionism नहीं। https://eprints.whiterose.ac.uk/112533/
  - Brute force बोलकर फिर optimize करना standard interview सलाह है: Gayle Laakmann McDowell, *Cracking the Coding Interview* (6th ed.), problem-solving flowchart (Brute Force → Optimize)।
  - Two Sum: LeetCode #1। Python `dict` lookup average O(1): Python docs, TimeComplexity wiki (https://wiki.python.org/moin/TimeComplexity)।
