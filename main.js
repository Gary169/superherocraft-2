var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30 ;
block_image_height = 30 ;
player_x = 10;
player_y = 10;
var player_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(70);
        player_object.scaleToHeight(60);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });

}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38')
{
    up();
    console.log("up");
}

if(keyPressed == '40')
{
    down();
    console.log("down");
}

if(keyPressed == '37')
{
    left();
    console.log("left");
}

if(keyPressed == '39')
{
    right();
    console.log("right");
}

if(keyPressed == '87')
{
    new_image("ca_left.png");
    console.log("w")
}

if(keyPressed == '80')
{
    new_image("hulk_face.png");
    console.log("p")
}

if(keyPressed == '71')
{
    new_image("spiderman_body.png");
    console.log("g");
}

if(keyPressed == '76')
{
    new_image("spiderman_right_hand.png");
    console.log("l");
}

if(keyPressed == '84')
{
    new_image("hulk_legs.png");
    console.log("t");
}

if(keyPressed == '82')
{
    new_image("hulk_left_hand.png");
    console.log("r");
}

if(keyPressed == '89')
{
    new_image("hulk_right_hand.png");
    console.log("y");
}

if(keyPressed == '68')
{
    new_image("spiderman_body.png");
    console.log("d");
}

if(keyPressed == '85')
{
    new_image("hulk_right_hand.png");
    console.log("u");
}

if(keyPressed == '67')
{
    new_image("hulk_legs.png");
    console.log("t");
}
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("okup\\\yess")
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("okdown\\\yess")
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("okleft\\\yess")
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("okright\\\yess")
        canvas.remove(player_object);
        player_update();
    }
}