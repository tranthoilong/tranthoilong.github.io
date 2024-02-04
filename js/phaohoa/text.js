
ScrollReveal({ reset: true,distance:'60px',duration:2500,delay:400 });
ScrollReveal().reveal('.day', {delay:500,origin:'left'});
ScrollReveal().reveal('#text-container', {delay:900,origin:'top', easing: 'cubic-bezier(0.5, 0, 0, 1)'},);



document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const message = `
    <div>Hi em...!</div>
    <div>Chúc bé iu của anh một năm mới vui vẻ.</div>
    <div>Và năm nay cũng là năm bắt đầu cùa chúng ta.</div>
    <div>Cảm ơn em đã cho anh cơ hội để có thể đồng hành cùng em.</div>
    <div>Anh không biết là anh và em sẽ đi được đến đâu nhưng anh hy vọng chúng ta có thể đi đến những gì chúng ta mơ ước <3</div>
    `;
    
    const htmlToWrite =message|| '<div>i love you</div><div>My name is <b style="color: red;">Long</b></div><div>i love you</div><div>My name is <b style="color: red;">Long</b></di0v>';

    let currentCharacterIndex = 0;

    function writeHtml() {
        textElement.innerHTML = htmlToWrite.slice(0, currentCharacterIndex++);
        if (currentCharacterIndex <= htmlToWrite.length) {
            // requestAnimationFrame(writeHtml);
            setTimeout(writeHtml,1000/24)
        }
    }

    writeHtml();
});

