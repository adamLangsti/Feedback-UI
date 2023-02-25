import React, { createContext, useContext, useEffect, useState } from 'react';

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

    const backendURL = 'http://localhost:5000/feedback?_sort=id&_order=desc';

    // Fetch feedback from backend
    async function fetchFeedback() {
        const response = await fetch(backendURL);
        const responseJson = await response.json();
        setFeedback(responseJson);
        setIsLoading(false);
    }

    // Add new feedback to backend
    async function addFeedback(newFeedback: any) {
        const response = await fetch(backendURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        });

        const responseJson = await response.json();

        setFeedback([responseJson, ...feedback]);
    }

    // Delete feedback from backend
    async function deleteFeedback(id: number) {
        // if (window.confirm('Are you sure you want to delete your feedback?')) {
        // }
        setFeedback(feedback.filter((item) => item.id !== id));
    }

    // Update feedback from backend
    async function editFeedback(item) {
        setFeedbackEdit({
            item,
            edit: true,
        });
    }

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
