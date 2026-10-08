#!/usr/bin/env bash
# Placeholder sound design for the Hormuz demo: drone + fly-in whoosh + "closure" boom.
# Real videos use the creator's voiceover on top; keep this bed around -20 LUFS under voice.
set -euo pipefail
cd "$(dirname "$0")"
D=12
ffmpeg -y -loglevel error \
  -f lavfi -i "aevalsrc='0.20*sin(2*PI*55*t)*(0.7+0.3*sin(2*PI*0.15*t))+0.10*sin(2*PI*82.5*t)+0.04*sin(2*PI*110*t)':d=$D:s=48000" \
  -f lavfi -i "anoisesrc=color=brown:amplitude=0.5:d=$D:r=48000" \
  -f lavfi -i "anoisesrc=color=pink:amplitude=0.6:d=$D:r=48000" \
  -f lavfi -i "aevalsrc='if(gte(t,9.6),0.9*sin(2*PI*(32+50*exp(-(t-9.6)*4))*(t-9.6))*exp(-(t-9.6)*1.4),0)':d=$D:s=48000" \
  -filter_complex "\
[1]lowpass=f=300,volume=0.35[bed];\
[2]bandpass=f=900:width_type=o:w=1.5,volume='if(between(t,2.4,5.8),pow(sin(PI*(t-2.4)/3.4),2),0)*0.9':eval=frame[whoosh];\
[1]lowpass=f=180,volume='if(gte(t,9.6),exp(-(t-9.6)*2.2),0)*2.2':eval=frame[rumble];\
[0][bed][whoosh][3][rumble]amix=inputs=5:normalize=0,\
afade=t=in:d=0.6,afade=t=out:st=11.2:d=0.8,loudnorm=I=-18:TP=-2:LRA=11,aresample=48000[a]" \
  -map "[a]" -c:a pcm_s16le out/hormuz-sfx.wav
echo wrote out/hormuz-sfx.wav
