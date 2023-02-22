import React, { useContext } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback }: any = useContext(FeedbackContext);

    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    );
}

FeedbackItem.protoTypes = {
    item: PropTypes.object.isRequired,
};
