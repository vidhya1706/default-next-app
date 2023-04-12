async function getBlogList() {
  const res = await fetch(
    "https://stbotanica.g3sandbox.dev/wp-json/wp/v2/posts"
  );
  return res.json();
}

function decodeEntities(encodedString: string) {
  const translateRe = /&(nbsp|amp|quot|lt|gt);/g;
  const translate: any = {
    nbsp: " ",
    amp: "&",
    quot: `"`,
    lt: "<",
    gt: ">",
  };
  return encodedString
    ?.replace(translateRe, (_, entity) => translate[entity])
    ?.replace(/&#(\d+);/gi, (_, numStr) => {
      const num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
}

const BlogListing = async ({ params }: any) => {
  console.log("Vidhya ", params);
  const blogList = await getBlogList();
  return (
    <div>
      {blogList?.map((blog: any) => (
        <p key={blog.id}>{decodeEntities(blog.title.rendered)}</p>
      ))}
    </div>
  );
};

export default BlogListing;
