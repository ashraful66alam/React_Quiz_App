import "../styles/App.css";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Layout>
          <HomePage></HomePage>
        </Layout>
      </div>
    </>
  );
}

export default App;
