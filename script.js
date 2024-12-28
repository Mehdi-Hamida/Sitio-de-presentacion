/* Targets the mouse cursor to apply styles */
/*document.addEventListener("DOMContentLoaded", function()
{
  const cursor = document.getElementById("custom-cursor");

  document.addEventListener("mousemove", function(e)
  {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
});*/


/* Makes button of presentation section run away from mouse */
function runaway(id)
{
  id.style.top = Math.round(Math.random() * 60) - 15 + 'px';
  id.style.left = Math.round(Math.random() * 60) - 25 + '%';
}


const timelineWrapper = document.getElementById("timeline-wrapper");
const timelineFixedDate = document.getElementById("rocket-wrapper");

/* Adds classes to the rocket icon from timeline section */
window.addEventListener("scroll", () =>
{
  const windowHeight = window.innerHeight;
  const sectionTopToTopViewport = timelineWrapper.getBoundingClientRect().top;
  const sectionBottomToTopViewport = timelineWrapper.getBoundingClientRect().bottom;

  if (sectionTopToTopViewport <= windowHeight / 2 && sectionBottomToTopViewport >= windowHeight / 2)
  {
    timelineFixedDate.classList.add("fixed");
    timelineFixedDate.classList.remove("down");
  }
  
  else if (sectionBottomToTopViewport <= windowHeight / 2)
  {
    timelineFixedDate.classList.remove("fixed"); 
    timelineFixedDate.classList.add("down");
  }
  
  else
  {
    timelineFixedDate.classList.remove("fixed");
    timelineFixedDate.classList.remove("down");
  }
});


// Highlits nearest element from the timeline's rocket
function highlightTimelineItem()
{
  var timelineItems = document.querySelectorAll('.timeline-row .timeline-item');

  // Supprimer la classe highlight de tous les éléments de la timeline
  timelineItems.forEach(function(item)
  {
      item.classList.remove('highlight');
  });

  // Déterminer l'élément le plus proche de la position de défilement
  var closestItem = null;
  var closestDistance = Infinity;

  timelineItems.forEach(function(item)
  {
      var rect = item.getBoundingClientRect();
      var windowHeight = window.innerHeight;
      var scrollOffset = windowHeight / 2.5; // 40vh après l'élément

      // Calculer la distance entre le haut de l'élément et le point de défilement
      var distance = Math.abs(rect.top - scrollOffset);

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


/* Rotating cards effect */
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
  
  

/* ------------- TEST ZONE ------------- */

/* Detects when ultimate section is scrolled at the bottom and when it's not */
/*const {scrollTop, clientHeight} = document.documentElement;
const endSection = document.getElementById("end-section");
const lettersToShow = document.querySelectorAll(".to-show");

window.addEventListener("scroll", () =>
{
  const endSectionRect = endSection.getBoundingClientRect();
  const endSectionTop = endSectionRect.top;
  const endSectionHeight = endSectionRect.height;

  // Calcul de la position verticale du bas de l'écran
  const bottomOfViewport = scrollTop + clientHeight;

  // Calcul de la position verticale du bas de la section finale
  const bottomOfEndSection = endSectionTop + endSectionHeight;

  // Vérification si la section finale est visible au maximum vers le bas
  const endSectionInViewport = bottomOfEndSection <= bottomOfViewport;

  // Si la section finale est visible au maximum vers le bas, déclenchez les actions
  if (endSectionInViewport)
  {
    console.log("La section finale est visible au maximum vers le bas !");
    lettersToShow.forEach(letter => letter.classList.add("shown"));
  }
  
  else
  {
    // Si la section finale n'est pas visible au maximum vers le bas, retirez la classe 'shown'
    lettersToShow.forEach(letter => letter.classList.remove("shown"));
  }
});*/