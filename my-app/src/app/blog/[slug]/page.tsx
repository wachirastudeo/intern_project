interface BlogProps {
  params: { slug: string };
}

export default function Blog({ params }: BlogProps) {
  const { slug } = params;
  return <div>Blog Slug: {slug}</div>;
}