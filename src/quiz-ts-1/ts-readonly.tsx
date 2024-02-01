import React from 'react'

interface ReadonlyArrayProps<T> {
  items: ReadonlyArray<string>;
}



function ReadonlyArrayDisplay<T>({ items }: ReadonlyArrayProps<T>) {

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}


export default ReadonlyArrayDisplay;