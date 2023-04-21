import Hero from '@/components/homepage/hero';
import FeaturedPosts from '@/components/homepage/featuredPosts';
import { getFeaturedPosts } from '@/utils/get-data';

export default function Home(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  console.log('Feature: --------------', featuredPosts);
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
