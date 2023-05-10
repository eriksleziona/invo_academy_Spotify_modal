import Swal from "sweetalert2";

export const UserFeedbackModal = () => {
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
