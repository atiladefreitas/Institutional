"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `At Code Presence, we're more than just developers. We're your partners in digital transformation. Our boutique approach means personalized attention, quality craftsmanship, and solutions tailored to your unique business needs.
`;

export function TextGenerateEffectDemo() {
	return <TextGenerateEffect words={words} />;
}
