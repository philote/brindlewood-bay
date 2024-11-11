import { SCHEMA_EN } from "./schema-en.js";
import { SCHEMA_RU } from "./schema-ru.js";
import { SCHEMA_IT } from './schemas/it.js';

Hooks.once("pbtaSheetConfig", () => {
  game.settings.set("pbta", "sheetConfigOverride", true);

  // Determina la lingua corrente delle impostazioni di Foundry VTT
  const language = game.settings.get('core', 'language');

  // Seleziona lo schema appropriato in base alla lingua
  let schema;
  if (language === 'ru') {
    schema = SCHEMA_RU;
  } else if (language === 'it') {
    schema = SCHEMA_IT;
  } else {
    schema = SCHEMA_EN;
  }

  // Imposta la configurazione della scheda con lo schema scelto
  game.pbta.sheetConfig = schema;
});
