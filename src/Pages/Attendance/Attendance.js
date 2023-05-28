import './Attendance.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import Checkin from '../../img/checkin.png'
import Checkout from '../../img/thankyou.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


function Attendance() {
  const [checked, setChecked] = useState("")
  const navigate = useNavigate()
  const handleClick = async () => {
    try{
      await axios.post('/attendance/addAttendance', {
        dates: Date()
      })
      toast.success('Successfully Checked', {
        position: "top-right",
        theme: "colored"
      })
      navigate('/')
      
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    axios.get('/attendance/getOneAttendance').then(res=> {
      if(res.data.length % 2 == 0){
        setChecked(true)
      }else{
        setChecked(false)
      }
    })

  },[checked])
  return (
    <>
      <Navbar />
      <div className='attendanceContainer'>
        <div className="attendance-card">
          <div className="attendance-card-border-top">
          </div>
          <div className="img">
            <img src={checked ? Checkin : Checkout}></img>
          </div>
          <span> {checked ? "Yor're Welcome" : "Thank You"}</span>
          <p className="job"> Please {checked ? "Check In" : "Check Out"}</p>
          <button onClick={handleClick}> {checked ? "Check In" : "Check Out"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Attendance