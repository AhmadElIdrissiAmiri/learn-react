import React from "react";
import { GalleryProps } from "../../types/gallery";
// the profile component is a functional component that takes in a scientist object and a size prop. 
// It then dynamically renders a section with the scientist's name, image, and some information about them.
export default function Profile({ scientist, size = 70 }: GalleryProps) {
  const { name, imageId, profession, awards, discovery } = scientist;

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageId}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}