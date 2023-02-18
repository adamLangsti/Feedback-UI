import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

type FeedbackListProps = {
    feedback: any;
    handleDelete: any;
};

export default function FeedbackList({
    feedback,
    handleDelete,
}: FeedbackListProps) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet.</p>;
    }

    return (
        <div className='feedback-list'>
            {/* <AnimatePresence> */}
            {feedback.map((item: any) => (
                // <motion.div
                //     key={item.id}
                //     initial={{ opacity: 0 }}
                //     animate={{ opacity: 1 }}
                //     exit={{ opacity: 0 }}>
                <FeedbackItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
                // </motion.div>
            ))}
            {/* </AnimatePresence> */}
        </div>
    );
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
