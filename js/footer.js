const elements = Array.from(document.querySelectorAll('button.more'));
const open = (el) => el.target.parentElement.classList.add('open');
elements.forEach(el => el.addEventListener('click', open.bind(el)));

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-2B0JZYV657');
