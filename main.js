cnavas=document.getElementById("myCanvas")
ctx=cnavas.getContext("2d")

var mouseEvent="empty"

color="cyan";
width_of_line=2

cnavas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
    mouseEvent="mouseDown"
    
}

cnavas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e)
{
    mouseEvent="mouseUP"
}


cnavas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e)
{
    mouseEvent="mouseLeave"
}

cnavas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{

    current_positon_of_mouse_x=e.clientX-cnavas.offsetLeft;
    current_positon_of_mouse_y=e.clientY-cnavas.offsetTop;

    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line
        ctx.arc(current_positon_of_mouse_x,current_positon_of_mouse_y,20,0,2 * Math.PI);
        console.log("current position of x and y coordinates =");
        console.log("x="+current_positon_of_mouse_x+"y="+current_positon_of_mouse_y)
        ctx.stroke()
    }
    last_positon_of_x=current_positon_of_mouse_x
    last_positon_of_y=current_positon_of_mouse_y
}