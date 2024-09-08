import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
	const words = ["innovate", "influence", "impact", "connect", "grow"];

	return (
		<div className="flex justify-center overflow-hidden items-center z-50">
			<div className="text-2xl md:text-4xl z-50 overflow-hidden md:text-left mx-auto font-bold text-gray-900 dark:text-neutral-400">
				Let&apos;s
				<FlipWords words={words} /> <br />
				with comprehensive solutions
			</div>
		</div>
	);
}
