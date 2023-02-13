import React from 'react'

interface AppType {
    name : string;
}

 const App = (props : AppType) => {
     const {name} = props;
  return (
    <div style={{ fontSize:"20px" }}>{name}</div>
  )
}


export default App;