import { useOutletContext } from "react-router";
import { Sun, Sparkles, Layers, Palette } from "lucide-react";
import { colorFamilies } from "../color-data";

export function OverviewPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <>
      {/* Hero Section */}
      <section style={{ paddingTop: "var(--space-12)", paddingBottom: "var(--space-16)" }}>
        {/* Decorative gradient orb */}
        <div className="relative">
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "300px",
              borderRadius: "var(--radius-full)",
              opacity: 0.2,
              filter: "blur(120px)",
              background: "var(--gradient-aurora)",
            }}
          />
        </div>

        <div className="relative text-center max-w-3xl mx-auto">
          <div
            className="inline-flex items-center rounded-full"
            style={{
              gap: "var(--space-2)",
              padding: `var(--space-1-5) var(--space-4)`,
              marginBottom: "var(--space-8)",
              backgroundColor: "color-mix(in srgb, var(--indigo-500) 10%, transparent)",
              border: `1px solid color-mix(in srgb, var(--indigo-500) ${isDark ? '20%' : '12%'}, transparent)`,
            }}
          >
            <div style={{ width: "var(--size-icon-sm)", height: "var(--size-icon-sm)" }}>
              <Palette className="w-full h-full" style={{ color: "var(--indigo-500)" }} />
            </div>
            <span
              className="tracking-widest uppercase"
              style={{
                fontSize: "var(--type-caption-size)",
                fontFamily: "var(--font-family-mono)",
                color: "var(--indigo-500)",
              }}
            >
              Color System v2.0
            </span>
          </div>

          <h1
            style={{
              fontSize: "var(--type-display-lg-size)",
              fontWeight: "var(--type-display-lg-weight)",
              lineHeight: "var(--type-display-lg-line-height)",
              letterSpacing: "var(--type-display-lg-letter-spacing)",
              color: "var(--text-heading-primary)",
              marginBottom: "var(--space-6)",
            }}
          >Anchovy <span
              style={{
                background: "linear-gradient(135deg, var(--blue-500), var(--indigo-500), var(--violet-500))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >Design System</span></h1>

          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--type-body-lg-size)",
              lineHeight: "var(--type-body-lg-line-height)",
              color: "var(--text-secondary)",
              marginBottom: "var(--space-10)",
            }}
          >
            A systematic color language built on the ROY G BIV spectrum.
            Seven core families, seventy shades, infinite possibilities — all
            WCAG AA compliant and optimized for both light and dark interfaces.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center" style={{ gap: "var(--space-8)" }}>
            {[
              { value: "7", label: "Color Families" },
              { value: "70", label: "Total Shades" },
              { value: "AA", label: "WCAG Compliant" },
              { value: "2", label: "Display Modes" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  style={{
                    fontSize: "var(--type-h1-size)",
                    fontWeight: "var(--type-h1-weight)",
                    letterSpacing: "-0.02em",
                    display: "inline-block",
                    background: "linear-gradient(135deg, var(--blue-500), var(--violet-500))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "var(--type-overline-size)",
                    fontFamily: "var(--font-family-mono)",
                    color: "var(--text-muted)",
                    marginTop: "var(--space-1)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Philosophy */}
      <section style={{ marginBottom: "var(--space-16)" }}>
        <div
          style={{
            borderRadius: "var(--radius-2xl)",
            padding: "var(--space-10)",
            backgroundColor: "var(--surface-bg)",
            border: "1px solid var(--surface-border)",
          }}
        >
          <div className="grid sm:grid-cols-3" style={{ gap: "var(--space-8)" }}>
            <PhilosophyCard
              isDark={isDark}
              icon={<Layers />}
              title="Spectral Harmony"
              description="Built on the natural light spectrum (ROY G BIV), our colors flow seamlessly as gradients. Adjacent families blend beautifully, enabling dynamic visual storytelling."
              gradient="linear-gradient(135deg, var(--blue-500), var(--violet-500))"
            />
            <PhilosophyCard
              isDark={isDark}
              icon={<Sun />}
              title="Adaptive Design"
              description="Every shade is calibrated for both light and dark environments. Lighter tones serve as backgrounds in light mode and accents in dark mode, and vice versa."
              gradient="linear-gradient(135deg, var(--orange-500), var(--yellow-500))"
            />
            <PhilosophyCard
              isDark={isDark}
              icon={<Sparkles />}
              title="Universal Access"
              description="All primary and secondary text colors meet WCAG AA standards (4.5:1 minimum). UI elements maintain a 3:1 contrast ratio for maximum inclusivity."
              gradient="linear-gradient(135deg, var(--green-500), var(--blue-500))"
            />
          </div>
        </div>
      </section>

      {/* Quick Spectrum Bar */}
      <section style={{ marginBottom: "var(--space-16)" }}>
        <div className="flex items-center" style={{ gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
          <h3
            style={{
              fontSize: "var(--type-h5-size)",
              fontWeight: "var(--type-h5-weight)",
              color: "var(--text-heading-secondary)",
            }}
          >
            Quick Reference
          </h3>
          <span
            className="tracking-widest uppercase rounded-full"
            style={{
              fontSize: "var(--type-overline-size)",
              fontFamily: "var(--font-family-mono)",
              color: "var(--text-muted)",
              backgroundColor: "var(--interactive-active-bg)",
              padding: `var(--space-0-5) var(--space-2)`,
            }}
          >
            500 SHADES
          </span>
        </div>
        <div className="flex overflow-hidden shadow-lg" style={{ borderRadius: "var(--radius-2xl)", height: "var(--space-20)" }}>
          {colorFamilies.map((family) => {
            const primary = family.shades[5]; // 500
            return (
              <div
                key={family.name}
                className="flex-1 flex items-end justify-center transition-all duration-200 hover:flex-[2] group cursor-pointer"
                style={{ 
                  backgroundColor: primary.hex,
                  paddingBottom: "var(--space-3)",
                }}
              >
                <span
                  className="tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity text-white"
                  style={{
                    fontSize: "var(--type-overline-size)",
                    fontFamily: "var(--font-family-mono)",
                  }}
                >
                  {family.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Accessibility Note */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <div
          style={{
            borderRadius: "var(--radius-2xl)",
            padding: "var(--space-10)",
            backgroundColor: "color-mix(in srgb, var(--indigo-500) 4%, transparent)",
            border: `1px solid color-mix(in srgb, var(--indigo-500) ${isDark ? '12%' : '8%'}, transparent)`,
          }}
        >
          <div className="flex items-start" style={{ gap: "var(--space-4)" }}>
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: "var(--size-touch-md)",
                height: "var(--size-touch-md)",
                borderRadius: "var(--radius-xl)",
                background: "linear-gradient(135deg, var(--green-500), var(--blue-500))",
              }}
            >
              <span
                className="text-white"
                style={{
                  fontSize: "var(--type-body-sm-size)",
                  fontWeight: "var(--type-body-sm-weight)",
                }}
              >
                Aa
              </span>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "var(--type-h5-size)",
                  fontWeight: "var(--type-h5-weight)",
                  color: "var(--text-heading-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Accessibility Guidelines
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                  fontSize: "var(--type-body-sm-size)",
                  lineHeight: "var(--type-body-sm-line-height)",
                  color: "var(--text-secondary)",
                }}
              >
                <p>
                  <strong style={{ color: "var(--text-heading-secondary)" }}>Normal text (below 18px):</strong> Use shades 600–900 on light backgrounds, or shades 50–300 on dark backgrounds for a minimum 4.5:1 contrast ratio (WCAG AA).
                </p>
                <p>
                  <strong style={{ color: "var(--text-heading-secondary)" }}>Large text (18px+ or 14px bold):</strong> Shades 500 can be used on both backgrounds for a minimum 3:1 contrast ratio.
                </p>
                <p>
                  <strong style={{ color: "var(--text-heading-secondary)" }}>UI Components:</strong> Interactive elements like buttons and form controls require a minimum 3:1 contrast ratio against adjacent colors.
                </p>
                <p>
                  <strong style={{ color: "var(--text-heading-secondary)" }}>Gradients:</strong> When using gradient text, ensure the lowest-contrast point in the gradient still meets the applicable ratio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhilosophyCard({
  isDark,
  icon,
  title,
  description,
  gradient,
}: {
  isDark: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div>
      <div
        className="flex items-center justify-center text-white"
        style={{
          width: "var(--size-touch-md)",
          height: "var(--size-touch-md)",
          borderRadius: "var(--radius-xl)",
          background: gradient,
          marginBottom: "var(--space-4)",
        }}
      >
        <div style={{ width: "var(--size-icon-lg)", height: "var(--size-icon-lg)" }}>
          {icon}
        </div>
      </div>
      <h3
        style={{
          fontSize: "var(--type-h6-size)",
          fontWeight: "var(--type-h6-weight)",
          color: "var(--text-heading-primary)",
          marginBottom: "var(--space-2)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "var(--type-body-sm-size)",
          lineHeight: "var(--type-body-sm-line-height)",
          color: "var(--text-muted)",
        }}
      >
        {description}
      </p>
    </div>
  );
}