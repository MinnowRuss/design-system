import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { ColorFamily as ColorFamilyType } from "./color-data";

function ColorSwatch({
  shade,
  familyName,
  isDark,
}: {
  shade: { name: string; hex: string; cmyk: string };
  familyName: string;
  isDark: boolean;
}) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  // Determine if text on this swatch should be light or dark
  const r = parseInt(shade.hex.slice(1, 3), 16);
  const g = parseInt(shade.hex.slice(3, 5), 16);
  const b = parseInt(shade.hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor = luminance > 0.55 ? "#0F172A" : "#F8FAFC";
  const mutedTextColor = luminance > 0.55 ? "#475569" : "#CBD5E1";

  return (
    <div className="group relative">
      <div
        className="flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        style={{
          backgroundColor: shade.hex,
          borderRadius: "var(--radius-xl)",
          height: "var(--space-32)",
          padding: "var(--space-4)",
        }}
        onClick={() => copyToClipboard(shade.hex, "hex")}
      >
        <div className="flex items-center justify-between">
          <span
            className="tracking-wider opacity-70"
            style={{
              fontSize: "var(--type-caption-size)",
              color: mutedTextColor,
              fontFamily: "var(--font-family-mono)",
            }}
          >
            {familyName.toUpperCase()} {shade.name}
          </span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            {copied ? (
              <div style={{ width: "var(--size-icon-sm)", height: "var(--size-icon-sm)" }}>
                <Check className="w-full h-full" style={{ color: textColor }} />
              </div>
            ) : (
              <div style={{ width: "var(--size-icon-sm)", height: "var(--size-icon-sm)" }}>
                <Copy className="w-full h-full" style={{ color: textColor }} />
              </div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1-5)" }}>
          <button
            className="block w-full text-left tracking-wide hover:opacity-80 transition-opacity"
            style={{
              fontSize: "var(--type-body-sm-size)",
              color: textColor,
              fontFamily: "var(--font-family-mono)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(shade.hex, "hex");
            }}
          >
            {copied === "hex" ? "Copied!" : shade.hex}
          </button>
          <button
            className="block w-full text-left tracking-tight opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              fontSize: "var(--type-overline-size)",
              color: mutedTextColor,
              fontFamily: "var(--font-family-mono)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(shade.cmyk, "cmyk");
            }}
          >
            {copied === "cmyk" ? "Copied!" : `C ${shade.cmyk}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ColorFamily({
  family,
  index,
  isDark,
}: {
  family: ColorFamilyType;
  index: number;
  isDark: boolean;
}) {
  const primaryShade = family.shades[5]; // 500 shade

  return (
    <section style={{ marginBottom: "var(--space-20)" }}>
      {/* Family header */}
      <div className="flex items-start" style={{ gap: "var(--space-6)", marginBottom: "var(--space-10)" }}>
        <div
          className="shrink-0 shadow-lg"
          style={{
            width: "var(--space-16)",
            height: "var(--space-16)",
            borderRadius: "var(--radius-2xl)",
            backgroundColor: primaryShade.hex,
          }}
        />
        <div>
          <div className="flex items-baseline" style={{ gap: "var(--space-3)" }}>
            <h2
              className="tracking-tight"
              style={{
                fontSize: "var(--type-h2-size)",
                fontWeight: "var(--type-h2-weight)",
                color: "var(--text-heading-primary)",
                fontFamily: "var(--font-family-sans)",
              }}
            >
              {family.name}
            </h2>
            <span
              className="tracking-widest uppercase"
              style={{
                fontSize: "var(--type-body-sm-size)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-family-mono)",
              }}
            >
              {family.subtitle}
            </span>
          </div>
          <p
            className="max-w-xl"
            style={{
              marginTop: "var(--space-1-5)",
              fontSize: "var(--type-h6-size)",
              color: "var(--text-secondary)",
            }}
          >
            {family.description}
          </p>
        </div>
      </div>

      {/* Color strip preview */}
      <div className="flex overflow-hidden shadow-md" style={{ borderRadius: "var(--radius-2xl)", height: "var(--space-20)", marginBottom: "var(--space-6)" }}>
        {family.shades.map((shade) => (
          <div
            key={shade.name}
            className="flex-1 transition-all duration-200 hover:flex-[2]"
            style={{ backgroundColor: shade.hex }}
          />
        ))}
      </div>

      {/* Shade grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5" style={{ gap: "var(--space-3)" }}>
        {family.shades.map((shade) => (
          <ColorSwatch key={shade.name} shade={shade} familyName={family.name} isDark={isDark} />
        ))}
      </div>

      {/* Usage notes */}
      <div className="flex flex-wrap" style={{ marginTop: "var(--space-6)", gap: "var(--space-3)" }}>
        <UsageBadge
          isDark={isDark}
          label="Light Background"
          shade="50–100"
          color={family.shades[0].hex}
        />
        <UsageBadge
          isDark={isDark}
          label="UI Accent"
          shade="400–500"
          color={family.shades[5].hex}
        />
        <UsageBadge
          isDark={isDark}
          label="Dark Text"
          shade="800–900"
          color={family.shades[8].hex}
        />
      </div>
    </section>
  );
}

function UsageBadge({
  isDark,
  label,
  shade,
  color,
}: {
  isDark: boolean;
  label: string;
  shade: string;
  color: string;
}) {
  return (
    <div
      className="flex items-center rounded-full"
      style={{
        gap: "var(--space-2)",
        padding: `var(--space-1-5) var(--space-3)`,
        fontSize: "var(--type-caption-size)",
        backgroundColor: "var(--interactive-active-bg)",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-family-sans)",
      }}
    >
      <div style={{ width: "var(--space-3)", height: "var(--space-3)", borderRadius: "var(--radius-full)", backgroundColor: color }} />
      <span>{label}</span>
      <span className="opacity-50" style={{ fontFamily: "var(--font-family-mono)" }}>{shade}</span>
    </div>
  );
}