import About from "./components/About";
import Awards from "./components/Awards";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Interest from "./components/Interest";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import {Routes, Route} from "react-router-dom";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/experience' element={<Experience/>} />
				<Route path='/skills' element={<Skills/>} />
				<Route path='/interest' element={<Interest />} />
				<Route path='/awards' element={<Awards/>} />
			</Routes>
		</div>
	);
}

export default App;
