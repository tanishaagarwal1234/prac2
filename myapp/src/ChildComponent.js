// ChildComponent.js
import React from 'react';

// The ChildComponent receives "props" as an argument
const ChildComponent = (props) => {
  return (
    <div>
      {/* Access the "message" prop */}
      <p>{props.message}</p>
    </div>
  );
};

export default ChildComponent;