const robot = require("robotjs");

(async function () {
    await new Promise(resolve => setTimeout(resolve, 30000)); // Initial delay

    const interval = 30000; // Run slightly under 30 seconds
    let angle = 0;

    setInterval(() => {
        const pos = robot.getMousePos();
        const radius = 5;

        // Calculate new small circular position
        const x = pos.x + Math.cos(angle) * radius;
        const y = pos.y + Math.sin(angle) * radius;

        robot.moveMouseSmooth(x, y);
        angle += Math.PI / 4; // Slightly rotate each time
    }, interval);
})();
