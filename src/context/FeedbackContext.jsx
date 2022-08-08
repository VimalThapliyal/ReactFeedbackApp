import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item number is 1',
            rating: 8
        },
        {
            id: 2,
            text: 'This item number is 2',
            rating: 10
        },
        {
            id: 3,
            text: 'This item number is 3',
            rating: 7
        }
])
    const [editFeedback, setEditFeedback] = useState({
        item: {},
        editing: false
    });
    // Add Feedback
    const addFeedback = (feedbackData) => {
        feedbackData.id = uuidv4();
        setFeedback([feedbackData,...feedback]);
    }
    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    // Edit Feedback
    const updateEditFeedback = (item) => {
        setEditFeedback({
            item,
            editing: true
        })
    }
    //  Update Feedback
    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map(item => item.id === id ? {...item, ...updatedItem} : item))
    }
    return <FeedbackContext.Provider value={{
        feedback: feedback,
        addFeedback: addFeedback,
        deleteFeedback: deleteFeedback,
        updateEditFeedback: updateEditFeedback,
        editFeedback: editFeedback,
        updateFeedback: updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;