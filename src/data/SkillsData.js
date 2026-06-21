import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiWordpress,
  SiElementor,
} from "react-icons/si";

import {
  Search,
  Palette,
  Image,
  Clapperboard,
} from "lucide-react";

export const skills = [
  {
    category: "Développement",
    items: [
      {
        id: 1,
        title: "Next.js",
        percentage: 85,
        icon: SiNextdotjs,
      },
      {
        id: 2,
        title: "React",
        percentage: 80,
        icon: SiReact,
      },
      {
        id: 3,
        title: "JavaScript",
        percentage: 80,
        icon: SiJavascript,
      },
      {
        id: 4,
        title: "Tailwind CSS",
        percentage: 90,
        icon: SiTailwindcss,
      },
    ],
  },
  {
    category: "Design & création",
    items: [
      {
        id: 5,
        title: "Framer Motion",
        percentage: 75,
        icon: SiFramer,
      },
      {
        id: 6,
        title: "Photoshop",
        percentage: 85,
        icon: Image,
      },
      {
        id: 7,
        title: "Illustrator",
        percentage: 70,
        icon: Palette,
      },
      {
        id: 8,
        title: "Premiere Pro",
        percentage: 80,
        icon: Clapperboard,
      },
    ],
  },
  {
    category: "Web & visibilité",
    items: [
      {
        id: 9,
        title: "WordPress",
        percentage: 95,
        icon: SiWordpress,
      },
      {
        id: 10,
        title: "Elementor",
        percentage: 95,
        icon: SiElementor,
      },
      {
        id: 11,
        title: "SEO",
        percentage: 90,
        icon: Search,
      },
      {
        id: 12,
        title: "UX/UI Design",
        percentage: 80,
        icon: Palette,
      },
    ],
  },
];