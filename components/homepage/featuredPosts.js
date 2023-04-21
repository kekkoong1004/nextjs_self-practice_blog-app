import styles from './featuredPosts.module.css';
import PostGrid from '../post-grid/post-grid';

function FeaturedPosts(props) {
  return (
    <section className={styles.featured}>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
