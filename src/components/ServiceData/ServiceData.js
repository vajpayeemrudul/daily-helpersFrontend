import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ServiceSequence from './ServiceSequence';

export default function ServiceData(props) {

    const [services, setServices] = useState([]);
    const [tempservices, getTempservices]= useState('');

    const url = 'https://daily-helpers.herokuapp.com/serviceProvider';

    useEffect(()=>{
        getAllServices();
    },[]);

    const getAllServices = ()=>{
        axios.get(`${url}`)
        .then((response) =>{
          // console.log(response.data);
            const allServices = response.data;
            setServices(allServices);
            
            // getTempservices(allServices);
            // const search=props.search;
            // if(search.length >0)
            // {
            //   const tempsearch=getTempservices.filter(e=>e.service.toLowerCase.includes(search.toLowerCase()));
            //   getServices(tempsearch);
            // }
            // console.log(props);
            // getTempservices(allServices);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

  return (
    <ServiceSequence services={services} tempservices={tempservices}/>
  )
}
