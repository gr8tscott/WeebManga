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
            <label htmlFor="manga">Manga:</label>
            <select id="manga" onChange={handleChange} value={formState.manga}>
                <option value="blank" >dsfds</option>
        
                {props.mangas.map((manga, index)=>
                <option value="manga name" key={index}>{manga.title}</option>
        )}
            </select>
            {/* <label htmlFor="manga">Manga:</label>
                <input
                type="text"
                id="manga"
                onChange={handleChange}
                value={formState.manga}
                /> */}
            <label htmlFor="name">Your Name:</label>
                <input
                type="text"
                id="name"
                onChange={handleChange}
                value={formState.name}
                />
            
            <label htmlFor="review">Rating (1-10):</label>
                <input
                type="number"
                id="review"
                min="0"
                max="10"
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
            <div className="reviewCards" key={review._id}>
                <h2>{review.name}</h2>
                <h2>{review.manga}</h2>
                <p>{review.text}</p>
                <p>{review.review}</p>
                <button className="deletebutton" onClick={()=>deleteReview(review._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
                
                <Link to={`/editreviews/${review._id}/${index}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></Link>
                {/* <button>Edit Review</button> */}
            </div>
            )
})}
        {/* <h1>{review.name}</h1> */}
       
      </div>
    )
  }

export default Reviews

