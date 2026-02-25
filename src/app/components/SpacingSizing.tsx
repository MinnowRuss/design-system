import { useState } from "react";
import { Copy, Check, Ruler, MoveHorizontal, Grid3X3, Box } from "lucide-react";

// ─── Helpers ─────────────────────────────────────────────
function useCopy() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };
  return { copiedKey, copy };
}

// ─── Token Data ──────────────────────────────────────────

interface SpacingToken {
  name: string;
  cssVar: string;
  px: number;
  rem: string;
  tailwind: string;
}

const spacingTokens: SpacingToken[] = [
  { name: "space-0", cssVar: "--space-0", px: 0, rem: "0rem", tailwind: "0" },
  { name: "space-px", cssVar: "--space-px", px: 1, rem: "0.0625rem", tailwind: "px" },
  { name: "space-0.5", cssVar: "--space-0-5", px: 2, rem: "0.125rem", tailwind: "0.5" },
  { name: "space-1", cssVar: "--space-1", px: 4, rem: "0.25rem", tailwind: "1" },
  { name: "space-1.5", cssVar: "--space-1-5", px: 6, rem: "0.375rem", tailwind: "1.5" },
  { name: "space-2", cssVar: "--space-2", px: 8, rem: "0.5rem", tailwind: "2" },
  { name: "space-2.5", cssVar: "--space-2-5", px: 10, rem: "0.625rem", tailwind: "2.5" },
  { name: "space-3", cssVar: "--space-3", px: 12, rem: "0.75rem", tailwind: "3" },
  { name: "space-4", cssVar: "--space-4", px: 16, rem: "1rem", tailwind: "4" },
  { name: "space-5", cssVar: "--space-5", px: 20, rem: "1.25rem", tailwind: "5" },
  { name: "space-6", cssVar: "--space-6", px: 24, rem: "1.5rem", tailwind: "6" },
  { name: "space-8", cssVar: "--space-8", px: 32, rem: "2rem", tailwind: "8" },
  { name: "space-10", cssVar: "--space-10", px: 40, rem: "2.5rem", tailwind: "10" },
  { name: "space-12", cssVar: "--space-12", px: 48, rem: "3rem", tailwind: "12" },
  { name: "space-16", cssVar: "--space-16", px: 64, rem: "4rem", tailwind: "16" },
  { name: "space-20", cssVar: "--space-20", px: 80, rem: "5rem", tailwind: "20" },
  { name: "space-24", cssVar: "--space-24", px: 96, rem: "6rem", tailwind: "24" },
  { name: "space-32", cssVar: "--space-32", px: 128, rem: "8rem", tailwind: "32" },
  { name: "space-40", cssVar: "--space-40", px: 160, rem: "10rem", tailwind: "40" },
  { name: "space-48", cssVar: "--space-48", px: 192, rem: "12rem", tailwind: "48" },
  { name: "space-64", cssVar: "--space-64", px: 256, rem: "16rem", tailwind: "64" },
  { name: "space-80", cssVar: "--space-80", px: 320, rem: "20rem", tailwind: "80" },
  { name: "space-96", cssVar: "--space-96", px: 384, rem: "24rem", tailwind: "96" },
];

interface SizingToken {
  name: string;
  cssVar: string;
  px: number;
  usage: string;
  category: "component" | "layout" | "icon";
}

const sizingTokens: SizingToken[] = [
  { name: "size-icon-sm", cssVar: "--size-icon-sm", px: 16, usage: "Small icons, inline indicators", category: "icon" },
  { name: "size-icon-md", cssVar: "--size-icon-md", px: 20, usage: "Default icons, nav items", category: "icon" },
  { name: "size-icon-lg", cssVar: "--size-icon-lg", px: 24, usage: "Large icons, feature highlights", category: "icon" },
  { name: "size-icon-xl", cssVar: "--size-icon-xl", px: 32, usage: "Hero icons, empty states", category: "icon" },
  { name: "size-avatar-sm", cssVar: "--size-avatar-sm", px: 28, usage: "Compact lists, comments", category: "component" },
  { name: "size-avatar-md", cssVar: "--size-avatar-md", px: 36, usage: "Default avatar in headers", category: "component" },
  { name: "size-avatar-lg", cssVar: "--size-avatar-lg", px: 48, usage: "Profile cards, team pages", category: "component" },
  { name: "size-btn-sm", cssVar: "--size-btn-sm", px: 32, usage: "Small button height", category: "component" },
  { name: "size-btn-md", cssVar: "--size-btn-md", px: 40, usage: "Default button height", category: "component" },
  { name: "size-btn-lg", cssVar: "--size-btn-lg", px: 48, usage: "Large button height", category: "component" },
  { name: "size-input", cssVar: "--size-input", px: 40, usage: "Default input height", category: "component" },
  { name: "size-sidebar", cssVar: "--size-sidebar", px: 280, usage: "Sidebar navigation width", category: "layout" },
  { name: "size-nav", cssVar: "--size-nav", px: 64, usage: "Top navigation height", category: "layout" },
  { name: "size-content-sm", cssVar: "--size-content-sm", px: 640, usage: "Narrow content column", category: "layout" },
  { name: "size-content-md", cssVar: "--size-content-md", px: 768, usage: "Medium content column", category: "layout" },
  { name: "size-content-lg", cssVar: "--size-content-lg", px: 1024, usage: "Wide content column", category: "layout" },
  { name: "size-content-xl", cssVar: "--size-content-xl", px: 1280, usage: "Max content width", category: "layout" },
];

// ─── Sub-section Label ───────────────────────────────────
function SectionLabel({ label, isDark }: { label: string; isDark: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h3
        className="text-[17px]"
        style={{ color: isDark ? "#E2E8F0" : "#334155" }}
      >
        {label}
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
  );
}

// ─── SPACING SCALE ───────────────────────────────────────
function SpacingScale({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();

  // The max bar width we'll render — tokens above this cap out visually
  const maxBarPx = 384;

  return (
    <div className="space-y-8">
      <SectionLabel label="Base Spacing Scale" isDark={isDark} />

      <p
        className="text-[13px] max-w-2xl"
        style={{ color: isDark ? "#94A3B8" : "#64748B", lineHeight: 1.7 }}
      >
        A 4px-based spacing system that covers padding, margin, and gap values.
        Each token maps to a consistent multiplier ensuring visual rhythm across
        all components. Click any row to copy the CSS variable.
      </p>

      {/* Column Headers */}
      <div
        className="grid items-center gap-3 px-4 py-2"
        style={{
          gridTemplateColumns: "110px 72px 80px 80px 1fr",
          fontFamily: "JetBrains Mono, monospace",
          color: isDark ? "#475569" : "#CBD5E1",
          fontSize: "10px",
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
        }}
      >
        <span>Token</span>
        <span>PX</span>
        <span>REM</span>
        <span>Tailwind</span>
        <span>Preview</span>
      </div>

      {/* Rows */}
      <div className="space-y-1">
        {spacingTokens.map((t) => {
          const barWidth = Math.min(t.px, maxBarPx);
          const cssValue = `var(${t.cssVar}); /* ${t.px}px */`;
          const isCopied = copiedKey === t.name;

          return (
            <button
              key={t.name}
              onClick={() => copy(cssValue, t.name)}
              className="w-full grid items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group text-left"
              style={{
                gridTemplateColumns: "110px 72px 80px 80px 1fr",
                backgroundColor: isCopied
                  ? isDark
                    ? "rgba(59, 130, 246, 0.1)"
                    : "rgba(59, 130, 246, 0.06)"
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
              {/* Token name */}
              <span
                className="text-[13px]"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: isCopied
                    ? "#3B82F6"
                    : isDark
                      ? "#E2E8F0"
                      : "#334155",
                }}
              >
                {t.name}
              </span>

              {/* PX */}
              <span
                className="text-[12px]"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: isDark ? "#94A3B8" : "#64748B",
                }}
              >
                {t.px}px
              </span>

              {/* REM */}
              <span
                className="text-[12px]"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: isDark ? "#64748B" : "#94A3B8",
                }}
              >
                {t.rem}
              </span>

              {/* Tailwind */}
              <span
                className="text-[12px]"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: isDark ? "#64748B" : "#94A3B8",
                }}
              >
                {t.tailwind}
              </span>

              {/* Visual bar */}
              <div className="flex items-center gap-2">
                <div
                  className="h-4 rounded-sm transition-all duration-300 shrink-0"
                  style={{
                    width: `${barWidth}px`,
                    minWidth: t.px === 0 ? "2px" : undefined,
                    background:
                      t.px === 0
                        ? isDark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.08)"
                        : "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                    opacity: t.px === 0 ? 0.5 : 0.7 + (t.px / maxBarPx) * 0.3,
                  }}
                />
                {/* Copy feedback */}
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
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── SIZING TOKENS ───────────────────────────────────────
function SizingTokens({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();
  const [activeCategory, setActiveCategory] = useState<"all" | "icon" | "component" | "layout">("all");

  const categories = [
    { key: "all" as const, label: "All" },
    { key: "icon" as const, label: "Icons" },
    { key: "component" as const, label: "Components" },
    { key: "layout" as const, label: "Layout" },
  ];

  const filtered =
    activeCategory === "all"
      ? sizingTokens
      : sizingTokens.filter((t) => t.category === activeCategory);

  const categoryColors = {
    icon: "#8B5CF6",
    component: "#3B82F6",
    layout: "#10B981",
  };

  return (
    <div className="space-y-8">
      <SectionLabel label="Sizing Tokens" isDark={isDark} />

      <p
        className="text-[13px] max-w-2xl"
        style={{ color: isDark ? "#94A3B8" : "#64748B", lineHeight: 1.7 }}
      >
        Predefined sizing tokens for common UI elements ensure visual consistency
        across icons, components, and layout structures. Click any token to copy.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className="px-3 py-1.5 rounded-lg text-[12px] transition-all duration-200"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              backgroundColor:
                activeCategory === cat.key
                  ? isDark
                    ? "rgba(59, 130, 246, 0.15)"
                    : "rgba(59, 130, 246, 0.1)"
                  : isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(0,0,0,0.03)",
              color:
                activeCategory === cat.key
                  ? "#3B82F6"
                  : isDark
                    ? "#94A3B8"
                    : "#64748B",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor:
                activeCategory === cat.key
                  ? "rgba(59, 130, 246, 0.3)"
                  : "transparent",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sizing Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((t) => {
          const cssValue = `var(${t.cssVar}); /* ${t.px}px */`;
          const isCopied = copiedKey === t.name;
          const accentColor = categoryColors[t.category];

          // For preview: clamp to a max visual size
          const previewSize = Math.min(t.px, 64);

          return (
            <button
              key={t.name}
              onClick={() => copy(cssValue, t.name)}
              className="rounded-xl p-4 transition-all duration-200 text-left group"
              style={{
                backgroundColor: isCopied
                  ? isDark
                    ? "rgba(59, 130, 246, 0.08)"
                    : "rgba(59, 130, 246, 0.05)"
                  : isDark
                    ? "rgba(255,255,255,0.02)"
                    : "rgba(0,0,0,0.02)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: isCopied
                  ? "rgba(59, 130, 246, 0.25)"
                  : isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {/* Token name */}
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[13px]"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: isCopied
                          ? "#3B82F6"
                          : isDark
                            ? "#E2E8F0"
                            : "#334155",
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      className="px-1.5 py-0.5 rounded text-[9px] tracking-wider uppercase"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        backgroundColor: `${accentColor}15`,
                        color: accentColor,
                      }}
                    >
                      {t.category}
                    </span>
                  </div>

                  {/* Value */}
                  <p
                    className="text-[12px] mb-1.5"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      color: isDark ? "#94A3B8" : "#64748B",
                    }}
                  >
                    {t.px}px
                  </p>

                  {/* Usage */}
                  <p
                    className="text-[11px]"
                    style={{ color: isDark ? "#64748B" : "#94A3B8" }}
                  >
                    {t.usage}
                  </p>
                </div>

                {/* Visual preview square */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div
                    className="rounded-md transition-all duration-300"
                    style={{
                      width: `${previewSize}px`,
                      height: `${previewSize}px`,
                      minWidth: "8px",
                      minHeight: "8px",
                      background: `${accentColor}25`,
                      borderWidth: "1px",
                      borderStyle: "dashed",
                      borderColor: `${accentColor}60`,
                    }}
                  />
                  {/* Copy indicator */}
                  <span
                    className="text-[9px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      color: isCopied ? "#3B82F6" : isDark ? "#475569" : "#CBD5E1",
                    }}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── INTERACTIVE SPACING PLAYGROUND ──────────────────────
function SpacingPlayground({ isDark }: { isDark: boolean }) {
  const [paddingIdx, setPaddingIdx] = useState(5); // default space-2 (8px)
  const [gapIdx, setGapIdx] = useState(6); // default space-2.5 (10px)
  const [marginIdx, setMarginIdx] = useState(7); // default space-3 (12px)

  const quickTokens = spacingTokens.filter((t) =>
    [0, 2, 4, 8, 12, 16, 20, 24, 32, 48, 64].includes(t.px)
  );

  const paddingToken = quickTokens[paddingIdx] ?? quickTokens[0];
  const gapToken = quickTokens[gapIdx] ?? quickTokens[0];
  const marginToken = quickTokens[marginIdx] ?? quickTokens[0];

  const cardBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";
  const borderCol = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  return (
    <div className="space-y-8">
      <SectionLabel label="Interactive Playground" isDark={isDark} />

      <p
        className="text-[13px] max-w-2xl"
        style={{ color: isDark ? "#94A3B8" : "#64748B", lineHeight: 1.7 }}
      >
        Drag the sliders to see how different spacing tokens affect a live component.
        The preview updates in real time, and the generated CSS is shown below.
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div
          className="rounded-2xl p-6 space-y-6"
          style={{
            backgroundColor: cardBg,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: borderCol,
          }}
        >
          {/* Padding Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[12px] tracking-wider uppercase"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: isDark ? "#94A3B8" : "#64748B",
                }}
              >
                Padding
              </span>
              <span
                className="text-[12px] px-2 py-0.5 rounded-md"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  backgroundColor: isDark ? "rgba(139, 92, 246, 0.12)" : "rgba(139, 92, 246, 0.08)",
                  color: "#8B5CF6",
                }}
              >
                {paddingToken.px}px
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={quickTokens.length - 1}
              value={paddingIdx}
              onChange={(e) => setPaddingIdx(Number(e.target.value))}
              className="w-full accent-violet-500"
              style={{ accentColor: "#8B5CF6" }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[9px]" style={{ fontFamily: "JetBrains Mono, monospace", color: isDark ? "#475569" : "#CBD5E1" }}>0px</span>
              <span className="text-[9px]" style={{ fontFamily: "JetBrains Mono, monospace", color: isDark ? "#475569" : "#CBD5E1" }}>{quickTokens[quickTokens.length - 1].px}px</span>
            </div>
          </div>

          {/* Gap Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[12px] tracking-wider uppercase"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: isDark ? "#94A3B8" : "#64748B",
                }}
              >
                Gap
              </span>
              <span
                className="text-[12px] px-2 py-0.5 rounded-md"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  backgroundColor: isDark ? "rgba(59, 130, 246, 0.12)" : "rgba(59, 130, 246, 0.08)",
                  color: "#3B82F6",
                }}
              >
                {gapToken.px}px
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={quickTokens.length - 1}
              value={gapIdx}
              onChange={(e) => setGapIdx(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#3B82F6" }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[9px]" style={{ fontFamily: "JetBrains Mono, monospace", color: isDark ? "#475569" : "#CBD5E1" }}>0px</span>
              <span className="text-[9px]" style={{ fontFamily: "JetBrains Mono, monospace", color: isDark ? "#475569" : "#CBD5E1" }}>{quickTokens[quickTokens.length - 1].px}px</span>
            </div>
          </div>

          {/* Margin Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[12px] tracking-wider uppercase"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: isDark ? "#94A3B8" : "#64748B",
                }}
              >
                Margin
              </span>
              <span
                className="text-[12px] px-2 py-0.5 rounded-md"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  backgroundColor: isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.08)",
                  color: "#10B981",
                }}
              >
                {marginToken.px}px
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={quickTokens.length - 1}
              value={marginIdx}
              onChange={(e) => setMarginIdx(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#10B981" }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[9px]" style={{ fontFamily: "JetBrains Mono, monospace", color: isDark ? "#475569" : "#CBD5E1" }}>0px</span>
              <span className="text-[9px]" style={{ fontFamily: "JetBrains Mono, monospace", color: isDark ? "#475569" : "#CBD5E1" }}>{quickTokens[quickTokens.length - 1].px}px</span>
            </div>
          </div>

          {/* Generated CSS */}
          <div
            className="rounded-xl p-4"
            style={{
              backgroundColor: isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.04)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[10px] tracking-wider uppercase"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: isDark ? "#475569" : "#CBD5E1",
                }}
              >
                Generated CSS
              </span>
            </div>
            <pre
              className="text-[11px] overflow-x-auto"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#94A3B8" : "#64748B",
                lineHeight: 1.8,
              }}
            >
              <span style={{ color: "#8B5CF6" }}>padding</span>: {paddingToken.px}px;{"\n"}
              <span style={{ color: "#3B82F6" }}>gap</span>: {gapToken.px}px;{"\n"}
              <span style={{ color: "#10B981" }}>margin</span>: {marginToken.px}px;
            </pre>
          </div>
        </div>

        {/* Live Preview */}
        <div
          className="rounded-2xl p-6 flex flex-col"
          style={{
            backgroundColor: cardBg,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: borderCol,
          }}
        >
          <span
            className="text-[10px] tracking-wider uppercase mb-4"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#475569" : "#CBD5E1",
            }}
          >
            Live Preview
          </span>

          {/* Outer element showing margin */}
          <div className="flex-1 flex items-center justify-center">
            <div
              className="relative rounded-xl transition-all duration-300"
              style={{
                backgroundColor: isDark ? "rgba(16, 185, 129, 0.06)" : "rgba(16, 185, 129, 0.04)",
                borderWidth: "1px",
                borderStyle: "dashed",
                borderColor: "rgba(16, 185, 129, 0.3)",
                padding: `${marginToken.px}px`,
              }}
            >
              {/* Margin label */}
              {marginToken.px > 0 && (
                <span
                  className="absolute top-1 left-2 text-[9px]"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: "#10B981",
                  }}
                >
                  margin: {marginToken.px}px
                </span>
              )}

              {/* Inner container with padding */}
              <div
                className="rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: isDark ? "rgba(139, 92, 246, 0.06)" : "rgba(139, 92, 246, 0.04)",
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                  padding: `${paddingToken.px}px`,
                  position: "relative",
                }}
              >
                {/* Padding label */}
                {paddingToken.px > 4 && (
                  <span
                    className="absolute top-1 left-2 text-[9px]"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      color: "#8B5CF6",
                    }}
                  >
                    padding: {paddingToken.px}px
                  </span>
                )}

                {/* Content blocks with gap */}
                <div
                  className="flex flex-wrap transition-all duration-300"
                  style={{ gap: `${gapToken.px}px`, paddingTop: paddingToken.px > 4 ? "14px" : "0" }}
                >
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-[10px]"
                      style={{
                        backgroundColor: isDark
                          ? "rgba(59, 130, 246, 0.15)"
                          : "rgba(59, 130, 246, 0.1)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "rgba(59, 130, 246, 0.25)",
                        fontFamily: "JetBrains Mono, monospace",
                        color: "#3B82F6",
                      }}
                    >
                      {i}
                    </div>
                  ))}
                </div>

                {/* Gap label */}
                {gapToken.px > 0 && (
                  <div className="mt-2 flex items-center gap-1">
                    <MoveHorizontal className="w-3 h-3" style={{ color: "#3B82F6" }} />
                    <span
                      className="text-[9px]"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: "#3B82F6",
                      }}
                    >
                      gap: {gapToken.px}px
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── COMMON PATTERNS ─────────────────────────────────────
function CommonPatterns({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();

  const patterns = [
    {
      name: "Card Padding",
      description: "Standard content card with comfortable reading space",
      tokens: { padding: "24px", gap: "16px", radius: "16px" },
      css: `padding: 24px;\ngap: 16px;\nborder-radius: 16px;`,
      preview: "card",
    },
    {
      name: "Compact List",
      description: "Dense list items with minimal spacing",
      tokens: { padding: "8px 12px", gap: "4px", radius: "8px" },
      css: `padding: 8px 12px;\ngap: 4px;\nborder-radius: 8px;`,
      preview: "list",
    },
    {
      name: "Form Layout",
      description: "Standard form field arrangement",
      tokens: { padding: "16px", gap: "12px", radius: "10px" },
      css: `padding: 16px;\ngap: 12px;\nborder-radius: 10px;`,
      preview: "form",
    },
    {
      name: "Section Spacing",
      description: "Vertical rhythm between page sections",
      tokens: { margin: "64px 0", gap: "24px", padding: "0" },
      css: `margin: 64px 0;\ngap: 24px;`,
      preview: "section",
    },
    {
      name: "Button Group",
      description: "Inline action buttons with balanced spacing",
      tokens: { padding: "10px 20px", gap: "8px", radius: "10px" },
      css: `padding: 10px 20px;\ngap: 8px;\nborder-radius: 10px;`,
      preview: "buttons",
    },
    {
      name: "Nav Items",
      description: "Navigation links with hover targets",
      tokens: { padding: "6px 12px", gap: "4px", radius: "8px" },
      css: `padding: 6px 12px;\ngap: 4px;\nborder-radius: 8px;`,
      preview: "nav",
    },
  ];

  return (
    <div className="space-y-8">
      <SectionLabel label="Common Patterns" isDark={isDark} />

      <p
        className="text-[13px] max-w-2xl"
        style={{ color: isDark ? "#94A3B8" : "#64748B", lineHeight: 1.7 }}
      >
        Recommended spacing combinations for frequently-used layout patterns.
        Each pattern is tuned for optimal readability and visual balance.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {patterns.map((p) => {
          const isCopied = copiedKey === p.name;

          return (
            <div
              key={p.name}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: isCopied
                  ? "rgba(59, 130, 246, 0.3)"
                  : isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
              }}
            >
              {/* Visual Preview */}
              <div
                className="h-24 flex items-center justify-center"
                style={{
                  backgroundColor: isDark ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.02)",
                }}
              >
                <PatternPreview pattern={p.preview} isDark={isDark} />
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4
                    className="text-[13px]"
                    style={{ color: isDark ? "#E2E8F0" : "#334155" }}
                  >
                    {p.name}
                  </h4>
                  <button
                    onClick={() => copy(p.css, p.name)}
                    className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] tracking-wider uppercase transition-all hover:scale-105"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                      color: isCopied ? "#3B82F6" : isDark ? "#64748B" : "#94A3B8",
                    }}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-2.5 h-2.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-2.5 h-2.5" /> CSS
                      </>
                    )}
                  </button>
                </div>

                <p
                  className="text-[11px] mb-3"
                  style={{ color: isDark ? "#64748B" : "#94A3B8" }}
                >
                  {p.description}
                </p>

                {/* Token values */}
                <div className="flex flex-wrap gap-1.5">
                  {Object.entries(p.tokens).map(([key, val]) => (
                    <span
                      key={key}
                      className="px-1.5 py-0.5 rounded text-[9px]"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                        color: isDark ? "#94A3B8" : "#64748B",
                      }}
                    >
                      {key}: {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PatternPreview({ pattern, isDark }: { pattern: string; isDark: boolean }) {
  const block = (w: string, h: string) => ({
    width: w,
    height: h,
    borderRadius: "4px",
    backgroundColor: isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.12)",
    borderWidth: "1px" as const,
    borderStyle: "solid" as const,
    borderColor: "rgba(59,130,246,0.25)",
  });

  switch (pattern) {
    case "card":
      return (
        <div
          className="rounded-lg p-4"
          style={{
            backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
            width: "120px",
          }}
        >
          <div style={block("100%", "8px")} />
          <div className="mt-2" style={block("75%", "6px")} />
          <div className="mt-2" style={block("50%", "6px")} />
        </div>
      );
    case "list":
      return (
        <div className="space-y-1 w-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)" }}>
              <div style={{ ...block("6px", "6px"), borderRadius: "50%" }} />
              <div style={block(`${60 - i * 8}px`, "4px")} />
            </div>
          ))}
        </div>
      );
    case "form":
      return (
        <div className="space-y-2 w-28">
          <div style={block("40%", "4px")} />
          <div className="rounded-md px-2 py-1.5" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", borderWidth: "1px", borderStyle: "solid", borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
            <div style={block("70%", "4px")} />
          </div>
          <div style={block("40%", "4px")} />
          <div className="rounded-md px-2 py-1.5" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", borderWidth: "1px", borderStyle: "solid", borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
            <div style={block("50%", "4px")} />
          </div>
        </div>
      );
    case "section":
      return (
        <div className="space-y-4 w-32">
          <div>
            <div style={block("80%", "6px")} />
            <div className="mt-1" style={block("100%", "3px")} />
            <div className="mt-0.5" style={block("90%", "3px")} />
          </div>
          <div
            className="h-px w-full"
            style={{ backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
          />
          <div>
            <div style={block("60%", "6px")} />
            <div className="mt-1" style={block("100%", "3px")} />
          </div>
        </div>
      );
    case "buttons":
      return (
        <div className="flex gap-2">
          <div className="px-3 py-1.5 rounded-md text-[9px]" style={{ background: "linear-gradient(135deg, #3B82F6, #6366F1)", color: "#fff", fontFamily: "JetBrains Mono, monospace" }}>
            Primary
          </div>
          <div
            className="px-3 py-1.5 rounded-md text-[9px]"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
              color: isDark ? "#94A3B8" : "#64748B",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Secondary
          </div>
        </div>
      );
    case "nav":
      return (
        <div className="flex gap-1">
          {["Home", "Docs", "API"].map((label, i) => (
            <div
              key={label}
              className="px-2 py-1 rounded text-[9px]"
              style={{
                backgroundColor: i === 0 ? (isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.1)") : "transparent",
                color: i === 0 ? "#3B82F6" : (isDark ? "#64748B" : "#94A3B8"),
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

// ─── BEST PRACTICES ──────────────────────────────────────
function SpacingBestPractices({ isDark }: { isDark: boolean }) {
  const practices = [
    {
      title: "Use the 4px Grid",
      description: "All spacing values should be multiples of 4px. This creates consistent visual rhythm and alignment across components, regardless of their combination.",
      icon: <Grid3X3 className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    },
    {
      title: "Progressive Scaling",
      description: "Use smaller tokens (4–12px) for component internals and larger tokens (24–64px) for section spacing. Avoid jumping between extremes in adjacent elements.",
      icon: <Ruler className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #F97316, #EAB308)",
    },
    {
      title: "Semantic Naming",
      description: "Reference tokens by their semantic purpose (e.g., --space-card-padding) rather than raw values. This makes theme-wide adjustments trivial.",
      icon: <Box className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #10B981, #3B82F6)",
    },
    {
      title: "Responsive Adaptation",
      description: "Consider reducing spacing tokens by one step on mobile viewports. A desktop card with 24px padding might use 16px on mobile for optimal use of limited screen space.",
      icon: <MoveHorizontal className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #E11D48, #F97316)",
    },
  ];

  return (
    <div
      className="rounded-2xl p-6 sm:p-8"
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        <span
          className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            backgroundColor: isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.08)",
            color: "#3B82F6",
          }}
        >
          Best Practices
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {practices.map((p) => (
          <div key={p.title}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white"
              style={{ background: p.gradient }}
            >
              {p.icon}
            </div>
            <h4
              className="text-[14px] mb-1.5"
              style={{ color: isDark ? "#F1F5F9" : "#1E293B" }}
            >
              {p.title}
            </h4>
            <p
              className="text-[12px]"
              style={{ color: isDark ? "#64748B" : "#94A3B8", lineHeight: 1.7 }}
            >
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────
export function SpacingSizing({ isDark }: { isDark: boolean }) {
  return (
    <section className="mb-20 sm:mb-28">
      {/* Section header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-baseline gap-3 mb-2">
          <h2
            className="text-[28px] sm:text-[32px] tracking-tight"
            style={{ color: isDark ? "#F8FAFC" : "#0F172A" }}
          >
            Spacing & Sizing
          </h2>
          <span
            className="text-sm tracking-widest uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            TOKENS
          </span>
        </div>
        <p
          className="max-w-2xl text-[15px]"
          style={{ color: isDark ? "#94A3B8" : "#64748B" }}
        >
          A systematic spacing scale and sizing token set built on a 4px grid.
          Consistent spacing creates rhythm, hierarchy, and harmony across every
          screen and component.
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-16">
        <SpacingScale isDark={isDark} />
        <SizingTokens isDark={isDark} />
        <SpacingPlayground isDark={isDark} />
        <CommonPatterns isDark={isDark} />
      </div>

      {/* Best Practices */}
      <div className="mt-16">
        <SpacingBestPractices isDark={isDark} />
      </div>
    </section>
  );
}