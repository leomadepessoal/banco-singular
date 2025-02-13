
import { BrandCard } from "@/components/BrandCard";
import { brands } from "@/data/brands";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Banco de dados Singular Baby
          </h1>
          <p className="text-lg text-gray-600">
            Selecione a pasta que deseja, caso não encontre entre em contato com{" "}
            <a
              href="https://web.whatsapp.com/send/?phone=5519992173168&text=Olá%2C+preciso+de+ajuda+com+o+banco+de+imagens%21+&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Marketing Singular
            </a>
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
