import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Rating, { RatingProps } from './components/Rating/Rating.tsx'

const props: RatingProps = {
  totalStars: 6,
  shape: '\u2665', // Optional prop
  disabled: false, // Optional prop,
  readOnly: true,
  readOnlyValue: 3
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  // {/* </React.StrictMode>, */ }
  <>
    <Rating {...props} />
  </>
)
