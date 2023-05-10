import loader from "/assets/icons/animated-loader.svg";
import icon from "/assets/icons/user-feedback-icon.svg";
import Swal from "sweetalert2";
const UserFeedbackComponent = () => {
  document.querySelector(".user-feedback-component__icon-container-img").src =
    icon;
  document.querySelector(".btn-primary__loader-img").src = loader;
  let currentRating = null;
  const userFeedbackComponent = document.querySelector(
    ".user-feedback-component"
  );
  const allRatesTiles = userFeedbackComponent.querySelectorAll(
    ".user-feedback-component__single-rate-tile"
  );

  const confirmButton = document.querySelector(
    ".user-feedback-component__confirm-button"
  );

  addListenersToAllRatesTiles();

  confirmButton.addEventListener("click", () => {
    const hide = document.querySelector(".btn-primary__text");
    const unhide = document.querySelector(".btn-primary__loader");
    hide.toggleAttribute("data-loading");
    unhide.toggleAttribute("data-loading");
    setTimeout(() => {
      Swal.clickConfirm();
    }, 2000);
  });

  function addListenersToAllRatesTiles() {
    allRatesTiles.forEach((singleRateTile) => {
      singleRateTile.addEventListener("click", () => {
        singleRateTile.toggleAttribute("data-selected");
        if (singleRateTile.hasAttribute("data-selected")) {
          currentRating = singleRateTile.getAttribute("data-rate");
        } else {
          currentRating = null;
        }

        console.log(`current rating: ${currentRating}`);
        afterRatingChanged(singleRateTile);
      });
    });
  }

  function disselectOtherRatings(clickedTile) {
    allRatesTiles.forEach((singleRateTile) => {
      if (singleRateTile != clickedTile) {
        singleRateTile.removeAttribute("data-selected");
      }
    });
  }

  function setProperButtonState() {
    if (currentRating) {
      confirmButton.removeAttribute("disabled");
    } else {
      confirmButton.setAttribute("disabled", true);
    }
  }
  function afterRatingChanged(singleRateTile) {
    disselectOtherRatings(singleRateTile);
    setProperButtonState(currentRating);
  }
};

export default UserFeedbackComponent;
