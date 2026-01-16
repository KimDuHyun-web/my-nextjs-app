"use client";
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Update() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`)
    .then(res=>res.json())
    .then(result=>{
      setTitle(result.title);
      setMessage(result.message);
    });
  },[]); //최초 한 번 실행

  const handleSubmit = (e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const message = e.target.message.value;
    const options = {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({title, message}) //입력한 값을 Json 문자열 형태로 변환
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
    .then(res=>res.json())
    .then(result=>{
      router.push(`/read/${result.id}`);
      router.refresh();
    });
  }

  return (
    <>
      <h2>Update Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="title" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} rows="3"></textarea>
        </div>
        <p>
          <button type="submit" className="btn btn-success">전송</button>
        </p>
      </form>
    </>
  );
}