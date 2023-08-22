"use client"
import useLocalStorage from '@/src/hooks/useLocalStorage';
import Link from 'next/link';
import React, { useState } from 'react'

export default function page() {
  const [input, setinput] = useState("")
  const [name, setName] = useLocalStorage('name', '');

  
  return (
    <div>
      <h1>Bienvenido!!!</h1>
      <h4>Ingresa tu nombre</h4>
      <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
      
      <Link href={"/"}>
        <button onClick={()=> setName(input)}>Ingresar</button>
      </Link>
    </div>
  )
}

