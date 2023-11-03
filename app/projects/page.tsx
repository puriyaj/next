

import Gallery from "../components/Gallery";
import { readFile } from "fs/promises";
import { marked } from "marked";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Project',
  description: 'My Portfolio',
}

export default async function Project() {
  const text = await readFile('./app/content/indie.md','utf8')
  const text2 = await readFile('./app/content/carpet.md','utf8')
  const text3 = await readFile('./app/content/vet.md','utf8')

  const html = await marked(text);
  const ht2 = await marked(text2);
  const ht3 = await marked(text3);

  return (<>
  
 <h1 className='text-dark font-roboto text-5xl bg-clip-text text-center pb-10 pt-10'>My projects</h1>



  <Gallery html1={html} ht2={ht2} ht3={ht3} />



  
  
  
  </>
  
  )
}