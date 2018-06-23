
class GitUser {
  constructor() {
	this.hub_client_id='5af34cfbfc1ad6036cad';
	this.hub_client_secret=
	this.repos_count = 5;
	this.repos_sort = 'created: asc';
  }

  async getUser(user) { //
	let hubUrl = `https://api.github.com/users/${user}?client_id=${this.hub_client_id}&client_secret=${this.hub_client_secret}`;
	// let hubRepoUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&$sort=${this.repos_sort}&client_id=${this.hub_client_id}&client_secret=${this.hub_client_secret}`;
	let hubRepoUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&$sort=pinned&client_id=${this.hub_client_id}&client_secret=${this.hub_client_secret}`;

	// USE URL TO FETCH DATA
	const hubProfileResponse = await fetch(hubUrl);
	const hubRepoResponse = await fetch(hubRepoUrl);

	// RETURN DATAIN JSON FORMAT
 	const hubProfile = await hubProfileResponse.json();
 	const hubRepoProfile = await hubRepoResponse.json();
	console.log('hubRepoProfile: ', hubRepoProfile);
	return {
	  hubProfile,
	  hubRepoProfile
	}
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////
