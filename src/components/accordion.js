

export function initAccordion(list) {

  const container = document.createElement('div');
  container.className = 'accordion-container';

  const row = document.createElement('div');
  row.className ='accordion-row';

  const title = document.createElement('div');
  title.className = 'accordion_title';
  title.textContent = 'On going projects...';

  const content = document.createElement('div');
  content.className = 'accordion_content';

  list.forEach(el => {

    const link = document.createElement('a');
    link.href = el.link;
    link.textContent = el.name;
    link.className = 'links';
    link.target = "_blank";

    content.appendChild(link);
  });

  row.appendChild(title);
  row.appendChild(content);
  container.appendChild(row)
  return container;

}

