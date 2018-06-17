sap.ui.define([
	"medium/News/controller/Basic.controller",
	"../classes/Cat"
], function(Basic, Cat) {
	"use strict";

	return Basic.extend("medium.News.controller.Basic", {

		onInit: function() {
			// const xx = 2;
			Cat.speak();
			// const makeRequest = async() => {
			// 	const data = await getJSON()
			// 	if (data.needsAnotherRequest) {
			// 		const moreData = await makeAnotherRequest(data);
			// 		console.log(moreData)
			// 		return moreData
			// 	} else {
			// 		console.log(data)
			// 		return data
			// 	}
			// }

		}

	});
});