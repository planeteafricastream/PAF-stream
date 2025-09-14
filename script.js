/* script.js - header menu, simple purchase simulation, carousel helpers */

document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-panel');

  if(menuBtn && nav){
    menuBtn.addEventListener('click', ()=> nav.classList.toggle('show'));
    // close when clicking outside
    document.addEventListener('click', (e)=>{
      if(nav.classList.contains('show') && !nav.contains(e.target) && !menuBtn.contains(e.target)){
        nav.classList.remove('show');
      }
    });
  }

  // purchase simulation (buttons with data-price)
  document.body.addEventListener('click', function(e){
    const b = e.target.closest('[data-buy]');
    if(!b) return;
    const price = b.getAttribute('data-price');
    const title = b.getAttribute('data-title') || 'ce contenu';
    if(!confirm(`Confirmer paiement simulé de ${price} FCFA pour "${title}" ?`)) return;
    alert('Paiement simulé OK — accès accordé (simulation).');
    // here you would call your backend/payment API
  });
});
