import './FormComponent.css'
import {useState} from "react"

const FormComponent = ()=>{
    
    const [userName,setUserName] = useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [repassword,setRePassword]=useState('')

    const [errorUserName,setErrorUserName]=useState('')
    const [errorEmail,setErrorEmail]=useState('')
    const [errorPassword,setErrorPassword]=useState('')
    const [errorRePassword,setErrorRePassword]=useState('')

    const [userNameColor,setUserNameColor]=useState('')
    const [emailColor,setEmailColor]=useState('')
    const [passwordColor,setPasswordColor]=useState('')
    const [rePasswordColor,setRePasswordColor]=useState('')

    const validateForm = (e)=>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('กรุณาป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รหัสต้องมีจำนวนมากกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        }
        if(repassword != "" && repassword === password ){
            setErrorRePassword('')
            setRePasswordColor('green')
        }else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRePasswordColor('red')
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control" >
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:rePasswordColor}}/>
                    <small>{errorRePassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}

export default FormComponent;