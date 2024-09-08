import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextHoverEffectDemo } from "./HoverEffect";

export function SpotlightPreview() {
	return (
		<div className="h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
			<Spotlight className="-top-5 left-0 md:left-60 md:-top-20" fill="white" />
			<div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
				<h1 className="text-4xl md:text-7xl pb-4 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-gray-400 bg-opacity-50">
					Illuminate <br /> your ideas into reality
				</h1>
				<p className="mt-4 font-normal text-xl text-gray-300 max-w-xl text-center mx-auto">
					Code Presence is an software boutique that transforms your ideas into
					reality. We blend programming, marketing, and branding to craft
					high-quality web and mobile solutions.
				</p>
			</div>
		</div>
	);
}
