// menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelectorAll('.menu-btn');
  const nav = document.getElementById('nav-panel');
  menuBtn.forEach(b=>b.addEventListener('click', ()=> nav.classList.toggle('show')));

  // simple purchase handler used across pages
  window.simulatePurchase = function(key, title, amount, successUrl) {
    // confirm simulated payment
    if(!confirm(`Confirmer paiement simulé de ${amount} FCFA pour "${title}" ?`)) return;
    // mark purchased in localStorage
    localStorage.setItem(key, 'purchased');
    alert('Paiement simulé réussi — accès débloqué.');
    if(successUrl) location.href = successUrl;
  };

  // search helper for index/catalogue
  const searchBar = document.getElementById('searchBar');
  if(searchBar){
    searchBar.addEventListener('input', (e)=>{
      const q = e.target.value.trim().toLowerCase();
      const cards = document.querySelectorAll('.film-card');
      let found = false;
      cards.forEach(c=>{
        const title = c.querySelector('.card-body h3').textContent.toLowerCase();
        if(title.includes(q)){
          c.style.display = '';
          found = true;
        } else {
          c.style.display = 'none';
        }
      });
      const no = document.getElementById('noResult');
      if(no) no.style.display = found ? 'none' : 'block';
    });
  }
});
