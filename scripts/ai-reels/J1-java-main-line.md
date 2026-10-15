# रील J1 (v10) — `public static void main(String[] args)` को डिकोड करते हैं

**सीरीज़:** कोड की एक लाइन · **लंबाई:** करीब 80–90 सेकंड · **फ़ॉर्मेट:** 9:16 · **एआई क्लिप:** 0
**आधार:** v4 का कंटेंट और क्रम वही; v9 = छोटा, आसान, एक जुड़ा पैराग्राफ़; हर वाक्य अगले से जुड़ा (C वाला fun fact और "args सिर्फ़ नाम है" हटाए)। v6 से: हर step अगले step से सवाल के ज़रिए जुड़ा है (JVM का सफ़र), और किताबी हिंदी हटाकर user की अपनी बोलचाल वाले शब्द (open, start, call, return, याद कर लो) (public → static → void → main → String[] args → example → सार → Java 25)। सिर्फ़ **बोलने का स्टाइल** बदला है: थ्रिलर-नैरेटर वाली डीप-डाइव टोन ("आप", कोल्ड ओपन, "सच बताऊँ तो", "एक सेकंड सोचिए", "एक्चुअली ये X नहीं, Y है", "व्हाट डू यू थिंक")। स्टाइल के नियम: `ai-channel/STYLE-code-reels.md` → "बोलने का स्टाइल"।
**विज़ुअल:** reference reel जैसा — काला बैकग्राउंड, ऊपर पूरी line, जिस word की बात हो वो gold में, नीचे तीर और छोटा सा मतलब (हिंदी)।

---

## 🎙️ वॉइसओवर

> रिकॉर्डिंग: एक फ़ाइल `J1.wav`। **एक जुड़ा हुआ पैराग्राफ़** — कहानी की तरह पढ़ो, comma पर हल्की साँस। `args[0]` = "args zero", `args[1]` = "args one"। करीब 80–90 सेकंड।

College के पहले Java lab में teacher board पर एक line लिखते हैं — public static void main, String args — और कहते हैं, "अभी बस याद कर लो।" लेकिन सच ये है कि इस एक line के बिना आपका Java program start ही नहीं होता, इसलिए आज इसे याद नहीं करेंगे, word by word समझेंगे। और इसे समझने का सबसे आसान तरीका है JVM की नज़र से देखना, क्योंकि JVM ही आपका program चलाती है। जब program start होता है, तो JVM आपकी class के बाहर से आती है, और बाहर वाला अंदर तभी आ सकता है जब दरवाज़ा open हो — इसीलिए पहला word है public, यानी सबके लिए open। और अगर ये दरवाज़ा बंद कर दिया, यानी main को private कर दिया, तो code compile तो हो जाएगा, पर JVM अंदर नहीं आ पाएगी और program चलेगा ही नहीं। चलिए, JVM अंदर आ गई, पर अब एक नई problem है — Java में normally method call करने के लिए पहले object बनाना पड़ता है, और program start होने से पहले कोई object होता ही नहीं। इसीलिए अगला word है static — यानी बिना object बनाए, सीधे class के नाम से call। अब JVM ने call तो कर दिया, तो क्या उसे बदले में कुछ चाहिए? नहीं, उसे बस program चलाना है — इसीलिए void, यानी कुछ return नहीं करना। पर एक मिनट — JVM ने call किया तो किस method को? Class में तो बहुत सारे methods होते हैं। इसीलिए Java ने एक नाम fix कर दिया — main। JVM सिर्फ़ इसी नाम को ढूंढती है, इसलिए नाम बदला — या Main capital में लिखा — तो program start ही नहीं होगा। अब program शुरू हो गया, पर अगर आप चलाते वक़्त बाहर से कुछ भेजना चाहें, तो? उसके लिए है आख़िरी हिस्सा — String args, यानी बाहर से भेजे गए text की list। जैसे आपने लिखा java Main Hello 10, तो Hello जाएगा args[0] में और 10 जाएगा args[1] में। पर ध्यान दीजिए — ये 10 number नहीं, text है, इसलिए इसमें 5 जोड़ेंगे तो 15 नहीं, 105 आएगा। तो अब पूरी line फिर से पढ़िए — public यानी JVM अंदर आ सकती है, static यानी बिना object के call, void यानी कुछ वापस नहीं, main यानी यहीं से start, और String args यानी बाहर से input। और हाँ, Java 25 में छोटा सा void main() भी चलता है, पर college और interview में आज भी ज़्यादातर यही पूरी line दिखती है। तो अब ये line याद करने की नहीं, समझने की चीज़ है। Concept clear हुआ हो तो follow कर लेना, और comment में बताइए — क्या आपने भी इसे बिना समझे याद किया था?

---

## स्क्रीन (reference reel स्टाइल)

> ऊपर पूरी line `public static void main(String[] args)`। जिस word की बात हो रही है, वो **gold + underline** में, बाकी dim। बीच में वही word बड़ा, नीचे तीर, फिर 1–2 लाइन का छोटा हिंदी मतलब (ज़रूरी शब्द नारंगी)। Transitions crossfade। हर cue VO के असली शब्द पर लॉक होगा।

| हिस्सा | बीच में | मतलब वाला कार्ड | एक्स्ट्रा बात वाला कार्ड |
|---|---|---|---|
| कोल्ड ओपन | चॉकबोर्ड जैसा फ़्रेम, line हाथ से लिखी जाती है; "याद कर लो" पर लाल अंडरलाइन | "नॉर्मल सी line?" → "इसके बिना program start नहीं" | "बिना समझे याद? 🤔" → "आज डिकोड करेंगे" |
| public | `public` | "सबके लिए **open** · JVM बाहर से आती है" | `private static void main` → "compile ✓ · run ✗" |
| static | `static` | "**बिना object** के call" | `Main.main()` (class नाम + डॉट + method) |
| void | `void` | "कुछ **return** नहीं" | "फ़न फ़ैक्ट · C: `int main()` · Java: `void main`" |
| main | `main` | "program **यहीं से** start" | `Main` / `MAIN` पर लाल ✗ → "**entry point**" |
| String[] args | `String[] args` | "**text की list** · बाहर से input" | `String[] args` → `String[] a` ✓ |
| Example | VS Code जैसा dark editor: code **type** होता है | टर्मिनल: `java Main Hello 10` → `Hello` / `10`; `args[0]`, `args[1]` के डिब्बे | `args[1] + 5` → `105` (लाल घेरा), नीचे छोटा: `Integer.parseInt` → `15` |
| पूरा chain | पाँचों words एक-एक कर जलते हैं, बीच में तीर: JVM अंदर → call → return? → main → input; फिर gold "**Entry point**" | "मैंने भी" कमेंट कार्ड | — |
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
- **टाइटल (कोई एक):** (1) `public static void main` — word by word decode (2) College में ये line बिना समझे याद की थी? आज समझो (3) `"10" + 5` = 105? Java की सबसे फ़ेमस line डिकोड
- **कवर:** काले बैकग्राउंड पर `public static void main(String[] args)`, नीचे gold में "बिना समझे याद की थी?"

## कैप्शन
> College में ये line बिना समझे याद की थी? 😅 आज `public static void main(String[] args)` का हर word डिकोड ✍️
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
