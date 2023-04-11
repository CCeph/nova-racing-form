const cachedDOM = (function createDOMCache() {
  const courseSelectButtons = document.querySelectorAll(
    ".course-form button[type=button]"
  );
  const courseSelectForm = document.querySelector(
    `form[data-form="course-select"]`
  );
  const userInfoForm = document.querySelector(`form[data-form="user-info"]`);

  function getDOMElement(elementToGet) {
    if (elementToGet in cachedDOM) {
      return cachedDOM[elementToGet];
    }
    return undefined;
  }

  return { courseSelectButtons, courseSelectForm, userInfoForm, getDOMElement };
})();

function clearSelectedCourseButtons(courseButtonArray) {
  courseButtonArray.forEach((courseButton) => {
    courseButton.classList.remove("selected");
    courseButton.setAttribute("data-selected", "no");
  });
}

function bindCourseSelectButtons() {
  const courseButtonList = cachedDOM.getDOMElement("courseSelectButtons");
  const courseButtonArray = Array.from(courseButtonList);
  courseButtonArray.forEach((courseButton) => {
    courseButton.addEventListener("click", () => {
      if (courseButton.getAttribute("data-selected") === "yes") {
        clearSelectedCourseButtons(courseButtonArray);
      } else if (courseButton.getAttribute("data-selected") === "no") {
        clearSelectedCourseButtons(courseButtonArray);
        courseButton.setAttribute("data-selected", "yes");
        courseButton.classList.add("selected");
      }
    });
  });
}

bindCourseSelectButtons();

function checkForSelectedCourses() {
  const courseButtonList = cachedDOM.getDOMElement("courseSelectButtons");
  const courseButtonArray = Array.from(courseButtonList);
  const filteredArray = courseButtonArray.filter(
    (course) => course.getAttribute("data-selected") === "yes"
  );
  if (filteredArray.length === 1) {
    return true;
  }
  return false;
}

function validateCourseForm() {
  const validCourseSelection = checkForSelectedCourses();
  if (validCourseSelection === true) {
    // Check passed
  } else if (validCourseSelection === false) {
    // Check fails
  }
}

cachedDOM
  .getDOMElement("courseSelectForm")
  .addEventListener("submit", (event) => {
    validateCourseForm();
    event.preventDefault();
  });
