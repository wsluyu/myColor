//Create a stage by getting a reference to the canvas
//stage = new createjs.Stage("gameView");
var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);
var gameView = new createjs.Container();
stage.addChild(gameView);

//生成游戏界面的方块
function setGame (n){
	var cont = document.getElementById('container');
	var $gameView = document.getElementById('gameView');
	var width = cont.offsetWidth;
	var swidth = Math.floor((width - (n-1)*2) / n);
	$gameView.width = width;
	$gameView.height = width;
	var a = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	var c = Math.floor(Math.random()*255);
	var x=0,y=0;
	for(i=0;i<n;i++){
		for(j=0;j<n;j++){
			Rect = new createjs.Shape();
			Rect.graphics.beginFill("rgb("+ a +","+b+","+c+")").drawRect(x, y, swidth, swidth);
			//Rect.shadow = new createjs.Shadow("#000000", 5, 5, 10);
			gameView.addChild(Rect);
			//stage.update();
			console.log("rgb("+ a +","+b+","+c+")");	
			x = x + swidth + 2;
		}
		x = 0;
		y = y + swidth + 2;
	}
	setClickRect(n,a,b,c,swidth);

}
//生成颜色不同的方块
function setClickRect(n,a,b,c,swidth){

	var click_x = Math.floor(Math.random() * n) * (swidth+2);
    var click_y = Math.floor(Math.random() * n) * (swidth+2);
    console.log(click_x);
    console.log(click_y);
   	Rect_c = new createjs.Shape();
	Rect_c.graphics.beginFill("rgb("+ (a+20) +","+(b+20)+","+(c+20)+")").drawRect(click_x, click_y, swidth, swidth);
	gameView.addChild(Rect_c);
	//stage.update();	
	Rect_c.addEventListener("click",function() {clickRect(n);})
}

//点击颜色不同的方块
function clickRect (n) {
	if (n < 7) {
        ++n;
    }
    var score = document.getElementById("score");
    score.value ++;
    gameView.removeAllChildren();
    setGame(n);
}
setGame(2);

//开始游戏
var timer = setInterval(function(){
		var timeBtn = document.getElementById("time");
		if(timeBtn.value>0){
			timeBtn.value--;
		}
		else{
			alert("game over");
			window.clearInterval(timer);
			var score = document.getElementById("score").value;
			window.location.href='again.html?score=' + score;
		}
	},1000)