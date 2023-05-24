// import ListGroup from "./components/ListGroup";

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

// import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

// import Button from "./components/Button";

// function App() {
//   return (
//     <div>
//       <Button color="danger" onClick={() => console.log("Clicked")}>
//         my button
//       </Button>
//     </div>
//   );
// }

// import Button from "./components/Button";
// import Alert from "./components/Alert";
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

// import Like from "./components/Like";

// function App() {
//   return (
//     <div>
//       <Like onClick={() => console.log("Clicked")} />
//     </div>
//   );
// }

// import { useState } from "react";
// import ExpandedText from "./components/ExpandedText";

// function App() {
//   return (
//     <ExpandedText maxChar={50}>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quis sint
//       quam distinctio error cupiditate voluptatibus exercitationem saepe dolor!
//       Illum est velit porro laborum molestias. Tempora itaque aspernatur harum
//       unde numquam quod repellendus neque facere quis, cupiditate, molestias
//       exercitationem sit est nobis laudantium! Soluta, quam doloribus!
//       Perferendis, tempore vitae possimus nobis dolorum, consequatur omnis
//       numquam repellendus consectetur asperiores corporis. Dolorem inventore
//       nostrum tempore minima! Similique dicta quisquam maxime praesentium
//       consequuntur eveniet obcaecati sequi fuga architecto impedit! Rem quo
//       porro cum! Tempora, cupiditate repellat? Eius, in laboriosam impedit alias
//       quae, sed iusto sequi ad nihil eum reiciendis veniam voluptates eligendi
//       quo.
//     </ExpandedText>
//   );
// }

// import Form from "./components/Form";

// function App() {
//   return (
//     <div>
//       <Form></Form>
//     </div>
//   );
// }

// import Form2 from "./components/Form2";

// function App() {
//   return (
//     <div>
//       <Form2></Form2>
//     </div>
//   );
// }

import Form3 from "./components/Form3";

function App() {
  return (
    <div>
      <Form3></Form3>
    </div>
  );
}

// for all
export default App;
