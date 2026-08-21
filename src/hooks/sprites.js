import base from '../assets/sprites/base.png'
import sprite1 from '../assets/sprites/0.png'
import sprite2 from '../assets/sprites/1.png'
import sprite3 from '../assets/sprites/2.png'
import sprite4 from '../assets/sprites/3.png'
import love from '../assets/sprites/love.png'
import sleep from '../assets/sprites/sleep.png'
import feed from '../assets/sprites/feed.png'
import dead from '../assets/sprites/dead.png'

import heartIcon from '../assets/icons/love_icon.png'
import feedIcon from '../assets/icons/feed_icon.png'
import sleepIcon from '../assets/icons/sleep_icon.png'

export const statIcons = {
  love: heartIcon,
  hunger: feedIcon,
  energy: sleepIcon
};


export const spriteAssets = {
  base,
  actions: { love: love, hunger: feed, energy: sleep },
  idle: [sprite1, sprite2, sprite3, sprite4],
  dead
};

// Determines which sprite to display based on action or average health
export const getActiveSprite = (currentAction, average, {actions, idle, dead}) => {

  if (currentAction && actions[currentAction]) {
    return actions[currentAction];
  }
  switch(true) {
    case average >= 90:
      return idle[0];
    case average >= 60:
      return idle[1];
    case average >= 40:
      return idle[2];
    case average === 0:
      return dead;
  }
  return idle[3];
};

