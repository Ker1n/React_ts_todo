import React from 'react';
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => { 
    const history =useHistory();
    return ( 
      <>
        <h1>information</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsam error veniam alias consequuntur blanditiis mollitia expedita repellat facilis architecto quaerat sed doloribus sunt voluptates autem adipisci labore, accusantium aliquam?</p>
        <button className="btn" onClick={()=> history.push('/')}>Обратно к списку дел </button>
      </>
    )
}