function showSection(sectionId) {
    const sections = document.querySelectorAll('.container, .section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Show home section by default
  showSection('home');
  
  // Log screen size for responsiveness testing
  window.addEventListener('resize', () => {
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
  });
  
