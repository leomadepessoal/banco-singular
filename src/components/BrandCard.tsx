
import { Brand } from "@/data/brands";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface BrandCardProps {
  brand: Brand;
}

export const BrandCard = ({ brand }: BrandCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (brand.requiresPassword) {
      setIsOpen(true);
    } else {
      window.open(brand.link, "_blank");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "2025") {
      setIsOpen(false);
      window.open(brand.link, "_blank");
      setPassword("");
      setError("");
    } else {
      setError("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center gap-4"
      >
        <img
          src={brand.logoUrl}
          alt={`${brand.name} logo`}
          className="w-24 h-24 object-contain"
        />
        <h3 className="text-xl font-semibold text-gray-900 text-center">
          {brand.name}
        </h3>
      </div>

      {brand.requiresPassword && (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[90%] max-w-md">
              <Dialog.Title className="text-xl font-bold mb-4">
                Digite a senha para acessar
              </Dialog.Title>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Digite a senha"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </>
  );
};
