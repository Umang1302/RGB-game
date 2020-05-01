var number=6;
var color =generateColor(number);
var squares =document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay =document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1background =document.querySelector("#heading");
var newColor =document.querySelector("#newColor");
var hardbtn =document.querySelector("#hard");
var easybtn =document.querySelector("#easy");

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = color[i];

	squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
        	messageDisplay.textContent="Correct!!";
        	newColor.textContent="Play-Again!!"
        	for (var i=0;i<squares.length;i++) {
        		squares[i].style.backgroundColor=pickedColor;
        	}
        	h1background.style.backgroundColor=pickedColor;
        }else{
        	this.style.backgroundColor="#232323";
        	messageDisplay.textContent="Try Again!!";
        }

	});

}

function pickColor()
{
	var random=Math.floor(Math.random() * color.length);
    return color[random];
}

function generateColor(num){
	var arr=[];
	for (var i = 0; i< num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
     
}


newColor.addEventListener("click",function(){
    color=generateColor(number);
    pickedColor=pickColor();
    messageDisplay.textContent="";
    this.textContent="NEW COLOR";
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    { 
	squares[i].style.backgroundColor = color[i];
    } 
    h1background.style.backgroundColor="steelblue";
});



hardbtn.addEventListener("click",function(){
      hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  number=6;
   color=generateColor(number);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<squares.length;i++)
  {
  		squares[i].style.backgroundColor = color[i];
  		squares[i].style.display = "block";
   }
});


easybtn.addEventListener("click",function(){
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  number=3;
  color=generateColor(number);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<squares.length;i++)
{
	if(i<3)
	{
	   squares[i].style.backgroundColor = color[i];
    }else{
       squares[i].style.display = "none";
    }
}

});