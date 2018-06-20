// Init Gitlab
const gituser = new GitUser;

// Init UI
const ui = new UI;
console.log('ui = ',ui);

/////////////////////////////////////////////////////////////////////////
// console.log('data.hubProfile 1: ',data.hubProfile);				   //
// console.log('data.hubProfile 2: ',data.hubProfile);				   //
// console.log('hubAvatar: ', hubAvatar = data.hubProfile.avatar_url); //
// console.log('data.hubProfile 3: ',data.hubProfile);				   //
// console.log('YOUIY FOUND ME 4: ' ,data.hubProfile);				   //
/////////////////////////////////////////////////////////////////////////

//let hubAvatar;
let labAvatar;   //  hubAvatar = data.hubProfile.avatar_url; //joeybeebee  //
//labAvatar = data.labProfile[0].avatar_url;               // joeybronzoni


// Search Input
const searchUser = document.getElementById('search-user');
// joeybronzoni
// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
	// Make http call
let	data[hubProfile][message] = '';
	gituser.getUser(userText)
	  .then((data) => {
//		console.log('data.hubProfile: ', data.hubProfile);
//		console.log('data.labUserProfile: ', data.labUserProfile);
		//		console.log('data.labRepoProfile: ', data.labRepoProfile);
		if (!data.hubProfile.message === '') {
		//if (data.labUserProfile[0].username === 'null') {
		  // Show alert
		  let lup = data.labUserProfile[0];
		  let lrp = data.labRepoProfile[0];
		  let hup = data.hubProfile;
		  console.log('lup-1: ', lup, 'lrp-2: ',lrp);
		  // alert('hup-3:', hup);
		  alert('message: ', data.hubProfile.message);
		  //console.log('hup-3: ',hup);
		} else {
		  // Show profile
		  console.log('else-lup: ',lup);
		  //data = data.hubProfile;
		  let userU = data.labUserProfile[0];
		  let userR = data.labReporProfile[0];
		  let hup = data.hubProfile;
		  console.log('user:U ', userU);
		  // console.log('data.labUserProfile 1: ',userU.name);
		  //console.log('data: ',data);
		 // console.log('user for lab: ', userU);
		  ui.showLabProfile(userU);
		  ui.showLabProfile(userU);
		  ui.showHubProfile(hup);
		}
	  });
  } else {
	// Clear profile

  }

});
