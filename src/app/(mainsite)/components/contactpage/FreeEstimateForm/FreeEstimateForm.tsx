"use client"
import { useRef, useState } from "react"
import "./freeestimateform.css"
import MessageStatus from "../MessageStatus/MessageStatus"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{
        sendEmail(evt, setStatus, {
            receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
            data: Object.fromEntries(new FormData(formRef.current))
        }, formRef.current)
    }}>

        {/* START FIELDS */}

            <h4 id="estimateFormTitle">Contact Form</h4>

            <div className="input-wrapper">
                <input className="half-input" required type="text" name="Name" id="nameInput" placeholder={"Name"} />
                <input className="half-input" required type="text" name="Age" id="ageInput" placeholder={"Age"} />
            </div>

            <div className="input-wrapper">
                <input className="half-input" required type="text" name="Height" id="heightInput" placeholder={"Height"} />
                <input className="half-input" required type="text" name="Weight" id="weightInput" placeholder={"Weight"} />
            </div>

            <div className="input-wrapper">
                <input required type="email" name="Email" id="emailInput" placeholder={"Email"} />
            </div>

            <div className="input-wrapper">
                <input required type="text" name="Date_of_Birth" id="dobInput" placeholder={"Date of Birth"} />
            </div>
            
            <div className="input-wrapper">
                <input required type="text" name="Phone_Number" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
                <textarea required maxLength={9999} name="Details" id="messageInput" placeholder={"Any Details..."}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-link" id="estimateFormSubmit" type="submit">Submit</a>
            </div>

        </form>
    </>
  )
}
