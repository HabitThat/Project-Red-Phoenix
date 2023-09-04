import t from '../translation';

const QUEST_PETS = {
  alligator: {
    text: t('questAlligatorText'),
    notes: t('questAlligatorNotes'),
    completion: t('questAlligatorCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questAlligatorBoss'),
      hp: 1100,
      str: 2.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Alligator',
          text: t('questAlligatorDropAlligatorEgg'),
        }, {
          type: 'eggs',
          key: 'Alligator',
          text: t('questAlligatorDropAlligatorEgg'),
        }, {
          type: 'eggs',
          key: 'Alligator',
          text: t('questAlligatorDropAlligatorEgg'),
        },
      ],
      gp: 73,
      exp: 725,
      unlock: t('questAlligatorUnlockText'),
    },
  },
  armadillo: {
    text: t('questArmadilloText'),
    notes: t('questArmadilloNotes'),
    completion: t('questArmadilloCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questArmadilloBoss'),
      hp: 600,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Armadillo',
          text: t('questArmadilloDropArmadilloEgg'),
        }, {
          type: 'eggs',
          key: 'Armadillo',
          text: t('questArmadilloDropArmadilloEgg'),
        }, {
          type: 'eggs',
          key: 'Armadillo',
          text: t('questArmadilloDropArmadilloEgg'),
        },
      ],
      gp: 43,
      exp: 350,
      unlock: t('questArmadilloUnlockText'),
    },
  },
  axolotl: {
    text: t('questAxolotlText'),
    notes: t('questAxolotlNotes'),
    completion: t('questAxolotlCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questAxolotlBoss'),
      hp: 500,
      str: 1.5,
      rage: {
        title: t('questAxolotlRageTitle'),
        description: t('questAxolotlRageDescription'),
        value: 50,
        healing: 0.3,
        effect: t('questAxolotlRageEffect'),
      },
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Axolotl',
          text: t('questAxolotlDropAxolotlEgg'),
        }, {
          type: 'eggs',
          key: 'Axolotl',
          text: t('questAxolotlDropAxolotlEgg'),
        }, {
          type: 'eggs',
          key: 'Axolotl',
          text: t('questAxolotlDropAxolotlEgg'),
        },
      ],
      gp: 37,
      exp: 275,
      unlock: t('questAxolotlUnlockText'),
    },
  },
  badger: {
    text: t('questBadgerText'),
    notes: t('questBadgerNotes'),
    completion: t('questBadgerCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questBadgerBoss'),
      hp: 600,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Badger',
          text: t('questBadgerDropBadgerEgg'),
        }, {
          type: 'eggs',
          key: 'Badger',
          text: t('questBadgerDropBadgerEgg'),
        }, {
          type: 'eggs',
          key: 'Badger',
          text: t('questBadgerDropBadgerEgg'),
        },
      ],
      gp: 43,
      exp: 350,
      unlock: t('questBadgerUnlockText'),
    },
  },
  beetle: {
    text: t('questBeetleText'),
    notes: t('questBeetleNotes'),
    completion: t('questBeetleCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questBeetleBoss'),
      hp: 500,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Beetle',
          text: t('questBeetleDropBeetleEgg'),
        }, {
          type: 'eggs',
          key: 'Beetle',
          text: t('questBeetleDropBeetleEgg'),
        }, {
          type: 'eggs',
          key: 'Beetle',
          text: t('questBeetleDropBeetleEgg'),
        },
      ],
      gp: 37,
      exp: 275,
      unlock: t('questBeetleUnlockText'),
    },
  },
  bunny: {
    text: t('questPet14Text'),
    notes: t('questPet14Notes'),
    completion: t('questPet14Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet14Boss'),
      hp: 300,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Bunny',
          text: t('questPet14Drop'),
        }, {
          type: 'eggs',
          key: 'Bunny',
          text: t('questPet14Drop'),
        }, {
          type: 'eggs',
          key: 'Bunny',
          text: t('questPet14Drop'),
        },
      ],
      gp: 25,
      exp: 125,
      unlock: t('questPet14UnlockText'),
    },
  },
  butterfly: {
    text: t('questButterflyText'),
    notes: t('questButterflyNotes'),
    completion: t('questButterflyCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questButterflyBoss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Butterfly',
          text: t('questButterflyDropButterflyEgg'),
        }, {
          type: 'eggs',
          key: 'Butterfly',
          text: t('questButterflyDropButterflyEgg'),
        }, {
          type: 'eggs',
          key: 'Butterfly',
          text: t('questButterflyDropButterflyEgg'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questButterflyUnlockText'),
    },
  },
  cheetah: {
    text: t('questCheetahText'),
    notes: t('questCheetahNotes'),
    completion: t('questCheetahCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questCheetahBoss'),
      hp: 600,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Cheetah',
          text: t('questCheetahDropCheetahEgg'),
        }, {
          type: 'eggs',
          key: 'Cheetah',
          text: t('questCheetahDropCheetahEgg'),
        }, {
          type: 'eggs',
          key: 'Cheetah',
          text: t('questCheetahDropCheetahEgg'),
        },
      ],
      gp: 43,
      exp: 350,
      unlock: t('questCheetahUnlockText'),
    },
  },
  cow: {
    text: t('questCowText'),
    notes: t('questCowNotes'),
    completion: t('questCowCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questCowBoss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Cow',
          text: t('questCowDropCowEgg'),
        }, {
          type: 'eggs',
          key: 'Cow',
          text: t('questCowDropCowEgg'),
        }, {
          type: 'eggs',
          key: 'Cow',
          text: t('questCowDropCowEgg'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questCowUnlockText'),
    },
  },
  dilatory_derby: { // eslint-disable-line camelcase
    text: t('questPet9Text'),
    notes: t('questPet9Notes'),
    completion: t('questPet9Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet9Boss'),
      hp: 300,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Seahorse',
          text: t('questPet9Drop'),
        }, {
          type: 'eggs',
          key: 'Seahorse',
          text: t('questPet9Drop'),
        }, {
          type: 'eggs',
          key: 'Seahorse',
          text: t('questPet9Drop'),
        },
      ],
      gp: 25,
      exp: 125,
      unlock: t('questPet9UnlockText'),
    },
  },
  dolphin: {
    text: t('questDolphinText'),
    notes: t('questDolphinNotes'),
    completion: t('questDolphinCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questDolphinBoss'),
      hp: 300,
      str: 1.25,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Dolphin',
          text: t('questDolphinDropDolphinEgg'),
        }, {
          type: 'eggs',
          key: 'Dolphin',
          text: t('questDolphinDropDolphinEgg'),
        }, {
          type: 'eggs',
          key: 'Dolphin',
          text: t('questDolphinDropDolphinEgg'),
        },
      ],
      gp: 22,
      exp: 110,
      unlock: t('questDolphinUnlockText'),
    },
  },
  falcon: {
    text: t('questFalconText'),
    notes: t('questFalconNotes'),
    completion: t('questFalconCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questFalconBoss'),
      hp: 700,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Falcon',
          text: t('questFalconDropFalconEgg'),
        }, {
          type: 'eggs',
          key: 'Falcon',
          text: t('questFalconDropFalconEgg'),
        }, {
          type: 'eggs',
          key: 'Falcon',
          text: t('questFalconDropFalconEgg'),
        },
      ],
      gp: 49,
      exp: 425,
      unlock: t('questFalconUnlockText'),
    },
  },
  ferret: {
    text: t('questFerretText'),
    notes: t('questFerretNotes'),
    completion: t('questFerretCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questFerretBoss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Ferret',
          text: t('questFerretDropFerretEgg'),
        }, {
          type: 'eggs',
          key: 'Ferret',
          text: t('questFerretDropFerretEgg'),
        }, {
          type: 'eggs',
          key: 'Ferret',
          text: t('questFerretDropFerretEgg'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questFerretUnlockText'),
    },
  },
  frog: {
    text: t('questFrogText'),
    notes: t('questFrogNotes'),
    completion: t('questFrogCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questFrogBoss'),
      hp: 300,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Frog',
          text: t('questFrogDropFrogEgg'),
        }, {
          type: 'eggs',
          key: 'Frog',
          text: t('questFrogDropFrogEgg'),
        }, {
          type: 'eggs',
          key: 'Frog',
          text: t('questFrogDropFrogEgg'),
        },
      ],
      gp: 25,
      exp: 125,
      unlock: t('questFrogUnlockText'),
    },
  },
  ghost_stag: { // eslint-disable-line camelcase
    text: t('questPet3Text'),
    notes: t('questPet3Notes'),
    completion: t('questPet3Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet3Boss'),
      hp: 1200,
      str: 2.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Deer',
          text: t('questPet3Drop'),
        }, {
          type: 'eggs',
          key: 'Deer',
          text: t('questPet3Drop'),
        }, {
          type: 'eggs',
          key: 'Deer',
          text: t('questPet3Drop'),
        },
      ],
      gp: 80,
      exp: 800,
      unlock: t('questPet3UnlockText'),
    },
  },
  gryphon: {
    text: t('questPetText'),
    notes: t('questPetNotes'),
    completion: t('questPetCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPetBoss'),
      hp: 300,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Gryphon',
          text: t('questPetDrop'),
        }, {
          type: 'eggs',
          key: 'Gryphon',
          text: t('questPetDrop'),
        }, {
          type: 'eggs',
          key: 'Gryphon',
          text: t('questPetDrop'),
        },
      ],
      gp: 25,
      exp: 125,
      unlock: t('questPetUnlockText'),
    },
  },
  guineapig: {
    text: t('questGuineaPigText'),
    notes: t('questGuineaPigNotes'),
    completion: t('questGuineaPigCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questGuineaPigBoss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'GuineaPig',
          text: t('questGuineaPigDropGuineaPigEgg'),
        }, {
          type: 'eggs',
          key: 'GuineaPig',
          text: t('questGuineaPigDropGuineaPigEgg'),
        }, {
          type: 'eggs',
          key: 'GuineaPig',
          text: t('questGuineaPigDropGuineaPigEgg'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questGuineaPigUnlockText'),
    },
  },
  harpy: {
    text: t('questPet6Text'),
    notes: t('questPet6Notes'),
    completion: t('questPet6Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet6Boss'),
      hp: 600,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Parrot',
          text: t('questPet6Drop'),
        }, {
          type: 'eggs',
          key: 'Parrot',
          text: t('questPet6Drop'),
        }, {
          type: 'eggs',
          key: 'Parrot',
          text: t('questPet6Drop'),
        },
      ],
      gp: 43,
      exp: 350,
      unlock: t('questPet6UnlockText'),
    },
  },
  hedgehog: {
    text: t('questPet2Text'),
    notes: t('questPet2Notes'),
    completion: t('questPet2Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet2Boss'),
      hp: 400,
      str: 1.25,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Hedgehog',
          text: t('questPet2Drop'),
        }, {
          type: 'eggs',
          key: 'Hedgehog',
          text: t('questPet2Drop'),
        }, {
          type: 'eggs',
          key: 'Hedgehog',
          text: t('questPet2Drop'),
        },
      ],
      gp: 30,
      exp: 125,
      unlock: t('questPet2UnlockText'),
    },
  },
  hippo: {
    text: t('questHippoText'),
    notes: t('questHippoNotes'),
    completion: t('questHippoCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questHippoBoss'),
      hp: 800,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Hippo',
          text: t('questHippoDropHippoEgg'),
        }, {
          type: 'eggs',
          key: 'Hippo',
          text: t('questHippoDropHippoEgg'),
        }, {
          type: 'eggs',
          key: 'Hippo',
          text: t('questHippoDropHippoEgg'),
        },
      ],
      gp: 55,
      exp: 500,
      unlock: t('questHippoUnlockText'),
    },
  },
  horse: {
    text: t('questHorseText'),
    notes: t('questHorseNotes'),
    completion: t('questHorseCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questHorseBoss'),
      hp: 500,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Horse',
          text: t('questHorseDropHorseEgg'),
        }, {
          type: 'eggs',
          key: 'Horse',
          text: t('questHorseDropHorseEgg'),
        }, {
          type: 'eggs',
          key: 'Horse',
          text: t('questHorseDropHorseEgg'),
        },
      ],
      gp: 37,
      exp: 275,
      unlock: t('questHorseUnlockText'),
    },
  },
  kangaroo: {
    text: t('questKangarooText'),
    notes: t('questKangarooNotes'),
    completion: t('questKangarooCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questKangarooBoss'),
      hp: 700,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Kangaroo',
          text: t('questKangarooDropKangarooEgg'),
        }, {
          type: 'eggs',
          key: 'Kangaroo',
          text: t('questKangarooDropKangarooEgg'),
        }, {
          type: 'eggs',
          key: 'Kangaroo',
          text: t('questKangarooDropKangarooEgg'),
        },
      ],
      gp: 49,
      exp: 425,
      unlock: t('questKangarooUnlockText'),
    },
  },
  kraken: {
    text: t('questPet17Text'),
    notes: t('questPet17Notes'),
    completion: t('questPet17Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet17Boss'),
      hp: 800,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Cuttlefish',
          text: t('questPet17Drop'),
        }, {
          type: 'eggs',
          key: 'Cuttlefish',
          text: t('questPet17Drop'),
        }, {
          type: 'eggs',
          key: 'Cuttlefish',
          text: t('questPet17Drop'),
        },
      ],
      gp: 55,
      exp: 500,
      unlock: t('questPet17UnlockText'),
    },
  },
  monkey: {
    text: t('questMonkeyText'),
    notes: t('questMonkeyNotes'),
    completion: t('questMonkeyCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questMonkeyBoss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Monkey',
          text: t('questMonkeyDropMonkeyEgg'),
        }, {
          type: 'eggs',
          key: 'Monkey',
          text: t('questMonkeyDropMonkeyEgg'),
        }, {
          type: 'eggs',
          key: 'Monkey',
          text: t('questMonkeyDropMonkeyEgg'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questMonkeyUnlockText'),
    },
  },
  nudibranch: {
    text: t('questNudibranchText'),
    notes: t('questNudibranchNotes'),
    completion: t('questNudibranchCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questNudibranchBoss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Nudibranch',
          text: t('questNudibranchDropNudibranchEgg'),
        }, {
          type: 'eggs',
          key: 'Nudibranch',
          text: t('questNudibranchDropNudibranchEgg'),
        }, {
          type: 'eggs',
          key: 'Nudibranch',
          text: t('questNudibranchDropNudibranchEgg'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questNudibranchUnlockText'),
    },
  },
  octopus: {
    text: t('questPet5Text'),
    notes: t('questPet5Notes'),
    completion: t('questPet5Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet5Boss'),
      hp: 1200,
      str: 2.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Octopus',
          text: t('questPet5Drop'),
        }, {
          type: 'eggs',
          key: 'Octopus',
          text: t('questPet5Drop'),
        }, {
          type: 'eggs',
          key: 'Octopus',
          text: t('questPet5Drop'),
        },
      ],
      gp: 80,
      exp: 800,
      unlock: t('questPet5UnlockText'),
    },
  },
  owl: {
    text: t('questPet10Text'),
    notes: t('questPet10Notes'),
    completion: t('questPet10Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet10Boss'),
      hp: 500,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Owl',
          text: t('questPet10Drop'),
        }, {
          type: 'eggs',
          key: 'Owl',
          text: t('questPet10Drop'),
        }, {
          type: 'eggs',
          key: 'Owl',
          text: t('questPet10Drop'),
        },
      ],
      gp: 37,
      exp: 275,
      unlock: t('questPet10UnlockText'),
    },
  },
  peacock: {
    text: t('questPeacockText'),
    notes: t('questPeacockNotes'),
    completion: t('questPeacockCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPeacockBoss'),
      hp: 300,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Peacock',
          text: t('questPeacockDropPeacockEgg'),
        }, {
          type: 'eggs',
          key: 'Peacock',
          text: t('questPeacockDropPeacockEgg'),
        }, {
          type: 'eggs',
          key: 'Peacock',
          text: t('questPeacockDropPeacockEgg'),
        },
      ],
      gp: 25,
      exp: 125,
      unlock: t('questPeacockUnlockText'),
    },
  },
  penguin: {
    text: t('questPet11Text'),
    notes: t('questPet11Notes'),
    completion: t('questPet11Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet11Boss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Penguin',
          text: t('questPet11Drop'),
        }, {
          type: 'eggs',
          key: 'Penguin',
          text: t('questPet11Drop'),
        }, {
          type: 'eggs',
          key: 'Penguin',
          text: t('questPet11Drop'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questPet11UnlockText'),
    },
  },
  pterodactyl: {
    text: t('questPterodactylText'),
    notes: t('questPterodactylNotes'),
    completion: t('questPterodactylCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPterodactylBoss'),
      hp: 1000,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Pterodactyl',
          text: t('questPterodactylDropPterodactylEgg'),
        }, {
          type: 'eggs',
          key: 'Pterodactyl',
          text: t('questPterodactylDropPterodactylEgg'),
        }, {
          type: 'eggs',
          key: 'Pterodactyl',
          text: t('questPterodactylDropPterodactylEgg'),
        },
      ],
      gp: 67,
      exp: 650,
      unlock: t('questPterodactylUnlockText'),
    },
  },
  rat: {
    text: t('questPet4Text'),
    notes: t('questPet4Notes'),
    completion: t('questPet4Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet4Boss'),
      hp: 1200,
      str: 2.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Rat',
          text: t('questPet4Drop'),
        }, {
          type: 'eggs',
          key: 'Rat',
          text: t('questPet4Drop'),
        }, {
          type: 'eggs',
          key: 'Rat',
          text: t('questPet4Drop'),
        },
      ],
      gp: 80,
      exp: 800,
      unlock: t('questPet4UnlockText'),
    },
  },
  rock: {
    text: t('questPet13Text'),
    notes: t('questPet13Notes'),
    completion: t('questPet13Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet13Boss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Rock',
          text: t('questPet13Drop'),
        }, {
          type: 'eggs',
          key: 'Rock',
          text: t('questPet13Drop'),
        }, {
          type: 'eggs',
          key: 'Rock',
          text: t('questPet13Drop'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questPet13UnlockText'),
    },
  },
  rooster: {
    text: t('questPet7Text'),
    notes: t('questPet7Notes'),
    completion: t('questPet7Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet7Boss'),
      hp: 300,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Rooster',
          text: t('questPet7Drop'),
        }, {
          type: 'eggs',
          key: 'Rooster',
          text: t('questPet7Drop'),
        }, {
          type: 'eggs',
          key: 'Rooster',
          text: t('questPet7Drop'),
        },
      ],
      gp: 25,
      exp: 125,
      unlock: t('questPet7UnlockText'),
    },
  },
  sabretooth: {
    text: t('questSabretoothText'),
    notes: t('questSabretoothNotes'),
    completion: t('questSabretoothCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questSabretoothBoss'),
      hp: 1000,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Sabretooth',
          text: t('questSabretoothDropSabretoothEgg'),
        }, {
          type: 'eggs',
          key: 'Sabretooth',
          text: t('questSabretoothDropSabretoothEgg'),
        }, {
          type: 'eggs',
          key: 'Sabretooth',
          text: t('questSabretoothDropSabretoothEgg'),
        },
      ],
      gp: 67,
      exp: 650,
      unlock: t('questSabretoothUnlockText'),
    },
  },
  seaserpent: {
    text: t('questSeaSerpentText'),
    notes: t('questSeaSerpentNotes'),
    completion: t('questSeaSerpentCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questSeaSerpentBoss'),
      hp: 1200,
      str: 2.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'SeaSerpent',
          text: t('questSeaSerpentDropSeaSerpentEgg'),
        }, {
          type: 'eggs',
          key: 'SeaSerpent',
          text: t('questSeaSerpentDropSeaSerpentEgg'),
        }, {
          type: 'eggs',
          key: 'SeaSerpent',
          text: t('questSeaSerpentDropSeaSerpentEgg'),
        },
      ],
      gp: 80,
      exp: 800,
      unlock: t('questSeaSerpentUnlockText'),
    },
  },
  sheep: {
    text: t('questPet16Text'),
    notes: t('questPet16Notes'),
    completion: t('questPet16Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet16Boss'),
      hp: 300,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Sheep',
          text: t('questPet16Drop'),
        }, {
          type: 'eggs',
          key: 'Sheep',
          text: t('questPet16Drop'),
        }, {
          type: 'eggs',
          key: 'Sheep',
          text: t('questPet16Drop'),
        },
      ],
      gp: 25,
      exp: 125,
      unlock: t('questPet16UnlockText'),
    },
  },
  slime: {
    text: t('questPet15Text'),
    notes: t('questPet15Notes'),
    completion: t('questPet15Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet15Boss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Slime',
          text: t('questPet15Drop'),
        }, {
          type: 'eggs',
          key: 'Slime',
          text: t('questPet15Drop'),
        }, {
          type: 'eggs',
          key: 'Slime',
          text: t('questPet15Drop'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questPet15UnlockText'),
    },
  },
  sloth: {
    text: t('questSlothText'),
    notes: t('questSlothNotes'),
    completion: t('questSlothCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questSlothBoss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Sloth',
          text: t('questSlothDropSlothEgg'),
        }, {
          type: 'eggs',
          key: 'Sloth',
          text: t('questSlothDropSlothEgg'),
        }, {
          type: 'eggs',
          key: 'Sloth',
          text: t('questSlothDropSlothEgg'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questSlothUnlockText'),
    },
  },
  snail: {
    text: t('questSnailText'),
    notes: t('questSnailNotes'),
    completion: t('questSnailCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questSnailBoss'),
      hp: 500,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Snail',
          text: t('questSnailDropSnailEgg'),
        }, {
          type: 'eggs',
          key: 'Snail',
          text: t('questSnailDropSnailEgg'),
        }, {
          type: 'eggs',
          key: 'Snail',
          text: t('questSnailDropSnailEgg'),
        },
      ],
      gp: 37,
      exp: 275,
      unlock: t('questSnailUnlockText'),
    },
  },
  snake: {
    text: t('questSnakeText'),
    notes: t('questSnakeNotes'),
    completion: t('questSnakeCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questSnakeBoss'),
      hp: 1100,
      str: 2.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Snake',
          text: t('questSnakeDropSnakeEgg'),
        }, {
          type: 'eggs',
          key: 'Snake',
          text: t('questSnakeDropSnakeEgg'),
        }, {
          type: 'eggs',
          key: 'Snake',
          text: t('questSnakeDropSnakeEgg'),
        },
      ],
      gp: 73,
      exp: 725,
      unlock: t('questSnakeUnlockText'),
    },
  },
  spider: {
    text: t('questPet8Text'),
    notes: t('questPet8Notes'),
    completion: t('questPet8Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet8Boss'),
      hp: 400,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Spider',
          text: t('questPet8Drop'),
        }, {
          type: 'eggs',
          key: 'Spider',
          text: t('questPet8Drop'),
        }, {
          type: 'eggs',
          key: 'Spider',
          text: t('questPet8Drop'),
        },
      ],
      gp: 31,
      exp: 200,
      unlock: t('questPet8UnlockText'),
    },
  },
  squirrel: {
    text: t('questSquirrelText'),
    notes: t('questSquirrelNotes'),
    completion: t('questSquirrelCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questSquirrelBoss'),
      hp: 700,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Squirrel',
          text: t('questSquirrelDropSquirrelEgg'),
        }, {
          type: 'eggs',
          key: 'Squirrel',
          text: t('questSquirrelDropSquirrelEgg'),
        }, {
          type: 'eggs',
          key: 'Squirrel',
          text: t('questSquirrelDropSquirrelEgg'),
        },
      ],
      gp: 49,
      exp: 425,
      unlock: t('questSquirrelUnlockText'),
    },
  },
  treeling: {
    text: t('questTreelingText'),
    notes: t('questTreelingNotes'),
    completion: t('questTreelingCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questTreelingBoss'),
      hp: 600,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Treeling',
          text: t('questTreelingDropTreelingEgg'),
        }, {
          type: 'eggs',
          key: 'Treeling',
          text: t('questTreelingDropTreelingEgg'),
        }, {
          type: 'eggs',
          key: 'Treeling',
          text: t('questTreelingDropTreelingEgg'),
        },
      ],
      gp: 43,
      exp: 350,
      unlock: t('questTreelingUnlockText'),
    },
  },
  trex: {
    text: t('questPet12Text'),
    notes: t('questPet12Notes'),
    completion: t('questPet12Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet12Boss'),
      hp: 800,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'TRex',
          text: t('questPet12Drop'),
        }, {
          type: 'eggs',
          key: 'TRex',
          text: t('questPet12Drop'),
        }, {
          type: 'eggs',
          key: 'TRex',
          text: t('questPet12Drop'),
        },
      ],
      gp: 55,
      exp: 500,
      unlock: t('questPet12UnlockText'),
    },
  },
  trex_undead: { // eslint-disable-line camelcase
    text: t('questPet12v2Text'),
    notes: t('questPet12v2Notes'),
    completion: t('questPet12v2Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questPet12v2Boss'),
      hp: 500,
      str: 2,
      rage: {
        title: t('questPet12v2RageTitle'),
        description: t('questPet12v2RageText'),
        value: 50,
        healing: 0.3,
        effect: t('questPet12v2RageEffect'),
      },
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'TRex',
          text: t('questPet12Drop'),
        }, {
          type: 'eggs',
          key: 'TRex',
          text: t('questPet12Drop'),
        }, {
          type: 'eggs',
          key: 'TRex',
          text: t('questPet12Drop'),
        },
      ],
      gp: 55,
      exp: 500,
      unlock: t('questPet12UnlockText'),
    },
  },
  triceratops: {
    text: t('questTriceratopsText'),
    notes: t('questTriceratopsNotes'),
    completion: t('questTriceratopsCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questTriceratopsBoss'),
      hp: 1200,
      str: 2.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Triceratops',
          text: t('questTriceratopsDropTriceratopsEgg'),
        }, {
          type: 'eggs',
          key: 'Triceratops',
          text: t('questTriceratopsDropTriceratopsEgg'),
        }, {
          type: 'eggs',
          key: 'Triceratops',
          text: t('questTriceratopsDropTriceratopsEgg'),
        },
      ],
      gp: 80,
      exp: 800,
      unlock: t('questTriceratopsUnlockText'),
    },
  },
  turtle: {
    text: t('questTurtleText'),
    notes: t('questTurtleNotes'),
    completion: t('questTurtleCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questTurtleBoss'),
      hp: 300,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Turtle',
          text: t('questTurtleDropTurtleEgg'),
        }, {
          type: 'eggs',
          key: 'Turtle',
          text: t('questTurtleDropTurtleEgg'),
        }, {
          type: 'eggs',
          key: 'Turtle',
          text: t('questTurtleDropTurtleEgg'),
        },
      ],
      gp: 25,
      exp: 125,
      unlock: t('questTurtleUnlockText'),
    },
  },
  unicorn: {
    text: t('questUnicornText'),
    notes: t('questUnicornNotes'),
    completion: t('questUnicornCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questUnicornBoss'),
      hp: 600,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Unicorn',
          text: t('questUnicornDropUnicornEgg'),
        }, {
          type: 'eggs',
          key: 'Unicorn',
          text: t('questUnicornDropUnicornEgg'),
        }, {
          type: 'eggs',
          key: 'Unicorn',
          text: t('questUnicornDropUnicornEgg'),
        },
      ],
      gp: 43,
      exp: 350,
      unlock: t('questUnicornUnlockText'),
    },
  },
  velociraptor: {
    text: t('questVelociraptorText'),
    notes: t('questVelociraptorNotes'),
    completion: t('questVelociraptorCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questVelociraptorBoss'),
      hp: 900,
      str: 2,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Velociraptor',
          text: t('questVelociraptorDropVelociraptorEgg'),
        }, {
          type: 'eggs',
          key: 'Velociraptor',
          text: t('questVelociraptorDropVelociraptorEgg'),
        }, {
          type: 'eggs',
          key: 'Velociraptor',
          text: t('questVelociraptorDropVelociraptorEgg'),
        },
      ],
      gp: 63,
      exp: 575,
      unlock: t('questVelociraptorUnlockText'),
    },
  },
  whale: {
    text: t('questPet18Text'),
    notes: t('questPet18Notes'),
    completion: t('questWhaleCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questWhaleBoss'),
      hp: 500,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Whale',
          text: t('questWhaleDropWhaleEgg'),
        }, {
          type: 'eggs',
          key: 'Whale',
          text: t('questWhaleDropWhaleEgg'),
        }, {
          type: 'eggs',
          key: 'Whale',
          text: t('questWhaleDropWhaleEgg'),
        },
      ],
      gp: 37,
      exp: 275,
      unlock: t('questWhaleUnlockText'),
    },
  },
  yarn: {
    text: t('questYarnText'),
    notes: t('questYarnNotes'),
    completion: t('questYarnCompletion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questYarnBoss'),
      hp: 500,
      str: 1.5,
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Yarn',
          text: t('questYarnDropYarnEgg'),
        }, {
          type: 'eggs',
          key: 'Yarn',
          text: t('questYarnDropYarnEgg'),
        }, {
          type: 'eggs',
          key: 'Yarn',
          text: t('questYarnDropYarnEgg'),
        },
      ],
      gp: 37,
      exp: 275,
      unlock: t('questYarnUnlockText'),
    },
  },
};

export default QUEST_PETS;
