import { useState, useContext, useEffect } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button';
import FeedbackRating from './FeedbackRating';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, editFeedback, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if(editFeedback.editing === true) {
      setText(editFeedback.item.text);
      setBtnDisabled(false);
      setRating(editFeedback.item.rating);
    }
    
  },[editFeedback])

  const handleTextChange  = (e) => {
    if(text === '') {
        setMessage(null);
        setBtnDisabled(true);
    }else if(text !== '' && text.length <= 10) {
        setMessage('Text should be atleast 10 characters.');
        setBtnDisabled(true);
    }else {
        setMessage(null);
        setBtnDisabled(false);
    }
    setText(e.target.value);
  }
  const submitRating = (e)  => {
    e.preventDefault();
    const newObj = {
      text,
      rating
    }
    if(editFeedback.editing === true) {
      updateFeedback(editFeedback.item.id, newObj);
    }else {
      addFeedback(newObj);
    }
    setText('');
  }
  return (
    <Card>
        <form onSubmit={submitRating}>
            <h2>How would you rate your service with us?</h2>
            <FeedbackRating onRating={ (rating) => { setRating(rating)}}/>
            <div className="input-group">
                <input type="text" onChange={ handleTextChange } placeholder='Write a review' value={text} />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>                
            </div>
            { message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm