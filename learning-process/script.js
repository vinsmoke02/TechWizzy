function showSection(sectionId) {
    const sections = document.querySelectorAll('.learning-section');
    
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    document.getElementById(sectionId).style.display = 'block';
}

  
function goBack() {
  window.history.back(); // Navigates to the previous page
}





