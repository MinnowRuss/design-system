import { useState } from "react";
import { useOutletContext } from "react-router";
import {
  Download,
  Copy,
  Check,
  FileJson,
  Palette,
  Type,
  Ruler,
  Box,
  Sparkles,
  ExternalLink,
} from "lucide-react";

function useCopy() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };
  return { copiedKey, copy };
}

const tokenCategories = [
  {
    icon: Palette,
    label: "Colors",
    count: "70 shades + 10 semantic + 5 surface",
    description:
      "7 ROY G BIV families (Signal, Ember, Solar, Matrix, Neural, Logic, Synapse) with 10 shades each (50-900), plus semantic text colors and surface tokens — all with light/dark mode variants.",
  },
  {
    icon: Sparkles,
    label: "Gradients",
    count: "8 presets",
    description:
      "Aurora, Sunset Protocol, Neural Pathway, Bio Circuit, Full Spectrum, Deep Space, Electric Dawn, and Neon Pulse — ready-to-use CSS gradient values.",
  },
  {
    icon: Type,
    label: "Typography",
    count: "16 type levels + 2 font families",
    description:
      "Complete composite tokens for Display, Heading, Body, Caption, Overline, and Code levels. Includes font families (Inter, JetBrains Mono), sizes, weights, line-heights, and letter-spacing.",
  },
  {
    icon: Ruler,
    label: "Spacing",
    count: "23 tokens (4px grid)",
    description:
      "Full spacing scale from 0px to 384px on a consistent 4px base grid. Maps to padding, margin, and gap values across all components.",
  },
  {
    icon: Box,
    label: "Sizing",
    count: "17 tokens across 3 categories",
    description:
      "Icon sizes (sm-xl), avatar sizes (sm-lg), button heights (sm-lg), input height, and layout dimensions (sidebar, nav, content widths).",
  },
  {
    icon: FileJson,
    label: "Primitives",
    count: "Border radius, width, opacity, shadows",
    description:
      "Border radius scale (sm-full), border widths, opacity tokens for disabled/hover/backdrop states, and button glow shadows for all variants.",
  },
];

export function TokensPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const { copiedKey, copy } = useCopy();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = "/anchovy-design-tokens.json";
    link.download = "anchovy-design-tokens.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <div className="pt-10 sm:pt-16">
      {/* Header */}
      <div className="mb-10 sm:mb-14">
        <div className="flex items-baseline gap-3 mb-2">
          <h1
            className="text-[28px] sm:text-[36px] tracking-tight"
            style={{ color: isDark ? "#F8FAFC" : "#0F172A" }}
          >
            Design Tokens
          </h1>
          <span
            className="text-[10px] sm:text-sm tracking-widest uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            EXPORT
          </span>
        </div>
        <p
          className="max-w-2xl text-[15px]"
          style={{ color: isDark ? "#94A3B8" : "#64748B", lineHeight: 1.7 }}
        >
          Download the complete Anchovy Design System as a JSON token file
          compatible with{" "}
          <span style={{ color: isDark ? "#E2E8F0" : "#334155" }}>
            Tokens Studio for Figma
          </span>
          . Import it directly into your Figma project to sync all colors,
          typography, spacing, and component tokens.
        </p>
      </div>

      {/* Download Card */}
      <div
        className="rounded-2xl p-6 sm:p-8 mb-10 sm:mb-14"
        style={{
          background: isDark
            ? "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))"
            : "linear-gradient(135deg, rgba(59,130,246,0.04), rgba(139,92,246,0.04))",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: isDark
            ? "rgba(59,130,246,0.15)"
            : "rgba(59,130,246,0.1)",
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            }}
          >
            <FileJson className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h2
              className="text-[18px] mb-1"
              style={{ color: isDark ? "#F1F5F9" : "#1E293B" }}
            >
              anchovy-design-tokens.json
            </h2>
            <p
              className="text-[13px]"
              style={{ color: isDark ? "#64748B" : "#94A3B8" }}
            >
              Tokens Studio format — 143 tokens across 6 categories, with
              light/dark mode support
            </p>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] transition-all duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] shrink-0"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366F1)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              boxShadow: "0 4px 14px rgba(59,130,246,0.25)",
            }}
          >
            {downloading ? (
              <>
                <Check className="w-4 h-4" />
                Downloaded!
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download JSON
              </>
            )}
          </button>
        </div>
      </div>

      {/* What's included */}
      <div className="mb-10 sm:mb-14">
        <div className="flex items-center gap-3 mb-6">
          <h3
            className="text-[17px]"
            style={{ color: isDark ? "#E2E8F0" : "#334155" }}
          >
            What's Included
          </h3>
          <div
            className="flex-1 h-px"
            style={{
              backgroundColor: isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.06)",
            }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {tokenCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className="rounded-xl p-5 transition-all duration-200"
                style={{
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.02)"
                    : "rgba(0,0,0,0.02)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(59,130,246,0.1)"
                        : "rgba(59,130,246,0.06)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "#3B82F6" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-[14px]"
                      style={{
                        color: isDark ? "#F1F5F9" : "#1E293B",
                      }}
                    >
                      {cat.label}
                    </p>
                    <p
                      className="text-[11px]"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: isDark ? "#64748B" : "#94A3B8",
                      }}
                    >
                      {cat.count}
                    </p>
                  </div>
                </div>
                <p
                  className="text-[12px]"
                  style={{
                    color: isDark ? "#94A3B8" : "#64748B",
                    lineHeight: 1.6,
                  }}
                >
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* How to import */}
      <div
        className="rounded-2xl p-6 sm:p-8 mb-10 sm:mb-14"
        style={{
          backgroundColor: isDark
            ? "rgba(255,255,255,0.02)"
            : "rgba(0,0,0,0.01)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: isDark
            ? "rgba(255,255,255,0.06)"
            : "rgba(0,0,0,0.06)",
        }}
      >
        <h3
          className="text-[17px] mb-6"
          style={{ color: isDark ? "#E2E8F0" : "#334155" }}
        >
          How to Import into Figma
        </h3>

        <div className="space-y-5">
          {[
            {
              step: "1",
              title: "Install Tokens Studio",
              description:
                'Open Figma, go to Plugins > Search for "Tokens Studio for Figma" and install it. It\'s free for basic usage.',
            },
            {
              step: "2",
              title: "Download the token file",
              description:
                "Click the download button above to save anchovy-design-tokens.json to your computer.",
            },
            {
              step: "3",
              title: "Load tokens in Tokens Studio",
              description:
                'Open the Tokens Studio plugin, click "Load" or "Import", select the JSON file. All tokens will appear organized by category.',
            },
            {
              step: "4",
              title: "Apply to your designs",
              description:
                "Select any frame or element in Figma and use Tokens Studio to apply colors, typography, spacing, and sizing tokens directly. Enable light/dark mode switching with Variables.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #3B82F6, #6366F1)",
                }}
              >
                <span
                  className="text-[13px] text-white"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {item.step}
                </span>
              </div>
              <div>
                <p
                  className="text-[14px] mb-1"
                  style={{ color: isDark ? "#F1F5F9" : "#1E293B" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-[13px]"
                  style={{
                    color: isDark ? "#64748B" : "#94A3B8",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick reference: sample token paths */}
      <div className="mb-20 sm:mb-28">
        <div className="flex items-center gap-3 mb-6">
          <h3
            className="text-[17px]"
            style={{ color: isDark ? "#E2E8F0" : "#334155" }}
          >
            Token Path Reference
          </h3>
          <div
            className="flex-1 h-px"
            style={{
              backgroundColor: isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.06)",
            }}
          />
        </div>

        <p
          className="text-[13px] mb-5 max-w-2xl"
          style={{ color: isDark ? "#94A3B8" : "#64748B", lineHeight: 1.7 }}
        >
          Once imported, use these token paths in Tokens Studio to reference
          values. Click any path to copy it.
        </p>

        <div className="space-y-1.5">
          {[
            {
              path: "color.neural.500",
              value: "#3B82F6",
              desc: "Primary brand blue",
            },
            {
              path: "color.signal.600",
              value: "#E11D48",
              desc: "Destructive red",
            },
            {
              path: "color.semantic.body.dark",
              value: "#E2E8F0",
              desc: "Body text (dark mode)",
            },
            {
              path: "typography.h1",
              value: "Inter / 36px / 600",
              desc: "Heading 1 composite",
            },
            {
              path: "spacing.4",
              value: "16px",
              desc: "Base spacing unit x4",
            },
            {
              path: "sizing.button.md",
              value: "40px",
              desc: "Default button height",
            },
            {
              path: "gradient.aurora",
              value: "135deg, #3B82F6 > #8B5CF6",
              desc: "Primary gradient",
            },
            {
              path: "borderRadius.2xl",
              value: "16px",
              desc: "Card radius",
            },
          ].map((item) => {
            const isCopied = copiedKey === item.path;
            return (
              <button
                key={item.path}
                onClick={() => copy(item.path, item.path)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left group"
                style={{
                  backgroundColor: isCopied
                    ? isDark
                      ? "rgba(59,130,246,0.1)"
                      : "rgba(59,130,246,0.06)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isCopied) {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.02)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCopied) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <span
                  className="text-[13px] w-56 shrink-0"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: isCopied
                      ? "#3B82F6"
                      : isDark
                        ? "#E2E8F0"
                        : "#334155",
                  }}
                >
                  {item.path}
                </span>
                <span
                  className="text-[12px] w-44 shrink-0"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: isDark ? "#64748B" : "#94A3B8",
                  }}
                >
                  {item.value}
                </span>
                <span
                  className="text-[12px] flex-1 min-w-0 truncate"
                  style={{ color: isDark ? "#475569" : "#CBD5E1" }}
                >
                  {item.desc}
                </span>
                <span
                  className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: isCopied ? "#3B82F6" : isDark ? "#64748B" : "#94A3B8",
                  }}
                >
                  {isCopied ? (
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3 h-3" /> Copy
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
