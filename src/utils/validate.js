export const checkvalidate=(email,password)=>{
    const isEmailvalid=/^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailvalid)return "Email is not valid";
    if(!isPasswordValid) return "password is not valid";

    return null;
};