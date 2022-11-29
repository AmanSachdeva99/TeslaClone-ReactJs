import Header from "./Component/Header";
import Section from "./Component/Section"


function App() {
  return (
    <div className="App">
      <Header/>
   <Section title={"Model S"} backgroundImage={"model-s.jpg"}/>
   <Section title={"Model Y"} backgroundImage={"model-y.jpg"}/>
   <Section title={"Model 3"} backgroundImage={"model-3.jpg"}/>
   <Section title={"Model X"} backgroundImage={"model-x.jpg"}/>
    </div>
  );
}

export default App;
