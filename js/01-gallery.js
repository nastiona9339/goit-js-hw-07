import { galleryItems } from './gallery-items.js';
// Change code below this line

import basiclightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm'



const callToGallary = document.querySelector(".gallery")
callToGallary.addEventListener("click", onClick)

function onClick(e) {
    e.preventDefault()
    // console.dir(e.target);
    if (!e.target.nodeName === "IMG") {
        return
    }

    const instance = basiclightbox.create(`
      <img
      class="gallery__image"
      src="${e.target.dataset.source}"
      alt="${e.target.alt}"
    />
`)
 
    
    document.addEventListener("keydown", onClose) 
    instance.show()
  

    function onClose(e) {
        // console.log(e.code);
        if (e.code !== "Escape") {
            return
        }
        
        instance.close()
        removeEventListener("keydown", onClose)
    }

}



function creatItem() {
    let  elements = ""
        
    galleryItems.forEach(item => 
        elements += `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`)
    
    callToGallary.innerHTML = elements
}

creatItem()


