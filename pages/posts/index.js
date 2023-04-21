import PostGrid from '@/components/post-grid/post-grid';
import { getAllPostData } from '@/utils/get-data';

function AllPostPages({ posts }) {
  return (
    <>
      <PostGrid posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPostData();
  if (!allPostsData) {
    return {
      notFound: true, //If set true, 404 page will be rendered to client
    };
  }

  return {
    props: {
      posts: allPostsData,
    },
  };
}

export default AllPostPages;
