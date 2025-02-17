
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
          <div className="text-lg text-gray-600 space-y-2">
            <p>Informações completas das marcas Joie, Nuna, Premium Baby e Minikoioi.</p>
            <p>Selecione as informações necessárias, como fotos para postagens, campanha vigente, fichas técnicas.</p>
            <p>PMA (Preço Menor Anunciado) - Preço que deve ser praticado pelos nossos parceiros.</p>
            <p>
              Caso enfrente qualquer problema, entre em contato com a equipe{" "}
              <a
                href="https://api.whatsapp.com/send?phone=5519992173168"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Marketing Singular
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </div>
        <div className="mt-16 flex justify-center gap-8 items-center">
          <a
            href="https://api.whatsapp.com/send?phone=5519992173168"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://logo.empregos.com.br/logo/121310_G.png"
              alt="Singular logo"
              className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
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
