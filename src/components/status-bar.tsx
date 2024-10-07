import Link from "next/link";
import Facebook from "@/assets/brands/facebook.svg";
import Instagram from "@/assets/brands/instagram.svg";
import X from "@/assets/brands/x.svg";
import TikTok from "@/assets/brands/tiktok.svg";
import { Anchor } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <Facebook className="social-icon" />
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <Instagram className="social-icon" />
  },
  {
    name: "X",
    url: "https://x.com",
    icon: <X className="social-icon" />
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: <TikTok className="social-icon" />
  }
];

const StatusBar = () => {
  return (
    <div className="h-12 bg-gray-800">
      <div className="flex h-full justify-between items-center px-16 text-white">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link href={link.url} key={link.name}>
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Anchor className="size-4" />
          Free shipping on orders over $50
        </div>
        <div className="flex items-center">dropdown</div>
      </div>
    </div>
  );
};

export default StatusBar;
