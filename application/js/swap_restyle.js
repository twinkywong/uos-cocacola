// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	
});

function selectPage() {

	$('#home').show();
	$('#about').hide();
	$('#models').hide();
	$('#interaction').hide();
	$('#fantaDescription').hide();
	$('#cokeDescription').hide();
	$('#cokeCanDescription').hide();
	$('#costaDescription').hide(); 


	$('#navHome').click(function(){
		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#fantaDescription').hide();
		$('#cokeDescription').hide(); 
		$('#costaDescription').hide();
		$('#cokeCanDescription').hide();
	});

	$('#navAbout').click(function(){
		$('#home').hide();
		$('#about').show();
		$('#models').hide();
		$('#interaction').hide();
		$('#fantaDescription').hide();
		$('#cokeDescription').hide(); 
		$('#costaDescription').hide();
		$('#cokeCanDescription').hide();
	});

	$('#navModels').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#models').show();
		$('#interaction').show(); 
		$('#fantaDescription').show();
		$('#cokeDescription').hide(); 
		$('#costaDescription').hide();
		$('#cokeCanDescription').hide();
		$("#x3dModelTitle_fanta").show();
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_costa").hide();
		$("#x3dModelTitle_cokeCan").hide();
		$("#x3dCreationMethod_fanta").show();
		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_costa").hide();
		$("#x3dCreationMethod_cokeCan").hide();
		$("#Fanta_cam").show();
		fantaScene();

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
	});
}


function fantaDescription() {
	$("button").click(function(){
		
		$("#fantaDescription").show();
        $("#cokeDescription").hide();
		$("#costaDescription").hide();
		
		$("#x3dModelTitle_fanta").show();
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_costa").hide();

		$("#x3dCreationMethod_fanta").show();
		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_costa").hide();

		$("#Fanta_cam").show();
		$("#Coca_cam").hide();
		$("#Costa_cam").hide();

        $("#cokeCanDescription").hide();
		$("#x3dModelTitle_cokeCan").hide();
		$("#x3dCreationMethod_cokeCan").hide();
		$("#CokeCan_cam").hide();
    }); 
}

function cokeDescription() {
    $("button").click(function(){

        $("#fantaDescription").hide();
        $("#cokeDescription").show();
		$("#costaDescription").hide();
		
		$("#x3dModelTitle_fanta").hide();
		$("#x3dModelTitle_coke").show();
		$("#x3dModelTitle_costa").hide();

		$("#x3dCreationMethod_fanta").hide();
		$("#x3dCreationMethod_coke").show();
		$("#x3dCreationMethod_costa").hide();

		$("#Fanta_cam").hide();
		$("#Coca_cam").show();
		$("#Costa_cam").hide();

        $("#cokeCanDescription").hide();
		$("#x3dModelTitle_cokeCan").hide();
		$("#x3dCreationMethod_cokeCan").hide();
		$("#CokeCan_cam").hide();
    }); 
}

function cokeCanDescription() {
    $("button").click(function(){

        $("#fantaDescription").hide();
        $("#cokeCanDescription").show();
		$("#cokeDescription").hide();
		$("#costaDescription").hide();

		$("#x3dModelTitle_fanta").hide();
		$("#x3dModelTitle_cokeCan").show();
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_costa").hide();

		$("#x3dCreationMethod_fanta").hide();
		$("#x3dCreationMethod_cokeCan").show();
		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_costa").hide();

		$("#Fanta_cam").hide();
		$("#CokeCan_cam").show();
		$("#Coca_cam").hide();
		$("#Costa_cam").hide();
    });
}

function costaDescription() {
    $("button").click(function(){

        $("#fantaDescription").hide();
        $("#cokeDescription").hide();
		$("#costaDescription").show();
		
		$("#x3dModelTitle_fanta").hide();
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_costa").show();

		$("#x3dCreationMethod_fanta").hide();
		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_costa").show();

		$("#Fanta_cam").hide();
		$("#Coca_cam").hide();
		$("#Costa_cam").show();

        $("#cokeCanDescription").hide();
		$("#x3dModelTitle_cokeCan").hide();
		$("#x3dCreationMethod_cokeCan").hide();
		$("#CokeCan_cam").hide();
    }); 
}

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = 'lightblue';
			document.getElementById('headerColor').style.backgroundColor = '#FF0000';
			document.getElementById('footerColor').style.backgroundColor = '#FF9900';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#FF6600';
			document.getElementById('headerClor').style.backgroundColor = '#FF9999';
			document.getElementById('footerColor').style.backgroundColor = '#996699';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = 'coral';
			document.getElementById('headerColor').style.backgroundColor = 'darkcyan';
			document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
			break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
			document.getElementById('headerColor').style.backgroundColor = 'chocolate';
			document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}

