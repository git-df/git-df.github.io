let langlinks = document.querySelectorAll(".langs a")

let data = {
    english: {
        menu: {
            about: "About",
            resume: "Resume",
            contact: "Contact",
            cv: "CV"
        }
    },
    polish: {
        menu: {
            about: "O mnie",
            resume: "Życiorys",
            contact: "Kontakt",
            cv: "CV"
        }
    }
}

langlinks.forEach(el => {
    el.addEventListener("click", () =>{
        document.querySelectorAll(".langs .active").forEach(x => {
            x.classList.remove("active");
        })
        el.classList.add("active");
    })
})