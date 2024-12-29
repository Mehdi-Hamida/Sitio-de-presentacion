/* -------------------- PRESENTATION SECTION -------------------- */

/* Makes button of presentation section run away from mouse */
function runaway(id)
{
  id.style.top = Math.round(Math.random() * 60) - 15 + 'px';
  id.style.left = Math.round(Math.random() * 60) - 25 + '%';
}


document.addEventListener("DOMContentLoaded", function ()
{
    const presentationSection = document.querySelector("#presentation-section");
    const presentationContent = document.querySelector("#presentation-content");

    if (presentationSection && presentationContent)
    {
        window.addEventListener("scroll", function ()
        {
            const sectionRect = presentationSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            if (windowWidth > 768)
            {
                // Ajoute la classe quand le bas de la section atteint le bas de l'écran
                if (sectionRect.bottom <= windowHeight)
                {
                    presentationContent.classList.add("visible");
                }
            }

            else
            {
                // Ajoute la classe quand le milieu de la section atteint le milieu de l'écran
                const sectionMiddle = sectionRect.top + sectionRect.height / 2;
                const windowMiddle = windowHeight / 2;

                if (sectionMiddle <= windowMiddle)
                {
                    presentationContent.classList.add("visible");
                }
            }
        });
    }
});


/* -------------------- TIMELINE SECTION -------------------- */

const timelineWrapper = document.getElementById("timeline-wrapper");
const rocketWrapper = document.getElementById("rocket-wrapper");

/* Adds classes to the rocket icon from timeline section */
window.addEventListener("scroll", () =>
{
  const windowHeight = window.innerHeight;
  const sectionTopToTopViewport = timelineWrapper.getBoundingClientRect().top;
  const sectionBottomToTopViewport = timelineWrapper.getBoundingClientRect().bottom;

  if (sectionTopToTopViewport <= windowHeight / 2 && sectionBottomToTopViewport >= windowHeight / 2)
  {
    rocketWrapper.classList.add("fixed");
    rocketWrapper.classList.remove("down");
  }
  
  else if (sectionBottomToTopViewport <= windowHeight / 2)
  {
    rocketWrapper.classList.remove("fixed"); 
    rocketWrapper.classList.add("down");
  }
  
  else
  {
    rocketWrapper.classList.remove("fixed");
    rocketWrapper.classList.remove("down");
  }
});


// Highlits nearest element from the timeline's rocket
function highlightTimelineItem()
{
  let timelineItems = document.querySelectorAll('.timeline-row .timeline-item');

  // Supprimer la classe highlight de tous les éléments de la timeline
  timelineItems.forEach(function(item)
  {
      item.classList.remove('highlight');
  });

  // Déterminer l'élément le plus proche de la position de défilement
  let closestItem = null;
  let closestDistance = Infinity;

  timelineItems.forEach(function(item)
  {
      let rect = item.getBoundingClientRect();
      let windowHeight = window.innerHeight;
      let scrollOffset = windowHeight / 2.5; // 40vh après l'élément

      // Calculer la distance entre le haut de l'élément et le point de défilement
      let distance = Math.abs(rect.top - scrollOffset);

      // Mettre à jour l'élément le plus proche
      if (distance < closestDistance)
      {
          closestDistance = distance;
          closestItem = item;
      }
  });

  // Ajouter la classe highlight à l'élément le plus proche
  if (closestItem)
  {
      closestItem.classList.add('highlight');
  }
}

window.addEventListener('scroll', highlightTimelineItem);



/* -------------------- SKILLS SECTION -------------------- */

const cards = document.querySelectorAll('.skill-card');

/* Shining cards effect */
cards.forEach(card =>
{
    const shine = card.querySelector('.card-shine');

    card.addEventListener('mousemove', (e) =>
    {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Positionne le centre du halo directement sous la souris
        shine.style.left = `${x}px`;
        shine.style.top = `${y}px`;
        shine.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () =>
    {
        shine.style.opacity = '0';
    });
});
  
  
/* Rotating cards and rotating shadows effects */
cards.forEach(card =>
{
    const icons = card.querySelectorAll('i, #prestashop-icon svg');
    const titles = card.querySelectorAll('h3.skill-card_title');

    card.addEventListener('mousemove', (e) =>
    {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Inverser les rotations pour rapprocher la carte dans la direction de la souris
        const rotateX = ((y - rect.height / 2) / rect.height) * 15; // Inversion pour axe X
        const rotateY = ((rect.width / 2 - x) / rect.width) * 15;   // Inversion pour axe Y

        // Ajoute une translation Z pour accentuer l'effet de rapprochement
        const translateZ = 20; // Ajuste cette valeur pour plus de profondeur

        // Applique la rotation et translation Z avec perspective
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
        card.style.transition = 'transform ease 0.1s';

        // Calcul de la position du drop-shadow
        const shadowX = -rotateY * 2; // Ajuste le multiplicateur pour l'intensité
        const shadowY = rotateX * 2; // Ajuste le multiplicateur pour l'intensité

        // Applique le drop-shadow aux icônes
        icons.forEach(icon =>
        {
            icon.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 3px #160f31)`;
        });

        // Applique le text-shadow aux titres
        titles.forEach(title =>
        {
            title.style.textShadow = `${shadowX}px ${shadowY}px 5px #160f31`;
        });
    });

    card.addEventListener('mouseleave', () =>
    {
        // Réinitialise la rotation et les effets
        card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
        card.style.transition = 'transform ease 1s';

        icons.forEach(icon =>
        {
            icon.style.filter = 'drop-shadow(0px 0px 0px #160f31)';
        });

        titles.forEach(title =>
        {
            title.style.textShadow = '0px 0px 3px #160f31';
        });
    });
});