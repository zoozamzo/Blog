'use client';

import Link from "next/link";
import {useEffect, useState} from "react"

interface HeaderProps {
    verse: string,
  }

export default function Header ({verse}: HeaderProps) {
    
    const[verseString, setVerseString] = useState('');

    useEffect(()=> {
        if(verseString.length <= 0){
            setVerseString(verse);
        }

    }, [verseString, setVerseString, verse])

    return (
        <div className="flex flex-row w-full h-1/5 bg-yellow-500"><p className='text-lg text-center font-neodgm'>{verseString}</p>
        <Link href={'/profile'}className="text-3xl" >{'Profile'}</Link>
        </div>
    )
}