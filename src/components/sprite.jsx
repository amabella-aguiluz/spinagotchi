import { spriteAssets as defaultAssets, getActiveSprite } from '../hooks/sprites'

{/* sprite */ }
export function Sprite({ spriteAssets = defaultAssets, sprite }) {
    const baseImg = spriteAssets?.base;
    
    return (
        <div id="character-frame" className="w-full flex-1 min-h-0 py-2 relative">
            <img
                src={spriteAssets.base}
                className="max-h-full max-w-full object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <img
                src={sprite}
                className="max-h-full max-w-full object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
            />
        </div>
    )
}