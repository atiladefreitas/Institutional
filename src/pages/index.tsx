import Image from "next/image";
import {
	Typography,
	Card,
	CardBody,
	CardHeader,
	IconButton,
} from "@material-tailwind/react";
import { SpotlightPreview } from "@/components/Spotlight";
import { TextGenerateEffectDemo } from "@/components/TextGenerator";
import { ThreeDCardDemo } from "@/components/3dCard";

import {
	GlobeAltIcon,
	DevicePhoneMobileIcon,
	PuzzlePieceIcon,
	PresentationChartLineIcon,
} from "@heroicons/react/24/solid";
import { MacbookScrollDemo } from "@/components/MacbookScroll";
import { HeroHighlightDemo } from "@/components/HeroHighlight";
import { LampDemo } from "@/components/ui/lamp";
import { FlipWordsDemo } from "@/components/FlipWords";
import { Linkedin, Mail } from "lucide-react";
import { IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";

const features = [
	{
		icon: <GlobeAltIcon className="h-6 w-6" strokeWidth={2} />,
		title: "Web Development",
		description:
			"Crafting responsive, user-friendly websites and web applications that engage and convert visitors.",
	},
	{
		icon: <DevicePhoneMobileIcon className="h-6 w-6" strokeWidth={2} />,
		title: "Mobile Application",
		description:
			"Building intuitive, feature-rich mobile apps for iOS and Android to extend your reach.",
	},
	{
		icon: <PuzzlePieceIcon className="h-6 w-6" strokeWidth={2} />,
		title: "Custom Software & Integrated Platforms",
		description:
			"Developing tailored solutions and unified systems to streamline operations and boost efficiency.",
	},
	{
		icon: <PresentationChartLineIcon className="h-6 w-6" strokeWidth={2} />,
		title: "High-Converting Landing Pages & Institutional",
		description:
			"Designing persuasive, goal-oriented pages that transform clicks into valuable leads and customers.",
	},
];

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
	return (
		<Card placeholder={""} className="grid" color="transparent" shadow={false}>
			<CardHeader
				placeholder={""}
				shadow={false}
				floated={false}
				color="transparent"
				className="rounded-lg text-white"
			>
				{icon}
			</CardHeader>
			<CardBody placeholder={""} className="px-4">
				<Typography
					variant="h5"
					placeholder={""}
					color="white"
					className="mb-2"
				>
					{title}
				</Typography>
				<Typography
					color="white"
					placeholder={""}
					className="font-normal lg:max-w-xs"
				>
					{children}
				</Typography>
			</CardBody>
		</Card>
	);
}

export default function Home() {
	return (
		<section className="bg-black/[0.96] w-screen h-screen">
			<SpotlightPreview />

			<div className="h-[50%] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<TextGenerateEffectDemo />
			</div>

			<div className="h-[50rem] w-full bg-black  bg-grid-small-white/[0.2] relative flex items-center justify-center">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

				<div className="w-full flex max-w-7xl justify-between">
					<div className="h-full relative">
						<div className="z-50">
							<ThreeDCardDemo />
						</div>

						<div className=" absolute bottom-0 mb-5 right-0 z-0">
							<Image src="/app_desc.png" width={250} height={200} alt="desc" />
						</div>
					</div>

					<div className="w-full p-16">
						<Typography
							placeholder={""}
							variant="h2"
							color="white"
							className="mb-12"
						>
							Comprehensive Digital Solutions
						</Typography>
						<div className="col-span-2 grid grid-cols-1 gap-8 sm:grid-cols-2">
							{features.map(({ icon, title, description }) => (
								<FeatureCard key={title} icon={icon} title={title}>
									{description}
								</FeatureCard>
							))}
						</div>
					</div>
				</div>
			</div>

			<MacbookScrollDemo />
			<HeroHighlightDemo />

			<LampDemo />

			<div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<div className="w-full max-w-6xl flex z-50 justify-between pr-">
					<FlipWordsDemo />

					<div className="flex items-center gap-2">
						<IconButton placeholder={""} variant="filled">
							<Linkedin />
						</IconButton>

						<IconButton placeholder={""} variant="filled">
							<Mail />
						</IconButton>

						<IconButton placeholder={""} variant="filled">
							<IconBrandWhatsapp />
						</IconButton>
					</div>
				</div>

				<div className="w-[50%] h-fit flex flex-col items-center px-6 py-12 m-12 bg-[#1b1b1b] z-50 rounded-2xl gap-4">
					<Image
						src="/logo-defenitive.png"
						width={70}
						height={100}
						alt="Logo"
					/>

					<Image src="/code-presence.png" width={250} height={100} alt="Logo" />
				</div>
			</div>
		</section>
	);
}
