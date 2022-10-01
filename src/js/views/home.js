import React, {useEffect, useState} from "react";
import "../../styles/home.css";


export const Home = () => {
	const [data, setData]= useState('');
	useEffect(async()=>{
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		 await fetch("https://3000-mojonapower-scrapingand-uilfmyagsqa.ws-us67.gitpod.io", requestOptions)
			.then(response => response.json())
			.then(result => setData(result.moreexchange))
			.catch(error => console.log('error', error));
	},[])
	return(
	<div className="text-center mt-5">
		<h1>Resultado del scraping!</h1>
		
		<div dangerouslySetInnerHTML={{ __html: data }} />
		
	</div>
)};
