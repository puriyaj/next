'use client'
import { Icon } from '@iconify/react';

const Icons = () => {
  return( <>
    <div className="flex flex-col gap-4">
  <div>
    <h1 className="text-dark font-roboto text-4xl  bg-clip-text text-center pt-10">Skills </h1> 
  </div>
  


 
  
      <div className="bg-ethereal flex flex-col pt-10 pb-10 ">
        
     <div className="flex flex-row gap-10 justify-center ">
     
  <div className="grid grid-cols-4 gap-10 bg-dark w-24 min-w-fit rounded-lg pl-2 pr-2 pt-2 shadow-lg">
    <div className="flex flex-col items-center">
      <Icon className="h-10 w-10" icon="devicon:nodejs-wordmark" />
      <p>Node js</p>
    </div>
    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="logos:react" />
      <p>React</p>
    </div>    <div className="flex flex-col items-center">
    <Icon  className="h-10 w-10" icon="logos:html-5" />
      <p>Html</p>
    </div>    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="logos:mongodb-icon" />
      <p>Mongo DB</p>
    </div>    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="skill-icons:expressjs-light" />
      <p>Express js</p>
    </div>    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="logos:tensorflow" />
      <p>Tensorflow</p>
    </div>    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="logos:c-sharp" />
      <p>C#</p>
    </div>    <div className="flex flex-col items-center">
    <Icon  className="h-10 w-10" icon="vscode-icons:file-type-typescript-official" />
      <p>Type script</p>
    </div>    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="skill-icons:javascript" />
      <p>Java script</p>
    </div>    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="logos:python" />
      <p>Python</p>
    </div>    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="teenyicons:nextjs-outline" />
      <p>Next js</p>
    </div>    <div className="flex flex-col items-center">
    <Icon className="h-10 w-10" icon="arcticons:git" />
      <p>Git</p>
    </div>  
          
   
        
       
        






</div>    

     </div>
  

  
  </div>
</div>

  </>

  )
}
export default Icons