const cachedDOM = (function createDOMCache() {
  const courseSelectButtons = document.querySelectorAll(
    ".course-form button[type=button]"
  );

  function getDOMElement(elementToGet) {
    if (elementToGet in cachedDOM) {
      return cachedDOM[elementToGet];
    }
    return undefined;
  }

  return { courseSelectButtons, getDOMElement };
})();

function clearSelectedCourseButtons() {
  const courseButtonList = cachedDOM.getDOMElement("courseSelectButtons");
  const courseButtonArray = Array.from(courseButtonList);
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
        clearSelectedCourseButtons();
      } else if (courseButton.getAttribute("data-selected") === "no") {
        clearSelectedCourseButtons();
        courseButton.setAttribute("data-selected", "yes");
        courseButton.classList.add("selected");
      }
    });
  });
}

bindCourseSelectButtons();
