import { useOutletContext } from "react-router";
import { typographyColors } from "../color-data";
import { TypographyPalette } from "../TypographyPalette";
import { TypographyScale } from "../TypographyScale";

export function TypographyPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pt-12 sm:pt-16">
      {/* Typography Colors */}
      <TypographyPalette colors={typographyColors} isDark={isDark} />

      {/* Typography Scale */}
      <TypographyScale isDark={isDark} />
    </div>
  );
}
