import { useState, useEffect } from 'react'
import './App.css'

import heartIcon from './assets/icons/love_icon.png'
import feedIcon from './assets/icons/feed_icon.png'
import sleepIcon from './assets/icons/sleep_icon.png'
import base from './assets/sprites/base.png'
import sprite1 from './assets/sprites/0.png'
import sprite2 from './assets/sprites/1.png'
import sprite3 from './assets/sprites/2.png'
import sprite4 from './assets/sprites/3.png'
import love from './assets/sprites/love.png'
import sleep from './assets/sprites/sleep.png'
import feed from './assets/sprites/feed.png'
import dead from './assets/sprites/dead.png'

import { clampStat, calculateAvg, getActiveSprite } from './hooks/utils'
import { StatBar, StatButton } from './components/stats'


function App() {
  // code
  // base stats
  const [stats, setStats] = useState({
    love: 50,
    hunger: 50,
    energy: 50
  })

  const [currentAction, setCurrentAction] = useState(null)

  const { average } = calculateAvg(stats);

  const updateStat = (name, change) => {
    setStats(prev => ({
      ...prev,
      [name]: clampStat(prev[name] + change)
    }));
    setCurrentAction(null);
    setTimeout(() => {
      setCurrentAction(name);

      setTimeout(() => {
        setCurrentAction(prevAction => (prevAction === name ? null : prevAction));
      }, 1000);
    }, 0);
  };

  // stat decay
  useEffect(() => {
    const interval = setInterval(() => {
      const randomDecay = Math.floor(Math.random() * 10);
      setStats(prev => ({
        love: clampStat(prev.love - randomDecay),
        hunger: clampStat(prev.hunger - randomDecay),
        energy: clampStat(prev.energy - randomDecay)
      }));
    }, 200000);
    return () => clearInterval(interval);
  }, []);

  // change sprite
  const sprite = getActiveSprite(currentAction, average, {
    love,
    feed,
    sleep,
    sprite1,
    sprite2,
    sprite3,
    sprite4,
    dead
  });

  // visuals
  return (
    <div className="w-screen h-dvh flex items-center justify-center bg-black">
      <div id="home" className="aspect-[9/16] h-full max-h-[90vh] max-w-sm mx-auto flex flex-col items-center bg-gradient-to-b from-[#EFE5FF] to-[#908CFF] overflow-hidden">
        <div id="main" className="w-full h-full flex flex-col items-center justify-between">
          {/* stat bars */}
          <div
            id="bar-holder"
            className="p-[0.5rem] w-full flex flex-col items-center justify-center gap-[0.5rem] shrink-0"
          >
            <StatBar icon={heartIcon} value={stats.love} />
            <StatBar icon={feedIcon} value={stats.hunger} />
            <StatBar icon={sleepIcon} value={stats.energy} />
          </div>

          {/* sprite */}
          <div id="character-frame" className="w-full flex-1 min-h-0 py-2 relative">
            <img
              src={base}
              className="max-h-full max-w-full object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <img
              src={sprite}
              className="max-h-full max-w-full object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
            />
          </div>

          {/* buttons */}
          <div
            id="button-frame"
            className="w-full h-24 z-20 flex items-center justify-center bg-[#f4fbf8ff] shrink-0"
          >
            <div
              id="button-rows"
              className="w-full h-full justify-center items-center flex flex-row gap-[0.5rem] p-[1rem]"
            >
              <StatButton icon={heartIcon} statName="love" onClick={updateStat} />
              <StatButton icon={feedIcon} statName="hunger" onClick={updateStat} />
              <StatButton icon={sleepIcon} statName="energy" onClick={updateStat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
