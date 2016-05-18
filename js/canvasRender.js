//******************************************************************//
/*                    CANVAS/RENDERING CODE                        */
//****************************************************************//

/*Canvas namespace and data management*/
var gameArea = {
	canvas : null,
	ctx : null,
	WIDTH : 960,
	HEIGHT : 540,
	ratioX : null,
	ratioY : null,
	xMouse : null,
	yMouse : null,
	loaded : [],
	entities : [],
	clickable : [],
	droppable : [],
	strings : [],
	score : 0,
	sound : true,
	difficulty : 0,
	refTime : 0,
	clear : function() {
		gameArea.loaded = [];
		gameArea.entities = [];
		gameArea.clickable = [];
		gameArea.droppable = [];
		gameArea.strings = [];
	},
	parse : function() {
		gameArea.entities = gameArea.loaded[0];
		gameArea.clickable = gameArea.loaded[1];
		gameArea.droppable = gameArea.loaded[2];
		gameArea.strings = gameArea.loaded[3];
	},
	resize : function() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		gameArea.ratioX = this.canvas.width / gameArea.WIDTH;
		gameArea.ratioY = this.canvas.height / gameArea.HEIGHT;
	},
	render : function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for (var i = 0; i < this.entities.length; i++) {
			if (this.entities[i].z != 1) {
				var img = new Image();
				img.src = this.entities[i].src;
				img.width = this.entities[i].width;
				img.height = this.entities[i].height;
				img.xPos = this.entities[i].xPos;
				img.yPos = this.entities[i].yPos;
				img.index = this.entities[i].index;
				this.ctx.drawImage(img, 0, img.index * img.height, img.width, img.height, img.xPos * this.ratioX, img.yPos * this.ratioY, img.width * this.ratioX, img.height * this.ratioY);
			}
		}

		if (this.strings.length > 0) {//Draws text
			this.ctx.scale(this.ratioX, this.ratioY);
			for (var i = 0; i < this.strings.length; i++) {
				this.ctx.fillStyle = this.strings[i].colour;
				this.ctx.font = this.strings[i].sizeInit + this.strings[i].font;
				this.ctx.fillText(this.strings[i].parameter, this.strings[i].xPos, this.strings[i].yPos, this.strings[i].maxWidth);
			}
			this.ctx.scale(1 / this.ratioX, 1 / this.ratioY);
		}

		for (var i = 0; i < this.entities.length; i++) {//Z-index correction loop
			if (this.entities[i].z == 1) {
				var img = new Image();
				img.src = this.entities[i].src;
				img.width = this.entities[i].width;
				img.height = this.entities[i].height;
				img.xPos = this.entities[i].xPos;
				img.yPos = this.entities[i].yPos;
				img.index = this.entities[i].index;
				this.ctx.drawImage(img, 0, img.index * img.height, img.width, img.height, img.xPos * this.ratioX, img.yPos * this.ratioY, img.width * this.ratioX, img.height * this.ratioY);
			}
		}
	},
	init : function() {
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ratioX = this.canvas.width / gameArea.WIDTH;
		this.ratioY = this.canvas.height / gameArea.HEIGHT;
		gameArea.resize();

		if (detectmob()) {
			gameArea.canvas.addEventListener("touchstart", touchCollision);
			gameArea.canvas.addEventListener("touchmove", getCoords);
			gameArea.canvas.addEventListener("touchend", dropCollision);
			window.addEventListener("deviceorientation", gameArea.resize);
		} else {
			gameArea.canvas.addEventListener("click", clickCollision);
			gameArea.canvas.addEventListener("mousedown", dragCollision);
			gameArea.canvas.addEventListener("mousemove", getCoords);
			gameArea.canvas.addEventListener("mouseup", dropCollision);
			window.addEventListener("resize", gameArea.resize);
		}

		gameArea.loaded = load.menuScreen();
		gameArea.parse();

		this.lastTime = Date.now();
		main();
	}

}

/*Screen loader object*/
var load = new Loader();

//******************************************************************//
/*                            GAME LOOP                            */
//****************************************************************//
function main() {
	var now = Date.now();
	var dt = (now - gameArea.lastTime) / 1000.0;

	update(dt);
	gameArea.render();

	gameArea.lastTime = now;
	window.requestAnimFrame(main);
}

//******************************************************************//
/*                         INPUT CONTROLLER                        */
//****************************************************************//

/*Returns x and y coordinates of mouse or touch events*/
function getCoords(event) {
	if (detectmob()) {
		gameArea.xMouse = parseInt(event.changedTouches[0].clientX);
		gameArea.yMouse = parseInt(event.changedTouches[0].clientY);
	} else {
		gameArea.xMouse = event.clientX;
		gameArea.yMouse = event.clientY;
	}
}

/*Checks if mouse coordinates are within a hit box range*/
function clickCollision() {
	var xCoord = gameArea.xMouse;
	var yCoord = gameArea.yMouse;

	for (var i = 0; i < gameArea.clickable.length; i++) {
		if (gameArea.clickable[i].xMin * gameArea.ratioX <= xCoord && gameArea.clickable[i].xMax * gameArea.ratioX >= xCoord && gameArea.clickable[i].yMin * gameArea.ratioY <= yCoord && gameArea.clickable[i].yMax * gameArea.ratioY >= yCoord && gameArea.clickable[i].LOADER == true) {
			gameArea.clear();
			gameArea.loaded = load.clickable[i].clicked();
			gameArea.parse();
		} else if (gameArea.clickable[i].xMin * gameArea.ratioX <= xCoord && gameArea.clickable[i].xMax * gameArea.ratioX >= xCoord && gameArea.clickable[i].yMin * gameArea.ratioY <= yCoord && gameArea.clickable[i].yMax * gameArea.ratioY >= yCoord) {
			load.clickable[i].clicked();
		}
	}
}

/*Checks if mouse coordinates are within draggable objects range*/
function dragCollision() {
	var xCoord = gameArea.xMouse;
	var yCoord = gameArea.yMouse;

	for (var i = 0; i < gameArea.entities.length; i++) {
		if (gameArea.entities[i].xMin * gameArea.ratioX <= xCoord && gameArea.entities[i].xMax * gameArea.ratioX >= xCoord && gameArea.entities[i].yMin * gameArea.ratioY <= yCoord && gameArea.entities[i].yMax * gameArea.ratioY >= yCoord && gameArea.entities[i].isDraggable) {
			gameArea.entities[i].isClicked = true;
		}
	}
}

/*Compacts drag collision and click collision
for touch events*/
function touchCollision(event) {
	getCoords(event);
	var xCoord = gameArea.xMouse;
	var yCoord = gameArea.yMouse;

	if (gameArea.clickable.length > 0) {
		for (var i = 0; i < gameArea.clickable.length; i++) {
			if (gameArea.clickable[i].xMin * gameArea.ratioX <= xCoord && gameArea.clickable[i].xMax * gameArea.ratioX >= xCoord && gameArea.clickable[i].yMin * gameArea.ratioY <= yCoord && gameArea.clickable[i].yMax * gameArea.ratioY >= yCoord && gameArea.clickable[i].LOADER == true) {
				gameArea.clear();
				gameArea.loaded = load.clickable[i].clicked();
				gameArea.parse();
			} else if (gameArea.clickable[i].xMin * gameArea.ratioX <= xCoord && gameArea.clickable[i].xMax * gameArea.ratioX >= xCoord && gameArea.clickable[i].yMin * gameArea.ratioY <= yCoord && gameArea.clickable[i].yMax * gameArea.ratioY >= yCoord) {
				load.clickable[i].clicked();
			}
		}
	}
	
	for (var i = 0; i < gameArea.entities.length; i++) {
		if (gameArea.entities[i].xMin * gameArea.ratioX <= xCoord && gameArea.entities[i].xMax * gameArea.ratioX >= xCoord && gameArea.entities[i].yMin * gameArea.ratioY <= yCoord && gameArea.entities[i].yMax * gameArea.ratioY >= yCoord && gameArea.entities[i].isDraggable) {
			gameArea.entities[i].isClicked = true;
		}
	}
}

/*Detects drop collision with drag object by breaking the object into
quads. This does not account for larger drag objects than hit boxes.*/
function dropCollision() {
	for (var i = 0; i < gameArea.entities.length; i++) {
		if (gameArea.entities[i].isClicked) {
			for (var d = 0; d < load.droppable.length; d++) {
				if ((((gameArea.entities[i].xPos * gameArea.ratioX) >= (load.droppable[d].xMin * gameArea.ratioX)
					&& (gameArea.entities[i].xPos * gameArea.ratioX) <= (load.droppable[d].xMax * gameArea.ratioX)
					&& ((gameArea.entities[i].yPos + gameArea.entities[i].height) * gameArea.ratioY) >= (load.droppable[d].yMin * gameArea.ratioY)
					&& ((gameArea.entities[i].yPos + gameArea.entities[i].height) * gameArea.ratioY) <= (load.droppable[d].yMax * gameArea.ratioY))
					|| (((gameArea.entities[i].xPos + gameArea.entities[i].width) * gameArea.ratioX) >= (load.droppable[d].xMin * gameArea.ratioX)
					&& ((gameArea.entities[i].xPos + gameArea.entities[i].width) * gameArea.ratioX) <= (load.droppable[d].xMax * gameArea.ratioX)
					&& ((gameArea.entities[i].yPos + gameArea.entities[i].height) * gameArea.ratioY) >= (load.droppable[d].yMin * gameArea.ratioY)
					&& ((gameArea.entities[i].yPos + gameArea.entities[i].height) * gameArea.ratioY) <= (load.droppable[d].yMax * gameArea.ratioY))
					|| ((gameArea.entities[i].yPos * gameArea.ratioY) >= (load.droppable[d].yMin * gameArea.ratioY)
					&& (gameArea.entities[i].yPos * gameArea.ratioY) <= (load.droppable[d].yMax * gameArea.ratioY)
					&& ((gameArea.entities[i].xPos + gameArea.entities[i].width) * gameArea.ratioX) >= (load.droppable[d].xMin * gameArea.ratioX)
					&& ((gameArea.entities[i].xPos + gameArea.entities[i].width) * gameArea.ratioX) <= (load.droppable[d].xMax * gameArea.ratioX))
					|| ((gameArea.entities[i].xPos * gameArea.ratioX) >= (load.droppable[d].xMin * gameArea.ratioX)
					&& (gameArea.entities[i].xPos * gameArea.ratioX) <= (load.droppable[d].xMax * gameArea.ratioX)
					&& (gameArea.entities[i].yPos * gameArea.ratioY) >= (load.droppable[d].yMin * gameArea.ratioY)
					&& (gameArea.entities[i].yPos * gameArea.ratioY) <= (load.droppable[d].yMax * gameArea.ratioY)))
					&& gameArea.entities[i].isClicked) {

					

					if (load.droppable[d].isFilled) {
						for (var pos = 0; pos < gameArea.entities.length; pos++) {
							if (load.droppable[d].position == gameArea.entities[pos].position) {
								gameArea.entities.splice(pos, 1);
								gameArea.entities[i].drop();
								gameArea.entities[gameArea.entities.length - 1].xPos = load.droppable[d].xMin;
								gameArea.entities[gameArea.entities.length - 1].yPos = load.droppable[d].yMin;
								gameArea.entities[gameArea.entities.length - 1].position = load.droppable[d].position;
								gameArea.entities[i].xPos = gameArea.entities[i].xInit;
								gameArea.entities[i].yPos = gameArea.entities[i].yInit;
								gameArea.entities[i].isClicked = false;
								load.droppable[d].parameter = gameArea.entities[i].parameter;
								load.droppable[d].isFilled = true;
							}
						}
					} else {
						gameArea.entities[i].drop();
						gameArea.entities[gameArea.entities.length - 1].xPos = load.droppable[d].xMin;
						gameArea.entities[gameArea.entities.length - 1].yPos = load.droppable[d].yMin;
						gameArea.entities[gameArea.entities.length - 1].position = load.droppable[d].position;
						gameArea.entities[i].xPos = gameArea.entities[i].xInit;
						gameArea.entities[i].yPos = gameArea.entities[i].yInit;
						gameArea.entities[i].isClicked = false;
						load.droppable[d].parameter = gameArea.entities[i].parameter;
						load.droppable[d].isFilled = true;
					}
				}
			}
			if (gameArea.entities[i].isClicked) {
				gameArea.entities[i].xPos = gameArea.entities[i].xInit;
				gameArea.entities[i].yPos = gameArea.entities[i].yInit;
				gameArea.entities[i].isClicked = false;
			}
		}
	}
}

/*Handles draggable location on click*/
function handleInput(dt) {
	for (var i = 0; i < gameArea.entities.length; i++) {
		if (gameArea.entities[i].isClicked) {
			gameArea.entities[i].xPos = (gameArea.xMouse / gameArea.ratioX) - (gameArea.entities[i].width / 2);
			gameArea.entities[i].yPos = (gameArea.yMouse / gameArea.ratioY) - (gameArea.entities[i].height / 2);
		}
	}
}