import React from "react";
import Profile from "../components/profile";
import { Scientist } from "../../types/gallery";
// decided to create a new array of objects to store the data for each scientist
const scientists: Scientist[] = [
  {
    name: "Maria Skłodowska-Curie",
    imageId: "https://i.imgur.com/szV5sdGs.jpg",
    profession: "physicist and chemist",
    awards: "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
    discovery: "polonium (element)",
  },
  {
    name: "Katsuko Saruhashi",
    imageId: "https://i.imgur.com/YfeOqp2s.jpg",
    profession: "geochemist",
    awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
    discovery: "a method for measuring carbon dioxide in seawater",
  },
];
// using map to loop through the array of scientists and render a Profile component for each one
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist, index) => (
        <Profile key={index} scientist={scientist} />
      ))}
    </div>
  );
}