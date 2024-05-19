import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const SummaryUiHandler: SimpleTranslationEntries = {
    "pokemonInfo": "Pokémon Info", //Currently unused
    "originalTrainer": "OT",
    "type": "Typ",
    "memoText": "Wesen: {{nature}},\n{{metText}} auf Lvl. {{level}},\n{{biomeName}}.",
    "memoMet": "getroffen",
    "memoApparentlyMet": "Wahrscheinlich getroffen",
    "status": "Status",
    "lvl": "Lvl",
    "unknown": 'Unbekannt',
    "expPoints": "EP",
    "nextLv": "Nächst. Lv.",
    "moveStats": " Stärke\n Genauigkeit\n Kategorie",
} as const;