import { useEffect, useState } from "react";

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentCorousel = [
    {
      title: 'Contemporary Building Landscape',
      smallTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto suscipit magni eum delectus quia blanditiis.',
      corouselImages: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
    },
    {
      title: 'Experiences and Knowledge Integrated',
      smallTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus earum ad corrupti aliquam sunt.',
      corouselImages: 'https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&auto=format&fit=crop&w=519&q=80'
    },
    {
      title: 'Circles and Shapes In Architecture',
      smallTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae saepe at cum nisi.',
      corouselImages: 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const goToNext = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if(currentIndex === 2){
        setCurrentIndex(0);
      }else{
        setCurrentIndex(currentIndex+1);
      }
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-image"
        style={{
          backgroundImage: `url(${contentCorousel[currentIndex].corouselImages})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '610px',
          transition: 'transform 0.5s ease-in-out',  
          transform: 'perspective(1000px) translateZ(-10px)',
        }}
      ></div>
      <div className="description">
        <div>
          <h1>{contentCorousel[currentIndex].title}</h1>
          <p>{contentCorousel[currentIndex].smallTitle}</p>
        </div>
        <div className="carousel-effect">
          {contentCorousel.map((item, index) => {
            return (
              <span
                key={index} className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => goToNext(index)}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
