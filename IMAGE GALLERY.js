const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[index];
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
}

function filterImages(category) {
  galleryItems.forEach(item => {
    item.style.display = category === 'all' || item.dataset.category === category ? 'block' : 'none';
  });
}
