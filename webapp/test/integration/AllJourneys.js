/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"medium/News/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"medium/News/test/integration/pages/Basic",
	"medium/News/test/integration/navigationJourney"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "medium.News.view.",
		autoWait: true
	});
});