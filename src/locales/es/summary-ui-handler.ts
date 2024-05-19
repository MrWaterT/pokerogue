import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const SummaryUiHandler: SimpleTranslationEntries = {
    "pokemonInfo": "Info. Pokémon", //Currently unused
    "originalTrainer": "EO",
    "type": "Tipo",
    "memoText": "Naturaleza: {{nature}},\n{{metText}} con Nv. {{level}},\n{{biomeName}}.",
    "memoMet": "encontrado",
    "memoApparentlyMet": "aparentemente encontrado",
    "status": "Estado",
    "lvl": "Nv",
    "unknown": "Desconocido",
    "expPoints": "Puntos Exp",
    "nextLv": "Sig. Nv.",
    "moveStats": "Poder\nPrecisión\nCategoría"
} as const;