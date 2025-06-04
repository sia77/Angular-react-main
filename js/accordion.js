

export function initAccordion(parentId, list) {

  const parent = document.getElementById(parentId);
  if(!parent){
    console.warn(`No element found with ID "${parentId}"`);
    return;
  }

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

    content.appendChild(link);
  });

  row.appendChild(title);
  row.appendChild(content);
  parent.appendChild(row);

}

