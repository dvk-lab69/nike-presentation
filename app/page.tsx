import { HeroCombined } from "@/components/sections/hero-combined";
import { VisualDiagram } from "@/components/sections/visual-diagram";
import { ValueChainMap } from "@/components/sections/value-chain-map";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroCombined />
      <VisualDiagram />
      <ValueChainMap />
    </main>
  );
}
