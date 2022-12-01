import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import { Route,Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Navi></Navi>
    <Routes>
      <Route exact path="/"  element={<DashBoard></DashBoard>}>
      
        </Route>
      <Route exact path="/cart"  element={<CartDetail/>}/>
      

      
    </Routes>
    </div>
  );
}

export default App;
