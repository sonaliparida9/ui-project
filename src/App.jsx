import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000',
      intro:'',
      color:'pink',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661578248908-85e78e6d6c9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000',
      intro:'',
      color:'black',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661371657472-978b1bcecf5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600',
      intro:'',
      color:'blue',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661589387339-9621d97c355a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro:'',
      color:'lightblue',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661774723035-de53c21c9838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro:'',
      color:'lightgreen',
      tag:'Underserved'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App