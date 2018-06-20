
class GitUser {
  constructor() {
    this.lab_client_id = '2373369';
	this.lab_client_secret = '_Et9_Cbr3zFMAfkeo13T';
	this.hub_client_id='5af34cfbfc1ad6036cad';
	this.hub_client_secret='3f7e421db5bbd6207f41be0306318593d6ec06cf';
  }
  async getUser(user) { //
	let labRepoUrl=`https://gitlab.com/api/v4/projects?name=search=${user}&${this.lab_client_secret}&per_page=2`;
	let labUserUrl=`https://gitlab.com/api/v4/users?username=${user}&${this.lab_client_secret}&per_page=2`;
	let hubUrl = `https://api.github.com/users/${user}?client_id=${this.hub_client_id}&client_secret=${this.hub_client_secret}`;
	const labUserProfileResponse = await fetch(labUserUrl);
	const labRepoProfileResponse = await fetch(labRepoUrl);
 	const hubProfileResponse = await fetch(hubUrl);
	const labUserProfile = await labUserProfileResponse.json();
	const labRepoProfile = await labRepoProfileResponse.json();
 	const hubProfile = await hubProfileResponse.json();

	return {
	  hubProfile,
      labUserProfile,
	  labRepoProfile
	}
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////
