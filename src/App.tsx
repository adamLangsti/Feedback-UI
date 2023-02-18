import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback: any) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id: number) => {
        // if (window.confirm('Are you sure you want to delete your feedback?')) {
        // }
        setFeedback(feedback.filter((item) => item.id !== id));
    };

    return (
        <BrowserRouter>
            <Header />
            <div className='container'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    feedback={feedback}
                                    handleDelete={deleteFeedback}
                                />
                            </>
                        }></Route>
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
            <AboutIconLink />
        </BrowserRouter>
    );
}

export default App;
