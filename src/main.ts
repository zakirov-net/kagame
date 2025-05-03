import kaplay from "kaplay";

const k = kaplay({
    width: 640,
    height: 480,
    background: [0, 0, 0],
    global: false,
    canvas: document.querySelector("#game") as HTMLCanvasElement,
});

const { loadSprite, add, sprite, pos, area, body, onKeyDown } = k;

async function loadSprites() {
    await Promise.all([
        loadSprite("player", "sprites/knight.png"),
    ]);
}
loadSprites();

const player = add([
    sprite("player"),
    pos(100, 100),
    area(),
    body(),
]);

onKeyDown("left", () => player.move(-120, 0));
onKeyDown("right", () => player.move(120, 0));
