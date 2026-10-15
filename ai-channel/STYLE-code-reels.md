# Code / Tech reels — visual style guide

Reference: user ki bheji reel (`public static void main` explainer, 78 sec, 9:16, @code.it2 style).
Hamari saari "कोड की एक लाइन" reels isi look mein banengi, lekin thodi zyada saaf aur smooth.
**Goal:** human-made motion design lage. AI-generated jaisa koi footage, stock look ya generic effect nahi.

## Reference mein kya hai (analysis)
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
