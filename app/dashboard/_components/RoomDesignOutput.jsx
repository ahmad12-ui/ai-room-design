import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function RoomDesignOutput({room}) {
  return (
    <div className='shadow-md rounded-md cursor-pointer'>
        <ReactBeforeSliderComponent
            firstImage={{
                imageUrl:room?.aiImage
            }}
            secondImage={{
                imageUrl:room?.orgImage
            }}
        />
        <div className='p-4 '>
            <h2>Room Tpye:{room.roomType}</h2>
            <h2>Design Type:{room.designTpye}</h2>
        </div>
    </div>
    
  )
}

export default RoomDesignOutput



