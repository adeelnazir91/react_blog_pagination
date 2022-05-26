import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './includes/Header';
import Footer from './includes/Footer';
import LunchDetails from './lunch-details/LunchDetails';
import Pagination from './lunch-details/Pagination';
import { Maincontainer } from './styles/Containerstyle';
import { device } from '../helpers';
import { Link } from 'react-router-dom';

export const Gridcol = styled.div`
width:30%;
float:left;
padding-left:12px;
padding-right:12px;
margin-bottom:30px;
height:auto;

@media ${device.mobileL} {
  width:100%;
  height:auto;
  padding-left:0;
  padding-right:0;
}

`

export const Clearfloat = styled.div`
 clear:both;
`

const Wrapper = () => {

     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [currentPage, setCurrentpage] = useState(1);
     const [itemPerPage] = useState(6)


     const fetchData = async () => {
          const res = await axios.get("https://api.spacexdata.com/v4/launches/past");
          console.log(res.data);
          setData(res.data);
          setLoading(false)
     }

     useEffect(() => {
          fetchData();
     }, []);



     const indexofLastItem = currentPage * itemPerPage;
     const indexofFirstItem = indexofLastItem - itemPerPage;
     const currentItem = data.slice(indexofFirstItem, indexofLastItem);

     const paginate = (pageNumber) => setCurrentpage(pageNumber);



     // if(loading){
     //      return <h2>Loading...</h2>
     // }

     return (
          <>

               <Maincontainer>
                    {loading && <div>loading....</div>}
                    <div>
                         {!loading && (
                              currentItem.map((item, index) => {
                                   return (
                                        <Gridcol key={index}>
                                             <Link to={`/carddetails/${item.id}`} className="cardlink">
                                                  <LunchDetails

                                                       description={item.details}
                                                       image={item.links.patch.small}
                                                       title={item.name}
                                                       id={item.id}
                                                  />
                                             </Link>

                                        </Gridcol>
                                   )

                              })
                         )

                         }
                         <Clearfloat />
                         <Pagination
                              itemPerPage={itemPerPage}
                              totalData={data.length}
                              paginate={paginate}
                              currentPage={currentPage}
                         />
                    </div>
               </Maincontainer>

          </>

     )
}

export default Wrapper
