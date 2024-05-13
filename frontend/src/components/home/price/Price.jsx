import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Unlock the perfect package tailored to your unique property needs with our comprehensive selection of rental packages.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
