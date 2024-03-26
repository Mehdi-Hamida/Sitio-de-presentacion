/* Targets the mouse cursor to apply styles */
document.addEventListener("DOMContentLoaded", function()
{
  const cursor = document.getElementById("custom-cursor");

  document.addEventListener("mousemove", function(e)
  {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
});


/* Makes button of presentation section run away from mouse */
function runaway(id)
{
  id.style.top = Math.round(Math.random() * 30) - 15 + 'vh';
  id.style.left = Math.round(Math.random() * 50) - 25 + 'vw';
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
      var scrollOffset = windowHeight / 3; // 33vh après l'élément

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