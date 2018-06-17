sap.ui.define([
	"sap/ui/test/Opa5",
	"medium/News/test/integration/pages/Common",
	"sap/ui/test/actions/Press"
], function(Opa5, Common, Press) {
	"use strict";
	var sViewName = "Basic";
	Opa5.createPageObjects({
		onTheAppPage: {
			baseClass: Common,

			actions: {
				//This is an exmaple of an OPA action that needs to be fixed 
				iDoMyAction: function() {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						actions: [function() {
							//Implement your action here
						}],
						errorMessage: "implement test"
					});
				}
			},

			assertions: {

				iShouldSeeTheApp: function() {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						success: function() {
							Opa5.assert.ok(true, "The Basic view is displayed");
						},
						errorMessage: "Did not find the Basic view"
					});
				},

				//This is an exmaple of an OPA assertion that needs to be fixed 
				iDoMyAssertion: function() {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						success: function() {
							Opa5.assert.ok(false, "Implement test");
						},
						errorMessage: "implement me"
					});
				}
			}
		}
	});

});