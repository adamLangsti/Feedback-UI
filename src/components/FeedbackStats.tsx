import React from 'react';

export default function FeedbackStats({ feedback }) {
    // Calculate ratings average
    let average =
        feedback.reduce((acc, currValue) => {
            return acc + currValue.rating;
        }, 0) / feedback.length;

    console.log(average);

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average}</h4>
        </div>
    );
}
