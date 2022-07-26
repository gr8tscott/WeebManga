import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const Reviews = (props) => {
    const [review, setReview] = useState([])

    const getReview = async () => {
    const res = await axios.get(`http://localhost:3001/reviews`)
    setReview(res.data)
    console.log(res.data.name)
    }
    useEffect(() => {
    getReview()
    console.log(getReview)
    }, [])



  return (
    <div className='reviewCard'>

        <h1>Current Reviews:</h1>
        {review.map((reviews) => {
            return(
            <div key={reviews._id}>
                <h2>{reviews.name}</h2>
                <h2>{reviews.manga}</h2>
                <p>{reviews.text}</p>
                <p>{reviews.review}</p>
            </div>
            )
})}
        {/* <h1>{review.name}</h1> */}
       
      </div>
    )
  }

export default Reviews

