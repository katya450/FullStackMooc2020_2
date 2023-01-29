import React from "react";
import Part from "./Part.js";

const Course = ({ course }) => {

  const Header = () => {
    return <h2>{course.name}</h2>; //ASK THIS WTF
  };

  const Content = () => {
    return (
      <div>
        {course.parts.map((part) => (
          <Part key={part.id} part={part}></Part>
        ))}
      </div>
    );
  };

  const Total = () => {
    return (
      <p>
        <b>
          Total of{" "}
          {course.parts.reduce((acc, { exercises }) => acc + exercises, 0)}{" "}
          exercises
        </b>
      </p>
    );
  };

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default Course;
