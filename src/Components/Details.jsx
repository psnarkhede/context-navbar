import React from 'react'
import Styles from "./Details.module.css";

const Details = ({data}) => {
  return (
    
      <div >
        <div className={Styles.box}>
        <img className={Styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&usqp=CAU"/>
       
        <p className={Styles.name}>{data.userid}</p>
        <p style={{marginTop:"30px", marginLeft:"-40px"}}>{data.id}</p>
        </div>
      </div>
 
    
  )
}

export default Details