
import mongoose from "mongoose"
import {faker} from '@faker-js/faker'
import crypto from 'crypto'

// connect to the database - local db or remote db
// connection string - mongodb://127.0.0.1:27017/test-db
// mongodb+srv://pt-web-04-b:<password>@cluster0.aajb25r.mongodb.net/?retryWrites=true&w=majority

async function connectDatabbase() {
    const connection = 'mongodb://127.0.0.1:27017/pt-web-05-test'

    return new Promise((resolve, reject) => {
        mongoose.connect(connection)
        .then(() => {
            console.log('Connected to database');
            resolve();
        })
        .catch((err) => {
            console.log('Could not connect to database')
            reject(err);
        })
    })
}

// For each collection

// First we need to define a schema - blueprint of our data

// plain way to define the schema
const userSchema = new mongoose.Schema({ // Class
    name: String,
    email: String,
    age: Number,
    image: String,
    verifiedEmail: Boolean,
    balance: Number,
})


// We need to create a model from that schema
const userModel = mongoose.model('User', userSchema, 'users') // 'User' -> 'users'

// Model will provide us all the function to do CRUD operations on that collection

async function test() {

    await connectDatabbase();

    // we will execute some queries on collections from here



    // Create User

    // let user = await userModel.create({
    //     name: 'John Doe',
    //     email: 'john.doe@john.doe',
    //     age: 32,
    //     image: 'https://example.com/image.jpeg',
    //     verifiedEmail: false,
    //     balance: 23000.34
    // })




    // Create Multiple - Insert Many

    // console.log('Users added')




    // Find All
    // let users = await userModel.find()

    // console.log(users); // empty array




    // Find One

    // let user = await userModel.findOne({
    //     email: 'Triston60@gmail.com'
    // })





    // Update One

    // await userModel.findOneAndUpdate({
    //     email: 'Triston60@gmail.com'
    // }, {
    //     email: 'Triston601@gmail.com'
    // })

    // user.email = 'jason.doe@john.doe'
    // user.name = 'Jason Doe'


    // Update Many

    // await userModel.updateMany({
    //     age: 99
    // }, {
    //     age: 32
    // })



    // Delete One
    // await userModel.findOneAndDelete({
    //     email: 'Jayne.Jacobi@yahoo.com'
    // })

    // Delete Many
    // await userModel.deleteMany({
    //     age: {
    //         $mod: [2, 0]
    //     }
    // })


}

test();