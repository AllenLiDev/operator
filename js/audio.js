//******************************************************************//
/*                           AUDIO                                 */
//****************************************************************//

/**/
var music = [];
var sfx = [];

function sound(src, loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.loop = loop;
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
var menuMusic = new sound("./assets/audioAssets/menuMusic.mp3", true);

var gameMusic = new sound("./assets/audioAssets/gameMusic.mp3", true);

/**/

var click = new sound("./assets/audioAssets/click.wav", false);

var bass = new sound("./assets/audioAssets/bass.wav", false);

var reward = new sound("./assets/audioAssets/reward.wav", false);

var correct = new sound("./assets/audioAssets/correct.wav", false);

var incorrect = new sound("./assets/audioAssets/incorrect.wav", false);

/**/
music.push(menuMusic, gameMusic);

sfx.push(click, bass, reward, correct, incorrect);