import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Get Hair, Skin, Bath & Body and Wellness Care Tips, Guide, Information, Product Reviews, Articles at One Place - St.Botanica Blog",
  description:
    "St.Botanica Blog: Find tips & information for all your beauty concerns from hair care, skin care to beauty products that are most suitable for you. Visit now & get the best advice!",
};

function BlogLayout({ children }: any) {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
      }}
    >
      {children}
    </div>
  );
}

export default BlogLayout;
