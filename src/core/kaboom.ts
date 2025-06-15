import kaplay, { KAPLAYCtx } from "kaplay";
import { setupFocusFix } from "./setupFocusFix";

export type TKaboomCtx = KAPLAYCtx;

const CANVAS_SELECTOR = "#game";

export const k = kaplay({
    width: 640,
    height: 480,
    background: [0, 0, 0],
    global: false,
    canvas: document.querySelector(CANVAS_SELECTOR) as HTMLCanvasElement,
});

setupFocusFix(CANVAS_SELECTOR);

const { loadSprite } = k;

// Загрузка спрайтов и атласов
export async function loadAssets() {
    //await k.loadSpriteAtlas("/spritesheet.png", "/spritesheet.json");
    await Promise.all([
        loadSprite("player", "sprites/knight.png"),
    ]);
}
