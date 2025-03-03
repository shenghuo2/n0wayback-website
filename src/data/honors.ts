export interface Honor {
  id: string;
  name: string;
  date: string;
  rank: string;
  description: string;
  image?: string;
  challenges?: string[];
  ctftime?: string;
  link?: string;
}

export const honors: Honor[] = [
  {
    id: "honor1",
    name: "DEFCON CTF 2025",
    date: "2025-08-12",
    rank: "3rd Place",
    description: "Achieved 3rd place in DEFCON CTF, the world's most prestigious hacking competition, demonstrating the team's comprehensive strength across various security domains.",
    image: "/images/honors/defcon.jpg",
    challenges: ["Kernel Exploitation", "IoT Security", "Advanced Web Vulnerabilities"],
    ctftime: "https://ctftime.org/event/future-defcon-2025",
    link: "https://www.defcon.org"
  },
  {
    id: "honor2",
    name: "TCTF 2024",
    date: "2024-12-05",
    rank: "1st Place",
    description: "Secured 1st place in TCTF 2024, successfully solving all Web and Crypto challenges.",
    image: "/images/honors/tctf.jpg",
    challenges: ["AES Breaking", "API Token Forgery", "WebAssembly Exploitation"],
    ctftime: "https://ctftime.org/event/future-tctf-2024",
    link: "https://tctf.io"
  },
  {
    id: "honor3",
    name: "RealWorld CTF 2024",
    date: "2024-07-22",
    rank: "2nd Place",
    description: "Earned 2nd place in RealWorld CTF 2024, with exceptional performance in PWN and Reverse Engineering challenges.",
    image: "/images/honors/realworld.jpg",
    challenges: ["VM Escape", "Firmware Analysis", "Embedded Security"],
    ctftime: "https://ctftime.org/event/future-realworld-2024",
    link: "https://realworldctf.com"
  },
  {
    id: "honor4",
    name: "0CTF 2024",
    date: "2024-04-18",
    rank: "Top 10",
    description: "Ranked among the top 10 in 0CTF 2024, demonstrating strong capabilities across multiple domains.",
    image: "/images/honors/0ctf.jpg",
    challenges: ["Binary Analysis", "Custom Protocol Exploitation", "Mobile Security"],
    ctftime: "https://ctftime.org/event/future-0ctf-2024",
    link: "https://ctf.0ops.sjtu.cn/"
  },
  {
    id: "honor5",
    name: "HITCON CTF 2023",
    date: "2023-11-25",
    rank: "5th Place",
    description: "Placed 5th in HITCON CTF 2023, with outstanding achievements particularly in Web and Crypto challenges.",
    image: "/images/honors/hitcon.jpg",
    challenges: ["Browser Exploitation", "Supply Chain Attack", "Cryptographic Primitives"],
    ctftime: "https://ctftime.org/event/past-hitcon-2023",
    link: "https://ctf.hitcon.org/"
  },
];