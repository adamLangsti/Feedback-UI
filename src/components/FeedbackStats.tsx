import React from 'react';
import PropsTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats() {
    const { feedback }: any = useContext(FeedbackContext);

    // Calculate ratings average
    let average =
        feedback.reduce((acc, currValue) => {
            return acc + currValue.rating;
        }, 0) / feedback.length;

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>
                Average Rating:{' '}
                {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}
            </h4>
        </div>
    );
}
