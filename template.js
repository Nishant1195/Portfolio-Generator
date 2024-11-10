document.getElementById("logo-name").innerText = localStorage.getItem("portfolioName");
document.getElementById("span-name").innerText = localStorage.getItem("portfolioName");
document.getElementById("temp-description").innerText = localStorage.getItem("portfolioDescription");


const linkedinIcon = document.getElementById("Linked-In");
const githubIcon = document.getElementById("Github");
const twitter = document.getElementById("Twitter");
const instagram = document.getElementById("Instagram");
const service = document.getElementById("Service");
const skill = document.getElementById("Skill");
const education = document.getElementById("Education");
const experience = document.getElementById("Experience");
const contact = document.getElementById("Contact");

linkedinIcon.href = localStorage.getItem("linkedInLink");
githubIcon.href = localStorage.getItem("GithunLink");
twitter.href = localStorage.getItem("TwitterLink");
instagram.href = localStorage.getItem("InstagramLink");
service.href = localStorage.getItem("ServiceLink");
skill.href = localStorage.getItem("skillLink");
education.href = localStorage.getItem("educationLink");
experience.href = localStorage.getItem("experienceLink");
contact.href = localStorage.getItem("contactLink");
