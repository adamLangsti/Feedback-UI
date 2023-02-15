import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

type FeedbackListProps = {
    feedback: any;
};

export default function FeedbackList({ feedback }: FeedbackListProps) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet.</p>;
    } else {
        return (
            <div className='feedback-list'>
                {feedback.map((item: any) => (
                    <FeedbackItem key={item.id} item={item} />
                ))}
            </div>
        );
    }
}

FeedbackList.protoTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
};
