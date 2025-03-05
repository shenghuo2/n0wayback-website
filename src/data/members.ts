export interface Member {
  id: string;
  name: string;
  avatar: string;
  link?: string;
  github?: string;
  bio?: string;
  skills?: string[];
  category?: 'leader' | 'active' | 'pioneers';
}

export const members: Member[] = [
  // Team Leaders
  {
    id: "alpha",
    name: "Alpha",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Team leader and security researcher. Specializes in binary exploitation.",
    skills: ["Pwn", "Binary Exploitation", "Team Leadership"],
    category: "leader"
  },
  {
    id: "bravo",
    name: "Bravo",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Full-stack developer with expertise in secure application design",
    skills: ["Full-stack", "Secure Development"],
    category: "leader"
  },
  {
    id: "charlie",
    name: "Charlie",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Reverse engineering specialist with focus on malware analysis",
    skills: ["Reverse Engineering", "Malware Analysis"],
    category: "leader"
  },
  {
    id: "delta",
    name: "Delta",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Cryptography expert and mathematics enthusiast",
    skills: ["Cryptography", "Mathematics"],
    category: "leader"
  },
  {
    id: "echo",
    name: "Echo",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Web security specialist and bug bounty hunter",
    skills: ["Web Security", "Bug Bounty"],
    category: "leader"
  },
  
  // Pioneers - Experienced members
  {
    id: "foxtrot",
    name: "Foxtrot",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Forensics specialist and CTF tool developer",
    skills: ["Digital Forensics", "Tool Development"],
    category: "pioneers"
  },
  {
    id: "golf",
    name: "Golf",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    bio: "Binary exploitation expert with focus on kernel vulnerabilities",
    skills: ["Pwn", "Kernel Exploitation"],
    category: "pioneers"
  },
  {
    id: "hotel",
    name: "Hotel",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    bio: "Reverse engineering specialist with hardware security background",
    skills: ["Reverse Engineering", "Hardware Security"],
    category: "pioneers"
  },
  {
    id: "india",
    name: "India",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    bio: "Specializes in firmware analysis and embedded systems security",
    skills: ["Firmware Analysis", "Embedded Security"],
    category: "pioneers"
  },
  {
    id: "juliet",
    name: "Juliet",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    bio: "Network security specialist with focus on protocol vulnerabilities",
    skills: ["Network Security", "Protocol Analysis"],
    category: "pioneers"
  },
  
  // Active Members - Regular contributors
  {
    id: "kilo",
    name: "Kilo",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Red team operator with offensive security expertise",
    skills: ["Red Team", "Penetration Testing"],
    category: "active"
  },
  {
    id: "lima",
    name: "Lima",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Reverse engineering enthusiast focusing on anti-cheat systems",
    skills: ["Reverse Engineering", "Game Security"],
    category: "active"
  },
  {
    id: "mike",
    name: "Mike",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    bio: "Binary exploitation researcher with interest in heap exploitation",
    skills: ["Pwn", "Heap Exploitation"],
    category: "active"
  },
  {
    id: "november",
    name: "November",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    bio: "Web security specialist with focus on modern frameworks",
    skills: ["Web Security", "Modern Frameworks"],
    category: "active"
  },
  {
    id: "oscar",
    name: "Oscar",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    link: "https://blog.example.com",
    github: "oscar",
    bio: "Full-stack developer and miscellaneous challenge solver",
    skills: ["Full-stack", "Misc"],
    category: "active"
  }
];
