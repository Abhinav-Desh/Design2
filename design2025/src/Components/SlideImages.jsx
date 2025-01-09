const SlideImages = ({HeaderText,smallText,backPic}) => {

    return (
      <div
        className="Slide-container"
        style={{
          backgroundImage:`url(${backPic})`,
          minWidth: "100%",
          position: "relative",
          height: "618px",
          transition: "all 0.5s linear",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
       
        <div className="Slide-contents" style={{width:'500px',fontSize:'80px',
          position:'absolute',top:'300px',left:'50px'
        }}>
          <div
            className="circles-shapes"
            style={{ padding:'10px',fontSize:'50px',color:'wheat',
              fontWeight:'bolder'
            }}
          >
            {HeaderText}
          </div>
          <div
            className="circle-texts"
            style={{
              fontSize: "25px",
              color: "#63762b",
              
              padding: "10px",
            }}
          >
           
           {smallText}
          </div>
        </div>
      </div>
    );
  };
  
  export default SlideImages;
  