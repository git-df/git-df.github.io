function initializeTyped(id, strings, typeSpeed, backSpeed, cursorChar, loop) {
    new Typed(`#${id}`, {
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        cursorChar: cursorChar,
        loop: loop
    });
}