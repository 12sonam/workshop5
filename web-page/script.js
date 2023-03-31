const searchBtn = document.querySelector("#search-btn");
const repoList = document.querySelector("#repo-list");

searchBtn.addEventListener("click", async () => {
  const username = document.querySelector("#username-input").value;
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();
  repoList.innerHTML = "";
  data.forEach(repo => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = repo.html_url;
    link.textContent = repo.name;
    listItem.appendChild(link);
    listItem.appendChild(document.createTextNode(` - ${repo.description || "No description"}`));
    repoList.appendChild(listItem);
  });
});
