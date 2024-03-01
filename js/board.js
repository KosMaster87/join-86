async function initBoard() {
  await includeHTML();
  setActiveLink("navBoard");

  // document.addEventListener("DOMContentLoaded", function () {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const activeLinkId = urlParams.get("activeLinkId");
  
  //   if (activeLinkId) {
  //     setActiveLink(activeLinkId);
  //   } else {
  //     console.log("fehler bei activeLinkId durch ULR weiterleitung. Oder so.");
  //     // Hier können Sie eine Standard-Logik hinzufügen, wenn kein Parameter übergeben wurde
  //   }
  // });
}
