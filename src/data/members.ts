export interface Member {
  id: string;
  name: string;
  avatar: string;
  link?: string;
  bio?: string;
  skills?: string[];
}

export const members: Member[] = [
  {
    id: "member1",
    name: "Hacker01",
    avatar: "https://avatars.githubusercontent.com/u/1?v=4",
    link: "https://github.com/",
    bio: "Web security expert, specializing in vulnerability discovery and exploitation",
    skills: ["Web", "Pwn", "Pentest"]
  },
  {
    id: "member2",
    name: "ByteBreaker",
    avatar: "https://avatars.githubusercontent.com/u/2?v=4",
    link: "https://github.com/",
    bio: "Binary security researcher and reverse engineering enthusiast",
    skills: ["Reverse", "PWN", "Malware Analysis"]
  },
  {
    id: "member3",
    name: "CryptoNinja",
    avatar: "https://avatars.githubusercontent.com/u/3?v=4",
    bio: "Cryptography expert with deep research in blockchain security",
    skills: ["Crypto", "Blockchain", "Math"]
  },
  {
    id: "member4",
    name: "NetHunter",
    avatar: "https://avatars.githubusercontent.com/u/4?v=4",
    link: "https://github.com/",
    skills: ["Network", "OSINT", "Forensics"]
  },
  {
    id: "member5",
    name: "BugSlayer",
    avatar: "https://avatars.githubusercontent.com/u/5?v=4",
    bio: "Full-stack developer and security researcher, expert in code auditing",
    skills: ["Web", "Development", "Code Audit"]
  },
  {
    id: "member6",
    name: "Phantom",
    avatar: "https://avatars.githubusercontent.com/u/6?v=4",
    link: "https://github.com/",
    bio: "Hardware security researcher and IoT device hacking expert",
    skills: ["Hardware", "IoT", "RF"]
  },
];
