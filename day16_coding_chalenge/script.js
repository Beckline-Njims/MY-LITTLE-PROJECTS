function fetchGitHubUser() {
  const username = document.getElementById("username").value;
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      if (data.message === "Not Found") {
        document.getElementById("result").innerHTML = "User not found!";
        return;
      }

      const userInfo = `
        <img src="${data.avatar_url}" alt="Avatar">
        <h3>${data.name || data.login}</h3>
        <p>Public Repos: ${data.public_repos}</p>
        <p>Followers: ${data.followers}</p>
        <p><a href="${data.html_url}" target="_blank">Visit Profile</a></p>
      `;
      document.getElementById("result").innerHTML = userInfo;
    });
}
