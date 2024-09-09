"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
	return (
		<div className="h-screen md:h-fit overflow-hidden flex w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative md:hidden items-center justify-center -mb-44">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

			<div className="flex flex-col overflow-hidden ">
				<ContainerScroll
					titleComponent={
						<>
							<h1 className="text-4xl font-semibold text-black dark:text-white">
								From conpect <br />
								<span className="text-6xl md:text-[6rem] font-bold mt-1 leading-none">
									to Launch
								</span>
							</h1>
						</>
					}
				>
					<Image
						src={`/aulas.webp`}
						alt="hero"
						height={720}
						width={1400}
						className="mx-auto rounded-2xl object-cover h-full object-left-top"
						draggable={false}
					/>
				</ContainerScroll>
			</div>
		</div>
	);
}
