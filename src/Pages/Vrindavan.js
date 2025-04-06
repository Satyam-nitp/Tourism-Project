import React, { useState } from 'react'
import temples from '../Components/data';
import more from '../Components/more.jpg'
import r from '../Components/r.jpg'
import Place from '../Components/Place';
import Card from '../Components/Card';

function Vrindavan() {
    const [items, setItems] = useState(temples);

    function CardHandler(id){
        if(id === 'fav'){
            const newItems = temples.filter(item => item.fav === true);
            setItems(newItems);
            return;
        }
        if(id === 'All'){
            setItems(temples);
            return;
        }
        const newItems = temples.filter(item => item.id === id);
        setItems(newItems);
    }

  return (
    <div className="App mt-[70px]">
      <div className='AppCon'>
        <h2 className='heading'>वृंदावन धाम</h2>
        <img className='more' src={more} alt='ggg'></img>
        <img className='more2' src={more} alt='ggg'></img>
        <img className='radha' src={r} alt='gggg'></img>
        <p>
          वृंदावन की गलियां पावन, हर कोना चमत्कार,
          जहाँ बजती मधुर बंसी, गूंजे राधा नाम पुकार।
        </p>
        <Place cardHandler={CardHandler}></Place>
        <Card items={items}></Card>
      </div>
    </div>
  );
}

export default Vrindavan
