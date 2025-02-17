
import { Section } from "@/data/brands";
import { useNavigate } from "react-router-dom";

interface SectionCardProps {
  section: Section;
}

export const SectionCard = ({ section }: SectionCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(section.path);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg p-8 shadow-sm cursor-pointer card-hover flex flex-col items-center justify-center gap-4 relative group animate-fade-in"
    >
      {section.iconUrl && (
        <img
          src={section.iconUrl}
          alt={`${section.title} icon`}
          className="w-16 h-16 object-contain mb-2"
        />
      )}
      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors text-center">
        {section.title}
      </h2>
    </div>
  );
};
