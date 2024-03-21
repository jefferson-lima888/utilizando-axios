"use client";
import { CancelRequestAxios } from "@/components/CancelingRequestAxios";
import { SendArchive } from "@/components/SendArchive";
import { UseAxios } from "@/components/UseAxios";
import axios from "axios";

export default function Home() {
  const handleGetPosts = async () => {
    const requestParams = {
      postId: 1,
      sort: "desc",
    };

    //essa é uma maneira de fazer a requisição
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments", {
    //     params: requestParams,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });

    //outra maneira de fazer a requisição com axios
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
      {
        params: requestParams,
      }
    );

    console.log(response.data);
  };

  return (
    <div className="container mx-auto">
      <button onClick={handleGetPosts}>Pegar posts</button>
      <UseAxios />
      <SendArchive />
      <CancelRequestAxios />
    </div>
  );
}
