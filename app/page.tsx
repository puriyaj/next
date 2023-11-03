import { readFile } from "fs/promises"
import { marked } from "marked"
import Image from "next/image"

import Form from "./components/Form"
import Icons from "./components/icons"
import IconHorizontal from "./components/IconHorizontal"
export default async function Home() {
  const text = await readFile('app/content/front.md','utf8')
  const html = marked(text)
  return (<>
  
<div className="flex flex-col  bg-creme3 pb-10">

  <div className="flex lg:flex-row flex-col grow items-center justify-between pt-10 pr-10 pl-10">
<div className='text-center '>
    <h1 className=" font-roboto text-black text-5xl  bg-clip-text font-bold">Hi , Im Pouria </h1>
  <h2 className="pt-2 text-dark">Full stack web Developer</h2>
  </div>


    <div className="bg-dark lg:w-1/3 p-3 shadow-lg rounded-lg flex flex-col items-center w-screen">
     <Image src="/images/pro1.jpg" width="500" height="500" className="rounded-full pb-1" alt="profile photo"/>
     <article dangerouslySetInnerHTML={{__html:html}} className=" font-roboto text-xl text-justify italic pb-3"/>
     <div className="bg-creme pt-2 w-24 min-w-full rounded-lg">
       <Form />
     </div>
    



  </div>

</div>


</div>
  <h2 className="bg-creme flex flex-row justify-center text-5xl font-bold pt-5 font-roboto">Projects</h2>



   <div className="bg-creme grid grid-cols-2 pr-3">
    
   <Image className="pb-10 " src="/images/mtn.png" width="400" height="400" alt="projects photo"/>

<Image className="pb-10 rounded-lg hover:blur justify-self-end" src="/images/ipad.png" width="400" height="400" alt="projects photo"/>
</div>  




 
<IconHorizontal />
     
  </>

  )
}
