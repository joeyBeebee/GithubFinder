class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI

  showProfile(user){
console.log('mememe');
	console.log('user: ', user);
			 	  this.profile.innerHTML = `
              <div class="card card-body mb-3">
                <div className="row">
                  <div className="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid" alt="{Picture of user from their Gravatar Profile}">
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
  }

  // Show Alert Message
  showAlert(message, className) {
	// Clear any remaining alerts
	this.clearAlert();
	// Create div
	const div = document.createElement('div');
	// Add className to div
	div.className = className;
	// Add text
	div.appendChild(document.createTextNode(message));
	// Get Parent
	const container = document.querySelector('.search-container');
	// Get search box
	const search = document.querySelector('.search');
	// Insert alert
	container.insertBefore(div, search);
	// Timeout after 3 seconds
	  setTimeout(() => {
		this.clearAlert();
	  }, 3000);
  }

  // Clear Alert message
  clearAlert() {
	const currentAlert = document.querySelector('.alert');
	if (currentAlert) {
	  currentAlert.remove();
	}
  }

  // Clear Profile
  clearProfile() {
	this.profile.innerHTML = '';
  }
}
