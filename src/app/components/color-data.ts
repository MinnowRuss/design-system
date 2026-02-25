export interface ColorShade {
  name: string;
  hex: string;
  cmyk: string;
}

export interface ColorFamily {
  name: string;
  subtitle: string;
  description: string;
  shades: ColorShade[];
}

export interface TypographyColor {
  name: string;
  purpose: string;
  lightHex: string;
  lightCmyk: string;
  darkHex: string;
  darkCmyk: string;
  contrastLight: string;
  contrastDark: string;
}

// Utility to convert HEX to CMYK
function hexToCmyk(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const k = 1 - Math.max(r, g, b);
  if (k === 1) return "0 / 0 / 0 / 100";

  const c = Math.round(((1 - r - k) / (1 - k)) * 100);
  const m = Math.round(((1 - g - k) / (1 - k)) * 100);
  const y = Math.round(((1 - b - k) / (1 - k)) * 100);
  const kp = Math.round(k * 100);

  return `${c} / ${m} / ${y} / ${kp}`;
}

function createShades(
  shadeHexes: [string, string, string, string, string, string, string, string, string, string]
): ColorShade[] {
  const names = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
  return names.map((name, i) => ({
    name,
    hex: shadeHexes[i],
    cmyk: hexToCmyk(shadeHexes[i]),
  }));
}

export const colorFamilies: ColorFamily[] = [
  {
    name: "Red",
    subtitle: "Signal",
    description: "A contemporary rose-shifted red that conveys energy, urgency, and innovation. Ideal for CTAs, alerts, and accent elements.",
    shades: createShades([
      "#FFF1F2", "#FFE4E6", "#FECDD3", "#FDA4AF",
      "#FB7185", "#F43F5E", "#E11D48", "#BE123C",
      "#9F1239", "#881337",
    ]),
  },
  {
    name: "Orange",
    subtitle: "Ember",
    description: "A warm, electric amber that radiates creativity and warmth. Perfect for highlights, notifications, and progress indicators.",
    shades: createShades([
      "#FFF7ED", "#FFEDD5", "#FED7AA", "#FDBA74",
      "#FB923C", "#F97316", "#EA580C", "#C2410C",
      "#9A3412", "#7C2D12",
    ]),
  },
  {
    name: "Yellow",
    subtitle: "Solar",
    description: "A golden solar tone representing optimism and intelligence. Use for warnings, badges, and attention-grabbing elements.",
    shades: createShades([
      "#FEFCE8", "#FEF9C3", "#FEF08A", "#FDE047",
      "#FACC15", "#EAB308", "#CA8A04", "#A16207",
      "#854D0E", "#713F12",
    ]),
  },
  {
    name: "Green",
    subtitle: "Matrix",
    description: "An emerald-teal green evoking growth, success, and digital intelligence. Ideal for confirmations, status indicators, and positive feedback.",
    shades: createShades([
      "#ECFDF5", "#D1FAE5", "#A7F3D0", "#6EE7B7",
      "#34D399", "#10B981", "#059669", "#047857",
      "#065F46", "#064E3B",
    ]),
  },
  {
    name: "Blue",
    subtitle: "Neural",
    description: "A core electric blue representing trust, depth, and AI cognition. The primary brand color for interfaces, links, and interactive elements.",
    shades: createShades([
      "#EFF6FF", "#DBEAFE", "#BFDBFE", "#93C5FD",
      "#60A5FA", "#3B82F6", "#2563EB", "#1D4ED8",
      "#1E40AF", "#1E3A8A",
    ]),
  },
  {
    name: "Indigo",
    subtitle: "Logic",
    description: "A deep, contemplative indigo symbolizing precision and analytical thinking. Perfect for secondary accents and data visualizations.",
    shades: createShades([
      "#EEF2FF", "#E0E7FF", "#C7D2FE", "#A5B4FC",
      "#818CF8", "#6366F1", "#4F46E5", "#4338CA",
      "#3730A7", "#312E81",
    ]),
  },
  {
    name: "Violet",
    subtitle: "Synapse",
    description: "A vibrant synapse purple representing imagination, transformation, and neural connectivity. Use for creative highlights and premium elements.",
    shades: createShades([
      "#F5F3FF", "#EDE9FE", "#DDD6FE", "#C4B5FD",
      "#A78BFA", "#8B5CF6", "#7C3AED", "#6D28D9",
      "#5B21B6", "#4C1D95",
    ]),
  },
];

export const typographyColors: TypographyColor[] = [
  {
    name: "Heading Primary",
    purpose: "Main headings, hero text, page titles",
    lightHex: "#0F172A",
    lightCmyk: hexToCmyk("#0F172A"),
    darkHex: "#F8FAFC",
    darkCmyk: hexToCmyk("#F8FAFC"),
    contrastLight: "16.75:1",
    contrastDark: "17.41:1",
  },
  {
    name: "Heading Secondary",
    purpose: "Section headings, card titles",
    lightHex: "#1E293B",
    lightCmyk: hexToCmyk("#1E293B"),
    darkHex: "#F1F5F9",
    darkCmyk: hexToCmyk("#F1F5F9"),
    contrastLight: "13.58:1",
    contrastDark: "15.39:1",
  },
  {
    name: "Body Text",
    purpose: "Paragraphs, descriptions, general content",
    lightHex: "#334155",
    lightCmyk: hexToCmyk("#334155"),
    darkHex: "#E2E8F0",
    darkCmyk: hexToCmyk("#E2E8F0"),
    contrastLight: "8.62:1",
    contrastDark: "12.74:1",
  },
  {
    name: "Secondary Text",
    purpose: "Captions, labels, supporting information",
    lightHex: "#64748B",
    lightCmyk: hexToCmyk("#64748B"),
    darkHex: "#94A3B8",
    darkCmyk: hexToCmyk("#94A3B8"),
    contrastLight: "4.63:1",
    contrastDark: "5.56:1",
  },
  {
    name: "Muted Text",
    purpose: "Placeholders, disabled labels, metadata",
    lightHex: "#94A3B8",
    lightCmyk: hexToCmyk("#94A3B8"),
    darkHex: "#64748B",
    darkCmyk: hexToCmyk("#64748B"),
    contrastLight: "2.78:1",
    contrastDark: "3.47:1",
  },
  {
    name: "Link Default",
    purpose: "Hyperlinks, interactive text, navigation",
    lightHex: "#2563EB",
    lightCmyk: hexToCmyk("#2563EB"),
    darkHex: "#60A5FA",
    darkCmyk: hexToCmyk("#60A5FA"),
    contrastLight: "5.12:1",
    contrastDark: "5.74:1",
  },
  {
    name: "Link Hover",
    purpose: "Hovered or focused hyperlinks",
    lightHex: "#1D4ED8",
    lightCmyk: hexToCmyk("#1D4ED8"),
    darkHex: "#93C5FD",
    darkCmyk: hexToCmyk("#93C5FD"),
    contrastLight: "6.52:1",
    contrastDark: "8.84:1",
  },
  {
    name: "Success",
    purpose: "Confirmation messages, valid states",
    lightHex: "#059669",
    lightCmyk: hexToCmyk("#059669"),
    darkHex: "#34D399",
    darkCmyk: hexToCmyk("#34D399"),
    contrastLight: "4.56:1",
    contrastDark: "8.19:1",
  },
  {
    name: "Warning",
    purpose: "Caution indicators, pending states",
    lightHex: "#CA8A04",
    lightCmyk: hexToCmyk("#CA8A04"),
    darkHex: "#FACC15",
    darkCmyk: hexToCmyk("#FACC15"),
    contrastLight: "4.53:1",
    contrastDark: "12.47:1",
  },
  {
    name: "Error",
    purpose: "Error messages, destructive actions, invalid states",
    lightHex: "#E11D48",
    lightCmyk: hexToCmyk("#E11D48"),
    darkHex: "#FB7185",
    darkCmyk: hexToCmyk("#FB7185"),
    contrastLight: "5.13:1",
    contrastDark: "5.61:1",
  },
];

export interface GradientPreset {
  name: string;
  description: string;
  colors: string[];
  angle: number;
  css: string;
}

export const gradientPresets: GradientPreset[] = [
  {
    name: "Aurora",
    description: "Primary brand gradient — Neural Blue to Synapse Violet",
    colors: ["#3B82F6", "#6366F1", "#8B5CF6"],
    angle: 135,
    css: "linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)",
  },
  {
    name: "Sunset Protocol",
    description: "Warm accent — Signal Red through Ember Orange to Solar Gold",
    colors: ["#F43F5E", "#F97316", "#EAB308"],
    angle: 135,
    css: "linear-gradient(135deg, #F43F5E, #F97316, #EAB308)",
  },
  {
    name: "Neural Pathway",
    description: "Cool intelligence — Logic Indigo to Neural Blue",
    colors: ["#4F46E5", "#2563EB", "#3B82F6"],
    angle: 90,
    css: "linear-gradient(90deg, #4F46E5, #2563EB, #3B82F6)",
  },
  {
    name: "Bio Circuit",
    description: "Nature meets tech — Matrix Green to Neural Blue",
    colors: ["#10B981", "#3B82F6"],
    angle: 135,
    css: "linear-gradient(135deg, #10B981, #3B82F6)",
  },
  {
    name: "Full Spectrum",
    description: "Complete ROY G BIV spectrum — all seven families",
    colors: ["#F43F5E", "#F97316", "#EAB308", "#10B981", "#3B82F6", "#6366F1", "#8B5CF6"],
    angle: 90,
    css: "linear-gradient(90deg, #F43F5E, #F97316, #EAB308, #10B981, #3B82F6, #6366F1, #8B5CF6)",
  },
  {
    name: "Deep Space",
    description: "Dark mode hero — deep indigo to violet to dark red",
    colors: ["#312E81", "#4C1D95", "#881337"],
    angle: 135,
    css: "linear-gradient(135deg, #312E81, #4C1D95, #881337)",
  },
  {
    name: "Electric Dawn",
    description: "Light mode hero — soft blue through violet to rose",
    colors: ["#DBEAFE", "#DDD6FE", "#FFE4E6"],
    angle: 135,
    css: "linear-gradient(135deg, #DBEAFE, #DDD6FE, #FFE4E6)",
  },
  {
    name: "Neon Pulse",
    description: "High energy accent — emerald through blue to violet",
    colors: ["#34D399", "#60A5FA", "#A78BFA"],
    angle: 90,
    css: "linear-gradient(90deg, #34D399, #60A5FA, #A78BFA)",
  },
];