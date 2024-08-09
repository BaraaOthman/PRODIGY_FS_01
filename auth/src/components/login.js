import "./loginRegister.css"
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import UserService from '../UserServices';


const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        const formDataObj = new FormData();
        formDataObj.append("username", formData.username);

        formDataObj.append("password", formData.password);

        event.preventDefault();
        try {
            const response = await UserService.login(formData)
            setMessage(response.data.message);
            if (response.data.success) {
                // Redirect to dashboard or home page
                navigate('/register')
            }
        } catch (error) {
            setMessage(error.response.data.message || 'An error occurred.');
        }
    };

    return (
        <div className="login-register-container">
            <h1>Login</h1>
            {message && <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>

                    <input
                        type="text"
                        id="username"
                        className="formFieldInput"
                        placeholder="Enter your username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        id="password"
                        className="formFieldInput"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="footer">
                <p>Don't have an account? <a href="/register">Sign Up Here</a></p>
            </div>
        </div>
    );
};

export default Login;
// hayete

// bdi elk shaghle hon
// fini?  shu badik hayete
// ma tz3al mni bs
// bas shu?
// b3tzer mnk ya albe aa klshi
// ma kn azdi wallah wala kn bdi etla3 aa hakyak
// bdi fasrlk aa rawa2 baaden nshallah
// nshallah ma ytawlu hol aana laan aanjd shi ktir
// bi daln bi kl 8rfe w bi kl ma7al
// b3sha2ak w krmeli khalas sakru w maba2a tsht8el halaa
// baaden nshallah btfasrli w bkafi aa hyda l ases ya 3yuni

// hayete hon ma 7a2e7ki shi ana, akid b3sha2ik hal shi ma badu aya nekash bas tasaroufk ma3i msh m7taram w kamen 3am etna2ash ma3k btredi 3alayi b nafseyi , hon 3al akid ma byen7aka bas akid mosta7il ez3al mnik ,bas me5id 3ala 5atri mnik w mn ba3d eznik trekini 5alis el login w ba3dein bnetfeham 3ala rawaa2
// ktir ma eli 3en ehkik saraha ma kn bdi abdn ehki ma3ak b nafsiye bs elt bjareb se3dak w shuf eza btn7al ma3i shi shaghle btsir enta btkafi mn ba3di
// w kamen bdi halaa tsht8el la elk w thst8el devnet w taaml shi la shrkeh ya albe wallah msh krmeli hl 7aki
/// aam elk krmeli ma tkafi khalas khaline sakru


// hayete allah yerda3 3aliki ana esa badi taki w bye5las el login w basakr
//rou7i la3and ahlna nbesti w 5alini rakez 3aleih
// ba3dein 3am t2elili 3moul shi la elak ma yali la elik howi la eli
// rou7i la3and ahlna w trekini eshte8el w b5alis w bsakru ma t3tali el ham

// wallah ha ez3al mnk ktir aam en2her
// khalas krmeli sakru w sht8el krmelna w la elna hayete

// ya hayete la2anu kermelik 3am 5alsu ma t3tali el ham 3edi ma3 el 3ayli w eltelik taki w b5alis
// ma ba2a tza3li feini bzyede

//😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭
/// ma bdi za3lakkkkkk  kkkkkkkk khalas albe

// hayete treki el laptop w la3and ahlna y
// ma bdi la ahlna wala bati5 enta aham mn dne kla


















































// ha seb aal aayleeeeeeeeeeee
// shu sayer hayetee?
// ma sayer shi 3omru ma hada yrja3 mabdi za3lakkkkkkkkkkkkkkkkkkkkkkkkkkkk
// barou2 albe







































////////////////
/////
//
///
//maba2aaaaaaaaaa t2liiii hekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// ma 5alayteini kafi hayete kafi hayete
// mn ba3d ezn jaleltik ma t2tshi

// hayete barou2 eltelik 3edi nbesti ma3 ahlna w bnetfeham 3ala rawa2
// 5alas trekiini heik merte7 b shi yali 3am eshte8lu w enti rou7i la3and ahlna
// 5alast hayete

/// ktirrrrrrrrrrrrr masmoumm badanii tfeh ma bdi shuf 7ada 5alas
//





////////////////////
//ktirrrr m3asbeeeeeeeeeeeeeeeeeeeeeeeeeeee








// hayete shu 3am ta3mmli
// ya 3ami shu fe hala2
// b7yete hayda she8l hayda?



// bdi sakru khalas bdi tafii aanjd 3asabt
// 3am t5alfi klmti?
// ana ezeiki aw ezi 3ayletna b shi?
