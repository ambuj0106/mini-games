//hello to phasor 
// first project of phasor just a simple spin and win 

let config = {
	type: Phaser.CANVAS,
	width : 800,
	height : 600,
 // backgroundColor : "0xffdd",
	scene :{
		preload : preload,
		create : create,
		update : update,
	}
} ;

let game = new Phaser.Game(config);

function preload(){
	 //game.load.crossOrigin = 'anonymous';
	this.load.image('background','../assets/back.jpg');
  //  console.log(this);
}

function create(){
	console.log("created");
	let W = game.config.width;
	let H = game.config.height;
    
    let background = this.add.sprite(W/2,H/2,'background');
}
function update(){
  console.log("inside update");
}