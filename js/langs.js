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

langlinks.forEach(link => {
    link.addEventListener("click", () =>{
            document.querySelectorAll(".langs .active").forEach(activelink => {
                activelink.classList.remove("active");
        })
        link.classList.add("active");


        let selectlang = link.getAttribute("Language");
        let dictlang = selectlang == "1" ? data.polish : data.english;

        dictlang.forEach(dict => {
            document.getElementsByName(dict[0]).forEach(el => {
                el.textContent = dict[1];
            });
        })
    })
})