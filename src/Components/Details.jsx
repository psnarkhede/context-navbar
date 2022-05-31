import React from 'react'
import Styles from "./Details.module.css";

const Details = ({data}) => {
  return (
    
      <div >
        <div className={Styles.box}>
        <img className={Styles.image} src={data.length == 0 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&usqp=CAU" : data.avatar} />
       
        <p className={Styles.name}>{data.first_name}  {data.last_name} </p>
        </div>
       
        <p className={Styles.email}>{data.email}</p>
      </div>
 
    
  )
}

export default Details