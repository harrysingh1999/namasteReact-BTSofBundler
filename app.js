// DOM Manipulation using React without JSX
const heading = React.createElement('h2', {}, 'DOM Manipulation using React without JSX')
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(heading)   