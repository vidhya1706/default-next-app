async function getBlogDetails() {
  const res = await fetch(
    "https://stbotanica.g3sandbox.dev/wp-json/wp/v2/posts/?slug=pre-wedding-hair-care-for-those-gorgeous-locks"
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

const BlogDetails = async () => {
  const [blog] = await getBlogDetails();
  return (
    <div>
      <p key={blog.id}>{decodeEntities(blog.title.rendered)}</p>
    </div>
  );
};

export default BlogDetails;
