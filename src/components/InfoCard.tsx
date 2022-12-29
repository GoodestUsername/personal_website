import { useState } from 'react';
import Card from 'react-bootstrap/Card';

interface InfoCardInterface {
    title : string,
    children: React.ReactNode,
    imageSrc: string,
    imageAlt: string
}

const InfoCard: React.FC<InfoCardInterface> = ({title, children, imageSrc, imageAlt}) => {
    const [cardOpened, setCardOpened] = useState<Boolean>(false);

  return (
    <Card className="bg-dark text-white border-0 m-1" style={{ width: '18rem' }}>
     {imageSrc !== '' && (
      <Card.Img className="my-auto d-block" onClick={() => setCardOpened(!cardOpened)} style={{ cursor: "pointer" }} src={imageSrc} alt={imageAlt} variant="top"/>
     )}
     {cardOpened && (
        <Card.Body>
            <Card.Title className='text-center'><b>{title}</b></Card.Title>
            <Card.Text>{children}</Card.Text>
        </Card.Body>
     )}
    </Card>
  );
}

export default InfoCard