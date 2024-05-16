import "../styles/App.css";
import Layout from "./Layout";
// import HomePage from "./Pages/HomePage";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <div className="App">
        <Layout>
          {/* <HomePage /> */}
          <Signup />
        </Layout>
      </div>
    </>
  );
}

export default App;
