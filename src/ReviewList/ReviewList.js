import React from 'react'
import css from './ReviewList.css'
import Review from 'toolkit/Review/Review'

export default function ReviewList(props) {
  const comments = [
    {
      author: 'jamiedawsonyoung',
      rating: 8,
      date: '13 Apr 2016',
      content: 'Cassandra is a very good example of a workable, foundational, back-end infrastructure component that possesses plenty of utility and functionality for Linux admins and architects, but will be lost on those used to point-and-click interfaces.',
    },
  ]

  return (
    <div className={css.main}>
      <h2 className={css.title}>Reviews</h2>
      {(() => comments.map((comment, i) => (
        <div key={i} className={css.reviewWrapper}>
          <Review
            author={comment.author}
            rating={comment.rating}
            date={comment.date}
            content={comment.content}
          />
        </div>
      )))()}
    </div>
  )
}
