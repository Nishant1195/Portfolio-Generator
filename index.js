function saveData() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("descrip").value;
    const linkin = document.getElementById("linkedin-link").value;
    const github = document.getElementById("github-link").value;
    const twitter = document.getElementById("twitter-link").value;
    const instagram = document.getElementById("instagram-link").value;
    const service = document.getElementById("Service-link").value;
    const skill = document.getElementById("Skill-link").value;
    const education = document.getElementById("education-link").value;
    const experience = document.getElementById("experience-link").value;
    const contact = document.getElementById("contact-link").value;

    localStorage.setItem("portfolioDescription", description);
    localStorage.setItem("portfolioName", name);
    localStorage.setItem("linkedInLink", linkin);
    localStorage.setItem("GithunLink", github);
    localStorage.setItem("TwitterLink", twitter);
    localStorage.setItem("InstagramLink", instagram);
    localStorage.setItem("ServiceLink", service);
    localStorage.setItem("skillLink", skill);
    localStorage.setItem("educationLink", education);
    localStorage.setItem("experienceLink", experience);
    localStorage.setItem("contactLink", contact);

    window.location.href = "template.html";
}