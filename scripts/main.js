document.addEventListener('DOMContentLoaded', () => {
    // Photo Section
    const photoScroll = document.getElementById('photo-scroll');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
  
    scrollLeftBtn.addEventListener('click', () => {
      photoScroll.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });
  
    scrollRightBtn.addEventListener('click', () => {
      photoScroll.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });
  
    // Video Section
    const videoScroll = document.getElementById('video-scroll');
    const videoScrollLeftBtn = document.getElementById('video-scroll-left');
    const videoScrollRightBtn = document.getElementById('video-scroll-right');
  
    videoScrollLeftBtn.addEventListener('click', () => {
      videoScroll.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });
  
    videoScrollRightBtn.addEventListener('click', () => {
      videoScroll.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });
  
    // Optional: Click-and-Drag for Photos
    let isDown = false;
    let startX;
    let scrollLeftVal;
  
    photoScroll.addEventListener('mousedown', (e) => {
      isDown = true;
      photoScroll.classList.add('active');
      startX = e.pageX - photoScroll.offsetLeft;
      scrollLeftVal = photoScroll.scrollLeft;
    });
    
    photoScroll.addEventListener('mouseleave', () => {
      isDown = false;
      photoScroll.classList.remove('active');
    });
    
    photoScroll.addEventListener('mouseup', () => {
      isDown = false;
      photoScroll.classList.remove('active');
    });
    
    photoScroll.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - photoScroll.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      photoScroll.scrollLeft = scrollLeftVal - walk;
    });
  
    // Optional: Click-and-Drag for Videos
    let isDownVid = false;
    let startXVid;
    let scrollLeftValVid;
  
    videoScroll.addEventListener('mousedown', (e) => {
      isDownVid = true;
      videoScroll.classList.add('active');
      startXVid = e.pageX - videoScroll.offsetLeft;
      scrollLeftValVid = videoScroll.scrollLeft;
    });
    
    videoScroll.addEventListener('mouseleave', () => {
      isDownVid = false;
      videoScroll.classList.remove('active');
    });
    
    videoScroll.addEventListener('mouseup', () => {
      isDownVid = false;
      videoScroll.classList.remove('active');
    });
    
    videoScroll.addEventListener('mousemove', (e) => {
      if(!isDownVid) return;
      e.preventDefault();
      const x = e.pageX - videoScroll.offsetLeft;
      const walk = (x - startXVid) * 2; // Scroll speed multiplier
      videoScroll.scrollLeft = scrollLeftValVid - walk;
    });
  });
  