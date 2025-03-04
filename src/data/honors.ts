export interface Honor {
  id: string;
  name: string;
  date: string;
  rank: string;
  isMilestone?: boolean;
}

export const honors: Honor[] = [
  {
    id: "honor1",
    name: "N0wayBack Team Established",
    date: "2022-11-11",
    rank: "Milestone",
    isMilestone: true
  },
  {
    id: "honor2",
    name: "CyberSec Cup 2022 Online Qualifier",
    date: "2022-11-27",
    rank: "3rd Place",
  },
  {
    id: "honor3",
    name: "First CTF Competition",
    date: "2022-11-27",
    rank: "Milestone",
    isMilestone: true
  },
  {
    id: "honor4",
    name: "National CTF 2022",
    date: "2022-12-04",
    rank: "3rd Place",
  },
  {
    id: "honor5",
    name: "Regional Security Challenge",
    date: "2022-12-09",
    rank: "1st Place",
  },
  {
    id: "honor6",
    name: "CyberSec Cup 2022 Finals",
    date: "2022-12-14",
    rank: "Bronze Award",
  },
  {
    id: "honor7",
    name: "International Hacking Competition",
    date: "2023-03-15",
    rank: "Top 10",
  },
  {
    id: "honor8",
    name: "University CTF Championship",
    date: "2023-05-20",
    rank: "2nd Place",
  },
  {
    id: "honor9",
    name: "100th CTF Challenge Completed",
    date: "2023-08-01",
    rank: "Milestone",
    isMilestone: true
  },
  {
    id: "honor10",
    name: "Global Security Conference CTF",
    date: "2023-10-12",
    rank: "Silver Award",
  },
  {
    id: "honor11",
    name: "National Cyber Defense Exercise",
    date: "2024-01-25",
    rank: "Top Team",
  },
  {
    id: "honor12",
    name: "Annual Achievements Recognition",
    date: "2024-02-28",
    rank: "Most Improved Team",
  }
];