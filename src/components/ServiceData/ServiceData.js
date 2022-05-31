import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ServiceSequence from './ServiceSequence';

export default function ServiceData() {

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
        })
        .catch(error => console.error(`Error: ${error}`));
    }

  return (
    <ServiceSequence services={services} tempservices={tempservices}/>
  )
}
