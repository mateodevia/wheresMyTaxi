import React, { useState, useEffect } from "react";
import GoogleMapTrack from "./components/GoogleMapTrack/GoogleMapTrack";
import "./App.css";

function App() {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });

  const renderPos = () => (
    <div>
      <h2>{location.lat}</h2>
      <h2>{location.lon}</h2>
    </div>
  );

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    //abre el socket
    ws.onopen = () => {
      console.log("open my ws");
      ws.onmessage = msg => {
        console.log(msg);
        setLocation(JSON.parse(msg.data));
      };
    };

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("conductor");
    console.log(myParam);
    fetch("/location?conductor=" + myParam)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.err) {
          console.log(data);
        } else {
          setLocation(data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <GoogleMapTrack lat={location.lat} lon={location.lon} />
    </div>
  );
}

export default App;
