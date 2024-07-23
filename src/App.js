import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState("");
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  const sendUrl = async (e) => {
    e.preventDefault();
    setSent(true);

    try {
      await axios.post("http://localhost:4000/get_text", {
        url,
        name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {!sent ? (
        <>
          <h1>ReadToMe</h1>
          <p className="instructions">
            This web application will scrape any article or form of text and convert it
            into an audio file for you to listen to.
          </p>
          <p className="instructions">
            Paste the link of the site you would
            like to convert into an audio recording to get started.
          </p>
          <form onSubmit={sendUrl} className="form">
            <input
              type="text"
              className="text-input"
              placeholder="Name your audio file here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="text-input"
              placeholder="Paste the URL of the article here"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button type="submit">Create Audio</button>
          </form>
        </>
      ) : (
        <>
          <h1>Audio Created</h1>
          <p>The audio file has been saved to your files.</p>
        </>
      )}
    </div>
  );
}

export default App;
