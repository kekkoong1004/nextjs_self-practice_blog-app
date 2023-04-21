import PostItem from './post-item';
import styles from './post-grid.module.css';

function PostGrid(props) {
  return (
    <section className={styles.grid}>
      {props.posts.map(post => (
        <PostItem post={post} />
      ))}
    </section>
  );
}

export default PostGrid;
