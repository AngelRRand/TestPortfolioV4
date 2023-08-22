"use client"
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { redirect } from "next/navigation";


export default function Home() {
  const [name, setName] = useLocalStorage('name', '');
  
  if (name === '') {
    redirect("/Login")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
