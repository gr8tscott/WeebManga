import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const EditReviews = (props) => {
    // const [review, setReview] = useState([])

    let {id, index} = useParams()
    
    let navigate =useNavigate()

    const initialState = {
        name: props.reviews[index].name,
        manga: props.reviews[index].manga,
        text: props.reviews[index].text,
        review: props.reviews[index].review
      }
    const [formState, setFormState] = useState(initialState)
    

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
      }
    
      const handleSubmit = async (event) => {
        
        event.preventDefault() 
        
        let res = await axios.put(`http://localhost:3001/reviews/${id}`, formState)
        setFormState(initialState)
        navigate(`/reviews`)
        // getReview()
      }

    //   const updateReview = async (id) => {
        
    //     let res = await axios.put(`http://localhost:3001/reviews/${id}`)
    //     // getReview()
    //   }

  return (
    <div className='reviewCard'>
        {/* {props.reviewId?.map((review)=>())} */}
        <h1>{props.reviews[index].name}</h1>
        <form onSubmit={handleSubmit}>
           
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
            <label htmlFor="text">Update your review here:</label>
            <textarea
            id="text"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.text}
            ></textarea>
            <button type="submit">Submit Review!</button>
      </form>
        
       
      </div>
    )
  }

export default EditReviews

