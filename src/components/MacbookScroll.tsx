import React from "react";
import { MacbookScroll } from "./ui/mackbook-scroll";
import Link from "next/link";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

export function MacbookScrollDemo() {
	return (
		<div className="h-screen md:h-fit overflow-hidden hidden w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative md:flex items-center justify-center">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<MacbookScroll
				title={
					<span>
						From Concept <br />
						<b className="text-6xl">to Launch</b>
					</span>
				}
				src={`/aulas.png`}
				showGradient={false}
			/>

			<div>
				<div className="absolute bottom-0  mr-20 mb-20">
					<LinkPreview
						url="https://amentoriaenem.com.br/"
						className="font-bold"
					>
						<Image
							src="/am_app_desc.png"
							width={300}
							height={200}
							alt="desc"
							className="shadow-lg rounded-md"
							unoptimized
						/>
					</LinkPreview>
				</div>
			</div>
		</div>
	);
}
