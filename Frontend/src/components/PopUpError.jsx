
import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import { useState } from 'react';


function Component(props) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <Alert color="failure" className="relative" icon={HiInformationCircle}>
          <span className="font-medium">Invalid Code! </span> There is an existing brother with the same code.
          <button className="absolute font-medium right-1 px-3" onClick={handleDismiss}>X</button>
          
    </Alert>
      )}
    </>
  );
}

export default Component;
