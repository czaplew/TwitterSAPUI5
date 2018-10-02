sap.ui.define([
	"medium/News/controller/Basic.controller",
	"../classes/Cat",
	"../styles/myStyle"
], function (Basic, Cat, myStyle) {
	"use strict";

	document.head.appendChild(
		document.createElement('style')
	).textContent = myStyle.greenPanel;

	return Basic.extend("medium.News.controller.App", {

		onInit: function () {
			// const xx = 2;
			// Cat.speak();
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