import "../styles/App.css";
import Layout from "./Layout";
import Result from "./Pages/Result";
// import Login from "./Pages/Login";
// import Quiz from "./Pages/Quiz";
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
          {/* <Quiz></Quiz> */}
          <Result></Result>
        </Layout>
      </div>
    </>
  );
}

export default App;
