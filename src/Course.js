import React from "react";
import Part from "./Part.js";

const Course = ({ course }) => {
  const Header = () => <h1>{course.name}</h1>;

  const Content = () => {
    return (
      <div>
        {course.parts.map((part, i) => <Part key={i} part={part}></Part>)}
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
    </div>
  );
};

export default Course;
