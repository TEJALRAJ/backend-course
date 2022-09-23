
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({ // Class
    name: String,
    email: String,
    age: Number,
    image: String,
    verifiedEmail: Boolean,
    balance: Number,
})

const userModel = mongoose.model('User', userSchema, 'users') // 'User' -> 'users'

export default userModel;