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
import { HeroScrollDemo } from "@/components/ContainerScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Coding Beauty",
	description:
		"codingbeautydev.com: Coding - the art, the science, and the passion.",
};

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

			<div className="h-fit md:h-[50rem] w-full bg-black  bg-grid-small-white/[0.2] relative flex items-center justify-center">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

				<div className="w-full flex max-w-7xl justify-between">
					<div className="h-full hidden relative md:flex">
						<div className="z-50">
							<ThreeDCardDemo />
						</div>

						<div className=" absolute bottom-0 mb-5 right-0 z-0">
							<Image src="/app_desc.webp" width={250} height={200} alt="desc" />
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

			<div className="h-[50%] w-full -mb-8 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative md:hidden flex flex-col items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<span className="text-center flex flex-col z-50 -mb-10">
					<Typography className="text-2xl font-medium -mb-2" placeholder={""}>
						From concept
					</Typography>
					<Typography className="text-6xl font-bold" placeholder={""}>
						to Launch
					</Typography>
				</span>

				<Image
					src="/aulas_tab.webp"
					width={500}
					height={500}
					alt="Aulas Tab"
					className="z-40"
				/>
			</div>

			<HeroHighlightDemo />

			<LampDemo />

			<div className="h-[40rem] px-4 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<div className="w-full max-w-6xl flex z-50 justify-between flex-col md:flex-row items-center gap-12">
					<FlipWordsDemo />

					<div className="flex items-center gap-2">
						<a
							aria-label="LinkedIn Button"
							href="https://www.linkedin.com/company/code-presence/about/"
							target="_blank"
						>
							<IconButton
								id="LinkedIn Button"
								title="LikedIn Button"
								placeholder={""}
								variant="filled"
							>
								<Linkedin />
							</IconButton>
						</a>

						<a
							aria-label="Mail Button"
							href="mailto:contact@codepresence.com?subject=I%20want%20to%20bring%20my%20ideia%20to%20light"
							target="_blank"
						>
							<IconButton
								id="Mail Button"
								title="Mail Button"
								placeholder={""}
								variant="filled"
							>
								<Mail />
							</IconButton>
						</a>
						<a
							aria-label="WhatsApp Button"
							href="https://wa.me/+5584991097445?text=I%20want%20to%20bring%20my%20ideia%20to%20light!"
							target="_blank"
						>
							<IconButton
								id="WhatsApp Button"
								title="WhatsApp Button"
								placeholder={""}
								variant="filled"
							>
								<IconBrandWhatsapp />
							</IconButton>
						</a>
					</div>
				</div>

				<div className="w-full md:max-w-6xl h-fit flex flex-col items-center px-6 py-12 m-12 bg-[#1b1b1b] z-50 rounded-2xl gap-4">
					<Image
						src="/logo-defenitive.webp"
						width={70}
						height={100}
						alt="Logo"
					/>

					<Image
						src="/code-presence.webp"
						width={250}
						height={100}
						alt="Logo"
					/>
				</div>
			</div>
		</section>
	);
}
