import React from "react";

const Interest = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-orange-600">
							Interest
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Here's What I Do In My Free Time</p>
					</div>
					<div>
						<p>
							I love watching movies, especially comedy. I love watching
							Friends. I also love watching medical series like Grey's Anatomy.{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Interest;
