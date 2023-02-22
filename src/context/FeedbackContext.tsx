import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext({});

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState<any>([
        {
            id: 1,
            rating: 10,
            text: 'This is feedback item 1',
        },
        {
            id: 2,
            rating: 3,
            text: 'This is feedback item 2',
        },
        {
            id: 3,
            rating: 6,
            text: 'This is feedback item 3',
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState<object>({
        item: {},
        edit: false,
    });

    const addFeedback = (newFeedback: any) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id: number) => {
        // if (window.confirm('Are you sure you want to delete your feedback?')) {
        // }
        setFeedback(feedback.filter((item) => item.id !== id));
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    const updateFeedback = (id: number, updateItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updateItem } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
