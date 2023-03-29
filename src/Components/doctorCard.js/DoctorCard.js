import './DoctorCard.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import moment from 'moment'


function DoctorCard({doctor}) {
  const navigate = useNavigate()

  const handleButton = (e) => {
    console.log(e.target.name)
    navigate('/doctors/123')
  }
  return (
    <>
      <div className="">
        <div className="doctor-page">
          <img className="img-fluid rounded-2" src={`http://localhost:5000/images/${doctor.doctor.img}`} alt="img" />
          <h5 className="px-3">{doctor.doctor.fullname}</h5>
          <p className=" text-secondary-emphasis mb-2 px-3">{doctor.doctor.specialist}</p>
          <p className=" text-secondary-emphasis mb-2 px-3">NRS. <span>{doctor.doctor.price}</span></p>
          {/* <div className='star doctorStar'>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <span>5</span>
          </div> */}
          <Link to={`/doctor/${doctor.id}`}><button className="btn btn-lg py-3 btn-outline-dark w-100"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button></Link>
        </div>
      </div>

    </>
  )
}

export default DoctorCard



// import './DoctorCard.css'
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'
// import moment from 'moment'


// function DoctorCard() {
//   const navigate = useNavigate()
//   const handleButton = (e) => {
//     console.log(e.target.name)
//     navigate('/doctors/123')
//   }

//   const tomorrowMoment = moment().clone().add(1,'days')
//   const twoDayMoment = moment().clone().add(2,'days')
//   const threeDayMoment = moment().clone().add(3,'days')
//   const fourDayMoment = moment().clone().add(4,'days')
//   // console.log(tomorrowMoment._d, twoDayMoment._d, threeDayMoment._d)
//   console.log()
//   const tommorowDate = moment(tomorrowMoment._d).format("YYYY-M-D")
//   const tommorowDate2 = moment(twoDayMoment._d).format("YYYY-M-D")
//   const tommorowDate3 = moment(threeDayMoment._d).format("YYYY-M-D")
//   const tommorowDate4 = moment(fourDayMoment._d).format("YYYY-M-D")
//   return (
//     <>
//       <div className="doctor-card mt-5">
//         <div className='doctor-cardLeft'>
//           <div className='doctor-cardDecs'>
//             <div className='doctorSchedule'>
//               <div className="doctorScheduleLeft">
//                 <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
//               </div>
//               <div className='doctorScheduleRight'>

//                 <table class="table">
//                   <thead>
//                     <tr>
//                       <th scope="col">Date</th>
//                       <th scope="col">Available Time</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <th scope="row">{tommorowDate}</th>
//                       <td class='d-flex'>
//                         <button name="2:00" onClick={handleButton}>2:00</button>
//                         <button name="3:00" onClick={handleButton}>3:00</button>
//                         <button name="4:00" onClick={handleButton}>4:00</button>
//                         <button name="5:00" onClick={handleButton}>5:00</button>
//                       </td>
//                     </tr>

//                     <tr>
//                       <th scope="row">{tommorowDate2}</th>
//                       <td class='d-flex'>

//                         <button onClick={handleButton}>2:00</button>
//                         <button onClick={handleButton}>3:00</button>
//                         <button onClick={handleButton}>4:00</button>
//                         <button onClick={handleButton}>5:00</button>
//                       </td>
//                     </tr>

//                     <tr>
//                       <th scope="row">{tommorowDate3}</th>
//                       <td class='d-flex'>

//                         <button onClick={handleButton}>2:00</button>
//                         <button onClick={handleButton}>3:00</button>
//                         <button onClick={handleButton}>4:00</button>
//                         <button onClick={handleButton}>5:00</button>
//                       </td>
//                     </tr>

//                     <tr>
//                       <th scope="row">{tommorowDate4}</th>
//                       <td class='d-flex'>

//                         <button onClick={handleButton}>2:00</button>
//                         <button onClick={handleButton}>3:00</button>
//                         <button onClick={handleButton}>4:00</button>
//                         <button onClick={handleButton}>5:00</button>
//                       </td>
//                     </tr>

//                   </tbody>
//                 </table>

//               </div>

//             </div>
//             <div className='mt-3'>
//               <div className='detailsFlex'>
//                 <div>
//                   <div className='detailsDoctor'>
//                     <span><i class='bx bxs-right-arrow'></i></span><h5 class='mt-2'>Dr Ram baran Yadav</h5>
//                   </div>
//                   <div className='detailsDoctor'>

//                     <span><i class='bx bxs-right-arrow'></i></span><p className=" text-secondary-emphasis mt-2">Neurologist</p>
//                   </div>
//                 </div>
//                 <div>

//                   <div className='detailsDoctor'>
//                     <span><i class='bx bxs-right-arrow'></i></span><p className=" text-secondary-emphasis mt-2">Experience : 10 years</p>
//                   </div>
//                   <div className='star doctorCardStar'>
//                     <i class='bx bxs-star'></i>
//                     <i class='bx bxs-star'></i>
//                     <i class='bx bxs-star'></i>
//                     <i class='bx bxs-star'></i>
//                     <i class='bx bxs-star'></i>
//                     <span>5</span>
//                   </div>
//                 </div>
//               </div>

//             </div>

//           </div>
//           <div className='btnDoc'>
//             <button className="btn btn-lg py-3 btn-outline-dark"><span>Profile</span></button>
//             <button className="btn btn-lg py-3 btn-outline-dark"><span>Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
//           </div>
//         </div>

//         <div className='doctor-cardRight'>

//         </div>
//       </div>

//     </>
//   )
// }

// export default DoctorCard