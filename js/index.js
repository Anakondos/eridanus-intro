const today = new Date();
// console.log(today);
const thisYear = today.getFullYear();
// console.log(thisYear);
const footer = document.querySelector('#footer');
const copyright = document.createElement('p');
// console.log(copyright);
copyright.innerHTML = 'Anton Kondakov &copy ' + thisYear;
footer.appendChild(copyright); 
let skills = ['Agile', 'JavaScript', 'HTML', 'CSS', 'Business Analytics', 'Flexbox', 'CSS Gride', 'NodeJS', 'sweet sam' ];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
// console.log(skillsList);

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

//Create Massage form
const messageForm = document.getElementsByName('leave_message');

messageForm[0].addEventListener("submit", function answer(evt){
    evt.preventDefault();
    
    const name = evt.target.name.value;
    const email = evt.target.email.value;
    const message = evt.target.userMessage.value;

    console.log(name, email, message);
    
    const messageSection = document.getElementById("messages");
    
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href=mailto:${email}>${name}</a><span> wrote: ${message} </span>`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.setAttribute('type','button');
    removeButton.setAttribute('class','rem-button');
    
        removeButton.addEventListener('click', (event)=>{
            const entry = event.target.parentNode;
            // console.log(entry);
            entry.remove();
            if(messageList.childElementCount === 0){
                messageSection.style.display = 'none';
            }

        });
        messageSection.style.display = "block";
    newMessage.appendChild(removeButton); 
    messageList.appendChild(newMessage);
   
    messageForm.reset();

});

// // AJAX  request creat

// var githubRequest = new XMLHttpRequest();
// githubRequest.open('GET',"https://api.github.com/users/Anakondos/repos");
// githubRequest.send();

// // selector for propogate data


// githubRequest.addEventListener('load', () => {
//     const repositories = JSON.parse(githubRequest.responseText);

//     console.log(repositories);

//     const projectSection = document.getElementById('projects');
//     const projectList = projectSection.querySelector('ul');

//     for(let i = 0; i < repositories.length; i++) {
        
//         const project = document.createElement('li');
//         // project.innerText = repositories[i].name;

//         // console.log(project);
        
//         const projectLink = document.createElement("a");

//         projectLink.innerText = repositories[i].name;

//         console.log(repositories[i].name);
//         projectLink.href = repositories.html_url;
//         projectLink.target = "_blank";

//         const projectDescription = document.createElement("p");
//         projectDescription.innerText = repositories[i].description;

//         project.appendChild(projectLink);
//         project.appendChild(projectDescription);
   
//         projectList.appendChild(project);


//              //styling
//              project.style.listStyleType = "none";
//              project.style.borderBottom = "2px solid black";
//              project.style.margin = "1rem 0";
//     }
// });

//utility function for getting date from github data
const dateFixer = (date) => {
    return date.slice(0, 10);
};
// Method for getting info from github
fetch("https://api.github.com/users/Anakondos/repos")
    .then((response) => response.json())
    .then((repositories) => {
        console.log(repositories);
// selecting ul in projects section
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");
// iterating over repositories array to display repo data
for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");

    const projectLink = document.createElement("a");
    projectLink.innerText = repositories[i].name;
    projectLink.href = repositories[i].html_url;
    projectLink.target = "_blank";

    const projectDescription = document.createElement("p");
    projectDescription.innerText = repositories[i].description;

    const projectDate = document.createElement("p");
    projectDate.innerText = `last pushed : ${dateFixer(
        repositories[i].pushed_at
    )}`;

    const language = document.createElement("p");
    language.innerText = repositories[i].language;

    project.appendChild(projectLink);
    project.appendChild(projectDate);
    project.appendChild(projectDescription);
    project.appendChild(language);
    projectList.appendChild(project);

    //styling
    project.style.listStyleType = "none";
    project.style.borderBottom = "1px solid black";
    project.style.margin = "1rem 0";
}
})
.catch((error) => {
    console.warn(error);
    const projectSection = document.getElementById("projects");
    const errorMessage = document.createElement("h1");
    errorMessage.innerText = `There was an error! Github error message: ${error.message}`;
    projectSection.appendChild(errorMessage);
});


