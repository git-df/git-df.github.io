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
        "I am an ambitious programmer with an engineering degree. I have been working and developing at my current company for over two years, starting as a junior IT specialist. For more than a year, I have been programming in .NET technology, primarily working on APIs and microservices that form the foundation of modern applications. I am passionately developing my skills. I am a creative person who enjoys challenges and is open to new experiences.",
        "Jestem ambitnym programistą z tytułem inżyniera. W obecnej firmie pracuję i rozwijam się już ponad dwa lata, zaczynałem jako młodszy specjalista IT. Od ponad roku zajmuję się programowaniem w technologi .NET. Przeważnie są to interfejsy API oraz mikroserwisy, które stanowią fundament nowoczesnych aplikacji. Z pasją rozwijam swoje umiejętności, jestem osobą kreatywną, lubiącą wyzwania i otwartą na nowe doświadczenia."
    ],
    ["ah2_about",".Net Developer", "Programista .Net"],
    ["p1_about"," 6 May 1999", " 6 Maj 1999"],
    ["p2_about"," 25 years old", " 25 lat"],
    ["p3_about"," Computer science engineer", " Inżynier IT"],
    ["p4_about"," dawidflorian99@gmail.com", " dawidflorian99@gmail.com"],
    ["p5_about"," dawidflorian.pl", " dawidflorian.pl"],
    ["p6_about"," Krosno / Rzeszów, Poland", " Krosno / Rzeszów, Polska"],

    ["h2_resume","Resume", "Życiorys"],
    [
        "p_resume",
        "For many years, I've been involved in IT, which I started learning in technical school. Along the way, I've absorbed a wealth of knowledge and skills in the field.",
        "Od wielu lat mam do czynienia z informatyką, której uczyłem się od technikum. Przez ten czas przyswoiłem dużo informacji oraz zagadnień związanych z tą dziedziną."
    ],

    ["h3_resume_l"," Education", " Edukacja"],

    ["1h5_resume_l","Engineer (Computer since)", "Inżynier (IT)"],
    ["1p_resume_l","'Rzeszow University of Technology'", "'Politechnika Rzeszowska'"],
    ["2p_resume_l","From 2019 to 2023", "Od 2019 do 2023"],
    ["3p_resume_l","Rzeszów, Poland", "Rzeszów, Polska"],

    ["2h5_resume_l","Technician (Computer since)", "Technik (IT)"],
    ["4p_resume_l","'Complex of Electrical and General Education Schools in Krosno'", "'Zespół Szkół Elektrycznych i Ogólnokształcących w Krośnie'"],
    ["5p_resume_l","From 2015 to 2019", "od 2015 do 2019"],
    ["6p_resume_l","Krosno, Poland", "Krosno, Polska"],

    ["h3_resume_r"," Professional Experience", " Doświadczenie"],

    ["1h5_resume_r",".Net Developer", "Programista .Net"],
    ["1p_resume_r","From 10/2024", "Od 10/2024"],
    ["2p_resume_r","Krosno, Poland", "Krosno, Polska"],
    ["1li_resume_r","Managing micro teams of programmers for specific functionalities.", "Zarządzanie mikro zespołami programistów danej funkcjonalności."],
    ["2li_resume_r","Being responsible for the timely completion of the micro team tasks.", "Odpowiadanie za terminowe wykonanie zadań przez mikro zespół."],
    ["3li_resume_r","Responsibilities listed under the junior programmer position.", "Obowiązki wymienione przy stanowisku młodszego programisty."],

    ["2h5_resume_r","Junior .Net Developer", "Młodszy Programista .Net"],
    ["3p_resume_r","From 10/2023 to 10/2024", "Od 10/2023 Do 10/2024"],
    ["4p_resume_r","Krosno, Poland", "Krosno, Polska"],
    ["4li_resume_r","Develop software, mainly APIs and microservices.", "Tworzenie oprogramowania, głównie API oraz mikro serwisy. "],
    ["5li_resume_r","Estimating tasks.", "Wycena zadań."],
    ["6li_resume_r","Code review.", "Weryfikacja kodu innych programistów."],
    ["7li_resume_r","Documentation management.", "Prowadzenie dokumentacji."],

    ["3h5_resume_r","Junior IT Specialist", "Młodszy Specjalista IT"],
    ["5p_resume_r","From 07/2022 to 10/2023", "Od 07/2022 do 10/2023"],
    ["6p_resume_r","Krosno, Poland", "Krosno, Polska"],
    ["8li_resume_r","Manual and regression testing of web and mobile applications.", "Testowanie ręczne, regresyjne, aplikacji webowych oraz mobilnych."],
    ["9li_resume_r","Analysis and resolution of problems reported by customers.", "Testowanie ręczne, regresyjne, aplikacji webowych oraz mobilnych."],
    ["10li_resume_r","Documentation management.", "Prowadzenie dokumentacji."],

    ["4h5_resume_r","Academic Internship", "Praktyka zawodowa"],
    ["7p_resume_r","In 2021", "W 2021"],
    ["8p_resume_r","Krosno, Poland", "Krosno, Polska"],
    ["11li_resume_r","Maintaining the company's website.", "Prowadzenie firmowej strony internetowej."],
    ["12li_resume_r","Testing solutions being implemented.", "Testowanie wdrażanych rozwiązań."],

    ["h2_skills","Skills", "Umiejętności"],
    ["h2_projects","Projects", "Projekty"],
    [
        "p_projects",
        "In my free time, I try to develop my skills by creating applications using .NET technology. These are often projects created for personal use.",
        "W wolnych chwilach staram się rozwijać przy tworzeniu aplikacji w technologii .Net. Często są to projekty tworzone na potrzeby własne."
    ],
    ["1h5_projects","This is a comprehensive car rental system developed as a part of an engineering degree capstone project.", "Jest to kompleksowy system wynajmu samochodów opracowany w ramach projektu dyplomowego na zakończenie studiów inżynierskich."],
    ["2h5_projects","With Bloggie, users can create, manage, comment and like blog posts with a user-friendly interface.", "Dzięki aplikacji możliwe jest tworzenie, zarządzanie, komentowanie oraz lajkowania postów na blogu za pomocą przyjaznego dla użytkownika interfejsu."],
    ["3h5_projects","This project aims to provide a comprehensive solution for managing various aspects of a car detailing business.", "Projekt ten ma na celu dostarczenie kompleksowego rozwiązania do zarządzania różnymi aspektami działalności Car Detailingu."],
    ["4h5_projects","This solution was created to enable receiving messages from sensors placed around the house. The sensors publish messages to a queue via an API, and then a microservice sends them to a Discord channel.", "To rozwiązanie powstało aby umożliwić odbieranie komunikatów z czujników rozmieszczonych w domu. Czujniki za pomocą API publikują wiadomości na kolejkę, następnie mikro serwis wysyła je na kanał discord."],
    ["5h5_projects","The Daily Dish API is designed to manage daily dish information from various restaurants. It provides functionalities to retrieve and cache daily dish data, ensuring efficient and quick access to the latest dish information.", "Usługa Daily Dish została zaprojektowana do zarządzania informacjami o daniach dnia z różnych restauracji. Zapewnia funkcje pobierania i buforowania danych dotyczących dań dnia, co gwarantuje efektywny i szybki dostęp do najnowszych informacji o potrawach."],

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