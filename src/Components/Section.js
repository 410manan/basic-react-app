import React, { useState, useEffect } from 'react';
import './Section1.css';

function Section1() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [ 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/istock-810937516-c4b0acc493ae8590a43439b5e7987d10.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVOykBTxU7AhJaUz14TxEi-GmK9PBK0DqpRTeYowcVF-r77NonKFednSX22lHDQxd4Fw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVOykBTxU7AhJaUz14TxEi-GmK9PBK0DqpRTeYowcVF-r77NonKFednSX22lHDQxd4Fw&usqp=CAU', 'https://imageio.forbes.com/blogs-images/startswithabang/files/2016/07/Venus_Earth.jpg?height=476&width=711&fit=bounds', 'https://images.unsplash.com/photo-1503431804479-7c0384e4fa6a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.newscientist.com/wp-content/uploads/2021/04/29112534/2amj054_web.jpg', 'https://images.newscientist.com/wp-content/uploads/2021/04/29112534/2amj054_web.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fgpa3k95k5wNa1hJHm7IDyciq9WGnMxgMYXQkwx1GPpoFK8a9ViWwDQxC4TrJR57Rv8&usqp=CAU', 'https://universemagazine.com/wp-content/uploads/2023/02/z2n535j3c1ba1-2048x1858.jpg', 'https://cdn.astrobin.com/solutions/images/20996/2022/08699b5f-be6e-4c8b-9f50-a4a1834f507a-1672422215.jpg' ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="section">
            <div className="image-container">
                <div className="image-wrapper image-wrapper-1">
                    {images.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        />
                    ))}
                </div>
                <div className="image-wrapper image-wrapper-2">
                    <img src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
                </div>
            </div>
        </div>
    );
}

export default Section1;
