"use client";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const platforms = [
  {
    name: "Facebook",
    url: (link: string) => `https://www.facebook.com/sharer/sharer.php?u=${link}`,
    icon: Facebook,
  },
  {
    name: "Twitter",
    url: (link: string) => `https://twitter.com/intent/tweet?url=${link}`,
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    url: (link: string) => `https://www.linkedin.com/shareArticle?url=${link}`,
    icon: Linkedin,
  },
];

export function ShareButtons() {
  const link = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center p-2 mt-6">
      <p className="text-sm font-semibold text-gray-600">Share this tool:</p>
      {platforms.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url(link)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm px-2 py-1 rounded-md hover:bg-gray-100 border border-gray-200"
        >
          <Icon size={14} /> {name}
        </a>
      ))}
    </div>
  );
}
