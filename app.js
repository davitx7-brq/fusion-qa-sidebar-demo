const title = document.getElementById('page-title');
const links = document.querySelectorAll('.sidebar a');

function activate(hash) {
  const link = [...links].find((a) => a.getAttribute('href') === hash) || links[0];
  links.forEach((a) => a.classList.toggle('active', a === link));
  title.textContent = link.textContent;
}

window.addEventListener('hashchange', () => activate(location.hash));
activate(location.hash);
