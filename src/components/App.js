import React, { useEffect, useState } from 'react';
import Left from './Left';
import Right from './Right';
import Loading from './Loading'; // Assuming you have a Loading component

const App = () => {
  const [text, setText] = useState("");
  const [render, setRender] = useState(text);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Start loading
    setTimeout(() => {  // Simulate an asynchronous task
      setRender(text);
      setLoading(false); // End loading after setting the text
    }, 500); // Delay for demonstration purposes
  }, [text]);

  return (
    <div className='app' style={{ display: "grid", gridTemplateColumns: "1fr 1fr", margin: "10px 5px", padding: "20px", height: "90vh" }}>
      <Left text={text} setText={setText} />
      {loading ? <Loading /> : <Right text={render} />}
    </div>
  );
}

export default App;
