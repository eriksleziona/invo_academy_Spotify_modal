import Swal from "sweetalert2";

export const UserFeedbackModal = () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
};
