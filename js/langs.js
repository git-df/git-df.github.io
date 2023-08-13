let langlinks = document.querySelectorAll(".langs a")

let data = {
    english: [
        ["about", "About"],
        ["resume","Resume"],
        ["contact","Contact"],
        ["cv","CV"],
        ["heroh1","Hi, I'm Dawid Florian"],
    ],
    polish: [
        ["about", "O\u00A0mnie"],
        ["resume","Życiorys"],
        ["contact","Kontakt"],
        ["cv","CV"],
        ["heroh1","Cześć, jestem Dawid Florian"],
    ]
}

function translate(lang) {
    let dictlang = lang == "1" ? data.polish : data.english;

    dictlang.forEach(dict => {
        document.getElementsByName(dict[0]).forEach(el => {
            el.textContent = dict[1];
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