import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from '../shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackItem({ items }) {

  const {deleteFeedback, updateEditFeedback} = useContext(FeedbackContext);
  
  return (
    <Card>
        <div className='num-display'>{items.rating}</div>
        <button className='edit' onClick={() => { updateEditFeedback(items) }}>
          <FaEdit color='purple' />
        </button>
        <button className="close" onClick={ () => { deleteFeedback(items.id)} }>
          <FaTimes color='purple' />
        </button>
        <div className='text-display'>{items.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  items: PropTypes.object.isRequired
}

export default FeedbackItem