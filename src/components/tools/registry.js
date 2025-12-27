import { Fingerprint, FileJson, Palette, Type, Box } from "lucide-react";

// Import Tool Components (We will create these next)
import UUIDGenerator from "./features/UUIDGenerator";
import JSONFormatter from "./features/JSONFormatter";
import ColorConverter from "./features/ColorConverter";

export const toolsRegistry = [
  {
    id: "uuid-generator",
    title: "UUID Generator",
    description: "Generate random UUIDs (v4) instantly for your applications.",
    icon: Fingerprint,
    path: "/tools/uuid-generator",
    component: UUIDGenerator,
    category: "Development",
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Validate, format, and prettify your JSON data.",
    icon: FileJson,
    path: "/tools/json-formatter",
    component: JSONFormatter,
    category: "Data",
  },
  {
    id: "color-converter",
    title: "Color Converter",
    description: "Convert colors between HEX, RGB, and HSL formats.",
    icon: Palette,
    path: "/tools/color-converter",
    component: ColorConverter,
    category: "Design",
  },
  {
    id: "lorem-ipsum",
    title: "Lorem Ipsum",
    description: "Generate placeholder text for your designs.",
    icon: Type,
    path: "/tools/lorem-ipsum",
    component: () => <div className="p-10 text-center">Coming Soon...</div>,
    category: "Content",
  },
];
