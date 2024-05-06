import React, { Fragment } from 'react' 
import Footer from './Footer';
import Header from './Header'; 

const Layout = (props) => {

     
  return (
    <Fragment  > 

      
      <main className='pb-24 bg-gray-100 overflow-hidden ' 
      // style={{backgroundColor:'rgba(0, 0, 0, 0.7)'}}
      > 
      <Header/> 
      <style>
      {`
        ::selection {
          color: black;
          background-color: cyan;
        }
      `}
    </style>
         
        
        {props.children}
      </main> 
      <Footer/>
    </Fragment>
  )
}

export default Layout