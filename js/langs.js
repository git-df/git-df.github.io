let langlinks = document.querySelectorAll(".langs a");
let langsDict = [
    ["nav_about", "ABOUT", "O\u00A0MINE"],
    ["nav_resume", "RESUME", "ŻYCIORYS"],
    ["nav_projects", "PROJECTS", "PROJEKTY"],
    ["nav_contact", "CONTACT", "KONTAKT"],

    ["h1_hero", "Hi, I'm Dawid Florian", "Witaj, jestem Dawid Florian"],

    ["h2_about", "About", "O\u00A0mnie"],
    [
        "p_about", 
        "Hello! As you probably have already noticed, my name is Dawid Florian, and even though I recently graduated from university, my coding journey began some time ago. I became interested in the .Net platform during my first year of studies, and I have been continuously expanding my skills, gaining new experiences, and improving myself in creating efficient solutions. In my free time, I love going for bike rides.",
        "Cześć! Jak zapewne już zauważyliście, nazywam się Dawid Florian i choć niedawno ukończyłem studia, moja przygoda z kodowaniem rozpoczęła się już jakiś czas temu. Platformą .Net zainteresowałem się na pierwszym roku studiów, przez cały czas poszerzam swoje umiejętności, zdobywam nowe doświadczenia i doskonalę się w tworzeniu efektywnych rozwiązań. W wolnych chwilach uwielbiam wyskoczyć na rower."
    ],
    ["ah2_about",".Net Developer", "Programista .Net"],
    ["p1_about"," Birthday: 6 May 1999", " Urodziny: 6 Maj 1999"],
    ["p2_about"," Age: 24", " Wiek: 24"],
    ["p3_about"," Degree: Computer science engineer", " Stopień naukowy: Inżynier IT"],
    ["p4_about"," Email: dawidflorian99@gmail.com", " Email: dawidflorian99@gmail.com"],
    ["p5_about"," Website: www.dawidflorian.pl", " Strona internetowa: dawidflorian.pl"],
    ["p6_about"," City: Krosno / Rzeszów, Poland", " Miasto: Krosno / Rzeszów, Polska"],

    ["h2_resume","Resume", "Życiorys"],
    [
        "p_resume",
        "I graduated this year with a degree in Computer Science and have been immersed in the world of IT for over 8 years since my high school days. Along the way, I've absorbed a wealth of knowledge and skills in the field.", 
        "Jestem tegorocznym absolwentem studiów informatycznych. Od ponad 8 lat mam do czynienia z informatyką, której uczyłem się od technikum. Przez ten czas przyswoiłem dużo informacji oraz zagadnień związanych z tą dziedziną."
    ],
    ["1h3_resume"," Education", " Edukacja"],
    ["1h5_resume","Engineer (Computer since)", "Inżynier (IT)"],
    ["1p_resume","'Rzeszow University of Technology'", "'Politechnika Rzeszowska'"],
    ["2p_resume","From 2019 to 2023", "Od 2019 do 2023"],
    ["3p_resume","Rzeszów, Poland", "Rzeszów, Polska"],
    ["2h5_resume","Technician (Computer since)", "Technik (IT)"],
    ["4p_resume","'Complex of Electrical and General Education Schools in Krosno'", "'Zespół Szkół Elektrycznych i Ogólnokształcących w Krośnie'"],
    ["5p_resume","From 2015 to 2019", "od 2015 do 2019"],
    ["6p_resume","Krosno, Poland", "Krosno, Polska"],
    ["2h3_resume"," Professional Experience", " Doświadczenie"],
    ["3h5_resume","Junior IT Specialist", "Młodszy Specjalista IT"],
    ["7p_resume","From 2022", "Od 2022"],
    ["8p_resume","Krosno, Poland", "Krosno, Polska"],
    ["1li_resume","Monitoring of services and servers.", "Monitorowanie usług oraz serwerów."],
    ["2li_resume","API testing.", "Testowanie API."],
    ["3li_resume","Manual and regression testing of web and mobile applications.", "Testowanie ręczne, regresyjne aplikacji webowych oraz mobilnych."],
    ["4li_resume","Analysis and resolution of problems reported by customers.", "Analiza oraz rozwiązywanie problemów zgłaszanych przez klientów."],
    ["5li_resume","Documentation management.", "Prowadzenie dokumentacji."],
    ["4h5_resume","Academic Internship", "Praktyka zawodowa"],
    ["9p_resume","In 2021", "W 2021"],
    ["10p_resume","Krosno, Poland", "Krosno, Polska"],
    ["6li_resume","Updating content and adding new elements to the company's website.", "Aktualizowanie treści oraz dodawanie nowych elementów na stronę internetową firmy."],
    ["7li_resume","Testing solutions being implemented into the software", "Testowanie rozwiązań wprowadzanych do oprogramowania."],
    
    ["h2_projects","Projects", "Projekty"],
    [
        "p_projects",
        "During my studies, I completed numerous projects using .NET, including a car rental system (built with Blazor, Rest API, MS SQL). This journey taught me a lot, especially in the practical application of these technologies.", 
        "W trakcie studiów zrealizowałem wiele projektów z wykorzystaniem .NET, w tym system wynajmu samochodów (Blazor, Rest API, MS SQL). Ta podróż wiele mnie nauczyła, szczególnie w praktycznym zastosowaniu tych technologii."
    ],
    ["1h5_projects","This is a comprehensive car rental system developed as a part of an engineering degree capstone project.", "Jest to kompleksowy system wynajmu samochodów opracowany w ramach projektu dyplomowego na zakończenie studiów inżynierskich."],
    ["2h5_projects","With Bloggie, users can create, manage, comment and like blog posts with a user-friendly interface.", "Dzięki aplikacji możliwe jest tworzenie, zarządzanie, komentowanie oraz lajkowania postów na blogu za pomocą przyjaznego dla użytkownika interfejsu."],
    ["3h5_projects","This project aims to provide a comprehensive solution for managing various aspects of a car detailing business.", "Projekt ten ma na celu dostarczenie kompleksowego rozwiązania do zarządzania różnymi aspektami działalności Car Detailingu."],
    
    ["h2_contact","Contact", "Kontakt"],
    ["p_contact","Feel free to contact me through my social medias or email.", "Zapraszam do kontaktu przez moje media społecznościowe lub e-mail."],
    
    ["span_footer"," All rights reserved.", " Wszelkie prawa zastrzeżone."],
];

function translate(lang) {
    langsDict.forEach(dict => {
        document.getElementsByName(dict[0]).forEach(el => {
            el.textContent = dict[lang == "1" ? 2 : 1];
            document.querySelector('html').lang = lang == "1" ? "pl" : "en";
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