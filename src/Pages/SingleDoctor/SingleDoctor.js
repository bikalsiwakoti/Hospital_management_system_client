import React, { useEffect, useState } from 'react'
import style from "./Single.module.css";
import Input from "./Input";
import * as Yup from "yup"
import { BsPersonFill, BsTelephone, BsGenderAmbiguous } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdMailOutline, MdOutlineDateRange, MdOutlineAddLocationAlt, MdOutlineHealthAndSafety } from "react-icons/md";
import { ButtonBlue, ButtonWhite } from "./Button";
import { useFormik } from 'formik';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import axios from 'axios';
import mykey from "../../Components/khaliti/KhaltiKey";
import { ToastContainer, toast } from 'react-toastify';
import KhaltiCheckout from 'khalti-checkout-web'
import { useNavigate } from 'react-router-dom';


const schema = Yup.object({
  firstName: Yup.string()
    .min(2).max(25).required("Please enter your first name"),
  lastName: Yup.string()
    .min(2).max(25).required("Please enter your last name"),
  email: Yup.string()
    .email('Invalid email.')
    .required("Please enter your email"),
  phoneNumber: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Please enteryour phone number'),
  address: Yup.string()
    .min(2).max(20)
    .required('Required'),
  dateOfBirth: Yup.date()
    .required('Required'),
  dateOfAppointment: Yup.date()
    .required('Required'),
  gender: Yup.string()
    .required('Select One'),
  guardian: Yup.string()
    .min(2).max(25).required("Please enter your guardian name"),
  healthIssue: Yup.string()
    .required('Select One'),
});

function SingleDoctor() {
  // let config = {
  //   // replace this key with yours
  //   "publicKey": mykey.publicTestKey,
  //   "productIdentity": "1234567890",
  //   "productName": "Hospital Management System",
  //   "productUrl": "http://localhost:3000",
  //   "eventHandler": {
  //     async onSuccess(payload) {
  //       // hit merchant api for initiating verfication
  //       let data = {
  //         "token": payload.token,
  //         "amount": payload.amount / 100,
  //       };

  //       let config = {
  //         headers: { 'Authorization': mykey.secretKey }
  //       };
  //       console.log(config)
  //     },
  //     onError(error) {
  //       toast.error(error, {
  //         position: "top-right",
  //         theme: "colored"
  //       })
  //     },
  //     onClose() {
  //       toast.error("Ordered has been canceled", {
  //         position: "top-right",
  //         theme: "colored"
  //       })
  //     }
  //   },
  //   "paymentPreference": ["KHALTI"],
  // };


  const [oneDoctor, setOneDoctor] = useState([])

  const id = window.location.pathname.split('/')[2]


  // let checkOut = new KhaltiCheckout(config)

   const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      gender: '',
      guardian: '',
      healthIssue: "",
      dateOfAppointment: "",
      doctorId: ""
    },
    validationSchema: schema,
    onSubmit: async () => {
      // await checkOut.show({ amount: 10000 })
      const data = { ...formik.values, doctorId: oneDoctor[0]?.doctor?.id }
      try {
        const res = await axios.post('/patient/addDetails', data)
        console.log(res.data)
        toast.success('Succefully booked appointment', {
          position: "top-right",
          theme: "colored"
        })
        navigate('/doctors')

      } catch (error) {
        console.log(error)
      }
    }
  });


  useEffect(() => {
    axios.get(`/doctor/getOneDoctor/${id}`).then(res => setOneDoctor(res.data)).catch(err => console.log(err))
  }, [])

  return (
    <>
      <Navbar />
      <section className={style.main}>
        <header>
          <h1 className={style.mainHeader}>Book Appointment</h1>
          <p className={style.mainP}>Fill the appointment form below to book your appointment with {oneDoctor[0]?.doctor?.fullname}</p>
        </header>

        <div className={style.appointment}>
          <form className={style.form} onSubmit={formik.handleSubmit}>
            <Input
              id="firstName"
              type="text"
              name="First Name"
              placeholder="Enter First Name"
              logo={<BsPersonFill />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={formik.errors.firstName}
              touch={formik.touched.firstName}
            />
            <Input
              id="lastName"
              type="text"
              name="Last Name"
              placeholder="Enter Last Name"
              logo={<BsPersonFill />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              error={formik.errors.lastName}
              touch={formik.touched.lastName}
            />

            <Input
              id="phoneNumber"
              type="text"
              name="Phone Number"
              placeholder="Enter 10 digit mobile number"
              logo={<BsTelephone />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              error={formik.errors.phoneNumber}
              touch={formik.touched.phoneNumber}
            />

            <Input
              id="email"
              type="email"
              name="Email Address"
              placeholder="Enter email address"
              logo={<MdMailOutline />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.errors.email}
              touch={formik.touched.email}
            />

            <Input
              id="dateOfBirth"
              type="date"
              name="Date of Birth"
              placeholder="Select date of birth"
              logo={<MdOutlineDateRange />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
              error={formik.errors.dateOfBirth}
              touch={formik.touched.dateOfBirth}
            />

            <div className={style.inputLabel}>
              <label className={style.label} htmlFor="gender"> <BsGenderAmbiguous /> Gender <span className={style.star}>*</span> </label>
              <select className={style.select}
                id="gender"
                name="gender"
                form="genderForm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}>
                <option value="other">Other</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {
                (formik.errors.gender) && (formik.touched.gender) ?
                  (<p className={style.formError}>{formik.errors.gender}</p>)
                  : null
              }
            </div>

            <Input
              id="guardian"
              type="text"
              name="Guardian's Full Name"
              placeholder="Enter guardian's Name"
              logo={<BsPersonFill />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.guardian}
              error={formik.errors.guardian}
              touch={formik.touched.guardian}
            />

            <Input
              id="address"
              type="text"
              name="Address"
              placeholder="Enter your address"
              logo={<MdOutlineAddLocationAlt />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              error={formik.errors.address}
              touch={formik.touched.address}
            />

            <div className={style.inputLabel}>
              <label className={style.label} htmlFor="healthIssue"><MdOutlineHealthAndSafety /> Health Issue for Consultation <span className={style.star}>*</span> </label>
              <select className={style.select}
                id="healthIssue"
                name="healthIssue"
                form="healthIssueForm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.healthIssue}>
                <option value="cancer">Cancer</option>
                <option value="ulcer">Ulcer</option>
                <option value="ulcer">Cough</option>
                <option value="ulcer">Fever</option>
              </select>
              {
                (formik.errors.healthIssue) && (formik.touched.healthIssue) ?
                  (<p className={style.formError}>{formik.errors.healthIssue}</p>)
                  : null
              }
            </div>


            <Input
              id="dateOfAppointment"
              type="date"
              name="Date of Appointment"
              placeholder="Select appointment date"
              logo={<MdOutlineDateRange />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfAppointment}
              error={formik.errors.dateOfAppointment}
              touch={formik.touched.dateOfAppointment}
            />
            <div>

              <div className={style.khalti}>
                <h3 style={{ marginLeft: '20px' }}>Pay Via Khalti</h3>
                <img src='https://web.khalti.com/static/img/logo1.png'></img>
              </div>

              <div className={style.buttons}>
                <ButtonWhite name="Cancel" />
                <ButtonBlue type="submit" name="Book Appointment" />
              </div>
            </div>
          </form>
          <div className={style.doctorCard}>

            <header className={style.doctorCardHeader}>
              <h1 className={style.title}>Doctor Information</h1>
            </header>

            <div className={style.imgDiv}>
              <img alt="doc" className={style.doctorImage} src={`http://localhost:5000/images/${oneDoctor[0]?.doctor?.img}`} />
            </div>
            <div className={style.info}>
              <p><span>Doctors Name:</span> {oneDoctor[0]?.doctor?.fullname}</p>
              <p><span>Speciality:</span> {oneDoctor[0]?.doctor?.specialist}</p>
              <p><span>Experience:</span> Alka Hospital, Venus Hospital, Grande Hospital</p>
              <p><span>OPD Schedule:</span> Sunday - Thursday <br />(4:00 PM - 6:30 PM)</p>
              <p><span>Price:</span> NRS. {oneDoctor[0]?.doctor?.price}</p>
            </div>



            <div className={style.rating}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
        </div>

      </section>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default SingleDoctor