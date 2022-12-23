import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <form className="formbg">
        <div className="row">
          <input placeholder="Room Number..." />
          <button>Join Room</button>
        </div>
        <div className="row">
          <input placeholder="Message..." />
          <button>Send Message</button>
        </div>
        <h2>Message:</h2>
      </form>
    </div>
  );
}

export default App;
