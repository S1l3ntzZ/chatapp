import './home.css'
import Header from '../../Components/header/header'
import Posts from '../../Components/posts/posts'
import Sidebar from '../../Components/sidebar/sidebar'

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <Posts/>
      <Sidebar/>
    </div>
  </>
)}
