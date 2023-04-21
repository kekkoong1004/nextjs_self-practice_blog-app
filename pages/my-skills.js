import Link from 'next/link';

function MySkills() {
  return (
    <>
      <ul>
        <li>
          <Link href={'/'}>React JS</Link>
        </li>
        <li>
          <Link href={'/'}>Next JS</Link>
        </li>
        <li>
          <Link href={'/'}>Modern CSS</Link>
        </li>
        <li>
          <Link href={'/'}>Node JS & Express JS</Link>
        </li>
        <li>
          <Link href={'/'}>Typescript</Link>
        </li>
      </ul>
    </>
  );
}

export default MySkills;
