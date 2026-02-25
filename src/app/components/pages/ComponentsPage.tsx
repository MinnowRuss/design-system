import { useOutletContext } from "react-router";
import { ComponentLibrary } from "../ComponentLibrary";

export function ComponentsPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pt-12 sm:pt-16">
      <ComponentLibrary isDark={isDark} />
    </div>
  );
}
