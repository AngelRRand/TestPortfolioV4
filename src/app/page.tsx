"use client"
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {redirect} from "next/navigation";
import ContainerPage from "@/src/component/container/ContainerPage";


export default function Home() {
    const [name, setName] = useLocalStorage('name', '');

    if (name === '') {
        redirect("/Login")
    }

    return (
        <ContainerPage styleContainer={'containerHome'} styleStart={'starHome'}>
            <h1 style={{color: 'white', fontSize: '4.5rem'}}>Hola</h1>
        </ContainerPage>
    )
}
