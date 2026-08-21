{/* stat display*/ }
export function StatBar({ icon, value }) {
  let color
  if (value >= 70) color = '#6AD871'
  else if (value >= 40) color = '#FBE044'
  else color = '#F38462'

  return (
    <div
      id="mood_bar"
      className="w-[85%] max-w-xs flex flex-row items-center gap-2 justify-center px-3 py-0.5"
    >
      <img
        src={icon}
        alt="icon"
        className="object-contain shrink-0"
        style={{ width: '2.5rem', height: '2.5rem', minWidth: '2rem', minHeight: '2rem' }}
      />      <div
        id="bar_frame"
        className="relative flex-1 h-[1.5rem] rounded-full bg-[#f4fbf8ff] border-3 border-[#f4fbf8ff] overflow-hidden"
      >
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

{/* button component*/ }
export function StatButton({ icon, statName, onClick }) {
  return (
    <button
      onClick={() => onClick(statName, 10)}
      className="w-[2rem] h-[2rem] p-[2.5rem] flex items-center justify-center bg-transparent rounded-[1rem] border-3 border-[#7c6dddff]"
    >
      <img
        src={icon}
        alt={statName}
        className="object-contain w-[3.5rem] h-[3.5rem]"
      />
    </button>
  )
}