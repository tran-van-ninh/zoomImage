window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

let wrapImage = $('.wrap-image');
let result = $('#result');
let img = $('img');
let arr = {}

img.addEventListener('mousemove', function(e){
    result.classList.remove('hide');
    let rect = img.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let w = this.offsetWidth;
    let h = this.offsetHeight;

    let percentMouseByW = (x / w) * 100;
    let percentMouseByH = (y / h) * 100;
    result.style.backgroundImage =`url(./assets/img/image3.webp)`;
    result.style.backgroundSize = `1000px 1000px`;
    result.style.backgroundPosition = `${percentMouseByW}% ${percentMouseByH}%`;

    requestAnimationFrame(() => {
        result.style.top = `${y}px`;
        result.style.left = `${x}px`;
    });
});

img.addEventListener('mouseleave', ()=>{
    result.classList.add('hide');
});
