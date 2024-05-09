import React from 'react'

const Title = (props) => {
  return (
    

    <div className='flex items-center justify-center  ' >  
        <div className='pt-16 pb-10   '>
            <h1 className='pb-2 font-semibold text-3xl md:5xl text-cyan-500 tracking-widest
            flex justify-center uppercase border-cyan-400 border-b-2'
            style={{
                borderTopWidth: '2px', // Keep top border consistent
                borderBottomWidth: `${props.title.length * 2}px`, // Adjust bottom border width based on title length
                transition: 'border-bottom-width 0.3s ease-in-out' // Adding animation to the border width change
            }}>
            {props.title}
            </h1>
        </div>   
    </div>


    
    
  

    
  )
}

export default Title

