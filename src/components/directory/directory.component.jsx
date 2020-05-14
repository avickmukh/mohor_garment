import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const sections = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      size: 'small',
      linkUrl: 'hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      size: 'small',
      linkUrl: 'jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      size: 'small',
      linkUrl: 'sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'mens'
    }
  ]
function Directory(){
    const [menuSections, setMenuSections] = useState(sections);
    return(
        <div className='directory-menu'>
            {
                menuSections.map(({id, ...otherProps})=>(
                    <MenuItem key={id} {...otherProps} />
                ))
            }
        </div>
    )

}

export default Directory;