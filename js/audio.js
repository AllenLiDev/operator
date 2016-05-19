//******************************************************************//
/*                           AUDIO                                 */
//****************************************************************//

/**/
var music = [];
var sfx = [];

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
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
var menuMusic = new sound("./assets/audioAssets/menuMusic.mp3");

var gameMusic = new sound("./assets/audioAssets/gameMusic.mp3");

/**/

var click = new sound("./assets/audioAssets/click.wav");

var bass = new sound("./assets/audioAssets/bass.wav");

var reward = new sound("./assets/audioAssets/reward.wav");

var correct = new sound("./assets/audioAssets/correct.wav");

var incorrect = new sound("./assets/audioAssets/incorrect.wav");

/**/
music.push(menuMusic, gameMusic);

sfx.push(click, bass, reward, correct, incorrect);