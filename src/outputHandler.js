import PubSub from "pubsub-js";

const cachedDOM = (function createDOMCache() {
  const courseSelectButtons = document.querySelectorAll(
    ".course-form button[type=button]"
  );
  const courseSelectForm = document.querySelector(
    `form[data-form="course-select"]`
  );
  const courseFormWrapper = document.querySelector("[data-course-wrapper");
  const userInfoForm = document.querySelector(`form[data-form="user-info"]`);
  const courseError = document.querySelector(
    ".course-form [data-course-error]"
  );

  function getDOMElement(elementToGet) {
    if (elementToGet in cachedDOM) {
      return cachedDOM[elementToGet];
    }
    return undefined;
  }

  return {
    courseSelectButtons,
    courseSelectForm,
    userInfoForm,
    courseError,
    courseFormWrapper,
    getDOMElement,
  };
})();

function displayPassedCourseForm() {
  const courseFormWrapper = cachedDOM.getDOMElement("courseFormWrapper");
  const courseErrorPopup = cachedDOM.getDOMElement("courseError");
  courseErrorPopup.textContent = "";
  courseFormWrapper.classList.add("passed");
}

function bindEventsForCourseForm() {
  const courseFormPassed = "courseFormPassed";

  PubSub.subscribe(courseFormPassed, displayPassedCourseForm);
}

bindEventsForCourseForm();
