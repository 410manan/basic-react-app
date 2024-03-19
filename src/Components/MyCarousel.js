import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'; // Import your CSS file

function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(null);

  const [images, setImages] = useState([]); // Array for image URLs
  const totalSlides = 10; // Adjust for desired number of slides
  const visibleSlides = 5; // Number of slides visible at a time

  // Image URLs (replace with your actual image URLs)
  const imageUrls = [
        'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/istock-810937516-c4b0acc493ae8590a43439b5e7987d10.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVOykBTxU7AhJaUz14TxEi-GmK9PBK0DqpRTeYowcVF-r77NonKFednSX22lHDQxd4Fw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVOykBTxU7AhJaUz14TxEi-GmK9PBK0DqpRTeYowcVF-r77NonKFednSX22lHDQxd4Fw&usqp=CAU',
        'https://imageio.forbes.com/blogs-images/startswithabang/files/2016/07/Venus_Earth.jpg?height=476&width=711&fit=bounds',
        'https://images.unsplash.com/photo-1503431804479-7c0384e4fa6a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.newscientist.com/wp-content/uploads/2021/04/29112534/2amj054_web.jpg',
        'https://images.newscientist.com/wp-content/uploads/2021/04/29112534/2amj054_web.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fgpa3k95k5wNa1hJHm7IDyciq9WGnMxgMYXQkwx1GPpoFK8a9ViWwDQxC4TrJR57Rv8&usqp=CAU',
        'https://universemagazine.com/wp-content/uploads/2023/02/z2n535j3c1ba1-2048x1858.jpg',
        'https://cdn.astrobin.com/solutions/images/20996/2022/08699b5f-be6e-4c8b-9f50-a4a1834f507a-1672422215.jpg' 
    ];

    useEffect(() => {
      setImages(imageUrls); // Set images on component mount
    }, [imageUrls]); // Dependency array ensures images are set only once
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 0.5) % totalSlides); // Wrap around at the end
      }, 2000); // Set interval for automatic slide transition (2 seconds)
  
      return () => clearInterval(intervalId);
    }, [totalSlides]); // Dependency array ensures interval updates with changes in totalSlides
  
    const handleSlideTransition = () => {
      if (slidesRef.current) {
        slidesRef.current.style.transform = `translateX(-${currentSlide * (100 / visibleSlides)}%)`; // Adjust for visible slides
      }
    };
  
    useEffect(handleSlideTransition, [currentSlide]); // Trigger transition on currentSlide change
  
    return (
      <div className="container text-center">
        <div className="row" ref={slidesRef}>
          {images.map((image, index) => (
            <div key={index} className="col">
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </div>
        {/* Removed previous and next buttons */}
      </div>
    );
  }
  
  export default MyCarousel;