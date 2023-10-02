/** @format */

import { courses_information } from "../data/data-courses.js";

const section_info_course = document.getElementById("section_info_course");
const selectedCourse = JSON.parse(localStorage.getItem("course_title")) ?? [];

const findCourse = courses_information.find(
  (course) => course.course_name === selectedCourse
);

const generateCourseInfoHTML = (course) => {
  return `
    <div class="container-info-course">
      <div class="container-img">
        <img src="${course.course_img}" alt="" />
      </div>
      <div class="container-info">
        <h2>${course.course_name}</h2>
        <p>${course.description}</p>
        <span>${course.course_creator}</span>
        <span>$${course.course_price}</span>
      </div>
    </div>
  `.trim();
};

const renderCourseInfo = (course) => {
  if (course) {
    const courseInfoHTML = generateCourseInfoHTML(course);
    section_info_course.innerHTML = courseInfoHTML;
  } else {
    section_info_course.innerHTML = "No se encontró el curso.";
  }
};

renderCourseInfo(findCourse);
