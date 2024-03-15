import  { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ReviewsPage.module.css';

export const ReviewsPage = () => {
  const initialReviews = [];

  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState('');
  const [username, setUsername] = useState('');
  const [showForm, setShowForm] = useState(false);
  console.log(reviews.sort((a,b) => new Date(b.date) - new Date(a.data)))
  
  useEffect(() => {
    fetchReviews();
  }, []); 

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://65e830004bb72f0a9c4e817e.mockapi.io/api/v1/comments');
      setReviews(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке отзывов:', error);
    }
  };
  const addReview = async () => {
    if (newReview && username) {
      const currentDate = new Date().toLocaleDateString();
      const newReviewData = {
        text: newReview,
        username: username,
        date: currentDate,
      };
  
      try {
        const response = await axios.post('https://65e830004bb72f0a9c4e817e.mockapi.io/api/v1/comments', newReviewData);
        const updateReviews = [...reviews, response.data];
        setReviews(updateReviews);
        setNewReview('');
        setUsername('');
        setShowForm(false);
      } catch (error) {
        console.error('Ошибка при добавлении отзыва:', error);
      }
    }
  };

  

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div className={styles.wrapper}>
      <h1>Отзывы</h1>
      <button className={styles.button} onClick={toggleForm}>
        + Добавить отзыв
      </button>
      </div>
      
      {showForm && (
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
           <textarea
            placeholder="Введите ваш отзыв"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button className={styles.button_form} onClick={addReview}>Добавить </button>
        </div>
      )}

    <div className={styles.reviews_container}> 
      <div className={styles.reviews}>
        {reviews.sort((a,b) => new Date(b.id) - new Date(a.id)).map((review, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.head}>
              <h1 className={styles.user}>{review.username}</h1>
              <p className={styles.date}>{review.date}</p>
            </div>
            <p className={styles.text}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};