import { useState } from "react";
import { Copy, Check, Type } from "lucide-react";

interface TypeLevel {
  name: string;
  tag: string;
  fontFamily: "Inter" | "JetBrains Mono";
  sizePx: number;
  weight: number;
  lineHeight: number;
  letterSpacing: string;
  sampleText: string;
  usage: string;
}

const typeLevels: TypeLevel[] = [
  {
    name: "Display Large",
    tag: "h1",
    fontFamily: "Inter",
    sizePx: 72,
    weight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    sampleText: "Anchovy AI",
    usage: "Hero sections, landing pages, splash screens",
  },
  {
    name: "Display Medium",
    tag: "h1",
    fontFamily: "Inter",
    sizePx: 56,
    weight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    sampleText: "Design System",
    usage: "Page titles, major section introductions",
  },
  {
    name: "Display Small",
    tag: "h2",
    fontFamily: "Inter",
    sizePx: 48,
    weight: 600,
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    sampleText: "Color Spectrum",
    usage: "Secondary hero text, feature highlights",
  },
  {
    name: "Heading 1",
    tag: "h1",
    fontFamily: "Inter",
    sizePx: 36,
    weight: 600,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    sampleText: "Neural Networks",
    usage: "Page headings, primary content titles",
  },
  {
    name: "Heading 2",
    tag: "h2",
    fontFamily: "Inter",
    sizePx: 30,
    weight: 600,
    lineHeight: 1.25,
    letterSpacing: "-0.015em",
    sampleText: "Machine Learning",
    usage: "Section headings, card group titles",
  },
  {
    name: "Heading 3",
    tag: "h3",
    fontFamily: "Inter",
    sizePx: 24,
    weight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    sampleText: "Data Processing",
    usage: "Subsection headings, widget titles",
  },
  {
    name: "Heading 4",
    tag: "h4",
    fontFamily: "Inter",
    sizePx: 20,
    weight: 500,
    lineHeight: 1.35,
    letterSpacing: "-0.005em",
    sampleText: "Inference Pipeline",
    usage: "Card titles, sidebar headings, dialog titles",
  },
  {
    name: "Heading 5",
    tag: "h5",
    fontFamily: "Inter",
    sizePx: 18,
    weight: 500,
    lineHeight: 1.4,
    letterSpacing: "0em",
    sampleText: "Model Architecture",
    usage: "Small titles, list group headings",
  },
  {
    name: "Heading 6",
    tag: "h6",
    fontFamily: "Inter",
    sizePx: 16,
    weight: 500,
    lineHeight: 1.5,
    letterSpacing: "0em",
    sampleText: "Configuration",
    usage: "Minor headings, form section labels",
  },
  {
    name: "Body Large",
    tag: "p",
    fontFamily: "Inter",
    sizePx: 18,
    weight: 400,
    lineHeight: 1.7,
    letterSpacing: "0em",
    sampleText:
      "Building intelligent systems requires careful attention to both data quality and algorithmic design.",
    usage: "Lead paragraphs, feature descriptions, introductions",
  },
  {
    name: "Body Base",
    tag: "p",
    fontFamily: "Inter",
    sizePx: 16,
    weight: 400,
    lineHeight: 1.7,
    letterSpacing: "0em",
    sampleText:
      "Our platform leverages state-of-the-art transformer models to deliver real-time inference at scale.",
    usage: "Default body text, descriptions, general content",
  },
  {
    name: "Body Small",
    tag: "p",
    fontFamily: "Inter",
    sizePx: 14,
    weight: 400,
    lineHeight: 1.65,
    letterSpacing: "0.005em",
    sampleText:
      "Fine-tuned for optimal performance across edge devices and cloud infrastructure.",
    usage: "Secondary body text, tooltips, supplementary content",
  },
  {
    name: "Caption",
    tag: "span",
    fontFamily: "Inter",
    sizePx: 12,
    weight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
    sampleText: "Updated 3 minutes ago  ·  v2.4.1",
    usage: "Timestamps, helper text, image captions, metadata",
  },
  {
    name: "Overline",
    tag: "span",
    fontFamily: "Inter",
    sizePx: 11,
    weight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.1em",
    sampleText: "FEATURED MODEL",
    usage: "Category labels, section tags, badge text (always uppercase)",
  },
  {
    name: "Code Inline",
    tag: "code",
    fontFamily: "JetBrains Mono",
    sizePx: 14,
    weight: 400,
    lineHeight: 1.6,
    letterSpacing: "0em",
    sampleText: "const model = await loadModel('anchovy-v3');",
    usage: "Inline code, variable names, file paths, CLI commands",
  },
  {
    name: "Code Block",
    tag: "pre",
    fontFamily: "JetBrains Mono",
    sizePx: 13,
    weight: 400,
    lineHeight: 1.7,
    letterSpacing: "0em",
    sampleText:
      "function predict(input: Tensor): Result {\n  return pipeline.run(input);\n}",
    usage: "Multi-line code, syntax highlighted blocks, terminal output",
  },
];

const fontWeights = [
  { weight: 300, name: "Light", family: "Inter" },
  { weight: 400, name: "Regular", family: "Inter" },
  { weight: 500, name: "Medium", family: "Inter" },
  { weight: 600, name: "Semibold", family: "Inter" },
  { weight: 700, name: "Bold", family: "Inter" },
  { weight: 800, name: "Extrabold", family: "Inter" },
];

const monoWeights = [
  { weight: 400, name: "Regular", family: "JetBrains Mono" },
  { weight: 500, name: "Medium", family: "JetBrains Mono" },
  { weight: 600, name: "Semibold", family: "JetBrains Mono" },
];

function getCSSString(level: TypeLevel): string {
  const family =
    level.fontFamily === "Inter"
      ? "Inter, sans-serif"
      : "JetBrains Mono, monospace";
  return `font-family: ${family};\nfont-size: ${level.sizePx}px;\nfont-weight: ${level.weight};\nline-height: ${level.lineHeight};\nletter-spacing: ${level.letterSpacing};`;
}

function TypeLevelRow({
  level,
  isDark,
}: {
  level: TypeLevel;
  isDark: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copyCSS = () => {
    navigator.clipboard.writeText(getCSSString(level));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isCode = level.fontFamily === "JetBrains Mono";
  const fontFamilyCSS = isCode
    ? "JetBrains Mono, monospace"
    : "Inter, sans-serif";

  // Clamp display font size for mobile
  const displaySize = level.sizePx > 36 ? `clamp(28px, 5vw, ${level.sizePx}px)` : `${level.sizePx}px`;

  return (
    <div
      className={`group rounded-2xl border transition-all duration-200 overflow-hidden ${
        isDark
          ? "bg-white/[0.02] hover:bg-white/[0.04] border-white/[0.06]"
          : "bg-black/[0.01] hover:bg-black/[0.03] border-black/[0.06]"
      }`}
    >
      {/* Sample text rendering */}
      <div
        className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6 overflow-hidden"
        style={{ minHeight: level.sizePx > 30 ? "auto" : undefined }}
      >
        {level.tag === "pre" ? (
          <pre
            style={{
              fontFamily: fontFamilyCSS,
              fontSize: displaySize,
              fontWeight: level.weight,
              lineHeight: level.lineHeight,
              letterSpacing: level.letterSpacing,
              color: isDark ? "#E2E8F0" : "#334155",
              whiteSpace: "pre-wrap",
              margin: 0,
            }}
          >
            {level.sampleText}
          </pre>
        ) : (
          <div
            style={{
              fontFamily: fontFamilyCSS,
              fontSize: displaySize,
              fontWeight: level.weight,
              lineHeight: level.lineHeight,
              letterSpacing: level.letterSpacing,
              color: isDark ? "#F1F5F9" : "#1E293B",
              textTransform:
                level.name === "Overline" ? "uppercase" : undefined,
            }}
          >
            {level.sampleText}
          </div>
        )}
      </div>

      {/* Metadata bar */}
      <div
        className="px-5 sm:px-8 py-4 border-t flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0"
        style={{
          borderColor: isDark
            ? "rgba(255,255,255,0.05)"
            : "rgba(0,0,0,0.05)",
        }}
      >
        {/* Name and tag */}
        <div className="flex items-center gap-3 sm:w-56 shrink-0">
          <span
            className="text-[14px]"
            style={{
              fontFamily: "Inter, sans-serif",
              color: isDark ? "#F1F5F9" : "#1E293B",
              fontWeight: 500,
            }}
          >
            {level.name}
          </span>
          <span
            className="text-[10px] px-1.5 py-0.5 rounded"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#818CF8" : "#6366F1",
              backgroundColor: isDark
                ? "rgba(99, 102, 241, 0.12)"
                : "rgba(99, 102, 241, 0.08)",
            }}
          >
            {"<" + level.tag + ">"}
          </span>
        </div>

        {/* Properties */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 flex-1">
          <PropChip
            label={level.fontFamily}
            isDark={isDark}
          />
          <PropChip
            label={`${level.sizePx}px`}
            isDark={isDark}
          />
          <PropChip
            label={`wt ${level.weight}`}
            isDark={isDark}
          />
          <PropChip
            label={`lh ${level.lineHeight}`}
            isDark={isDark}
          />
          <PropChip
            label={`ls ${level.letterSpacing}`}
            isDark={isDark}
          />
        </div>

        {/* Copy button */}
        <button
          onClick={copyCSS}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0 self-start sm:self-auto"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.05)"
              : "rgba(0,0,0,0.04)",
            color: copied
              ? "#10B981"
              : isDark
                ? "#94A3B8"
                : "#64748B",
          }}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          <span
            className="text-[11px] tracking-wider"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            {copied ? "COPIED" : "CSS"}
          </span>
        </button>
      </div>

      {/* Usage note (visible on hover) */}
      <div
        className="px-5 sm:px-8 pb-4 pt-0 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-12 transition-all duration-300 overflow-hidden"
      >
        <span
          className="text-[12px]"
          style={{ color: isDark ? "#64748B" : "#94A3B8" }}
        >
          {level.usage}
        </span>
      </div>
    </div>
  );
}

function PropChip({
  label,
  isDark,
}: {
  label: string;
  isDark: boolean;
}) {
  return (
    <span
      className="text-[11px] tracking-wide"
      style={{
        fontFamily: "JetBrains Mono, monospace",
        color: isDark ? "#64748B" : "#94A3B8",
      }}
    >
      {label}
    </span>
  );
}

function WeightSwatch({
  weight,
  name,
  family,
  isDark,
}: {
  weight: number;
  name: string;
  family: string;
  isDark: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copyWeight = () => {
    navigator.clipboard.writeText(`font-weight: ${weight};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const fontFamilyCSS =
    family === "Inter" ? "Inter, sans-serif" : "JetBrains Mono, monospace";

  return (
    <button
      onClick={copyWeight}
      className={`group/weight rounded-xl p-4 sm:p-5 border transition-all duration-200 text-left ${
        isDark
          ? "bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.06]"
          : "bg-black/[0.01] hover:bg-black/[0.03] border-black/[0.06]"
      }`}
    >
      <div
        className="text-[28px] sm:text-[32px] mb-3 truncate"
        style={{
          fontFamily: fontFamilyCSS,
          fontWeight: weight,
          color: isDark ? "#F1F5F9" : "#1E293B",
          lineHeight: 1.2,
        }}
      >
        Aa
      </div>
      <div className="flex items-center justify-between gap-2">
        <div>
          <div
            className="text-[12px] mb-0.5"
            style={{
              fontFamily: "Inter, sans-serif",
              color: isDark ? "#CBD5E1" : "#475569",
              fontWeight: 500,
            }}
          >
            {name}
          </div>
          <div
            className="text-[11px]"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            {weight}
          </div>
        </div>
        <div className="opacity-0 group-hover/weight:opacity-100 transition-opacity">
          {copied ? (
            <Check className="w-3.5 h-3.5" style={{ color: "#10B981" }} />
          ) : (
            <Copy
              className="w-3.5 h-3.5"
              style={{ color: isDark ? "#64748B" : "#94A3B8" }}
            />
          )}
        </div>
      </div>
    </button>
  );
}

export function TypographyScale({ isDark }: { isDark: boolean }) {
  return (
    <section className="mb-20 sm:mb-28">
      {/* Section header */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <h2
            className="text-[28px] sm:text-[32px] tracking-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              color: isDark ? "#F8FAFC" : "#0F172A",
            }}
          >
            Typography Scale
          </h2>
          <span
            className="text-sm tracking-widest uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            TYPE
          </span>
        </div>
        <p
          className="max-w-2xl text-[15px]"
          style={{
            color: isDark ? "#94A3B8" : "#64748B",
            lineHeight: 1.7,
          }}
        >
          A comprehensive type ramp built on Inter for UI text and JetBrains
          Mono for code. Each level defines size, weight, line-height, and
          letter-spacing — click any row to copy the full CSS declaration.
        </p>
      </div>

      {/* Font family specimens */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {/* Inter */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.02)"
              : "rgba(0,0,0,0.01)",
            borderColor: isDark
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Type className="w-4 h-4" style={{ color: "#3B82F6" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#64748B" : "#94A3B8",
              }}
            >
              PRIMARY TYPEFACE
            </span>
          </div>
          <div
            className="text-[40px] sm:text-[48px] tracking-tight mb-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              color: isDark ? "#F1F5F9" : "#1E293B",
              lineHeight: 1.1,
            }}
          >
            Inter
          </div>
          <p
            className="text-[13px] mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              color: isDark ? "#64748B" : "#94A3B8",
              lineHeight: 1.6,
            }}
          >
            A highly legible variable sans-serif optimized for screens. Used for
            all UI text, headings, and body copy.
          </p>
          <div
            className="text-[18px] mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              color: isDark ? "#CBD5E1" : "#475569",
              lineHeight: 1.6,
            }}
          >
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789 !@#$%&*()
          </div>
          {/* Weight chips */}
          <div className="grid grid-cols-3 gap-2">
            {fontWeights.map((w) => (
              <WeightSwatch
                key={w.weight}
                weight={w.weight}
                name={w.name}
                family={w.family}
                isDark={isDark}
              />
            ))}
          </div>
        </div>

        {/* JetBrains Mono */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.02)"
              : "rgba(0,0,0,0.01)",
            borderColor: isDark
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Type className="w-4 h-4" style={{ color: "#8B5CF6" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#64748B" : "#94A3B8",
              }}
            >
              MONOSPACE TYPEFACE
            </span>
          </div>
          <div
            className="text-[40px] sm:text-[48px] tracking-tight mb-2"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 600,
              color: isDark ? "#F1F5F9" : "#1E293B",
              lineHeight: 1.1,
            }}
          >
            JetBrains
          </div>
          <p
            className="text-[13px] mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              color: isDark ? "#64748B" : "#94A3B8",
              lineHeight: 1.6,
            }}
          >
            A developer-focused monospace font with enhanced readability. Used
            for code, data values, technical labels, and tokens.
          </p>
          <div
            className="text-[18px] mb-4"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 400,
              color: isDark ? "#CBD5E1" : "#475569",
              lineHeight: 1.6,
            }}
          >
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789 {"=> {} [] () <>"}
          </div>
          {/* Weight chips */}
          <div className="grid grid-cols-3 gap-2">
            {monoWeights.map((w) => (
              <WeightSwatch
                key={w.weight}
                weight={w.weight}
                name={w.name}
                family={w.family}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Type scale heading */}
      <div className="flex items-center gap-3 mb-6">
        <h3
          className="text-lg"
          style={{
            fontFamily: "Inter, sans-serif",
            color: isDark ? "#E2E8F0" : "#334155",
          }}
        >
          Type Ramp
        </h3>
        <span
          className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
            backgroundColor: isDark
              ? "rgba(255,255,255,0.05)"
              : "rgba(0,0,0,0.04)",
          }}
        >
          {typeLevels.length} LEVELS
        </span>
      </div>

      {/* Visual size bar */}
      <div
        className="flex items-end gap-[3px] sm:gap-1 h-20 mb-8 px-2 rounded-xl py-3"
        style={{
          backgroundColor: isDark
            ? "rgba(255,255,255,0.02)"
            : "rgba(0,0,0,0.02)",
        }}
      >
        {typeLevels.map((level, i) => {
          const barHeight = Math.max(
            8,
            Math.min(100, (level.sizePx / 72) * 100)
          );
          const hue = (i / typeLevels.length) * 220 + 200; // blue to violet spectrum
          return (
            <div
              key={level.name}
              className="flex-1 rounded-t-sm transition-all duration-200 hover:opacity-80 cursor-default"
              style={{
                height: `${barHeight}%`,
                background: `linear-gradient(180deg, hsl(${hue}, 70%, ${isDark ? "65%" : "55%"}), hsl(${hue}, 70%, ${isDark ? "45%" : "40%"}))`,
                opacity: 0.7,
              }}
              title={`${level.name} — ${level.sizePx}px`}
            />
          );
        })}
      </div>

      {/* Type levels */}
      <div className="space-y-3">
        {typeLevels.map((level) => (
          <TypeLevelRow key={level.name} level={level} isDark={isDark} />
        ))}
      </div>

      {/* Best practices */}
      <div
        className="mt-10 sm:mt-12 rounded-2xl p-6 sm:p-8 border"
        style={{
          backgroundColor: isDark
            ? "rgba(59, 130, 246, 0.04)"
            : "rgba(59, 130, 246, 0.02)",
          borderColor: isDark
            ? "rgba(59, 130, 246, 0.12)"
            : "rgba(59, 130, 246, 0.08)",
        }}
      >
        <h3
          className="text-[15px] mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            color: isDark ? "#F1F5F9" : "#1E293B",
            fontWeight: 500,
          }}
        >
          Typography Best Practices
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              title: "Hierarchy",
              desc: "Use no more than 3-4 type sizes per screen. Rely on weight and color variations before adding new sizes.",
            },
            {
              title: "Line Length",
              desc: "Keep body text between 45-75 characters per line (about 640px max-width at 16px) for optimal readability.",
            },
            {
              title: "Vertical Rhythm",
              desc: "Use consistent spacing multiples (4px base unit) between text blocks. Margin below headings should be smaller than margin above.",
            },
            {
              title: "Code vs. UI",
              desc: "Reserve JetBrains Mono exclusively for code, data values, and technical tokens. Never use it for body copy or headings.",
            },
          ].map((tip) => (
            <div key={tip.title}>
              <h4
                className="text-[13px] mb-1.5"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: isDark ? "#93C5FD" : "#2563EB",
                  fontWeight: 500,
                }}
              >
                {tip.title}
              </h4>
              <p
                className="text-[13px]"
                style={{
                  color: isDark ? "#64748B" : "#94A3B8",
                  lineHeight: 1.65,
                }}
              >
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}