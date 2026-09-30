import { ChevronRight } from "lucide-react";
import { LinkItem } from "@/data/profile";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

interface LinkCardProps {
  link: LinkItem;
}

export function LinkCard({ link }: LinkCardProps) {
  if (!link.isActive) return null;

  if (link.type === "header") {
    return (
      <div className="pt-5 pb-2 px-1">
        <h4 className="text-[14px] font-bold text-[#4e5968]">{link.title}</h4>
      </div>
    );
  }

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case "github": return <GithubIcon className="w-5 h-5 text-[#333d4b]" />;
      case "linkedin": return <LinkedinIcon className="w-5 h-5 text-[#333d4b]" />;
      case "instagram": return <InstagramIcon className="w-5 h-5 text-[#333d4b]" />;
      default: return <span className="text-[18px]">📝</span>;
    }
  };

  if (link.type === "highlight") {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-between p-4 my-2 rounded-[16px] border border-[#e5e8eb] shadow-tds-1 overflow-hidden transition-transform active:scale-[0.98] group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50 pointer-events-none" />
        <div className="relative flex items-center gap-3.5 z-10">
          <div className="w-10 h-10 rounded-[12px] bg-white border border-[#e5e8eb] flex items-center justify-center flex-shrink-0 shadow-sm">
            {renderIcon(link.iconName)}
          </div>
          <div>
            <p className="text-[15px] font-semibold text-[#191f28]">
              {link.title}
            </p>
            {link.subtitle && (
              <p className="text-[12px] text-[#4e5968] mt-0.5">
                {link.subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="relative z-10 flex items-center gap-2">
          {link.badgeText && (
            <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#f04452] text-[11px] font-bold tracking-wide">
              {link.badgeText}
            </span>
          )}
          <ChevronRight className="w-4 h-4 text-[#b0b8c1] group-hover:text-[#191f28]" />
        </div>
        {/* Glow animation */}
        <div className="absolute inset-0 bg-white/40 animate-pulse pointer-events-none" />
      </a>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between p-3.5 hover:bg-[#f9fafb] active:bg-[#f2f4f6] rounded-[16px] transition-colors group"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-[12px] bg-[#f2f4f6] group-hover:bg-white border border-transparent group-hover:border-[#e5e8eb] flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
          {renderIcon(link.iconName)}
        </div>
        <div>
          <p className="text-[15px] font-semibold text-[#191f28]">
            {link.title}
          </p>
          {link.subtitle && (
            <p className="text-[12px] text-[#8b95a1]">
              {link.subtitle}
            </p>
          )}
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-[#b0b8c1] group-hover:text-[#191f28]" />
    </a>
  );
}
