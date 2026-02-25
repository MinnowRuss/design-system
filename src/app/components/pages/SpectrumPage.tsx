import { useOutletContext } from "react-router";
import { Sun, Moon } from "lucide-react";
import { colorFamilies } from "../color-data";
import { ColorFamily } from "../ColorFamily";

export function SpectrumPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <>
      {/* Section header */}
      <div className="pt-12 sm:pt-16 mb-12 sm:mb-16">
        <div className="flex items-baseline gap-3 mb-2">
          <h2
            className="text-[28px] sm:text-[32px] tracking-tight"
            style={{ color: isDark ? "#F8FAFC" : "#0F172A" }}
          >
            Color Spectrum
          </h2>
          <span
            className="text-sm tracking-widest uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            7 FAMILIES
          </span>
        </div>
        <p
          className="max-w-2xl text-[15px]"
          style={{ color: isDark ? "#94A3B8" : "#64748B" }}
        >
          Each family contains 10 carefully tuned shades progressing from 50 (lightest) to 900 (darkest).
          Click any swatch to copy its HEX value. Hover to reveal the copy action.
        </p>
      </div>

      {/* Color Families */}
      {colorFamilies.map((family, index) => (
        <div
          key={family.name}
          id={`family-${family.name.toLowerCase()}`}
        >
          <ColorFamily
            family={family}
            index={index}
            isDark={isDark}
          />
        </div>
      ))}

      {/* Dark/Light Mode Pairing Guide */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-baseline gap-3 mb-2">
            <h2
              className="text-[28px] sm:text-[32px] tracking-tight"
              style={{ color: isDark ? "#F8FAFC" : "#0F172A" }}
            >
              Mode Pairing
            </h2>
            <span
              className="text-sm tracking-widest uppercase"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#64748B" : "#94A3B8",
              }}
            >
              LIGHT ↔ DARK
            </span>
          </div>
          <p
            className="max-w-2xl text-[15px]"
            style={{ color: isDark ? "#94A3B8" : "#64748B" }}
          >
            Recommended shade pairings for consistent contrast across both modes.
            Lighter shades swap roles between background and accent depending on the mode.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Light mode card */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              backgroundColor: "#FAFBFE",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sun className="w-4 h-4" style={{ color: "#EAB308" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: "#94A3B8",
                }}
              >
                LIGHT MODE
              </span>
            </div>
            <div className="space-y-3">
              <PairingRow label="Background" shade="50" hex="#EFF6FF" textColor="#334155" />
              <PairingRow label="Surface" shade="100" hex="#DBEAFE" textColor="#334155" />
              <PairingRow label="Primary" shade="600" hex="#2563EB" textColor="#334155" />
              <PairingRow label="Text" shade="900" hex="#1E3A8A" textColor="#334155" />
            </div>
            <div className="mt-6 rounded-xl p-4" style={{ backgroundColor: "#EFF6FF" }}>
              <p className="text-sm mb-2" style={{ color: "#1E3A8A" }}>
                Sample Heading
              </p>
              <p className="text-xs" style={{ color: "#334155" }}>
                Body text on light background with proper contrast.
              </p>
              <div
                className="mt-3 inline-block px-3 py-1 rounded-lg text-xs text-white"
                style={{ backgroundColor: "#2563EB" }}
              >
                Primary Action
              </div>
            </div>
          </div>

          {/* Dark mode card */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              backgroundColor: "#0B0F1A",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Moon className="w-4 h-4" style={{ color: "#6366F1" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: "#64748B",
                }}
              >
                DARK MODE
              </span>
            </div>
            <div className="space-y-3">
              <PairingRow label="Background" shade="950" hex="#0B0F1A" textColor="#94A3B8" />
              <PairingRow label="Surface" shade="900" hex="#1E3A8A" textColor="#94A3B8" />
              <PairingRow label="Primary" shade="400" hex="#60A5FA" textColor="#94A3B8" />
              <PairingRow label="Text" shade="50" hex="#EFF6FF" textColor="#94A3B8" />
            </div>
            <div
              className="mt-6 rounded-xl p-4"
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <p className="text-sm mb-2" style={{ color: "#EFF6FF" }}>
                Sample Heading
              </p>
              <p className="text-xs" style={{ color: "#94A3B8" }}>
                Body text on dark background with proper contrast.
              </p>
              <div
                className="mt-3 inline-block px-3 py-1 rounded-lg text-xs text-white"
                style={{ backgroundColor: "#2563EB" }}
              >
                Primary Action
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PairingRow({
  label,
  shade,
  hex,
  textColor,
}: {
  label: string;
  shade: string;
  hex: string;
  textColor: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-lg shrink-0"
        style={{
          backgroundColor: hex,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor:
            textColor === "#334155"
              ? "rgba(0,0,0,0.08)"
              : "rgba(255,255,255,0.1)",
        }}
      />
      <div className="flex-1 flex items-center justify-between">
        <span className="text-xs" style={{ color: textColor }}>
          {label}
        </span>
        <span
          className="text-[11px] opacity-60"
          style={{ fontFamily: "JetBrains Mono, monospace", color: textColor }}
        >
          {shade} · {hex}
        </span>
      </div>
    </div>
  );
}
