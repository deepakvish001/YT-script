# रील J1 (v7) — `public static void main(String[] args)` को डिकोड करते हैं

**सीरीज़:** कोड की एक लाइन · **लंबाई:** करीब 1 मिनट 45 सेकंड · **फ़ॉर्मेट:** 9:16 · **एआई क्लिप:** 0
**आधार:** v4 का कंटेंट और क्रम वही; v7 = एक लंबा जुड़ा पैराग्राफ़ (user की अपनी स्क्रिप्ट जैसा)। v6 से: हर step अगले step से सवाल के ज़रिए जुड़ा है (JVM का सफ़र), और किताबी हिंदी हटाकर user की अपनी बोलचाल वाले शब्द (open, start, call, return, याद कर लो) (public → static → void → main → String[] args → example → सार → Java 25)। सिर्फ़ **बोलने का स्टाइल** बदला है: थ्रिलर-नैरेटर वाली डीप-डाइव टोन ("आप", कोल्ड ओपन, "सच बताऊँ तो", "एक सेकंड सोचिए", "एक्चुअली ये X नहीं, Y है", "व्हाट डू यू थिंक")। स्टाइल के नियम: `ai-channel/STYLE-code-reels.md` → "बोलने का स्टाइल"।
**विज़ुअल:** reference reel जैसा — काला बैकग्राउंड, ऊपर पूरी line, जिस word की बात हो वो gold में, नीचे तीर और छोटा सा मतलब (हिंदी)।

---

## 🎙️ वॉइसओवर

> रिकॉर्डिंग: एक फ़ाइल `J1.wav`। **एक लंबा जुड़ा हुआ पैराग्राफ़** — बिना रुके कहानी की तरह पढ़ो, comma पर हल्की साँस। `args[0]` = "args zero", `args[1]` = "args one"।

College का पहला Java lab। Teacher board पर एक line लिखते हैं — public static void main, String args — और बोलते हैं, "इसे अभी बस याद कर लो, बाद में समझ आ जाएगा।" सुनने में ये एक normal सी line लगती है, लेकिन यहाँ एक चीज़ ऐसी है जो notice करने जैसी है — इस एक line के बिना आपका Java program start ही नहीं होता। तो सवाल ये है कि जो line इतनी important है, उसे हम बिना समझे याद क्यों करते हैं? आज हम इसे word by word decode करेंगे, तो reel को end तक ज़रूर देखना। इसे समझने का सबसे आसान तरीका है JVM की नज़र से देखना, क्योंकि JVM ही आपका program चलाती है। जब Java program start होता है, JVM बाहर से आती है, और बाहर वाला अंदर तभी आ सकता है जब दरवाज़ा open हो। public का मतलब यही है — सबके लिए open। अगर main public नहीं हुई, तो JVM उसे access ही नहीं कर पाएगी। Interesting बात ये है कि main को private कर दो, तो code compile तो हो जाएगा, पर program run नहीं होगा। चलो, JVM अंदर आ गई, पर अब एक नई problem है। Java normally पहले object बनाती है, फिर उससे method call करती है, लेकिन program start होने से पहले object होता ही नहीं। तो JVM main को call कैसे करे? इसका answer है static। static का मतलब है object के बिना use कर सकते हो, यानी JVM सीधे class के नाम से call कर देती है — Main dot main। अब JVM ने main को call कर दिया, तो क्या उसे बदले में कुछ चाहिए? नहीं। JVM को कोई value वापस नहीं चाहिए, उसे सिर्फ़ इतना चाहिए कि program start हो जाए, इसीलिए void — यानी कुछ return ही नहीं करना। Fun fact, C language में main एक number return करता है, पर Java में नहीं। पर रुकिए, class के अंदर तो बहुत सारे methods होते हैं, तो JVM को कैसे पता कि call किसे करना है? यहीं आता है main। main एक नाम है, और Java ने rule बना दिया है कि program यहीं से start होगा। JVM specifically main नाम की method को ही ढूंढती है, नाम change किया तो program start ही नहीं होगा। और ध्यान रखिए, Java capital और small letters में फ़र्क करती है, इसलिए Main या MAIN लिखा तो भी नहीं चलेगा। इसीलिए main को Java का fix entry point कहते हैं। अब program start हो गया, पर अगर आप start करते वक़्त program को कुछ बताना चाहें, तो? उसके लिए है last part — String args। String[] का मतलब है String का array, यानी text की list, और args का मतलब है arguments। आप program run करते वक़्त बाहर से जो values भेजते हैं, वो args के through main method को मिलती हैं, और args सिर्फ़ एक नाम है, आप इसकी जगह कोई और नाम भी रख सकते हैं। एक example से समझिए — आपने लिखा java Main Hello 10, तो Hello जाएगा args[0] में और 10 जाएगा args[1] में, क्योंकि array की counting 0 से start होती है। पर ध्यान से सोचिए, ये 10 actually number नहीं, text है, इसलिए इसमें 5 add करेंगे तो 15 नहीं, 105 आएगा। तो पूरा chain देखिए — public से JVM अंदर आई, static से बिना object के call हुआ, void से पता चला कि बदले में कुछ नहीं चाहिए, main ने बताया कि start यहीं से होगा, और String args से बाहर का input आया। यही है public static void main — Java का entry point, जहाँ से program start होता है। लेकिन आप शायद सोचेंगे कि Java 25 में तो छोटा सा void main() भी चल जाता है, तो पूरी line सीखने का फ़ायदा क्या? Actually ये time waste नहीं, ये आपका base है, क्योंकि college, interview और पुराने projects में आज भी ज़्यादातर यही पूरी line दिखती है। और mark my words, एक बार ये chain समझ गए, तो ये line आपको याद करनी नहीं पड़ेगी, खुद याद रहेगी। अगर आपने भी college में ये line बिना समझे याद की थी, तो comment में लिखिए "मैंने भी", और अगर concept clear हो गया हो, तो follow कर लेना।

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
