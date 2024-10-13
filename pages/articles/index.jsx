import PostCard from "./Components/PostCard";
import PostHero from "./Components/PostHero";
import Link from "next/link";
function articles({ posts }) {
   return (
    <>
     <PostHero  />
    <div className="my-4 text-center space-y-4 md:space-y-0 md:flex md:justify-around md:items-center md:flex-wrap">
      {posts.map((p) => (
        <Link href={`/articles/${p.id}`} key={p.id} className="list-none">
          {" "}
          <PostCard title={p.title} body={p.body} />
        </Link>
      ))}
    </div>
    </>
  );
}

export default articles;

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
