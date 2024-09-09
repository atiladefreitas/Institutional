"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-lg px-4 md:text-xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
			>
				We turn concepts into reality through a proven process: understanding
				your vision, strategic planning, agile development, rigorous quality
				assurance, timely delivery, and ongoing support. <br />
				<br />
				<Highlight className="text-black dark:text-white">
					Your success is our priority from start to finish.
				</Highlight>
			</motion.h1>
		</HeroHighlight>
	);
}
