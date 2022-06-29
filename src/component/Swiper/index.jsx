import React, {useState} from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '../Swiper/Pagination';
import './index.less'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swiper =(props)=>{
    const [index,setIndex] = useState(0);

    function handleChange(index){
        setIndex(index);
    }

    return (
        <div className='swiper'>
            <AutoPlaySwipeableViews index={index} onChangeIndex={handleChange}>
             {
                 props.banner.map((item,index)=>{
                     return (
                        <div key={index} className="swiper-view">
                            <img  src={item} alt=""/>
                        </div>
                 )})
             }
            </AutoPlaySwipeableViews>
            <Pagination len={props.banner.length} index={index} onChangeIndex={handleChange} />
       </div>
    )
}

export default Swiper