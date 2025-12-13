<script>
document.addEventListener('DOMContentLoaded', () => {

  /* ===== MENU BURGER AMÉLIORÉ ===== */
  const menuBtn = document.getElementById('menuBtn');
  const navPanel = document.getElementById('nav-panel');
  const overlay = document.getElementById('menuOverlay');

  function toggleMenu(){
    menuBtn.classList.toggle('active'); // animation ☰ → ✖
    navPanel.classList.toggle('open');  // slide du menu
    overlay.classList.toggle('show');   // fond sombre
  }

  menuBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Ferme le menu quand on clique sur un lien
  document.querySelectorAll('#nav-panel a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  /* ===== PAIEMENT SIMULÉ (LOCAL) ===== */
  window.simulatePurchase = function(key, title, amount, successUrl) {
    if(!confirm(`Confirmer le paiement de ${amount} FCFA pour « ${title} » ?`)) return;

    localStorage.setItem(key, 'purchased');
    alert('Paiement enregistré. Accès débloqué.');

    if(successUrl) window.location.href = successUrl;
  };

  /* ===== RECHERCHE FILMS ===== */
  const searchBar = document.getElementById('searchBar');
  if(searchBar){
    searchBar.addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      const cards = document.querySelectorAll('.film-card');
      let found = false;

      cards.forEach(card => {
        const title = card.querySelector('.card-body h3').textContent.toLowerCase();
        if(title.includes(q)){
          card.style.display = '';
          found = true;
        } else {
          card.style.display = 'none';
        }
      });

      const noResult = document.getElementById('noResult');
      if(noResult) noResult.style.display = found ? 'none' : 'block';
    });
  }

});
</script>
