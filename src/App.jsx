/* eslint ract-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorfulMsg } from "./components/ColorfulMsg";

const App = () => {
  const [num, setNum] = useState(0);
  const [flg, setFlg] = useState(false);

  const onClickCount = () => {
    setNum(num + 1);
  };

  const toggleFlg = () => {
    setFlg(!flg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        flg || setFlg(true);
      } else {
        flg && setFlg(false);
      }
    }
    console.log("useEffect");
    // eslint-disabel-next-line react-hooks/exhaustive: off
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello React!</h1>
      <ColorfulMsg color="blue">Welcome React!</ColorfulMsg>
      <ColorfulMsg color="pink">Welcome React Props!</ColorfulMsg>
      <button onClick={onClickCount}>カウント</button>
      <br />
      <button onClick={toggleFlg}>on/off</button>
      <p>{num}</p>
      {flg && <p>😆</p>}
    </>
  );
};

export default App;
