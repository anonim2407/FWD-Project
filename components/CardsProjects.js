import Image from 'next/image'
import Link from 'next/link'
const CardsProjects = ({ img, href, title, description }) => {
    return (
        

        <div className=" max-w-[700px] bg-[#ffffff]  rounded-lg hover:shadow-xl  transition duration-500 hover:shadow-gray-400 shadow-2xl ">
            <Link href={href}>
                <Image className="rounded-t-lg  h-[100px]" src={img} width={700} height={350} alt="" />
            </Link>
            <div className="p-5">
                <Link href={href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-8">{description}</p>
                <Link href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#f0c187c2] rounded-lg dark:hover:bg-[#f0b368] focus:ring-4 focus:outline-none  ">
                    See the Website
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                
            </div>
        </div>

    )
}

export default CardsProjects
