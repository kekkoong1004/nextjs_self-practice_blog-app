import styles from './post-item.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

function PostItem(props) {
  const { post } = props;
  console.log(post);
  const readableTitle = post.title
    .replaceAll('-', ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Link href={`/posts/${post.slug}`}>
      <div className={styles.item}>
        <Image
          src={`/images/${post.image}`}
          alt={`${post.title}`}
          width={300}
          height={200}
        />
        <h4>{readableTitle}</h4>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </Link>
  );
}

export default PostItem;
