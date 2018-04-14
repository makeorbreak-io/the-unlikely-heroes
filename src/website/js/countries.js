$(document).ready(function(){

//var json = require("../../db/APIcallTemplate.json");


var countries = {
option1:{value:"Portugal", text:"Portugal"},
option2:{value:"UK",text:"UK"},
option3:{value:"Jersey", text:"Jersey"},
option4:{value:"Romania", text: "Romania"}
}
	
	//Prepopulate the dropdown menues with the countries we have.
var residenceSelect = document.createElement("select");
residenceSelect.id = "residenceCountrySelector";
residenceSelect.class = "dropdown_selectCountry"

var incomeCountrySelect = document.createElement("select");
incomeCountrySelect.id = "incomeCountrySelector";
residenceSelect.class = "dropdown_selectCountry"
	
    
    $("#residenceSection").append(residenceSelect);	
    $("#incomeSection").append(incomeCountrySelect);	

	$.each(countries, function (i, item) {
    	
    	$("#residenceCountrySelector").append($('<option>', { 
        		value: item.value,
		  		text: item.text
	    }));
    
    	$("#incomeCountrySelector").append($('<option>', { 
        		value: item.value,
		  		text: item.text
    	}));
	});







})