"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
	return (
		<CardContainer className="inter-var z-50">
			<CardBody className="relative group/card z-50 flex justify-center w-auto sm:w-[30rem] h-auto ">
				<CardItem
					translateZ="200"
					className="text-xl right-0 font-bold text-white absolute z-50"
				>
					<Image
						src="/component.png"
						width={250}
						height={200}
						alt="component"
					/>
				</CardItem>
				<CardItem translateZ="100" className=" z-10 mr-8 my-8">
					<Image
						src="/mocked_wellcome.png"
						width={250}
						height={100}
						alt="component"
					/>
				</CardItem>
				<CardItem
					translateZ="200"
					className="text-xl font-bold text-white absolute z-50 bottom-5 left-10"
				>
					<Image src="/info.png" width={200} height={100} alt="component" />
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}
