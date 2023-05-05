Status = "";
Bottle_image = "";

function preload()
{
    Bottle_image = loadImage("colvn_512.jpg");
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status: true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}
function draw()
{
    image(Bottle_image, 0, 0, 640, 420);

    if(status !="")
    {
        for (i = 0; i < objects.length; i++)
        {
        document.getElementById("status").innerHTML = "Status : Objects Detected";

        fill("FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + perecent + "%", objects[i].x +15, objects[i].y + 15);
        noFill();
        stroke("#E6E6FA");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}