import Image from 'next/image';
import MainImage from '../public/image/main.png'
import Link from 'next/link';



export default function Sidebar(){
    return(
        <div className="flex flex-col h-full w-1/4 bg-[#f7eaa1] items-center space-y-5">
        <Link href={'/'}>
            <Image src={MainImage} alt='My Image' className='w-[150px] h-[150px] rounded-full mt-5'/>
        </Link>
        <p className='text-2xl font-neodgm'>{'zoozamzoo'}</p>
        <p className='text-lg text-center font-neodgm'>{'Hello Everyone!!'}<br/> {'Welcome to my channal blog!!'}</p>
        
      </div>
    )
}