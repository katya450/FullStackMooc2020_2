import React from "react";
import Part from "./Part.js";

const Course = ({ course }) => {
  const Header = () => <h1>{course.name}</h1>;

  const Content = () => {
    return (
      <div>
        {course.parts.map((part, i) => (
          <Part key={i} part={part}></Part>
        ))}
      </div>
    );
  };

  const Total = () => {
    return (
      <p>
        Total of {course.parts.reduce((acc, {exercises}) => acc + exercises, 0)} exercises
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};

export default Course;
