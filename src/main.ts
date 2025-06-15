import { k, loadAssets } from "./core/kaboom";
import { registerGameScene } from "./scenes/game";

await loadAssets();

registerGameScene(k);

k.go("game");
