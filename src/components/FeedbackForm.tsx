import React, { useContext, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

export default function FeedbackForm() {
    const [text, setText] = useState<string>('');
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [message, setMessage] = useState<string>('');
    const [rating, setRating] = useState<number>(10);

    const { addFeedback }: any = useContext(FeedbackContext);

    const handleTextChange = (e) => {
        if (text === '') {
            setButtonDisabled(true);
            setMessage('');
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setButtonDisabled(true);
        } else {
            setMessage('');
            setButtonDisabled(false);
        }
        setText(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            };
            addFeedback(newFeedback);
            setText('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating: number) => setRating(rating)} />

                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button
                        type='submit'
                        version='primary'
                        isDisabled={buttonDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}
