$(document).ready(function(){

var countryHolderObject = {};
var countries = ["UK","Portugal","Spain"];
var countryDB = [
{"country": "Portugal",
	"agreementCountries":[
        {"country":"UK",
        "url": "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/500344/uk-portugal-dta_-_in_force.pdf",
        "dateOfAgreement"	: "1968-03-27",
        "dateOfInforcement": "1969-01-17",
        "salary":	"only residence",
        "directorFee": "residence state",
        "profitFromImmovableProperty": "no limit, taxed only",
        "profitFromMovableProperty": "no limit",
        "dividends": "10%",
        "bankInterest":	"residence state",
        "corporationTax":	"yes",
        "permanentEstablishmentTime":	"yes",
        "businessProfits": "UK",
        "royalties":"Portugal",
        "students": "no taxes",
        "pensions":	"Portugal",
        "commission": "residence state"
      },
        {"country":"Romania",
        "url": "http://www.gddc.pt/siii/docs/rar56-1999.pdf",
        "dateOfAgreement"	: "1997-09-16",
        "dateOfInforcement": "1999-04-15",
        "salary":	"the residence state",
        "directorFee":	"the residence state",
        "profitFromImmovableProperty":	"the residence state",
        "profitFromMovableProperty":	"the residence state",
        "dividends":	"the residence state",
        "bankInterest":	"the residence state, income country max 10%",
        "corporationTax":	"income, suprataxa for business income in residence",
        "permanentEstablishmentTime":	"n/a",
        "businessProfits":	"only residence state",
        "royalties":"the residence state",
        "students": "no, max 3k/year, 2 years",
        "pensions":	"income state",
        "commission": "residence state, or income with max 12,5%"}]
},
{"country": "Romania",
  "agreementCountries": [
        {"country":"UK",
        "url": "https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/Conventii/MareaBritanie.htm",
        "dateOfAgreement"	: "1976-02-03",
        "dateOfInforcement": "1976-04-01",
        "salary":	"the residence state",
        "directorFee": "the residence state",
        "profitFromImmovableProperty": "where the property is",
        "profitFromMovableProperty": "where the property is",
        "dividends": "the residence state",
        "bankInterest":	"the residence state, max 10% incoming state",
        "corporationTax":	"income country",
        "permanentEstablishmentTime":	"n/a",
        "businessProfits": "the residence state",
        "royalties":"the residence state, max 15% incoming state",
        "students": "500 lire limit/an; max 5 ani",
        "pensions":	"income state",
        "commission": "residence state, or income with max 12,5%"
      },
        {"country":"Portugal",
        "url": "https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/Conventii/Portugalia.htm",
        "dateOfAgreement"	: "1997-09-16",
        "dateOfInforcement": "1999-04-15",
        "salary":	"the residence state",
        "directorFee":	"the residence state",
        "profitFromImmovableProperty":	"the residence state",
        "profitFromMovableProperty":	"the residence state",
        "dividends":	"the residence state",
        "bankInterest":	"the residence state, income country max 10%",
        "corporationTax":	"income, suprataxa for business income in residence",
        "permanentEstablishmentTime":	"n/a",
        "businessProfits":	"only residence state",
        "royalties":"the residence state",
        "students": "no, max 3k/year, 2 years",
        "pensions":	"income state",
        "commission": "residence state, or income with max 12,5%"}]
},
{"country":"UK",
    "agreementCountries": [
        {"country":"Portugal",
          "url":"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/500344/uk-portugal-dta_-_in_force.pdf",
          "dateOfAgreement"	: "1968-03-27",
          "dateOfInforcement": "1969-01-17",
          "salary":	"the residence state",
          "directorFee": "residence state",
          "profitFromImmovableProperty": "no limit, taxed only",
          "profitFromMovableProperty": "no limit",
          "dividends": "10%",
          "bankInterest":	"residence state",
          "corporationTax":	"yes",
          "permanentEstablishmentTime":	"yes",
          "businessProfits": "UK",
          "royalties":"Portugal",
          "students": "no taxes",
          "pensions":	"Portugal",
          "commission": "residence state"
        },
          {"country":"Romania",
            "url": "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/500346/romania_-_dtc_-_in_force.pdf",
            "dateOfAgreement"	: "1976-02-03",
            "dateOfInforcement": "1976-04-01",
            "salary":	"the residence state",
            "directorFee": "the residence state",
            "profitFromImmovableProperty": "where the property is",
            "profitFromMovableProperty": "where the property is",
            "dividends": "the residence state",
            "bankInterest":	"the residence state, max 10% incoming state",
            "corporationTax":	"income country",
            "permanentEstablishmentTime":	"n/a",
            "businessProfits": "the residence state",
            "royalties":"the residence state, max 15% incoming state",
            "students": "500 lire limit/an; max 5 ani",
            "pensions":	"income state",
            "commission": "residence state, or income with max 12,5%"
        },
          {"country":"Jersey",
            "url": "https://www.gov.uk/government/publications/jersey-tax-treaties",
            "dateOfAgreement"	: "1952-06-24",
            "dateOfInforcement": "1952-06-24",
            "salary":	"only residence",
            "directorFee": "residence state",
            "profitFromImmovableProperty": "taxed in Jersey",
            "profitFromMovableProperty": "where the property is",
            "dividends": "10%",
            "bankInterest":	"residence state",
            "corporationTax":	"yes",
            "permanentEstablishmentTime":	"yes",
            "businessProfits": "UK",
            "royalties":"Jersey",
            "students": "no taxes",
            "pensions":	"Jersey",
            "commission": "residence state"}]
},
{"country":"Jersey",
    "agreementCountries": [
            {"country":"UK",
              "url": "https://www.gov.je/SiteCollectionDocuments/Tax%20and%20your%20money/LD%20UKDoubleTaxationRelief1Jan2011.pdf",
              "dateOfAgreement"	: "1952-06-24",
              "dateOfInforcement": "1952-06-24",
              "salary":	"only residence",
              "directorFee": "residence state",
              "profitFromImmovableProperty": "taxed in Jersey",
              "profitFromMovableProperty": "where the property is",
              "dividends": "10%",
              "bankInterest":	"residence state",
              "corporationTax":	"yes",
              "permanentEstablishmentTime":	"yes",
              "businessProfits": "UK",
              "royalties":"UK",
              "students": "no taxes",
              "pensions":	"Jersey",
              "commission": "residence state"}]}
]

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