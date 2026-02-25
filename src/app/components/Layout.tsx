import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Sun,
  Moon,
  Fish,
  Palette,
  Layers,
  Type,
  Blend,
  Component,
  Ruler,
  Menu,
  X,
  ChevronRight,
  FileJson,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Overview", icon: Layers, description: "Introduction & philosophy", color: "red" },
  { path: "/spectrum", label: "Spectrum", icon: Palette, description: "7 color families, 70 shades", color: "orange" },
  { path: "/typography", label: "Typography", icon: Type, description: "Palette & type scale", color: "yellow" },
  { path: "/gradients", label: "Gradients", icon: Blend, description: "8 gradient presets", color: "green" },
  { path: "/components", label: "Components", icon: Component, description: "UI primitive library", color: "blue" },
  { path: "/spacing", label: "Spacing", icon: Ruler, description: "Spacing & sizing tokens", color: "indigo" },
  { path: "/tokens", label: "Tokens", icon: FileJson, description: "Export for Figma", color: "violet" },
];

export function Layout() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex transition-colors duration-500"
      style={{ backgroundColor: "var(--page-bg)", fontFamily: "Inter, sans-serif" }}
    >
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        style={{
          width: "var(--size-sidebar)",
          backgroundColor: "var(--surface-bg)",
          borderRight: "1px solid var(--surface-border)",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center"
          style={{ 
            borderBottom: "1px solid var(--surface-border)",
            padding: `var(--space-5) var(--space-5)`,
            gap: "var(--space-3)",
          }}
        >
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: "var(--size-touch-md)",
              height: "var(--size-touch-md)",
              borderRadius: "var(--radius-lg)",
              background: "var(--gradient-aurora)",
            }}
          >
            <div style={{ width: "var(--size-icon-md)", height: "var(--size-icon-md)" }}>
              <Fish className="w-full h-full text-white" />
            </div>
          </div>
          <div>
            <span
              className="tracking-tight"
              style={{ 
                fontSize: "var(--type-h6-size)",
                fontWeight: "var(--type-h6-weight)",
                color: "var(--text-heading-primary)"
              }}
            >
              Anchovy
            </span>
            <span
              className="ml-1.5 tracking-widest uppercase"
              style={{
                fontSize: "var(--type-overline-size)",
                fontWeight: "var(--type-overline-weight)",
                fontFamily: "var(--font-family-mono)",
                color: "var(--text-subtle)",
              }}
            >
              DS
            </span>
          </div>
          {/* Mobile close button */}
          <button
            className="ml-auto lg:hidden p-1 rounded-lg transition-colors"
            onClick={() => setSidebarOpen(false)}
            style={{
              color: "var(--text-secondary)",
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav items */}
        <nav
          className="flex-1 overflow-y-auto"
          style={{
            padding: `var(--space-4) var(--space-3)`,
          }}
        >
          <p
            className="tracking-[0.15em] uppercase"
            style={{
              fontSize: "var(--type-overline-size)",
              fontWeight: "var(--type-overline-weight)",
              fontFamily: "var(--font-family-mono)",
              color: "var(--text-subtle)",
              paddingLeft: "var(--space-3)",
              marginBottom: "var(--space-3)",
            }}
          >
            Sections
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isHovered = hoveredPath === item.path;
            const Icon = item.icon;
            // Get color from CSS custom properties
            const colorVar = `var(--${item.color}-500)`;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className="w-full flex items-center text-left transition-all duration-200 group"
                style={{
                  padding: `var(--space-2-5) var(--space-3)`,
                  gap: "var(--space-3)",
                  borderRadius: "var(--radius-xl)",
                  backgroundColor: isActive
                    ? `color-mix(in srgb, ${colorVar} ${isDark ? '10%' : '6%'}, transparent)`
                    : isHovered
                      ? `color-mix(in srgb, ${colorVar} ${isDark ? '6%' : '4%'}, transparent)`
                      : "transparent",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: isActive
                    ? `color-mix(in srgb, ${colorVar} ${isDark ? '15%' : '10%'}, transparent)`
                    : isHovered
                      ? `color-mix(in srgb, ${colorVar} ${isDark ? '8%' : '6%'}, transparent)`
                      : "transparent",
                  transform: isHovered && !isActive ? "translateX(2px)" : "none",
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{
                    width: "var(--size-touch-sm)",
                    height: "var(--size-touch-sm)",
                    borderRadius: "var(--radius-lg)",
                    background: isActive
                      ? colorVar
                      : isHovered
                        ? `color-mix(in srgb, ${colorVar} ${isDark ? '20%' : '12%'}, transparent)`
                        : "var(--interactive-hover-bg)",
                  }}
                >
                  <div style={{ width: "var(--size-icon-md)", height: "var(--size-icon-md)" }}>
                    <Icon
                      className="w-full h-full"
                      style={{
                        color: isActive
                          ? "#FFFFFF"
                          : isHovered
                            ? colorVar
                            : "var(--text-secondary)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    style={{
                      fontSize: "var(--type-body-sm-size)",
                      fontWeight: "var(--type-body-sm-weight)",
                      color: isActive
                        ? "var(--text-heading-primary)"
                        : isHovered
                          ? "var(--text-heading-secondary)"
                          : "var(--text-secondary)",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="truncate"
                    style={{
                      fontSize: "var(--type-caption-size)",
                      fontWeight: "var(--type-caption-weight)",
                      color: isActive || isHovered
                        ? "var(--text-muted)"
                        : "var(--text-subtle)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
                <ChevronRight
                  className="w-3.5 h-3.5 shrink-0 transition-all duration-200"
                  style={{
                    color: isActive || isHovered
                      ? colorVar
                      : "transparent",
                    opacity: isActive ? 1 : isHovered ? 0.6 : 0,
                  }}
                />
              </button>
            );
          })}
          </div>
        </nav>

        {/* Bottom section */}
        <div
          style={{ 
            borderTop: "1px solid var(--surface-border)",
            padding: `var(--space-4) var(--space-4)`,
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-full flex items-center transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--interactive-hover-bg)",
              padding: `var(--space-2-5) var(--space-3)`,
              gap: "var(--space-3)",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <div style={{ width: "var(--size-icon-md)", height: "var(--size-icon-md)" }} className="shrink-0">
              {isDark ? (
                <Sun className="w-full h-full" style={{ color: "var(--yellow-400)" }} />
              ) : (
                <Moon className="w-full h-full" style={{ color: "var(--indigo-500)" }} />
              )}
            </div>
            <span
              className="tracking-wider"
              style={{
                fontSize: "var(--type-overline-size)",
                fontWeight: "var(--type-overline-weight)",
                fontFamily: "var(--font-family-mono)",
                color: "var(--text-secondary)",
              }}
            >
              {isDark ? "Switch to Light" : "Switch to Dark"}
            </span>
          </button>

          {/* Version */}
          <div 
            className="flex items-center justify-between"
            style={{ paddingLeft: "var(--space-3)", paddingRight: "var(--space-3)" }}
          >
            <span
              className="tracking-widest uppercase"
              style={{
                fontSize: "var(--type-overline-size)",
                fontWeight: "var(--type-overline-weight)",
                fontFamily: "var(--font-family-mono)",
                color: "var(--text-subtle)",
              }}
            >
              v2.0
            </span>
            <span
              style={{
                fontSize: "var(--type-overline-size)",
                fontFamily: "var(--font-family-mono)",
                color: "var(--text-subtle)",
              }}
            >
              WCAG AA
            </span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div
        className="flex-1 min-h-screen flex flex-col"
        style={{
          marginLeft: "0",
        }}
        // Use Tailwind responsive class for larger screens
      >
        <style>{`
          @media (min-width: 1024px) {
            .main-offset {
              margin-left: var(--size-sidebar);
            }
          }
        `}</style>
        <div className="main-offset flex-1 min-h-screen flex flex-col">
        {/* Mobile top bar */}
        <div
          className="lg:hidden sticky top-0 z-30 flex items-center backdrop-blur-xl"
          style={{
            backgroundColor: isDark ? "color-mix(in srgb, var(--page-bg) 85%, transparent)" : "color-mix(in srgb, var(--page-bg) 85%, transparent)",
            borderBottom: "1px solid var(--surface-border)",
            padding: `var(--space-3) var(--space-4)`,
            gap: "var(--space-3)",
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="transition-colors"
            style={{
              backgroundColor: "var(--interactive-active-bg)",
              color: "var(--text-secondary)",
              padding: "var(--space-1-5)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <div style={{ width: "var(--size-icon-lg)", height: "var(--size-icon-lg)" }}>
              <Menu className="w-full h-full" />
            </div>
          </button>
          <div className="flex items-center" style={{ gap: "var(--space-2)" }}>
            <div
              className="flex items-center justify-center"
              style={{
                width: "var(--size-icon-xl)",
                height: "var(--size-icon-xl)",
                borderRadius: "var(--radius-md)",
                background: "var(--gradient-aurora)",
              }}
            >
              <div style={{ width: "var(--size-icon-xs)", height: "var(--size-icon-xs)" }}>
                <Fish className="w-full h-full text-white" />
              </div>
            </div>
            <span
              className="tracking-tight"
              style={{ 
                fontSize: "var(--type-body-sm-size)",
                color: "var(--text-heading-primary)" 
              }}
            >
              Anchovy
            </span>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-auto transition-colors"
            style={{
              backgroundColor: "var(--interactive-active-bg)",
              padding: "var(--space-1-5)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <div style={{ width: "var(--size-icon-md)", height: "var(--size-icon-md)" }}>
              {isDark ? (
                <Sun className="w-full h-full" style={{ color: "var(--yellow-400)" }} />
              ) : (
                <Moon className="w-full h-full" style={{ color: "var(--indigo-500)" }} />
              )}
            </div>
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pb-16">
            <Outlet context={{ isDark }} />
          </div>

          {/* Footer */}
          <footer
            className="text-center"
            style={{
              borderTop: "1px solid var(--surface-border)",
              paddingTop: "var(--space-8)",
              paddingBottom: "var(--space-8)",
            }}
          >
            <div 
              className="flex items-center justify-center"
              style={{
                gap: "var(--space-2)",
                marginBottom: "var(--space-2)",
              }}
            >
              <div
                className="rounded flex items-center justify-center"
                style={{
                  width: "var(--size-icon-lg)",
                  height: "var(--size-icon-lg)",
                  background: "var(--gradient-aurora)",
                }}
              >
                <div style={{ width: "var(--size-icon-sm)", height: "var(--size-icon-sm)" }}>
                  <Fish className="w-full h-full text-white" />
                </div>
              </div>
              <span
                style={{
                  fontSize: "var(--type-body-sm-size)",
                  color: "var(--text-heading-primary)",
                }}
              >
                Anchovy Design System
              </span>
            </div>
            <p
              style={{
                fontSize: "var(--type-caption-size)",
                fontFamily: "var(--font-family-mono)",
                color: "var(--text-subtle)",
                marginBottom: "var(--space-0-5)",
              }}
            >
              Color System v2.0 — Last updated February 2026
            </p>
            <p
              style={{
                fontSize: "var(--type-caption-size)",
                color: "var(--text-subtle)",
              }}
            >
              All colors are WCAG 2.1 AA compliant when used according to guidelines
            </p>
          </footer>
        </main>
        </div>
      </div>
    </div>
  );
}