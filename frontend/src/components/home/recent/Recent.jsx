import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Relax and unwind in the luxurious master suite, complete with a private en-suite bathroom and walk-in closet. Two additional bedrooms provide versatility for guests, a home office, or a growing family.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
