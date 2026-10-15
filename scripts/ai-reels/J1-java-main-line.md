# रील J1 (v5) — `public static void main(String[] args)` को डिकोड करते हैं

**सीरीज़:** कोड की एक लाइन · **लंबाई:** करीब 1 मिनट 45 सेकंड · **फ़ॉर्मेट:** 9:16 · **एआई क्लिप:** 0
**आधार:** v4 का कंटेंट और क्रम वही (public → static → void → main → String[] args → example → सार → Java 25)। सिर्फ़ **बोलने का स्टाइल** बदला है: थ्रिलर-नैरेटर वाली डीप-डाइव टोन ("आप", कोल्ड ओपन, "सच बताऊँ तो", "एक सेकंड सोचिए", "एक्चुअली ये X नहीं, Y है", "व्हाट डू यू थिंक")। स्टाइल के नियम: `ai-channel/STYLE-code-reels.md` → "बोलने का स्टाइल"।
**विज़ुअल:** reference reel जैसा — काला बैकग्राउंड, ऊपर पूरी line, जिस word की बात हो वो gold में, नीचे तीर और छोटा सा मतलब (हिंदी)।

---

## 🎙️ वॉइसओवर

> रिकॉर्डिंग: एक फ़ाइल `J1.wav`। टोन: कहानी सुनाने वाला नैरेटर — शुरुआत में धीमा और रहस्य वाला, फिर हर word पर साफ़ और तेज़। **मोटे अक्षर** = ज़ोर। `...` = छोटा ठहराव।
> पढ़ने का तरीका: `args[0]` = "args ज़ीरो", `args[1]` = "args वन"।

**कोल्ड ओपन**
कॉलेज का पहला Java lab।
टीचर बोर्ड पर एक line लिखते हैं — public static void main, String args।
और साथ में बोलते हैं — "इसे अभी बस **रट लो**, बाद में समझ आ जाएगा।"
सुनने में ये एक नॉर्मल सी line लगती है।
लेकिन यहाँ एक चीज़ ऐसी है जो **नोटिस करने जैसी** है —
इस एक line के बिना, आपका Java program **start ही नहीं होता।**
तो सवाल ये है — जो line इतनी ज़रूरी है, उसे हम सिर्फ़ **रटते क्यों** हैं?
आज हम इस line को **word-by-word डिकोड** करेंगे। तो रील को एंड तक ज़रूर देखना।

**public**
सच बताऊँ तो, इस line का हर word किसी **वजह** से वहाँ बैठा है। शुरू करते हैं public से।
public का मतलब है — **सबके लिए खुला।**
अब इसको समझिए। जब आप program चलाते हैं, तो उसे चलाने वाली JVM आपकी class के **बाहर** से आती है।
अगर main public नहीं होगी, तो JVM उस तक पहुँच ही नहीं पाएगी।
और इंटरेस्टिंग बात — अगर आपने main को **private** कर दिया, तो code compile तो हो जाएगा... पर program **चलेगा नहीं।**

**static**
अब आता है static। और यहाँ **एक सेकंड सोचिए।**
Java में नॉर्मली पहले object बनता है, फिर उससे method call होती है।
लेकिन program शुरू होने से पहले... कोई object होता **ही नहीं।**
तो JVM, main को call कैसे करे?
इसीलिए main static होती है — यानी **बिना object बनाए**, सीधे class के नाम से call। जैसे — Main डॉट main।

**void**
अब void। void का मतलब है — **कुछ भी वापस नहीं** करना।
JVM को main से कोई value नहीं चाहिए। उसे बस इतना चाहिए कि program चल जाए।
फ़न फ़ैक्ट — C language में main एक number वापस करता है... पर Java में नहीं।

**main**
अब main। main एक **नाम** है, और Java ने rule बना दिया है — program **यहीं से** शुरू होगा।
JVM ढूंढती ही सिर्फ़ main नाम की method को है। नाम बदला — तो program start ही नहीं होगा।
और ध्यान रखिए — Java **capital और small** का फ़र्क मानती है। Main या MAIN लिखा, तो भी नहीं चलेगा।
इसीलिए main को Java का **entry point** कहते हैं।

**String[] args**
अब आख़िरी हिस्सा — String args।
String[] मतलब String का array, यानी **text की एक list।** और args मतलब arguments।
Program चलाते वक़्त आप बाहर से कुछ values भेज सकते हैं — वो सब args में आती हैं।
और args सिर्फ़ एक नाम है — इसकी जगह आप कोई और नाम भी लिख सकते हैं।

**Example**
अब इसे एक example से समझिए।
आपने लिखा — java Main Hello 10।
तो Hello जाएगा args[0] में, और 10 जाएगा args[1] में — क्योंकि गिनती **0 से** शुरू होती है।
पर **ध्यान से सोचिए** — ये 10 एक्चुअली number नहीं, **text** है।
इसमें 5 जोड़ेंगे, तो 15 नहीं... **105** आएगा!

**सार**
तो public static void main —
एक्चुअली ये रटने वाली line नहीं, ये Java का **entry point** है — जहाँ से हर program शुरू होता है।
अगर आपको भी कॉलेज में ये line बिना समझाए रटवाई गई थी, तो कमेंट में लिख दीजिए — **"रटा था"।**

**Java 25 ट्विस्ट**
लेकिन आप शायद सोचेंगे — सुना है Java 25 में तो छोटा सा void main() भी चल जाता है, तो पूरी line सीखने का फ़ायदा क्या?
एक्चुअली ये टाइम वेस्ट नहीं, ये आपकी **नींव** है। क्योंकि college, interview और पुराने projects में आज भी ज़्यादातर यही पूरी line दिखती है।

**एंडिंग**
और मार्क माय वर्ड्स — एक बार ये वजहें समझ गए, तो ये line आपको **दोबारा कभी रटनी नहीं** पड़ेगी।
व्हाट डू यू थिंक — छोटा void main() बेहतर है, या पुरानी पूरी line? बताइए कमेंट्स में।
और ऐसी ही कोडिंग की डीप डाइव्स के लिए **follow** कर लीजिए।

---

## स्क्रीन (reference reel स्टाइल)

> ऊपर पूरी line `public static void main(String[] args)`। जिस word की बात हो रही है, वो **gold + underline** में, बाकी dim। बीच में वही word बड़ा, नीचे तीर, फिर 1–2 लाइन का छोटा हिंदी मतलब (ज़रूरी शब्द नारंगी)। Transitions crossfade। हर cue VO के असली शब्द पर लॉक होगा।

| हिस्सा | बीच में | मतलब वाला कार्ड | एक्स्ट्रा बात वाला कार्ड |
|---|---|---|---|
| कोल्ड ओपन | चॉकबोर्ड जैसा फ़्रेम, line हाथ से लिखी जाती है; "रट लो" पर लाल अंडरलाइन | "नॉर्मल सी line?" → "इसके बिना program start नहीं" | "रटते क्यों हैं? 🤔" → "आज डिकोड करेंगे" |
| public | `public` | "सबके लिए **खुला** · JVM बाहर से आती है" | `private static void main` → "compile ✓ · run ✗" |
| static | `static` | "**बिना object** के call" | `Main.main()` (class नाम + डॉट + method) |
| void | `void` | "**कुछ वापस नहीं**" | "फ़न फ़ैक्ट · C: `int main()` · Java: `void main`" |
| main | `main` | "program **यहीं से** शुरू" | `Main` / `MAIN` पर लाल ✗ → "**entry point**" |
| String[] args | `String[] args` | "**text की list** · बाहर से input" | `String[] args` → `String[] a` ✓ |
| Example | VS Code जैसा dark editor: code **type** होता है | टर्मिनल: `java Main Hello 10` → `Hello` / `10`; `args[0]`, `args[1]` के डिब्बे | `args[1] + 5` → `105` (लाल घेरा), नीचे छोटा: `Integer.parseInt` → `15` |
| सार | पूरी line → तीर → gold "**Entry point**" | "रटा था?" कमेंट कार्ड | — |
| Java 25 | `void main()` + टैग "Java 25+" | "college / interview → पूरी line" | — |
| एंडिंग | `void main()` vs पूरी line — दोनों आमने-सामने, बीच में "?" | "FOLLOW करो" + handle | — |

**Example वाला code (स्क्रीन पर):**
```java
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < args.length; i++) {
            System.out.println("argument: " + args[i]);
        }
    }
}
```
```
$ java Main Hello 10
argument: Hello
argument: 10
```

---

## टाइटल और कवर
- **टाइटल (कोई एक):** (1) `public static void main` — रटो मत, डिकोड करो (2) कॉलेज में ये line रटवाई गई थी? आज समझो (3) `"10" + 5` = 105? Java की सबसे फ़ेमस line डिकोड
- **कवर:** काले बैकग्राउंड पर `public static void main(String[] args)`, नीचे gold में "रटा था?"

## कैप्शन
> कॉलेज में ये line बिना समझाए रटवाई गई थी? 😅 आज `public static void main(String[] args)` का हर word डिकोड ✍️
> और `"10" + 5` = 105 क्यों? 😮 Java 25 से `void main()` भी चलता है!
> कमेंट में बताइए — छोटा `void main()` या पूरी line? 👇
> #Java #JavaInHindi #CodingHindi #Programming #JavaBasics #LearnJava

## ध्यान रखो
- "main **हमेशा** public होती है" मत बोलो — Java 25 से ज़रूरी नहीं रहा।
- `private` वाला: "compile हो जाएगा, पर चलेगा नहीं"। "compile error" मत बोलो।
- "Java 25 में पुरानी line बंद हो गई" मत बोलो — पूरी line आज भी पूरी तरह चलती है।
- स्टाइल दूसरे चैनल से **सिर्फ़ प्रेरणा** है: उनकी सिग्नेचर लाइनें (चैनल इंट्रो, sign-off) कॉपी नहीं करनी।
- स्क्रीन का हर कोड असली और चलने वाला हो। Oracle/Java लोगो या "Duke" कैरेक्टर नहीं।

## सोर्स
- JEP 512 (JDK 25 में final) — `main` के लिए `public`/`static`/`String[] args` ज़रूरी नहीं; `void main()` चलता है: [openjdk.org/jeps/512](https://openjdk.org/jeps/512)
- C में `main` का return type `int` है (exit status): C standard, §5.1.2.2.1 "Program startup"
- **टेस्ट हो चुका (15 Oct 2026, OpenJDK 21.0.12 + 25.0.4, दोनों में):**
  1. `java Main Hello 10` → `argument: Hello` / `argument: 10` ✓
  2. `private static void main` → compile ✓, run पर "Main method not found" ✓
  3. method का नाम `Main` (capital M) या `start` → compile ✓, run पर "Main method not found" ✓
  4. `static public void main(String... dost)` (args की जगह कोई और नाम) → चल गया ✓
  5. `args[1] + 5` → `105` · `Integer.parseInt(args[1]) + 5` → `15` ✓
  6. Java 25 पर `void main() { IO.println("Hello"); }` → `Hello` ✓
