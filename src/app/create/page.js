'use client';

// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

// 서버 쪽에서 html만 만들어서 쏴주는데, 거기에는 js가 없다.
// (클라이언트로 안바꾸면, 서버에서는 자바스크립트가 작동안될 수도 있기 때문에?!)

export default function Create() {
  const router = useRouter();
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          console.log(title, body);
          // target: form / name title / 그 태그의 value
          const resp = await fetch(' http://localhost:9999/topics', {
            method: 'POST',
            body: JSON.stringify({ title: title, body: body }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const topic = await resp.json();
          const lastId = topic.id;
          const url = `/read/${lastId}`;
          // 사용자를 /read/+id로 이동시킨다.
          router.push(url);
          router.refresh();
        }}
      >
        <h2>Create</h2>
        <p>
          <input type='text' name='title' placeholder='title' />
        </p>
        <p>
          <textarea name='body' placeholder='body' />
        </p>
        <p>
          <input type='submit' value='create' />
        </p>
      </form>
    </>
  );
}
