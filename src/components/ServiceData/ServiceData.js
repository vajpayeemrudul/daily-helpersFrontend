import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ServiceSequence from './ServiceSequence';

export default function ServiceData(props) {

    const [services, getServices] = useState('');
    const [tempservices, getTempservices]= useState('');

    const url = 'http://localhost:5000/serviceProvider';

    useEffect(()=>{
        getAllServices();
    },[]);

    const getAllServices = ()=>{
        axios.get(`${url}`)
        .then((response) =>{
            const allServices = response.data;
            getServices(allServices);
            getTempservices(allServices);
            const search=props.search;
            if(search.length >0)
            {
              const tempsearch=getTempservices.filter(e=>e.service.toLowerCase.includes(search.toLowerCase()));
              getServices(tempsearch);
            }
            // console.log(props);
            // getTempservices(allServices);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

  return (
    <ServiceSequence services={services} tempservices={tempservices}/>
  )
}
