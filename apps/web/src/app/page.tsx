import DeveloperMale from '@/../public/dev_male.png';
import Mock from '@/../public/881_1x_shots_so.png';
import Image from 'next/image';
import { ArrowRight, BookDashed, DockIcon } from 'lucide-react';
import { FaQ } from 'react-icons/fa6';
import { SiAskfm } from 'react-icons/si';
import { BiQuestionMark } from 'react-icons/bi';

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center font-sans bg-[#F8F8FF]">
			<main className="flex min-h-screen w-full flex-col mx-auto items-center justify-between py-32 px-20 sm:items-start">
				<section className="flex flex-row w-full min-h-full items-center justify-between">
					<div className="max-w-1/2 m-24 min-h-[600] flex flex-col justify-center">
						<h1 className="stack-sans-notch-regular text-6xl">
							Aprende programación correctamente
						</h1>
						<p className="mt-4 text-xl stack-sans-text-regular">
							Con clases de calidad y de manera divertida. Gratis.s
						</p>
						<div className="flex flex-row mt-6 gap-x-3">
							<a
								href="#"
								className="flex flex-row items-center gap-x-2 bg-purple-400 text-white shadow-sm py-2 px-3 rounded-full stack-sans-text-light text-sm hover:scale-90 transition"
							>
								FAQ
								<BiQuestionMark size={16} />
							</a>
							<a
								href="#"
								className="flex flex-row items-center gap-x-2 bg-blue-400 text-white shadow-sm py-2 px-3 rounded-full stack-sans-text-light text-sm hover:scale-90 transition"
							>
								Iniciar sesion
								<ArrowRight size={16} />
							</a>
						</div>
					</div>

					<div className="ml-auto">
						<Image
							className="object-contain pointer-events-none select-none"
							src={Mock.src}
							width={1500}
							height={2000}
							alt="Developer Male"
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
