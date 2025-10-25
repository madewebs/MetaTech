"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMicrochip, FaCogs, FaPencilRuler, FaIndustry, FaBoxes } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
	{
		icon: FaMicrochip,
		title: "PLC Expertise",
		description:
			"Comprehensive PLC programming and integration services for major automation platforms with extensive experience in industry standards.",
		brands: [
			{
				name: "Rockwell/Allen Bradley",
				description:
					"Expert in PLC, HMI, Drives, Servo & Safety. Specialized in DCP, APA/FNA, GM standards.",
				series: ["Micro Logix", "Compact Logix", "Control Logix", "Guard Logix"],
				protocols: ["Ethernet", "DeviceNet", "RS 232"],
				software: ["RS Logix 500/5000", "Studio 5000", "Factory Talk", "RSNetWorx"],
			},
			{
				name: "Siemens",
				description: "6+ years experience in hardware and software applications.",
				protocols: ["Profibus", "Profinet"],
				software: ["Simatic Manager", "TIA Portal", "WinCC"],
			},
			{
				name: "Mitsubishi",
				description: "Experienced with Suzuki, Honda & major Japanese manufacturers.",
				series: ["MELSEC-Q", "MELSEC-F"],
				protocols: ["DeviceNet", "CC Link", "RS 232/485"],
				software: ["GX Developer", "GX Works", "GT Designer"],
			},
		],
	},
	{
		icon: FaCogs,
		title: "Drive Expertise",
		description:
			"Expert solutions in variable frequency drives, servo systems, and motor control for torque, velocity, and position control applications.",
		features: [
			"Allen Bradley: PowerFlex Series (4, 4M, 40, 400, 523, 525, 527, 70, 700, 753, 755), Kinetix Servo",
			"SEW Eurodrive: Movimot, Movifit, Movitrac, Movidrive",
			"Siemens: SINAMICS Series (G120, G120C, G130/150), SINAMICS Servo (S120, S210, V90)",
			"Mitsubishi: FR-A Series, FR-A800, FR-F, FR-D, MELSERVO",
		],
	},
	{
		icon: FaPencilRuler,
		title: "Designing",
		description:
			"Professional electrical and automation design services tailored to meet your specific industrial requirements using industry-standard software.",
		features: [
			"Control Panel Designing",
			"EPLAN Design Solutions",
			"AutoCAD Documentation",
			"System Architecture Planning",
		],
		software: ["EPLAN", "AUTOCAD"],
	},
	{
		icon: FaBoxes,
		title: "Material Supply",
		description:
			"Comprehensive supply of industrial automation components from leading manufacturers to meet all your automation needs.",
		features: [
			"PLC & Drive Components",
			"IO Modules",
			"Light Curtains",
			"Vision Systems",
			"RFID Systems",
		],
	},
	{
		icon: FaIndustry,
		title: "Manufacturing",
		description:
			"End-to-end manufacturing solutions for control panels and industrial automation systems with expert installation and commissioning services.",
		features: [
			"Control Panel Manufacturing",
			"Installation and Commissioning of Robotics System",
			"Quality Assurance & Testing",
			"On-site Support",
		],
	},
];

export default function Services() {
	const sectionRef = useRef(null);
	const headerRef = useRef(null);
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
	const ctaRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(
			() => {
				// Header animation
				gsap.from(headerRef.current, {
					opacity: 0,
					y: 50,
					duration: 1,
					scrollTrigger: {
						trigger: headerRef.current,
						start: "top 80%",
						once: true,
					},
				});

				// Cards animation
				cardsRef.current.forEach((card, index) => {
					if (card) {
						gsap.from(card, {
							opacity: 0,
							y: 100,
							duration: 0.8,
							delay: index * 0.1,
							scrollTrigger: {
								trigger: card,
								start: "top 85%",
								once: true,
							},
						});

						// Card hover animation
						card.addEventListener("mouseenter", () => {
							gsap.to(card, {
								y: -5,
								boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)",
								duration: 0.3,
								ease: "power2.out",
							});

							const icon = card.querySelector(".service-icon");
							if (icon) {
								gsap.to(icon, {
									scale: 1.05,
									rotation: 3,
									duration: 0.3,
									ease: "back.out(1.7)",
								});
							}
						});

						card.addEventListener("mouseleave", () => {
							gsap.to(card, {
								y: 0,
								boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
								duration: 0.3,
								ease: "power2.out",
							});

							const icon = card.querySelector(".service-icon");
							if (icon) {
								gsap.to(icon, {
									scale: 1,
									rotation: 0,
									duration: 0.3,
									ease: "back.out(1.7)",
								});
							}
						});
					}
				});

				// CTA animation
				gsap.from(ctaRef.current, {
					opacity: 0,
					y: 50,
					duration: 1,
					scrollTrigger: {
						trigger: ctaRef.current,
						start: "top 80%",
						once: true,
					},
				});
			},
			sectionRef
		);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="w-full py-16 md:py-24 bg-white px-4 md:px-16"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div ref={headerRef} className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
						Our Services
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Comprehensive automation solutions designed to streamline your
						operations and enhance productivity
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={service.title}
							ref={(el) => {
								cardsRef.current[index] = el;
							}}
							className="bg-gray-50 rounded-sm p-8 cursor-pointer border border-gray-200"
						>
							{/* Icon */}
							<div className="mb-6">
								<div className="service-icon w-16 h-16 bg-[#011945] rounded-sm flex items-center justify-center">
									<service.icon className="w-8 h-8 text-white" />
								</div>
							</div>

							{/* Content */}
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								{service.title}
							</h3>
							<p className="text-gray-600 mb-6 leading-relaxed">
								{service.description}
							</p>

							{/* Features for regular services */}
							{service.features && (
								<ul className="space-y-3 mb-6">
									{service.features.map((feature, idx) => (
										<li key={idx} className="flex items-start">
											<svg
												className="w-5 h-5 text-[#011945] mt-0.5 mr-3 flex-shrink-0"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="text-gray-700 text-sm">
												{feature}
											</span>
										</li>
									))}
								</ul>
							)}

							{/* Software Skills for Designing */}
							{service.software && (
								<div className="mb-6">
									<h4 className="text-sm font-semibold text-gray-900 mb-2">
										Design Software Skills:
									</h4>
									<div className="flex flex-wrap gap-2">
										{service.software.map((soft, idx) => (
											<span
												key={idx}
												className="px-3 py-1 bg-[#011945] text-white text-xs rounded-sm"
											>
												{soft}
											</span>
										))}
									</div>
								</div>
							)}

							{/* PLC Brands Details */}
							{service.brands && (
								<div className="space-y-4">
									{service.brands.map((brand, idx) => (
										<div
											key={idx}
											className="border-t border-gray-200 pt-3"
										>
											<h4 className="font-bold text-sm text-gray-900 mb-1">
												{brand.name}
											</h4>
											<p className="text-xs text-gray-600 mb-2">
												{brand.description}
											</p>

											{brand.series && (
												<div className="mb-1">
													<span className="text-xs text-gray-700">
														<strong>Series:</strong>{" "}
														{brand.series.join(", ")}
													</span>
												</div>
											)}

											<div className="mb-1">
												<span className="text-xs text-gray-700">
													<strong>Protocols:</strong>{" "}
													{brand.protocols.join(", ")}
												</span>
											</div>

											<div>
												<span className="text-xs text-gray-700">
													<strong>Software:</strong>{" "}
													{brand.software.join(", ")}
												</span>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>

				{/* CTA Section */}
				{/* <div
					ref={ctaRef}
					className="mt-16 text-center bg-[#011945] rounded-sm p-12"
				>
					<h3 className="text-3xl font-bold text-white mb-4">
						Ready to Transform Your Operations?
					</h3>
					<p className="text-gray-200 mb-8 max-w-2xl mx-auto">
						Let's discuss how our automation solutions can help streamline your
						business processes
					</p>
					<button className="bg-white text-[#011945] px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-all duration-300">
						Contact Us Today
					</button>
				</div> */}
			</div>
		</section>
	);
}