document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.modal-close');
  
  // Navigation Buttons
  const prevBtn = document.querySelector('.modal-prev');
  const nextBtn = document.querySelector('.modal-next');

  // Thumbnails
  const thumbnails = document.querySelectorAll('.thumbnail');

  // Keep track of which photo is currently displayed
  let currentIndex = 0;

  // Helper function to update modal image
  function showImage(index) {
    // Wrap around if out of bounds
    if (index < 0) {
      index = thumbnails.length - 1; // jump to last
    }
    if (index >= thumbnails.length) {
      index = 0; // jump to first
    }
    currentIndex = index;
    modalImg.src = thumbnails[currentIndex].src;
  }

  // Open modal when a thumbnail is clicked
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentIndex = index; // set current to clicked thumb
      showImage(currentIndex);
      // Show the modal
      modal.classList.add('show');
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Close modal if clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  // Next / Prev Button Clicks
  nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
  });

  prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
  });

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    // Only if modal is open
    if (!modal.classList.contains('show')) return;

    if (e.key === 'ArrowRight') {
      showImage(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      showImage(currentIndex - 1);
    } else if (e.key === 'Escape') {
      // Optional: close modal on Esc
      modal.classList.remove('show');
    }
  });
});
