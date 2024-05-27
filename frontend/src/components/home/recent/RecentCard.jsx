import React, { useState } from "react"
import { list } from "../../data/Data"
import { Link } from "react-router-dom"
import { useEffect } from "react"


const RecentCard = () => {

  const[housedetails,sethouseedetails]=useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/admin/houses')
      .then(response => response.json())
      .then(data =>{ 
        sethouseedetails(data);
        console.log(housedetails);
        })
      .catch(error => console.error('Error fetching house details:', error));
  }, []);
  console.log(housedetails);
  return (
    <>
      <div className='content grid3 mtop'>
        {housedetails.map((housedetail, index) => {
          const { name, type, squareFeet, amount, rent,location, price } = housedetail;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src="/dummyimage.jpg" alt='' />
              </div>
              <div className='text'>
                <div className='type flex'>
                  <span style={{ background: type === "For Sale" ? "#25b5791a" : "#ff98001a", color: type === "For Sale" ? "#25b579" : "#ff9800" }}>{type}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div> 
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <Link to="/AppartmentForm"className='btn1'><i className='btn1'>Book</i> 
                </Link>
              </div>
              
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
