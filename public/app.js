// Init Gitlab
const gituser = new GitUser;

// Init UI
const ui = new UI;

// Search output
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
	// Make http call
	gituser.getUser(userText)
	  .then(data => {
		if (data.hubProfile.message === "Not Found") {

		  ui.showAlert('User Not Found', 'alert alert-danger');
		} else {
		  // Show profile
		  ui.showProfile(data.hubProfile);
		 // console.log('data.hubRepoResponse: ', data.hubRepoResponse);
		  ui.showRepos(data.hubRepoProfile);

		}
	  });
  } else {
	// Clear Profile
	ui.clearProfile();
  }
});
