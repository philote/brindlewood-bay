import { SCHEMA_EN } from "./schema-en.js";
import { SCHEMA_RU } from "./schema-ru.js";

Hooks.once("init", () => {
  game.settings.set("pbta", "sheetConfigOverride", true);

  let schema = game.modules.get("ru-ru")?.active ? SCHEMA_RU : SCHEMA_EN;

  game.pbta.sheetConfig = schema;
});
