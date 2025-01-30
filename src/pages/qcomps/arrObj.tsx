import { useState } from "react";
import { ItemListProps } from "../../types/arrObj";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

// Here the issue was that we used to do a shallow copy of the initialList, so to fix this
// i'm doing a deep copy of the initialList using the map function that will map over the initialList
const copyList = (list: typeof initialList) => list.map(item => ({ ...item }));

export default function BucketList() {
  const [myList, setMyList] = useState(copyList(initialList)); // Deep copy of the myList array of objects
  const [yourList, setYourList] = useState(copyList(initialList)); // Deep copy of the myList array of objects

  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    setMyList(prevList =>
      prevList.map(item =>
        item.id === artworkId ? { ...item, seen: nextSeen } : item
      )
    );
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    setYourList(prevList =>
      prevList.map(item =>
        item.id === artworkId ? { ...item, seen: nextSeen } : item
      )
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}