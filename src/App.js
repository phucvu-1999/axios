import SetUp from "./examples/4-global-instance";
import Title from "./components/Title";
import "./axios/global";

function App() {
  return (
    <main>
      <Title />
      <SetUp />
    </main>
  );
}

export default App;
