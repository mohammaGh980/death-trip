// komentar felt i erfaringdelinb//
function addComment() {
  var name = document.getElementById("name").value;
  var commentText = document.getElementById("comment").value;

  var commentContainer = document.getElementById("comments-list");

  var commentDiv = document.createElement("div");
  commentDiv.className = "comment";

  var commenter = document.createElement("p");
  commenter.textContent = name || "Anonym";

  var commentContent = document.createElement("p");
  commentContent.textContent = commentText;

  var deleteBtn = document.createElement("span");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Slett kommentar";
  deleteBtn.onclick = function () {
      commentContainer.removeChild(commentDiv);
  };
  

  commentDiv.appendChild(commenter);
  commentDiv.appendChild(commentContent);
  commentDiv.appendChild(deleteBtn);

  commentContainer.appendChild(commentDiv);

  // Tøm skjemaet
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}

  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
//navigasjon sti
function updateBreadcrumb(pageName) {
  var breadcrumbs = document.getElementById('breadcrumbs');
  var currentPage = document.getElementById('currentPage');

  // Fjern eksisterende lenker etter gjeldende side
  var links = breadcrumbs.getElementsByTagName('a');
  while (links.length > 1) {
    breadcrumbs.removeChild(links[1]);
  }

  // Legg til lenken for gjeldende side
  var currentLink = document.createElement('a');
  currentLink.href = '#';
  currentLink.innerText = pageName;
  currentLink.onclick = function() {
    updateBreadcrumb(pageName);
  };
  breadcrumbs.insertBefore(currentLink, currentPage);

  // Oppdater tekst for gjeldende side
  currentPage.innerText = pageName;
}
