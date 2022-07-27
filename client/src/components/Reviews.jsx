import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Reviews = (props) => {
   
    const initialState = {
        name: '',
        manga: '',
        text: '',
        review: ''
      }
    const [formState, setFormState] = useState(initialState)
    

    const getReview = async () => {
    const res = await axios.get(`http://localhost:3001/reviews`)
    props.setReviews(res.data)
    console.log(res.data.name)
    }
    useEffect(() => {
    getReview()
    console.log(getReview)
    }, [])

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
      }
    
      const handleSubmit = async (event) => {
        
        event.preventDefault() 
        console.log(formState)
        
        let res = await axios.post('http://localhost:3001/reviews', formState)
        setFormState(initialState)
        getReview()
      }

      const deleteReview = async (id) => {
        
        let res = await axios.delete(`http://localhost:3001/reviews/${id}`)
        getReview()
      }


  return (
    <div className='reviewCard'>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="type">Type of Issue:</label> */}
            {/* <select id="type" onChange={handleChange} value={formState.type}>
            <option value="outage">Service Outage</option>
            <option value="billing">Billing</option>
            <option value="cancel">Cancel Service</option>
            </select> */}
            <label htmlFor="name">Your Name:</label>
            <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.name}
            />
            <label htmlFor="manga">Manga:</label>
            <input
            type="text"
            id="manga"
            onChange={handleChange}
            value={formState.manga}
            />
            <label htmlFor="review">Rating 1-10:</label>
            <input
            type="text"
            id="review"
            onChange={handleChange}
            value={formState.review}
            />
            <label htmlFor="text">Leave your review here:</label>
            <textarea
            id="text"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.text}
            ></textarea>
            <button type="submit">Submit Review!</button>
      </form>
        <h1>Current Reviews:</h1>
        {props.reviews.map((review, index) => {
            return(
            <div key={review._id}>
                <h2>{review.name}</h2>
                <h2>{review.manga}</h2>
                <p>{review.text}</p>
                <p>{review.review}</p>
                <button onClick={()=>deleteReview(review._id)}>Delete Review</button>
                <Link to={`/editreviews/${review._id}/${index}`}>
                    
                    Edit Review</Link>
                {/* <button>Edit Review</button> */}
            </div>
            )
})}
        {/* <h1>{review.name}</h1> */}
       
      </div>
    )
  }

export default Reviews

