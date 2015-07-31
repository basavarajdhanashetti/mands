/**
 * New node file
 */

module.exports{
	
	buildClientJSON: function(inputJSONMsg){
		
		var jsonObj = JSON.parse(inputJSONMsg);
		
		var newJsonObj =  JSON.stringify({ 
	        
			details:{ 
	        	desc: 'General Details',
	            name: jsonObj.name,
	            age: jsonObj.age
	        }, 
	        adress: {
	            line1: jsonObj.line1,
	            line2: jsonObj.line2,
	            city: jsonObj.city
	        }, 
	        country: jsonObj.country
	      });
		
		return newJsonObj;
	}
}