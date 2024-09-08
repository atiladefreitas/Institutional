import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
	const words = ["innovate", "influence", "impact", "connect", "grow"];

	return (
		<div className="flex justify-center items-center px-4 z-50">
			<div className="text-4xl mx-auto font-bold text-gray-900 dark:text-neutral-400">
				Let's
				<FlipWords words={words} /> <br />
				with comprehensive solutions
			</div>
		</div>
	);
}
