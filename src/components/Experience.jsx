import React from "react";

const Experience = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-orange-600">
							Experience
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Here's some of my experience in front-end development</p>
					</div>
					<div>
						<p>
							I had made online simple calculator with javascript and make some
							simple website using ReactJS. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Vitae aliquid mollitia velit
							adipisci, dolores tempora amet ut rem deleniti? Sequi ab dolores
							ex. Iusto corporis delectus maxime ipsa corrupti mollitia?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
