/**
 * Palmerg images imported via Vite so URLs are content-hashed — avoids stale
 * browser cache showing old remote assets.
 *
 * Optional Base44 / production URLs: set keys in `src/data/siteMedia.overrides.json`
 * or `VITE_SITE_MEDIA_JSON` (see `src/config/siteMedia.js`).
 */
import { resolvePalmergKey } from "@/config/siteMedia";
import bulk from "./bulk.png";
import event1 from "./event1.png";
import event2 from "./event2.png";
import event3 from "./event3.png";
import event4 from "./event4.png";
import fueling from "./fueling.png";
import heroFillingStation from "./hero-filling-station.png";
import haulage from "./haulage.png";
import lpg from "./lpg.png";
import oils from "./oils.png";
import operations from "./operations.png";
import payment from "./payment.png";
import prestige from "./prestige.png";
import heroSaltMining from "./hero-salt-mining.png";
import salt from "./salt.png";
import stations from "./stations.png";
import team from "./team.png";
import _palmergLogo from "../palmerg-logo.png";

export const PALMERG = {
  bulk: resolvePalmergKey("bulk", bulk),
  event1: resolvePalmergKey("event1", event1),
  event2: resolvePalmergKey("event2", event2),
  event3: resolvePalmergKey("event3", event3),
  event4: resolvePalmergKey("event4", event4),
  fueling: resolvePalmergKey("fueling", fueling),
  heroFillingStation: resolvePalmergKey("heroFillingStation", heroFillingStation),
  haulage: resolvePalmergKey("haulage", haulage),
  lpg: resolvePalmergKey("lpg", lpg),
  oils: resolvePalmergKey("oils", oils),
  operations: resolvePalmergKey("operations", operations),
  payment: resolvePalmergKey("payment", payment),
  prestige: resolvePalmergKey("prestige", prestige),
  heroSaltMining: resolvePalmergKey("heroSaltMining", heroSaltMining),
  salt: resolvePalmergKey("salt", salt),
  stations: resolvePalmergKey("stations", stations),
  team: resolvePalmergKey("team", team),
};

export const palmergLogo = resolvePalmergKey("palmergLogo", _palmergLogo);
