import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
