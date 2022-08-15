import './App.css';


let name = "Eman"

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, 
          perferendis. Et dolore provident unde voluptatem repudiandae, vitae 
          libero autem molestiae, numquam doloremque, commodi dicta? Labore veniam 
          ratione debitis tempore beatae?
        </p>
      </div>
    </>
  );
}

export default App;
