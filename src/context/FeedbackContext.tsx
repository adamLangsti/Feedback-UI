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

    // Fetch feedback from backend
    async function fetchFeedback() {
        const response = await fetch(
            'http://localhost:5000/feedback?_sort=id&_order=desc'
        );
        const responseJson = await response.json();
        setFeedback(responseJson);
        setIsLoading(false);
    }

    // Add new feedback to backend
    async function addFeedback(newFeedback: any) {
        const response = await fetch(
            'http://localhost:5000/feedback?_sort=id&_order=desc',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFeedback),
            }
        );

        const responseJson = await response.json();

        setFeedback([responseJson, ...feedback]);
    }

    // Delete feedback from backend
    async function deleteFeedback(id: number) {
        // if (window.confirm('Are you sure you want to delete your feedback?')) {
        // }
        await fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'DELETE',
        });
        setFeedback(feedback.filter((item) => item.id !== id));
    }

    // Update feedback from backend
    async function updateFeedback(id: number, updateItem) {
        const reponse = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateItem),
        });

        const responseJson = await reponse.json();

        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...responseJson } : item
            )
        );
    }

    async function editFeedback(item) {
        setFeedbackEdit({
            item,
            edit: true,
        });
    }

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
