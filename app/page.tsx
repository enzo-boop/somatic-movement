"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Post } from "./globals/models/models";
import { getPosts } from "@/client-services/post-service";

export default function Home() {
  const [posts, setPosts] = useState<Array<Post> | null>(null);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="prose dark:prose-invert">
      {posts?.map((res, index) => (
        <div key={index} className="mt-4">
          <div className="post">
            <h3>{res.author}</h3>
            <Image
              src={res?.image_url ?? "alt-img.jpg"}
              alt="Descrizione immagine"
              width={800}
              height={600}
              quality={80}
            />
            <p>{res?.text}</p>
            <p className="creation_date mb-0">Data creazione</p>
            <span className="display-date">
              {new Date(res?.created_at ?? "").toDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
