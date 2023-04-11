import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Welcome to Next.js",
// };

export async function generateMetadata(): Promise<any> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const product = await res.json();
  return {
    title: product.title,
    description: product.body,
  };
}

const Home = () => {
  return (
    <div>
      <p>home page</p>
    </div>
  );
};
export default Home;

// 1. Built-in SEO Support: New Metadata API to set static and dynamic meta tags.
// 2. Route Handlers: Custom request handlers, built on Web Request and Response.
// 3. Statically Typed Links (Beta): Prevent broken links with next/link and TypeScript.
// 4. Improved Error Overlay: Separate Next.js and React stack traces for improved readability.
// 5. MDX for Server Components: Use React components inside Markdown, server-side only.
// 6. Rust MDX Parser: Faster Markdown parsing with a brand new Rust plugin.
// 7. Turbopack Improvements (Alpha): Compatibility with Webpack loaders and improved support.
// 8. Next.js Cache (Beta): Progressive ISR and faster re-deploys of code changes.
