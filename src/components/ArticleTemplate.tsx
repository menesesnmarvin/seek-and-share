import { articleProps } from "@/model/seekAndShare.model"
import Image from "next/image"
import Link from "next/link"
import Verse from 'public/verse.jpg'

const ArticleTemplate = ({title, description, profileImage, created_by, created_timestamp}: articleProps) => {
  return (
    <Link href={{ pathname: '/blog', query: { title: title} }} className="border-b-2 border-gray-100 pb-4">   
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <Image src={`${profileImage}`} alt="image" className="rounded-full" width={24} height={24}/>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg> */}
                <h1 className="text-sm">{created_by}</h1>
                <h1 className="text-sm text-gray-500">{`- ${created_timestamp}`}</h1>
            </div>
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-base line-clamp-3">{description}</p>
        </div>
        {/* <div className="flex mt-8">
            <Image src={Verse} alt="image" className="" width={320} height={112}/>
        </div> */}
        
    </Link>
  )
}

export default ArticleTemplate