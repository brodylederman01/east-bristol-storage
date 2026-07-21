const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

links?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

const rentModal = document.querySelector('#rentModal');
const rentTriggers = document.querySelectorAll('.rent-trigger');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');

function openRentModal() {
  if (!rentModal) return;
  rentModal.hidden = false;
  document.body.classList.add('modal-open');
  rentModal.querySelector('.rent-modal-close')?.focus();
}

function closeRentModal() {
  if (!rentModal) return;
  rentModal.hidden = true;
  document.body.classList.remove('modal-open');
}

rentTriggers.forEach(button => button.addEventListener('click', openRentModal));
closeModalButtons.forEach(button => button.addEventListener('click', closeRentModal));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && rentModal && !rentModal.hidden) closeRentModal();
});
