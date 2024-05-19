import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const SummaryUiHandler: SimpleTranslationEntries = {
    "pokemonInfo": "Pokémon Info", //Currently unused
    "originalTrainer": "OT",
    "type": "Type",
    "memoText": "{{nature}} nature,\n{{metText}} at Lv{{level}},\n{{biomeName}}.",
    "memoMet": "met",
    "memoApparentlyMet": "apparently met",
    "status": "Status",
    "lvl": "Lvl",
    "unknown": 'Unknown',
    "expPoints": "EXP. Points",
    "nextLv": "Next Lv.",
    "moveStats": "Power\nAccuracy\nCategory"
} as const;