//const {scrollTop, clientHeight} = document.documentElement; // I am creating a constant from 2 of the properties of the document.documentElement object. It's called destructuring. scrollTop corresponds to the number of pixels scrolled from the top of the document. clientHeight corresponds to the height of the visible part of the client => The Viewport.

// Function to make the background of #sticky-title transparent until #presentation-section. (To avoid the gradient passing over the blobs)


/*window.addEventListener("scroll", () => {
  
  const topElementToTopViewport = timelineWrapper.getBoundingClientRect().top;
  const bottomElementToTopViewport = timelineWrapper.getBoundingClientRect().bottom;
  
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50)
  {
    timelineFixedDate.classList.add("fixed");
  }
  
  else if (scrollTop > (scrollTop + bottomElementToTopViewport).toFixed())
  {
    timelineFixedDate.classList.remove("fixed");
  }
  
  else
  {
    timelineFixedDate.classList.remove("fixed");
  }
  
  console.log(bottomElementToTopViewport);
});*/



/*const windowHeight = window.innerHeight;

const scrollTop = window.scrollY || window.pageYOffset;

const sectionTopToTopViewport = timelineWrapper.getBoundingClientRect().top;
const sectionBottomToTopViewport = timelineWrapper.getBoundingClientRect().bottom;


const timelineWrapper = document.getElementById("timeline");
const timelineFixedDate = document.getElementById("timeline-fixed-date");

window.addEventListener("scroll", () =>
{
  if (scrollTop + windowHeight / 2 <= sectionTopToTopViewport)
  {
      timelineFixedDate.classList.add("fixed");
  }

  else if (scrollTop + windowHeight / 2 >= sectionBottomToTopViewport)
  {
      timelineFixedDate.classList.remove('fixed');
  }
});*/




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



/* Detects when ultimate section is scrolled at the bottom and when it's not */
const {scrollTop, clientHeight} = document.documentElement;
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
    // Ajoutez ici vos actions à exécuter
  }
  
  else
  {
    // Si la section finale n'est pas visible au maximum vers le bas, retirez la classe 'shown'
    lettersToShow.forEach(letter => letter.classList.remove("shown"));
  }
});




/*const {scrollTop, clientHeight} = document.documentElement; // I am creating a constant from 2 of the properties of the document.documentElement object. It's called destructuring. scrollTop corresponds to the number of pixels scrolled from the top of the document. clientHeight corresponds to the height of the visible part of the client => The Viewport.
const endSection = document.getElementById("end-section");
const header = document.querySelector("#name-header");
const lettersToShow = document.querySelectorAll(".to-show");

window.addEventListener("scroll", () => {
  
  const topElementToTopViewport = header.getBoundingClientRect().top; // getBoundingClientRect is an object that contains several pieces of information and we only keep the 'top' information which corresponds to the distance between the visible part of the window and the top of our element.

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed()) // Starts when #presentation-section is entirely visible
  {
    // header.classList.add("blurred-bg");
    lettersToShow[0].classList.add("shown");
    lettersToShow[1].classList.add("shown");
  }
  
  else
  {
    // header.classList.remove("blurred-bg");
    lettersToShow[0].classList.remove("shown");
    lettersToShow[1].classList.remove("shown");
  }
});*/



/* Check if page has been scrolled or not */
/*window.addEventListener("scroll", () =>
{
  if (window.scrollY === 0)
  {
    // La page est scrollée tout en haut
    header.classList.remove("blurred-bg");
    lettersToShow[0].classList.remove("hidden");
    lettersToShow[1].classList.remove("hidden");
  }

  else
  {
    header.classList.add("blurred-bg");
    lettersToShow[0].classList.add("hidden");
    lettersToShow[1].classList.add("hidden");
  }
});*/


/*window.addEventListener("scroll", function() {
  var scrollTopTwo = window.pageYOffset || document.documentElement.scrollTop; // Détermination de la position de défilement

  // Calcul de la nouvelle hauteur de la div en fonction de la position de défilement
  var newHeight = 100 - (scrollTopTwo * 0.05);

  // Limiter la hauteur minimale à 0 pixels
  if (newHeight < 0) {
      newHeight = 0;
  }

  // Application de la nouvelle hauteur à la div
  document.querySelector(".content-wrapper").style.height = newHeight + "vh";
});
*/