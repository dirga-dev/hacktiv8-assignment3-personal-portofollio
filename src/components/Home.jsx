import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-orange-600 mb-2">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] mb-4">
					Dirga Adi Guna
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I'm a Front-End Developer
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					I’m an aspiring front-end developer specializing in building website.
					Currently, I’m focused on building responsive website using ReactJS.
				</p>
				<div></div>
			</div>
		</div>
	);
};

export default Home;
