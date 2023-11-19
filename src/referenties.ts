import './global';

import html2canvas from 'html2canvas';

window.Webflow ||= [];
window.Webflow.push(() => {
  const postList = document.querySelector<HTMLElement>('[cs-el="postList"]');
  const current = postList?.querySelector('.w--current');
  const nextElement = current?.parentElement?.nextElementSibling;
  const previousElement = current?.parentElement?.previousElementSibling;

  // Get the 'href' attribute of the <a> element from the next sibling
  const nextSrc = nextElement?.querySelector('a')?.getAttribute('href');

  // Get the 'href' attribute of the <a> element from the previous sibling
  const previousSrc = previousElement?.querySelector('a')?.getAttribute('href');

  // Select the next and previous buttons
  const nextButton = document.querySelector<HTMLAnchorElement>('[cs-el="nextPost"]');
  const previousButton = document.querySelector<HTMLAnchorElement>('[cs-el="previousPost"]');

  // console.log(nextButton);
  // console.log(previousButton);
  // console.log(nextSrc);
  // console.log(previousSrc);

  // Set the 'href' attribute of the next and previous buttons accordingly
  if (nextButton && nextSrc) {
    nextButton.href = nextSrc;
  }

  if (previousButton && previousSrc) {
    previousButton.href = previousSrc;
  }

  // const divToExport = document.querySelector<HTMLElement>('[cs-el="ogex"]');
  // if (divToExport) {
  //   const width = divToExport.clientWidth;
  //   const height = divToExport.clientHeight;
  //   // Use html2canvas to capture the content of the div
  //   html2canvas(divToExport).then((canvas) => {
  //     // Convert canvas to base64 image
  //     const imageData = canvas.toDataURL('image/png');
  //     // Create an image element
  //     const img = document.createElement('img');
  //     img.src = imageData;
  //     img.width = width;
  //     img.height = height;
  //     // Append the image to the body
  //     document.body.appendChild(img);
  //     img.addEventListener('click', () => {
  //       // Create an anchor element to trigger the download
  //       const link = document.createElement('a');
  //       link.href = imageData; // Set the base64 data as the href
  //       link.download = 'consultative_selling_' + name + '_og.png'; // Set the download filename
  //       link.click(); // Simulate a click on the link to trigger the download
  //     });
  //   });
  // }
});
