import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../ComponentCss/AllCard.css';

function AllCards({ data,action }) {
  const navigate = useNavigate();

  const gotoCart = (data) => {
    navigate("/Cartdetail", { state: { value: data } });
  };

  // Check if data is available
  if (!data) {
    console.error('Data is null or undefined');
    return null;
  }

  return (
    <div>
      <Card className='maink-card12'>
        <Card.Body>
          <Card.Title 
            onClick={() => { gotoCart(data); }} 
            style={{ color: "#0bb7af" }}
          >
            <p className='title-para'>{data.title}</p>
          </Card.Title>
          <Card.Text onClick={() => { gotoCart(data); }}>
            <p className='body-para'>{data.Body}</p>
          </Card.Text>
          <div className='card-footer2'>
            <p>₹<span>{data.price}</span></p>
            <Button 
              type='submit' onClick={()=>{action(data)}} 
              style={{ backgroundColor: "#862692", border: "none" }}
            >
              Book
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AllCards;
