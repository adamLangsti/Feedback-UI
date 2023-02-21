import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackList() {
    const { feedback }: any = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet.</p>;
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item: any) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    );
}
