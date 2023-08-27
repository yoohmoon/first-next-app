'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Control() {
  const router = useRouter();
  const params = useParams(); //useParams()사용하는 순간, client 컴포넌트로 만들어야 함.
  console.log(params);
  const id = params.id;
  let contextUI = null;
  if (id) {
    contextUI = (
      <>
        <li>
          <Link href={`/update/${id}`}>update</Link>
        </li>
        <li>
          <button
            onClick={async () => {
              await fetch('http://localhost:9999/topics/' + id, {
                method: 'DELETE',
              });
              router.push('/');
              router.refresh();
            }}
          >
            delete
          </button>
        </li>
      </>
    );
  }
  return (
    <ul>
      <li>
        <Link href='/create'>create</Link>
      </li>
      {contextUI}
    </ul>
  );
}
