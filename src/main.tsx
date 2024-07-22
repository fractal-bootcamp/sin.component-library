import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Dropdown from './components/dropdown/Dropdown.tsx'
const exampleProps = {
  options: [
    { label: 'Default Option 1', value: 'default1' },
    { label: 'Default Option 2', value: 'default2' }
  ],
  defaultText: 'Select an option',
  disabled: false,
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dropdown props={exampleProps} />
  </React.StrictMode>,
)
