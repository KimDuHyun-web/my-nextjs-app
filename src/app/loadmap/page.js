import Link from "next/link"

export default async function Loadmap() {
  const res = await fetch(`http://localhost:9999/loadmap`, { next: { revalidate: 0 } });
  const loadmap = await res.json();
  return (
    <>
      <h2>프론트엔드 개발자 로드맵</h2>
      <ul className="nav flex-column">
        {
          loadmap.map(l => {
            return (
              <li key={l.id} className="nav-item">
                <Link href={`/loadmap/${l.id}`} className="nav-link">{l.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}