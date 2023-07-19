import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { items } from '../model/types';
import '../CSS/DetailItem.css'

interface NavbProps{
  log:boolean;
  // setLog:React.Dispatch<React.SetStateAction<boolean>>
}


const DetailItem:React.FC<NavbProps>  = ({log}) => {
  const [item,setItem]=useState<items>()
  const {id}=useParams()
  const getItem=async()=>{
    let url=`http://localhost:3004/products/${id}`
    let res= await fetch(url);
    let data = await res.json();
    setItem(data)
  }
  useEffect(()=>{
    getItem()
  },[])
console.log(item)
  return (
    <div className='DetailItem'>
        <img src={item?.img} width={500}/>
        <div className='disc'>
      <span>{item?.title}</span>
      <span>${item?.price}</span>
      <select>
        {item?.size.map((sz)=>(
          <option>{sz}</option>
        ))}
      </select>
      
      <span className='newItem'>{item?.new === true?'NEW':""}</span>
      <button>Purchase</button>
      </div>
   
    </div>
  )
}

export default DetailItem