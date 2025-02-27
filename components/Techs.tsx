import { companies } from '@/data'
import React from 'react'

const Techs = () => {
  return (
    <div className="flex justify-center flex-wrap item-center gap-8 md:gap-28 max-lg:mt-10 py-20">
        {companies.map(({id,img,name}) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img
                src={img}
                alt={name}
                className="md:w-20 w-15"
                />
            </div>

        
        ))} 
    </div>
  )
}

export default Techs