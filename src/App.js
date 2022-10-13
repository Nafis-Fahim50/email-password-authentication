import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';
import app from "./Firebase/firebase.init";

const auth = getAuth(app);
function App() {
  return (
    <div className="App">
      <form>
        <input type="email" name="" id="" placeholder="Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
      </form>
    </div>
  );
}

export default App;
