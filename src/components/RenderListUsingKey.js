import React from "react";

export default function RenderListUsingKey() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const fruitList = fruits.map((fruit, index) => <h3 key={index}>{fruit}</h3>);
  const objects = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Xbox" },
    { id: 3, name: "Playstation" },
  ];
  const objectList = objects.map((object) => (
    <h3 key={object.id}>{object.name}</h3>
  ));
  return (
    <div>
      <div>{fruitList}</div>
      <br />
      <div>{objectList}</div>
    </div>
  );
}
