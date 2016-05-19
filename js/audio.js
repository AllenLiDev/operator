//******************************************************************//
/*                           AUDIO                                 */
//****************************************************************//

/**/
var music = [];
var sfx = [];

function sound(src, loop, volume) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.loop = loop;
    this.sound.volume = volume;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.play = function(){
        if (gameArea.sound) {
            this.sound.play();
        }
    }
    this.stop = function(){
        if (gameArea.sound) {
            this.sound.pause();
        }
    }
    this.setCurrentTime = function(x){
        if (gameArea.sound) {
    	   this.sound.currentTime = x;
        }
    }
}

/**/
var menuMusic = new sound("./assets/audioAssets/menuMusic.mp3", true, 0.5);

var gameMusic = new sound("./assets/audioAssets/gameMusic.mp3", true, 0.5);

/**/

var click = new sound("./assets/audioAssets/click.wav", false, 1);

var bass = new sound("./assets/audioAssets/bass.wav", false, 0.5);

var reward = new sound("./assets/audioAssets/reward.wav", false, 1);

var correct = new sound("./assets/audioAssets/correct.wav", false, 0.5);

var incorrect = new sound("./assets/audioAssets/incorrect.wav", false, 0.5);

/**/
music.push(menuMusic, gameMusic);

sfx.push(click, bass, reward, correct, incorrect);