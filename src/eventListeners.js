export function setupAccordionListeners() {
    const title = document.querySelector('.accordion_title');
    console.log("title: ", title);
    if (title) {
      title.addEventListener('click', () => {

        console.log("clicked...");
        const content = title.nextElementSibling;
        if (content) {
          content.classList.toggle('active');
        }
      });
    }
  }