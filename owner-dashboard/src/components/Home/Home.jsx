import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Home.css'
import axios from "../../../services/axios-interceptor.js";
import NavBar from "./Navbar.jsx";
import { useNavigate } from "react-router-dom";

function Home() {

  const [currentIndex, setCurrentIndex] = useState();
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(false);
  function handleChange(index) {
    setCurrentIndex(index);
  }
  
  const getImages=()=>{
    if (!restaurant.main_image)
    {
        return []
    }
    const{main_image,menu_images,extra_images}=restaurant
    return [main_image,...menu_images,...extra_images]
  }
  const renderSlides = getImages().map((image,index) => (
    <div className="image-container" key={index}>
      <img src={image} alt={`carouesel-image-${index}`} className="slide-img"  />
    </div>
  ));


    const getRestaurant = async () => {
        try {
                setLoading(true)
            const { data } = await axios.get(`http://localhost:3000/api/restaurants/myRestaurant`)
            setRestaurant(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            if (error.response.status === 403 || error.response.status === 401) {
                localStorage.clear()
                navigate('/')
            }
        }


    }

    useEffect(() => {
        getRestaurant()
        console.log(restaurant.main_image)
    }, [])



    return (
        <div>
            <NavBar />

      <div className="App">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={getImages()[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
 
      </div>
      {loading && (
                <div className='loading'>
                    <div className='spinner'></div>
                </div>
            )}
    </div>
 
  );
}

export default Home