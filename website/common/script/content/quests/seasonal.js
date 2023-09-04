import find from 'lodash/find';
import moment from 'moment';
import { EVENTS } from '../constants/events';
import t from '../translation';

const CURRENT_EVENT = find(
  EVENTS, event => moment().isBetween(event.start, event.end) && Boolean(event.season),
);

const QUEST_SEASONAL = {
  // winter
  evilsanta: {
    event: CURRENT_EVENT && CURRENT_EVENT.season === 'winter' ? CURRENT_EVENT : null,
    canBuy () {
      return this.event && moment().isBetween(this.event.start, this.event.end);
    },
    text: t('questWinter1Text'),
    notes: t('questWinter1Notes'),
    addlNotes: t('evilSantaAddlNotes'),
    completion: t('questWinter1Completion'),
    value: 4,
    category: 'pet',
    boss: {
      name: t('questWinter1Boss'),
      hp: 300,
      str: 1,
    },
    drop: {
      items: [
        {
          type: 'mounts',
          key: 'BearCub-Polar',
          text: t('questWinter1Drop'),
        },
      ],
      gp: 20,
      exp: 100,
    },
  },
  evilsanta2: {
    event: CURRENT_EVENT && CURRENT_EVENT.season === 'winter' ? CURRENT_EVENT : null,
    canBuy () {
      return this.event && moment().isBetween(this.event.start, this.event.end);
    },
    text: t('questWinter2Text'),
    notes: t('questWinter2Notes'),
    addlNotes: t('evilSantaAddlNotes'),
    completion: t('questWinter2Completion'),
    value: 4,
    category: 'pet',
    collect: {
      tracks: {
        text: t('questWinter2Collect1'),
        count: 20,
      },
      branches: {
        text: t('questWinter2Collect2'),
        count: 10,
      },
    },
    drop: {
      items: [
        {
          type: 'pets',
          key: 'BearCub-Polar',
          text: t('questWinter2Drop'),
        },
      ],
      gp: 20,
      exp: 100,
    },
  },
  // spring
  egg: {
    event: CURRENT_EVENT && CURRENT_EVENT.season === 'spring' ? CURRENT_EVENT : null,
    canBuy () {
      return this.event && moment().isBetween('2023-03-28T08:00-05:00', this.event.end);
    },
    text: t('questBasic2Text'),
    notes: t('questBasic2Notes'),
    completion: t('questBasic2Completion'),
    value: 1,
    category: 'pet',
    collect: {
      plainEgg: {
        text: t('questBasic2Collect'),
        count: 40,
      },
    },
    drop: {
      items: [
        {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        }, {
          type: 'eggs',
          key: 'Egg',
          text: t('questBasic2Drop'),
        },
      ],
      gp: 0,
      exp: 0,
    },
  },
  waffle: {
    event: CURRENT_EVENT && CURRENT_EVENT.season === 'spring' ? CURRENT_EVENT : null,
    canBuy () {
      return this.event && moment().isBetween(this.event.start, this.event.end);
    },
    text: t('questWaffleText'),
    notes: t('questWaffleNotes'),
    completion: t('questWaffleCompletion'),
    value: 4,
    category: 'hatchingPotion',
    boss: {
      name: t('questWaffleBoss'),
      hp: 500,
      str: 2,
      rage: {
        title: t('questWaffleRageTitle'),
        description: t('questWaffleRageDescription'),
        value: 50,
        progressDrain: 0.5,
        effect: t('questWaffleRageEffect'),
      },
    },
    drop: {
      items: [
        {
          type: 'hatchingPotions',
          key: 'Dessert',
          text: t('questWaffleDropDessertPotion'),
        }, {
          type: 'hatchingPotions',
          key: 'Dessert',
          text: t('questWaffleDropDessertPotion'),
        }, {
          type: 'hatchingPotions',
          key: 'Dessert',
          text: t('questWaffleDropDessertPotion'),
        },
      ],
      gp: 40,
      exp: 500,
      unlock: t('questWaffleUnlockText'),
    },
  },
  virtualpet: {
    event: CURRENT_EVENT && CURRENT_EVENT.season === 'spring' ? CURRENT_EVENT : null,
    canBuy () {
      return this.event && moment().isBetween(this.event.start, this.event.end);
    },
    text: t('questVirtualPetText'),
    notes: t('questVirtualPetNotes'),
    completion: t('questVirtualPetCompletion'),
    value: 4,
    category: 'hatchingPotion',
    boss: {
      name: t('questVirtualPetBoss'),
      hp: 500,
      str: 2,
      rage: {
        title: t('questVirtualPetRageTitle'),
        description: t('questVirtualPetRageDescription'),
        value: 50,
        progressDrain: 0.5,
        effect: t('questVirtualPetRageEffect'),
      },
    },
    drop: {
      items: [
        {
          type: 'hatchingPotions',
          key: 'VirtualPet',
          text: t('questVirtualPetDropVirtualPetPotion'),
        }, {
          type: 'hatchingPotions',
          key: 'VirtualPet',
          text: t('questVirtualPetDropVirtualPetPotion'),
        }, {
          type: 'hatchingPotions',
          key: 'VirtualPet',
          text: t('questVirtualPetDropVirtualPetPotion'),
        },
      ],
      gp: 40,
      exp: 500,
      unlock: t('questVirtualPetUnlockText'),
    },
  },
};

export default QUEST_SEASONAL;
