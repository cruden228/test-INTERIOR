const main = document.getElementById("main");
const infoElem = document.getElementById("info-elem");
let cloneProject;

main.addEventListener("click", (event)=>{
	let project = event.target;
	while(!project.classList.contains("project")) {
		if(project === document.documentElement) break
		project = project.parentNode;
	}
	if(!project.classList.contains("project") || document.documentElement.getBoundingClientRect().width < 320 ) return
	if(infoElem.style.right == "0%") {
		infoElem.style.right = "-100%";

		main.removeChild(cloneProject);
		return
	}

	const projectCoords = project.getBoundingClientRect();
	cloneProject = project.cloneNode(true);

	cloneProject.style.position = "absolute";
	cloneProject.style.top = projectCoords.top - main.getBoundingClientRect().top + "px";
	cloneProject.style.left = projectCoords.left + "px";
	cloneProject.style.transition = ".4s";
	setTimeout(()=>{
		cloneProject.style.left = 0;
	}, 1);

	main.appendChild(cloneProject);

	infoElem.style.right = "0%";
}, false)