import React, { useState } from "react";

const Navbar = () => {
  const navElement = ['HOME', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP'];
  const [activeIndex,setActiveIndex] = useState(0);

  const handleIndex = (index)=>{
    setActiveIndex(index);
  }
  return (
    <div className="Navbar-container">
      <div className="Navbar-content1">
        <img src="https://tadao.qodeinteractive.com/" alt="Logo" />
        <p
          style={{
            fontFamily: 'Khand, sans-serif',
            textTransform: 'uppercase',
            color: '#8e7861',
            fontSize: '16px',
            lineHeight: '1.25em',
            fontWeight: 600,
            letterSpacing: '.1em',
            margin: '2px 0 0 20px',
          }}
        >
          TADAO ARCHITECTURE
        </p>
      </div>

      <div className="Navbar-content2" style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
        {navElement.map((ele, index) => {
          return (
            <div
              key={index}
              className={`naveffect ${ele.toLowerCase()} ${index === activeIndex?'active':''} `} 
              onClick={()=>handleIndex(index)}
              style={{
                color: '#8e7861',
                cursor: 'pointer',
                width: '20%',
                borderRight: index !== navElement.length - 1 ? '1px solid #8e7861' : 'none', 
                textAlign: 'center',
                padding: '10px 0',
                transition: 'all 0.3s ease',
              }}
            >
              {ele}
            </div>
          );
        })}
     
    </div>
    </div>
  );
};

export default Navbar;
