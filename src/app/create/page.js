"use client";
import { useRouter } from 'next/navigation'

export default function Create() {
  const router = useRouter()
  const handleSubmit = (e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const message = e.target.message.value;
    const options = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({title, message}) //입력한 값을 Json 문자열 형태로 변환
    }
    fetch('http://localhost:9999/topics', options)
    .then(res=>res.json())
    .then(result=>{
      router.push(`/read/${result.id}`);
      router.refresh(); // 페이지 이동 후 새로고침
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="title" placeholder="title" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" name="message" rows="3"></textarea>
        </div>
        <p>
          <button type="submit" className="btn btn-success">전송</button>
        </p>
      </form>
    </>
  );
}
