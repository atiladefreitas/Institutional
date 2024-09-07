import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface FeatureCardProps {
	title: string;
	children: React.ReactNode;
}

function FeatureCard({ title, children }: FeatureCardProps) {
	return (
		<Card color="transparent" shadow={false} placeholder={""}>
			<CardBody className="grid px-0" placeholder={""}>
				<Typography
					variant="h4"
					color="white"
					className="mb-2"
					placeholder={""}
				>
					{title}
				</Typography>
				<Typography className="font-normal !text-gray-400" placeholder={""}>
					{children}
				</Typography>
			</CardBody>
		</Card>
	);
}

const features = [
	{
		title: "Web Development",
		description:
			"Of “high-performing” level are led by a certified project manager",
	},
	{
		title: "Mobile Applications",
		description: "That meets quality standards required by our users",
	},
	{
		title: "Custom Software",
		description: "Actively engage team members that finishes on time",
	},
	{
		title: "Hight-Converting Lading Pages",
		description: "Team members that finishes on time every project",
	},
];

export function FeatureSection12() {
	return (
		<section className="lg:py-28 py-10 px-8 bg-black/[0.96]">
			<div className="container mx-auto grid place-items-center gap-y-12 grid-cols-1 lg:grid-cols-3">
				<div className="lg:col-span-1 col-span-full">
					<img
						src="https://www.material-tailwind.com/img/Iphone.png"
						className="w-full h-full object-cover object-center"
						alt="iphone-photo"
					/>
				</div>
				<div className="col-span-2 mx-auto max-w-xl">
					<Typography
						placeholder={""}
						variant="h2"
						color="white"
						className="mb-4 !text-2xl font-bold lg:!text-3xl"
					>
						Our Services{" "}
					</Typography>
					<Typography
						placeholder={""}
						variant="lead"
						className="mb-10 !text-gray-400"
					>
						Comprehensive Digital Solutions
					</Typography>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
						{features.map(({ title, description }) => (
							<FeatureCard key={title} title={title}>
								{description}
							</FeatureCard>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
export default FeatureSection12;
