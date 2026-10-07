import type { PostFrontmatter } from "../types/PostFrontmatter";

export function createOgImageLink(frontmatter: PostFrontmatter) {
  let { img } = frontmatter;
  if (typeof img === "object") img = img.og || img.src;
  return img?.replace(/^raw!/, "") || "/og-image.png";
}
