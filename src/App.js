import React from "react";
import "./tailwind.css";
import Social from "./components/Social";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {
	return (
		<div className="w-screen overflow-hidden font-Poppins">
			<Social />
			<Header />
			<HomePage />
			<About />
			<Services />
			<Work />
			<Contact />
		</div>
	); 
}

export default App;
