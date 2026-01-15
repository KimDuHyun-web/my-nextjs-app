export default async function Read({params}) {
  const {id} = await params;
  const res = await fetch(`http://localhost:9999/topics/${id}`);
  const topic = await res.json(); // json -> object 전환
  console.log(topic);
  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.message}</p>
    </>
  );
}