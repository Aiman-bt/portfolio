import React from "react";
const url = "https://api.github.com/users/aiman-bt";

function Projects() {
  const [repos, setRepos] = React.useState([]);
  window.addEventListener("load", async () => {
    const response = await fetch(`${url}/repos`);
    const data = await response.json();
    setRepos(data);
  });
  const repoList = repos.map((value) => {
    const { id, name } = value;
    return (
      <a href={`https://github.com/aiman-bt/${name}`} className="cards" id={id}>
        <h2>{name}</h2>
      </a>
    );
  });
  return (
    <div id="projects">
      <div className="projectsWatermark">
        <span>Projects</span>
      </div>
      <div>
        <h3>These are my Github repositories</h3>
        <div className="cardContainer">{repoList}</div>
      </div>
    </div>
  );
}
export default Projects;
