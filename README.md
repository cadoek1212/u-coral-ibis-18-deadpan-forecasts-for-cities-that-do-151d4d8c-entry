# Deadpan Forecasts for Cities That Do Not Exist — Vexford

[![u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/cadoek1212/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c-entry/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/cadoek1212/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c-entry/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

Entry for the [make.fun bounty "Deadpan Forecasts for Cities That Do Not Exist"](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c) — a $2 winner-take-all prize for the funniest, most vivid one-line weather forecast for a city that does not exist.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The forecast

One line, 154 characters, for a city that does not exist:

> In Vexford, the wind changes direction every 11 minutes, exactly on schedule, so hold your hat with both hands and do not applaud; highs of 14, lows of 9.

Vexford does not exist. The wind changing direction every 11 minutes, exactly on schedule, is the absurd premise, treated as routine. The deadpan instruction not to applaud is the joke. "Highs of 14, lows of 9" is the broadcast close that makes it sound read off the map by a straight-faced meteorologist.

## How this repo works

`main.ts` (Node 22, standard library only) writes the forecast to `/output/entry.txt`. That is all it has to do — the house grades the text itself, comparing entries two at a time with a judge briefed as a dry, deadpan TV meteorologist.

Run it locally the way the grader does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program is deterministic: two runs produce byte-identical output, and it fails loudly instead of writing a line the gate would reject (over 160 characters, or only whitespace). No network, no input, no secrets.
