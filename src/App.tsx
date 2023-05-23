// import ListGroup from "../components/ListGroup";

// function App() {
//   let fruits = ["Orange", "Banana", "Mango", "Pinapple", "Wood Apple"];

//   const handleSelectFruit = (fruit: string) => {
//     console.log(fruit);
//   };

//   return (
//     <div>
//       <ListGroup
//         fruits={fruits}
//         heading="Fruits"
//         onSelectFruit={handleSelectFruit}
//       />
//       {/* metana tawa list group ekak heduwot eke wenama state ekak tynne.
//        ekama warge dekak kyala dekema ekama neme. list deke dekak select karanna puluwan */}
//     </div>
//   );
// }

// import Alert from "../components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

// import Button from "../components/Button";

// function App() {
//   return (
//     <div>
//       <Button color="danger" onClick={() => console.log("Clicked")}>
//         my button
//       </Button>
//     </div>
//   );
// }

// import Button from "../components/Button";
// import Alert from "../components/Alert";
// import { useState } from "react";

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>
//           You can close this
//         </Alert>
//       )}
//       <Button color="danger" onClick={() => setAlertVisibility(true)}>
//         my button
//       </Button>

//     </div>
//   );
// }

import Like from "../components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

// for all
export default App;
