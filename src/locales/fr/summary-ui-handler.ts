import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const SummaryUiHandler: SimpleTranslationEntries = {
    "pokemonInfo": "Info Pokémon", //Currently unused
    "originalTrainer": "DO",
    "type": "Type",
    "memoText": "{{nature}} de nature,\n{{metText}} au N.{{level}},\n{{biomeName}}.",
    "memoMet": "rencontré",
    "memoApparentlyMet": "apparemment rencontré",
    "status": "Statut",
    "lvl": "N.",
    "unknown": 'Inconnu',
    "expPoints": "Points d’Exp",
    "nextLv": "N. suivant",
    "moveStats": "Puissance\nPrécision\nCatégorie"
} as const;