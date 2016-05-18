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
var menuMusic = new sound("./assets/audio/menuMusic.mp3");

var gameMusic = new sound("./assets/audio/gameMusic.mp3");

/**/
var transition = new sound();

var success = new sound();

var failure = new sound();

var click = new sound();

/**/
music.push(menuMusic, gameMusic);

sfx.push();