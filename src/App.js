import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';
import app from "./Firebase/firebase.init";

const auth = getAuth(app);
function App() {

  const handleToGetValue = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  }
  const handleOnChange = (e) =>{
    console.log(e.target.value);
  }

  const handlePassChange = e =>{
    console.log(e.target.value);
  }
  return (
    <div className="container mx-auto mt-10 bg-slate-200 rounded-lg pt-5 shadow-lg shadow-slate-700">
      <h1 className="text-3xl mx-5 text-blue-600 font-bold">Email & Password Authentication</h1>
      <form className="mt-5" onSubmit={handleToGetValue}>
        <input onChange={handleOnChange} className="w-auto mx-5 py-1 px-3" type="email" name="email" id="" placeholder="Email" />
        <br />
        <input onChange={handlePassChange} className="mt-5 mx-5 py-1 px-3" type="password" name="password" id="" placeholder="Password" />
        <br />
        <button className="mt-3 mx-5 p-2 mb-5 bg-blue-500 rounded-md text-white" type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
