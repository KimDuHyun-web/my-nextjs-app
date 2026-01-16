export default async function Read({params}) {
  const {id} = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`);
  const topic = await res.json(); // json -> object 전환
  console.log(topic);
  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.message}</p>
    </>
  );
}