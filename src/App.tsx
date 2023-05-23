import ListGroup from "../components/ListGroup";

function App() {
  let fruits = ["Orange", "Banana", "Mango", "Pinapple", "Wood Apple"];

  const handleSelectFruit = (fruit: string) => {
    console.log(fruit);
  };

  return (
    <div>
      <ListGroup
        fruits={fruits}
        heading="Fruits"
        onSelectFruit={handleSelectFruit}
      />
      {/* metana tawa list group ekak heduwot eke wenama state ekak tynne.
       ekama warge dekak kyala dekema ekama neme. list deke dekak select karanna puluwan */}
    </div>
  );
}

export default App;
