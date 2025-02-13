
import { ExternalLink } from "lucide-react";

interface BrandCardProps {
  name: string;
  link: string;
  logoUrl: string;
}

export const BrandCard = ({ name, link, logoUrl }: BrandCardProps) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg p-6 shadow-sm cursor-pointer card-hover flex flex-col items-center justify-center gap-4 relative group animate-fade-in"
    >
      <div className="w-32 h-32 flex items-center justify-center">
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="text-center mt-2">
        <h3 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
          {name}
        </h3>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 absolute top-4 right-4 transition-colors" />
      </div>
    </div>
  );
};
