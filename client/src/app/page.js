import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroBannner from "@/components/landingpage/HeroBannner";
import Service from "@/components/landingpage/Service";
import Whychoose from "@/components/landingpage/Whychoose";

export default function Home() {
	return (
		<main className="w-full relative">
			<Navbar />
			<HeroBannner />
			<Service />
			<Whychoose />
			<Footer />
		</main>
	);
}
