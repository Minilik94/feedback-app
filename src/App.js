import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Headers';
import FeedbackList from './components/FeedbackList';
import PropTypes from 'prop-types';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Headers />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  {/* <FeedbackForm handleAdd={addFeedback} /> */}
                  <FeedbackStats />
                  {/* <FeedbackStats feedback={feedback} /> */}
                  {/* <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                    /> */}
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

Headers.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4',
  textColor: '#ff6a95',
};

Headers.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default App;
