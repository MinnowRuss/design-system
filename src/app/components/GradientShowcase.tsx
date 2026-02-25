import { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { GradientPreset } from "./color-data";

function GradientCard({
  gradient,
  isDark,
}: {
  gradient: GradientPreset;
  isDark: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copyCSS = () => {
    navigator.clipboard.writeText(`background: ${gradient.css};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isDark ? "bg-white/[0.03]" : "bg-black/[0.02]"
      }`}
    >
      {/* Gradient preview */}
      <div
        className="h-32 sm:h-40 relative cursor-pointer"
        style={{ background: gradient.css }}
        onClick={copyCSS}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
          {copied ? (
            <div className="flex items-center gap-2 text-white text-sm">
              <Check className="w-4 h-4" />
              Copied CSS!
            </div>
          ) : (
            <div className="flex items-center gap-2 text-white text-sm">
              <Copy className="w-4 h-4" />
              Copy CSS
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5">
        <h4
          className="text-[15px] mb-1"
          style={{
            fontFamily: "Inter, sans-serif",
            color: isDark ? "#F1F5F9" : "#1E293B",
          }}
        >
          {gradient.name}
        </h4>
        <p
          className="text-xs mb-3"
          style={{ color: isDark ? "#64748B" : "#94A3B8" }}
        >
          {gradient.description}
        </p>

        {/* Color dots */}
        <div className="flex items-center gap-1.5 mb-3">
          {gradient.colors.map((c, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border"
              style={{
                backgroundColor: c,
                borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
              }}
            />
          ))}
          <span
            className="ml-2 text-[11px]"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            {gradient.angle}°
          </span>
        </div>

        {/* CSS value */}
        <div
          className={`rounded-lg px-3 py-2 text-[11px] overflow-x-auto ${
            isDark ? "bg-white/[0.05]" : "bg-black/[0.03]"
          }`}
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#94A3B8" : "#64748B",
          }}
        >
          <code className="whitespace-nowrap">{gradient.css}</code>
        </div>
      </div>
    </div>
  );
}

export function GradientShowcase({
  gradients,
  isDark,
}: {
  gradients: GradientPreset[];
  isDark: boolean;
}) {
  return (
    <section className="mb-20 sm:mb-28">
      <div className="mb-8 sm:mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <h2
            className="text-[28px] sm:text-[32px] tracking-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              color: isDark ? "#F8FAFC" : "#0F172A",
            }}
          >
            Gradient System
          </h2>
          <span
            className="text-sm tracking-widest uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            PRESETS
          </span>
        </div>
        <p
          className="max-w-2xl text-[15px]"
          style={{ color: isDark ? "#94A3B8" : "#64748B" }}
        >
          Pre-defined gradient combinations designed for seamless transitions. Each gradient uses 
          adjacent or complementary colors from our spectrum for natural, visually harmonious blends.
          Click any gradient to copy its CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {gradients.map((gradient) => (
          <GradientCard key={gradient.name} gradient={gradient} isDark={isDark} />
        ))}
      </div>

      {/* Full-width showcase */}
      <div className="mt-10 sm:mt-12">
        <h3
          className="text-lg mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            color: isDark ? "#E2E8F0" : "#334155",
          }}
        >
          Full Spectrum Showcase
        </h3>
        <div
          className="h-24 sm:h-32 rounded-2xl shadow-lg"
          style={{
            background: "linear-gradient(90deg, #F43F5E, #F97316, #EAB308, #10B981, #3B82F6, #6366F1, #8B5CF6)",
          }}
        />
        <div className="flex justify-between mt-3 px-1">
          {["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"].map((name) => (
            <span
              key={name}
              className="text-[10px] sm:text-xs tracking-wider uppercase"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#64748B" : "#94A3B8",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}