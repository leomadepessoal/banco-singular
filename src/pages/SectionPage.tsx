
import { BrandCard } from "@/components/BrandCard";
import { sections } from "@/data/brands";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SectionPage = () => {
  const { sectionPath } = useParams();
  const navigate = useNavigate();
  const section = sections.find((s) => s.path === `/${sectionPath}`);

  if (!section) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-16 mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{section.title}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.brands?.map((brand) => (
            <BrandCard
              key={brand.name}
              name={brand.name}
              link={brand.link}
              logoUrl={brand.logoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
