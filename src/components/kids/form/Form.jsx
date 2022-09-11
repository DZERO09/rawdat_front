import React, { useEffect, useState, useContext } from 'react'
import Button from '../../../shared/Button';
import axios from "axios"
import '../kid/form.css';
import SelectMonth from './.././../util/SelectMonth';
import { useNavigate, Route, Routes, Link } from 'react-router-dom'
import SelectDay from '../../util/SelectDay';
import SelectYear from '../../util/SelectYear';


function Form() {
    const navigate = useNavigate();
    const [kid, setKid] = useState(null);
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstName] = useState("");
    const [day, setDay] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());


    const [checked, setChecked] = useState({ boy: true, girl: false });
    const [sex, setSex] = useState("BOY");
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [message, setMassage] = useState("")
    const [inputImage, setInputImage] = useState(null);
    const [isSex, setIsSex] = useState("secondary");
    const hundelImage = (e) => {
        console.log(e.target.files[0]);
        setInputImage(e.target.files[0]);


    }



    async function postImage(e) {

        const fd = new FormData();
        fd.append('image', inputImage)
        if (inputImage === null) {
            postBody(0)
        } else {
            await axios.post('/picture/upload', fd)
                .then(function (res) {
                    const id = res.data
                    postBody(id)
                }).catch(function (error) {
                    return error;
                })

        }


    }

    async function postBody(id) {
        await axios.post('/kid', JSON.stringify({
            "lastname": `${lastname.trim()}`,
            "firstname": `${firstname.trim()}`,
            "day": `${day}`,
            "month": `${month}`,
            "year": `${year}`,
            "sex": `${sex}`,
            "picture_id": `${id}`
        }),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(function (response) {
                //returnKid(response.data.id);
                navigate(`/kid/${response.data.id}/Profile`, { replace: true });

            })


            .catch(function (error) {
                return error;
            })



    }


    async function post(e) {

        e.preventDefault();
        await postImage()




    }



    const hundleChange = (e) => {
        setChecked({ girl: false, boy: true })
        setSex("BOY")
        setIsSex("secondary")
    }
    const hundleChangegirl = (e) => {
        setChecked({ boy: false, girl: true })
        setSex("GIRL")
        setIsSex("primary")
    }
    const handleLastname = (e) => {
        setLastname(e.target.value)
        if (lastname === "") {
            setMassage("")
            setBtnDisabled(false)
        } else if (lastname !== '' && lastname.trim().length <= 4) {
            setBtnDisabled(true);
            setMassage("Enter a proper name . . . ")


        } else {
            setMassage("")
            setBtnDisabled(false)
        }

    }


    return (
        <form onSubmit={post} className="kid-form" >
            <label for="image" id='Kid-profile-picture'>

                Photo:

            </label>
            <input id="Kid-form-profile-picture" type="file" name="image" accept="image/*" onChange={hundelImage}></input>
            <label htmlFor="lastname">
                Nom:
            </label>
            <input type="text" name='lastname' id="lastName" value={lastname} onChange={handleLastname} placeholder="Nom de l'enfant (Obligatoire)" required />
            {message && <div className='Kid-form-message'> {message}</div>}
            <label>
                Prénom:
            </label>
            <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="Prenom de l'enfant (Obligatoire)" required />
            <label htmlFor="">
                Date de naissance:
            </label>
            <div className='wrapper-select-kid-form'>
                <SelectMonth select={(month) => setMonth(month)} month={month} />


                <SelectDay select={(day) => setDay(day)} day={day} />

                <SelectYear select={(year) => setYear(year)} year={year} />

            </div>
            <label>
                Sex:
            </label>
            <div>
                <label >
                    Boy <input type="radio" value={sex} checked={checked.boy} onChange={hundleChange}

                    />
                    Girl <input value={sex} type="radio" checked={checked.girl} onChange={hundleChangegirl} />
                </label>
            </div>
            <div>

            </div>


            <Button type='submit' version={isSex} isDisabled={btnDisabled}>Submit</Button>


        </form>
    )
}

export default Form
