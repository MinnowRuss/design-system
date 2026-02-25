import { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { TypographyColor } from "./color-data";

function TypoColorRow({
  color,
  isDark,
}: {
  color: TypographyColor;
  isDark: boolean;
}) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const hex = isDark ? color.darkHex : color.lightHex;
  const cmyk = isDark ? color.darkCmyk : color.lightCmyk;
  const contrast = isDark ? color.contrastDark : color.contrastLight;

  // Parse contrast ratio for badge color
  const ratio = parseFloat(contrast);
  const isAALarge = ratio >= 3;
  const isAANormal = ratio >= 4.5;

  return (
    <div
      className={`group rounded-xl p-4 sm:p-5 transition-all duration-200 hover:shadow-md ${
        isDark ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-black/[0.02] hover:bg-black/[0.04]"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Color preview and name */}
        <div className="flex items-center gap-4 sm:w-64 shrink-0">
          <div
            className="w-12 h-12 rounded-xl shadow-sm shrink-0 border"
            style={{
              backgroundColor: hex,
              borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
            }}
          />
          <div>
            <h4 className="text-[15px]" style={{ fontFamily: "Inter, sans-serif", color: isDark ? "#F1F5F9" : "#1E293B" }}>
              {color.name}
            </h4>
            <p className="text-xs mt-0.5" style={{ color: isDark ? "#64748B" : "#94A3B8" }}>
              {color.purpose}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 flex-1">
          {/* HEX */}
          <button
            className="flex items-center gap-1.5 group/btn"
            onClick={() => copyToClipboard(hex, "hex")}
          >
            <span
              className="text-[13px] tracking-wide"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#CBD5E1" : "#475569",
              }}
            >
              {copied === "hex" ? "Copied!" : hex}
            </span>
            <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">
              {copied === "hex" ? (
                <Check className="w-3 h-3" style={{ color: "#10B981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: isDark ? "#64748B" : "#94A3B8" }} />
              )}
            </span>
          </button>

          {/* CMYK */}
          <button
            className="flex items-center gap-1.5 group/btn"
            onClick={() => copyToClipboard(cmyk, "cmyk")}
          >
            <span
              className="text-[12px] tracking-wide opacity-60"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#94A3B8" : "#64748B",
              }}
            >
              {copied === "cmyk" ? "Copied!" : `C ${cmyk}`}
            </span>
            <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">
              {copied === "cmyk" ? (
                <Check className="w-3 h-3" style={{ color: "#10B981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: isDark ? "#64748B" : "#94A3B8" }} />
              )}
            </span>
          </button>

          {/* Contrast ratio badge */}
          <div className="flex items-center gap-2 ml-auto">
            <span
              className="text-[11px] px-2 py-0.5 rounded-full"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                backgroundColor: isAANormal
                  ? isDark
                    ? "rgba(16, 185, 129, 0.15)"
                    : "rgba(16, 185, 129, 0.1)"
                  : isAALarge
                    ? isDark
                      ? "rgba(234, 179, 8, 0.15)"
                      : "rgba(234, 179, 8, 0.1)"
                    : isDark
                      ? "rgba(244, 63, 94, 0.15)"
                      : "rgba(244, 63, 94, 0.1)",
                color: isAANormal
                  ? isDark
                    ? "#34D399"
                    : "#059669"
                  : isAALarge
                    ? isDark
                      ? "#FACC15"
                      : "#CA8A04"
                    : isDark
                      ? "#FB7185"
                      : "#E11D48",
              }}
            >
              {contrast}
            </span>
            <span
              className="text-[10px] tracking-wider uppercase"
              style={{
                color: isAANormal
                  ? isDark
                    ? "#34D399"
                    : "#059669"
                  : isAALarge
                    ? isDark
                      ? "#FACC15"
                      : "#CA8A04"
                    : isDark
                      ? "#FB7185"
                      : "#E11D48",
              }}
            >
              {isAANormal ? "AA" : isAALarge ? "AA Large" : "Decorative"}
            </span>
          </div>
        </div>
      </div>

      {/* Typography sample */}
      <div className="mt-4 pt-3 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}>
        <p className="text-[15px]" style={{ color: hex, fontFamily: "Inter, sans-serif" }}>
          The quick brown fox jumps over the lazy dog — 0123456789
        </p>
      </div>
    </div>
  );
}

export function TypographyPalette({
  colors,
  isDark,
}: {
  colors: TypographyColor[];
  isDark: boolean;
}) {
  return (
    <section className="mb-20 sm:mb-28">
      <div className="mb-8 sm:mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <h2
            className="text-[28px] sm:text-[32px] tracking-tight"
            style={{ fontFamily: "Inter, sans-serif", color: isDark ? "#F8FAFC" : "#0F172A" }}
          >
            Typography Colors
          </h2>
          <span
            className="text-sm tracking-widest uppercase"
            style={{ fontFamily: "JetBrains Mono, monospace", color: isDark ? "#64748B" : "#94A3B8" }}
          >
            TEXT
          </span>
        </div>
        <p className="max-w-2xl text-[15px]" style={{ color: isDark ? "#94A3B8" : "#64748B" }}>
          A dedicated text color system optimized for digital readability. Each color is paired with its 
          WCAG contrast ratio against the current background mode, ensuring accessibility compliance across 
          all applications.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: isDark ? "#34D399" : "#059669" }}
          />
          <span className="text-xs" style={{ color: isDark ? "#94A3B8" : "#64748B" }}>
            AA Compliant (≥ 4.5:1)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: isDark ? "#FACC15" : "#CA8A04" }}
          />
          <span className="text-xs" style={{ color: isDark ? "#94A3B8" : "#64748B" }}>
            AA Large Text (≥ 3:1)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: isDark ? "#FB7185" : "#E11D48" }}
          />
          <span className="text-xs" style={{ color: isDark ? "#94A3B8" : "#64748B" }}>
            Decorative Only
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {colors.map((color) => (
          <TypoColorRow key={color.name} color={color} isDark={isDark} />
        ))}
      </div>
    </section>
  );
}
