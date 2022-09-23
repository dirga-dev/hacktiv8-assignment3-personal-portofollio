import React from "react";

const Awards = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-orange-600">
							Awards
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Here's What I Have Accomplished</p>
					</div>
					<div>
						<p>I won 5th place of Essay Writting Competition on CCED 2021. </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Awards;
