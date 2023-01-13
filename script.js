function toggleAccordion(event) {
    const content = event.target.nextElementSibling;
    content.classList.toggle("active");
  }

  function toggleAccordion(event) {
    const content = event.target.nextElementSibling;
    const isExpanded = content.classList.toggle("active");
    event.target.setAttribute("aria-expanded", isExpanded);
  }