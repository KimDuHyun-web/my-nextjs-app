"use client";
//클라이언트 컴포넌트용 use Parmas 함수, 주소 표시줄의 ID 파악을 위함.
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Control(){
  const params = useParams();
  const id = params?.id;
  const router = useRouter();

  const handleDelete = ()=>{
    const ok = window.confirm('정말 삭제할까요?');
    if(!ok) return;

    const options = {
      method:'DELETE',
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
    .then(res => res.json())
    .then(reslut=>{
      router.push('/'); // 삭제 후 홈으로 이동
      router.refresh(); // 메뉴 삭제시 새로고침
    });
  }
  return(
    <ul className="nav gap-1">
      <li>
        <Link href="/create" className="btn btn-primary">Create</Link>
      </li>
      {
        id && <>
          <li>
            <Link href={`/update/${id}`} className="btn btn-secondary">Update</Link>
          </li>
          <li><button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button></li>
        </>
      }
    </ul>
  )
}