// import { MouseEvent } from "react";

import { useState } from "react";

// function ListGroup() {
//   let fruits = ["Orange", "Banana", "Mango", "Pinapple"];
//   //   fruits = [];

//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   //event handler
//   // const handleClick = (event: MouseEvent) => console.log(event);

//   return (
//     //meke mehema html elements dekak return karanna be.
//     // 1. ekko div walin cover karanna one
//     // 2. nettan Fragment import karanna one
//     // 3. nettan nikanma <> </> danna one. meken kyannet fragment use karanna kyalama tama

//     // <>
//     //   <h1>List</h1>
//     //   <ul className="list-group">
//     //     <li className="list-group-item">An item</li>
//     //     <li className="list-group-item">A second item</li>
//     //     <li className="list-group-item">A third item</li>
//     //     <li className="list-group-item">A fourth item</li>
//     //     <li className="list-group-item">And a fifth one</li>
//     //   </ul>
//     // </>

//     // <>
//     //   <h1>List</h1>
//     //   <ul className="list-group-item">
//     //     {fruits.map((fruit) => (
//     //       <li key={fruit}>{fruit}</li>
//     //     ))}
//     //   </ul>
//     // </>

//     // <>
//     //   <h1>List</h1>
//     //   {fruits.length === 0 ? <p>No item found</p> : null}
//     //   {fruits.length === 0 && <p>No item found</p>}
//     //   <ul className="list-group">
//     //     {fruits.map((fruit, index) => (
//     //       <li
//     //         className={
//     //           index === selectedIndex
//     //             ? "list-group-item active"
//     //             : "list-group-item"
//     //         }
//     //         key={fruit}
//     //         onClick={handleClick}
//     //       >
//     //         {fruit}
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </>

//     // <>
//     //   <h1>List</h1>
//     //   {fruits.length === 0 ? <p>No item found</p> : null}
//     //   {fruits.length === 0 && <p>No item found</p>}
//     //   <ul className="list-group">
//     //     {fruits.map((fruit, index) => (
//     //       <li
//     //         className={
//     //           index === selectedIndex
//     //             ? "list-group-item active"
//     //             : "list-group-item"
//     //         }
//     //         key={fruit}
//     //         onClick={() => {
//     //           setSelectedIndex(index);
//     //         }}
//     //       >
//     //         {fruit}
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </>

//     // Props
//     <>
//       <h1>List</h1>
//       {fruits.length === 0 ? <p>No item found</p> : null}
//       {fruits.length === 0 && <p>No item found</p>}
//       <ul className="list-group">
//         {fruits.map((fruit, index) => (
//           <li
//             className={
//               index === selectedIndex
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             key={fruit}
//             onClick={() => {
//               setSelectedIndex(index);
//             }}
//           >
//             {fruit}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ----------- Props ------------

interface Props {
  fruits: string[];
  heading: string;
}

function ListGroup({ fruits, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {fruits.length === 0 ? <p>No item found</p> : null}
      {fruits.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {fruits.map((fruit, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={fruit}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
