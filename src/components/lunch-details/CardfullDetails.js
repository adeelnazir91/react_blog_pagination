import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CardfullDetails = () => {

  const {id} = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get('https://api.spacexdata.com/v4/launches/past?flight_id='+ id);
    console.log("data....",res.data);
    setData(res.data);
    setLoading(false)
}

useEffect(() => {
    fetchData();
}, []);


  return (
    <div>
        <h1>Details Id- {id}</h1>
    </div>
  )
}

export default CardfullDetails
