import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Conditional Rendering Example</h1>
      <button onClick={handleToggle}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}>
          <h2>Hello, I am a toggleable component!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
