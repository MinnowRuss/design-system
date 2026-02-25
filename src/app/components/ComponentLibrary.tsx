import { useState } from "react";
import {
  Copy,
  Check,
  Loader2,
  Search,
  Mail,
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  XCircle,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Eye,
  EyeOff,
  X,
  Circle,
} from "lucide-react";

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

function CopyButton({
  code,
  id,
  copiedKey,
  onCopy,
  isDark,
}: {
  code: string;
  id: string;
  copiedKey: string | null;
  onCopy: (text: string, key: string) => void;
  isDark: boolean;
}) {
  return (
    <button
      onClick={() => onCopy(code, id)}
      className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] tracking-wider uppercase transition-all hover:scale-105"
      style={{
        fontFamily: "JetBrains Mono, monospace",
        backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
        color: isDark ? "#94A3B8" : "#64748B",
      }}
    >
      {copiedKey === id ? (
        <>
          <Check className="w-3 h-3" /> Copied
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" /> Copy CSS
        </>
      )}
    </button>
  );
}

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

// ─── BUTTONS ─────────────────────────────────────────────
function ButtonShowcase({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const simulateLoading = (id: string) => {
    setLoadingId(id);
    setTimeout(() => setLoadingId(null), 2000);
  };

  const variants = [
    {
      name: "Primary",
      bg: "linear-gradient(135deg, #3B82F6, #6366F1)",
      hoverBg: "linear-gradient(135deg, #2563EB, #4F46E5)",
      text: "#FFFFFF",
      hoverText: "#FFFFFF",
      border: "none",
      hoverBorder: "none",
      isGradient: true,
      css: `background: linear-gradient(135deg, #3B82F6, #6366F1); color: #FFFFFF; border-radius: 10px; padding: 10px 20px; font-family: Inter; font-size: 14px;`,
      hoverCss: `background: linear-gradient(135deg, #2563EB, #4F46E5); color: #FFFFFF; border-radius: 10px; padding: 10px 20px; box-shadow: 0 4px 14px rgba(59,130,246,0.35);`,
    },
    {
      name: "Secondary",
      bg: isDark
        ? "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))"
        : "linear-gradient(135deg, rgba(0,0,0,0.06), rgba(0,0,0,0.03))",
      hoverBg: isDark
        ? "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.08))"
        : "linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.06))",
      text: isDark ? "#E2E8F0" : "#334155",
      hoverText: isDark ? "#F8FAFC" : "#1E293B",
      border: "none",
      hoverBorder: "none",
      isGradient: true,
      css: `background: linear-gradient(135deg, ${isDark ? "rgba(255,255,255,0.08), rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06), rgba(0,0,0,0.03)"}); color: ${isDark ? "#E2E8F0" : "#334155"}; border-radius: 10px; padding: 10px 20px;`,
      hoverCss: `background: linear-gradient(135deg, ${isDark ? "rgba(255,255,255,0.12), rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1), rgba(0,0,0,0.06)"}); color: ${isDark ? "#F8FAFC" : "#1E293B"}; border-radius: 10px; padding: 10px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);`,
    },
    {
      name: "Outline",
      bg: "transparent",
      hoverBg: isDark ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0.05)",
      text: isDark ? "#94A3B8" : "#64748B",
      hoverText: isDark ? "#93C5FD" : "#3B82F6",
      border: "gradient",
      hoverBorder: "gradient",
      isGradient: false,
      css: `background: transparent; border: 1px solid; border-image: linear-gradient(135deg, #3B82F6, #8B5CF6) 1; border-radius: 10px; padding: 10px 20px;`,
      hoverCss: `background: ${isDark ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0.05)"}; border: 1px solid; border-image: linear-gradient(135deg, #2563EB, #7C3AED) 1; border-radius: 10px; padding: 10px 20px; color: ${isDark ? "#93C5FD" : "#3B82F6"}; box-shadow: 0 2px 10px rgba(59,130,246,0.15);`,
    },
    {
      name: "Ghost",
      bg: "transparent",
      hoverBg: isDark
        ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
        : "linear-gradient(135deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02))",
      text: isDark ? "#94A3B8" : "#64748B",
      hoverText: isDark ? "#E2E8F0" : "#334155",
      border: "none",
      hoverBorder: "none",
      isGradient: false,
      css: `background: transparent; color: ${isDark ? "#94A3B8" : "#64748B"}; border-radius: 10px; padding: 10px 20px;`,
      hoverCss: `background: linear-gradient(135deg, ${isDark ? "rgba(255,255,255,0.06), rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04), rgba(0,0,0,0.02)"}); color: ${isDark ? "#E2E8F0" : "#334155"}; border-radius: 10px; padding: 10px 20px;`,
    },
    {
      name: "Destructive",
      bg: "linear-gradient(135deg, #E11D48, #F43F5E)",
      hoverBg: "linear-gradient(135deg, #BE123C, #E11D48)",
      text: "#FFFFFF",
      hoverText: "#FFFFFF",
      border: "none",
      hoverBorder: "none",
      isGradient: true,
      css: `background: linear-gradient(135deg, #E11D48, #F43F5E); color: #FFFFFF; border-radius: 10px; padding: 10px 20px;`,
      hoverCss: `background: linear-gradient(135deg, #BE123C, #E11D48); color: #FFFFFF; border-radius: 10px; padding: 10px 20px; box-shadow: 0 4px 14px rgba(225,29,72,0.35);`,
    },
    {
      name: "Success",
      bg: "linear-gradient(135deg, #059669, #10B981)",
      hoverBg: "linear-gradient(135deg, #047857, #059669)",
      text: "#FFFFFF",
      hoverText: "#FFFFFF",
      border: "none",
      hoverBorder: "none",
      isGradient: true,
      css: `background: linear-gradient(135deg, #059669, #10B981); color: #FFFFFF; border-radius: 10px; padding: 10px 20px;`,
      hoverCss: `background: linear-gradient(135deg, #047857, #059669); color: #FFFFFF; border-radius: 10px; padding: 10px 20px; box-shadow: 0 4px 14px rgba(5,150,105,0.35);`,
    },
  ];

  return (
    <div className="space-y-8">
      <SectionLabel label="Buttons" isDark={isDark} />

      {/* Variants — Default */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          Variants — Default
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          {variants.map((v) => (
            <div key={v.name} className="group relative">
              {v.border === "gradient" ? (
                /* Outline variant with gradient border using a wrapper technique */
                <div
                  className="rounded-[10px] p-[1px] transition-all duration-200 hover:shadow-md active:scale-[0.97]"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  }}
                >
                  <button
                    className="px-5 py-2.5 rounded-[9px] text-[14px] w-full transition-all duration-200"
                    style={{
                      background: isDark ? "#0B0F1A" : "#FAFBFE",
                      color: v.text,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {v.name}
                  </button>
                </div>
              ) : (
                <button
                  className="px-5 py-2.5 rounded-[10px] text-[14px] transition-all duration-200 hover:shadow-md active:scale-[0.97]"
                  style={{
                    background: v.isGradient ? v.bg : undefined,
                    backgroundColor: !v.isGradient ? v.bg : undefined,
                    color: v.text,
                    borderWidth: v.border !== "none" && v.border !== "gradient" ? "1px" : 0,
                    borderStyle: v.border !== "none" && v.border !== "gradient" ? "solid" : "none",
                    borderColor: v.border !== "none" && v.border !== "gradient" ? v.border : "transparent",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {v.name}
                </button>
              )}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton
                  code={v.css}
                  id={`btn-${v.name}`}
                  copiedKey={copiedKey}
                  onCopy={copy}
                  isDark={isDark}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Variants — Hover */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          Variants — Hover
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          {variants.map((v) => (
            <div key={`hover-${v.name}`} className="group relative">
              {v.hoverBorder === "gradient" ? (
                <div
                  className="rounded-[10px] p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    boxShadow: "0 2px 10px rgba(59,130,246,0.15)",
                  }}
                >
                  <button
                    className="px-5 py-2.5 rounded-[9px] text-[14px] w-full"
                    style={{
                      background: isDark
                        ? `linear-gradient(135deg, rgba(59,130,246,0.08), rgba(59,130,246,0.04)), #0B0F1A`
                        : `linear-gradient(135deg, rgba(59,130,246,0.05), rgba(59,130,246,0.02)), #FAFBFE`,
                      color: v.hoverText,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {v.name}
                  </button>
                </div>
              ) : (
                <button
                  className="px-5 py-2.5 rounded-[10px] text-[14px]"
                  style={{
                    background: v.isGradient || v.name === "Ghost" ? v.hoverBg : undefined,
                    backgroundColor: !v.isGradient && v.name !== "Ghost" ? v.hoverBg : undefined,
                    color: v.hoverText,
                    boxShadow:
                      v.name === "Ghost"
                        ? "none"
                        : v.name === "Primary"
                          ? "0 4px 14px rgba(59,130,246,0.35)"
                          : v.name === "Destructive"
                            ? "0 4px 14px rgba(225,29,72,0.35)"
                            : v.name === "Success"
                              ? "0 4px 14px rgba(5,150,105,0.35)"
                              : "0 2px 8px rgba(0,0,0,0.1)",
                    borderWidth: 0,
                    borderStyle: "none",
                    borderColor: "transparent",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {v.name}
                </button>
              )}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton
                  code={v.hoverCss}
                  id={`btn-hover-${v.name}`}
                  copiedKey={copiedKey}
                  onCopy={copy}
                  isDark={isDark}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          Sizes
        </p>
        <div className="flex flex-wrap gap-3 items-end">
          {[
            { label: "Small", px: "px-3 py-1.5", text: "text-[12px]" },
            { label: "Medium", px: "px-5 py-2.5", text: "text-[14px]" },
            { label: "Large", px: "px-7 py-3.5", text: "text-[16px]" },
          ].map((s) => (
            <button
              key={s.label}
              className={`${s.px} ${s.text} rounded-[10px] transition-all duration-200 hover:shadow-md active:scale-[0.97]`}
              style={{
                background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          States
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <button
            className="px-5 py-2.5 rounded-[10px] text-[14px] transition-all hover:shadow-md"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366F1)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Default
          </button>
          <button
            className="px-5 py-2.5 rounded-[10px] text-[14px] opacity-50 cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366F1)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
            }}
            disabled
          >
            Disabled
          </button>
          <button
            className="px-5 py-2.5 rounded-[10px] text-[14px] flex items-center gap-2 transition-all hover:shadow-md"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366F1)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
            }}
            onClick={() => simulateLoading("state-loading")}
          >
            {loadingId === "state-loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Loading...
              </>
            ) : (
              "Click to Load"
            )}
          </button>
          <button
            className="px-5 py-2.5 rounded-[10px] text-[14px] flex items-center gap-2 transition-all hover:shadow-md"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6366F1)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
            }}
          >
            With Icon <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── INPUTS ──────────────────────────────────────────────
function InputShowcase({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();
  const [showPassword, setShowPassword] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const inputBase: React.CSSProperties = {
    backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    color: isDark ? "#E2E8F0" : "#1E293B",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
  };

  const inputCSS = `background: ${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)"}; border: 1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}; border-radius: 10px; padding: 10px 14px; font-size: 14px;`;

  return (
    <div className="space-y-8">
      <SectionLabel label="Inputs" isDark={isDark} />

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Default */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              className="text-[12px] tracking-wider uppercase"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#64748B" : "#94A3B8",
              }}
            >
              Default
            </label>
            <CopyButton
              code={inputCSS}
              id="input-default"
              copiedKey={copiedKey}
              onCopy={copy}
              isDark={isDark}
            />
          </div>
          <input
            type="text"
            placeholder="Enter text..."
            className="w-full px-3.5 py-2.5 rounded-[10px] outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]/40"
            style={inputBase}
          />
        </div>

        {/* With icon */}
        <div className="space-y-2">
          <label
            className="text-[12px] tracking-wider uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            With Icon
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: isDark ? "#64748B" : "#94A3B8" }}
            />
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full pl-10 pr-3.5 py-2.5 rounded-[10px] outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]/40"
              style={inputBase}
            />
          </div>
        </div>

        {/* Search */}
        <div className="space-y-2">
          <label
            className="text-[12px] tracking-wider uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            Search
          </label>
          <div className="relative">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: isDark ? "#64748B" : "#94A3B8" }}
            />
            <input
              type="text"
              placeholder="Search components..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-[10px] outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]/40"
              style={inputBase}
            />
            {searchValue && (
              <button
                onClick={() => setSearchValue("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2"
              >
                <X
                  className="w-4 h-4"
                  style={{ color: isDark ? "#64748B" : "#94A3B8" }}
                />
              </button>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            className="text-[12px] tracking-wider uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              defaultValue="anchovy123"
              className="w-full px-3.5 py-2.5 rounded-[10px] outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]/40"
              style={inputBase}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff
                  className="w-4 h-4"
                  style={{ color: isDark ? "#64748B" : "#94A3B8" }}
                />
              ) : (
                <Eye
                  className="w-4 h-4"
                  style={{ color: isDark ? "#64748B" : "#94A3B8" }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Error */}
        <div className="space-y-2">
          <label
            className="text-[12px] tracking-wider uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: "#E11D48",
            }}
          >
            Error State
          </label>
          <input
            type="text"
            defaultValue="invalid-email"
            className="w-full px-3.5 py-2.5 rounded-[10px] outline-none ring-2 ring-[#E11D48]/40"
            style={{
              ...inputBase,
              borderColor: "#E11D48",
            }}
          />
          <p className="text-[12px]" style={{ color: "#E11D48" }}>
            Please enter a valid email address.
          </p>
        </div>

        {/* Disabled */}
        <div className="space-y-2">
          <label
            className="text-[12px] tracking-wider uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            Disabled
          </label>
          <input
            type="text"
            value="Cannot edit this"
            disabled
            className="w-full px-3.5 py-2.5 rounded-[10px] outline-none opacity-50 cursor-not-allowed"
            style={inputBase}
          />
        </div>
      </div>
    </div>
  );
}

// ─── BADGES ──────────────────────────────────────────────
function BadgeShowcase({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();

  const badges = [
    { label: "Neural", bg: "rgba(59, 130, 246, 0.15)", text: "#3B82F6", border: "rgba(59, 130, 246, 0.3)" },
    { label: "Matrix", bg: "rgba(16, 185, 129, 0.15)", text: "#10B981", border: "rgba(16, 185, 129, 0.3)" },
    { label: "Signal", bg: "rgba(225, 29, 72, 0.15)", text: "#E11D48", border: "rgba(225, 29, 72, 0.3)" },
    { label: "Ember", bg: "rgba(249, 115, 22, 0.15)", text: "#F97316", border: "rgba(249, 115, 22, 0.3)" },
    { label: "Solar", bg: "rgba(234, 179, 8, 0.15)", text: "#EAB308", border: "rgba(234, 179, 8, 0.3)" },
    { label: "Logic", bg: "rgba(99, 102, 241, 0.15)", text: "#6366F1", border: "rgba(99, 102, 241, 0.3)" },
    { label: "Synapse", bg: "rgba(139, 92, 246, 0.15)", text: "#8B5CF6", border: "rgba(139, 92, 246, 0.3)" },
  ];

  return (
    <div className="space-y-8">
      <SectionLabel label="Badges" isDark={isDark} />

      {/* Filled */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          Subtle
        </p>
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b.label}
              className="px-3 py-1 rounded-full text-[12px] cursor-pointer transition-all hover:scale-105"
              style={{
                backgroundColor: b.bg,
                color: b.text,
                fontFamily: "Inter, sans-serif",
              }}
              onClick={() =>
                copy(
                  `background: ${b.bg}; color: ${b.text}; border-radius: 9999px; padding: 4px 12px;`,
                  `badge-${b.label}`
                )
              }
            >
              {copiedKey === `badge-${b.label}` ? "Copied!" : b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Outlined */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          Outlined
        </p>
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={`outline-${b.label}`}
              className="px-3 py-1 rounded-full text-[12px] cursor-pointer transition-all hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: b.text,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: b.border,
                fontFamily: "Inter, sans-serif",
              }}
              onClick={() =>
                copy(
                  `background: transparent; color: ${b.text}; border: 1px solid ${b.border}; border-radius: 9999px; padding: 4px 12px;`,
                  `badge-outline-${b.label}`
                )
              }
            >
              {copiedKey === `badge-outline-${b.label}` ? "Copied!" : b.label}
            </span>
          ))}
        </div>
      </div>

      {/* With icons & status */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          With Icons
        </p>
        <div className="flex flex-wrap gap-2">
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px]"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10B981" }}
          >
            <CheckCircle2 className="w-3 h-3" /> Active
          </span>
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px]"
            style={{ backgroundColor: "rgba(234, 179, 8, 0.15)", color: "#EAB308" }}
          >
            <AlertTriangle className="w-3 h-3" /> Pending
          </span>
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px]"
            style={{ backgroundColor: "rgba(225, 29, 72, 0.15)", color: "#E11D48" }}
          >
            <XCircle className="w-3 h-3" /> Inactive
          </span>
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px]"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.15)", color: "#3B82F6" }}
          >
            <Star className="w-3 h-3" /> Featured
          </span>
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px]"
            style={{ backgroundColor: "rgba(139, 92, 246, 0.15)", color: "#8B5CF6" }}
          >
            <Zap className="w-3 h-3" /> New
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── ALERTS ──────────────────────────────────────────────
function AlertShowcase({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const alerts = [
    {
      type: "info",
      icon: <Info className="w-5 h-5 shrink-0" />,
      title: "Information",
      message: "A new version of the design system is available. Check the changelog for details.",
      bg: "rgba(59, 130, 246, 0.08)",
      border: "rgba(59, 130, 246, 0.2)",
      iconColor: "#3B82F6",
      textColor: isDark ? "#93C5FD" : "#1D4ED8",
      bodyColor: isDark ? "#94A3B8" : "#64748B",
    },
    {
      type: "success",
      icon: <CheckCircle2 className="w-5 h-5 shrink-0" />,
      title: "Success",
      message: "Your component library has been successfully deployed to production.",
      bg: "rgba(16, 185, 129, 0.08)",
      border: "rgba(16, 185, 129, 0.2)",
      iconColor: "#10B981",
      textColor: isDark ? "#6EE7B7" : "#047857",
      bodyColor: isDark ? "#94A3B8" : "#64748B",
    },
    {
      type: "warning",
      icon: <AlertTriangle className="w-5 h-5 shrink-0" />,
      title: "Warning",
      message: "Some color tokens have been deprecated. Please migrate to the new naming convention.",
      bg: "rgba(234, 179, 8, 0.08)",
      border: "rgba(234, 179, 8, 0.2)",
      iconColor: "#EAB308",
      textColor: isDark ? "#FDE047" : "#A16207",
      bodyColor: isDark ? "#94A3B8" : "#64748B",
    },
    {
      type: "error",
      icon: <XCircle className="w-5 h-5 shrink-0" />,
      title: "Error",
      message: "Failed to load the font family. Check your network connection and try again.",
      bg: "rgba(225, 29, 72, 0.08)",
      border: "rgba(225, 29, 72, 0.2)",
      iconColor: "#E11D48",
      textColor: isDark ? "#FDA4AF" : "#BE123C",
      bodyColor: isDark ? "#94A3B8" : "#64748B",
    },
  ];

  const toggleDismiss = (type: string) => {
    setDismissed((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  return (
    <div className="space-y-8">
      <SectionLabel label="Alerts" isDark={isDark} />

      <div className="space-y-4">
        {alerts.map((a) => (
          <div key={a.type}>
            {dismissed.has(a.type) ? (
              <button
                onClick={() => toggleDismiss(a.type)}
                className="text-[12px] px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                  color: isDark ? "#64748B" : "#94A3B8",
                }}
              >
                Restore {a.title} Alert
              </button>
            ) : (
              <div
                className="flex items-start gap-3 p-4 rounded-xl border transition-all"
                style={{
                  backgroundColor: a.bg,
                  borderColor: a.border,
                }}
              >
                <div style={{ color: a.iconColor }}>{a.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p
                      className="text-[14px]"
                      style={{ color: a.textColor }}
                    >
                      {a.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <CopyButton
                        code={`background: ${a.bg}; border: 1px solid ${a.border}; border-radius: 12px; padding: 16px;`}
                        id={`alert-${a.type}`}
                        copiedKey={copiedKey}
                        onCopy={copy}
                        isDark={isDark}
                      />
                      <button
                        onClick={() => toggleDismiss(a.type)}
                        className="p-0.5 rounded transition-all hover:scale-110"
                      >
                        <X
                          className="w-3.5 h-3.5"
                          style={{ color: a.bodyColor }}
                        />
                      </button>
                    </div>
                  </div>
                  <p className="text-[13px]" style={{ color: a.bodyColor }}>
                    {a.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CARDS ───────────────────────────────────────────────
function CardShowcase({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();

  const cardBase: React.CSSProperties = {
    backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "#FFFFFF",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
  };

  const cardCSS = `background: ${isDark ? "rgba(255,255,255,0.03)" : "#FFFFFF"}; border: 1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}; border-radius: 16px; padding: 24px;`;

  return (
    <div className="space-y-8">
      <SectionLabel label="Cards" isDark={isDark} />

      <div className="grid sm:grid-cols-3 gap-6">
        {/* Basic Card */}
        <div className="rounded-2xl p-6 transition-all duration-200" style={cardBase}>
          <div className="flex items-center justify-between mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3B82F6, #6366F1)" }}
            >
              <Zap className="w-5 h-5 text-white" />
            </div>
            <CopyButton
              code={cardCSS}
              id="card-basic"
              copiedKey={copiedKey}
              onCopy={copy}
              isDark={isDark}
            />
          </div>
          <h4
            className="text-[15px] mb-2"
            style={{ color: isDark ? "#F1F5F9" : "#1E293B" }}
          >
            Basic Card
          </h4>
          <p
            className="text-[13px]"
            style={{ color: isDark ? "#94A3B8" : "#64748B", lineHeight: 1.6 }}
          >
            A simple content container with border and subtle background for grouping related information.
          </p>
        </div>

        {/* Interactive Card */}
        <div
          className="rounded-2xl p-6 transition-all duration-200 cursor-pointer hover:shadow-xl hover:scale-[1.02] group"
          style={cardBase}
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #10B981, #3B82F6)" }}
            >
              <Shield className="w-5 h-5 text-white" />
            </div>
            <ChevronRight
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              style={{ color: isDark ? "#64748B" : "#94A3B8" }}
            />
          </div>
          <h4
            className="text-[15px] mb-2"
            style={{ color: isDark ? "#F1F5F9" : "#1E293B" }}
          >
            Interactive Card
          </h4>
          <p
            className="text-[13px]"
            style={{ color: isDark ? "#94A3B8" : "#64748B", lineHeight: 1.6 }}
          >
            Hover to see the elevation and scale effect. Click to navigate to a detailed view.
          </p>
          <div className="flex gap-2 mt-4">
            <span
              className="px-2 py-0.5 rounded-full text-[11px]"
              style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10B981" }}
            >
              Interactive
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-[11px]"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.15)", color: "#3B82F6" }}
            >
              Hover
            </span>
          </div>
        </div>

        {/* Stat Card */}
        <div className="rounded-2xl p-6 transition-all duration-200" style={cardBase}>
          <div className="flex items-center justify-between mb-4">
            <p
              className="text-[12px] tracking-wider uppercase"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: isDark ? "#64748B" : "#94A3B8",
              }}
            >
              Total Users
            </p>
            <Star
              className="w-4 h-4"
              style={{ color: isDark ? "#64748B" : "#94A3B8" }}
            />
          </div>
          <p
            className="text-[32px] tracking-tight mb-1"
            style={{ color: isDark ? "#F8FAFC" : "#0F172A" }}
          >
            24,891
          </p>
          <div className="flex items-center gap-2">
            <span
              className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px]"
              style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10B981" }}
            >
              <ChevronRight className="w-3 h-3 -rotate-90" /> 12.5%
            </span>
            <span className="text-[12px]" style={{ color: isDark ? "#64748B" : "#94A3B8" }}>
              from last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TOGGLES & SWITCHES ─────────────────────────────────
function ToggleShowcase({ isDark }: { isDark: boolean }) {
  const [toggles, setToggles] = useState({
    notifications: true,
    darkMode: true,
    analytics: false,
    autoSave: true,
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const items = [
    { key: "notifications" as const, label: "Notifications", description: "Receive push notifications" },
    { key: "darkMode" as const, label: "Dark Mode", description: "Use dark interface theme" },
    { key: "analytics" as const, label: "Analytics", description: "Share usage analytics" },
    { key: "autoSave" as const, label: "Auto-save", description: "Save changes automatically" },
  ];

  return (
    <div className="space-y-8">
      <SectionLabel label="Toggles" isDark={isDark} />

      <div
        className="rounded-2xl border divide-y"
        style={{
          backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "#FFFFFF",
          borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
          ...(isDark
            ? { "--tw-divide-color": "rgba(255,255,255,0.06)" }
            : { "--tw-divide-color": "rgba(0,0,0,0.06)" }) as React.CSSProperties,
        }}
      >
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between px-5 py-4"
            style={{
              borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
            }}
          >
            <div>
              <p
                className="text-[14px]"
                style={{ color: isDark ? "#E2E8F0" : "#334155" }}
              >
                {item.label}
              </p>
              <p
                className="text-[12px] mt-0.5"
                style={{ color: isDark ? "#64748B" : "#94A3B8" }}
              >
                {item.description}
              </p>
            </div>
            <button
              onClick={() => toggle(item.key)}
              className="relative w-11 h-6 rounded-full transition-all duration-300 shrink-0"
              style={{
                backgroundColor: toggles[item.key] ? "#3B82F6" : isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)",
              }}
            >
              <div
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300"
                style={{
                  left: toggles[item.key] ? "calc(100% - 22px)" : "2px",
                }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SELECT / DROPDOWN ───────────────────────────────────
function SelectShowcase({ isDark }: { isDark: boolean }) {
  const [value, setValue] = useState("neural");

  const options = [
    { value: "signal", label: "Signal (Red)" },
    { value: "ember", label: "Ember (Orange)" },
    { value: "solar", label: "Solar (Yellow)" },
    { value: "matrix", label: "Matrix (Green)" },
    { value: "neural", label: "Neural (Blue)" },
    { value: "logic", label: "Logic (Indigo)" },
    { value: "synapse", label: "Synapse (Violet)" },
  ];

  return (
    <div className="space-y-8">
      <SectionLabel label="Select" isDark={isDark} />

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="text-[12px] tracking-wider uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            Color Family
          </label>
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-[10px] outline-none transition-all focus:ring-2 focus:ring-[#3B82F6]/40 appearance-none cursor-pointer"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              color: isDark ? "#E2E8F0" : "#1E293B",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='${isDark ? "%2394A3B8" : "%2364748B"}' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            className="text-[12px] tracking-wider uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            Disabled
          </label>
          <select
            disabled
            value="neural"
            className="w-full px-3.5 py-2.5 rounded-[10px] outline-none opacity-50 cursor-not-allowed appearance-none"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              color: isDark ? "#E2E8F0" : "#1E293B",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
            }}
          >
            <option value="neural">Neural (Blue)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// ─── RADIO BUTTONS ───────────────────────────────────────
function RadioShowcase({ isDark }: { isDark: boolean }) {
  const { copiedKey, copy } = useCopy();
  const [selectedColor, setSelectedColor] = useState("neural");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const radioCSS = `/* Radio outer */ width: 20px; height: 20px; border-radius: 50%; border: 2px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}; /* Selected */ border-color: #3B82F6; /* Inner dot */ width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(135deg, #3B82F6, #6366F1);`;

  const colorOptions = [
    { value: "signal", label: "Signal", color: "#E11D48" },
    { value: "matrix", label: "Matrix", color: "#10B981" },
    { value: "neural", label: "Neural", color: "#3B82F6" },
    { value: "synapse", label: "Synapse", color: "#8B5CF6" },
  ];

  const sizeOptions = [
    { value: "small", label: "Small", description: "Compact layout" },
    { value: "medium", label: "Medium", description: "Default size" },
    { value: "large", label: "Large", description: "Spacious layout" },
  ];

  const planOptions = [
    {
      value: "free",
      label: "Free",
      price: "$0",
      description: "Basic access to design tokens",
      features: ["7 color families", "Basic components"],
    },
    {
      value: "pro",
      label: "Pro",
      price: "$29",
      description: "Full design system access",
      features: ["All tokens", "Component library", "Priority support"],
    },
    {
      value: "enterprise",
      label: "Enterprise",
      price: "$99",
      description: "Custom theming & dedicated support",
      features: ["Custom themes", "API access", "Dedicated support", "SLA"],
    },
  ];

  return (
    <div className="space-y-8">
      <SectionLabel label="Radio Buttons" isDark={isDark} />

      {/* Default radio group */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p
            className="text-[11px] tracking-widest uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            Default
          </p>
          <CopyButton
            code={radioCSS}
            id="radio-default"
            copiedKey={copiedKey}
            onCopy={copy}
            isDark={isDark}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          {colorOptions.map((opt) => (
            <button
              key={opt.value}
              className="flex items-center gap-2.5 group"
              onClick={() => setSelectedColor(opt.value)}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor:
                    selectedColor === opt.value
                      ? opt.color
                      : isDark
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(0,0,0,0.2)",
                }}
              >
                {selectedColor === opt.value && (
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                    style={{ backgroundColor: opt.color }}
                  />
                )}
              </div>
              <span
                className="text-[14px] transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color:
                    selectedColor === opt.value
                      ? isDark
                        ? "#F1F5F9"
                        : "#1E293B"
                      : isDark
                        ? "#94A3B8"
                        : "#64748B",
                }}
              >
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Radio with descriptions */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          With Descriptions
        </p>
        <div className="space-y-3">
          {sizeOptions.map((opt) => (
            <button
              key={opt.value}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200"
              style={{
                backgroundColor:
                  selectedSize === opt.value
                    ? isDark
                      ? "rgba(59, 130, 246, 0.08)"
                      : "rgba(59, 130, 246, 0.04)"
                    : isDark
                      ? "rgba(255,255,255,0.02)"
                      : "rgba(0,0,0,0.01)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor:
                  selectedSize === opt.value
                    ? isDark
                      ? "rgba(59, 130, 246, 0.25)"
                      : "rgba(59, 130, 246, 0.2)"
                    : isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)",
              }}
              onClick={() => setSelectedSize(opt.value)}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor:
                    selectedSize === opt.value
                      ? "#3B82F6"
                      : isDark
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(0,0,0,0.15)",
                }}
              >
                {selectedSize === opt.value && (
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                    }}
                  />
                )}
              </div>
              <div>
                <p
                  className="text-[14px]"
                  style={{
                    color:
                      selectedSize === opt.value
                        ? isDark
                          ? "#F1F5F9"
                          : "#1E293B"
                        : isDark
                          ? "#E2E8F0"
                          : "#334155",
                  }}
                >
                  {opt.label}
                </p>
                <p
                  className="text-[12px] mt-0.5"
                  style={{ color: isDark ? "#64748B" : "#94A3B8" }}
                >
                  {opt.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Radio card group */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          Card Selection
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {planOptions.map((plan) => (
            <button
              key={plan.value}
              className="relative rounded-xl p-5 text-left transition-all duration-200 hover:scale-[1.02]"
              style={{
                backgroundColor:
                  selectedPlan === plan.value
                    ? isDark
                      ? "rgba(59, 130, 246, 0.08)"
                      : "rgba(59, 130, 246, 0.04)"
                    : isDark
                      ? "rgba(255,255,255,0.02)"
                      : "#FFFFFF",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor:
                  selectedPlan === plan.value
                    ? isDark
                      ? "rgba(59, 130, 246, 0.3)"
                      : "rgba(59, 130, 246, 0.25)"
                    : isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)",
              }}
              onClick={() => setSelectedPlan(plan.value)}
            >
              <div className="flex items-center justify-between mb-3">
                <p
                  className="text-[15px]"
                  style={{
                    color:
                      selectedPlan === plan.value
                        ? isDark
                          ? "#F1F5F9"
                          : "#1E293B"
                        : isDark
                          ? "#E2E8F0"
                          : "#334155",
                  }}
                >
                  {plan.label}
                </p>
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor:
                      selectedPlan === plan.value
                        ? "#3B82F6"
                        : isDark
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(0,0,0,0.15)",
                  }}
                >
                  {selectedPlan === plan.value && (
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                      }}
                    />
                  )}
                </div>
              </div>
              <p
                className="text-[22px] tracking-tight mb-1"
                style={{ color: isDark ? "#F8FAFC" : "#0F172A" }}
              >
                {plan.price}
                <span
                  className="text-[12px] ml-1"
                  style={{ color: isDark ? "#64748B" : "#94A3B8" }}
                >
                  /mo
                </span>
              </p>
              <p
                className="text-[12px] mb-3"
                style={{ color: isDark ? "#64748B" : "#94A3B8" }}
              >
                {plan.description}
              </p>
              <div className="space-y-1.5">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-3 h-3 shrink-0"
                      style={{
                        color:
                          selectedPlan === plan.value
                            ? "#3B82F6"
                            : isDark
                              ? "#475569"
                              : "#CBD5E1",
                      }}
                    />
                    <span
                      className="text-[12px]"
                      style={{
                        color:
                          selectedPlan === plan.value
                            ? isDark
                              ? "#94A3B8"
                              : "#64748B"
                            : isDark
                              ? "#475569"
                              : "#CBD5E1",
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <p
          className="text-[11px] tracking-widest uppercase"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: isDark ? "#64748B" : "#94A3B8",
          }}
        >
          States
        </p>
        <div className="flex flex-wrap gap-5">
          {/* Selected */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "#3B82F6",
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                }}
              />
            </div>
            <span
              className="text-[14px]"
              style={{
                fontFamily: "Inter, sans-serif",
                color: isDark ? "#F1F5F9" : "#1E293B",
              }}
            >
              Selected
            </span>
          </div>
          {/* Unselected */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-5 h-5 rounded-full"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: isDark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.2)",
              }}
            />
            <span
              className="text-[14px]"
              style={{
                fontFamily: "Inter, sans-serif",
                color: isDark ? "#94A3B8" : "#64748B",
              }}
            >
              Unselected
            </span>
          </div>
          {/* Disabled selected */}
          <div className="flex items-center gap-2.5 opacity-50 cursor-not-allowed">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "#3B82F6",
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                }}
              />
            </div>
            <span
              className="text-[14px]"
              style={{
                fontFamily: "Inter, sans-serif",
                color: isDark ? "#F1F5F9" : "#1E293B",
              }}
            >
              Disabled (On)
            </span>
          </div>
          {/* Disabled unselected */}
          <div className="flex items-center gap-2.5 opacity-50 cursor-not-allowed">
            <div
              className="w-5 h-5 rounded-full"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: isDark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.2)",
              }}
            />
            <span
              className="text-[14px]"
              style={{
                fontFamily: "Inter, sans-serif",
                color: isDark ? "#94A3B8" : "#64748B",
              }}
            >
              Disabled (Off)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────
export function ComponentLibrary({ isDark }: { isDark: boolean }) {
  return (
    <section className="mb-20 sm:mb-28">
      {/* Section header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-baseline gap-3 mb-2">
          <h2
            className="text-[28px] sm:text-[32px] tracking-tight"
            style={{ color: isDark ? "#F8FAFC" : "#0F172A" }}
          >
            Component Library
          </h2>
          <span
            className="text-sm tracking-widest uppercase"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: isDark ? "#64748B" : "#94A3B8",
            }}
          >
            UI PRIMITIVES
          </span>
        </div>
        <p
          className="max-w-2xl text-[15px]"
          style={{ color: isDark ? "#94A3B8" : "#64748B" }}
        >
          Interactive, live-rendered UI components built with the Anchovy color system.
          Each component adapts to dark and light modes and includes click-to-copy CSS.
        </p>
      </div>

      {/* Component sections */}
      <div className="space-y-16">
        <ButtonShowcase isDark={isDark} />
        <InputShowcase isDark={isDark} />
        <BadgeShowcase isDark={isDark} />
        <AlertShowcase isDark={isDark} />
        <CardShowcase isDark={isDark} />
        <ToggleShowcase isDark={isDark} />
        <SelectShowcase isDark={isDark} />
        <RadioShowcase isDark={isDark} />
      </div>

      {/* Best Practices */}
      <div
        className="mt-16 rounded-2xl p-6 sm:p-8 border"
        style={{
          backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)",
          borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
        }}
      >
        <h3
          className="text-[17px] mb-4"
          style={{ color: isDark ? "#E2E8F0" : "#334155" }}
        >
          Component Best Practices
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Consistency",
              description: "Use the same button variant for the same action type across the entire application. Primary for main CTAs, destructive for irreversible actions.",
            },
            {
              title: "Accessibility",
              description: "All interactive components maintain a minimum 3:1 contrast ratio. Focus states use a visible ring indicator. Disabled states reduce opacity to 50%.",
            },
            {
              title: "Spacing",
              description: "Maintain consistent padding within components. Buttons use 10px 20px for medium, inputs use 10px 14px. Card padding is 24px on all sides.",
            },
            {
              title: "Responsiveness",
              description: "Components are designed to work across all viewport sizes. Input grids collapse to single column on mobile. Button groups wrap naturally.",
            },
          ].map((practice) => (
            <div key={practice.title}>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
                />
                <p
                  className="text-[14px]"
                  style={{ color: isDark ? "#E2E8F0" : "#334155" }}
                >
                  {practice.title}
                </p>
              </div>
              <p
                className="text-[13px] ml-4"
                style={{ color: isDark ? "#64748B" : "#94A3B8", lineHeight: 1.7 }}
              >
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}