import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar title="Text Converter" aboutText="About"/>
      {/* <Navbar/> */}
      <div className="container my-3">
      <TextForm heading = "HEAD"/>
      </div>
    </>
  );
}

export default App;
