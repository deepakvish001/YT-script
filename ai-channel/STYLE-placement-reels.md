# Placement / DSA reels — script style guide

**Series ka naam (placeholder):** प्लेसमेंट का सच
**Kis ke liye:** college students (1st–4th year), DSA, placement, interviews, resume, coding practice.
**Aadhaar:** user ne doosre creator ki ~29 reels bheji thi. Unke **topics/ideas** lete hain, **shabd, hook aur framework ke naam apne** likhte hain. Copy kabhi nahi. YouTube/Instagram ki "reused / unoriginal content" policy se bachne ke liye har script nayi honi chahiye.

## Bhasha
- **Poori Hinglish:** Hindi shabd Devanagari mein, English/tech shabd Latin mein (DSA, LeetCode, TLE, hash map, O(n log n), resume, interview).
- Viewer ko **"तुम"**. Bade bhai/senior jaisa tone, lecture jaisa nahi.
- Kitaabi Hindi nahi (रटना→"याद करना" theek, पर "आरंभ, समापन, खुला, नींव" jaise shabd nahi). Wahi shabd jo college canteen mein bole jaate hain.
- VO mein **"—" (lamba dash) aur "..." nahi.** Comma aur full stop. Har vaakya poora ho aur agle vaakye se jude.

## Structure (har reel, 50–75 sec, VO ~140–210 shabd)
1. **Hook (0–3 sec):** do logon/do haalaton ka contrast ya ek chubhti hui baat. ("तुम्हारा दोस्त 20 मिनट में submit करके चला गया, और तुम अभी भी पहले test case पर अटके हो।")
2. **Humor beat:** ek desi relatable/meme line (Sharma ji ka beta, 2 बजे रात वाला तुम, expectation vs reality, "मम्मी को लगता है पढ़ रहा है")। Halka, kisi ko neecha dikhaye bina.
3. **Save line (optional, ek baar):** "ये reel save कर लो, exam से पहले काम आएगी।"
4. **Asli wajah (psychology/logic):** sirf **asli** concepts ka naam lo (Einstellung effect, testing effect, forgetting curve, interleaving, dilution effect, choking under pressure, cognitive load, planning fallacy...)। Naam lo to ek line mein simple matlab bhi do.
5. **Depth:** ek concrete example (chhota code idea, number, table): jaise Two Sum nested loop → hash map, n = 10^5 → O(n²) = 10^10.
6. **Steps/framework:** apne naam se, 2–4 steps, har step ek line.
7. **CTA (end):** `Comment में KEYWORD लिखो, मैं तुम्हें <cheat sheet> DM कर दूँगा।` + follow. Ek hi comment-ask. Optional share line humor ke saath ("उस दोस्त को भेजो जो...")।

## Sach / galat (trust = repeat viewers)
- **Nakli stats nahi:** "90% students", "industry data बताता है", "research prove करती है" tabhi jab asli source ho, aur source script ke neeche likho. Warna "अक्सर", "ज़्यादातर", "एक rule of thumb" bolo.
- Company/college ki cutoffs har jagah alag hoti hain. "हमेशा", "सीधा reject", "dustbin में" jaise absolute dawe nahi.
- Kisi company, college, teacher ya creator ka mazaak nahi. "TCS वाला तरीका" jaisi line nahi.
- Code facts sahi hon (language ke hisaab se: C++ mein vector by value copy hota hai, Java mein object reference jaata hai).
- AI (ChatGPT) wale tips mein ek line: "AI भी गलत हो सकता है, code चला के check करो।"

## Screen + meme
- Visual: hamara code-reel look (black bg, gold keyword, teer, chhota Hindi matlab) + **original** meme-style cards: stick figures, emoji reactions, "Expectation vs Reality" split, chat bubbles.
- **Movie clips, asli logon ke chehre, dusre creators ke meme templates nahi** (copyright + reused content). Meme ka *andaaz* apna banao.
- Har reel ke liye 4–6 screen cues.

## Cheat sheet (comment → DM)
- Har reel ka ek unique **KEYWORD** (ek English shabd, capital) aur ek PDF cheat sheet.
- Cheat sheet ka asli, kaam ka content script file mein likho (6–10 points), taaki baad mein PDF ban sake.
- DM bhejne ke liye Instagram automation chahiye (jaise ManyChat ka comment-keyword trigger). Jab tak automation set na ho, "DM कर दूँगा" ka wada mat karo, ya manually bhejo.

## File format
`scripts/placement-reels/PNN-slug.md`:
title → meta line (series, lambai, keyword, ek seekh) → 🎙️ वॉइसओवर (ek juda paragraph) → 🎬 स्क्रीन + मीम → 📄 Cheat sheet → ✅ ध्यान रखो / सोर्स.
