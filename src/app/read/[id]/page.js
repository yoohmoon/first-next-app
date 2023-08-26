// 'use client'; //클라이언트 컴포넌트로 바뀜!
// 서버 컴포넌트에서는 반드시 await를 사용하고, await가 들어간 함수는 async를 붙여야 한다.
// 서버 컴포넌트라서 useEffect 필요 없다. - 사용자와 상호작용하지 않음 (클라이언트는 사용자와 상호작용하는 컴포넌트)
export default async function Read({ params }) {
  //   console.log(params);
  const response = await fetch('http://localhost:9998/topics/' + params.id);
  const topic = await response.json();
  //   console.log(data);
  //   서버 컴포넌트-서버 쪽에서 실행됨
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
