import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext({});

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState<any>([]);
    const [feedbackEdit, setFeedbackEdit] = useState<object>({
        item: {},
        edit: false,
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const response = await fetch(
            `http://localhost:5000/feedback?_sort=id&_order=asc`
        );
        const responseJson = await response.json();
        setFeedback(responseJson);
        setIsLoading(false);
    };

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
                isLoading,
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
