import React from 'react';
import axios from 'axios';

const API="https://dog.ceo/api/breeds/image/random"
function useGetImageDogs(){
    	const [image, setimage] = React.useState();

	React.useEffect( () => {
		const promise=async()=>{
			const response = await axios(API);    
			setimage(response.data.message);}
		promise();
	}, []);    
	return image;
};

export{useGetImageDogs};