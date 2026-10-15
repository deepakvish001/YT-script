# Code / Tech reels — visual style guide

> **Update (15 Oct 2026):** user ko reference reel jaisa **simple word-by-word** format pasand hai. Visual = reference style (black + gold keyword + teer + chhota Hindi matlab, "Hum kya better karenge" wale sudhaar ke saath). VO = neeche "बोलने का स्टाइल"। "प्रोफ़ेसर बोर्ड" sirf ek option hai, default nahi.

## प्रोफ़ेसर बोर्ड — hamara style
**Soch:** professor board par concept *banata* hai. Har shabd/step ka "kyun" pehle aata hai, shabd baad mein. Viewer ko beech mein sochne ka mauka milta hai ("(रुको)").
- **Background:** gehra slate `#14181D`, bahut halki graph-paper grid (4–6% opacity), halka vignette.
- **Code:** beech mein JetBrains Mono, safed `#F2F2F2`. Naya shabd apni jagah par *khisak kar* aata hai, aur baaki shabd jagah dete hain (line "banti" hai).
- **Professor ke nishaan:** haath se kheenche chalk-jaise stroke. Teer, ghera, underline aur tick SVG path-draw se banenge, halki ragged edge ke saath. Rang: chalk peela `#F2D16B`, naarangi `#FF8A3D`, galat ke liye laal `#FF5A52`.
- **Likhavat:** Hindi notes **Kalam** font (Devanagari handwriting) mein, code JetBrains Mono mein, headings Mukta ExtraBold mein.
- **Laser pointer:** chhota glow-dot, jo VO ke saath us cheez par jaata hai jiski baat ho rahi hai.
- **Checklist rail:** baayin taraf ek list jo har step ke saath badhti hai, aur aakhir mein saare tick ek saath chamakte hain.
- **Mini-diagrams:** simple line drawings (building = class, darwaza = method, JVM = chhota kirdar badge ke saath). Koi clipart ya stock nahi.
- **Transitions:** duster-swipe (board saaf), "rewind" (pichhla frame wapas lana, pay-off ke liye), card slide. Hard cuts kam.
- **Timing:** sabhi beats VO ke word-timestamps par lock. "(रुको)" par screen par halka "?" ya 3-2-1 ring.
- **Sound:** sirf voiceover + bahut halka lo-fi bed. Chalk/marker ki halki aawaz sirf jab nishaan bane (−30 dB ke aaspaas).

---

## बोलने का स्टाइल (VO) — thriller-narrator deep-dive (user ki pasand, 15 Oct 2026)
Reels aur long videos dono ke VO is tone mein likho. Ye ek dusre creator ke bolne ke *andaaz* se prerna hai. Unki lines, channel intro ya sign-off copy nahi karni.
- **"आप" register.** Bolchaal ki Hinglish: common English shabd Devanagari mein (एक्चुअली, इंटरेस्टिंग, ऑलमोस्ट), code/tech terms Latin mein (public, JVM, object).
- **Cold open:** ek present-tense scene (date/jagah, ya relatable pal jaise "कॉलेज का पहला Java lab")। Phir "सुनने में ये नॉर्मल लगता है। लेकिन यहाँ एक चीज़ ऐसी है जो नोटिस करने जैसी है —"।
- **Sawaal + promise:** "तो सवाल ये है — …?" → "आज हम इसे डिकोड करेंगे… एंड तक ज़रूर देखना।"
- **Reveal phrases:** "सच बताऊँ तो…", "अब इसको समझिए", "एक सेकंड सोचिए", "ध्यान से सोचिए", "फ़न फ़ैक्ट —"।
- **Reframe:** "लेकिन आप शायद सोचेंगे कि … एक्चुअली ये X नहीं, Y है।"
- **Beech mein comment hook:** "अगर आपको भी … तो कमेंट में लिख दीजिए '…'।"
- **Ending:** "मार्क माय वर्ड्स — …" → "व्हाट डू यू थिंक — …? बताइए कमेंट्स में।" → follow/subscribe.
- **Content:** user ki script ka kram aur seedhi samjhaane wali baatein jaisi hain waisi rakho. Style sirf upar se lagta hai, structure nahi badalta.
- **Shabd:** kitaabi/shuddh Hindi mat likho (रटना, खुला, नींव, वापसी, चिपकना)। User ke apne bolchaal wale shabd rakho: open, start, call, return, "याद कर लो", "बिना समझे"। English shabd Latin mein (line, program, object) — jaise user ki apni script mein.
- **Connected feel:** har section ka aakhri sawaal hi agla section laaye ("JVM अंदर आ गई — पर अब नई problem…")। End mein ek line ka recap jo poora chain jode.

---

## Reference reel (inspiration) — analysis

Reference: user ki bheji reel (`public static void main` explainer, 78 sec, 9:16, @code.it2 style).
**Goal:** human-made motion design lage. AI-generated jaisa koi footage, stock look ya generic effect nahi.

- **Background:** pure black, bina kisi texture ke.
- **Code line:** upar ~12% height par, safed bold sans (Canva-type font), centered. Active shabd **gold (#D4B35A-ish) + underline**.
- **Center block:**
  1. active shabd bada gold
  2. ek patla safed teer neeche draw hota hai
  3. 1–3 lines ki chhoti English explanation, safed bold, zaroori shabd **orange (#E8732C)** ya **gold**
- **Motion:**
  - text fade/blur-in
  - gold shabd ki opacity halki "saans" leti hai (dim ↔ bright)
  - har naya shabd aane par purana fade-out
  - transitions cut nahi, crossfade hote hain
- **Demo:** VS Code dark theme ka code screenshot slide-in hota hai. Uske neeche teer, phir PowerShell terminal output (`java demo hello 10`).
- **End:**
  1. poori line → teer → gold "Entry point"
  2. "FOLLOW FOR MORE" (gold, dim)
  3. Instagram logo gradient se safed hota hai, saath mein handle
- **Watermark:** chhota Instagram icon + handle, jo beech-beech mein jagah badalta hai (crop/repost rokne ke liye).
- **Audio:** sirf voiceover + halka music bed. Koi flashy SFX nahi.

## Hum kya better karenge
| Cheez | Reference | Hamara version |
|---|---|---|
| Resolution | 576×1024, thoda soft | **1080×1920**, crisp vector text |
| Bhasha | English labels | Chhote **Hindi (Devanagari) + code words English** labels: "बिना **object** बनाए call" |
| Animation | Basic fade | Ease-in-out timing; teer "draw" hota hai; underline left→right slide; text 6–8px rise ke saath fade |
| Code demo | Screenshot | Asli code **type** hota hai (syntax colours ke saath); terminal output line-by-line aata hai |
| Sync | Approx | Voiceover ke har shabd par cue (word timestamps se) |
| Accuracy | Kuch purana | Har reel par "sahi/galat" check; zarurat ho to twist (jaise Java 25 `void main()`) |

## Design tokens
- **Background** `#000000`. Optional: bahut halka vignette (≤6%), dikhna nahi chahiye.
- **Text** `#F5F5F5`. **Gold** `#D9B45B`. **Orange** `#E8732C`. **Error red** `#E5484D`. **Dim** 45% opacity.
- **Fonts:**
  - Latin/code line: **Poppins SemiBold/Bold** (ya Inter Bold)
  - Code editor: **JetBrains Mono**
  - Hindi: **Mukta Bold/ExtraBold**
- **Size (1080×1920):**
  - code line 44–52px
  - center keyword 72–84px
  - explanation 40–44px, max 3 lines, max ~24 characters per line
  - handle 24px
- **Layout:**
  - code line y≈230
  - center keyword y≈820
  - teer 110px lamba
  - explanation y≈1000
  - safe zone: neeche 300px khali (Reels UI ke liye), upar 160px
- **Timing:**
  - keyword in 0.35s
  - teer draw 0.3s
  - explanation 0.4s
  - har beat ke beech crossfade 0.25s
  - gold "breathing" period 2.4s (opacity 0.7↔1)

## "AI-made" na lage, iske rules
1. Koi AI-generated video ya image nahi. Sirf typography, code, terminal aur simple vector icons.
2. Asli, chalne wala code. Har demo ko pehle sach mein run karke output wahi dikhao jo aata hai.
3. Timing voiceover ke saans ke saath ho, mechanical uniform timing nahi. Beats ko VO ke word timestamps par lock karo.
4. Ek hi font family aur ek hi palette, poori series mein. Har reel mein naya effect mat daalo.
5. Halki imperfections theek hain: typing mein chhota pause, kabhi-kabhi cursor blink. Robotic perfection nahi.
6. Apni awaaz, natural pace. AI voice nahi.

## Watermark / handle
Channel ka handle chahiye (Instagram/YouTube). Tab tak placeholder `@handle`.
