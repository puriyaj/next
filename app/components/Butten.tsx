import Link from "next/link"

const Buttens =()=>{
  return(
    <div className='flex flex-auto flex-row py-20 justify-center gap-4 '>
      <div>
       <button className='transition ease-in-out delay-150 bg-sophisticated hover:-translate-y-1 hover:scale-110 hover:bg-pink-800 duration-300 rounded-full  items-center h-40 w-40 p-0 m-0'>
        <Link href="/projects">My Projects</Link>
        </button>  
      </div>
    
    <button className='transition ease-in-out delay-150 bg-sophisticated hover:-translate-y-1 hover:scale-110 hover:bg-pink-800 duration-300 rounded-full  items-center h-40 w-40 p-0 m-0'>
    <Link href="/mycv">Download CV</Link></button> 
    <button className='transition ease-in-out delay-150 bg-sophisticated hover:-translate-y-1 hover:scale-110 hover:bg-pink-800 duration-300 rounded-full  items-center h-40 w-40 p-0 m-0'>
    <Link href="/abilities">Skills</Link></button> 
  </div>
  )
}

export default Buttens