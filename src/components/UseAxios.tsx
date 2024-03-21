import { api } from "@/utils/api";
import axios from "axios";

export const UseAxios = () => {
  const handleAddPosts = async () => {
    // const response = await axios.post(
    //   "https://jsonplaceholder.typicode.com/posts",
    //   {
    //     userId: 98,
    //     title: "Título do post",
    //     body: "Corpo do post",
    //   }
    // );

    //instânciar o axios para o arquivo desejado
    const response = await api.post("/posts", {
      userId: 98,
      title: "Título do post",
      body: "Corpo do post",
    });

    console.log(response);

    if (response.data.id) {
      console.log("inseriu com sucesso");
    } else {
      console.log("Post não foi inserido");
    }
  };
  return (
    <div className="container mx-auto mt-6">
      <button onClick={handleAddPosts}>Inserir posts</button>
    </div>
  );
};
