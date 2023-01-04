import Task from "./Components/Task";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Task />
      </Provider>
    </div>
  );
}

export default App;
