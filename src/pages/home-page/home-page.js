/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "./home-page.scss";
import { UserFeedbackModal } from "./components/user-feedback-modal/user-feedback-modal";

setTimeout(() => {
  UserFeedbackModal();
}, 2000);
