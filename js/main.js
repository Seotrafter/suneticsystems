document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");
  
    if (!banner || !acceptBtn || !declineBtn) return;
  
    const accepted = localStorage.getItem("cookiesAccepted");
    const declined = localStorage.getItem("cookiesDeclined");
  
    if (!accepted && !declined) {
      banner.style.display = "flex";
    }
  
    acceptBtn.addEventListener("click", function () {
      try {
        localStorage.setItem("cookiesAccepted", "true");
      } catch (e) {}
      banner.style.display = "none";
    });
  
    declineBtn.addEventListener("click", function () {
      try {
        localStorage.setItem("cookiesDeclined", "true");
      } catch (e) {}
      banner.style.display = "none";
    });
  });
  