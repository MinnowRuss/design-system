import { useOutletContext } from "react-router";
import { gradientPresets } from "../color-data";
import { GradientShowcase } from "../GradientShowcase";

export function GradientsPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pt-12 sm:pt-16">
      <GradientShowcase gradients={gradientPresets} isDark={isDark} />
    </div>
  );
}
