let langlinks = document.querySelectorAll(".langs a");
let langsDict = [
    ["nav_about", "ABOUT", "O\u00A0MINE"],
    ["nav_resume","RESUME", "ŻYCIORYS"],
    ["nav_projects","PROJECTS", "PROJEKTY"],
    ["nav_contact","CONTACT", "KONTAKT"],
    ["h2_about", "About", "O\u00A0mnie"],
    ["h2_resume","Resume", "Życiorys"],
    ["h2_projects","Projects", "Projekty"],
    ["h2_contact","Contact", "Kontakt"],
    ["h1_hero","Hi, I'm Dawid Florian", "Cześć, jestem Dawid Florian"]
];

function translate(lang) {
    langsDict.forEach(dict => {
        document.getElementsByName(dict[0]).forEach(el => {
            el.textContent = dict[lang == "1" ? 2 : 1];
        });
    })
}

langlinks.forEach(link => {
    link.addEventListener("click", () =>{
            document.querySelectorAll(".langs .active").forEach(activelink => {
                activelink.classList.remove("active");
        })
        link.classList.add("active");

        let selectlang = link.getAttribute("Language");
        localStorage.setItem("language", selectlang);
        translate(selectlang);
    })
})

if(localStorage.getItem("language") == null)
{
    localStorage.setItem("language", "0");
} else {
    if(localStorage.getItem("language") == "1") {
        let activelinks = document.querySelectorAll(".langs .active");

        document.querySelectorAll(".langs a").forEach(activelink => {
            activelink.classList.add("active");
        })
        
        activelinks.forEach(activelink => {
            activelink.classList.remove("active");
        })
        
        translate("1");
    }
}