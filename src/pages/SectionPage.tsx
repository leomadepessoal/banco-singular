
import { useParams } from "react-router-dom";
import { sections } from "@/data/brands";
import { BrandCard } from "@/components/BrandCard";

const SectionPage = () => {
  const { path } = useParams();
  const section = sections.find((s) => s.path === `/${path}`);

  if (!section) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Seção não encontrada
          </h1>
          <p className="text-gray-600">
            A seção que você está procurando não existe.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {section.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.brands?.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
