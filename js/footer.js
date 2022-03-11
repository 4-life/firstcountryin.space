const elements = Array.from(document.querySelectorAll('button.more'));
const open = (el) => el.target.parentElement.classList.add('open');

function checkAnchor() {
  const hash = window.location.hash.split('#')[1];
  if (!hash) {
    return;
  }

  const anchor = document.getElementById(hash);
  if (anchor) {
    anchor.parentElement.classList.add('open');
  }
}

// google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2B0JZYV657');

checkAnchor();

// events
window.addEventListener('hashchange', () => checkAnchor(), false);
elements.forEach(el => el.addEventListener('click', open.bind(el)));
