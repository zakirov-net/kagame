import type { TKaboomCtx } from '../core/kaboom';

export function registerGameScene(k: TKaboomCtx) {
    const { scene, add, sprite, pos, area, body, onKeyDown } = k;

    scene("game", () => {
        const player = add([
            sprite("player"),
            pos(100, 100),
            area(),
            body(),
        ]);

        onKeyDown("left", () => player.move(-120, 0));
        onKeyDown("right", () => player.move(120, 0));
        onKeyDown("up", () => player.move(0, -120));
        onKeyDown("down", () => player.move(0, 120));
    });
}