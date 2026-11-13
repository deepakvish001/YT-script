# P04 · React आता है, JavaScript नहीं?
**Series:** प्लेसमेंट का सच · **लंबाई:** करीब 74 सेकंड · **Keyword:** JS · **एक सीख:** Framework चलाना और JavaScript समझना अलग चीज़ें हैं; interview अक्सर नीचे वाली JavaScript पूछता है।

## 🎙️ वॉइसओवर
तुमने tutorial देख के तीन React projects बना लिए, पर interviewer ने बिना React के एक dropdown माँगा, तो दिमाग उस crashed app जैसा हो गया जो बस white screen दिखाता है। फिर उसने पूछा कि Promise पहले चलेगा या setTimeout, तो तुमने बोला, sir, depend करता है। Psychology में इसे illusion of explanatory depth कहते हैं, यानी जो चीज़ रोज़ use करते हैं, लगता है उसे समझते भी हैं, जब तक कोई समझाने को न बोले। React DOM और state संभाल लेता है, इसलिए पता ही नहीं चलता कि नीचे JavaScript क्या कर रही है। अब वही सवाल देखो, अगर पहले A print हो, फिर setTimeout में B, फिर Promise में C, और last में D, तो output आएगा A, D, C, B। वजह ये है कि पहले call stack का सीधा code चलता है, फिर microtask queue के Promise, और last में macrotask वाला setTimeout, भले उसका time zero हो। इसलिए मेरा Vanilla Sunday rule अपनाओ, यानी हर Sunday एक dropdown या modal plain JavaScript में बनाओ, और closures, this, event loop, promises और event delegation पक्के करो। तब तुम framework चलाने वाले नहीं, असली web developer बनोगे। Comment में JS लिखो, मैं तुम्हें core JavaScript की cheat sheet DM कर दूँगा, और follow कर लो।

## 🎬 स्क्रीन + मीम
- **Hook (Expectation vs Reality):** बाएँ "Resume: 3 React projects 🚀🚀🚀", दाएँ interviewer का chat bubble "बिना React, सिर्फ़ एक dropdown?"; फिर stick figure का सिर एक खाली सफ़ेद browser window बन जाता है, ऊपर छोटा "white screen of दिमाग"।
- **"Sir, depend करता है" कार्ड:** interviewer stick figure 👀, तुम्हारा bubble "sir… depend करता है 🙂", पीछे पसीने की बूंदें 💧।
- **Concept कार्ड:** काला bg, gold में `illusion of explanatory depth`, तीर, नीचे: "use कर पाना ≠ समझा पाना"। साथ में meter: "मुझे आता है: 9/10" → "समझाओ" → "3/10" (illustrative)।
- **Event loop demo:** editor में नीचे वाला code type होता है; तीन डिब्बे `Call Stack` · `Microtask` · `Macrotask`; A और D stack से निकलते हैं, C microtask से, B सबसे last; नीचे output `A D C B` एक-एक letter जलता है। `setTimeout(…, 0)` पर छोटा tag "0 ≠ तुरंत"।
- **Vanilla Sunday:** calendar पर हर Sunday पर 🍦 stamp "Vanilla Sunday"; बगल में checklist ☐ closures ☐ this ☐ event loop ☐ promises ☐ event delegation, एक-एक tick होता है।
- **Ending + CTA:** progress bar "React user → Web developer" भरता है; "Comment: JS" bubble + follow button।

**स्क्रीन वाला code (test किया, Node 22: output `A D C B`):**
```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
// A D C B
```

## 📄 Cheat sheet (comment → DM)
**नाम:** Vanilla Sunday: Core JavaScript interview sheet · **Keyword:** JS
- **Scope + hoisting:** `var` function-scoped, `let`/`const` block-scoped। `var` hoist होकर `undefined` रहता है; `let`/`const` को declaration से पहले छूने पर `ReferenceError` (temporal dead zone)।
- **Closure:** function अपने बाहर वाले variables याद रखता है, भले बाहर वाला function खत्म हो गया हो। Classic सवाल: `for (var i=0;i<3;i++) setTimeout(()=>log(i))` → `3 3 3`; `let` से → `0 1 2`।
- **`this`:** call के तरीके से तय होता है। `obj.method()` → `obj`; method अलग निकालकर call किया तो strict mode में `undefined`; arrow function का अपना `this` नहीं, बाहर वाला लेता है; `call` / `apply` / `bind` से खुद set करो।
- **Prototypes:** object में property न मिले तो prototype chain में ऊपर ढूंढी जाती है। `class` syntax अंदर से prototypes ही है।
- **Event loop:** पहले call stack का सारा sync code → फिर सारे microtasks (`Promise.then`, `await` के बाद वाला हिस्सा, `queueMicrotask`) → फिर एक task / macrotask (`setTimeout`, `setInterval`, click जैसे events)। `setTimeout(fn, 0)` का मतलब "कम से कम 0 ms बाद, queue में", तुरंत नहीं।
- **Promises + async/await:** states pending → fulfilled / rejected। `await` सिर्फ़ अपने async function को रोकता है, पूरे page को नहीं। Error के लिए `try/catch`। `Promise.all` एक भी reject पर reject, `Promise.allSettled` सबका result देता है।
- **DOM बिना framework:** `querySelector`, `createElement`, `append`, `classList.toggle`, `addEventListener`, `preventDefault`।
- **Event delegation:** 100 `li` पर 100 listeners नहीं, parent `ul` पर एक listener और `e.target.closest('li')`। ये bubbling से चलता है और बाद में जुड़े items पर भी काम करता है। (`focus` जैसे कुछ events bubble नहीं करते।)
- **Equality के झटके:** `'5' == 5` → `true` (type बदलकर compare), `===` type नहीं बदलता; `typeof null` → `"object"` (पुरानी quirk)।
- **Vanilla Sunday practice list:** dropdown, modal (Esc से बंद), tabs, todo + `localStorage`, debounce वाला search box, infinite scroll। हर एक बनाने के बाद वही React में बनाओ और लिखो कि React ने क्या बचाया।

## ✅ ध्यान रखो / सोर्स
- **मत बोलो:** "90% freshers JavaScript नहीं जानते", "FAANG ने React वालों को reject किया", "frameworks हर 5 साल में मर जाते हैं", "React सीखना गलत है"। बात order की है: पहले JavaScript, फिर framework।
- "setTimeout 0 = तुरंत" मत बोलो। VO में "भले उसका time zero हो" यही बताता है।
- "Macrotask" बोलचाल का शब्द है; HTML spec इसे "task" कहता है। Interview में दोनों नाम बता दो तो अच्छा।
- Rozenblit & Keil की study pen, zipper जैसी चीज़ों पर थी, coding पर नहीं; VO में सिर्फ़ concept लिया है, "research ने React developers पर साबित किया" मत बोलो।
- Hook की "white screen" line React app के crash वाली आम हालत पर मज़ाक है, किसी इंसान पर नहीं।
- Framework का नाम अपना है: **Vanilla Sunday**।
- DM का वादा तभी जब Instagram comment-keyword automation (जैसे ManyChat) चालू हो, वरना manually भेजो।
- **सोर्स:**
  - Rozenblit & Keil (2002), "The misunderstood limits of folk science: an illusion of explanatory depth", *Cognitive Science* 26(5), 521–562, doi:10.1207/s15516709cog2605_1।
  - MDN, microtasks guide: https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide
  - HTML Living Standard, event loops: https://html.spec.whatwg.org/multipage/webappapis.html#event-loops
  - MDN, event bubbling + delegation: https://developer.mozilla.org/docs/Learn_web_development/Core/Scripting/Event_bubbling
  - **Test किया (12 Nov 2026, Node v22):** ऊपर वाला code → `A D C B` ✓ · `var` loop → `3 3 3`, `let` loop → `0 1 2` ✓ · `'5' == 5` → `true`, `typeof null` → `object` ✓ · strict mode में अलग निकाला method → `this` = `undefined` ✓।
