import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
// import {About as Potato} from "./routes/About";

//라우터는 url을 가져다가 확인하고
//우리가 라우터에게 무엇을 명령했느냐에 따라
//라우터는 말할 거야. "좋아. 이 컴포넌트를 불러오자." 
function App(){
  {/* 1. make a Router */}
  return <HashRouter>
    {/* 2. screen into */}
    {/* exact=true 가 없으면 두 라우트가 동시 렌더링되어 화면이 겹쳐 보임 */}
    {/* exact means only rendering the path */}
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    {/* <Route path="/about" component={Potato} /> */}
  </HashRouter>;
}

export default App;