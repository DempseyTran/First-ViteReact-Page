import React from 'react'

const Hero = ({HeroInfo}) => {
  return (
    <div className='Hero-Wrapper mb-28'>
      <h1 className='text-5xl font-GretaBold px-44 mb-6'>WHO'S WHO: THE JUSTICE LEAGUE</h1>
      <div className="Hero-Container grid grid-cols-7 m-0 px-44 gap-4">
        {HeroInfo.map((item) => (
            <div className="Card-Container" key={item.id}>
                <img className='object-contain' src={item.image} alt="" />
                <h2 className="name text-3xl text-center p-3 font-GretaBold">{item.name}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
