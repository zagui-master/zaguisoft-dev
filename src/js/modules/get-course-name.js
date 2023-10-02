/** @format */

const conten_courses = document.getElementById("conten_courses");

conten_courses.addEventListener("click", (e) => {
  if (e.composedPath()[2].childNodes[3].id === "show_info_course") {
    let course_title =
      e.composedPath()[2].childNodes[1].childNodes[3].childNodes[1]
        .childNodes[0].nodeValue;
    localStorage.setItem("course_title", JSON.stringify(course_title));
  }
});

/*
[2].childNodes[1].childNodes[3].childNodes[1].childNodes[0].nodeValue
show_info_course;
*/
