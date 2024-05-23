import "../styles/App.css";
import Layout from "./Layout";
// import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
// import HomePage from "./Pages/HomePage";
// import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <div className="App">
        <Layout>
          {/* <HomePage /> */}
          {/* <Signup /> */}
          {/* <Login /> */}
          <Quiz></Quiz>
        </Layout>
      </div>
    </>
  );
}

export default App;
