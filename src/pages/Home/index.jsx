import React from 'react';
import HeaderNav from '../../component/HeaderNav'
import Swiper from '../../component/Swiper'
import Banner1 from "../../assets/images/banner1.png"
import Banner2 from "../../assets/images/banner2.png"
import Banner3 from "../../assets/images/banner3.png"

const Home =()=>{
    let arr = [Banner1,Banner2,Banner3];
    return (
        <div>  
            <HeaderNav/>
            <Swiper banner={arr}/>
        </div>
    )

}
export default Home;