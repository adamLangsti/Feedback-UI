import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

export default function FeedbackList() {
    const { feedback, isLoading }: any = useContext(FeedbackContext);

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet.</p>;
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <div className='feedback-list'>
            {feedback.map((item: any) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    );
}
