declare module Phaser {
    module Plugin {
        class AdvancedTiming extends  Phaser.Plugin {
            mod: string;
            constructor(game: Phaser.Game, parent: Phaser.PluginManager, options: any);
        }
    module Utils {
        class Debug {
            gameInfo(x: number, y: number): void;
            gameTimeInfo(x: number, y: number): void;
            }
        }
    }
}