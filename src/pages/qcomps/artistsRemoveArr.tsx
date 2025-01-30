import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );
// using filter to remove an item from the array  instead of splice 
// and setting back the artist array again using setArtists to update the state
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(artists.filter(a => a.id !== artist.id))
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
