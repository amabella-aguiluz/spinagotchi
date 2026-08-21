import { StatBar, StatButton } from './stats'
import { clampStat, calculateAvg } from '../hooks/math'


{/* stat bars */ }
export function StatBarHolder({ stats, statIcons }) {
    return (
        <div
            id="bar-holder"
            className="p-[0.5rem] w-full flex flex-col items-center justify-center gap-[0.5rem] shrink-0"
        >
            <StatBar icon={statIcons.love} value={stats.love} />
            <StatBar icon={statIcons.hunger} value={stats.hunger} />
            <StatBar icon={statIcons.energy} value={stats.energy} />
        </div>
    )
}

{/* buttons */ }
export function StatButtonHolder({ statIcons, updateStat }) {
    return (
        <div
            id="button-frame"
            className="w-full h-24 z-20 flex items-center justify-center bg-[#f4fbf8ff] shrink-0"
        >
            <div
                id="button-rows"
                className="w-full h-full justify-center items-center flex flex-row gap-[0.5rem] p-[1rem]"
            >
                <StatButton icon={statIcons.love} statName="love" onClick={updateStat} />
                <StatButton icon={statIcons.hunger} statName="hunger" onClick={updateStat} />
                <StatButton icon={statIcons.energy} statName="energy" onClick={updateStat} />
            </div>
        </div>
    )
}