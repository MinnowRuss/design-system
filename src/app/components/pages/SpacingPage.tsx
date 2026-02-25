import { useOutletContext } from "react-router";
import { SpacingSizing } from "../SpacingSizing";

export function SpacingPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pt-12 sm:pt-16">
      <SpacingSizing isDark={isDark} />
    </div>
  );
}
