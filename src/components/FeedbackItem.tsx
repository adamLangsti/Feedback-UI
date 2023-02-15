import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';

export default function FeedbackItem({ item }) {
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>{item.text}</div>
        </Card>
    );
}

FeedbackItem.protoTypes = {
    item: PropTypes.object.isRequired
}