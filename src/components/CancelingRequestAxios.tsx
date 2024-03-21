import { api } from "@/utils/api";

export const CancelRequestAxios = () => {
  const controller = new AbortController();

  const handleStartRequest = async () => {
    try {
      const response = await api.get("/posts", {
        signal: controller.signal,
      });
    } catch (error) {
      console.log("Deu algum problema");
    }
  };

  const handleCancelRequest = async () => {
    controller.abort();
  };

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-xl mb-2">Como cancelar um requisição com axios</h1>
      <button
        className="border border-gray-500 p-1 rounded-md max-w-24"
        onClick={handleStartRequest}
      >
        Fazer
      </button>
      <button
        className="ml-3 border border-gray-500 p-1 rounded-md max-w-24"
        onClick={handleCancelRequest}
      >
        Cancelar
      </button>
    </div>
  );
};
