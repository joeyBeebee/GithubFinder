class UI {
  constructor() {
    this.hProfile = document.getElementById('profile');
	this.lProfile = document.getElementById('profile');
  }


  showHubProfile(user){
	console.log('user in showProfile(user): ', user);

	  this.hProfile.innerHTML = `
    <div class="card card-body mb-3">
      <div className="row">
        <div className="col-md-3">
          <img src="${hubAvatar}" class="img-fluid" alt="{Picture of user from their Gravatar Profile}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View GitHub Profile</a>
        </div>
        <div className="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">User since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb3-3">Latest Repos</h3>
    <div id="repos"></div>
   `;
	  //	console.log('Hey this.profile.innerHTML: ', this.profile.innerHTML);
	  //	console.log('hubAvatar is: ', hubAvatar);
	  //	console.log('data.hubProfile.html_url is: ', data.hubProfile.html_url);

  }
  // showLabProfile(user){
  // 	console.log('user in showProfile(user): ', user);
  // 	if (user) {
  // 	  this.lProfile.innerHTML = `
  //   <div class="card card-body mb-3">
  //     <div className="row">
  //       <div className="col-md-3">
  //         <img src="${labAvatar}" class="img-fluid" alt="{Picture of user from their Gravatar Profile}">
  //         <a href="${user.web.url}" target="_blank" class="btn btn-primary btn-block">View GitHub Profile</a>
  //       </div>
  //       <div className="col-md-9">
  //         <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
  //         <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
  //         <span class="badge badge-success">Followers: ${user.followers}</span>
  //         <span class="badge badge-info">Following: ${user.following}</span>
  //         <br><br>
  //         <ul class="list-group">
  //           <li class="list-group-item">Company: ${user.company}</li>
  //           <li class="list-group-item">Website/Blog: ${user.blog}</li>
  //           <li class="list-group-item">Location: ${user.location}</li>
  //           <li class="list-group-item">User since: ${user.created_at}</li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  //   <h3 class="page-heading mb3-3">Latest Repos</h3>
  //   <div id="repos"></div>
  //  `;
  // 	}

  // }


}
