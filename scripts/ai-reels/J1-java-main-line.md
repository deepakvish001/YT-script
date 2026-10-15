# रील J1 (v4) — `public static void main(String[] args)` का हर word

**सीरीज़:** कोड की एक लाइन · **लंबाई:** करीब 85–90 सेकंड · **फ़ॉर्मेट:** 9:16 · **एआई क्लिप:** 0
**आधार:** user की अपनी स्क्रिप्ट — वही क्रम (public → static → void → main → String[] args → example → सार)। Wording थोड़ी आसान की है, और हर word के साथ **एक "एक्स्ट्रा बात"** जोड़ी है।
**विज़ुअल:** reference reel जैसा — काला बैकग्राउंड, ऊपर पूरी line, जिस word की बात हो वो gold में, नीचे तीर और छोटा सा मतलब (हिंदी)।

---

## 🎙️ वॉइसओवर

> रिकॉर्डिंग: एक फ़ाइल `J1.wav`। आराम से, दोस्त को समझाने वाले टोन में। **मोटे अक्षर** = ज़ोर। `...` = छोटा ठहराव।
> पढ़ने का तरीका: `args[0]` = "args ज़ीरो", `args[1]` = "args वन"।

**शुरुआत**
दोस्तों, क्या तुम्हें इस line का मतलब पता है?
इस एक line के बिना Java program **start ही नहीं होता।**
चलो, इसका हर word आसान भाषा में समझते हैं।

**public**
public मतलब — **सबके लिए खुला।**
Program चलाने वाली JVM, तुम्हारी class के **बाहर** से आती है।
अगर main public नहीं होगी, तो JVM उस तक पहुँच ही नहीं पाएगी।
इसलिए main को public रखते हैं।
और एक बात — अगर main को **private** कर दिया, तो code compile तो हो जाएगा... पर program **चलेगा नहीं।**

**static**
अब static।
static मतलब — **बिना object बनाए** use कर सकते हो।
Java में आमतौर पर पहले object बनता है, फिर उससे method call होती है।
लेकिन program शुरू होने से पहले... कोई object होता ही नहीं।
इसलिए main static होती है — ताकि JVM बिना object बनाए, **सीधे class के नाम से** उसे call कर सके।
जैसे — Main डॉट main।

**void**
अब void।
void मतलब — **कुछ भी वापस नहीं करना।**
JVM को main से कोई value नहीं चाहिए। बस program चल जाए — इतना काफ़ी है।
इसलिए main का return type void है।
Fun fact — C language में main एक number वापस करता है... पर Java में नहीं।

**main**
अब main।
main एक **नाम** है। Java का rule है — program **यहीं से** शुरू होगा।
JVM सिर्फ़ main नाम की method ढूंढती है। नाम बदला — तो program शुरू ही नहीं होगा।
और ध्यान रखना — Java **capital और small** का फ़र्क मानती है। Main या MAIN लिखा, तो भी नहीं चलेगा।
इसलिए main को Java का **entry point** कहते हैं — यानी program का पक्का दरवाज़ा।

**String[] args**
अब आख़िरी हिस्सा — String args।
String[] मतलब — String का array, यानी **text की एक list।**
और args मतलब — arguments।
Program चलाते वक़्त तुम बाहर से कुछ values भेज सकते हो — वो सब args में आती हैं।
और args सिर्फ़ एक नाम है — इसकी जगह कोई और नाम भी लिख सकते हो।

**Example**
अब example देखो।
java Main Hello 10 लिखा — तो Hello जाएगा args[0] में, और 10 जाएगा args[1] में।
क्योंकि गिनती **0 से** शुरू होती है।
और ध्यान दो — ये 10 number नहीं, **text** है। इसमें 5 जोड़ोगे, तो 15 नहीं... **105** आएगा!

**सार**
तो public static void main —
ये line Java का **entry point** है, जहाँ से हर program शुरू होता है।

**नई बात**
और एक नई बात — Java 25 से छोटा सा `void main()` भी चल जाता है।
पर college, interview और पुराने projects में — ज़्यादातर यही पूरी line दिखती है।

**सीटीए**
Concept clear हुआ हो, तो **follow** कर लेना — और save कर लो, exam से पहले काम आएगा।

---

## स्क्रीन (reference reel स्टाइल)

> ऊपर पूरी line `public static void main(String[] args)`। जिस word की बात हो रही है, वो **gold + underline** में, बाकी dim। बीच में वही word बड़ा, नीचे तीर, फिर 1–2 लाइन का छोटा हिंदी मतलब (ज़रूरी शब्द नारंगी)। Transitions crossfade। हर cue VO के असली शब्द पर लॉक होगा।

| हिस्सा | बीच में | मतलब वाला कार्ड | एक्स्ट्रा बात वाला कार्ड |
|---|---|---|---|
| शुरुआत | पूरी line, धीरे-धीरे उभरती है | "इसके बिना program start नहीं" | — |
| public | `public` | "सबके लिए **खुला** · JVM बाहर से आती है" | `private static void main` → "compile ✓ · run ✗" |
| static | `static` | "**बिना object** के call" | `Main.main()` (class नाम + डॉट + method) |
| void | `void` | "**कुछ वापस नहीं**" | छोटा कार्ड: "C: `int main()` · Java: `void main`" |
| main | `main` | "program **यहीं से** शुरू" | `Main` / `MAIN` पर लाल ✗ → "**entry point**" |
| String[] args | `String[] args` | "**text की list** · बाहर से input" | `String[] args` → `String[] a` ✓ |
| Example | VS Code जैसा dark editor: code **type** होता है | टर्मिनल: `java Main Hello 10` → `Hello` / `10`; `args[0]`, `args[1]` के डिब्बे | `args[1] + 5` → `105` (लाल घेरा), नीचे छोटा: `Integer.parseInt` → `15` |
| सार | पूरी line → तीर → gold "**Entry point**" | — | — |
| नई बात | `void main()` + टैग "Java 25+" | "college / interview → पूरी line" | — |
| सीटीए | "FOLLOW करो" + handle | — | — |

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
- **टाइटल (कोई एक):** (1) `public static void main` — हर word आसान भाषा में (2) Java की सबसे फ़ेमस line का मतलब, 90 सेकंड में (3) `"10" + 5` = 105? Java main line समझो
- **कवर:** काले बैकग्राउंड पर `public static void main(String[] args)`, नीचे gold में "इसका मतलब?"

## कैप्शन
> `public static void main(String[] args)` — हर word का मतलब आसान भाषा में ✍️
> और `"10" + 5` = 105 क्यों? 😮 Java 25 से `void main()` भी चलता है!
> सेव कर लो, exam से पहले काम आएगा 🔖
> #Java #JavaInHindi #CodingHindi #Programming #JavaBasics #LearnJava

## ध्यान रखो
- "main **हमेशा** public होती है" मत बोलो — Java 25 से ज़रूरी नहीं रहा। इसलिए "public रखते हैं"।
- `private` वाला: "compile हो जाएगा, पर चलेगा नहीं"। "compile error" मत बोलो।
- "Java 25 में पुरानी line बंद हो गई" मत बोलो — पूरी line आज भी पूरी तरह चलती है।
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
