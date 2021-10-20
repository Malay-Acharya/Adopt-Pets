import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { name: "A", animal: "B", breed: "C" }),
//     React.createElement(Pet, { name: "A", animal: "B", breed: "C" }),
//     React.createElement(Pet, { name: "A", animal: "BC", breed: "CD" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
