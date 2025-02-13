
import { BrandCard } from "@/components/BrandCard";
import { brands } from "@/data/brands";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Marcas</h1>
          <p className="text-lg text-gray-600">
            Selecione uma marca para acessar sua pasta no Google Drive
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
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

export default Index;
