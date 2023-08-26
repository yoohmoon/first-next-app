import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h2>WEB</h2>
      Hello, WEB!!
      <p>
        <img src='/img.jpg' width={50} alt='' />
      </p>
    </div>
  );
}
