
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
        <Alert color="failure" className="relative p-2 m-2 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200" icon={HiInformationCircle}>
          <span className="font-medium">Invalid email or password! </span>
          <button className="absolute font-medium right-1 px-3" onClick={handleDismiss}>X</button>
          
    </Alert>
      )}
    </>
  );
}

export default Component;
