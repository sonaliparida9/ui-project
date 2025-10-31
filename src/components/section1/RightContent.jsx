import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);

  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10  w-2/3'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent