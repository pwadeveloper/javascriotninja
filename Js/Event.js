var click = document.getElementById("click");
click.addEventListener("mousedown",function(){console.log("down")});
click.addEventListener("click",function(){console.log("click")});
click.addEventListener("mouseup",function(){console.log("up")});

var mouse = document.getElementById("mouse");
mouse.addEventListener("mouseover", highlight);
mouse.addEventListener("mouseout", highlight);
mouse.addEventListener("mousemove",function(){console.log("You moved"); } )

//Events
/*addEventListener("click", doSomething)
;

function doSomething(){
    alert("Yu clicked");
}
*/


function doSomething(event){
    console.log("something happned!");
}


addEventListener("click", doSomething);

/* to print out parameters and values with concant
method("A:(" +paarameter+ ","+parameter+ "),B:"( +paarameter+ ","+parameter+ "),C:(" +paarameter+ ","+parameter+ ")" )
e.g
console.log("screen:(" +event.screenX + "," +event.screenY+ "), page: (" + event.pageX + ","+ event.pageY+"), clent:("+ event.clientX+ "," + event.clientY+")");

*/
var dblclick = document.getElementById("dblclick");
dblclick.addEventListener("dblclick", highlight);
function highlight(event){
event.target.classList.toggle("highlight");
}

addEventListener("keydown", highlight);
addEventListener("keyup", function stop(event){
    var date = new Date;
    console.log("You Stopped pressing the key on" + date);
});

addEventListener("keypress", function(event){
    console.log("You pressed " +String.fromCharCode (event.charCode)+" key");
});

addEventListener("keydown", function(event){
    if (event.keyCode == 32 && event.ctrlKey)
    console.log("Action canclled");
});

addEventListener("click", function(event) {
if (event.shiftKey)
console.log("A Shifty Click!");
});