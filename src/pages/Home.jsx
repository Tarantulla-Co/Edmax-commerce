import React from 'react'
import Swal from 'sweetalert2'
export default function Home() {
Swal.fire('Welcome', 'Edmax Setup', 'success');
  return (
    <div>
      <h1 className='text-center'>Hello Edmax</h1>
    </div>
  )
}
