export default async function Loadmaps({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/loadmap/${id}`);
  const loadmap = await res.json();

  return (
    <>
      <h3>{loadmap.title}</h3>
      <ul>
        <li>
          {loadmap.desc.split("\n").map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </li>
      </ul>
    </>
  );
}