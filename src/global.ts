import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

window.Webflow ||= [];
window.Webflow.push(() => {
  // Close consent
  const consent = document.querySelector('[cs-el="consent"]');
  if (consent) {
    gsap.set(consent, { opacity: 0, yPercent: 200 });
    gsap.to(consent, { opacity: 1, delay: 1, yPercent: 0 });
    const closeConsent = consent.querySelector('[cs-el="closeConsent"]');
    closeConsent?.addEventListener('click', () => {
      gsap.to(consent, { opacity: 0, yPercent: 200 });
    });
  }
  //// Setup Match Media
  const mm = gsap.matchMedia();
  const breakPoint = 800;

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isDesktop, isMobile, reduceMotion } = context.conditions;

      if (isDesktop) {
        const cardsContainer = document.querySelector('[cs-el="cards"]');
        if (cardsContainer) {
          const cards: string[] = gsap.utils.toArray('[cs-el="card"]');
          if (cards.length > 0) {
            console.log(cards.length);
            // ScrollTrigger.batch(cards, {
            //   onEnter: (batch) =>
            //     gsap.from(batch, { y: '8px', opacity: 0, duration: 1, stagger: 0.1 }),
            //   //onEnter: (batch) => gsap.to(batch, { y: '0px', autoAlpha: 1, duration: 1, stagger: 0.1 }),
            // });

            // Card Hovers
            cards.forEach((item: any) => {
              const overlay = item.querySelector('[cs-el="cardContent"]');
              const icon = item.querySelector('[cs-el="cardIcon"]');
              gsap.set(overlay, { yPercent: 101 });
              const tl_hover = gsap.timeline({ paused: true });

              tl_hover.to(item, { scale: 1.05, duration: 0.5, ease: 'sin.in' });
              tl_hover.to(overlay, { yPercent: 0, duration: 0.5, ease: 'sin.in' }, '<');
              tl_hover.from(icon, { opacity: 0, x: '-32px', duration: 0.5, ease: 'sin.in' });

              item.addEventListener('mouseenter', () => {
                tl_hover.timeScale(1).play();
              });
              item.addEventListener('mouseleave', () => {
                tl_hover.timeScale(2).reverse();
              });
            });
          }
        } //// End: Humanss
      }

      function init() {} // End: function init()

      window.addEventListener('resize', () => {
        init();
      });
      window.addEventListener('load', () => {
        init();
      });
      return () => {};
    } // End: MM Context
  ); // End: Setup Match Media
}); // End: Webflow Push
