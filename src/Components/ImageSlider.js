import { useEffect } from "react";
import { useState } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";

function ImageSlider({ image }) {
  const [currentImage, setCurrentImage] = useState(0);
  const length = image.length;
  

  const handleNext = () => {
    if (currentImage + 1 !== length) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(length - 1);
    }
  };

  useEffect(()=>{
    setCurrentImage(0)
  },[])

  return (
    <div className="relative">
      <img
        src={`http://localhost:3001/files/${image[currentImage]}`}
        className="b-shadow h-[300px] w-[300px] rounded-lg"
      />
      <div className="absolute bottom-2 flex justify-between w-[70%] text-[#013662] text-2xl">
        <button onClick={handleNext}>
          <IoArrowRedoSharp />
        </button>
        <button onClick={handlePrev}>
          <IoArrowUndoSharp />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
