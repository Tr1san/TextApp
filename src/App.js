import './App.css';
import Form from "./components/Form/Form";
import {Route, Routes} from "react-router-dom";
import ProfessionListContainer from "./components/ProfessionList/ProfessionListContainer";
import Header from "./components/Header/Header";
import ProfessionEditContainer from "./components/ProfessionEdit/ProfessionEditContainer";

function App() {
  return (
    <div className="App">
        <div >
            <Header/>
            <div className="Container">
                <Routes >
                    <Route index element ={<ProfessionListContainer/>}/>
                    <Route path={'profession/:id'} element={<ProfessionEditContainer/>}/>
                </Routes>
            </div>

        </div>
    </div>
  );
}

export default App;
