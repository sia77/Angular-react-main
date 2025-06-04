export function setupAccordionListeners() {
    const title = document.querySelector('.accordion_title');
    if (title) {
      title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        if (content) {
          content.classList.toggle('active');
        }
      });
    }
  }