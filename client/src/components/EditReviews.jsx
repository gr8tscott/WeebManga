import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Reviews = (props) => {
    const [review, setReview] = useState([])
    const initialState = {
        name: review.name,
        manga: '',
        text: '',
        review: ''
      }
    const [formState, setFormState] = useState(initialState)
    

    const getReview = async () => {
    const res = await axios.get(`http://localhost:3001/reviews`)
    setReview(res.data)
    }
    useEffect(() => {
    getReview()
    }, [])

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
      }
    
      const handleSubmit = async (event) => {
        
        event.preventDefault() 
        console.log(formState)
        
        let res = await axios.post('http://localhost:3001/reviews/', formState)
        setFormState(initialState)
        getReview()
      }

      const updateReview = async (id) => {
        
        let res = await axios.put(`http://localhost:3001/reviews/${id}`)
        getReview()
      }

  return (
    <div className='reviewCard'>
        <h1>{review.name}</h1>
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

export default Reviews

