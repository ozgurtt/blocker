/**
 * Client entry file
 */

console.log('Blocker - The Hunter is welcome!');

var config = require('./../../../common/config'),
  clientConfig = require('./config'),
  clientModule = require('./module'),
  blocker = require('./blocker'),
  socketUrl = location.protocol + '//' + location.hostname + ':' + config.serverPort;

window.COMMON_MODULE = require('./../../../common/module');
window.UI = require('./ui');
window.UTIL = require('./../../../common/util');
window.EVENT_NAME = config.eventName;
window.IS_DEBUG = config.isDebug;
window.GAME_WORLD_WIDTH = config.game.worldWidth;
window.GAME_WORLD_HEIGHT = config.game.worldHeight;
window.SOCKET = io(socketUrl);
window.WINDOW_WIDTH = window.innerWidth;
window.WINDOW_HEIGHT = window.innerHeight;
window.CLIENT_HEARTHBEAT = 1000;
window.GAME = new Phaser.Game(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.CANVAS, 'game-wrap');

UI.init();
GAME.state.add('Boot', blocker.Boot);
GAME.state.add('Load', blocker.Load);
GAME.state.add('Play', blocker.Play);

GAME.state.start('Boot');
