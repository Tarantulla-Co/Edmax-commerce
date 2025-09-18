import React from 'react'
import Swal from 'sweetalert2';

export default function About() {
    const msg = ()=>{
    Swal.fire({
    title: 'You Clicked Me',
    icon:'warning',
    text: 'Bro you clicked me'
    })
    }
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Hello Bootstrap + React 🚀</h1>
      <button className="btn btn-success" onClick={msg}>Click Me</button>
    </div>
  );


}
