let circleX, circleY, circleDiameter;
let circleColor;
let backgroundColor;
var count = 0; // this will keep track of button presses
function setup() {
    createCanvas(windowWidth, windowHeight);
    circleDiameter = min(width, height);
    circleX = width / 2;
    circleY = height / 2;
    circleColor = randomColor()
    backgroundColor = randomColor()

}

function draw() {
    background(backgroundColor);
    fill(circleColor);
    stroke(1);
    ellipse(circleX, circleY, circleDiameter, circleDiameter);

    text(`${count}`, circleX - 4, circleY)
    textSize(50)


}

function mouseClicked() {
    count += 1;
    const distanceFromCenter = dist(mouseX, mouseY, circleX, circleY);
    if (distanceFromCenter <= circleDiameter / 2) {
        circleColor = randomColor()
    } else {
        backgroundColor = randomColor()
        circleDiameter = random(30, windowWidth / 2)
    }
}


function randomColor() {
    return color(random(255), random(255), random(255));
}