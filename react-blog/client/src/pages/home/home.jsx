import { useState, useEffect } from 'react';
import {useLocation} from "react-router"
import './home.css'
import Header from '../../Components/header/header'
import Posts from '../../Components/posts/posts'
import Sidebar from '../../Components/sidebar/sidebar'
import axios from "axios"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();



  useEffect(() => { 
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts ()
   }, [search])
  return (
    <>
    <Header/>
    <div className="home">
      <Posts posts={posts}/>
      <Sidebar/>
    </div>
  </>
)}
