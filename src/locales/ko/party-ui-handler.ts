import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const partyUiHandler: SimpleTranslationEntries = {
  "choosePokemon": "포켓몬을 골라 주십시오.",
  "cantReleaseInBattle": "배틀에 나가 있는 포켓몬은 놓아줄 수 없어!",
  "what2doWithPoke": "이 포켓몬으로 무엇을 할까?",
  "cancelShort": "취소",
  "selectMove": "기술을 골라 주십시오.",
  "selectHeldItemTransfer": "옮길 아이템을 골라 주십시오.",
  "selectSplice": "결합할 포켓몬을 골라 주십시오.",
  "deactivate": "비활성화",
  "activate": "활성화",
  "SEND_OUT": "내보내기",
  "SUMMARY": "상태",
  "SPLICE": "결합",
  "UNSPLICE": "결합 해제",
  "RELEASE": "놓아주기",
  "CANCEL": "취소",
  "unpauseEvolution": "{{pokemonName}}의 진화가 다시 활성화되었다.",
  "unsplicePokemon": "{{pokemonName}}와 {{fusionSpeciesName}}의 결합을 해제\n하시겠습니까? {{fusionSpeciesName}}를(을) 잃게 됩니다.",
  "spliceRevertText": "{{fusionName}}(이)가 {{pokemonName}}(으)로 되돌아왔다.",
  "releasePokemon": "정말로 {{pokemonName}}을(를) 놓아주시겠습니까?",
} as const;