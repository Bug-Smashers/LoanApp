import React from 'react';
import classes from "./LoginScreen.module.css";
import { useForm } from 'react-hook-form';
import { useRef,useState } from "react";

function UserdataIn() { 
    // const {aadhardoc,handleSubmit}=useForm();
    // const aadhar_number = useRef(null);
    // const pan_number = useRef(null);
    // const onSubmit=(data)=>{
    //     console.log(data);
    // }
    const AadharNum = useRef(null);
    const AadharDoc = useRef(null);
    // const [AadharDoc2,setAadharDoc2]=useState(null);

    const PanNum = useRef(null);
    const PanDoc = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(AadharDoc.current.value);
        // setAadharDoc2(e.current.file[0]);
        // console.log(AadharDoc2.type);

        const reader=new FileReader()
        reader.onload=function(){
            console.log(reader.result)
        }
        reader.readAsText(AadharDoc.current)
    };

    return (
        <div className={classes.documents}>
            <form onSubmit={handleSubmit}>
            <div className={classes.txt_field}>
                <label htmlFor="">Aadhar Number</label>
                <input 
                type="text"
                ref={AadharNum}
                placeholder="Aadhar Number"
                />
            </div>
            <div className={classes.file}>
                <input
                id="aadhar"
                 type="file" 
                 ref={AadharDoc}
                 name="Aadhar"
                 />
            </div>
            <div className={classes.txt_field}>
                <label htmlFor="">Pan Number</label>
                <input 
                type="text"
                ref={PanNum}
                placeholder="Pan Number"
                />
            </div>
            <div className={classes.file}>
                <input
                 type="file" 
                 id="pan"
                 ref={PanDoc}
                 name="Aadhar"
                 />
            </div>
            <div className={classes.submit}>
                <button>Submit</button>
            </div>
            </form>
        </div>
    );
};

export default UserdataIn;