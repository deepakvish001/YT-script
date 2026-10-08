# 3D animation scenes (free, code se render)

Globe / map / data wale 3D shots yahan code se bante hain: three.js scene → headless Chromium
frame-by-frame render → ffmpeg MP4 (1920×1080, 30 fps). Koi AI credits nahi lagte.

```bash
cd animation
npm install
STILLS=1.5,4.8,7.6,10.8 node render.mjs scenes/hormuz.html      # preview stills -> out/still_*.jpg
node render.mjs scenes/hormuz.html out/hormuz-silent.mp4 12 30  # full render
./sfx-hormuz.sh                                                  # placeholder sound bed
ffmpeg -i out/hormuz-silent.mp4 -i out/hormuz-sfx.wav -c:v copy -c:a aac -b:a 192k -shortest out/hormuz.mp4
```

## Scene ka contract
- Scene HTML `window.renderFrame(t)` expose kare (t = seconds) aur ready hone par `window.sceneReady = true`.
- Har cheez sirf `t` se tay ho (koi `Date.now()` / `requestAnimationFrame` nahi) — tabhi har frame same aata hai.
- Hindi text DOM overlay mein (Mukta font), 3D cheezein three.js mein.

## Scenes
| File | Kya dikhata hai | Length |
|------|-----------------|--------|
| `scenes/hormuz.html` | Globe → Hormuz zoom (33 KM) → India/China/Japan/Korea tanker routes → routes laal ("बंद") | 12 s |

Map data: Natural Earth 1:50m via `world-atlas`. Hormuz ke top-4 destinations aur ~20% figure: EIA (2024).
