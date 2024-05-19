import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const summaryUiHandler: SimpleTranslationEntries = {
  "pokemonInfo": "스테이터스", //Currently unused
  "originalTrainer": "어버이",
  "type": "타입",
  "memoText": "{{nature}} 성격.\n{{biomeName}}에서\nLv{{level}}일 때 {{metText}}.",
  "memoMet": "만났다",
  "memoApparentlyMet": "만난 것 같다",
  "status": "능력",
  "lvl": "Lv",
  "unknown": "Unknown",
  "expPoints": "현재 경험치",
  "nextLv": "다음 레벨까지",
  "moveStats": "위력\n명중률\n분류"
} as const;