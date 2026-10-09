# YT-script — Hindi long-form documentary scripts

Ye repo ek Hindi YouTube channel ke long-form (15–25 min) scripts ke liye hai.
Niche: **Science + History + Geopolitics**, "what if / disaster" angle, har topic ka **India hook**.
Goal: zyada views, zyada watch time, aur YPP earning.

Style ka master reference: `reference/nuclear-winter-reference.md` (pura script + beat-by-beat breakdown).
Naya script likhne se pehle wo file aur `templates/script-template.md` padho. Topic list: `TOPICS.md`.
Video production pipeline: `PRODUCTION.md`. Free 3D globe/map scenes (three.js → ffmpeg): `animation/README.md`.

## Style DNA (har script mein ye hona chahiye)

**Bhasha**
- Script Devanagari mein, bolchaal wali Hinglish. Technical words English mein hi rakho
  (shock wave, stratosphere, photosynthesis), turant Hindi mein samjhao: "...यानी ..."
- Viewer ko **"तुम"** bolo. Chhote vaakya. Ek line = ek saans.
- Emphasis ke liye repetition: "सिर्फ 1 डिग्री। सिर्फ 1 डिग्री।"
- Creator ki awaaz wale phrases: "याद रखना", "ध्यान से सुनो", "अब एक सेकंड के लिए रुको",
  "अब सुनो इस कहानी की सबसे इंटरेस्टिंग बात", "लेकिन हर बार की तरह शुरू से शुरू करते हैं"।

**Structure (order mat todo)**
1. **Cold open (0–5 sec):** scene ki asli awaaz / radio chatter / ek line jo beech kahani se uthi ho.
2. **Shock hook (5–30 sec):** ek bada number + India connection + twist
   ("सबसे डरावनी बात — मरने वाले ज्यादातर वो होंगे जिन्होंने वॉर देखी भी नहीं")।
3. **Reframe:** "लोगों को लगता है X असली क्लाइमेक्स है, जबकि X तो सिर्फ ट्रेलर है।"
4. **Open loop:** ek famous quote / rahasya jo end mein pay-off hoga (Khrushchev quote jaisa).
5. **"शुरू से शुरू करते हैं" →** ek asli historical din ka **present-tense scene**:
   date, time, mausam, aam log kya kar rahe the — phir second-by-second countdown.
6. **Villain framing:** abstract cheez ko character bana do ("इस वीडियो का असली विलन यही धुआं है")।
7. **Scale escalation:** chhota example → aaj ka bada version → poori duniya ke numbers.
8. **Viewer ko kahani mein daalo:** "मान लो तुम बच जाते हो... तो क्या तुम सच में बच गए? नहीं।"
9. **Doubt-handling:** "अब तुम्हारे मन में सवाल आना चाहिए कि..." — viewer ka objection khud uthao aur jawab do.
10. **Chain of consequences:** step-by-step domino (sunlight → thand → fasal → monsoon → machhli → godaam → famine)।
    Har step ko roz ki cheez se jodo ("जो रोटी तुम खाओगे वो असल में स्टोर की हुई सनलाइट है")।
11. **Hard proof:** naam + saal + journal (e.g. Rutgers 2022, *Nature Food*) — opening number ka pay-off.
12. **"Ye toh sirf model hai" ka jawab:** 2 asli natural/historical proofs.
13. **Origin story:** ye science / ye cheez duniya ke saamne kaise aayi — log, saal, drama.
14. **Open loop pay-off:** shuru wala quote / sawal ab close karo.
15. **False relief → present danger:** "चलो ये तो पुरानी बात है... काश ऐसा होता।" → 2025–26 ki taaza khabar.
16. **Core message:** ek seedhi baat jo viewer share karna chahe.
17. **Final montage + poetic closing line** ("सबसे तेज लाइट से शुरू... सबसे लंबे अंधेरे पर खत्म")।
18. **CTA:** message se juda share-CTA + next video ka teaser (end screen).

**Desi comparisons zaroor** — Delhi ka smog, Delhi se Kanyakumari tak awaaz, Diwali ka dhuaan, roti/chawal, monsoon.
Har bade number ko kisi jaani-pehchaani cheez se compare karo.

## Accuracy rules (trust = repeat viewers)
- Har number ka source likho (script ke neeche `## Sources` section). Approx ho toh "करीब" bolo.
- Breaking/2026 facts web search se verify karo — memory se mat likho.
- Reference script ki chhoti galtiyan dobara mat karna: shock wave "हवा से तेज" nahi, **"आवाज़ से तेज"** hoti hai.

## Monetization safety
- Gore ka verbal description chalega, **visual gore / laashein thumbnail ya pehle 30 sec mein nahi** — warna limited ads (yellow icon).
- Apni awaaz + original visuals/animation use karo. Kisi aur channel ka script/footage copy mat karo —
  YouTube ki "inauthentic / reused content" policy se monetization jaa sakta hai.
- Video 15+ min rakho taaki mid-roll ads lag sakein; mid-rolls cliffhanger lines ke turant baad lagao.

## AI / Tech reels (Oct 2026 se channel ki main disha)
- Topic: AI aur technology — tools, models kaise bante hain, AI ka itihaas, GenAI terms (LLM, token...), future, India ka role.
- Har baat **simple Hindi** mein, ek reel = ek seekh. Technical shabd English mein, turant "यानी ..." se samjhao, desi analogy ke saath.
- **Sahi / galat / normal:** myth reels mein sach saaf-saaf bolo; hype aur doom dono se bacho.
- **India ko honestly promote karo:** asli kamyabi + kya abhi baaki hai. "Duniya mein pehla / sabse bada" tabhi bolo jab source pakka ho.
- Fast-moving facts par date lagao ("Oct 2026 tak"). Latest model/tool ke naam har baar web se verify karo.
- Format: 9:16, 30–60 sec. Visual mix: 2D line-art (`animation/scenes/explainer-khaad.html` style) + 3D data/globe + 0–2 AI clips per reel (Higgsfield ~7.5 credits/clip). Asli logon ke realistic chehre / deepfake kabhi nahi.
- Reel ideas aur series plan: `ai-channel/REEL-IDEAS.md`.

## Workflow
- Naye scripts `scripts/NN-topic-slug.md` mein. Har script ke saath: 3 title options, thumbnail idea,
  chapter timestamps ka draft, aur `## Sources`.
- Commit messages Hinglish/English dono chalenge; branch par push karke PR banao.
