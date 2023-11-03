'use client';
 import { Button, Navbar } from 'flowbite-react';
const NavBar = () => {
  return( 




   
    

        <Navbar fluid rounded className='bg-creme'>
          <Navbar.Brand href="/">
           
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portfolio</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="/projects">Project</Navbar.Link>
            <Navbar.Link href="/abilities">Skills</Navbar.Link>
            <Navbar.Link href="/contact">Resume</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    
     


export default NavBar