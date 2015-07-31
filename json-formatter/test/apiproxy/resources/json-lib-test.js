
var assert = require("assert");
var jsonFormatter = require("apiproxy/resources/node/transfromation-lib.js");

describe('JSON-Formatter-Test-Suit', function () {
		
		var	inputJSON = '{"name": "Basavaraj",'+
						'\"age\":30,'+
						'\"line1\": \"bagmane tech park\",'+
						'\"line2\": \"CV Raman nagar\",'+
						'\"city\": \"bangalore\",'+
						'\"country\": \"India\"}';	
		
		var	expectedJSON = '{"details":{"name":"Basavaraj","age":30},"adress":{"line1":"bagmane tech park",'+
						  '"line2":"CV Raman nagar","city":"bangalore"},"country":"India"}';	
		
		describe('ParseAndBuild()', function(){
			
			it('should correctly re-format the given json',function(){
				assert.equal(expectedJSON, jsonFormatter.buildClientJSON(inputJSON));
			})
			
		})
				
})
