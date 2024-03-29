import { useState } from 'react';
import { Alert } from 'flowbite-react';

function Component(props) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <Alert color="success" className="relative">
          <span className="font-medium">Succesfull Creation!</span> {props.type} has been created.
          <button className="absolute font-medium right-1 px-3" onClick={handleDismiss}>X</button>
        </Alert>
      )}
    </>
  );
}

export default Component;
