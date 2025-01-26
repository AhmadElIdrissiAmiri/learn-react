export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId: string) {
  return "https://i.imgur.com/" + imageId + "s.jpg"
}
export default function List() {
  // using map to loop through the array of people and render a list item for each one
  // To get rid of the error, I'm using the person.id as the key for each list item
  // using the getImageUrl function to get the image url for each person
  const listItems = people.map((person) => (
    <li key={person.id}>
     
      <img
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={70}
        height={70}
      />
    </li>
  ));
  
  return <ul>{listItems}</ul>;
}