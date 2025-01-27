// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  // Define a prop named "message" with the value "Hello from Parent!"
  const message = "Hello from Parent!";

  return (
    <div>
      {/* Render the ChildComponent and pass the "message" prop */}
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
