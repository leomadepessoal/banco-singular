
import { SectionCard } from "@/components/SectionCard";
import { sections } from "@/data/brands";

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
              href="https://api.whatsapp.com/send?phone=5519992173168&text=Ol%C3%A1,%20preciso%20de%20ajuda%20com%20o%20Banco%20de%20dados%20da%20Singular%20%F0%9F%99%82%0A%0APoderia%20me%20ajudar?%20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Marketing Singular
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <img
            src="https://logo.empregos.com.br/logo/121310_G.png"
            alt="Singular logo"
            className="h-12 object-contain opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
