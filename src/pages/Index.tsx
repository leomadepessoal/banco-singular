
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </div>
        <div className="mt-16 flex justify-center gap-8 items-center">
          <img
            src="https://logo.empregos.com.br/logo/121310_G.png"
            alt="Singular logo"
            className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://singularbaby.com.br/media/Logo_Oficial_Singular.png"
            alt="Singular Baby logo"
            className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
