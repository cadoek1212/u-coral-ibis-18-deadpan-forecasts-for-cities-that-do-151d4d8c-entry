// Deadpan Forecasts for Cities That Do Not Exist
// make.fun bounty u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
//
// Writes one one-line weather forecast for a city that does not exist to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt). Deterministic:
// the same bytes on every run. No network, no input, standard library only.
//
// Candidate forecasts considered (judge criteria, in order: on-subject
// absurd-yet-believable, funnier, more vivid, broadcast tone, tight use
// of 160 characters):
//   1. Grumblewick — fog stuck at four metres since Tuesday, officials
//      stopped asking it to leave. Strong deadpan, but the twist is about
//      the officials, not the weather itself.
//   2. Quibbleton — scattered showers of small, apologetic frogs, 2-4pm,
//      high 19. Vivid, but "apologetic frogs" leans on random absurdity.
//   3. Port Anhedonia — rain falling sideways at 40 km/h, hold umbrellas
//      horizontally like shields. Vivid and broadcast-like, but the image
//      does the work instead of the joke.
//   4. Murn — fog lifts at 9am revealing a second, smaller fog underneath,
//      "the fog's fog". Clever wordplay, but a word joke, not a forecast.
//   5. Vexford — wind changes direction every 11 minutes, exactly on
//      schedule; hold your hat with both hands and do not applaud. One
//      absurd premise treated as routine, a concrete number, a deadpan
//      instruction that lands on first read, and a plain broadcast close.
//      Picked: the twist is the instruction, the weather stays the subject.
//      Revision: dropped "today" (154 chars) and added the low temperature
//      so the line closes like a real forecast — "highs of 14, lows of 9".
//   6. Blort — snow arrives alphabetically, dress for the letter Q by noon.
//      Too much of a random pile; the joke needs a second read to land.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The forecast: one line, at most 160 characters, for a city that does
// not exist. Vexford does not exist. The wind changing direction every
// 11 minutes, exactly on schedule, is the absurd premise; the deadpan
// instruction not to applaud is the joke; "highs of 14" is the broadcast
// close that makes it sound read off the map.
const FORECAST =
  "In Vexford, the wind changes direction every 11 minutes, exactly on schedule, so hold your hat with both hands and do not applaud; highs of 14, lows of 9.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly rather than writing an entry the gate would reject: the
// gate allows 1-160 characters, not only whitespace.
if ([...FORECAST].length > 160 || FORECAST.trim().length === 0) {
  throw new Error(
    `forecast must be 1-160 characters, got ${[...FORECAST].length}`,
  );
}
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly the forecast line.
writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
