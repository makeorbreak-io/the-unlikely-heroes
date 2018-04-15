$(document).ready(function(){

var countryHolderObject = {};

$.getJSON( "http://ownboss.eu:3000/sources", function( data ) {
	countryHolderObject = data;
	
	for (i=0; i < countryHolderObject.countries.length; i++) {
    	
    	$("#residenceCountrySelector").append($('<option>', { 
        		value: countryHolderObject.countries[i],
		  		text: countryHolderObject.countries[i]
		  		
	    }));
    
    	$("#incomeCountrySelector").append($('<option>', { 
        		value: countryHolderObject.countries[i],
		  		text: countryHolderObject.countries[i]
    	}));
	};
});
	
	//Prepopulate the dropdown menues with the countries we have.
var residenceSelect = document.createElement("select");
residenceSelect.id = "residenceCountrySelector";
residenceSelect.class = "dropdown_selectCountry"

var incomeCountrySelect = document.createElement("select");
incomeCountrySelect.id = "incomeCountrySelector";
residenceSelect.class = "dropdown_selectCountry"
	
    
    $("#residenceSection").append(residenceSelect);	
    $("#incomeSection").append(incomeCountrySelect);	

	
}) // end of Document, Ready, Function.