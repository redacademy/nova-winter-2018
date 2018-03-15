const usersRef = userID => database.doc('users/' + userID);
const companysRef = database.doc('companys');
const projectsRef = companyID => database.doc('companys/' + companyID + '/projects');
const questionsRef = (companyID, projectNumber, questionNumber) =>
	database.doc('companys/' + companyID + '/projects/' + projectNumber + '/questions/' + questionNumber);


const bioText = "I was a coder then i blew it all up"

usersRef.set({
	bio: bioText
}).then(function () {
	console.log("Status saved");
}).catch(function (error) {
	console.log("Got an error", error)
});

usersRef(userID).get().then(function (doc) {
	if (doc && doc.exists) {
		const docData = doc.data();
		console.log("Retrieved", docData)
	}
}).catch(function (error) {
	console.log("Got an error", error)
});