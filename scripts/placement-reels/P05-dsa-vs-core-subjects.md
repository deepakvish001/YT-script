# P05 · DSA में full marks, फिर भी reject?
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** CORE · **एक सीख:** Coding round दरवाज़ा खोलता है, पर अगले round में OS, DBMS, CN और OOP तय करते हैं कि अंदर रहोगे या नहीं।

## 🎙️ वॉइसओवर
दोनों coding questions दस मिनट में green हो गए, मन में party शुरू हुई, और फिर interviewer ने पूछा कि deadlock कब होता है, तो दिमाग खुद deadlock में चला गया। Core subjects इसलिए छूटते हैं क्योंकि LeetCode की streak रोज़ हरी होती है, पर OS पढ़ने की कोई streak नहीं होती, तो वो progress जैसा लगता ही नहीं। Psychology में इसे focusing illusion कहते हैं, यानी जिस चीज़ पर ध्यान टिका हो, वो असल से ज़्यादा ज़रूरी लगती है। लेकिन कई companies coding के बाद technical round में OS, DBMS, Computer Networks और OOP पूछती हैं। जैसे deadlock के लिए चार conditions एक साथ चाहिए, mutual exclusion, hold and wait, no preemption और circular wait, और एक भी तोड़ दो तो deadlock नहीं होगा। ऐसे ही index से search fast इसलिए है, क्योंकि ज़्यादातर databases का B+ tree पूरी table scan की जगह कुछ steps में row तक पहुँचा देता है। तो मेरा Chai Core plan अपनाओ, यानी रोज़ DSA के बाद एक chai जितना time, करीब बीस मिनट, एक core topic को दो, और जवाब दोस्त को बोलकर समझाओ। Comment में CORE लिखो, मैं तुम्हें चारों subjects के must-know सवालों की cheat sheet DM कर दूँगा। Follow कर लो, ताकि अगली बार दिमाग deadlock में न जाए।

## 🎬 स्क्रीन + मीम
- **Hook:** OA screen पर "2/2 ✅ · 10:00 min", stick figure 🎉 नाचता है; फिर interviewer bubble "Deadlock कब होता है?"; stick figure के सिर में दो तीर एक-दूसरे को घेरकर घूमते हैं 🔁 और पूरा frame freeze, ऊपर "दिमाग.exe not responding"।
- **Streak vs कुछ नहीं:** बाएँ हरे squares वाला generic streak calendar (कोई logo नहीं) "🔥 120 days", दाएँ "OS chapters: 🦗"। नीचे छोटा: "जो गिना जाता है, वही ज़रूरी लगता है"।
- **Concept कार्ड:** काला bg, gold में `focusing illusion`, तीर, नीचे: "ध्यान जहाँ, वही सबसे ज़रूरी लगता है"। Magnifying glass में बड़ा "DSA", पीछे धुंधले छोटे "OS · DBMS · CN · OOP"।
- **Deadlock diagram:** `P1` ने `R1` पकड़ा और `R2` माँग रहा है, `P2` ने `R2` पकड़ा और `R1` माँग रहा है, लाल गोल तीर। साइड में चार checkboxes (mutual exclusion, hold and wait, no preemption, circular wait); "circular wait" पर ✗ लगते ही तीर टूटता है और "No deadlock ✅"।
- **Index demo:** बाएँ table की rows एक-एक करके scan, 🐢 "full scan"; दाएँ B+ tree में root → बीच का node → leaf, सिर्फ़ 3 छलांग 🐇 (illustrative)।
- **Chai Core + CTA:** cutting chai का गिलास ☕ और timer `20:00`, ऊपर घूमते cards OS / DBMS / CN / OOP; फिर "Comment: CORE" bubble + follow button।

## 📄 Cheat sheet (comment → DM)
**नाम:** Chai Core: OS · DBMS · CN · OOP must-know सवाल · **Keyword:** CORE
- **OS · Process vs thread:** process का अपना address space होता है; एक process के threads उसका code, data और heap share करते हैं, पर हर thread का अपना stack, registers और program counter होता है। इसीलिए threads के बीच switch आमतौर पर processes से सस्ता है, और shared data पर race condition का खतरा भी वहीं है।
- **OS · Deadlock:** चार necessary conditions (Coffman, 1971): mutual exclusion, hold and wait, no preemption, circular wait। Prevention = कोई एक तोड़ो (जैसे सब locks एक fixed order में लो, तो circular wait खत्म); avoidance = Banker's algorithm; या detection + recovery।
- **OS · और ज़रूर पढ़ो:** mutex vs semaphore (mutex का एक owner, counting semaphore में N permits); paging, virtual memory, page fault, thrashing; CPU scheduling (FCFS, SJF, Round Robin), starvation और aging।
- **DBMS · Indexing:** बिना index = full table scan; B-tree / B+ tree index की ऊँचाई कम रहती है, इसलिए row तक O(log n) में और कम disk pages पढ़कर पहुँचते हैं। कीमत: insert / update थोड़ा धीमा और extra space। Clustered vs non-clustered index भी तैयार रखो।
- **DBMS · ACID + isolation:** Atomicity, Consistency, Isolation, Durability का एक-एक example; dirty read, non-repeatable read, phantom read, और कौन सा isolation level (read uncommitted, read committed, repeatable read, serializable) किसे रोकता है।
- **DBMS · Normalization + SQL:** 1NF, 2NF, 3NF, BCNF एक-एक line में; joins (inner, left, right, full); `WHERE` vs `HAVING`; "second highest salary" query दो तरीकों से।
- **CN · TCP vs UDP:** TCP = connection (3-way handshake: SYN, SYN-ACK, ACK), reliable, ordered, flow + congestion control → email, SSH, file transfer। UDP = बिना connection, कोई delivery guarantee नहीं, कम overhead → DNS queries, video calls, online games। Bonus: HTTP/3 QUIC पर चलता है, जो UDP के ऊपर बना है।
- **CN · URL डालने पर क्या होता है:** DNS lookup → TCP + TLS handshake (HTTP/3 में QUIC) → HTTP request → server response → browser render। साथ में OSI के 7 layers vs TCP/IP model।
- **OOP:** चार pillars (encapsulation, abstraction, inheritance, polymorphism) अपने project के example से; overloading (compile time) vs overriding (runtime); abstract class vs interface; SOLID के पाँच नाम और एक-एक line।
- **Chai Core तरीका:** रोज़ करीब 20 मिनट एक topic; जवाब ज़ोर से किसी दोस्त को समझाओ; हफ्ते के end में अपने project से जोड़ो (तुम्हारे app में index कहाँ है, कौन सा call TCP पर जाता है)।

## ✅ ध्यान रखो / सोर्स
- **मत बोलो:** "90% rejections core की वजह से होते हैं", "हर company core पूछती है", "DSA ज़रूरी नहीं"। VO में "कई companies" है, यही रखो।
- Coffman conditions **necessary** हैं: "चारों हों तो deadlock पक्का" मत बोलो। VO सिर्फ़ ये कहता है कि एक तोड़ दो तो deadlock नहीं होगा, जो सही है।
- "हर index B+ tree होता है" मत बोलो: hash, R-tree (spatial) वगैरह भी होते हैं। MySQL docs InnoDB index को "B-tree" कहते हैं (structure B+ tree जैसा, records leaf pages में); PostgreSQL का default भी B-tree है। इसीलिए VO में "ज़्यादातर databases"।
- "पूरा web TCP पर चलता है" अब पूरा सच नहीं (HTTP/3 = QUIC over UDP); इसलिए cheat sheet में TCP के examples email, SSH, file transfer रखे हैं।
- Focusing illusion की original study (Schkade & Kahneman, 1998) life satisfaction पर थी; VO में concept का simple मतलब लिया है, "research ने students पर साबित किया" मत बोलो।
- "20 मिनट" एक सुझाव है, research का number नहीं।
- Framework का नाम अपना है: **Chai Core plan**।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Schkade & Kahneman (1998), "Does living in California make people happy? A focusing illusion in judgments of life satisfaction", *Psychological Science* 9(5), 340–346।
  - Coffman, Elphick & Shoshani (1971), "System Deadlocks", *ACM Computing Surveys* 3(2), 67–78, doi:10.1145/356586.356588।
  - MySQL Reference Manual, "The Physical Structure of an InnoDB Index": https://dev.mysql.com/doc/refman/8.4/en/innodb-physical-structure.html
  - PostgreSQL docs, index types: https://www.postgresql.org/docs/current/indexes-types.html
  - TCP: RFC 9293 · UDP: RFC 768 · QUIC: RFC 9000 · HTTP/3: RFC 9114 (https://www.rfc-editor.org)
