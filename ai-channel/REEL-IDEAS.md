# AI Reels Channel: Final Reel-Ideas Plan (Oct 2026) — Revision 2

> **Data note:** Is plan mein sirf woh facts hain jo fact-check mein *confirmed/corrected* aaye (verdict keep/fixed). Har fact ke saath source link hai. Fact-check 9–10 Oct 2026 tak ka hai: editor ke spot-checks + is revision ke apne WebSearch checks (10 Oct 2026). Tez badalne wale facts (users, GPU count, prices, free offers, policies, leaderboards, helplines) publish wale din dobara check karna.

### Is revision mein kya badla (short)

- **Blocker, map:** Repo ke 3D pipeline (`world-atlas` / Natural Earth default) mein India ka shape galat hai. Humne repo mein khud test kiya: `countries-50m.json`, `-110m` aur `-10m` teeno mein Gilgit aur Muzaffarabad Pakistan ke polygon mein, aur Aksai Chin China ke polygon mein aata hai. `hormuz.html` isi polygon se India ko highlight karta hai aur border lines bhi isi data se draw karta hai, aur rendered `animation/out/hormuz.mp4` / `contact.jpg` mein India ka north saaf dikhta hai. Ab niyam: India ka koi bhi outline sirf official (Survey of India) boundary ke saath. Warna map nahi, plain grid/tiles. (Sec 1, Sec 2, Sec 7 rule 6, #3, #10)
- **Top #3, #5, #7, #8, #10** ke title, hook aur beats editor ke hisaab se sudhare: purana tokenizer vs naya gap, chhote groups wali chetavani, Sarvam par "आधा सच", jobs reel mein young-hiring wala signal, aur IMD ka 2026 wala apna AI model.
- **Source mix:** Kisi ek company ka apna data ~5 mein se 1 reel se zyada nahi. #8 ka main number ab ILO (UN agency) se hai. Baaki ideas mein 6 Anthropic-sourced links neutral/primary sources se badle.
- **Posting:** Launch ke pehle 2 hafte sirf 3 reels/hafta (Mon/Wed/Fri). Pehle 5 reusable templates. Diwali hafte (Thu 5 Nov) ke liye ek special scam reel.
- **Credits:** Kling settings lock (mode=pro, sound=off). Har clip text-free, saara text 2D overlay mein. Reserve list 7 named clips tak.
- **6 naye verified ideas** (Sec 4.1): Free AI ka asli daam, Diwali ka "sarkari gift", Digital arrest, Open-weights vs Open-source, ANI vs OpenAI, DPDP Rules.

---

## 1. Channel ka positioning

- **Kiske liye:** Hindi bolne wale Indian students, young professionals aur aam log, jo phone par reels dekhte hain aur AI ke baare mein seedhi aur sachchi baat jaanna chahte hain.
- **Promise:** "AI simple Hindi mein, sach aur jhooth ka fark, aur India ki asli kahani." Har reel mein ek seekh hogi, aur har bade number ka source screen par dikhega.
- **Tone rules:** Viewer ko "तुम" bolo. Technical shabd English mein rakho aur turant "यानी ..." se samjhao, ek desi analogy ke saath (tiffin, thali, kunji, OMR sheet, chai ki tapri). Na hype ("AI sab kha jayega", "India ne ChatGPT ko hara diya"), na doom. India ki kamyabi par garv karo, par saath mein "abhi kya baaki hai" bhi bolo.
- **Visual identity:** Cream background, orange accent, line-art. AI clips kam rakho, hamesha labelled. Asli logon ke chehre, aawaaz ya logo kabhi nahi. **India ka koi bhi outline, silhouette ya dot-cloud sirf official (Survey of India) boundary ke saath.** Default Natural Earth / `world-atlas` data India ko de facto shape mein dikhata hai (PoK, Gilgit-Baltistan aur Aksai Chin bahar), isliye wo kabhi use nahi hoga. Shak ho to map hi mat dikhao: bhashaon, rajyon ya data ko plain grid ya naam wale tiles par rakho.
- **Neutrality:** Channel description mein likho: "कोई sponsorship नहीं। कुछ visuals AI से बने हैं।" Kisi ek company ka data har doosri reel mein na aaye (Sec 7, rule 9).

---

## 2. Recurring series

| # | Series | Format | Fixed opening / sting | Length | Visual recipe (template) | Slot |
|---|---|---|---|---|---|---|
| 1 | **AI का ABC** | Ek reel mein ek GenAI shabd (token, LLM, parameter, context window, RAG, diffusion, open-weights…), ek desi analogy aur ek bada sourced number | "AI का ABC — आज का शब्द: ___।" + tiffin-dabbe ki "ting" | 45–60s | ~80% 2D line-art (`tiffin` template, pop-in cards, connector lines, checkboxes). 3D sirf numbers ke liye (`bars3d`). AI clip 0 | Somvaar (launch ke 2 hafte sirf ABC; Hafte 3–4 फैक्ट्री ka catch-up; Hafte 5 se baari-baari) |
| 2 | **AI की फैक्ट्री** | Model banne ki factory ka ek station per reel: data (aur kiska data), tokens, pre-training, tuning (RLHF), test (benchmarks/red-team), inference ka bill. Isi mein "feature ke andar" aur "Prompt Lab" episodes bhi | "AI की फैक्ट्री — आज का स्टेशन: ___।" + conveyor ki "khat" | 50–60s | 2D conveyor/pipeline + 3D GPU grid ya particles. 0–1 AI clip (data-center wala clip library se reuse karo) | Somvaar (Hafte 3 aur 4 dono, phir kam se kam har 2 hafte mein 1) |
| 3 | **सही / गलत / नॉर्मल** | Ek asli, sourced daava (headline, ad, ya aam kahi jaane wali line) aur thappe: hara SAHI, laal GALAT, grey NORMAL (aam hype), aur zarurat ho to aadha-hara-aadha-laal "आधा सच". Sach ek line mein, phir "tum kya karo" | "आज का दावा: '___'। ठप्पे तैयार हैं — सही, गलत, नॉर्मल।" + thappe ki "dhap" | 40–60s | `stamp` template + claim cards + main number ke liye `bars3d`. 0–1 AI clip | Mangalvaar (launch ke 2 hafte Budhvaar) |
| 4 | **Made in India AI — रिपोर्ट कार्ड** | India ki ek asli uplabdhi (हरा ✓) aur ek kaam jo abhi baaki hai (लाल ✗), sarkari ya primary source ke saath | "Made in India AI — रिपोर्ट कार्ड। हरा भी दिखेगा, लाल भी।" | 45–60s | `report-card` template + 3D data towers **plain grid ya naam wale tiles par**. India outline sirf Survey of India boundary ke saath, warna nahi. 0–1 AI clip, bina chehre | Budhvaar |
| 5 | **AI का इतिहास — वो एक दिन** | Asli tareekh ka present-tense scene, us din kya badla, aaj se kya connection. India link sirf tab jab source ho | "तारीख थी ___। और उस दिन…" + calendar-flip ki aawaaz | 50–60s | `calendar-flip` template, typewriter, name-cards (photo ya AI chehra nahi). 3D globe arcs sirf India-POV / Survey of India-matched data se. 0–1 period-set clip, bina logon ke | Shanivaar (AI का कल ke saath baari-baari) |
| 6 | **AI या असली?** | Ek asli fake ya scam case (PIB, I4C, fact-checker ya research), pehchaan ke 3 sawaal, phir helpline aur kya karein. Scam mein AI ka daava tabhi jab source kahe | "AI या असली? — forward करने से पहले 10 सेकंड रुको।" + laal FAKE stamp | 40–60s | Sirf 2D (`stamp`, silhouette, checklist, helpline card). AI clip 0. Fake ko kabhi replay ya recreate nahi karna | Guruvaar (launch ke 2 hafte Shukravaar) |
| 7 | **AI का कल** | Viewer ka sawaal (naukri, padhai, AGI, robots, agents, data ke adhikaar), ek sourced number, "abhi tak kya pata hai aur kya nahi", phir ek kaam ki salah | "AI का कल — आज का सवाल: '___'" (generic comment-sticker, nakli username nahi) | 45–60s | 2D analogy (`tiffin`/thali, seedhi, report card) + 3D timeline/bars. 0–1 AI clip | Shanivaar (alternate) |

**Common rules for all series**
- Har reel 30–60 sec ki ho, max 90. 60 tak pahunchane ke liye padding mat karo.
- CTA hamesha reel ke message se juda ho: kisko bhejo, kya save karo, comment mein kya likho.
- **Post ka time:** shaam 7–9 baje (IST) se shuru karo aur 4 hafte baad apne analytics dekhkar badlo. *Ye hamara starting guess hai, kisi data par based nahi.*
- **Series 3 ka daava asli hona chahiye.** "Ye forward tumhare paas bhi aaya?" tabhi bolo jab us forward ka source (fact-checker, PIB, ya screenshot) ho. Warna asli headline ya aam bolchaal ki line lo, aur uska source screen par dikhao.

---

## 3. Pehle ye 10 banao

**Ranking ka tareeka:** Hook × Kaam ka × India relevance × Evergreen × Sasta production. Har cheez ko 1–5 nambar diye. Ye scores hamara editorial judgment hain.

| Rank | Reel | Series | Hook | Kaam ka | India | Evergreen | Sasta | Score |
|---|---|---|---|---|---|---|---|---|
| 1 | AI गलत जवाब भी कॉन्फिडेंस से क्यों देता है? | सही/गलत/नॉर्मल | 5 | 5 | 5 | 5 | 5 | 3125 |
| 2 | मंत्री का फेक वीडियो कैसे पकड़ें | AI या असली? | 5 | 5 | 5 | 4 | 5 | 2500 |
| 3 | हिंदी पर AI का टैक्स — कितना था, कितना बचा? | AI का ABC | 4 | 4 | 5 | 5 | 5 | 2000 |
| 4 | 3 सेकंड की आवाज़ से नकली 'मम्मी' का कॉल? | AI या असली? | 5 | 5 | 4 | 5 | 4 | 2000 |
| 5 | AI से सीखो, कुंजी मत बनाओ — एक experiment क्या कहता है | AI का कल | 4 | 5 | 4 | 5 | 4 | 1600 |
| 6 | AI, ML, Deep Learning, GenAI — असली फर्क | AI का ABC | 4 | 5 | 3 | 5 | 5 | 1500 |
| 7 | 'ChatGPT को टक्कर'? Sarvam-105B का पूरा सच | Made in India | 5 | 4 | 5 | 3 | 5 | 1500 |
| 8 | AI पूरी नौकरी नहीं खाता — कटोरियाँ उठाता है | AI का कल | 4 | 4 | 4 | 5 | 4 | 1280 |
| 9 | ChatGPT का 'T': Transformer और भारत कनेक्शन | AI का इतिहास | 4 | 3 | 4 | 5 | 5 | 1200 |
| 10 | AI वाले forecast से 3.9 करोड़ किसानों को SMS: मानसून कब तक? | Made in India | 4 | 3 | 5 | 5 | 4 | 1200 |

Is list mein saaton pillars aur saare main types hain: myth-buster, safety, explainer, India, history aur future.

---

### #1: AI गलत जवाब भी कॉन्फिडेंस से क्यों देता है?
*Series: सही / गलत / नॉर्मल · Base idea: `myths_safety-01` + court wala fact `basics-07` se*

- **Hook (0–3s):** "AI गलत जवाब भी पूरे कॉन्फिडेंस से क्यों देता है? एक बड़ी वजह — उसके ज़्यादातर exams में negative marking ही नहीं है!"
- **Beats:**
  1. **0–3s:** Hook bolo. Screen: chat bubble mein galat jawab par orange stamp "100% SURE", phir laal cross draw hota hai.
  2. **3–14s, asli example:** "Sep 2025 की एक research paper में researchers ने एक बड़े open-source AI से पूछा — इस paper के एक लेखक, Adam Kalai, का birthday बताओ, अगर पता हो तो ही। तीन बार पूछा… तीन अलग-अलग गलत तारीखें मिलीं। ऐसे इक्का-दुक्का facts का data में कोई pattern ही नहीं होता — तो AI तुक्का लगाता है।" Screen: `calendar-flip` ke 3 cards (03-07, 15-06, 01-01), har ek par cross.
  3. **14–26s, wajah + term:** "याद करो वो MCQ test जिसमें negative marking नहीं थी। खाली छोड़ा तो 0, तुक्का लगाया तो शायद 1। AI के ज़्यादातर tests भी ऐसे ही grade होते हैं। इसी को hallucination कहते हैं — यानी ऐसा जवाब जो सुनने में सही लगे पर हो गलत।" Screen: OMR sheet aur table "सही 1 / गलत 0 / पता नहीं 0".
  4. **26–38s, India twist:** "और सुनो सबसे मज़ेदार बात — इस paper ने negative marking वाले exams की मिसाल में India के JEE, NEET और GATE का नाम लिया है। सुझाव: AI के tests में भी गलत जवाब पर नंबर कटें, ताकि 'पता नहीं' बोलना घाटे का सौदा न रहे।" Screen: table palatkar "गलत = −1" ho jaati hai, aur bot "पता नहीं" bubble karne lagta hai. Source card par paper ki asli line ka screenshot.
  5. **38–50s, India mein asli nuksaan:** "और ये सिर्फ theory नहीं। फरवरी 2026 में Supreme Court ने आंध्र प्रदेश के एक trial court order पर खुद संज्ञान लिया, जो चार नकली, AI से बने judgments पर टिका था — और कहा, ये misconduct है।" Screen: gavel line-art aur 4 judgment cards par "NOT FOUND".
  6. **50–60s, rule + CTA:** "Health, पैसा, कानून, exam dates — AI का जवाब draft है, फैसला नहीं। Source माँगो, official site से मिलाओ। ये reel उस दोस्त को भेजो जो AI का हर जवाब सच मानता है।" Screen: checklist tick hoti hai.
- **India angle:** OpenAI aur Georgia Tech ke paper mein khud JEE, NEET aur GATE ka naam hai, isliye analogy zabardasti ki nahi, sachchi hai. Supreme Court wala case dikhata hai ki India mein iska asli nuksaan ho chuka hai.
- **Visuals:** 2D: OMR sheet, scoring table ka flip, calendar cards, gavel aur "NOT FOUND" cards (`stamp` + `calendar-flip` templates). 3D (optional): "training facts" cards ka dher jisme ek akela card glow karta hai. **AI clips: 0, yaani 0 credits.**
- **Length:** ~60 sec
- **Kyun chalega:** Negative marking har Indian student ki apni yaad hai. "OpenAI ke paper mein JEE ka naam" surprising aur share karne layak hai, aur Supreme Court wala case stakes dikhata hai.
- **Dhyan rakho:** Paper do wajah deta hai: (1) hallucination pretraining ke statistics se shuru hota hai (birthday jaise arbitrary facts), (2) aur isliye tikta hai kyunki zyaadatar evaluations 0/1 grade karte hain. Isliye "**एक बड़ी** वजह" bolo, "वजह है" nahi. Hook mein "झूठ" mat bolo, "तुक्का" ya "गलत जवाब" bolo. Model ka naam mat lo. Judge ka naam ya court footage nahi. JEE/NEET/GATE ki exact marking scheme mat batao. "Negative marking se hallucination khatam ho jayega" mat bolo, ye sirf ek proposal hai. **Recording se pehle:** PDF normal browser mein kholo aur Sec 4.2 ki "Indian JEE, NEET, and GATE" wali line ka screenshot source card ke liye lo (hamare fact-check environment mein arxiv.org aur cdn.openai.com khul nahi paaye the, isliye ye line abhi tak sirf HF Papers ke text se confirm hai).
- **Facts + sources:**
  - Models "like students facing hard exam questions" guess karte hain. Hallucination pretraining statistics se aata hai aur isliye tikta hai kyunki zyaadatar popular benchmarks 0-1 grading wale hain: [Why Language Models Hallucinate, OpenAI + Georgia Tech, 4 Sep 2025](https://huggingface.co/papers/2509.04664)
  - Birthday example: teen try mein 03-07, 15-06 aur 01-01. Same paper: [HF Papers 2509.04664](https://huggingface.co/papers/2509.04664)
  - Section 4.2: penalty wale exams ki misaal mein "Indian JEE, NEET, and GATE". Proposal hai explicit confidence targets ka: [HF Papers 2509.04664](https://huggingface.co/papers/2509.04664)
  - SC ne 27 Feb 2026 ko suo motu sangyaan liya (Justices Narasimha aur Aradhe). Aug 2025 ka Vijayawada trial-court order 4 non-existent SC judgments par tika tha, aur court ne ise "misconduct" kaha: [DTNext, Mar 2026](https://www.dtnext.in/news/national/sc-takes-cognisance-of-trial-court-relying-on-ai-generated-fake-verdicts)
  - *Part 2 ke liye:* 2 July 2026 ko SC ne NCLT/NCLAT ke orders radd kiye: [LiveLaw, Jul 2026](https://www.livelaw.in/amp/supreme-court/supreme-court-sets-aside-nclt-judgment-for-using-ai-hallucinated-citations-asks-bci-to-examine-issue-539616). OpenAI ka SimpleQA data (52% abstain/26% galat vs 1%/75%): [OpenAI, Sep 2025](https://openai.com/index/why-language-models-hallucinate/)

---

### #2: AI या असली? — मंत्री का फेक वीडियो कैसे पकड़ें
*Series: AI या असली? · Base idea: `trends_format-01`*

- **Hook (0–3s):** "एक वीडियो में वित्त मंत्री कहती दिख रही हैं — ₹22,000 लगाओ, एक हफ्ते में ₹5.5 लाख पाओ। रुको... PIB के मुताबिक ये वीडियो AI से बना नकली था।"
- **Beats:**
  1. **0–3s:** Hook bolo. Screen: phone mock-up mein sirf dhundhla silhouette (asli chehra kabhi nahi), upar se laal "FAKE" thappa girta hai.
  2. **3–12s, kya hua:** "16 अप्रैल 2026 को PIB Fact Check ने बताया कि ये वीडियो AI से बना है। न वित्त मंत्री, न भारत सरकार ऐसी कोई स्कीम promote कर रही है।" Screen: card "16 Apr 2026 · PIB Fact Check".
  3. **12–21s, pattern:** "और ये एक बार की बात नहीं। यही ₹22,000 वाला टेम्पलेट जुलाई और अगस्त 2026 में फिर लौटा। ठग वही पुराना पैसा-डबल वाला है — बस अब उसके हाथ में AI का मेकअप ब्रश है।" Screen: 3 date cards (Apr/Jul/Aug 2026) aur thug ke haath mein "AI" wala brush.
  4. **21–37s, pehchaan ke 3 sawaal (context pehle):** "पहला — ऑफर इतना बड़ा कि सच न लगे? दूसरा — ये किसी official channel से आया, या किसी paid ad और forward से? तीसरा — link का पता देखो। सरकारी पता आमतौर पर .gov.in या .nic.in पर खत्म होता है — और 'gov' बीच में कहीं हो, तो धोखा हो सकता है। होंठ और आवाज़ का बेमेल कभी-कभी दिखता है — पर सिर्फ उस पर भरोसा मत करो।" Screen: 3 orange checkboxes ek-ek karke tick; teesre par do URL cards: "xyz.gov.in ✓" aur "gov-in.example.com ✗" (generic example, asli domain nahi).
  5. **37–48s, kya karein:** "सरकार से जुड़ा दावा हो तो PIB Fact Check के WhatsApp पर भेजो। पैसा कट गया तो तुरंत 1930 पर कॉल करो या cybercrime.gov.in पर शिकायत करो।" Screen: number cards "+91 8799711259 · 1930 · cybercrime.gov.in".
  6. **48–55s, CTA:** "ये reel उस फैमिली ग्रुप में भेजो जहां सबसे ज़्यादा फॉरवर्ड आते हैं।"
- **India angle:** Indian family groups mein chal rahe asli deepfake investment scams. Reel India ke apne system sikhati hai: PIB Fact Check, 1930, cybercrime.gov.in, aur 20 Feb 2026 se lagu IT Rules ke AI labels.
- **Visuals:** 2D: silhouette, FAKE stamp, Apr/Jul/Aug ke 3 template cards, 3 checkbox, URL compare card, "AI makeup brush" wala thug, helpline card. 3D (optional): aakhri 3 sec mein "1930" wali ghoomti dhaal. **AI clips: 0, yaani 0 credits.** Is series mein AI-realistic footage jaan-boojhkar nahi daalte.
- **Length:** ~55 sec
- **Kyun chalega:** Paisa aur parivaar ki hifazat wala content forward hota hai. Log helpline number save karte hain, aur "ek hi thug, teen baar" yaad reh jaata hai.
- **Dhyan rakho:** Deepfake replay nahi karna, aur mantri ka chehra ya aawaaz nahi dikhana. Tone gair-raajneetik rakho. PIB sirf kendra sarkar se jude daave jaanchta hai. Email address mat bolo, kyunki sources mein alag-alag mile. "Sirf .gov.in asli hai" mat bolo: kai official sites .nic.in par hain (jaise rsdebate.nic.in), aur RBI (rbi.org.in) ya NPCI (npci.org.in) jaisi sansthaon ke pate alag hain. Isliye "आमतौर पर" bolo. Lip-sync ko pakki pehchaan mat batao, deepfakes behtar ho rahe hain. Publish se pehle PIB ki original post dekh lo.
- **Facts + sources:**
  - 16 Apr 2026 ko PIB Fact Check ne video ko AI-generated bataya: [OECD.AI incident](https://oecd.ai/en/incidents/2026-04-16-6971)
  - ₹22,000 lagao, ek hafte mein ₹5.5 lakh wala daava: [IBTimes, 16 Apr 2026](https://www.ibtimes.co.in/pib-fact-check-flags-fake-ai-video-fm-sitharaman-promoting-investment-scheme-901225)
  - Wahi template 30 July 2026 (₹22,000 se ₹70,000 roz) aur 5 August 2026 ko dobara aaya: [Organiser, 31 Jul 2026](https://organiser.org/2026/07/31/372783/bharat/fact-check-pib-debunks-ai-deepfake-falsely-showing-fm-nirmala-sitharaman-endorsing-rs-70000-a-day-investment-scam/)
  - Pehchaan ke nishaan aur official website wali salah: [Angel One, Oct 2025](https://oga-prod.angelone.in/news/personal-finance/fact-check-pib-exposes-fake-video-featuring-fm-nirmala-sitharaman-in-get-rich-quick-investment-endorsement)
  - PIB WhatsApp +91 8799711259 aur factcheck.pib.gov.in: [PIB FAQ](https://pib.gov.in/FAQ_fact.aspx)
  - 1930 helpline aur cybercrime.gov.in: [Rajya Sabha PQ, 12 Mar 2025](https://rsdebate.nic.in/bitstream/123456789/757210/1/PQ_267_12032025_U1505_p268_p273.pdf)
  - IT Rules G.S.R. 120(E), 10 Feb 2026 ko notify, 20 Feb 2026 se lagu, realistic synthetic content par label (secondary sources): [iPleaders](https://blog.ipleaders.in/it-rules-2026/)

---

### #3: AI का ABC — हिंदी पर AI का टैक्स — कितना था, कितना बचा?
*Series: AI का ABC · Base idea: `basics-03`*

- **Hook (0–4s):** "2023 के GPT-4 tokenizer पर हिंदी में करीब 5 गुना tokens लगते थे। अब कितना बचा?"
- **Beats:**
  1. **0–4s:** Hook bolo. Screen: split-screen, English sentence 8 orange Lego blocks mein toot-ta hai aur Hindi sentence lagbhag 38 mein (tag "illustrative").
  2. **4–14s, Token:** "Token यानी AI का निवाला। AI पूरे शब्द नहीं, टुकड़े पढ़ता है। और developers का API बिल इन्हीं tokens से बनता है।" Screen: roti ke niwale token chips ban jaate hain, saath mein ₹ meter.
  3. **14–28s, proof:** "Oxford के researchers ने करीब 2000 वाक्य 200 से ज़्यादा भाषाओं में डालकर देखे। ChatGPT-GPT-4 वाले, 2023 के tokenizer पर English के मुकाबले: हिंदी करीब 4.8 गुना, मराठी करीब 5, बांग्ला करीब 5.8, गुजराती करीब 7.7, मलयालम 9, और ओड़िया करीब साढ़े 12 गुना।" Screen: `bars3d` (JSON se), bhasha-naam wale tiles ek plain grid par, Odia wala bar sabse uncha. Tag "cl100k_base, 2023".
  4. **28–38s, kyun:** "वजह: ऐसे tokenizers ज़्यादातर English-भारी text पर बने। हमारे अक्षर और मात्राएं अक्सर छोटे-छोटे byte वाले टुकड़ों में टूट जाते हैं।" Screen: "कि" toot-kar "क" + "ि" banta hai, phir byte chips.
  5. **38–52s, kitna bacha:** "2024 में GPT-4o के नए tokenizer पर OpenAI के अपने sample में हिंदी वाक्य के tokens 90 से घटकर 31 रह गए। उसी वाक्य को English में 24 tokens — यानी इस एक वाक्य पर gap अब करीब 1.3 गुना। और भारत की Sarvam ने 2024 में अपने Sarvam-1 के लिए दावा किया कि उसका tokenizer भारतीय भाषाओं के एक शब्द को करीब 1.4 से 2.1 tokens में पढ़ता है।" Screen: do counter: Hindi 90→31, English 27→24; phir ratio card "3.3x → 1.3x (एक वाक्य)"; checkbox "Sarvam-1 (2024), company का दावा".
  6. **52–62s, payoff + CTA:** "याद रखना, ये भाषा का tax सिर्फ पैसा नहीं — AI की memory, यानी context, भी हिंदी में जल्दी भरती थी। Tax घटा है, पूरा खत्म नहीं हुआ — और हर model का tokenizer अलग है। खुद किसी tokenizer tool पर try करो और comment में अपना count लिखो।"
- **India angle:** Poora mudda hi Indian bhashaon ka hai. Odia aur Malayalam wale viewers apni bhasha dekhkar share karte hain. Sarvam jaisi Indian teams Indic tokenizer bana rahi hain, aur bade companies ke naye tokenizers mein bhi gap kam hua hai. Ye "kitna tha, kitna bacha" wali imaandar kahani hai.
- **Visuals:** 2D: Lego tiles, ₹ meter, matra ke tootne wala animation, do counters aur ratio card. 3D: `bars3d` template mein bhashaon ke bars, **plain grid par, India ka koi outline ya silhouette nahi**, camera halka orbit karta hai. **AI clips: 0, yaani 0 credits.**
- **Length:** ~60 sec
- **Kyun chalega:** "Hindi par tax?" se curiosity aur bhasha ka garv dono jaagte hain, aur "kitna bacha" wala twist reel ko purani khabar se aaj ki khabar banata hai. "Khud try karo" wale CTA se comments aate hain.
- **Dhyan rakho:** 4.8x purane cl100k_base tokenizer ka corpus average hai, isliye hamesha "2023 के tokenizer पर" bolo. 90→31 aur 27→24 sirf ek sample sentence hai, "इस एक वाक्य पर" bolo, poori bhasha ka average nahi. ChatGPT app ke users per token paise nahi dete, ye API billing ki baat hai. Ise jaan-boojhkar kiya gaya bhedbhav mat batao. Sarvam ka 1.4–2.1 Sarvam-1 (Oct 2024) ka company-reported number hai, Sarvam-105B ka nahi. **Recording wale din:** ek hi Hindi vaakya 2–3 current tokenizers par live count karo (jinke public tool hon), aur screen par "illustrative, [तारीख]" tag ke saath dikhao.
- **Part 2 options:** `tools_models-03` (matra twist), `india-03` (Llama-3.1 par Malayalam = 16 tokens).
- **Facts + sources:**
  - cl100k_base par English ke mukable: Hindi 4.79x, Marathi 5.07x, Bengali 5.84x, Gujarati 7.69x, Malayalam 9.00x, Odia 12.48x (editor ne repo ki `tokenization_lengths.csv` se dobara calculate karke match kiya): [tokenization-fairness repo, NeurIPS 2023](https://github.com/AleksandarPetrov/tokenization-fairness)
  - FLORES-200, ~2000 vaakya, 200+ bhashayein. Token gap ka asar cost, latency aur context par: [NeurIPS 2023 abstract](https://proceedings.neurips.cc/paper_files/paper/2023/hash/74bb24dca8334adce292883b4b651eda-Abstract.html)
  - GPT-4o tokenizer: Hindi sample 90 se 31, English sample 27 se 24: [OpenAI, 13 May 2024](https://openai.com/index/hello-gpt-4o/)
  - Sarvam-1 tokenizer fertility 1.4–2.1 (company ka daava, Oct 2024): [Sarvam blog, Oct 2024](https://sarvam.ai/blogs/sarvam-1)

---

### #4: AI या असली? — 3 सेकंड की आवाज़ से नकली 'मम्मी' का कॉल?
*Series: AI या असली? · Base idea: `myths_safety-08` (helpline ka source `trends_format-01` se)*

- **Hook (0–5s):** "Research में सिर्फ 3 सेकंड की रिकॉर्डिंग से किसी की आवाज़ में नई बातें बुलवा दी गईं। अब सोचो — तुम्हारी एक reel में तुम्हारी कितने सेकंड की आवाज़ है?"
- **Beats:**
  1. **0–5s:** Hook bolo. Screen: 3 second ki waveform badhkar poora sentence ban jaati hai.
  2. **5–14s, scene:** "रात 11 बजे call आता है — रोती हुई जानी-पहचानी आवाज़: 'मैं मुसीबत में हूँ, अभी पैसे भेजो, किसी को मत बताना।'" Screen: AI clip (phone vibrate hota hua, screen par koi text nahi) + 2D overlay "Unknown" + tag "नाटकीय उदाहरण · AI दृश्य".
  3. **14–28s, tech + India:** "2023 में Microsoft के researchers ने VALL-E नाम का research model दिखाया, जिसने किसी अनजान इंसान की सिर्फ 3 सेकंड की रिकॉर्डिंग से उसकी जैसी आवाज़ में नई बातें बोलवा दीं। Microsoft की 2025 की report कहती है — AI ने ठगी का technical bar नीचे कर दिया है। और McAfee के 2023 के एक सर्वे में, 1,010 भारतीयों में से करीब आधे ने कहा कि उनके साथ या किसी जानने वाले के साथ AI voice scam हुआ।" Screen: paper card "VALL-E, 2023", report card "Apr 2025", survey card "McAfee survey, 2023 · company का सर्वे".
  4. **28–37s, laal jhande:** "तीन निशानियाँ याद रखो — जल्दबाज़ी, 'किसी को मत बताना', और अनजान account में तुरंत पैसे।" Screen: 3 red-flag icons.
  5. **37–50s, bachaav:** "Call काटो, और उसी इंसान को saved number पर खुद call करो। Family में एक code word तय करो। कोई ऐसी बात पूछो जो सिर्फ वो जानता हो। और दबाव में कभी पैसे मत भेजो।" Screen: 4 checkboxes tick hote hain.
  6. **50–64s, report + CTA:** "पैसा चला गया? तुरंत बैंक को बताओ, और 1930 पर कॉल करो या cybercrime.gov.in पर शिकायत करो। पैसा नहीं गया, पर call, SMS या WhatsApp संदिग्ध था? Sanchar Saathi पोर्टल पर 'Chakshu' में report करो। आज रात खाने पर family code word तय करो — और ये reel family group में भेजो।" Screen: do-khaane wala helpline card: "पैसा गया → 1930 / cybercrime.gov.in" | "सिर्फ शक → sancharsaathi.gov.in (Chakshu)".
- **India angle:** Indian parivaar WhatsApp groups par baat karte hain aur UPI se turant paise bhejte hain. McAfee ke 2023 survey mein India ka aankda global average se kaafi upar tha. Reel do Indian raaste sikhati hai: paisa gaya to 1930, sirf shak ho to DoT ka Chakshu. Code-word wali aadat aaj raat se shuru ki ja sakti hai.
- **Visuals:** 2D: waveform badhne ka animation, survey card, 3 red flags, 4-step checklist, do-khaane wala helpline end-card. 3D: kuch nahi. **AI clips: 1 × 7.5 = 7.5 credits.** Andhera bedroom, bedside par smartphone vibrate karta hua, screen par sirf generic glow (koi text, number ya logo nahi), koi insaan nahi. "Unknown" label post mein 2D overlay se.
- **Length:** ~64 sec
- **Kyun chalega:** Isme darr bhi hai aur parivaar ko bachane ki chahat bhi. "Tumhari reels mein tumhari kitni aawaaz hai?" personal sawaal hai, aur code word ek aasaan kaam hai jise log forward karte hain.
- **Dhyan rakho:** VALL-E research demo tha, ye mat kaho ki thug wahi model use karte hain. Reel mein kisi asli insaan ki ya cloned aawaaz demo ke liye bhi nahi, sirf stylised waveform. McAfee ek security company ka vendor survey hai (2023, online, 1,010 Indian adults): "करीब आधे" (47% = 20% khud + 27% kisi jaanne wale ke saath) bolo. **"83% भारतीयों ने पैसे गंवाए" kabhi mat bolo**, 83% sirf victims mein se tha. Chakshu sirf shak wali communication ke liye hai, paisa jaane par 1930. Bachaav ke steps general safety salah hain, statistic nahi. Darr par khatam mat karo, control aur action par khatam karo. 1930 aur Chakshu publish wale din dobara check kar lo.
- **Facts + sources:**
  - VALL-E unseen speaker ki 3-second recording se personalised speech bana sakta hai: [VALL-E paper, Microsoft, 5 Jan 2023](https://huggingface.co/papers/2301.02111)
  - "AI has started to lower the technical bar for fraud". Thug deepfakes aur voice cloning use karte hain, urgency ka fayda uthate hain: [Microsoft Cyber Signals Issue 9, 16 Apr 2025](https://www.microsoft.com/en-us/security/blog/2025/04/16/cyber-signals-issue-9-ai-powered-deception-emerging-fraud-threats-and-countermeasures/)
  - McAfee "Beware the Artificial Impostor" (Apr 2023 fieldwork, 7,054 adults, 1,010 India): 47% Indians ne khud ya jaanne wale ke saath AI voice scam bataya; 83% Indian victims ko paise ka nuksaan: [McAfee report PDF](https://www.mcafee.com/content/dam/consumer/en-us/resources/cybersecurity/artificial-intelligence/rp-beware-the-artificial-impostor-report.pdf), [Communications Today](https://www.communicationstoday.co.in/47-of-indians-have-experienced-ai-voice-scams/)
  - DoT ka Chakshu (Sanchar Saathi): shak wali call, SMS, WhatsApp report karne ke liye. Paisa jaane par 1930 / cybercrime.gov.in: [Outlook Money](https://www.outlookmoney.com/retirement/financial-planning/how-to-report-suspected-fraud-communication-via-dots-chakshu-facility), [Factly explainer](https://factly.in/explainer-government-launches-chakshu-to-report-sms-call-or-whatsapp-messages-attempting-to-commit-fraud/amp)
  - 1930 helpline aur cybercrime.gov.in: [Rajya Sabha PQ, 12 Mar 2025](https://rsdebate.nic.in/bitstream/123456789/757210/1/PQ_267_12032025_U1505_p268_p273.pdf)

---

### #5: AI से सीखो, कुंजी मत बनाओ — एक experiment क्या कहता है
*Series: AI का कल (Hafte 3 Mangalvaar slot par "नॉर्मल" thappe ke saath) · Base idea: `future_jobs-04`*

- **Hook (0–4s):** "एक experiment में AI से सीखने वालों के quiz में 100 में से करीब 17 नंबर कम आए — पर गलती AI की नहीं, इस्तेमाल के तरीके की थी।"
- **Beats:**
  1. **0–4s:** Hook bolo. Screen: do notebook saath-saath.
  2. **4–14s, setup:** "January 2026 — Anthropic के researchers का experiment: 52 programmers, ज़्यादातर junior, को एक नई Python library सीखनी थी। आधे AI के साथ, आधे बिना। फिर सबका quiz।" Screen: on-screen label "Anthropic = Claude बनाने वाली company · एक company का research".
  3. **14–24s, nateeja:** "AI वाले group का average करीब 50%, बिना AI वालों का 67%। और वो काफ़ी तेज़ भी नहीं निकले — करीब 2 मिनट का फर्क, जो statistically मायने नहीं रखता।" Screen: scorecard 67 se 50 par girta hai.
  4. **24–37s, twist:** "अब सुनो सबसे इंटरेस्टिंग बात — पर ये छोटे groups हैं, हर group में 2 से 7 लोग, तो इसे शुरुआती संकेत समझो। जो खुद सोचते रहे — code के साथ explanation माँगी, या concept वाले सवाल पूछे — उनका score 65% या ज़्यादा। जो तीन तरीकों में काम ज़्यादातर AI पर छोड़ते गए — उनका औसत 40% से नीचे।" Screen: 6 icons, unme se 3 par orange tick; har icon ke neeche chhota "n=2…7" tag; corner mein "शुरुआती संकेत".
  5. **37–47s, desi rule:** "कुंजी से उत्तर उतारना बनाम tuition वाले सर से 'क्यों' पूछना। Rule याद रखो: पहले खुद try, फिर AI से सिर्फ hint, फिर बोलो 'समझाओ क्यों' — answer सबसे आखिर में।" Screen: AI clip (likhta haath) + 2D overlay "क्यों?", phir 3-step checklist.
  6. **47–56s, India:** "और भारत में? पढ़ाई पर काम करने वाली संस्था Pratham, Claude पर बनी 'Anytime Testing Machine' आज़मा रही है — Anthropic के मुताबिक 20 स्कूलों के 1,500 बच्चों के साथ pilot।" Screen: card "Pilot · Anthropic के मुताबिक".
  7. **56–60s, CTA:** "ये reel उस दोस्त को भेजो जो सब copy करता है।"
- **India angle:** Pratham ka pilot asli Indian school use-case hai. Kunji aur tuition wali analogy har Indian student ki apni hai.
- **Visuals:** 2D: kunji vs sawaal ke bulb, 67 se 50 bar, 6 pattern icons (n tags ke saath), 3-step checklist. 3D (optional): `bars3d` mein 50% vs 67%. **AI clips: 1 × 7.5 = 7.5 credits.** Raat ko desk lamp ke neeche notebook par ghasit-ghasit kar likhta haath (koi padhne layak text nahi, chehra nahi). "क्यों?" post mein 2D overlay se.
- **Length:** ~60 sec
- **Kyun chalega:** Students ka sabse bada darr kam marks hai. "Copy karne wale dost ko bhejo" share karwata hai, aur 3-step rule log save karte hain.
- **Dhyan rakho:** Study 52 adult, zyaadatar junior programmers ki thi jo ek coding library seekh rahe the. School ke bachchon ki nahi, aur "padhai mein AI se samajh ghatti hai" jaisa general daava mat karo, ye saaf bolo. "17" ka matlab hai 100 mein ~17 points. Six-pattern wala hissa chhote groups (high scorers n=2, 3, 7; low scorers n=4 har ek) par hai, isliye "शुरुआती संकेत". "<40%" teen low-scoring patterns ka milaa-jula average hai, akele delegation ka nahi. **"21% coursework" wala aankda hata diya:** Anthropic ke India brief (Claude.ai par coursework use) aur Bengaluru page ("educational and instructional tasks 12%") alag metrics hain, dono saath viewers ko confuse karenge. Pratham ke liye sirf Anthropic ka 1,500 wala number "Anthropic के मुताबिक" ke saath bolo, doosra koi number mat milao. Pratham pilot shuruaati hai, "आज़मा रही है" bolo.
- **Facts + sources:**
  - Trio library par randomized experiment. AI se score ~17% kam (lagbhag do grade), speed mein significant fayda nahi: [Shen & Tamkin, Jan 2026](https://huggingface.co/papers/2601.20245)
  - 52 mostly-junior engineers. 50% vs 67%. ~2 min tez, par significant nahi. 6 patterns: 3 engaged patterns 65%+, 3 low-scoring patterns ka average <40%: [Anthropic research, 29 Jan 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)
  - Pratham pilot: "1,500 students across 20 schools", end-2026 tak 100 schools ka plan (10 Oct 2026 ko page dobara padha): [Anthropic Bengaluru partnerships, 16 Feb 2026](https://www.anthropic.com/news/bengaluru-office-partnerships-across-india)
  - Testing Machine test banati hai, haath se likhe jawab digitise karke grade karti hai aur feedback deti hai: [Pratham, 16 Feb 2026](https://pratham.org/2026/02/16/pratham-partners-with-anthropic-to-enable-ai-learning-tools-for-learners/)

---

### #6: AI, ML, Deep Learning, GenAI — असली फर्क
*Series: AI का ABC (channel ki pehli reel) · Base idea: `basics-01`*

- **Hook (0–3s):** "ChatGPT AI है... लेकिन हर AI, ChatGPT नहीं होता। ये 4 डिब्बे समझ लो।"
- **Beats:**
  1. **0–3s:** Hook bolo. Screen: 4 nested tiffin dabbe orange outline mein pop-in hote hain.
  2. **3–13s, AI:** "AI यानी मशीन से समझदारी वाला काम करवाना। ये शब्द 1955 के एक proposal में आया, और 1956 में Dartmouth में इस पर पहली बड़ी बैठक हुई।" Screen: dabbe par "1956" ka stamp.
  3. **13–25s, ML:** "Machine Learning यानी rules रटाने की जगह examples से सीखना। 1959 में Arthur Samuel ने लिखा कि उनका checkers program अपने ही बनाने वाले से बेहतर खेलना सीख सकता है। और याद रखना, तुम्हारे UPI में fraud पकड़ने के लिए NPCI बैंकों को AI/ML वाले models से alerts और risk scoring देता है।" Screen: checkers board, phir generic phone par "risk score" meter (koi UPI ya bank logo nahi).
  4. **25–37s, Deep Learning:** "Deep Learning यानी ML जो कई परतों वाले neural network से सीखता है। 2012 की ImageNet competition में AlexNet की गलती करीब 15% थी, जबकि दूसरे नंबर वाली team की करीब 26%। और ये दो gaming GPUs पर train हुआ था।" Screen: layered network aur bar "26.2% vs 15.3%".
  5. **37–48s, GenAI:** "आज का GenAI यानी Deep Learning जो कुछ नया बनाता है: text, photo, आवाज़। 30 नवंबर 2022 को ChatGPT आया, और फरवरी 2026 में OpenAI के CEO Sam Altman ने बताया कि भारत में हर हफ्ते करीब 10 करोड़ लोग इसे इस्तेमाल करते हैं।" Screen: counter "100M weekly" aur label "Feb 2026, OpenAI CEO के मुताबिक".
  6. **48–58s, payoff + CTA:** "तो हर GenAI, AI है... पर हर AI, GenAI नहीं। और AGI? उस डिब्बे का साइज़ अभी कोई तय नहीं कर पाया। Save कर लो, और अगली बार कोई 'AI' बोले तो पूछना: कौन सा डिब्बा?" Screen: dotted "AGI?" dabba hilta hai.
- **India angle:** Roz ka ML example UPI fraud detection hai (Lok Sabha jawab, Dec 2025). India ka GenAI scale bhi hai: Feb 2026 mein ~10 crore weekly ChatGPT users (OpenAI ka apna aankda).
- **Visuals:** 2D: `tiffin` template ke 4 dabbe, saal ke stamps (1956/1959/2012/2022), checkers, layered network, chat bubble, dotted AGI dabba. 3D: 4 translucent nested cubes, camera sabse andar wale cube tak jaata hai. **AI clips: 0, yaani 0 credits.**
- **Length:** ~58 sec
- **Kyun chalega:** Har koi ye 4 shabd mila-jula ke bolta hai. Tiffin wali analogy yaad reh jaati hai, aur UPI wala twist har Indian ko apna lagta hai. Ye poori series ki neev hai.
- **Dhyan rakho:** "McCarthy ne 1956 mein shabd banaya" mat bolo, proposal 1955 ka hai. Samuel ki "learn without being explicitly programmed" wali line mat daalo. 26.2% usi saal ki runner-up team ka tha, AlexNet ka purana score nahi. "आज का GenAI" bolo. **100M ke saath hamesha "फरवरी 2026, OpenAI CEO के मुताबिक" bolo aur screen par likho, "आज" kabhi nahi.** Ye aankda ~8 mahine purana aur company ka apna hai; 10 Oct 2026 tak koi naya official India figure nahi mila. Publish wale din dobara search karo.
- **Facts + sources:**
  - "Artificial intelligence" shabd 31 Aug 1955 ke Dartmouth proposal mein aaya: [AI Magazine reprint](https://ojs.aaai.org/index.php/aimagazine/article/view/1904)
  - Samuel ka 1959 checkers paper: [Samuel 1959 PDF](https://people.csail.mit.edu/brooks/idocs/Samuel.pdf)
  - AlexNet ka top-5 error 15.3% vs runner-up 26.2%, do GTX 580 GPUs par train: [AlexNet paper](https://cvml.ista.ac.at/courses/DLWT_W17/material/AlexNet.pdf)
  - NPCI sabhi banks ko AI/ML-based fraud monitoring solution deta hai: [Lok Sabha Unstarred Q 2481, 15 Dec 2025](https://eparlib.sansad.in/bitstream/123456789/3018042/1/AU2481_5bIzKk.pdf)
  - ChatGPT 30 Nov 2022 ko launch hua: [OpenFuture](https://openfuture.eu/note/open-ai-releases-chatgpt/)
  - India mein 100M weekly active ChatGPT users, US ke baad #2 (Altman, 15–16 Feb 2026): [TechCrunch, 15 Feb 2026](https://www.techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/)

---

### #7: 'ChatGPT को टक्कर'? Sarvam-105B का पूरा सच
*Series: Made in India AI (सही/गलत/नॉर्मल format mein) · Base idea: `india-02`*

- **Hook (0–4s):** "Headlines ने लिखा — भारत का AI app आया, 'ChatGPT और Claude को टक्कर देने'। तो क्या भारत का AI, ChatGPT जितना है? 45 सेकंड दो, सच अलग करते हैं।"
- **Beats:**
  1. **0–4s:** Hook bolo. Screen: asli headline ka screenshot (sirf headline text, publication ka logo crop karke), neeche source tag "Storyboard18, 2026"; upar bada "?" stamp.
  2. **4–16s, parameters:** "Parameters यानी model के अंदर के knobs — जितने ज़्यादा, उतना बड़ा दिमाग़। Sarvam-105B में करीब 105 अरब। पर twist: हर token — यानी शब्द के एक टुकड़े — पर इनमें से सिर्फ करीब 10 अरब काम करते हैं।" Screen: knobs ki grid, zyaadatar dim aur kuch orange glow mein.
  3. **16–27s, MoE:** "इसे Mixture-of-Experts कहते हैं। शादी के हलवाई की टीम सोचो — 128 कारीगर, पर हर ऑर्डर पर सिर्फ 8 बुलाए जाते हैं। काम तेज़, खर्च कम।" Screen: 128 chef icons mein se router 8 ko jalaata hai, caption "सरल उदाहरण".
  4. **27–39s, SAHI ✓:** "फरवरी 2026, AI Impact Summit — Sarvam के 30B और 105B models सामने आए: भारत में, शुरू से train हुए, और weights Apache 2.0 license में open। Company के मुताबिक 22 भारतीय भाषाओं पर test किए गए। साथ में BharatGen का Param2 — 17B, English, हिंदी और 21 और भारतीय भाषाएँ।" Screen: hare tick wale cards, ek par chhota tag "22 भाषाओं पर test (company)".
  5. **39–52s, आधा सच ◐:** "तो क्या ChatGPT को हरा दिया? जवाब — test पर निर्भर है। भारतीय भाषाओं वाले tests पर company का दावा मज़बूत है — उसके docs में 90% pairwise जीत लिखी है। पर independent Artificial Analysis के general intelligence index पर, अप्रैल 2026 में, Sarvam-105B 18 पर था — OpenAI के open model gpt-oss-120B के 33 के मुकाबले।" Screen: aadha-hara-aadha-laal "आधा सच" stamp; ek hi article ke `bars3d` (Sarvam-30B 12 / Sarvam-105B 18 / gpt-oss-120B 33) aur badi label "AA Index, 3 Apr 2026"; alag card "Indic tests: 90% (company का दावा)".
  6. **52–60s, NORMAL + CTA:** "नॉर्मल सच — ये पहली सीढ़ी है, आखिरी नहीं। 1 ट्रिलियन parameter वाला model अभी सिर्फ plan है। तुम्हें क्या लगता है, gap कब तक भरेगा? Comment करो।" Screen: grey NORMAL stamp, seedhi par pehla kadam.
- **India angle:** Bengaluru ka startup Sarvam aur sarkar-samarthit BharatGen consortium. Dono ke models India mein bane aur Indian bhashaon par focus karte hain. Indian-language tests par company ka daava mazboot hai, general index par gap saaf hai. Ye asli milestone hai, par "ChatGPT ko hara diya" nahi.
- **Visuals:** 2D: headline card, knob grid, 128-chef router, SAHI / आधा सच / NORMAL stamps (`stamp` template). 3D: `bars3d` mein sirf ek article, ek waqt ke bars, saaf date label. Agar July 2026 ka "6 labs 50+" dikhana hai to alag translucent card, alag version label ke saath, bina voiceover ke. **AI clips: 0, yaani 0 credits.**
- **Length:** ~60 sec
- **Kyun chalega:** Asli headline ko seedha pakadta hai, aur deshbhakti aur sach ek saath aate hain. "Test par nirbhar hai" wala imaandar verdict comments mein bahas laata hai. Halwai wali analogy yaad rehti hai.
- **Dhyan rakho:** **"ये forward tumhare paas aaya?" mat bolo**, aisa forward circulate hone ka source nahi mila. "भारत का ChatGPT" exact headline bhi nahi mila, isliye sirf asli headline ("…to rival ChatGPT and Claude", Indus app launch) dikhao aur recording se pehle uski date screenshot par confirm karo. AA ke pages aapas mein alag hain: 3 Apr 2026 ke article mein 18 (105B) / 12 (30B) / 33 (gpt-oss-120B); baad mein model page par Sarvam-105B 12 (estimated) aur gpt-oss-120B ~24 dikhte hain, kyunki index version badla. Isliye sirf article wale numbers, hamesha "AA Index, 3 Apr 2026" label ke saath, aur publish wale din AA page dobara dekho. Alag versions ke numbers ek chart mein mat daalo. "22 भाषाओं को support" mat bolo: Sarvam ke API docs "10 most-spoken Indian languages + English" support kehte hain, jabki model card 22 bhashaon par test/SOTA ka daava karta hai. 90% pairwise win rate company ka daava hai (docs mein benchmark ya opponent models ke naam nahi). "हर token" bolo, "हर शब्द" nahi. Param2 ka license non-commercial hai. 1T model sirf plan hai.
- **Facts + sources:**
  - Sarvam-105B: MoE, 10.3B active, 128 experts par top-8 routing + 1 shared, Apache license, 22 Indian languages par SOTA (company ka daava): [HF model card](https://huggingface.co/sarvamai/sarvam-105b)
  - API docs: "10 most-spoken Indian languages + English" support; Indian-language benchmarks par 90% pairwise win rate (company ka daava): [Sarvam docs, Sarvam-105B](https://docs.sarvam.ai/api-reference-docs/getting-started/models/sarvam-105b)
  - Asli headline (Indus app, "to rival ChatGPT and Claude"): [Storyboard18](https://storyboard18.com/digital/sarvam-launches-indus-chat-app-to-rival-chatgpt-and-claude-90341.htm). Indus app 105B model ke saath launch hua: [Techleap news feed](https://finder.techleap.nl/news/feed/sarvam-launches-indus-ai-chat-app-in-india-with-105b-parameter-model)
  - 30B/105B Feb 2026 mein Bharat Mandapam, India AI Impact Summit mein unveil hue: [Outlook Business](https://www.outlookbusiness.com/amp/story/news/sarvam-gnani-ai-launches-advanced-ai-models-at-the-indiaai-summit)
  - From scratch train hue, IndiaAI Mission compute par: [TechCrunch, 18 Feb 2026](https://techcrunch.com/?p=3093889)
  - AA Intelligence Index par launch ke waqt: Sarvam-105B 18, 30B 12, gpt-oss-120B (High) 33: [Artificial Analysis article, Apr 2026](https://artificialanalysis.ai/articles/sarvam-105b-Sarvam-30b-everything-you-need-to-know). Date 3 Apr 2026: [AA post on X](https://x.com/ArtificialAnlys/status/2039915097750151530). Baad ka model page (12, estimated): [AA model page](https://artificialanalysis.ai/models/sarvam-105b)
  - July 2026 (v4.1) mein 6 labs ke top models 50 se upar: [Artificial Analysis, 17 Jul 2026](https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index)
  - Param2: 17B total, 2.4B active, English + Hindi + 21 bhashayein, non-commercial: [HF model card](https://huggingface.co/bharatgenai/Param2-17B-A2.4B-Thinking)
  - Sarvam ne 1T-parameter model ka plan bataya (abhi release nahi hua): [CXOToday, 30 Jul 2026](https://cxotoday.com/ai/sarvam-eyes-1-trillion-parameter-ai-model-to-price-it-5-5-times-cheaper-than-global-rivals/)

---

### #8: AI पूरी नौकरी नहीं खाता — कटोरियाँ उठाता है
*Series: AI का कल · Base idea: `future_jobs-01`*

- **Hook (0–4s):** "तुम्हारी नौकरी एक थाली है… और AI इसमें से कुछ कटोरियाँ उठा रहा है।"
- **Beats:**
  1. **0–4s:** Hook bolo. Screen: AI clip (steel thali) se 2D line-art thali par transition, caption "Job = थाली".
  2. **4–14s, task:** "'AI सबकी नौकरी खा जाएगा' — ये लाइन आधी गलत है। हर job असल में छोटे-छोटे कामों का पैकेट है — इन्हें task कहते हैं, यानी कटोरियाँ: email, report, meeting, customer call।" Screen: katoriyan ek-ek karke pop-in hoti hain.
  3. **14–27s, duniya ka andaaza:** "UN की labour agency, ILO, का 2025 का अंदाज़ा: दुनिया में करीब हर 4 में से 1 worker की job में कुछ कटोरियाँ ऐसी हैं जिन पर GenAI असर डाल सकता है। पर सबसे ज़्यादा exposure वाली category में सिर्फ करीब 3.3%। ILO कहता है — ज़्यादातर jobs बदलेंगी, गायब नहीं होंगी।" Screen: ring "4 में से 1", chhota bar "3.3%", tag "potential · दुनिया · ILO 2025".
  4. **27–41s, asli asar:** "और अब तक असल में क्या दिखा? Claude बनाने वाली company Anthropic की March 2026 की study: अमेरिका के सबसे exposed workers में बेरोज़गारी की कोई systematic बढ़त नहीं दिखी — पर नए, कम उम्र वाले लोगों की hiring थोड़ी धीमी होने के शुरुआती संकेत हैं।" Screen: do flat lines, phir "22–25 साल" wali patli line mein halka dip; tags "US", "एक company का data", "शुरुआती संकेत".
  5. **41–50s, India:** "Claude पर भारत का इस्तेमाल सबसे ज़्यादा software से जुड़ा है — पर ये Claude इस्तेमाल करने वालों की तस्वीर है, पूरे भारत की नौकरियों की नहीं। Freshers वाले सवाल पर अलग reel बना रहे हैं — follow कर लो।"
  6. **50–60s, CTA:** "आज का काम — अपनी थाली लिखो: कौन सी कटोरी AI ले सकता है, कौन सी सिर्फ तुम्हारी है — भरोसा, फैसला, लोगों से बात। Comment में अपनी job लिखो।" Screen: khaali thali template.
- **India angle:** ILO ka global andaaza har desh ke worker par lagu sawaal hai. India ke liye Claude data sirf ek chhoti, coder-heavy tasveer hai, isliye use naukri ki bhavishyavani ki tarah nahi, saaf caveat ke saath dikhaya. Freshers ka sawaal (Indian students ke liye sabse zaroori) alag reel mein.
- **Visuals:** 2D: `tiffin`/thali template, labelled katoriyan, upar uthti katoriyan, khaali template. 3D: ILO ka "4 में से 1" ring aur 3.3% ka chhota bar, phir do lines. **AI clips: 1 × 7.5 = 7.5 credits.** Lakdi ki table par steel thali ka top-down shot, bhaap uthti hui, ek katori dheere se frame se bahar khisakti hai. Koi insaan nahi, koi text nahi.
- **Length:** ~60 sec
- **Kyun chalega:** Naukri ka darr sabse bada darr hai, aur khaane ki analogy ek second mein samajh aati hai. ILO ka "badlegi, gayab nahi" thali-katori ko seedha support karta hai. "Apni job likho" se comments aate hain aur aage ki reels ke topic milte hain.
- **Dhyan rakho:** ILO wala aankda *potential exposure* hai, naukri jaana nahi; "3.3%" sirf sabse oonchi exposure category hai. Anthropic study US ki hai: "no systematic increase in unemployment" ke saath "suggestive evidence that hiring of younger workers has slowed" dono bolo, ek nahi. 22–25 saal walon ka "job finding rate ~14% kam" study khud "barely significant" kehti hai, isliye voice mein number mat bolo, sirf "शुरुआती संकेत". India ki berozgaari ya IT naukriyon par koi bhavishyavani nahi (purani "असर सबसे पहले IT वालों की थाली पर" line hata di). Freshers reel ka teaser tabhi jab wo ban chuki ho (Sec 5 teaser rule); warna sirf "follow कर लो".
- **Facts + sources:**
  - Duniya mein ~1 in 4 workers ki occupation mein kuch GenAI exposure; sabse oonchi exposure category 3.3% global employment; transformation sabse sambhavit asar: [ILO Working Paper 140, May 2025](https://webapps.ilo.org/static/english/intserv/working-papers/wp140/index.html)
  - Late 2022 se highly exposed workers mein unemployment ki koi systematic badhat nahi (US); "suggestive evidence that hiring of younger workers has slowed in exposed occupations" (10 Oct 2026 ko page dobara padha): [Anthropic, 5 Mar 2026](https://www.anthropic.com/research/labor-market-impacts)
  - India mein Claude.ai use ka sabse bada hissa software (45.2%, Nov 2025 data): [Anthropic India brief, 16 Feb 2026](https://www.anthropic.com/research/india-brief-economic-index)
  - *Part 2 ke liye (labelled):* ~80% US workers ke ≥10% tasks par potential asar: [GPTs are GPTs, Mar 2023](https://huggingface.co/papers/2303.10130). Saare reports milakar 49% jobs mein kam se kam chauthai tasks par Claude use (cumulative, ek company): [Anthropic Economic Index, 15 Jan 2026](https://www.anthropic.com/research/anthropic-economic-index-january-2026-report)

---

### #9: ChatGPT का 'T': Transformer और भारत कनेक्शन
*Series: AI का इतिहास — वो एक दिन · Base idea: `basics-05`*

- **Hook (0–4s):** "ChatGPT में 'T' का मतलब पता है? Transformer। और उस paper के 8 लेखकों में से 2 ने भारत में पढ़ाई की थी।"
- **Beats:**
  1. **0–4s:** Hook bolo. Screen: "G-P-T" letters, "T" zoom hokar paper title card ban jaata hai ("12 June 2017", `calendar-flip`).
  2. **4–14s, purana tareeka:** "2017 से पहले translation जैसे कामों के ज़्यादातर बड़े models वाक्य को ऐसे पढ़ते थे जैसे बच्चा उंगली रखकर पढ़ता है: एक-एक शब्द, बारी-बारी।" Screen: line-art ungli shabdon par chalti hai.
  3. **14–30s, Attention:** "Transformer पूरा वाक्य एक साथ देखता है। सुनो: 'रीना ने सीमा को किताब दी, क्योंकि वह शहर छोड़ रही थी।' यहां 'वह' कौन है? Attention यानी हर शब्द बाकी सबको देखकर तय करता है कि किस पर कितना ध्यान दे।" Screen: "वह" se Reena aur Seema tak alag motaai ki curved orange lines.
  4. **30–40s, proof:** "Paper में researchers ने दिखाया कि attention के दो हिस्से, यानी heads, 'its' जैसे शब्द को उसके सही noun से जोड़ते दिख रहे थे। और base model एक machine के 8 GPUs पर सिर्फ करीब 12 घंटे में train हो गया।" Screen: stamp "12 hrs × 8 GPUs".
  5. **40–52s, India connection:** "8 लेखक, सबका बराबर योगदान, और paper में साफ लिखा है कि नामों का क्रम random है। उनमें Ashish Vaswani ने BIT मेसरा से और Niki Parmar ने पुणे के PICT से engineering की थी।" Screen: 8 silhouette cards (chehre nahi), 2 par chhota "भारत में पढ़े" pin, naam sirf text mein.
  6. **52–60s, payoff + CTA:** "आज GPT ही नहीं, भारत का Sarvam-105B भी attention पर चलता है। Comment करो: उस वाक्य में 'वह' कौन थी?" Screen: quiz card "वह → ?".
- **India angle:** 8 mein se do co-authors ne India mein undergrad kiya (BIT Mesra aur PICT Pune), phir dono USC gaye. Sarvam-105B bhi attention architecture par bana hai. Garv hai, par overclaim nahi.
- **Visuals:** 2D: ungli se padhna vs spotlight, attention arcs, paper card, 8 silhouettes aur "Listing order is random" ka stamp. 3D: shabd 3D space mein tairte hain aur unke beech glowing attention beams (koi map nahi). **AI clips: 0, yaani 0 credits.**
- **Length:** ~60 sec
- **Kyun chalega:** "ChatGPT ka T" trivia bahut shareable hai. India connection imaandari se bataya gaya hai, aur "वह कौन थी?" quiz se comments aate hain.
- **Dhyan rakho:** "Bhartiyon ne Transformer banaya" mat bolo. RNN ki jagah self-attention ka idea Jakob Uszkoreit ka tha (paper ka footnote). Attention 2017 mein invent nahi hua tha. "Indian-origin" nahi, "भारत में पढ़े" bolo. Koi photo ya AI chehra nahi. Niki Parmar ki "JEE nahi nikla" wali kahani mat use karo.
- **Facts + sources:**
  - 8 authors, "Equal contribution. Listing order is random.", base model 8 P100 par 12 ghante, Figure 4 ke anaphora heads: [Attention Is All You Need, 12 Jun 2017](https://huggingface.co/papers/1706.03762)
  - GPT = Generative Pre-trained Transformer: [HF docs](https://huggingface.co/docs/transformers/model_doc/openai-gpt)
  - Vaswani ne BIT Mesra se CS kiya, phir USC se PhD: [OfficeChai (secondary)](https://officechai.com/stories/the-indian-researchers-whose-work-led-to-the-creation-of-chatgpt)
  - Parmar ne PICT Pune se B.E. (IT) kiya, phir USC se MS: [USC ISI, 2023](https://www.isi.edu/news/54564/attention-is-all-you-need-usc-alumni-paved-path-for-chatgpt/)
  - Sarvam-105B MLA-style attention par bana hai: [HF model card](https://huggingface.co/sarvamai/sarvam-105b)

---

### #10: AI वाले forecast से 3.9 करोड़ किसानों को SMS: मानसून कब तक?
*Series: Made in India AI · Base idea: `india-05`*

- **Hook (0–4s):** "2025 में करीब 3.9 करोड़ किसानों के फोन पर कृषि मंत्रालय का एक SMS आया — तुम्हारे इलाके में मानसून कब तक आ सकता है। ये forecast बनाने में AI models की मदद ली गई थी।"
- **Beats:**
  1. **0–4s:** Hook bolo. Screen: line-art keypad phone par SMS buzz (sender "कृषि मंत्रालय", generic), upar baadal ka icon.
  2. **4–12s, problem:** "किसान का सबसे बड़ा जुआ — बुवाई कब करें? बोया और बारिश रुक गई, तो बीज, पैसा, मेहनत सब दाँव पर।" Screen: AI clip (mansoon ke baadal).
  3. **12–20s, AI weather model:** "AI weather model यानी ऐसा model जिसने दशकों के मौसम के data से patterns सीखे — जैसे गाँव की वो दादी जो बादल देखकर अंदाज़ा लगाती थी, बस लाखों data points वाली।" Screen: dadi ka silhouette vs data grid.
  4. **20–30s, kya hua:** "2025 के Kharif season में कृषि मंत्रालय ने Development Innovation Lab-India के साथ pilot किया — Google का NeuralGCM, ECMWF का AI model AIFS, और IMD का 125 साल का बारिश रिकॉर्ड, तीनों मिलाकर।" Screen: teen dhaarayein milkar ek forecast line banti hain.
  5. **30–39s, scale:** "Forecast M-Kisan से SMS में गया — 13 राज्यों के कुछ हिस्सों में, 5 भाषाओं में: हिंदी, ओड़िया, मराठी, बांग्ला, पंजाबी — 3 करोड़ 88 लाख से ज़्यादा किसान। रिपोर्ट्स के मुताबिक बारिश से करीब 4 हफ्ते पहले तक।" Screen: 13 rajyon ke naam wale tiles (koi map shape nahi) par dakshin se uttar badhti neeli-hari patti, SMS arcs, counter 3,88,45,214.
  6. **39–47s, imaandari:** "ये probabilistic forecast था — यानी कितने % chance — और सिर्फ मानसून आने के दिन का। MP और बिहार के एक phone survey में 31 से 52% किसानों ने बताया कि उन्होंने बुवाई की तैयारी या समय बदला।" Screen: % gauge, caption "सिर्फ MP और बिहार".
  7. **47–56s, 2026 ka kadam:** "और 2026 में IMD ने खुद AI वाला block-level onset model शुरू किया — 15 राज्यों और 1 UT के 3,000 से ज़्यादा blocks, 4 हफ्ते पहले तक, probabilistic, करीब 4 दिन की गलती की गुंजाइश के साथ।" Screen: `report-card` par hara ✓ "IMD का अपना AI model (May 2026)" aur laal ✗ "अभी आधे देश के blocks तक".
  8. **56–62s, CTA:** "AI का सबसे काम का इस्तेमाल हमेशा chatbot नहीं होता। ये reel उस दोस्त को भेजो जो खेती से जुड़ा है।"
- **India angle:** Ye gaon wale Bharat ki asli kahani hai: IMD ka 125 saal ka data, M-Kisan portal, 5 Indian bhashaon mein SMS, aur 2026 mein IMD ka apna block-level AI model jo Agri Stack aur mantralay ke APIs se kisanon tak jaayega. Isse pata chalta hai ki "AI sirf shehar walon ke liye" nahi hai.
- **Visuals:** 2D: keypad SMS, buwai ka calendar, dadi vs data grid, teen streams ka merge, % gauge, `report-card`. 3D: rajya-naam tiles ka grid, monsoon band aur SMS arcs. **India ka outline sirf Survey of India boundary ke saath; warna tiles hi.** **AI clips: 1 × 7.5 = 7.5 credits.** Subah hare dhaan ke khet ke upar umadte gehre mansoon baadal, paani bhare khet mein pehli boondein. Wide shot, koi insaan nahi, koi text nahi.
- **Length:** ~62 sec
- **Kyun chalega:** Bada sarkari number, positive aur sachchi kahani, aur 2026 wala update reel ko taaza rakhta hai. Farmer pages aur family groups ise share karenge.
- **Dhyan rakho:** "AI ने बताया" mat bolo, SMS mantralay ne bheja, AI models ne forecast banane mein madad ki. Title mein "कब आएगा" nahi, "कब तक" (probabilistic). Sarkari aankda (3,88,45,214, yaani ~3.9 crore, 3.8 nahi) aur sarkar ki caveat ("probabilistic, sirf onset") use karo. Google aur partners ka account promotional hai. "13 rajyon ke kuch hisse" bolo. Paidawaar ya aamdani badhne ka koi daava nahi. 31–52% sirf MP aur Bihar ka hai. "4 hafte pehle" ko "reports ke mutabik" bolo. Sansad ke kis sadan mein jawab mila, ye mat bolo. IMD 2026 model ke blocks ki ginti sources mein ~3,067 se 3,196 tak hai, isliye "3,000 से ज़्यादा"; launch ki date sources mein 11 ya 12 May 2026, isliye sirf "May 2026"; 15 rajyon ki list nahi mili, naam mat lo.
- **Facts + sources:**
  - Kharif 2025 pilot DIL-India ke saath: NeuralGCM + ECMWF AIFS + IMD ka 125 saal ka data. Probabilistic aur sirf onset. M-Kisan SMS se 3,88,45,214 kisanon tak, 13 rajya, 5 bhashayein. MP/Bihar survey mein 31–52%: [IANS, 6 Dec 2025](https://ianslive.in/govt-deploys-ai-tools-to-improve-crop-productivity-farmer-livelihoods--20251206094053)
  - ~38 million kisanon tak pahuncha (Google aur partners ka account): [Google blog, 2025](https://blog.google/technology/research/indian-farmers-monsoon-prediction/)
  - Baarish se ~4 hafte pehle tak SMS: [The Statesman, Sep 2025](https://www.thestatesman.com/india/ai-based-monsoon-forecasts-shared-with-farmers-weeks-ahead-of-rains-1503485482.html)
  - May 2026: IMD ka AI-based block-level monsoon-onset forecast: ~3,196 blocks, 15 rajya + 1 UT, har Budhvaar, 4 hafte pehle tak, probabilistic, ~4 din error margin (mantri Jitendra Singh), Agri Stack aur mantralay ke APIs se kisanon tak: [Business Standard, 12 May 2026](https://www.business-standard.com/india-news/imd-launches-two-ai-enabled-monsoon-forecast-models-for-first-time-in-india-126051201302_1.html), [The Hindu summary via SuperKalam, 13 May 2026](https://superkalam.com/current-affairs/13-05-2026/imd-unveils-block-level-monsoon-forecast-model-pg12-2c841e10-0838-4a68-99dc-477ec8239c6a)
  - *Part 2 (May 2027, agle monsoon se pehle):* IMD block-level model par alag "Made in India" report card.

---

## 4. Baaki ideas

Pehle **overlap clusters** dekh lo. Kai ideas ek hi topic par hain. Har cluster se ek reel banao, baaki ko Part 2 ke liye rakho ya chhod do:
- **Tokens / Hindi tax:** Top #3 ← `india-03`, `tools_models-03`, `trends_format-03`
- **Hindi data:** `tools_models-02` (Hindi ~0.2%, Hafte 4 फैक्ट्री) ← Top #3 se link
- **Hallucination:** Top #1 ← `basics-07` (Part 2: court cases), `tools_models-07` (skip)
- **Parameters / MoE / open:** Top #7 ← `basics-04`, `tools_models-10`, `future_jobs-11`, `trends_format-10` (sirf 1 aur banao: `trends_format-10` chai wala), aur **(NEW) Open-weights vs Open-source**
- **DeepSeek cost:** `basics-06` ← `tools_models-04` (merge)
- **GPU / IndiaAI compute:** `trends_format-05` ← `india-01` (merge)
- **Paani / bijli:** `myths_safety-05` ← `future_jobs-10` (Part 2)
- **Naukri:** Top #8 ← `myths_safety-07`, `future_jobs-05` (freshers), `trends_format-11` (WEF)
- **AGI:** `future_jobs-09` ← `basics-12` (2-part)
- **Agents:** `basics-10` ← `future_jobs-07` (Part 2)
- **Transformer:** Top #9 ← `trends_format-07` (skip)
- **AI label:** `india-06` ← `trends_format-12` (Part 2: YouTube)
- **RLHF:** `basics-02` ← `tools_models-06` (merge)
- **Scam safety:** Top #2, #4 ← `myths_safety-12` (paisa double), **(NEW) Diwali ka "sarkari gift"**, **(NEW) Digital arrest**
- **Free AI + privacy:** **(NEW) Free AI ka asli daam** ← "5 चीज़ें कभी मत बताना" (Part 2)
- **Data ke adhikaar / copyright:** **(NEW) DPDP**, **(NEW) ANI vs OpenAI**

**Source mix note:** Is list mein pehle 7+ ideas Anthropic/Claude ke apne pages par tike the. Ab introspection, consumer terms, Opus pricing, bijli, web-search aur sycophancy wale ideas neutral ya primary sources par shift kiye gaye hain. Claude-India #2/101st wala idea abhi skip hai. Robots wala idea "एक company का research" tag ke saath, kam priority par.

### AI का ABC

| Title | Hook | Type | Evergreen | Key source |
|---|---|---|---|---|
| '105B Parameters' का मतलब क्या? Sarvam से समझो *(MoE cluster)* | "भारत का करीब 105 अरब parameters वाला AI कोई भी free download कर सकता है। पर parameter होता क्या है?" | india | Nahi | [Sarvam-105B card](https://huggingface.co/sarvamai/sarvam-105b) |
| AI की याददाश्त: Context Window कितनी बड़ी? | "AI एक बार में लाखों शब्द तक पढ़ सकता है... पर पढ़ लेना और ध्यान देना एक बात नहीं।" (exact window publish wale din model docs se) | explainer | Haan | [Lost in the Middle, 2023](https://huggingface.co/papers/2307.03172) |
| RAG vs Fine-tuning: AI का Open-Book Exam | "AI को नई बात सिखाने के 2 तरीके हैं: coaching, या open-book exam?" | explainer | Haan | [RAG paper, 2020](https://ai.meta.com/research/publications/retrieval-augmented-generation-for-knowledge-intensive-nlp-tasks/) |
| Chatbot बोलता है, Agent करता है: MCP क्या है? *(Hafte 6+)* | "भारत में AI से UPI पेमेंट का pilot शुरू हो चुका है। यानी AI अब सिर्फ बोलेगा नहीं, करेगा भी।" | tools | Nahi | [Onmanorama, 9 Oct 2025](https://www.onmanorama.com/news/business/2025/10/09/npci-razorpay-openai-chatgpt-payments.html) |
| AI तस्वीर कैसे बनाता है? 'शोर' से: Diffusion | "Google के मुताबिक, retro saree trend के वक्त Nano Banana के इस्तेमाल में India नंबर 1 था। पर AI तस्वीर बनाता कैसे है? 'शोर' से।" | explainer | Haan | [TechCrunch, 17 Sep 2025](https://techcrunch.com/2025/09/17/india-leads-the-way-on-googles-nano-banana-with-a-local-creative-twist) |
| Hindi में AI महँगा क्यों पड़ता है? 'Token Tax' *(Tokens cluster, Part 2)* | "एक ही बात — English में लिखो तो AI उसे कम टुकड़ों में पढ़ता है, कई भारतीय भाषाओं में कई गुना ज़्यादा टुकड़ों में। और हर टुकड़े का बिल बनता है।" | how-models-are-built | Haan | [Sarvam-1 v0.5 card](https://huggingface.co/sarvamai/sarvam-1-v0.5) |
| Token क्या है? हिंदी पर AI का 'टैक्स' (मात्रा twist) *(Tokens cluster, Part 2)* | "वही बात हिंदी में लिखो — तो कई AI उसे ज़्यादा टुकड़ों में गिनते हैं।" | explainer | Haan | [Matra paper, Aug 2026](https://huggingface.co/papers/2608.26449) |
| 1.6 लाख करोड़ पैरामीटर, काम सिर्फ 3%: MoE क्या है *(MoE cluster)* | "इस AI में 1.6 लाख करोड़ पैरामीटर हैं — पर हर टोकन पर सिर्फ करीब 3% काम करते हैं।" | explainer | Haan | [DeepSeek-V4-Pro card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) |
| Token क्या है? AI के लिए हिंदी 'भारी' क्यों *(Tokens cluster, skip)* | "2023 में GPT-4 वाले tokenizer में 'Hello world' — अंग्रेज़ी में सिर्फ 2 टुकड़े। और हिंदी में? 12 टुकड़े।" | format | Haan | [Oxford, NeurIPS 2023](https://arxiv.org/abs/2305.15425v1) |
| 17 अरब पैरामीटर यानी क्या? चाय वाले से समझो | "भारत के नए AI मॉडल में करीब 17 अरब 'पैरामीटर' हैं। पैरामीटर यानी क्या? चलो, चाय की टपरी पर समझते हैं।" | format | Haan | [Business Today, 16 Feb 2026](https://www.businesstoday.in/amp/technology/news/story/most-real-world-use-cases-dont-need-trillion-parameter-ai-bharatgen-ceo-rishi-bal-on-param-2-launch-516374-2026-02-16) |
| **(NEW)** 'Open' AI के दो मतलब: Open-weights vs Open-source *(Hafte 5; brief Sec 4.1)* | "Sarvam-105B 'open' है, Param2 भी 'open' — पर दोनों का 'open' एक जैसा नहीं।" | explainer | Haan | [OSI, OSAID 1.0, 28 Oct 2024](https://opensource.org/blog/the-open-source-initiative-announces-the-release-of-the-industrys-first-open-source-ai-definition) |

### AI की फैक्ट्री

| Title | Hook | Type | Evergreen | Key source |
|---|---|---|---|---|
| ChatGPT कैसे बना? 'अगला शब्द' + इंसानी ट्यूशन *(RLHF cluster)* | "ChatGPT की पढ़ाई एक बच्चों वाले खेल से शुरू हुई: 'अगला शब्द बताओ'।" | how-models-are-built | Haan | [InstructGPT, 2022](https://arxiv.org/pdf/2203.02155) |
| AI मॉडल कैसे बनता है? 6 स्टेप, 60 सेकंड *(Hafte 3)* | "Meta ने एक AI को 15.6 लाख करोड़ टोकन पढ़ाए… फिर भी वो तुम्हारी बात मानकर जवाब देना नहीं जानता था।" | how-models-are-built | Haan | [Llama 3 paper, 2024](https://huggingface.co/papers/2407.21783) |
| वेब-डेटा में हिंदी सिर्फ करीब 0.2%! AI के लिए हिंदी data कम क्यों *(Hafte 4)* | "कई AI जिस मुफ्त वेब-डेटा से पढ़ते हैं — उसमें हिंदी के पन्ने सिर्फ करीब 0.2% हैं।" | india | Haan | [Common Crawl languages.csv](https://huggingface.co/datasets/commoncrawl/statistics/blob/main/languages.csv) |
| AI की मशीनों को भी गर्मी लगती है: 16,000 GPU का सच | "AI बनाने वाली मशीनों को भी गर्मी लगती है। मज़ाक नहीं — Meta की रिपोर्ट में लिखा है।" | how-models-are-built | Haan | [Llama 3 paper, 2024](https://huggingface.co/papers/2407.21783) |
| 100 गुना छोटा AI, फिर भी लोगों की पसंद: RLHF *(RLHF cluster, merge)* | "1.3 अरब पैरामीटर वाले AI के जवाब, 175 अरब वाले से ज़्यादा पसंद किए गए। कैसे?" | how-models-are-built | Haan | [InstructGPT, 2022](https://huggingface.co/papers/2203.02155) |
| AI का बोर्ड एग्ज़ाम — और भारत का अपना पेपर MILU | "नए AI मॉडल 90% जैसे स्कोर छापते हैं — पर पेपर किस भाषा में था, ये कोई नहीं पूछता।" | india | Haan | [MILU paper](https://huggingface.co/papers/2411.02538) |
| Launch से पहले AI को तोड़ने वाले: Red-teaming | "कुछ लोगों की नौकरी ही है — AI की सेफ्टी तोड़ना। Launch से पहले।" | safety | Nahi | [Multilingual jailbreak study, 2023](https://huggingface.co/papers/2310.02446) |
| AI बनाना एक बार, बिल रोज़: Inference का खर्चा | "AI बनाना एक बार का खर्चा है। तुम्हारा हर सवाल — रोज़ चलने वाला मीटर। और एक तय level के जवाब का मीटर करीब 2 साल में 280 गुना सस्ता हुआ।" | explainer | Nahi | [Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report) (GPT-3.5-level, MMLU 64.8%: $20 → $0.07 per million tokens, Nov 2022 → Oct 2024; task ke hisaab se 9–900x/saal) |
| तुम्हारी Reel तमिल में कैसे बोलती है? AI डबिंग | "Instagram पर अब तुम्हारी Reel तमिल, तेलुगु, बंगाली, कन्नड़ और मराठी में डब हो सकती है, तुम्हारी जैसी आवाज़ में और होंठ मिलाकर।" | format | Nahi | [Meta newsroom, Jan 2026](https://about.fb.com/news/2025/11/instagram-empowers-creators-to-go-global-with-local-voice-translations-and-fonts/) |
| एक सवाल, दो Prompt: AI से बेहतर जवाब कैसे (Prompt Lab) | "एक ही AI, एक ही सवाल। एक जवाब बेकार, दूसरा कमाल। फर्क कुछ आसान आदतों का है — जैसे example देना।" | format | Haan | [The Prompt Report, UMD-led survey, 2024](https://arxiv.org/pdf/2406.06608v5) (1,500+ papers, 58 text prompting techniques; few-shot/in-context examples ek badi category) |
| **(NEW)** "ChatGPT ने हमारी खबरें पढ़ीं" — ANI vs OpenAI *(स्टेशन: Data, Hafte 6; brief Sec 4.1)* | "भारत की एक news agency ने कहा — ChatGPT ने हमारी खबरों से पढ़ाई की। जुलाई 2026 में Delhi High Court ने अंतरिम तौर पर क्या कहा?" | news | Nahi | [LiveLaw, Jul 2026](https://www.livelaw.in/high-court/delhi-high-court/delhi-high-court-rejects-ani-copyright-suit-open-ai-chatgpt-542736) |

### सही / गलत / नॉर्मल

| Title | Hook | Type | Evergreen | Key source |
|---|---|---|---|---|
| DeepSeek ने 56 लाख डॉलर में AI बनाया? आधा सच | "'सिर्फ 56 लाख डॉलर में ChatGPT जैसा AI': सही, गलत, या आधा सच?" | myth-buster | Nahi | [DeepSeek-V3 report](https://arxiv.org/pdf/2412.19437) |
| DeepSeek ने सच में 6 मिलियन डॉलर में AI बनाया? *(DeepSeek cluster, merge)* | "'सिर्फ 6 मिलियन डॉलर में ChatGPT जैसा AI!' — नंबर लगभग सही है, मतलब गलत।" | myth-buster | Haan | [Epoch AI/Stanford cost study](https://huggingface.co/papers/2405.21015) |
| AI झूठ क्यों बोलता है? JEE वाली Negative Marking *(Top #1 ka Part 2: court cases)* | "AI के गलत जवाबों का इलाज? OpenAI के researchers ने JEE-NEET की negative marking गिनाई।" | myth-buster | Haan | [LiveLaw, 5 May 2026](https://livelaw.in/top-stories/use-of-ai-generated-fake-judgments-supreme-court-urges-bci-to-form-expert-panel-to-examine-issue-533023) |
| AI इतने भरोसे से गलत क्यों बोलता है? *(Top #1 jaisa, skip)* | "AI गलत जवाब इतने भरोसे से क्यों देता है? क्योंकि उसके exam में negative marking नहीं है।" | myth-buster | Haan | [HF Papers 2509.04664](https://huggingface.co/papers/2509.04664) |
| 'पक्का?' पूछते ही AI जवाब क्यों बदल देता है? *(Hafte 6)* | "AI ने सही जवाब दिया… तुमने बस इतना पूछा — 'पक्का?' — और एक Stanford study में करीब 15% मामलों में AI सही जवाब छोड़कर गलत पर चला गया।" | how-models-are-built | Haan | [SycEval, Stanford, AIES 2025](https://ojs.aaai.org/index.php/AIES/article/view/36598) (3 models, math + medical; kul sycophancy 58.19%, sahi→galat 14.66%; model-wise number mat bolo) |
| क्या AI में 'जान' है? सही, गलत और 'पता नहीं' | "AI ने लिखा — 'मुझे अकेलापन लगता है।' तो क्या उसमें सच में feelings हैं? जवाब ना 'हाँ' है, ना 'ना'।" | myth-buster | Haan | [Butlin, Long et al., 19 researchers, Aug 2023](https://arxiv.org/abs/2308.08708v1) (aaj ke AI systems ke conscious hone ki sambhavna kam; siddhant mein koi pakki rukaavat nahi. PDF se exact line lo) |
| क्या AI हर जवाब से पहले Internet देखता है? | "तुम्हें लगता है AI हर जवाब से पहले internet देखता है? कई बार वो याददाश्त से बोलता है — और उस याददाश्त की एक expiry date होती है, जो कई बार बताई गई date से भी पुरानी निकलती है।" | myth-buster | Haan | [Dated Data, Johns Hopkins, COLM 2024](https://arxiv.org/html/2403.12958v2) |
| AI से 1 सवाल = 1 बोतल पानी? असली नंबर *(Hafte 5)* | "'AI से एक सवाल पूछो तो एक बोतल पानी खत्म' — ये लाइन तुमने सुनी होगी। असली नंबर सुनोगे तो चौंक जाओगे… पर कहानी यहीं खत्म नहीं होती।" | myth-buster | Nahi | [Google Cloud, 21 Aug 2025](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference) (company ka data) |
| एक AI सवाल = 9 सेकंड TV की बिजली? *(Paani cluster, Part 2)* | "Google का दावा: Gemini पर एक आम text सवाल में 9 सेकंड TV से भी कम बिजली… तो फिर AI को gigawatts क्यों चाहिए?" | myth-buster | Nahi | [Google Cloud, 21 Aug 2025](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference) (median text prompt ~0.24 Wh, ~0.26 ml paani; coverage: [MIT Technology Review](https://www.technologyreview.com/2025/08/21/1122288/google-gemini-ai-energy/)) |
| AI सबकी नौकरी खा जाएगा? ATM वाली कहानी | "ATM आया तो सबने कहा — अब बैंक के cashier खत्म। पर अमेरिका में उसके बाद cashier की नौकरियाँ कई दशक तक बढ़ीं — फिर 2010 के बाद online banking से घटीं। मतलब: झटका एक बार में नहीं, धीरे-धीरे।" | myth-buster | Nahi | [BLS Occupational Outlook Handbook: Tellers](https://www.bls.gov/ooh/office-and-administrative-support/tellers.htm) (2024–34 mein −13% projected; branches technology se ghat rahi hain) + 1970 ~3 lakh → 2010 ~6 lakh: [U-Michigan STPP case study](https://stpp.fordschool.umich.edu/tap-case-study-library/automated-teller-machine-atm) |
| 2025 में AI ने developers को 19% धीमा किया — उन्हें लगा तेज़! | "2025 के एक experiment में AI ने experienced developers को 19% धीमा कर दिया… और उन्हें लगा वो 20% तेज़ हो गए!" | myth-buster | Nahi | [METR RCT, Jul 2025](https://huggingface.co/papers/2507.09089) |
| AI से YouTube कमाई: सही, गलत या नॉर्मल? | "'AI से वीडियो बनाओ, घर बैठे लाखों कमाओ' — ये लाइन तुमने सौ बार सुनी होगी। आज तीन ठप्पे तैयार हैं: सही, गलत, नॉर्मल।" | format | Nahi | [AndroidHeadlines, Jul 2026](https://www.androidheadlines.com/2026/07/youtube-monetization-rules-ai-slop-inauthentic-content.html) |
| **(NEW)** Free AI का असली दाम क्या है? *(Hafte 4 Mangal; brief Sec 4.1)* | "'AI तो free है!' — सही, गलत या नॉर्मल? Free है… पर किस शर्त पर?" | tools | Nahi | [Outlook Business, Oct 2025](https://www.outlookbusiness.com/artificial-intelligence/openai-offers-free-one-year-chatgpt-go-access-in-india-starting-november-4) + [Stanford HAI, 15 Oct 2025](https://hai.stanford.edu/news/be-careful-what-you-tell-your-ai-chatbot) |

### Made in India AI — रिपोर्ट कार्ड

| Title | Hook | Type | Evergreen | Key source |
|---|---|---|---|---|
| ₹65 घंटा: भारत का AI 'सुपर-इंजन' किराए पर *(GPU cluster, merge)* | "AI बनाने वाला इंजन… औसतन करीब ₹65 घंटे के किराए पर? भारत में ये सच में हो रहा है।" | explainer | Nahi | [PIB explainer, Oct 2025](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/oct/doc20251015666901.pdf) |
| हिंदी में भाषण, तमिल में सुनाई दिया — AI ने कैसे? (Bhashini) | "17 दिसंबर 2023, वाराणसी। मंच पर भाषण हिंदी में — और सामने बैठे तमिल लोग earphone में उसे तमिल में सुन रहे थे। Live।" | how-models-are-built | Haan | [Tribune, 17 Dec 2023](https://www.tribuneindia.com/news/india/a-first-pm-modi-uses-ai-for-real-time-translation-of-hindi-speech-into-tamil-572863) |
| 'Made in India chip' — बनी या सिर्फ पैक हुई? *(Hafte 5)* | "'भारत ने अपनी chip बना ली!' — ये headline आधी सही है। बाकी आधी 40 सेकंड में।" | myth-buster | Nahi | [Bloomberg via Angel One, Jul 2026](https://www.angelone.in/news/market-updates/tata-electronics-to-start-india-s-first-chip-fab-with-90nm-technology-bloomberg-report) |
| India AI रिपोर्ट कार्ड: 38,000 GPU — पास या फेल? *(Hafte 4)* | "टारगेट था 10,000 GPU। सरकार के मुताबिक भारत पहुंच गया 38,000 पर। लेकिन इस रिपोर्ट कार्ड में एक लाल निशान भी है।" | format | Nahi | [PIB, 17 Feb 2026](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026217795001.pdf) |
| 10 करोड़ भारतीय हर हफ्ते AI से बात करते हैं | "फरवरी 2026 तक, OpenAI CEO के मुताबिक, हर हफ्ते करीब 10 करोड़ भारतीय एक ही AI ऐप इस्तेमाल कर रहे थे। पर इस नंबर का असली मतलब?" | format | Nahi | [TechCrunch, 15 Feb 2026](https://www.techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/) |
| Claude के data में India नंबर 2… per person 101वाँ? *(skip for now: ek company ka, chhota aur coder-heavy slice)* | "एक बड़े AI, Claude, के इस्तेमाल में India दुनिया में नंबर 2 है… लेकिन per person देखो तो 101वाँ!" | india | Nahi | [Anthropic India brief, Feb 2026](https://www.anthropic.com/research/india-brief-economic-index) |
| ASHA दीदी का AI साथी — जो न जाने तो ANM से पूछे | "राजस्थान के एक pilot में ASHA दीदियों ने WhatsApp पर AI से सवाल पूछे — और AI अटका, तो जवाब ANM दीदी ने दिया।" | india | Haan | [ASHABot paper, 2024](https://huggingface.co/papers/2409.10913) |
| 105 अरब का Indian AI, पर हर token पर सिर्फ ~10 अरब काम *(MoE cluster, merge)* | "India के एक open AI model में करीब 105 अरब parameters हैं… पर हर token पर सिर्फ करीब 10 अरब काम करते हैं।" | how-models-are-built | Nahi | [Sarvam-105B card](https://huggingface.co/sarvamai/sarvam-105b) |
| Tractor के शोर में Odia सवाल: India का असली AI test | "Tractor का शोर, पीछे TV, और Odia में किसान का सवाल — AI के लिए असली परीक्षा यही है।" | india | Haan | [FarmerChat ASR paper, Sep 2026](https://huggingface.co/papers/2609.20504) |

### AI का इतिहास — वो एक दिन

| Title | Hook | Type | Evergreen | Key source |
|---|---|---|---|---|
| 1950 का AI exam — जो 75 साल बाद AI ने दिया | "1950 में एक आदमी ने मशीनों के लिए एक exam बनाया… और 75 साल बाद एक AI उसमें असली इंसानों से ज़्यादा 'इंसान' लगा — पर एक शर्त पर।" | history | Haan | [Jones & Bergen, Mar 2025](https://arxiv.org/html/2503.23674v1) |
| 'Artificial Intelligence' — ये नाम आया कहाँ से? *(Raj Reddy ke saath 2-part, Hafte 6)* | "'Artificial Intelligence' — ये नाम पहली बार किसी lab report में नहीं, पैसों की एक अर्ज़ी में लिखा मिलता है।" | history | Haan | [Dartmouth proposal, 1955](https://mlanthology.org/misc/1955/mccarthy1955misc-proposal) |
| कटूर गाँव से Turing Award तक: राज रेड्डी *(Hafte 7)* | "Computer science का सबसे बड़ा सम्मान जीतने वाले पहले एशियाई मूल के इंसान — आंध्र प्रदेश के एक छोटे से गाँव से थे।" | india | Haan | [ACM Turing Award 1994](https://awards.acm.org/award_winners/feigenbaum_4167235) |
| 1966 का chatbot जिससे लोग दिल की बात करने लगे (ELIZA) | "1966 का एक chatbot — जो ज़्यादातर तुम्हारी ही बात घुमाकर लौटा देता था — फिर भी लोग उससे दिल की बातें करने लगे।" | safety | Haan | [ELIZA comeback, Jan 2025](https://i-programmer.info/news/82-heritage/17765-eliza-makes-a-comeback.html) |
| 1958 में भी कहा था 'AI सब कर लेगा' — फिर आई सर्दी | "1958 में अख़बार में छपा: Navy को उम्मीद है कि ये मशीन चलेगी, बोलेगी, देखेगी, लिखेगी… और अपने होने का एहसास भी करेगी। 68 साल हो गए।" | myth-buster | Haan | Original: UPI wire, Washington, 7 Jul 1958 → *New York Times*, 8 Jul 1958, p. 25, "New Navy Device Learns By Doing". Verified retelling: [Cornell Chronicle](https://news.cornell.edu/node/313946). Exact wording sirf original scan dekhkar bolo |
| Deep Blue ने Kasparov को हराया — फिर आया गुकेश *(Diwali ke baad, Hafte 8)* | "1997 में एक मशीन ने दुनिया के chess champion को हरा दिया… और 2024 में उसी champion का एक record एक 18 साल के भारतीय ने तोड़ दिया।" | history | Haan | [SI, Dec 2024](https://www.si.com/more-sports/india-s-gukesh-dommaraju-youngest-world-chess-champion) |
| Move 37: वो चाल जो 10,000 में 1 इंसान चलता | "2016 में एक AI ने ऐसी चाल चली जो DeepMind के अंदाज़े से 10,000 में सिर्फ़ 1 इंसान चलता — और उस चाल ने सदियों की Go समझ उलट दी।" | history | Haan | [DeepMind AlphaGo](https://deepmind.google/research/alphago/) |
| 2 GPU, 1 bedroom — और AI बदल गया | "आज वाले AI की नींव का एक बड़ा पल किसी बड़ी कंपनी के data center में नहीं — एक researcher के घर के bedroom में, दो graphics cards पर आया था।" | how-models-are-built | Haan | [Computer History Museum, Mar 2025](https://computerhistory.org/blog/chm-releases-alexnet-source-code/) |
| 12 जून 2017: वो पेपर जिसने ChatGPT को 'T' दिया *(Top #9 jaisa, skip)* | "ChatGPT में जो 'T' है ना, वो 12 जून 2017 को आए एक रिसर्च पेपर से निकला। और उसके 8 लेखकों में से दो ने भारत में इंजीनियरिंग पढ़ी थी।" | format | Haan | [arXiv 1706.03762](https://arxiv.org/abs/1706.03762) |

### AI या असली?

| Title | Hook | Type | Evergreen | Key source |
|---|---|---|---|---|
| AI वाली fake वीडियो पर अब label ज़रूरी — नया नियम *(Hafte 3)* | "AI से बनी नकली वीडियो पर भारत ने नियम कड़े कर दिए — असली जैसी दिखे तो label ज़रूरी, और कुछ मामलों में 3 घंटे में हटाना होगा।" | safety | Nahi | [Hogan Lovells, Feb 2026](https://www.hoganlovells.com/en/publications/india-introduces-mandatory-labelling-for-ai-and-3hour-takedown-for-illegal-content) (Part 2, alag reel: bina sahmati wali nudity/deepfake sexual imagery ki shikayat par 2 ghante ki window, helpline-first, zero visuals: [Outlook India](https://www.outlookindia.com/national/centre-cuts-sensitive-content-takedown-window-to-2-hours-all-you-need-to-know); gazette text se scope check karo) |
| खुद लिखा, फिर भी 'AI-written'? Detector का सच | "तुमने assignment खुद लिखा… और AI detector ने बोल दिया 'ये AI ने लिखा है।' एक study में ये गलती उनके साथ कहीं ज़्यादा हुई जिनकी पहली भाषा English नहीं थी।" | safety | Haan | [Liang et al., Stanford 2023](https://huggingface.co/papers/2304.02819) |
| AI Chatbot को ये 5 चीज़ें कभी मत बताना *(Free AI cluster, Part 2)* | "Stanford के researchers ने 6 बड़ी AI companies की privacy policies पढ़ीं — सबकी policies में तुम्हारी chats default रूप से model सुधारने में इस्तेमाल होती दिखीं। अब सोचो — तुमने उसमें क्या-क्या लिखा है?" | safety | Nahi | [Stanford HAI, 15 Oct 2025](https://hai.stanford.edu/news/be-careful-what-you-tell-your-ai-chatbot) (Amazon, Anthropic, Google, Meta, Microsoft, OpenAI; US policies) |
| Viral photo असली या AI? Detector का सच | "एक बड़े test में deepfake पकड़ने वाले आधे से ज़्यादा open-source detectors का score 60% से ऊपर नहीं गया — और सबसे कमज़ोर तो बिल्कुल सिक्का उछालने जितना था।" | safety | Haan | [Deepfake detectors in the wild, 2025](https://huggingface.co/papers/2507.21905) |
| AI वाला 'पैसा डबल' ad? स्कैम पहचानो *(1930 ka source Top #2 wala)* | "मशहूर चेहरा, जानी-पहचानी आवाज़, और लाइन — 'मेरे AI app से पैसा डबल करो।' आज AI से ऐसे नकली ad और नकली reviews बनाना आसान है… तो पहचानोगे कैसे?" | safety | Haan | [Microsoft Cyber Signals 9](https://www.microsoft.com/en-us/security/blog/2025/04/16/cyber-signals-issue-9-ai-powered-deception-emerging-fraud-threats-and-countermeasures/) |
| AI फोटो में 'तिल' कहां से आया? ट्रेंड डिकोड | "एक लड़की ने AI से साड़ी वाली फोटो बनवाई। उसका दावा है कि AI ने हाथ पर वो तिल बना दिया जो उसकी अपलोड की हुई फोटो में दिख ही नहीं रहा था। जासूसी? चलो डिकोड करते हैं।" | format | Nahi | [Storyboard18, Sep 2025](https://www.storyboard18.com/digital/ips-officer-issues-cyber-alert-amid-google-geminis-nano-banana-ai-craze-80983.htm) |
| YouTube अब खुद पकड़ेगा AI वीडियो — लेबल का मतलब? *(Label cluster, Part 2)* | "अब YouTube असली दिखने वाले AI वीडियो खुद पकड़कर उन पर लेबल लगा रहा है। पर ध्यान से सुनो, 'AI लेबल' का मतलब 'फेक' नहीं होता।" | format | Nahi | [Quartz, 27 May 2026](https://qz.com/youtube-automatic-ai-detection-labels-videos-052726) |
| **(NEW)** Diwali का 'सरकारी gift' — AI या असली? *(Thu 5 Nov; brief Sec 4.1)* | "'सरकार Diwali पर ₹10,000 दे रही है' — ऐसा video आया? पिछली Diwali ऐसे videos AI वाले content से बने निकले थे।" | safety | Nahi | [Factly, 2025](https://factly.in/the-indian-government-is-not-distributing-₹10000-for-diwali-2025) + [News On AIR / PIB Fact Check, 26 Oct 2025](https://www.newsonair.gov.in/government-debunks-fake-post-claiming-%E2%82%B920000-giveaway-by-indian-post/) |
| **(NEW)** 'आप Digital Arrest में हैं' — पुलिस video call पर arrest नहीं करती *(Hafte 5; brief Sec 4.1)* | "'मैं CBI से बोल रहा हूँ, camera on रखो, आप digital arrest में हैं।' रुको — सरकारी advisory साफ कहती है: CBI, police, customs, ED या judges video call पर arrest नहीं करते।" | safety | Haan | [Tribune, I4C advisory, Oct 2024](https://www.tribuneindia.com/news/india/cbi-ed-dont-nab-via-video-calls-advisory-to-curb-digital-arrest/) + [MHA to Rajya Sabha, 12 Mar 2025](https://www.freepressjournal.in/india/3962-skype-ids-83668-whatsapp-accounts-used-for-digital-arrest-blocked-so-far-ministry-of-home-affairs-to-rajya-sabha) |

### AI का कल

| Title | Hook | Type | Evergreen | Key source |
|---|---|---|---|---|
| AGI आ गया? पहले परिभाषा तो तय करो *(AGI cluster, Part 1)* | "'AGI आ गया!' रुको। AGI की एक तय परिभाषा तक नहीं है।" | future | Nahi | [Microsoft blog, 28 Oct 2025](https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/) |
| AI का पहला असर: freshers की पहली नौकरी पर? *(Hafte 7; Top #8 isi ki taraf ishara karta hai)* | "AI का पहला झटका शायद layoffs नहीं… freshers की पहली नौकरी है।" | news | Nahi | [Stanford Digital Economy Lab, Aug 2026](https://digitaleconomy.stanford.edu/news/canariesaug26/) (India data abhi nahi: "अमेरिका में" bolo) |
| Chatbot बोलता है, Agent करता है — फर्क समझो *(Agents cluster, Part 2)* | "Chatbot तुम्हें बिल भरने का तरीका बताता है। Agent बिल भर देता है।" | explainer | Nahi | [METR note, Mar 2026](https://metr.org/notes/2026-03-20-impact-of-modelling-assumptions-on-time-horizon-results/) |
| Robot 34% काम कर सकता है… पर सस्ता सिर्फ 0.3% में *(kam priority; "एक company का research" tag)* | "Robots, theory में, अमेरिका के कुल काम के करीब एक-तिहाई समय वाले tasks कर सकते हैं… पर इंसान से सस्ते? सिर्फ 0.3% में।" | future | Nahi | [Anthropic, 30 Sep 2026](https://www.anthropic.com/research/what-work-can-robots-do) |
| AGI का रिपोर्ट कार्ड: GPT-5 को 57%, याददाश्त में 0 *(AGI cluster, Part 2)* | "2025 के AGI रिपोर्ट कार्ड में GPT-5 को 57% मिले… और 'याददाश्त' में ज़ीरो।" | future | Nahi | [AGI definition paper, Oct 2025](https://huggingface.co/papers/2510.18212) |
| AI मेरी नौकरी ले लेगा? WEF के नंबर का सच | "'AI मेरी नौकरी खा जाएगा?' — दुनिया की 1,000 से ज़्यादा बड़ी कंपनियों से पूछा गया कि 2030 तक नौकरियों का क्या होगा। AI वाला जवाब: करीब 1.1 करोड़ नई नौकरियां, करीब 90 लाख खत्म।" | format | Haan | [WEF Future of Jobs 2025](https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/) |
| **(NEW)** तुम्हारा data, AI और नया कानून: DPDP Rules *(Hafte 5 Shani; brief Sec 4.1)* | "नवंबर 2025 में भारत ने data protection के नियम notify किए — पर उनके बड़े हिस्से धीरे-धीरे, मई 2027 तक लागू होंगे। तब तक तुम्हें क्या पता होना चाहिए?" | news | Nahi | [PIB, Nov 2025](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf) |

---

### 4.1 Naye verified ideas (10 Oct 2026 ko WebSearch se check kiye)

Har idea ke facts is run mein khud verify kiye gaye. Jahan sirf secondary source mila, wahan likha hai.

**N1. Free AI का असली दाम क्या है?** · सही/गलत/नॉर्मल · Hafte 4, Tue 3 Nov
- **Hook:** "'AI तो free है!' — सही, गलत या नॉर्मल? Free है… पर किस शर्त पर?"
- **Beats:** (1) Daava card + teen thappe. (2) SAHI: "भारत में कई paid AI plans free मिले — 4 नवंबर 2025 से sign up करने वालों को ChatGPT Go 12 महीने free, Airtel के customers को Perplexity Pro 12 महीने, और Jio के Unlimited 5G users को Google का AI Pro plan 18 महीने।" (3) NORMAL, shart 1: "Free साल खत्म होते ही, reports के मुताबिक, plan अपने-आप paid हो सकता है — ChatGPT Go का regular दाम ₹399 महीना। जिन्होंने नवंबर 2025 में शुरू किया, उनका साल अब पूरा हो रहा है।" (4) NORMAL, shart 2: "और Stanford के researchers के मुताबिक, 6 बड़ी US AI companies की policies में तुम्हारी chats default रूप से model सुधारने में इस्तेमाल होती दिखीं।" (5) Kya karo: "Renewal date पर reminder लगाओ, settings में data/training वाला toggle देखो, और chat में Aadhaar, OTP, bank details कभी मत डालो।" (6) CTA: "उस दोस्त को भेजो जिसने free वाला plan लिया था।"
- **Visuals:** 2D only, `stamp` + calendar reminder + toggle switch. Brand logos nahi, sirf text naam. AI clip 0.
- **Dhyan rakho:** Brand-neutral raho, "कोई sponsorship नहीं" description mein. Free saal activation ki tareekh se ginta hai, isliye sabka saal Nov 2026 mein khatam nahi hota; "जिन्होंने नवंबर 2025 में शुरू किया" bolo. Auto-renew ki baat secondary reports se hai: publish wale din OpenAI help page aur apne account ka billing screen dekho. ChatGPT Go offer ki sign-up window kab band hui, ye official source mein nahi mila. Jio offer ki eligibility (pehle 18–25 saal, baad mein sabhi Unlimited 5G) sources mein alag hai: MyJio app se check karo. Stanford study US companies ki policies par hai aur "appear to" wali bhasha use karti hai: "दिखीं" bolo, "करती हैं" nahi.
- **Sources:** [Outlook Business: ChatGPT Go free 1 saal, 4 Nov 2025 se](https://www.outlookbusiness.com/artificial-intelligence/openai-offers-free-one-year-chatgpt-go-access-in-india-starting-november-4) · [Smartprix: free saal ke baad ₹399/mahina, unless cancel (secondary)](https://smartprix.com/bytes/one-year-of-chatgpt-go-for-free-heres-how-to-claim-it) · [Gizbot: free 12 mahine ke baad charge se kaise bacho (secondary)](https://www.gizbot.com/amphtml/how-to/how-to-avoid-getting-charged-for-chatgpt-go-after-the-free-12-month-period-in-india-120399.html) · [Outlook Business: Airtel–Perplexity Pro 12 mahine](https://www.outlookbusiness.com/corporate/airtel-beats-jio-to-ai-chatbot-punch-with-perplexity-tie-up) · [MediaNama: Jio–Google AI Pro 18 mahine](https://www.medianama.com/2025/11/223-google-reliance-jio-free-ai-pro-plan-18-months/) · [Stanford HAI, 15 Oct 2025](https://hai.stanford.edu/news/be-careful-what-you-tell-your-ai-chatbot)

**N2. Diwali का 'सरकारी gift' — AI या असली?** · AI या असली? · Thu 5 Nov (Dhanteras se ek din pehle)
- **Hook:** "'सरकार Diwali पर ₹10,000 दे रही है' — ऐसा video आया? पिछली Diwali ऐसे videos AI वाले content से बने निकले थे।"
- **Beats:** (1) FAKE stamp, dhundhla silhouette. (2) "2025 में fact-checkers ने पाया — ऐसी कोई सरकारी Diwali scheme नहीं थी, और videos में AI से बना content लोगों को एक संदिग्ध website पर भेज रहा था।" (3) "अक्टूबर 2025 में PIB Fact Check ने India Post के नाम पर ₹20,000 वाले giveaway post को भी पूरी तरह fake बताया।" (4) Teen sawaal (Top #2 wale): offer itna bada? official channel ya forward/ad? link ka pata? Plus: "OTP, Aadhaar, bank details कभी नहीं।" (5) "सरकारी दावा → PIB Fact Check WhatsApp। पैसा गया → 1930 / cybercrime.gov.in। सिर्फ शक वाला SMS/WhatsApp → Chakshu।" (6) CTA: "Diwali पर ये reel family group में — सबसे अच्छा gift।"
- **Visuals:** Sirf 2D (series rule), diya + FAKE stamp, helpline card. AI clip 0.
- **Dhyan rakho:** 2025 ke cases ko 2025 ka hi batao, "इस साल भी" tabhi jab 2026 ka PIB/I4C/fact-checker case mile (publish se pehle search karo). Kisi brand ka naam ya logo nahi. CERT-In ki 2024 shopping advisory background ke liye hai (fake e-commerce sites); script mein uski exact tips tabhi jab original advisory padh lo.
- **Sources:** [Factly: ₹10,000 Diwali 2025 videos fake, AI content](https://factly.in/the-indian-government-is-not-distributing-₹10000-for-diwali-2025) · [Newschecker: koi official announcement nahi](https://www.newschecker.in/fact-check/pm-modi-announced-a-%e2%82%b910000-diwali-cash-gift-no-viral-claim-is-fake) · [News On AIR: PIB Fact Check, India Post ₹20,000 giveaway fake, 26 Oct 2025](https://www.newsonair.gov.in/government-debunks-fake-post-claiming-%E2%82%B920000-giveaway-by-indian-post/) · [Business Today: CERT-In Diwali shopping advisory, Oct 2024](https://www.businesstoday.in/amp/personal-finance/news/story/dhanteras-diwali-shopping-advisory-issued-for-online-shopping-to-prevent-frauds-451672-2024-10-26) · Chakshu aur 1930 ke sources Top #4 mein.

**N3. 'आप Digital Arrest में हैं' — पुलिस video call पर arrest नहीं करती** · AI या असली? · Hafte 5, Thu 12 Nov
- **Hook:** "'मैं CBI से बोल रहा हूँ, camera on रखो, आप digital arrest में हैं।' रुको — सरकारी advisory साफ कहती है: CBI, police, customs, ED या judges video call पर arrest नहीं करते।"
- **Beats:** (1) Scene: generic video-call frame, "uniform" silhouette (chehra nahi). (2) Advisory card: "CBI/Police/Customs/ED/Judges DO NOT arrest you on video call" (I4C, Oct 2024). (3) Scale: "सरकार ने Rajya Sabha में बताया — मार्च 2025 तक I4C ने digital arrest में इस्तेमाल हुए 3,962 से ज़्यादा Skype IDs और 83,668 WhatsApp accounts block किए।" (4) Laal jhande: dar, "किसी को मत बताना", camera on rakhne ka dabav, "bail" ke naam par paisa. (5) Kya karo: call kaato, local police se khud baat karo; paisa gaya → 1930 / cybercrime.gov.in; shak wali call → Chakshu. (6) CTA: "ये reel घर के बुज़ुर्गों तक पहुँचाओ।"
- **Visuals:** Sirf 2D. AI clip 0.
- **Dhyan rakho:** Is scam mein AI ya deepfake use hone ka **koi primary source nahi mila**, isliye reel mein AI ka daava mat karo. Series intro thoda badlo: "AI हो या न हो — ये scam पहचानो।" SIM/IMEI wale aankde (7.81 lakh SIM) kis sadan mein diye gaye, sources mein alag hai, isliye mat bolo. "Digital arrest kanoon mein hota hi nahi" jaisi line tabhi jab PIB/MHA ka exact text mile.
- **Sources:** [Tribune: I4C advisory, Oct 2024](https://www.tribuneindia.com/news/india/cbi-ed-dont-nab-via-video-calls-advisory-to-curb-digital-arrest/) · [ETV Bharat: I4C advisory](https://www.etvbharat.com/en/!bharat/cbi-ed-police-dont-arrest-people-through-video-calls-indian-cyber-crime-coordination-centre-enn24100602996) · [Free Press Journal: MHA to Rajya Sabha, 12 Mar 2025](https://www.freepressjournal.in/india/3962-skype-ids-83668-whatsapp-accounts-used-for-digital-arrest-blocked-so-far-ministry-of-home-affairs-to-rajya-sabha) · [ETV Bharat: same answer](https://www.etvbharat.com/en/!bharat/government-india-skype-ids-whatsapp-accounts-digital-arrest-centre-enn25031204310) · Chakshu/1930: Top #4 ke sources.

**N4. 'Open' AI के दो मतलब: Open-weights vs Open-source** · AI का ABC · Hafte 5, Mon 9 Nov
- **Hook:** "Sarvam-105B 'open' है, Param2 भी 'open' — पर दोनों का 'open' एक जैसा नहीं।"
- **Beats:** (1) Weights yaani model ka "पका हुआ खाना": download karke chala sakte ho. (2) License batata hai kya kar sakte ho: Sarvam-105B Apache 2.0 (commercial use bhi), Param2 non-commercial. (3) Open-source AI ki OSI wali definition (Oct 2024): use, study, modify, share ki azaadi, aur weights ke saath code aur training data ki itni jaankari ki koi "substantially equivalent" system dobara bana sake, yaani poori recipe. (4) OSI ki shuruaati jaanch mein Pythia, OLMo, T5 jaise models paas hue; Llama 2 aur Mixtral nahi, kyunki zaroori hisse missing the. (5) Tumhare liye matlab: "Open" sunte hi license padho. (6) CTA: "Comment karo: tumhare liye 'open' ka matlab kya hai?"
- **Visuals:** 2D `tiffin` (khaana vs recipe card), license cards. AI clip 0.
- **Dhyan rakho:** Sarvam-105B ya Param2 OSI definition par paas hain ya nahi, ye kisi ne verify nahi kiya: ye daava mat karo. OSI ki definition par vivad bhi hai aur OSI ne baad mein ise "starting point" kaha; "official, sabki maani hui" mat bolo, "OSI की definition" bolo.
- **Sources:** [OSI announcement, 28 Oct 2024](https://opensource.org/blog/the-open-source-initiative-announces-the-release-of-the-industrys-first-open-source-ai-definition) · [OSI Final Board Report (validated models)](https://opensource.org/ai/final-board-report) · [Sarvam-105B card (Apache)](https://huggingface.co/sarvamai/sarvam-105b) · [Param2 card (non-commercial)](https://huggingface.co/bharatgenai/Param2-17B-A2.4B-Thinking)

**N5. "ChatGPT ने हमारी खबरें पढ़ीं" — ANI vs OpenAI** · AI की फैक्ट्री (स्टेशन: Data — किसका data?) · Hafte 6, Mon 16 Nov
- **Hook:** "भारत की एक news agency ने कहा — ChatGPT ने हमारी खबरों से पढ़ाई की। जुलाई 2026 में Delhi High Court ने अंतरिम तौर पर क्या कहा?"
- **Beats:** (1) Factory ka "data" station: AI internet ke text se padhta hai. (2) ANI ka case: training mein uski khabrein. (3) 24 Jul 2026: court ne ANI ki **interim injunction** (yaani case chalte-chalte rok) ki maang thukra di; reports ke mutabik court ne kaha ki is stage par prima facie case nahi banta aur rok se public ko bhi nuksaan hota. (4) Imaandari: "ये आखिरी फैसला नहीं — मुख्य मुकदमा अभी चल रहा है।" (5) Sawaal: "AI को किसके data से पढ़ना चाहिए, और बदले में क्या मिले?" CTA: comment.
- **Visuals:** 2D conveyor, gavel line-art, "INTERIM" stamp. Koi logo nahi. AI clip 0.
- **Dhyan rakho:** Ye interim order hai, final verdict nahi; "OpenAI जीत गया" mat bolo. Court ki legal reasoning (Copyright Act ka fair dealing, outputs mein "substantial similarity" nahi) sirf secondary reports se mili hai aur early reports ke waqt detailed order aana baaki tha: script se pehle order ka text padho. Judge ka naam reports mein Justice Amit Bansal hai, par reel mein naam ki zaroorat nahi.
- **Sources:** [LiveLaw, Jul 2026](https://www.livelaw.in/high-court/delhi-high-court/delhi-high-court-rejects-ani-copyright-suit-open-ai-chatgpt-542736) · [CMS AI & copyright case tracker](https://cms.law/en/int/publication/artificial-intelligence-and-copyright-case-tracker/ani-media-pvt-ltd-v.-openai-opco-llc) · [Mondaq analysis](https://www.mondaq.com/indias-first-ai-copyright-ruling-the-delhi-high-court-in-ani-v-openai/1829216)

**N6. तुम्हारा data, AI और नया कानून: DPDP Rules** · AI का कल · Hafte 5, Sat 14 Nov (notification ke ek saal par)
- **Hook:** "नवंबर 2025 में भारत ने data protection के नियम notify किए — पर उनके बड़े हिस्से धीरे-धीरे, मई 2027 तक लागू होंगे। तब तक तुम्हें क्या पता होना चाहिए?"
- **Beats:** (1) Sawaal sticker: "मेरा data AI में जा रहा है?" (2) DPDP yaani Digital Personal Data Protection: Act 2023, Rules 14 Nov 2025 ko notify. (3) Timeline (`calendar-flip`): kuch hisse turant; "consent manager" wala framework ~1 saal baad (Nov 2026 ke aaspaas); notice-consent jaisi zyaadatar badi zimmedariyan ~18 mahine baad (May 2027 ke aaspaas). (4) Consent yaani sahmati: "Data लेने से पहले साफ बताना और पूछना" ka idea. (5) Abhi kya karo: app permissions aur chatbot settings dekho (N1 se link). (6) CTA: save.
- **Visuals:** 2D calendar timeline, `report-card` (✓ notify ho gaye, ✗ abhi poore lagu nahi). AI clip 0.
- **Dhyan rakho:** Sources rule numbers par aapas mein alag hain (kaunsa rule turant, kaunsa baad mein), isliye reel mein rule number mat bolo, sirf "kuch hisse / ~1 saal / ~18 mahine". Viewer ke adhikaaron ki list (access, correction, erasure, shikayat) tabhi bolo jab Act ka gazette text padh lo; is run mein wo check nahi hua. Ye kanooni salah nahi, "जानकारी" hai, screen par likho.
- **Sources:** [PIB document, Nov 2025](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf) · [Mondaq: phases, consent managers ~12 mahine](https://www.mondaq.com/india/privacy-protection/1708830/dpdp-act-compliance-mandate) · [Lawrbit: phase table](https://www.lawrbit.com/?p=9599)

---

## 5. Posting plan (launch se 6 hafte)

**Kyun badla:** Hafta 1 Mon 12 Oct se shuru hai, plan ke sirf 2–3 din baad. Ek creator ke liye har hafte 5 reels, har ek mein naya 2D + 3D + voiceover + publish-day check, bahut bhaari hai, aur repo mein abhi sirf 2 scenes hain (`explainer-khaad.html`, `hormuz.html`).

**Rasta (recommended):**
1. **Pehle 5 reusable, parameterised templates** `animation/scenes/` mein (cream/orange theme, JSON ya URL params se chalein, `explainer-khaad.html` ki style mein):
   - `stamp.html`: सही / गलत / नॉर्मल / आधा सच / FAKE thappe, claim card ke saath. *(pehli zarurat: Wed 14 Oct, #1)*
   - `tiffin.html`: nested dabbe / thali-katori. *(pehli zarurat: Mon 12 Oct, #6)*
   - `bars3d.html`: JSON se 3D bar chart (labels, values, source tag, version/date tag), plain grid par, koi map nahi. *(Mon 19 Oct, #3)*
   - `report-card.html`: हरा ✓ / लाल ✗ rows. *(Wed 28 Oct, #10)*
   - `calendar-flip.html`: date cards / timeline. *(Wed 14 Oct, #1 ke birthday cards)*
   Sat–Sun 10–11 Oct: `tiffin` + `stamp` + `calendar-flip` (Hafta 1 ke liye). Hafta 1–2 ke beech: `bars3d` + `report-card`.
2. **Hafta 1–2: sirf 3 reels/hafta (Mon/Wed/Fri).** In 6 reels ke script aur fact-check 9–10 Oct ko ho chuke hain. Saath-saath Hafta 3 ki reels bank karo.
3. **Hafta 3 se 5 reels/hafta tabhi** jab Sun 25 Oct tak kam se kam 4 finished reels bank mein hon. Warna 3/hafta (Mon/Wed/Fri) par raho aur neeche ki queue ek-ek aage khiskao.
4. **Rhythm (Hafta 3 se):** **Somvaar** AI का ABC / AI की फैक्ट्री (Hafte 3–4 dono फैक्ट्री, kyunki launch ke 2 hafte sirf ABC the; phir baari-baari, फैक्ट्री kam se kam har 2 hafte mein 1), **Mangalvaar** सही/गलत/नॉर्मल, **Budhvaar** Made in India AI, **Guruvaar** AI या असली?, **Shanivaar** AI का इतिहास / AI का कल (baari-baari).

| Hafta | Somvaar | Mangalvaar | Budhvaar | Guruvaar | Shukravaar | Shanivaar |
|---|---|---|---|---|---|---|
| **1** (12–17 Oct) · 3/hafta | **Top #6** AI, ML, DL, GenAI — 4 डिब्बे *(ABC, channel opener)* | — | **Top #1** AI गलत जवाब कॉन्फिडेंस से क्यों? | — | **Top #2** मंत्री का फेक वीडियो | — |
| **2** (19–24 Oct) · 3/hafta | **Top #3** हिंदी पर AI का टैक्स *(ABC)* | — | **Top #7** 'ChatGPT को टक्कर'? Sarvam का सच | — | **Top #4** 3 सेकंड की आवाज़ | — |
| **3** (26–31 Oct) | AI मॉडल कैसे बनता है? 6 स्टेप *(फैक्ट्री, `tools_models-01`)* | **Top #5** AI से सीखो, कुंजी मत बनाओ *("नॉर्मल" thappe ke saath)* | **Top #10** मानसून SMS, 3.9 करोड़ किसान | AI वाली fake वीडियो पर label ज़रूरी (`india-06`) | — | **Top #8** थाली-कटोरी *(AI का कल)* |
| **4** (2–7 Nov) · Diwali hafta | वेब-डेटा में हिंदी ~0.2% *(फैक्ट्री, `tools_models-02`)* | **(NEW) N1** Free AI का असली दाम | India AI रिपोर्ट कार्ड: 38,000 GPU (`trends_format-05`) | **(NEW) N2** Diwali का 'सरकारी gift' *(5 Nov)* | — (Dhanteras) | **Top #9** ChatGPT का 'T' *(इतिहास)* |
| **5** (9–14 Nov) | **(NEW) N4** Open-weights vs Open-source *(ABC)* | AI से 1 सवाल = 1 बोतल पानी? (`myths_safety-05`) | Made in India chip — बनी या पैक हुई? (`india-07`) | **(NEW) N3** Digital arrest | — | **(NEW) N6** DPDP Rules *(AI का कल)* |

**Hafta 6–8 ki queue:** Mon 16 Nov **(NEW) N5** ANI vs OpenAI (फैक्ट्री) → 'पक्का?' sycophancy (SycEval) → Bhashini / ASHA bot (Made in India) → `myths_safety-12` AI वाला 'पैसा डबल' ad (AI या असली?) → `history-02` 'AI' नाम कहाँ से (Sat 21 Nov, cliffhanger) → `history-03` Raj Reddy (agle Budhvaar) → `basics-10` Agent/MCP (ABC) → `future_jobs-05` Freshers (Sat 28 Nov, AI का कल) → `history-06` Deep Blue → गुकेश (Sat 5 Dec). Saath mein `basics-08` context window, `myths_safety-06` detector, `future_jobs-09` AGI report card.

**Plan ke saath notes**
- **Diwali:** Dhanteras Fri 6 Nov, Diwali Sun 8 Nov 2026. Thu 5 Nov ki reel Diwali-specific scam reel hai (sirf verified PIB/fact-checker cases). Deep Blue wali history reel festival ke baad. 6–9 Nov ke aaspaas engagement gir sakta hai, us hafte ke numbers baaki hafton se compare mat karna.
- **Linking:** Hafta 2 ki Sarvam reel ke baad Hafta 4 ka GPU report card aur Hafta 5 ka open-weights reel aata hai, wahan "Sarvam wali reel dekhi?" bol sakte ho. Hafta 2 ki tokens reel ka sequel Hafta 4 ki "Hindi ~0.2%" reel hai. Top #8 freshers reel ki taraf ishara karta hai, par teaser rule ke hisaab se.
- **Teaser rule:** "अगली reel में…" tabhi bolo jab wo reel ban chuki ho aur uski date pakki ho. Warna sirf "Follow करो" bolo. Isliye kai verified scripts ke teaser CTAs badalne padenge.
- **Production rhythm:** Hafta 3 se script aur fact-check ek hafta pehle. AI clips us hafte ki saari reels ke liye ek saath generate karo. Publish wale din "re-check" list (Sec 7, rule 8) chalao.
- **Hormuz scene:** Theek ho gaya (10 Oct 2026). `hormuz.html` ab sirf coastlines banata hai, koi country border ya India highlight nahi, aur `demo/hormuz-3d-demo.mp4` dobara render ho chuka hai. Aage koi bhi map Sec 7, rule 6 ke hisaab se.

---

## 6. AI credits plan

**Budget:** ~200 credits poori series ke liye. "5-sec clip = 7.5 credits": **9 Oct 2026 ko Higgsfield ke cost-preflight se confirm** (`kling3_0`, `mode=pro`, `sound=off`, 5s, 16:9 → 7.5 credits; `std` → 6.25). 9:16 par generate se pehle ek baar quote dobara dekh lena. 10 Oct 2026 ko Higgsfield ki model info (`kling3_0`, "Kling v3.0") check ki: modes `std` / `pro` / `4k` (default `std`), `sound` `on`/`off` (default `on`; "off" se credits kam lagte hain), duration 3–15s, aspect 9:16 available. Model info mein per-clip credit quote nahi dikhta.

**Settings lock (har clip):** model Kling v3.0, `mode=pro`, `sound=off` (voiceover apna hai), `duration=5`, `aspect=9:16`. **Pehle batch se pehle** ek clip ka credit quote dekho. Quote 7.5 se zyada aaye to reserve list neeche se kaato.

Pehli 20 reels mein **7 naye clips = 52.5 credits** (7.5 maankar). 3 retries ka buffer (22.5) jodkar max ~75 credits. Reserve list (7 named clips) = 52.5. **Baaki ~72 credits unallocated rakho.**

| # | Tareekh | Reel | AI clip (5s, 9:16, koi text nahi) | Credits | Running total |
|---|---|---|---|---|---|
| 1 | Mon 12 Oct | 4 डिब्बे | — | 0 | 0 |
| 2 | Wed 14 Oct | Hallucination | — | 0 | 0 |
| 3 | Fri 16 Oct | FM deepfake | — (series rule: 0) | 0 | 0 |
| 4 | Mon 19 Oct | Hindi tax | — | 0 | 0 |
| 5 | Wed 21 Oct | Sarvam ka sach | — | 0 | 0 |
| 6 | Fri 23 Oct | Voice clone | Andhere bedroom mein phone vibrate karta hai, screen par sirf generic glow, koi insaan, logo ya text nahi. "Unknown" post mein 2D overlay | 7.5 | 7.5 |
| 7 | Mon 26 Oct | 6 stepon ki factory | Andhere data-center ki gali mein dolly, blue/orange LEDs **(library clip, aage reuse karna)** | 7.5 | 15 |
| 8 | Tue 27 Oct | Kunji | Raat ko desk lamp ke neeche notebook par ghasit kar likhta haath, koi padhne layak text nahi, chehra nahi. "क्यों?" post mein 2D overlay | 7.5 | 22.5 |
| 9 | Wed 28 Oct | Mansoon | Dhaan ke khet par mansoon ke baadal, pehli boondein, koi insaan nahi | 7.5 | 30 |
| 10 | Thu 29 Oct | Label rule | — | 0 | 30 |
| 11 | Sat 31 Oct | Thali | Steel thali top-down, bhaap, katori khisakti hai, koi insaan nahi | 7.5 | 37.5 |
| 12 | Mon 2 Nov | Hindi ~0.2% | Data-center library clip **reuse** | 0 | 37.5 |
| 13 | Tue 3 Nov | Free AI | — | 0 | 37.5 |
| 14 | Wed 4 Nov | GPU report card | Data-center library clip **reuse** | 0 | 37.5 |
| 15 | Thu 5 Nov | Diwali special | — (series rule: 0) | 0 | 37.5 |
| 16 | Sat 7 Nov | ChatGPT ka T | — | 0 | 37.5 |
| 17 | Mon 9 Nov | Open-weights | — | 0 | 37.5 |
| 18 | Tue 10 Nov | Paani | Cream table par glass mein girti boondon ka macro slow-motion | 7.5 | 45 |
| 19 | Wed 11 Nov | Chip | Cleanroom ki peeli roshni mein ghoomta silicon wafer, dastane wale haath, chehra ya logo nahi | 7.5 | 52.5 |
| 20 | Thu 12 Nov | Digital arrest | — (series rule: 0) | 0 | **52.5** |

**Reserve (7 named clips, 52.5 credits) ki priority:**
1. `history-06` Deep Blue → Gukesh: 1990s event hall, spotlight mein chessboard, peeche blinking server cabinet, koi insaan nahi.
2. `basics-10` Agent/MCP: phone par generic hara tick icon, peeche dhundhli kirana dukaan, chehra, text ya UPI logo nahi.
3. `myths_safety-11`: zaroori demo clip (bakriyan sheher ki geeli sadak par); permanent "AI-GENERATED" label post mein 2D overlay se.
4. `history-03` Raj Reddy: 1970s ki lab, tape drives.
5. `history-01` Turing: 1950s study desk.
6. `history-08` AlexNet: bedroom, do GPU.
7. `basics-11` Diffusion: "ये clip भी AI ने बनाया" wala Diwali gali clip.

Iske baad ke ideas (tractor wala khet, robot haath sui mein dhaaga) **unallocated** credits se, sirf tab jab budget bache.

**Credit rules**
- Ek reel par max 2 clips. Default 0–1.
- Prompt template: *"5s, vertical 9:16, no people, no faces, no logos, no readable text, no letters or numbers on any screen or paper, warm light"*. Haath dikh sakte hain, chehra kabhi nahi.
- **Har text (क्यों?, Unknown, AI-GENERATED, labels) post mein 2D overlay se.** Kling jaise models Devanagari aur chhota text aksar bigaad dete hain, aur har failed retry credit khaata hai.
- Ek baar mein ek clip banao, review karo, phir agla. Reject hua clip bhi credit khaata hai, isliye prompt pehle 2D storyboard par lock karo.
- Generic clips (data-center, server, phone) ki library banao aur unhe reuse karo. Ye tumhare apne clips hain, reuse karna theek hai.
- Har AI clip par on-screen "AI दृश्य" tag lagao aur upload par disclosure on karo.

---

## 7. Accuracy rules for AI content

1. **Tareekh lagao.** Har tez badalne wale fact (users, GPU count, price, free offer, policy, leaderboard, model ka naam) ke saath bolo aur screen par likho: "फरवरी 2026 तक", "Oct 2026 तक". "आज" kabhi mat bolo jab aankda purana ho.
2. **Bade number ke saath screen par source.** Chhota tag lagao, jaise "PIB, 16 Apr 2026", "AA Index, 3 Apr 2026" ya "OpenAI paper, 2025". Company ka apna aankda ho (OpenAI, Google, Sarvam, Anthropic, McAfee) to "company के मुताबिक" bolo aur screen par "एक company का data" likho.
3. **Hype words ban.** "सबसे बड़ा / दुनिया में पहला / क्रांति / ChatGPT को हरा दिया / AI सब खा जाएगा" tabhi jab source pakka ho. Warna "करीब", "अनुमान", "शुरुआती संकेत", "pilot" bolo. Announcement ko launch mat batao, pilot ko rollout mat batao, aur interim order ko final faisla mat batao.
4. **Myth reel mein sach saaf.** Ek line mein verdict do, saath mein thappa: "गलत — असल में…". "आधा सच" ho to dono aadhe bolo. Galat daave ko itna lamba mat dikhao ki wahi yaad reh jaaye. **Daava asli ho:** forward, headline ya ad ka source dikhao; nakli strawman mat banao.
5. **Scope saaf rakho.** US data ko "अमेरिका में" bolo, global ko "दुनिया भर", aur ek company ke data ko "Claude/ChatGPT के data में". Potential ka matlab naukri jaana nahi hai, aur correlation ka matlab cause nahi. Chhote groups (n<10) wale result ko "शुरुआती संकेत" bolo. Alag benchmark versions ya alag methods ke numbers ek chart mein mat daalo. Purane aur naye version (jaise purana vs naya tokenizer) ka fark saaf bolo.
6. **Asli log nahi, deepfake nahi, galat naksha nahi.** Asli insaan ka realistic chehra, AI portrait ya cloned aawaaz kabhi nahi, demo ke liye bhi nahi. Fake video replay mat karo. UPI, bank, sarkari ya brand logo nahi. **India ka koi bhi outline sirf official (Survey of India) boundary ke saath.**
   - Default Natural Earth / `world-atlas` (`countries-50m/110m/10m.json`) kabhi nahi. Repo mein test kiya: teeno files mein Gilgit (35.92N, 74.31E) aur Muzaffarabad (34.37N, 73.47E) Pakistan polygon mein, Aksai Chin (35.2N, 79.3E) China polygon mein aate hain.
   - Globe ya map zaroori ho to Natural Earth v5.1.1 ka "countries (India POV)" file (10m cultural vectors) lo, topojson mein convert karke simplify karo. Use karne se pehle: (a) wahi teen points India polygon ke andar aane chahiye, (b) Survey of India ke official political map se side-by-side milaao. Dono pass hon tabhi use karo.
   - Country border lines bhi isi data se draw karo, default data se nahi.
   - Shak ho to map hi mat dikhao: bhasha/rajya/data ko plain grid ya naam wale tiles par rakho.
   - Purani renders (jaise `hormuz.mp4`) bhi isi rule se check karo.
   - *Kyun:* June 2021 mein Twitter ki website par J&K aur Ladakh ko India se bahar dikhane wale map par UP aur MP police ne Twitter India ke MD ke khilaaf FIR darj ki thi ([Scroll, Jun 2021](https://scroll.in/latest/998764/fir-against-twitter-india-head-in-up-for-displaying-map-with-j-k-ladakh-outside-india)). Ye kanooni aur bharose, dono ka risk hai.
   - *Sources:* [Natural Earth disputed-boundaries policy (default = de facto)](https://www.naturalearthdata.com/about/disputed-boundaries-policy/) · [Natural Earth 10m cultural vectors (countries, India POV, v5.1.1)](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/) · [Survey of India ke Nov 2019 official maps (MHA release, Outlook)](https://www.outlookindia.com/national/india-news-new-map-of-india-released-depicts-union-territories-of-jammu-and-kashmir-ladakh-news-341596). Official map file surveyofindia.gov.in se lo.
7. **Synthetic content label karo.** Har AI clip par poore waqt "AI दृश्य / AI-generated" tag rahe, upload par platform ka AI disclosure on ho, aur channel description mein likho ki kuch visuals AI se bane hain.
8. **Publish-day re-check.** Helpline numbers (1930, PIB WhatsApp, Chakshu), policies (YouTube, IT Rules gazette text, DPDP phases), prices aur free offers (ChatGPT Go, Airtel, Jio), leaderboards (AA index ka version aur date) aur model names live source par ek baar dobara dekho. Galti mile to pinned comment mein correction daalo aur agli reel mein maano. Bharosa hi repeat viewers laata hai.
9. **Source mix aur neutrality.** Kisi ek company ka apna data (product data, apni research, apne users) ~5 mein se 1 reel se zyada ka main source na bane. Naukri, padhai aur usage ke liye pehle neutral/primary sources dhoondho: ILO, WEF, Stanford, BLS, PIB/MeitY, RBI, NPCI, peer-reviewed papers. Company data ho to "एक company का data" tag rahe. Channel description: "कोई sponsorship नहीं।" *Note:* ye plan Claude (Anthropic ka AI) ki madad se bana hai, isliye Anthropic/Claude data par khaas taur se extra skeptic raho.

---

## 8. Jo abhi verify nahi hua

**Bilkul use nahi kiya (source nahi mila, ya daava galat nikla):**
- Sarvam-M ka "SimpleQA par 5% se 72%" wala aankda: primary source nahi mila.
- Arthur Samuel ki "learn without being explicitly programmed" line: 1959 ke paper mein nahi hai, baad ka paraphrase hai.
- Niki Parmar ki "JEE nahi nikla" kahani: sirf secondary sources mein hai.
- "ChatGPT ka 👍/👎 seedha training mein jaata hai": koi source nahi.
- NPCI ka "Unified Agent Protocol" GFF 2026 mein launch hua: pushti nahi.
- Chip reel ke liye Nvidia/TSMC ka specific node daava: verify nahi hua.
- Sam Altman ka per-query energy aankda aur IEA ke total AI-bijli aankde: verify nahi hue.
- Turing-test study (2025) ka PNAS mein publish hona, aur Minsky ne baad mein apna quote nakaara ya nahi: dono pakke nahi.
- Dartmouth workshop ki funding amount: verify nahi hui.
- Llama 3 ke 8% multilingual data mein Hindi kitni thi: paper nahi batata.
- Param2 card ke "576 GPU hours": ye clock-hours hain ya GPU-hours, saaf nahi.
- Gnani Inya VoiceOS ki bhasha count aur performance: sources mein alag-alag.
- Scam reels ke liye "guaranteed returns", "Telegram tips groups" aur SEBI-registration wali salah: verify nahi hui.
- Indian hiring/layoff numbers (NASSCOM waghera) aur "India duniya ka sabse bada IT exporter": verify nahi hue (exporter wala daava vivadit hai).
- India ki bijli grid capacity ki AI se tulna.
- **RBI ki deepfake chetavaniyan:** primary site par confirm nahi hui.
- **Digital arrest scams mein AI/deepfake ka use:** koi primary source nahi mila. Isliye N3 reel mein AI ka daava nahi.
- **"भारत का ChatGPT" exact headline** aur "भारत के AI ने ChatGPT को हरा दिया" wala forward: dono ka source nahi mila. Sirf asli headline ("…to rival ChatGPT and Claude") use karo.
- **Sarvam ka "84% STEM/math/coding pairwise" figure:** humein sirf 90% (Indian-language benchmarks) wala daava mila.
- **Pratham ka "6,000 learners" figure:** pratham.org hamare environment mein khula nahi aur search mein ye number nahi mila. Isliye sirf Anthropic ka "1,500 students, 20 schools" (Anthropic ke page se dobara padha).
- Ola Krutrim ki current sthiti, Sarvam ka unicorn/funding round, Soket EKA, "IndiaAI Mission 2.0", 200,000-GPU target, AIKosh aur fellowship/fund-use ki kamiyan: ye sirf landscape notes mein the, fact-check nahi hue, isliye plan mein nahi hain.
- Platform algorithm ke daave (Instagram par "sends" sabse bada signal, 3-minute Shorts, doosre app ka watermark hone par penalty, Trial Reels, "Link a reel"): landscape notes mein the, fact-check nahi hue. Is plan mein inhe fact ki tarah use nahi kiya.

**Use kar sakte ho, par sirf "announced / reports ke mutabik / draft" ke saath:**
- +20,000 GPUs: Feb 2026 mein ghoshna hui, chaalu hone ki pushti nahi.
- Microsoft–OpenAI deal se "AGI clause hata": sirf secondary reports mein. Primary statement bas itna kehta hai ki payments "technology progress se independent" hain.
- Tata Dholera fab ka 90nm se shuruaat aur ~2028 timeline: press reports aur mantri ke bayan.
- CG Semi Sanand mein commercial production: secondary source.
- Sarvam ka 1-trillion-parameter model: sirf plan.
- UPI agentic payments: sirf pilot, Oct 2026 tak full rollout ki pushti nahi.
- YouTube ke Feb 2027 wale Shorts monetization rules: secondary press se. YouTube Help Center par verify karo.
- YouTube auto-label (May 2026): original blog post nahi khul paya.
- IT Rules ka April 2026 wala draft (poore video mein lagataar label): notify hone ki pushti nahi, lagu niyam mat batao. **10% label-area wala figure Oct 2025 ke draft ka hai, kanoon ki tarah mat bolo.** G.S.R. 120(E) ki details (labels, 3 ghante, 2 ghante) abhi sirf secondary sources se; gazette text publish se pehle padho. 2-ghante wali window mein CSAM bhi shamil hai ya nahi, sources mein alag.
- Meta dubbing mein Hindi se seedha Tamil jaise pair: saaf nahi, apni reel par test karo.
- Nano Banana "til" story ka kaaran: pushti nahi. Bhashini voice bhashayein 22 ya 23: "20 से ज़्यादा" bolo.
- ChatGPT Go: free saal ke baad ₹399/mahina auto-renew sirf secondary reports se (Smartprix, Gizbot). Payment method zaroori hai ya nahi, reports aapas mein alag. Sign-up window kab band hui, official source nahi mila (ek deal-forum 4 Dec 2025 batata hai, bharosemand nahi).
- Jio–Google AI Pro ki eligibility (18–25 saal vs sabhi Unlimited 5G): sources alag.
- ANI vs OpenAI ki legal reasoning (fair dealing, substantial similarity): sirf secondary reports; detailed order padhna baaki.
- DPDP Rules ke rule numbers aur kaunsa hissa kab: sources alag; sirf "~1 saal / ~18 mahine" bolo.
- IMD 2026 block-level model: blocks ki ginti (~3,067–3,196) aur launch date (11/12 May) sources mein alag; 15 rajyon ki list nahi mili.
- Artificial Analysis ke numbers version ke saath badalte hain (article 18/33 vs model page 12 est./~24): sirf 3 Apr 2026 article, date label ke saath.
- 1958 Perceptron ki NYT wording: kai secondary sources mein same, par original scan nahi dekha; exact quote se pehle NYT archive scan dekho.
- US bank tellers ka 2022 ka exact count (~3.6 lakh): sirf secondary se; reel mein sirf "2010 के बाद घटीं" + BLS ka projection bolo.
- Natural Earth "India POV" (v5.1.1) ka exact shape: download page par file mili, par shape abhi humne khud test nahi kiya. Sec 7 rule 6 wala test pass hone ke baad hi use karo.
- Higgsfield Kling v3.0 ka per-clip credit (`mode=pro`, `sound=off`, 5s): model info mein quote nahi dikha; pehle batch se pehle confirm karo.

**Ek run mein unverified the, doosre run mein verified ho gaye (ab use kar sakte ho):**
- **1930 helpline aur cybercrime.gov.in:** voice-clone aur paisa-double runs mein block the. `trends_format-01` aur `india-06` mein Rajya Sabha PQ aur MHA PDF se verified hue. PIB ka email address sources mein alag-alag mila, isliye sirf WhatsApp number aur portal bolo.
- **DoT Chakshu (Sanchar Saathi):** shak wali call/SMS/WhatsApp report karne ke liye; paisa jaane par 1930. Outlook Money aur Factly explainers se verified (10 Oct 2026).
- **McAfee 2023 India voice-scam survey:** 1,010 Indian adults, 47% (20% khud + 27% jaanne wale), 83% sirf victims mein. Vendor survey label ke saath (10 Oct 2026).
- **Digital arrest:** I4C advisory (Oct 2024) aur MHA ka Rajya Sabha jawab (12 Mar 2025: 3,962+ Skype IDs, 83,668 WhatsApp accounts) verified. AI wala link nahi.
- **Stanford AI Index 2025 ka "280 गुना सस्ता":** HAI page se verified; GPT-3.5-level (MMLU 64.8%), Nov 2022 → Oct 2024, $20 → $0.07 per million tokens. Ye ek tay capability level ka comparison hai, poore market ka rate nahi.
- **ILO WP140 (May 2025):** ~1 in 4 workers exposed, 3.3% highest category, "transformation" sabse sambhavit asar.
- **Anthropic March 2026 labor study:** "no systematic increase in unemployment" + "suggestive evidence that hiring of younger workers has slowed" (page 10 Oct 2026 ko dobara padha).
- **IMD AI block-level monsoon model (May 2026):** Business Standard aur The Hindu summaries se.
- **Sarvam-105B AA score aur date:** article 18 / 30B 12 / gpt-oss-120B 33; AA ka X post 3 Apr 2026 ka.
- **Natural Earth disputed-boundary policy aur India POV file ka hona:** naturalearthdata.com se. **Repo ke default data ka galat India shape:** repo mein khud test kiya.
- **SycEval (Stanford, AIES 2025), Butlin et al. 2023, Dated Data (COLM 2024), The Prompt Report (2024), OSI OSAID 1.0 (28 Oct 2024), Stanford HAI chatbot-privacy study (15 Oct 2025):** neutral sources ke roop mein verified.
- BharatGen = IIT Bombay-led consortium: `basics-06` aur `trends_format-05` mein verified.
- Param2 ke 2.4B active parameters: model card se verified (`india-02`, `tools_models-10`).
- AlexNet ke do GTX 580 GPU: `basics-01` mein original paper se verified.
- "Har email par ek bottle paani" (~519 ml, 2024): `future_jobs-10` mein ek source mila. Bolna ho to sirf "2024 का एक अलग अनुमान — GPT-4, 100 शब्दों का email, जगह के हिसाब से बदलता, method पर विवाद" ke saath bolo.

**Editor ke spot-checks jo pass hue (9–10 Oct 2026, koi badlaav nahi):** cl100k Indic premiums (repo CSV se dobara calculate); GPT-4o Hindi 90→31 / English 27→24; Anthropic study 52 / 50% vs 67% / ~2 min not significant / 29 Jan 2026; India brief 45.2% software #1, #2 total / 101st per capita; Anthropic Jan 2026 49%; SC 27 Feb 2026; PIB 16 Apr 2026 FM deepfake; PIB WhatsApp 8799711259 (sirf kendra sarkar ke daave); IT Rules G.S.R. 120(E) (secondary); Sarvam-105B architecture; AA 17 Jul 2026 six labs above 50; Param2; 100M ChatGPT India; monsoon 3,88,45,214 / 13 rajya / 5 bhashayein / 31–52%; Microsoft Cyber Signals #9; NPCI AI/ML fraud monitoring; DeepSeek-V4-Pro 1.6T / 49B active; AGI-definition paper GPT-5 57% / memory 0%; Common Crawl Hindi ≈0.21–0.23%; 38,000 GPUs at ~₹65/hr.

**Missing topics jo is batch mein idea nahi bane (6 ki limit, ya facts abhi verify nahi hue):**
- Hands-on tool reels Hindi mein (voice typing, translation, AI se resume/application, study planner, Hindi/Hinglish prompting): "tools" pillar abhi sabse kamzor hai. Har tool ka current naam aur feature publish se pehle verify karna hoga. Abhi sirf Prompt Lab (Prompt Report) aur N1 hain.
- India ka open-source Indic AI ecosystem (AI4Bharat/IIT Madras ke IndicTrans2, IndicVoices; Bhashini datasets): verify nahi hua.
- Bina sahmati wali deepfake images aur harassment se bachav (women/teens): IT Rules 2026 ki 2-ghante wali window secondary sources se mili. Zero visuals, helpline-first reel, gazette text padhne ke baad.
- AI companions, chatbots aur teens/students ka mental health: verify nahi hua; sensitive, expert source ke bina nahi.
- Baaki GenAI terms (reasoning/"thinking" models, multimodal, embeddings, prompt injection, distillation, temperature): sources abhi nahi dhoondhe. Open-weights wala N4 mein aa gaya.
- MeitY AI Governance Guidelines (Nov 2025) vs EU AI Act: verify nahi hua.
- Indian freshers ke liye AI careers, Indian data ke saath (NASSCOM, Naukri JobSpeak, ILO India): verify nahi hua. US-heavy naukri reels ko balance karne ke liye zaroori.
- India mein data centres ki bijli/paani: verify nahi hua.
