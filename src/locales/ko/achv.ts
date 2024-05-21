import { AchievementTranslationEntries } from "#app/plugins/i18n.js";

export const achv: AchievementTranslationEntries = {
    "Achievements": {
        name: "업적",
    },
    "Locked": {
        name: "미획득",
    },

    "MoneyAchv": {
        description: "돈을 총 ₽{{moneyAmount}} 만큼 모았다",
    },
    "10K_MONEY": {
        name: "자산가",
    },
    "100K_MONEY": {
        name: "부자",
    },
    "1M_MONEY": {
        name: "백만장자",
    },
    "10M_MONEY": {
        name: "상위 1%",
    },

    "DamageAchv": {
        description: "한 방에 {{damageAmount}} 데미지를 주었다",
    },
    "250_DMG": {
        name: "강타자",
    },
    "1000_DMG": {
        name: "초강타자",
    },
    "2500_DMG": {
        name: "정말 큰 데미지야!",
    },
    "10000_DMG": {
        name: "원펀맨",
    },

    "HealAchv": {
        description: "기술, 특성, 지닌 도구로 한 번에 {{HP}}를 {{healAmount}} 회복했다",
    },
    "250_HEAL": {
        name: "초보 힐러",
    },
    "1000_HEAL": {
        name: "큰 힐러",
    },
    "2500_HEAL": {
        name: "성직자",
    },
    "10000_HEAL": {
        name: "치유 마스터",
    },

    "LevelAchv": {
        description: "포켓몬을 {{level}} 레벨까지 키웠다",
    },
    "LV_100": {
        name: "잠깐, 아직 더 있어요!",
    },
    "LV_250": {
        name: "엘리트",
    },
    "LV_1000": {
        name: "더 멀리까지 가기 위해",
    },

    "RibbonAchv": {
        description: "총 {{ribbonAmount}}개의 리본을 모았다",
    },
    "10_RIBBONS": {
        name: "포켓몬 리그 챔피언",
    },
    "25_RIBBONS": {
        name: "슈퍼 리그 챔피언",
    },
    "50_RIBBONS": {
        name: "하이퍼 리그 챔피언",
    },
    "75_RIBBONS": {
        name: "로그 리그 챔피언",
    },
    "100_RIBBONS": {
        name: "마스터 리그 챔피언",
    },

    "TRANSFER_MAX_BATTLE_STAT": {
        name: "팀워크",
        description: "하나 이상의 능력을 최대 랭크까지 올린 후 바톤터치했다",
    },
    "MAX_FRIENDSHIP": {
        name: "우정 최대로",
        description: "포켓몬과의 친밀도를 최대치까지 올렸다",
    },
    "MEGA_EVOLVE": {
        name: "메가모프",
        description: "포켓몬을 메가진화시켰다",
    },
    "GIGANTAMAX": {
        name: "절대적인 크기",
        description: "포켓몬을 거대이맥스시켰다",
    },
    "TERASTALLIZE": {
        name: "자속보정에 미치다",
        description: "포켓몬을 테라스탈시켰다",
    },
    "STELLAR_TERASTALLIZE": {
        name: "숨겨진 타입",
        description: "포켓몬을 스텔라 테라스탈타입으로 테라스탈시켰다",
    },
    "SPLICE": {
        name: "인피니트 퓨전",
        description: "유전자쐐기로 두 포켓몬을 결합시켰다",
    },
    "MINI_BLACK_HOLE": {
        name: "까마득하게 많은 아이템",
        description: "미니 블랙 홀을 얻었다",
    },
    "CATCH_MYTHICAL": {
        name: "환상",
        description: "환상의 포켓몬을 잡았다",
    },
    "CATCH_SUB_LEGENDARY": {
        name: "(준)전설",
        description: "준전설 포켓몬을 잡았다",
    },
    "CATCH_LEGENDARY": {
        name: "전설",
        description: "전설의 포켓몬을 잡았다",
    },
    "SEE_SHINY": {
        name: "빛나는",
        description: "야생에서 색이 다른 포켓몬을 발견했다",
    },
    "SHINY_PARTY": {
        name: "이게 헌신이란 거야",
        description: "색이 다른 포켓몬으로 파티를 가득 채웠다",
    },
    "HATCH_MYTHICAL": {
        name: "환상의 알",
        description: "알에서 환상의 포켓몬을 부화시켰다",
    },
    "HATCH_SUB_LEGENDARY": {
        name: "준전설 알",
        description: "알에서 준전설 포켓몬을 부화시켰다",
    },
    "HATCH_LEGENDARY": {
        name: "전설의 알",
        description: "알에서 전설의 포켓몬을 부화시켰다",
    },
    "HATCH_SHINY": {
        name: "빛나는 알",
        description: "알에서 색이 다른 포켓몬을 부화시켰다",
    },
    "HIDDEN_ABILITY": {
        name: "숨겨진 재능",
        description: "숨겨진 특성을 가진 포켓몬을 잡았다",
    },
    "PERFECT_IVS": {
        name: "품질 보증서",
        description: "포켓몬을 완벽한 개체값으로 만들었다",
    },
    "CLASSIC_VICTORY": {
        name: "불패",
        description: "클래식 모드에서 승리한다",
    },
} as const;
