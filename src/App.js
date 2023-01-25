import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <FunctionalComponent name="Function"></FunctionalComponent>
      <ClassComponent name="Class"></ClassComponent>
    </div>
  );
}

export default App;
