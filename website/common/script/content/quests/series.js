import t from '../translation';

const QUEST_SERIES = {
  atom1: {
    text: t('questSpecial4Part1Text'),
    notes: t('questSpecial4Part1Notes'),
    completion: t('questSpecial4Part1Completion'),
    group: 'questGroupSpecial4',
    prerequisite: {
      lvl: 15,
    },
    value: 4,
    lvl: 15,
    category: 'unlockable',
    collect: {
      soapBars: {
        text: t('questSpecial4Part1Collect'),
        count: 20,
      },
    },
    drop: {
      items: [
        {
          type: 'quests',
          key: 'atom2',
          text: t('questSpecial4Part1DropPart2'),
          onlyOwner: true,
        },
      ],
      gp: 7,
      exp: 50,
    },
  },
  atom2: {
    text: t('questSpecial4Part2Text'),
    notes: t('questSpecial4Part2Notes'),
    completion: t('questSpecial4Part2Completion'),
    group: 'questGroupSpecial4',
    previous: 'atom1',
    prereqQuests: [
      'atom1',
    ],
    value: 4,
    lvl: 15,
    category: 'unlockable',
    boss: {
      name: t('questSpecial4Part2Boss'),
      hp: 300,
      str: 1,
    },
    drop: {
      items: [
        {
          type: 'quests',
          key: 'atom3',
          text: t('questSpecial4Part2DropPart3'),
          onlyOwner: true,
        },
      ],
      gp: 20,
      exp: 100,
    },
  },
  atom3: {
    text: t('questSpecial4Part3Text'),
    notes: t('questSpecial4Part3Notes'),
    group: 'questGroupSpecial4',
    previous: 'atom2',
    prereqQuests: [
      'atom1',
      'atom2',
    ],
    completion: t('questSpecial4Part3Completion'),
    value: 4,
    lvl: 15,
    category: 'unlockable',
    boss: {
      name: t('questSpecial4Part3Boss'),
      hp: 800,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'gear',
          key: 'head_special_2',
          text: t('headSpecial2Text'),
        }, {
          type: 'hatchingPotions',
          key: 'Base',
          text: t('questSpecial4Part3Drop'),
        }, {
          type: 'hatchingPotions',
          key: 'Base',
          text: t('questSpecial4Part3Drop'),
        },
      ],
      gp: 25,
      exp: 125,
    },
  },
  goldenknight1: {
    text: t('questSpecial3Part1Text'),
    notes: t('questSpecial3Part1Notes'),
    completion: t('questSpecial3Part1Completion'),
    group: 'questGroupSpecial3',
    value: 4,
    lvl: 40,
    category: 'unlockable',
    collect: {
      testimony: {
        text: t('questSpecial3Part1Collect'),
        count: 60,
      },
    },
    drop: {
      items: [
        {
          type: 'quests',
          key: 'goldenknight2',
          text: t('questSpecial3Part1DropPart2'),
          onlyOwner: true,
        },
      ],
      gp: 15,
      exp: 120,
    },
  },
  goldenknight2: {
    text: t('questSpecial3Part2Text'),
    notes: t('questSpecial3Part2Notes'),
    completion: t('questSpecial3Part2Completion'),
    group: 'questGroupSpecial3',
    value: 4,
    previous: 'goldenknight1',
    prereqQuests: [
      'goldenknight1',
    ],
    lvl: 40,
    category: 'unlockable',
    boss: {
      name: t('questSpecial3Part2Boss'),
      hp: 1000,
      str: 3,
    },
    drop: {
      items: [
        {
          type: 'quests',
          key: 'goldenknight3',
          text: t('questSpecial3Part2DropPart3'),
          onlyOwner: true,
        },
      ],
      gp: 75,
      exp: 750,
    },
  },
  goldenknight3: {
    text: t('questSpecial3Part3Text'),
    notes: t('questSpecial3Part3Notes'),
    group: 'questGroupSpecial3',
    completion: t('questSpecial3Part3Completion'),
    previous: 'goldenknight2',
    prereqQuests: [
      'goldenknight1',
      'goldenknight2',
    ],
    value: 4,
    lvl: 40,
    category: 'unlockable',
    boss: {
      name: t('questSpecial3Part3Boss'),
      hp: 1700,
      str: 3.5,
    },
    drop: {
      items: [
        {
          type: 'food',
          key: 'Honey',
          text: t('questSpecial3Part3Drop1'),
        }, {
          type: 'food',
          key: 'Honey',
          text: t('questSpecial3Part3Drop1'),
        }, {
          type: 'food',
          key: 'Honey',
          text: t('questSpecial3Part3Drop1'),
        }, {
          type: 'hatchingPotions',
          key: 'Golden',
          text: t('questSpecial3Part3Drop2'),
        }, {
          type: 'hatchingPotions',
          key: 'Golden',
          text: t('questSpecial3Part3Drop2'),
        }, {
          type: 'gear',
          key: 'shield_special_goldenknight',
          text: t('questSpecial3Part3Drop3'),
        },
      ],
      gp: 900,
      exp: 1500,
    },
  },
  moon1: {
    text: t('questMoon1Text'),
    notes: t('questMoon1Notes'),
    group: 'questGroupMoon',
    completion: t('questMoon1Completion'),
    value: 4,
    category: 'unlockable',
    unlockCondition: {
      condition: 'login reward',
      incentiveThreshold: 7,
      text: t('loginReward', { count: 7 }),
    },
    collect: {
      shard: {
        text: t('questMoon1CollectShards'),
        count: 20,
      },
    },
    drop: {
      items: [
        {
          type: 'gear',
          key: 'head_special_lunarWarriorHelm',
          text: t('questMoon1DropHeadgear'),
        },
      ],
      gp: 7,
      exp: 50,
    },
  },
  moon2: {
    text: t('questMoon2Text'),
    notes: t('questMoon2Notes'),
    group: 'questGroupMoon',
    completion: t('questMoon2Completion'),
    previous: 'moon1',
    prereqQuests: [
      'moon1',
    ],
    value: 4,
    category: 'unlockable',
    unlockCondition: {
      condition: 'login reward',
      incentiveThreshold: 22,
      text: t('loginReward', { count: 22 }),
    },
    boss: {
      name: t('questMoon2Boss'),
      hp: 100,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'gear',
          key: 'armor_special_lunarWarriorArmor',
          text: t('questMoon2DropArmor'),
        },
      ],
      gp: 37,
      exp: 275,
    },
  },
  moon3: {
    text: t('questMoon3Text'),
    notes: t('questMoon3Notes'),
    group: 'questGroupMoon',
    completion: t('questMoon3Completion'),
    previous: 'moon2',
    prereqQuests: [
      'moon1',
      'moon2',
    ],
    value: 4,
    category: 'unlockable',
    unlockCondition: {
      condition: 'login reward',
      incentiveThreshold: 40,
      text: t('loginReward', { count: 40 }),
    },
    boss: {
      name: t('questMoon3Boss'),
      hp: 1000,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'gear',
          key: 'weapon_special_lunarScythe',
          text: t('questMoon3DropWeapon'),
        },
      ],
      gp: 67,
      exp: 650,
    },
  },
  moonstone1: {
    text: t('questSpecial2Part1Text'),
    notes: t('questSpecial2Part1Notes'),
    completion: t('questSpecial2Part1Completion'),
    group: 'questGroupSpecial2',
    value: 4,
    lvl: 60,
    category: 'unlockable',
    collect: {
      moonstone: {
        text: t('questSpecial2Part1Collect'),
        count: 100,
      },
    },
    drop: {
      items: [
        {
          type: 'quests',
          key: 'moonstone2',
          text: t('questSpecial2Part1DropPart2'),
          onlyOwner: true,
        },
      ],
      gp: 50,
      exp: 100,
    },
  },
  moonstone2: {
    text: t('questSpecial2Part2Text'),
    notes: t('questSpecial2Part2Notes'),
    completion: t('questSpecial2Part2Completion'),
    group: 'questGroupSpecial2',
    value: 4,
    lvl: 60,
    previous: 'moonstone1',
    prereqQuests: [
      'moonstone1',
    ],
    category: 'unlockable',
    boss: {
      name: t('questSpecial2Part2Boss'),
      hp: 1500,
      str: 3,
    },
    drop: {
      items: [
        {
          type: 'quests',
          key: 'moonstone3',
          text: t('questSpecial2Part2DropPart3'),
          onlyOwner: true,
        },
      ],
      gp: 500,
      exp: 1000,
    },
  },
  moonstone3: {
    text: t('questSpecial2Part3Text'),
    notes: t('questSpecial2Part3Notes'),
    group: 'questGroupSpecial2',
    completion: t('questSpecial2Part3Completion'),
    previous: 'moonstone2',
    prereqQuests: [
      'moonstone1',
      'moonstone2',
    ],
    value: 4,
    lvl: 60,
    category: 'unlockable',
    boss: {
      name: t('questSpecial2Part3Boss'),
      hp: 2000,
      str: 3.5,
    },
    drop: {
      items: [
        {
          type: 'gear',
          key: 'armor_special_2',
          text: t('armorSpecial2Text'),
        }, {
          type: 'food',
          key: 'RottenMeat',
          text: t('questSpecial2Part3Drop1'),
        }, {
          type: 'food',
          key: 'RottenMeat',
          text: t('questSpecial2Part3Drop1'),
        }, {
          type: 'food',
          key: 'RottenMeat',
          text: t('questSpecial2Part3Drop1'),
        }, {
          type: 'food',
          key: 'RottenMeat',
          text: t('questSpecial2Part3Drop1'),
        }, {
          type: 'food',
          key: 'RottenMeat',
          text: t('questSpecial2Part3Drop1'),
        }, {
          type: 'hatchingPotions',
          key: 'Zombie',
          text: t('questSpecial2Part3Drop2'),
        }, {
          type: 'hatchingPotions',
          key: 'Zombie',
          text: t('questSpecial2Part3Drop2'),
        }, {
          type: 'hatchingPotions',
          key: 'Zombie',
          text: t('questSpecial2Part3Drop2'),
        },
      ],
      gp: 900,
      exp: 1500,
    },
  },
  vice1: {
    text: t('questSpecial1Part1Text'),
    notes: t('questSpecial1Part1Notes'),
    completion: t('questSpecial1Part1Completion'),
    group: 'questGroupSpecial1',
    value: 4,
    lvl: 30,
    category: 'unlockable',
    boss: {
      name: t('questSpecial1Part1Boss'),
      hp: 750,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'quests',
          key: 'vice2',
          text: t('questSpecial1Part1DropPart2'),
          onlyOwner: true,
        },
      ],
      gp: 20,
      exp: 100,
    },
  },
  vice2: {
    text: t('questSpecial1Part2Text'),
    notes: t('questSpecial1Part2Notes'),
    completion: t('questSpecial1Part2Completion'),
    group: 'questGroupSpecial1',
    value: 4,
    lvl: 30,
    category: 'unlockable',
    previous: 'vice1',
    prereqQuests: [
      'vice1',
    ],
    collect: {
      lightCrystal: {
        text: t('questSpecial1Part2Collect'),
        count: 30,
      },
    },
    drop: {
      items: [
        {
          type: 'quests',
          key: 'vice3',
          text: t('questSpecial1Part2DropPart3'),
          onlyOwner: true,
        },
      ],
      gp: 20,
      exp: 75,
    },
  },
  vice3: {
    text: t('questSpecial1Part3Text'),
    notes: t('questSpecial1Part3Notes'),
    group: 'questGroupSpecial1',
    completion: t('questSpecial1Part3Completion'),
    previous: 'vice2',
    prereqQuests: [
      'vice1',
      'vice2',
    ],
    value: 4,
    lvl: 30,
    category: 'unlockable',
    boss: {
      name: t('questSpecial1Part3Boss'),
      hp: 1500,
      str: 3,
    },
    drop: {
      items: [
        {
          type: 'gear',
          key: 'weapon_special_2',
          text: t('questSpecial1Part3Drop1'),
        }, {
          type: 'eggs',
          key: 'Dragon',
          text: t('questSpecial1Part3Drop2'),
        }, {
          type: 'eggs',
          key: 'Dragon',
          text: t('questSpecial1Part3Drop2'),
        }, {
          type: 'hatchingPotions',
          key: 'Shade',
          text: t('questSpecial1Part3Drop3'),
        }, {
          type: 'hatchingPotions',
          key: 'Shade',
          text: t('questSpecial1Part3Drop3'),
        },
      ],
      gp: 100,
      exp: 1000,
    },
  },
};

export default QUEST_SERIES;
