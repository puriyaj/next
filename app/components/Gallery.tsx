'use client'
import Image from "next/image";



function Gallery({html1,ht2,ht3}:{html1:string,ht2:string,ht3:string}) {



  
  return(<>

  
   <div className="grid lg:grid-cols-3 grid-rows-3 justify-center lg:justify-items-center">


  <div className=" pt-5 pb-5 ">
  <div className="flex flex-col  gap-3 items-center justify-start bg-dark w-24 min-w-max rounded-lg shadow-lg">
    <Image className=" rounded-lg hover:-translate-y-1 hover:brightness-125 p-3" src="/images/indie-game.jpg" alt="" width="320" height="320"/>
    <p className=" font-roboto text-xl text-justify italic pb-3">Game Reviews</p>
    <article dangerouslySetInnerHTML={{__html: html1 }} className=" font-roboto text-xl text-justify italic pb-3 w-60"/>
      </div>
</div>
     

   

<div className="pt-5 pb-5 ">
  <div className="flex flex-col  gap-3 items-center justify-start bg-dark w-24 min-w-max rounded-lg shadow-lg">
    <Image className=" rounded-lg hover:-translate-y-1 hover:brightness-125 p-3" src="/images/carpet.jpg" alt="" width="320" height="320"/>
    <p className=" font-roboto text-xl text-justify italic pb-3">Leishe</p>
    <article dangerouslySetInnerHTML={{__html: ht2 }} className=" font-roboto text-xl text-justify italic pb-3 w-60"/>
      </div>
</div>
      
    


   <div className="pt-5 pb-5">
         <div className="flex flex-col  items-center bg-dark w-24 min-w-max rounded-lg shadow-lg">
    <Image className="h-auto max-w-full rounded-lg hover:-translate-y-1 hover:brightness-125 p-3" src="/images/vet-one.jpg" alt="" width="320" height="320"/>
    <p className=" font-roboto text-xl text-justify italic pb-3">vet-one</p>
    <article dangerouslySetInnerHTML={{__html: ht3 }} className=" font-roboto text-xl text-justify italic pb-3 w-60"/>
</div>  
   </div>
   </div>

   


 

  </>
)};

export default Gallery;

