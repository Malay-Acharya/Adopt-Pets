import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { name: "A", animal: "B", breed: "C" }),
//     React.createElement(Pet, { name: "A", animal: "B", breed: "C" }),
//     React.createElement(Pet, { name: "A", animal: "BC", breed: "CD" }),
//   ]);
// };


const App = () =>{
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="A" animal="B" breed="C"/>
      <Pet name="A" animal="B" breed="C"/>
      <Pet name="A" animal="BC" breed="CD"/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));
