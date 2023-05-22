import { MouseEvent } from "react";

function ListGroup() {
  let fruits = ["Orange", "Banana", "Mango", "Pinapple"];
  //   fruits = [];

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //meke mehema html elements dekak return karanna be.
    // 1. ekko div walin cover karanna one
    // 2. nettan Fragment import karanna one
    // 3. nettan nikanma <> </> danna one. meken kyannet fragment use karanna kyalama tama

    // <>
    //   <h1>List</h1>
    //   <ul className="list-group">
    //     <li className="list-group-item">An item</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //     <li className="list-group-item">A fourth item</li>
    //     <li className="list-group-item">And a fifth one</li>
    //   </ul>
    // </>

    // <>
    //   <h1>List</h1>
    //   <ul className="list-group-item">
    //     {fruits.map((fruit) => (
    //       <li key={fruit}>{fruit}</li>
    //     ))}
    //   </ul>
    // </>

    <>
      <h1>List</h1>
      {fruits.length === 0 ? <p>No item found</p> : null}
      {fruits.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {fruits.map((fruit) => (
          <li className="list-group-item" key={fruit} onClick={handleClick}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
