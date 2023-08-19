let langlinks = document.querySelectorAll(".langs a");
let langsDict = [
    ["nav_about", "ABOUT", "O\u00A0MINE"],
    ["nav_resume","RESUME", "ŻYCIORYS"],
    ["nav_projects","PROJECTS", "PROJEKTY"],
    ["nav_contact","CONTACT", "KONTAKT"],
    ["h2_about", "About", "O\u00A0mnie"],
    ["p_about", "Hello! As you've probably noticed, my name is Dawid Florian, and I am a programming enthusiast. I became interested in the .Net platform during my first year of studies. Even though I recently graduated from college, my journey with coding started some time ago. Ever since I first encountered programming, I've been constantly expanding my skills, gaining new experiences, and honing my abilities in creating efficient solutions.", "Hej! Jak pewnie zauważyliście, nazywam się Dawid Florian i jestem miłośnikiem programowania. Platformą .Net zainteresowałem się na pierwszym roku studiów. Choć niedawno ukończyłem studia, moja przygoda z kodowaniem rozpoczęła się już jakiś czas temu. Od momentu, gdy pierwszy raz zetknąłem się z programowaniem, cały czas poszerzam swoje umiejętności, zdobywam nowe doświadczenia i doskonalę się w tworzeniu efektywnych rozwiązań."],
    ["ah2_about",".Net Developer", "Programista .Net"],
    ["p1_about"," Birthday: 6 May 1999", " Urodziny: 6 Maj 1999"],
    ["p2_about"," Age: 24", " Wiek: 24"],
    ["p3_about"," Degree: Computer science enginer", " Stopień naukowy: Inżynier IT"],
    ["p4_about"," Email: dawidflorian99@gmail.com", " Email: dawidflorian99@gmail.com"],
    ["p5_about"," Website: www.dawidflorian.pl", " Strona internetowa: dawidflorian.pl"],
    ["p6_about"," City: Krosno / Rzeszów, Poland", " Miasto: Krosno / Rzeszów, Polska"],
    ["h2_resume","Resume", "Życiorys"],
    ["p_resume","Resume", "Jestem tegorocznym absolwentem studiów informatycznych. Od ponad 8 lat mam do czynienia z informatyką, której uczyłem się od technikum. Przez ten czas przyswoiłem dużo informacji oraz zagadnień związanych z tą dziedziną. Platformą .Net zainteresowałem się na pierwszym roku studiów"],
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