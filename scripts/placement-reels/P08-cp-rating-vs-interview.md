# P08 · Contest का शेर, interview में चुप क्यों?
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 73 सेकंड · **Keyword:** PATTERN · **एक सीख:** CP दिमाग तेज़ करता है, पर interview में patterns, बोलकर सोचना और साफ़ code अलग से practice करने पड़ते हैं।

## 🎙️ वॉइसओवर
तुम्हारी Codeforces rating हर महीने ऊपर जा रही है, लेकिन interview में जैसे ही सुना कि approach बोलकर समझाओ, दिमाग blank हो गया। रिश्तेदारों को बताया गया है कि लड़का Google जाएगा, और लड़का रात 2 बजे rating graph ऐसे देख रहा है जैसे पापा Sensex देखते हैं। वैसे CP बुरा नहीं है, ये एक sport है जो problem solving तेज़ करता है, और कुछ quant firms इसे काफी value देती हैं। लेकिन ज़्यादातर product companies के interview में patterns, साफ़ code, edge cases और बोलकर सोचना check होता है। यहाँ social facilitation काम करता है, यानी लोगों के सामने खूब practice वाला काम बेहतर होता है, और कम practice वाला बिगड़ जाता है। Contest में तुमने चुपचाप code करना खूब practice किया, पर बोलते हुए code करना नहीं। इसलिए practice में चुनो, बोलो, तोड़ो method जोड़ो। चुनो, यानी हर हफ्ते एक pattern लो, जैसे sliding window, और उसके चार पाँच सवाल करो। बोलो, यानी हर सवाल ऐसे ज़ोर से बोलकर solve करो जैसे सामने interviewer हो। तोड़ो, यानी submit के बाद अपने code को empty array, duplicates और negative numbers से तोड़कर देखो। Comment में PATTERN लिखो, मैं तुम्हें patterns और LeetCode सवालों वाली cheat sheet DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (split screen):** बाएँ stick figure के ऊपर हरा rating graph तेज़ी से ऊपर जाता हुआ, gold में "Expert 🔥"; दाएँ वही stick figure interview table पर, सामने वाले का speech bubble "Approach बोलकर समझाओ?", ऊपर बड़ा सा "🔇"।
- **रिश्तेदार वाला कार्ड:** बाएँ shaadi वाली chair पर बैठे stick figure रिश्तेदार, bubble "लड़का Google जाएगा 😌"; दाएँ रात 2 बजे laptop पर rating graph, कोने में छोटा सा 📈 "Sensex mode"।
- **"CP बुरा नहीं" कार्ड:** काला bg, gold में `CP = sport 🏆`, तीर, नीचे छोटा: "problem solving तेज़ · कुछ quant firms value करती हैं"। फिर दूसरी line gold में: `Interview = patterns + बोलना + साफ़ code + edge cases`।
- **Psychology कार्ड:** gold में `social facilitation`, तीर, नीचे: "सामने कोई हो → खूब practice वाला काम बेहतर, कम practice वाला खराब"। नीचे दो छोटे icons: 🤫 "चुपचाप code: रोज़ ✅" vs 🗣️ "बोलते हुए code: कभी नहीं ❌"।
- **Method chain:** gold में `चुनो → बोलो → तोड़ो`, हर शब्द बोलते वक़्त जलता है; "तोड़ो" पर code के ऊपर हथौड़ा 🔨 और लाल टैग `[]`, `[2,2,2]`, `-5`।
- **CTA:** chat bubble "PATTERN" + follow button, पीछे cheat sheet का धुंधला preview।

## 📄 Cheat sheet (comment → DM)
**नाम:** Pattern Map (सिग्नल → pattern → LeetCode सवाल) · **Keyword:** PATTERN
*कैसे use करें: हर हफ्ते एक pattern, उसके 4–5 सवाल, हर सवाल बोलकर solve, फिर खुद edge cases से code तोड़ो।*
- **Two pointers** · सिग्नल: sorted array, pair या triplet ढूँढना, दोनों सिरों से अंदर आना → Container With Most Water (LC 11), 3Sum (LC 15)
- **Sliding window** · सिग्नल: "सबसे लंबा/छोटा subarray या substring जिसमें कोई शर्त पूरी हो" → Longest Substring Without Repeating Characters (LC 3), Minimum Window Substring (LC 76)
- **Binary search on answer** · सिग्नल: "कम से कम कितनी speed/capacity चाहिए", और answer बढ़ाने पर हाँ/ना एक दिशा में बदलता है (monotonic) → Koko Eating Bananas (LC 875), Capacity To Ship Packages Within D Days (LC 1011)
- **Prefix sum (+ hash map)** · सिग्नल: बार-बार range sum, या "कितने subarrays का sum = k" (negative numbers भी हों) → Range Sum Query - Immutable (LC 303), Subarray Sum Equals K (LC 560)
- **Monotonic stack** · सिग्नल: "अगला बड़ा/छोटा element", "कितने दिन बाद गर्मी बढ़ेगी" → Daily Temperatures (LC 739), Largest Rectangle in Histogram (LC 84)
- **Heap (priority queue)** · सिग्नल: top K, kth largest, बार-बार सबसे छोटा/बड़ा निकालना → Kth Largest Element in an Array (LC 215), Top K Frequent Elements (LC 347)
- **Intervals** · सिग्नल: start-end वाले pairs, overlap, meetings → Merge Intervals (LC 56), Non-overlapping Intervals (LC 435)
- **BFS / DFS + Union-Find** · सिग्नल: grid या graph, जुड़े हुए हिस्से, कम से कम steps (unweighted → BFS), "क्या ये दोनों जुड़े हैं" (union-find) → Number of Islands (LC 200), Rotting Oranges (LC 994), Redundant Connection (LC 684)
- **Backtracking** · सिग्नल: "सारे subsets/permutations/combinations बताओ", n छोटा है → Subsets (LC 78), Permutations (LC 46), Combination Sum (LC 39)
- **Dynamic Programming** · सिग्नल: "कितने तरीके", "minimum cost / maximum profit", choices जिनमें वही subproblem बार-बार आए → House Robber (LC 198), Coin Change (LC 322)

## ✅ ध्यान रखो / सोर्स
- **"CP बेकार है" कभी मत बोलो**, और "rating = job" भी नहीं। Message: CP + interview वाली practice, दोनों।
- **"X patterns में सारे सवाल आ जाते हैं" जैसा fixed गिनती वाला दावा नहीं।** ये list common patterns की है, complete नहीं (greedy, trie, bit manipulation, topological sort भी आते हैं)।
- "हर product company" नहीं, **"ज़्यादातर"**। Quant/HFT firms (जहाँ CP को ज़्यादा weight मिलता है) का exception VO में ही बोला गया है।
- Google का नाम सिर्फ रिश्तेदार वाले joke में है; किसी company के interview process के बारे में कोई दावा नहीं किया।
- Social facilitation को सही बोलना: दूसरों की मौजूदगी में **अच्छी तरह सीखा/आसान** काम बेहतर और **नया/कठिन या कम practice वाला** काम खराब हो सकता है (Zajonc की drive theory)। Research के नतीजे पूरी तरह एक जैसे नहीं हैं, इसलिए "science ने prove किया" जैसा मत बोलो। इसे "interview में डर बीमारी है" की तरह भी मत बोलो।
- Series में दोहराव से बचने के लिए transfer-appropriate processing (P15 में है) और choking under pressure (P13 में है) यहाँ जानबूझकर नहीं लिए।
- Hook/मीम original हैं; दूसरे creator की lines, framework का नाम या stats नहीं लिए। Method का नाम अपना: **चुनो → बोलो → तोड़ो**।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Social facilitation: Robert B. Zajonc (1965), "Social facilitation", *Science* 149(3681), 269–274. (दूसरों की मौजूदगी arousal बढ़ाती है, जिससे dominant यानी अच्छी तरह सीखा response मज़बूत होता है और नया/कम सीखा response बिगड़ता है।)
  - Interview में क्या check होता है (communication, problem solving, technical competency, testing): Tech Interview Handbook, "Coding interview rounds overview" और "Coding signals": https://www.techinterviewhandbook.org/coding-round-overview/ · https://www.techinterviewhandbook.org/coding-signals/
  - Quant/trading firms और CP: Tower Research ने IICPC Codefest 2026 sponsor किया (https://tower-research.com/connecting-with-tomorrows-problem-solvers-at-iicpc-codefest-2026/); Hudson River Trading ने Codeforces पर "HRT Math Challenge" host किया (https://codeforces.com/blog/entry/133588)।
  - LeetCode सवाल: नाम और नंबर leetcode.com/problems/ पर (जैसे /two-sum, /koko-eating-bananas, /daily-temperatures, /redundant-connection)।
