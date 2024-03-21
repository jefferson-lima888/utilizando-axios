import { api } from "@/utils/api";
import { useRef } from "react";

export const SendArchive = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleSendFile = async () => {
    if (fileInput.current?.files && fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0];

      const data = new FormData();
      data.append("name", "Jeff");
      data.append("file", file);

      //caso queira mandar algum parametro, só adicionar o headers como terceiro depois do data
      const response = await api.post("/posts", data);

      console.log(response.data);
    }
  };

  return (
    <div className="container mx-auto mt-6">
      <input ref={fileInput} type="file" />
      <button
        className="ml-2 border border-gray-500 p-1 rounded-md"
        onClick={handleSendFile}
      >
        Enviar
      </button>
    </div>
  );
};
