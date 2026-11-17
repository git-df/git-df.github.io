let langlinks = document.querySelectorAll(".langs a");
let langsDict = [
    ["nav_about", "ABOUT", "O MNIE"],
    ["nav_resume", "RESUME", "ŻYCIORYS"],
    ["nav_projects", "PROJECTS", "PROJEKTY"],
    ["nav_contact", "CONTACT", "KONTAKT"],

    ["h1_hero", "Hi, I'm Dawid Florian", "Witaj, jestem Dawid Florian"],
    ["btn_cv", " Download CV", " Pobierz CV"],

    ["h2_about", "About", "O mnie"],
    [
        "p_about",
        "Senior .NET Developer and computer science engineer. I've been working in IT since 2022: I started with testing and customer support, and today I'm responsible for architecture and code quality in warehouse systems and integrations. At YES Biżuteria I combine the roles of developer and business partner: I analyse requirements, give technical advice and design target solutions.",
        "Senior .NET Developer i inżynier informatyki. W IT pracuję od 2022 roku: zaczynałem od testów i wsparcia klientów, dziś odpowiadam za architekturę i jakość kodu w systemach magazynowych i integracjach. W YES Biżuteria łączę rolę programisty i partnera dla biznesu: samodzielnie analizuję wymagania, doradzam technicznie i projektuję docelowe rozwiązania."
    ],
    ["ah2_about","Senior .NET Developer", "Senior .NET Developer"],
    ["p1_about"," Currently at YES Biżuteria", " Obecnie w YES Biżuteria"],
    ["p2_about"," In IT since 2022", " W IT od 2022 roku"],
    ["p3_about"," Computer science engineer", " Inżynier informatyki"],
    ["p4_about"," dawidflorian99@gmail.com", " dawidflorian99@gmail.com"],
    ["p5_about"," dawidflorian.pl", " dawidflorian.pl"],
    ["p6_about"," Krosno / Rzeszów, Poland", " Krosno / Rzeszów, Polska"],

    ["h2_resume","Resume", "Życiorys"],
    [
        "p_resume",
        "I've been into IT since technical school. Professionally, I've gone from testing and customer support to designing systems and taking responsibility for their architecture.",
        "Informatyką zajmuję się od technikum. Zawodowo przeszedłem drogę od testów i wsparcia klientów do projektowania systemów i odpowiedzialności za ich architekturę."
    ],

    ["h3_resume_l"," Education", " Edukacja"],

    ["1h5_resume_l","Engineer (Computer Science)", "Inżynier (Informatyka)"],
    ["1p_resume_l","Rzeszów University of Technology", "Politechnika Rzeszowska"],
    ["2p_resume_l","From 2019 to 2023", "Od 2019 do 2023"],
    ["3p_resume_l","Rzeszów, Poland", "Rzeszów, Polska"],

    ["2h5_resume_l","IT Technician", "Technik informatyk"],
    ["4p_resume_l","Complex of Electrical and General Education Schools in Krosno", "Zespół Szkół Elektrycznych i Ogólnokształcących w Krośnie"],
    ["5p_resume_l","From 2015 to 2019", "Od 2015 do 2019"],
    ["6p_resume_l","Krosno, Poland", "Krosno, Polska"],

    ["h3_resume_r"," Professional Experience", " Doświadczenie"],

    ["1h5_resume_r","Senior .NET Developer", "Senior .NET Developer"],
    ["1p_resume_r","From 06/2026", "Od 06/2026"],
    ["2p_resume_r","Remote", "Praca zdalna"],
    ["1li_resume_r","Working closely with the business: independent requirements analysis, technical advice and designing target system solutions.", "Współpraca z biznesem: samodzielna analiza wymagań, doradztwo techniczne i projektowanie docelowych rozwiązań systemowych."],
    ["2li_resume_r","Responsible for solution architecture.", "Odpowiedzialność za architekturę rozwiązań."],
    ["3li_resume_r","Overseeing best practices and the quality of delivered code.", "Nadzór nad dobrymi praktykami i jakością dostarczanego kodu."],

    ["2h5_resume_r",".NET Developer", ".NET Developer"],
    ["3p_resume_r","From 05/2025 to 06/2026", "Od 05/2025 do 06/2026"],
    ["4p_resume_r","Remote", "Praca zdalna"],
    ["4li_resume_r","Implemented batch order picking in the WMS, which increased process efficiency by 40%.", "Wdrożenie zbiorczego kompletowania zamówień w systemie WMS, które zwiększyło wydajność procesu o 40%."],
    ["5li_resume_r","Built a dedicated packing station application from scratch: significantly fewer human errors and full order status tracking.", "Stworzenie od zera dedykowanej aplikacji dla pakowni: znacząca redukcja błędów ludzkich i pełny tracking statusu zamówień."],
    ["6li_resume_r","Interactive applications in Blazor.", "Tworzenie interaktywnych aplikacji w Blazor."],
    ["7li_resume_r","Integrations between company systems and external services.", "Budowa integracji między systemami firmy a usługami zewnętrznymi."],
    ["8li_resume_r","Microservices development and REST API design.", "Rozwój mikroserwisów i projektowanie interfejsów REST API."],

    ["3h5_resume_r",".NET Developer", ".NET Developer"],
    ["5p_resume_r","From 10/2024 to 05/2025", "Od 10/2024 do 05/2025"],
    ["6p_resume_r","Krosno, Poland", "Krosno, Polska"],
    ["9li_resume_r","Coordinating micro teams of developers delivering specific features.", "Koordynacja pracy mikrozespołów programistów przy realizacji konkretnych funkcjonalności."],
    ["10li_resume_r","Responsible for on-time delivery of assigned features.", "Odpowiedzialność za terminowe dostarczanie powierzonych funkcjonalności."],
    ["11li_resume_r","Supporting decisions when designing technical solutions.", "Wsparcie decyzyjne przy projektowaniu rozwiązań technicznych."],
    ["12li_resume_r","API and microservices development, task estimation and code review.", "Rozwój API i mikroserwisów, estymacja zadań oraz code review."],

    ["4h5_resume_r","Junior .NET Developer", "Junior .NET Developer"],
    ["7p_resume_r","From 10/2023 to 10/2024", "Od 10/2023 do 10/2024"],
    ["8p_resume_r","Krosno, Poland", "Krosno, Polska"],
    ["13li_resume_r","Backend development in .NET: APIs and microservices.", "Tworzenie oprogramowania backendowego w .NET: API oraz mikroserwisy."],
    ["14li_resume_r","Task estimation and code review.", "Estymacja zadań i code review."],
    ["15li_resume_r","Technical documentation.", "Prowadzenie dokumentacji technicznej."],

    ["5h5_resume_r","Junior IT Specialist", "Junior IT Specialist"],
    ["9p_resume_r","From 07/2022 to 10/2023", "Od 07/2022 do 10/2023"],
    ["10p_resume_r","Krosno, Poland", "Krosno, Polska"],
    ["16li_resume_r","Manual and regression testing of web and mobile applications.", "Testowanie ręczne i regresyjne aplikacji webowych oraz mobilnych."],
    ["17li_resume_r","Technical analysis and resolution of issues reported by customers.", "Analiza techniczna i rozwiązywanie problemów zgłaszanych przez klientów."],
    ["18li_resume_r","Documentation management.", "Prowadzenie dokumentacji."],

    ["6h5_resume_r","Internship", "Praktyka zawodowa"],
    ["11p_resume_r","In 2021", "W 2021"],
    ["12p_resume_r","Krosno, Poland", "Krosno, Polska"],
    ["19li_resume_r","Maintaining the company's website.", "Prowadzenie firmowej strony internetowej."],
    ["20li_resume_r","Testing solutions being implemented.", "Testowanie wdrażanych rozwiązań."],

    ["h2_skills","Skills", "Umiejętności"],
    ["h2_projects","Projects", "Projekty"],
    [
        "p_projects",
        "In my free time, I try to develop my skills by creating applications using .NET technology. These are often projects created for personal use.",
        "W wolnych chwilach staram się rozwijać przy tworzeniu aplikacji w technologii .NET. Często są to projekty tworzone na potrzeby własne."
    ],
    ["1h5_projects","This is a comprehensive car rental system developed as a part of an engineering degree capstone project.", "Jest to kompleksowy system wynajmu samochodów opracowany w ramach projektu dyplomowego na zakończenie studiów inżynierskich."],
    ["2h5_projects","With Bloggie, users can create, manage, comment and like blog posts with a user-friendly interface.", "Dzięki aplikacji możliwe jest tworzenie, zarządzanie, komentowanie oraz lajkowania postów na blogu za pomocą przyjaznego dla użytkownika interfejsu."],
    ["3h5_projects","This project aims to provide a comprehensive solution for managing various aspects of a car detailing business.", "Projekt ten ma na celu dostarczenie kompleksowego rozwiązania do zarządzania różnymi aspektami działalności Car Detailingu."],
    ["4h5_projects","This solution was created to enable receiving messages from sensors placed around the house. The sensors publish messages to a queue via an API, and then a microservice sends them to a Discord channel.", "To rozwiązanie powstało aby umożliwić odbieranie komunikatów z czujników rozmieszczonych w domu. Czujniki za pomocą API publikują wiadomości na kolejkę, następnie mikro serwis wysyła je na kanał discord."],
    ["5h5_projects","The Daily Dish Service is designed to manage daily dish information from various restaurants. It provides functionalities to retrieve and cache daily dish data, ensuring efficient and quick access to the latest dish information.", "Usługa Daily Dish została zaprojektowana do zarządzania informacjami o daniach dnia z różnych restauracji. Zapewnia funkcje pobierania i buforowania danych dotyczących dań dnia, co gwarantuje efektywny i szybki dostęp do najnowszych informacji o potrawach."],

    ["h2_contact","Contact", "Kontakt"],
    ["p_contact","Feel free to reach out by email or on LinkedIn.", "Zapraszam do kontaktu mailowo lub przez LinkedIn."],

    ["span_footer"," All rights reserved.", " Wszelkie prawa zastrzeżone."],
];

function translate(lang) {
    langsDict.forEach(dict => {
        document.getElementsByName(dict[0]).forEach(el => {
            el.textContent = dict[lang == "1" ? 2 : 1];
            document.querySelector('html').lang = lang == "1" ? "pl" : "en";
        });
    })
    document.getElementById('cvlink').href = lang == "1" ? "file/Dawid_Florian_CV_PL.pdf" : "file/Dawid_Florian_CV_EN.pdf";
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