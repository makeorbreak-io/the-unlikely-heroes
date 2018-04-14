$(document).ready(function{

var countries = {option1:{value:"Portugal", text:"Portugal"},option2:{value:"UK",text:"UK"}}
	
	//Prepopulate the dropdown menues with the countries we have.
var residenceSelect = document.createElement("select");
residenceSelect.id = "residenceCountrySelector";
	
        	$("#residenceSection").append(residenceSelect);
		

	$.each(countries, function (i, item) {
    $("#residenceCountrySelector").append($('<option>', { 
        value: item.value,
		  text: item.text
    }));
});


})