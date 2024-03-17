import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ReviewsPage.module.css";

export const ReviewsPage = () => {
  const initialReviews = [
    {
      username: "Розалия",
      date: "24.02.2021",
      text: "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне",
    },
    {
      user: "Елена",
      date: "23.02.2021",
      text: "Ооочень вкусно!!!!!",
    },
    {
      user: "Сергей Гаврилюк",
      date: "23.02.2021",
      text: "Заказываем у Вас больше 2-ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. За доставку сегодня на время, огромное спасибо, точь-в-точь в минуту в минуту. Успехов Вам и приятных бонусов нам )",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState("");
  const [username, setUsername] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        "https://65e830004bb72f0a9c4e817e.mockapi.io/api/v1/comments",
      );
      setReviews(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке отзывов:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addReview = () => {
    if (newReview && username) {
      const currentDate = new Date().toLocaleDateString();
      const newReviews = [
        { text: newReview, username: username, date: currentDate },
        ...reviews,
      ];
      setReviews(newReviews);
      setNewReview("");
      setUsername("");
      setShowForm(false);
    }
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
            className={styles.input}
            type="text"
            placeholder="Ваше имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <textarea
            className={styles.input}
            placeholder="Введите ваш отзыв"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button className={styles.button_form} onClick={addReview}>
            Добавить{" "}
          </button>
        </div>
      )}

      <div className={styles.reviews_container}>
        <div className={styles.reviews}>
          {reviews.map((review, index) => (
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
