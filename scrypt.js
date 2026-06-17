const $form = document.getElementById("form");
const $search = document.getElementById("search");
const $main = document.getElementById("root");

const API_URL = "https://api.github.com/users/";

async function getUser(username) {
  try {
    const res = await fetch(API_URL + username);
    if (res.status === 404) {
      createCardError("User not found");
      return;
    }

    if (res.ok) {
      const user = await res.json();
      createUserCard(user);
      getRepos(username);
    }
  } catch (error) {
    createCardError("Problem fetching user");
  }
}

async function getRepos(username) {
  try {
    const res = await fetch(API_URL + username + "/repos");
    const data = await res.json();
    if (res.ok) {
      addReposToCard(data);
    }
  } catch (error) {
    createCardError("Problem fetching repositories");
  }
}

function addReposToCard(repos) {
  const $repos = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const $arepo = document.createElement("a");
    $arepo.classList.add("repo");
    $arepo.href = repo.html_url;
    $arepo.target = "_blank";
    $arepo.textContent = repo.name;

    $repos.appendChild($arepo);
  });
}

function createCardError(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
    `;

  $main.innerHTML = cardHTML;
}

function createUserCard(user) {
  const userID = user.name || user.login || "No lo conozco";
  const userBio = user.bio ? `<p>${user.bio}</p>` : "";
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${userID}" class="avatar" />
      </div>
      <div class="user-info">
        <h2>${userID}</h2>
        ${userBio}
        <ul>
          <li> ${user.followers} <strong>Followers</strong></li>
          <li> ${user.following} <strong>Following</strong></li>
          <li> ${user.public_repos} <strong>Public Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
    `;

  $main.innerHTML = cardHTML;
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = $search.value;

  if (user) {
    getUser(user);

    $search.value = "";
  }
});
