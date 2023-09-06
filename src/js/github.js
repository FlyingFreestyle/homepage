const username = 'FlyingFreestyle'; // Replace with the username you want to query.
const apiUrl = `https://api.github.com/users/${username}/repos`;

async function listUserRepositories() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const repositories = await response.json();
    repositories.forEach((repo) => {
        console.log(`${repo.name}: ${repo.url}`);
    });
  } catch (error) {
    console.error(error);
  }
}

listUserRepositories();
