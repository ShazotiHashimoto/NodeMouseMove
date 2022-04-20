const robot = require("robotjs");
//Get the mouse position, retuns an object with x and y. 


(async function(){
    await new Promise(resolve => setTimeout(resolve, 60000));
    let mouse=robot.getMousePos();
    //console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
    //Move the mouse down by 100 pixels.
    robot.moveMouse(mouse.x,mouse.y+1);
    robot.moveMouse(mouse.x,mouse.y-1);
    //console.log("mouse moved");
})();