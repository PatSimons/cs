import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  const currentNavItem = document.getElementById('aanbod');
  currentNavItem?.classList.add('w-current');

  // Modal
  const modal = document.querySelector('[cs-el="modal"]');
  if (modal) {
    gsap.set(modal, { autoAlpha: 0 });
    const tl_openModal = gsap.timeline({ paused: true });
    tl_openModal.to(modal, { autoAlpha: 1, duration: 0.25 });

    const modalPanel = gsap.utils.toArray<HTMLElement>('[cs-el="modalPanel"]');
    tl_openModal.from(modalPanel, { opacity: 0, yPercent: 5, duration: 0.5 });
    const openModalBtns = gsap.utils.toArray<HTMLElement>('[cs-el="openModal"]');
    if (openModalBtns.length > 0) {
      openModalBtns.forEach((item) => {
        item.addEventListener('click', () => {
          tl_openModal.timeScale(1).play();
        });
      });
    }
    const closeModalBtns = gsap.utils.toArray<HTMLElement>('[cs-el="closeModal"]');
    if (closeModalBtns.length > 0) {
      closeModalBtns.forEach((item) => {
        item.addEventListener('click', () => {
          tl_openModal.timeScale(2).reverse();
        });
      });
    }
  }
}); // End: Webflow Push
