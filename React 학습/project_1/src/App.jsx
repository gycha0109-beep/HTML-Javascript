import './App.css'
import { useRef, useEffect, useState, use } from 'react';
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';

function App() {
  const didMountRef = useRef(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
    const handleChangeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
    console.log("컴포넌트 업데이트!");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("깜빡");
    }, 1000);
    return () => {
      console.log("클린업");
      clearInterval(intervalId);
    }
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
      <input value={text} onChange={handleChangeText} />
      </section>
      <section>
      <Viewer count={count}/>
      {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}
export default App;