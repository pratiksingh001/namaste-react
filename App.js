const heading = React.createElement("h1",
    {
        // this is the place where you give attributes to your tags
        id: 'heading',
        id: 'heading',
        xyz:'abc'
    }
    , "Hello from React")
        
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)