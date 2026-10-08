# Ek 20-min video kaise banegi (pipeline)

| Step | Kaun karega | Tool | Kharcha |
|------|-------------|------|---------|
| 1. Research + script | Claude | `CLAUDE.md` style, web-verified facts | free |
| 2. Shot list (har 5–10 sec ka visual) | Claude | `scripts/NN-*-shots.md` | free |
| 3. Globe / map / route / numbers / charts / timeline (video ka ~50–60%) | Claude | `animation/` (three.js + ffmpeg) | free |
| 4. Cinematic realistic shots (1945 shehar, tanker, missile, bunker) | Claude, AI video tools se | Higgsfield / Everygen | credits lagte hain (~5–10 sec per clip) |
| 5. Asli photos / archival footage | Claude dhoondhega | Wikimedia Commons, US National Archives (public domain) | free |
| 6. Voiceover | **Tum, apni awaaz mein** | phone + lapel mic | free |
| 7. Final edit (voice sync, music, SFX, captions) | Claude ffmpeg se rough cut; polish tum | ffmpeg → CapCut / DaVinci Resolve | free |
| 8. Thumbnail | Claude design + tum approve | — | free |

**Kyun apni awaaz:** YouTube ki "inauthentic content" policy mass-produced AI-voice videos ko demonetize kar sakti hai,
aur Hindi audience asli awaaz par zyada bharosa karti hai.

**Ek video ka realistic mix (20 min):** ~60% code-animation (free) + ~25% AI cinematic clips + ~15% archival photos.
Isse AI credits ka kharcha 3–4 guna kam ho jaata hai.
