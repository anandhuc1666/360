import User from "../model/UserSchema.js";
import bcrypt from "bcrypt"

export const Register = async (req, res) => {
  const { name, email, number, password } = req.body;

  try {
    if (!name || !email || !number || !password) {
      return res.status(400).json({
        message: "Please complete all fields",
      });
    }

    const existed = await User.findOne({ email });

    if (existed) {
      return res.status(409).json({
        message: "User already registered",
      });
    }
    const passHash = await bcrypt.hash(password,10)

    const newUser = await User.create({
      name,
      email,
      number,
      password:passHash
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server issue",
    });
  }
};


export const login = async(req,res)=>{
    const {email, password} = req.body;
try {
      if(!email||!password){
        return res.status(404).json({message:"please complete the verification"})
    }
    const user  = await User.findOne({email})
    if(!user){
        return res.status(404).json({message:"user not found invalid user email"})
    }
    
   const checkPassword = await bcrypt.compare(password, user.password)
   if(!checkPassword){
    return res.status(400).json({message:"user password invalid"})
   }

   return res.status(200).json({message:"user login successfully✅", user:user})
} catch (error) {
  return res.status(404).json({message:"internal server issue"}) 
}

}