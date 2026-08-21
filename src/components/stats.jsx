{/* stat display*/}
export function StatBar({ icon, value }) {
  const barWidth = 200
  const fillWidth = (value / 100) * barWidth

  let color
  if (value >= 70) color = '#6AD871'
  else if (value >= 40) color = '#FBE044'
  else color = '#F38462'

  return (
    <div
      id="mood_bar"
      className="w-[280px] h-[25px] flex flex-row items-center gap-[6px] justify-center px-[15px] py-[3px]"
    >
      <img src={icon} alt="icon" className="w-[32px] h-[32px]" />
      <div
        id="bar_frame"
        className="relative w-[200px] h-[25px] rounded-[20px] bg-[#f4fbf8ff] border-[#f4fbf8ff] border-3"
      >
        <div
        // fills up the bar
          className="h-full rounded-full transition-all duration-50"
          style={{ width: `${fillWidth}px`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

{/* button component*/}
export function StatButton({ icon, statName, onClick }) {
  return (
    <button
      onClick={() => onClick(statName, 10)}
      className="w-[70px] h-[70px] p-[8px] flex items-center justify-center bg-transparent rounded-[15px] border-3 border-[#7c6dddff]"
    >
      <img src={icon} className="w-[45px] h-[45px]" />
    </button>
  )
}