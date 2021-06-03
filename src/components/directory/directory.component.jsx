import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.style.scss';

class Directory extends React.Component{
	constructor(){
		super();

		this.state = {
			sections:[
				{
				title: 'womens',
				imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			    id: 1,
			     size: 'large',
			    linkUrl: 'shop/womens'
			  },
			  {
			    title: 'mens',
			    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			    id: 2,
			    size: 'large',
			    linkUrl: 'shop/mens'
			  },
			  {
			    title: 'sneakers',
			    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			    id: 3,
			    linkUrl: 'shop/sneakers'
			  },
			  {
			    title: 'hats',
			    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			    id: 4,
			    linkUrl: 'shop/hats'
			  },
			  {
			    title: 'jackets',
			    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			    id: 5,
			    linkUrl: 'shop/jackets'
			  }
			]
		}
	}
	render(){
		return(
			<div className='directory-menu'>
			{
				this.state.sections.map(({title, imageUrl, id, size}) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
					))
			}
			</div>

			)
	}
	
}

export default Directory;