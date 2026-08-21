import { useState, useEffect } from 'react'
import './App.css'

import { clampStat, calculateAvg } from './hooks/math'
import { spriteAssets, getActiveSprite, statIcons } from './hooks/sprites'
import { StatBar, StatButton } from './components/stats'
import {Sprite} from './components/sprite'
import { StatBarHolder, StatButtonHolder } from './components/stat-bars'


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
      }, 2000);
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
  const sprite = getActiveSprite(currentAction, average, spriteAssets);

  // visuals
  return (
    <div className="w-screen h-dvh flex items-center justify-center bg-black">
      <div id="home" className="aspect-[9/16] h-full max-h-[90vh] max-w-sm mx-auto flex flex-col items-center bg-gradient-to-b from-[#EFE5FF] to-[#908CFF] overflow-hidden">
        <div id="main" className="w-full h-full flex flex-col items-center justify-between">
          {/* stat bars */}
          <StatBarHolder stats={stats} statIcons={statIcons} />

          {/* sprite */}
          <Sprite sprite={sprite} />

          {/* buttons */}
            <StatButtonHolder statIcons={statIcons} updateStat={updateStat} />
          </div>
        </div>
      </div>
  )
}

export default App
