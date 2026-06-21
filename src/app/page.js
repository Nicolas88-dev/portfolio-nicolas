import SquaresBackground from "@/components/ui/SquaresBackground";
import HomeContent from "@/components/layout/HomeContent";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F2F3F5] lg:h-screen lg:overflow-hidden">
      <CustomCursor />
      <SquaresBackground />
      <HomeContent />
    </main>
  );
}