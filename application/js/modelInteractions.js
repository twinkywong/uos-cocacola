//adapted from example code 'benskitchen.com'

function fantaScene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
    cameraFront('Fanta');

    document.getElementById('FantaButton').classList.remove('btn-primary');
    document.getElementById('CokeButton').classList.remove('btn-primary');
    document.getElementById('CostaButton').classList.remove('btn-primary');
    document.getElementById('CokeCanButton').classList.remove('btn-primary');
    document.getElementById('FantaButton').classList.add('btn-outline-primary');
    document.getElementById('CokeButton').classList.add('btn-outline-primary');
    document.getElementById('CostaButton').classList.add('btn-outline-primary');
    document.getElementById('CokeCanButton').classList.add('btn-outline-primary');

    document.getElementById('FantaButton').classList.add('btn-primary');
    document.getElementById('FantaButton').classList.remove('btn-outline-primary');
}

function cokeScene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
    cameraFront_Coca();

    document.getElementById('FantaButton').classList.remove('btn-primary');
    document.getElementById('CokeButton').classList.remove('btn-primary');
    document.getElementById('CostaButton').classList.remove('btn-primary');
    document.getElementById('CokeCanButton').classList.remove('btn-primary');
    document.getElementById('FantaButton').classList.add('btn-outline-primary');
    document.getElementById('CokeButton').classList.add('btn-outline-primary');
    document.getElementById('CostaButton').classList.add('btn-outline-primary');
    document.getElementById('CokeCanButton').classList.add('btn-outline-primary');

    document.getElementById('CokeButton').classList.add('btn-primary');
    document.getElementById('CokeButton').classList.remove('btn-outline-primary');
}

function costaScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
    cameraFront_Costa();

    document.getElementById('FantaButton').classList.remove('btn-primary');
    document.getElementById('CokeButton').classList.remove('btn-primary');
    document.getElementById('CostaButton').classList.remove('btn-primary');
    document.getElementById('CokeCanButton').classList.remove('btn-primary');
    document.getElementById('FantaButton').classList.add('btn-outline-primary');
    document.getElementById('CokeButton').classList.add('btn-outline-primary');
    document.getElementById('CostaButton').classList.add('btn-outline-primary');
    document.getElementById('CokeCanButton').classList.add('btn-outline-primary');

    document.getElementById('CostaButton').classList.add('btn-primary');
    document.getElementById('CostaButton').classList.remove('btn-outline-primary');
}

function cokeCanScene(){
    nSwitch = 3;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
    cameraFront('CokeCan');

    document.getElementById('FantaButton').classList.remove('btn-primary');
    document.getElementById('CokeButton').classList.remove('btn-primary');
    document.getElementById('CostaButton').classList.remove('btn-primary');
    document.getElementById('CokeCanButton').classList.remove('btn-primary');
    document.getElementById('FantaButton').classList.add('btn-outline-primary');
    document.getElementById('CokeButton').classList.add('btn-outline-primary');
    document.getElementById('CostaButton').classList.add('btn-outline-primary');
    document.getElementById('CokeCanButton').classList.add('btn-outline-primary');

    document.getElementById('CokeCanButton').classList.add('btn-primary');
    document.getElementById('CokeCanButton').classList.remove('btn-outline-primary');
}

var spinning = false;

function spin()
{ 
	spinning = !spinning;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'false');
}

function wireFrame()
{
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headLight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function omniLight()
{
	lightOn = !lightOn;
	document.getElementById('model__omniLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function targetLight()
{
	lightOn = !lightOn;
	document.getElementById('model__targetLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function cameraFront(drinkName)
{
    element = 'model__CameraFront_' + drinkName
    console.log(element)
	document.getElementById(element).setAttribute('bind', 'true');
}

function cameraBack(drinkName)
{
	document.getElementById('model__CameraBack_' + drinkName).setAttribute('bind', 'true');
}

function cameraLeft(drinkName)
{
	document.getElementById('model__CameraLeft_' + drinkName).setAttribute('bind', 'true');
}

function cameraRight(drinkName)
{
	document.getElementById('model__CameraRight_' + drinkName).setAttribute('bind', 'true');
}

function cameraTop(drinkName)
{
	document.getElementById('model__CameraTop_' + drinkName).setAttribute('bind', 'true');
}

function cameraBottom(drinkName)
{
	document.getElementById('model__CameraBottom_' + drinkName).setAttribute('bind', 'true');
}





function cameraFront_Fanta()
{
	document.getElementById('model__CameraFront_Fanta').setAttribute('bind', 'true');
}

function cameraBack_Fanta()
{
	document.getElementById('model__CameraBack_Fanta').setAttribute('bind', 'true');
}

function cameraLeft_Fanta()
{
	document.getElementById('model__CameraLeft_Fanta').setAttribute('bind', 'true');
}

function cameraRight_Fanta()
{
	document.getElementById('model__CameraRight_Fanta').setAttribute('bind', 'true');
}

function cameraTop_Fanta()
{
	document.getElementById('model__CameraTop_Fanta').setAttribute('bind', 'true');
}

function cameraBottom_Fanta()
{
	document.getElementById('model__CameraBottom_Fanta').setAttribute('bind', 'true');
}


function cameraFront_Coca()
{
	document.getElementById('model__CameraFront_Coca').setAttribute('bind', 'true');
}

function cameraBack_Coca()
{
	document.getElementById('model__CameraBack_Coca').setAttribute('bind', 'true');
}

function cameraLeft_Coca()
{
	document.getElementById('model__CameraLeft_Coca').setAttribute('bind', 'true');
}

function cameraRight_Coca()
{
	document.getElementById('model__CameraRight_Coca').setAttribute('bind', 'true');
}

function cameraTop_Coca()
{
	document.getElementById('model__CameraTop_Coca').setAttribute('bind', 'true');
}

function cameraBottom_Coca()
{
	document.getElementById('model__CameraBottom_Coca').setAttribute('bind', 'true');
}


function cameraFront_Costa()
{
	document.getElementById('model__CameraFront_Costa').setAttribute('bind', 'true');
}

function cameraBack_Costa()
{
	document.getElementById('model__CameraBack_Costa').setAttribute('bind', 'true');
}

function cameraLeft_Costa()
{
	document.getElementById('model__CameraLeft_Costa').setAttribute('bind', 'true');
}

function cameraRight_Costa()
{
	document.getElementById('model__CameraRight_Costa').setAttribute('bind', 'true');
}

function cameraTop_Costa()
{
	document.getElementById('model__CameraTop_Costa').setAttribute('bind', 'true');
}

function cameraBottom_Costa()
{
	document.getElementById('model__CameraBottom_Costa').setAttribute('bind', 'true');
}