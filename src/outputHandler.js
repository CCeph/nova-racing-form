import PubSub from "pubsub-js";

const cachedDOM = (function createDOMCache() {
  const courseSelectButtons = document.querySelectorAll(
    ".course-form button[type=button]"
  );
  const courseSelectForm = document.querySelector(
    `form[data-form="course-select"]`
  );
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
    getDOMElement,
  };
})();

function displayPassedCourseForm() {
  console.log("cos");
}

function bindEventsForCourseForm() {
  const courseFormPassed = "courseFormPassed";

  PubSub.subscribe(courseFormPassed, displayPassedCourseForm);
}

bindEventsForCourseForm();
