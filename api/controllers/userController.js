const { hash } = require('bcrypt')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') // when user login we need to create token
const User = require('../models/UserModel')


const registerController = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            res.json({
                error: err
            })
        }

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
            
        })

        user.save()
            .then(result => {
                res.status(201).json({
                    message: 'User Created Successfully',
                    user: result
                })
            })
            .catch(error => {
                res.json({
                    error
                })
            })
    })
}

const loginController = (req, res, next) => {

    let email = req.body.email
    let password = req.body.password

    User.findOne({email})
        .then(user => {
            if(user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if(err) {
                        res.json({
                            message: 'Erros Occured'
                        })
                    }
                    if(result) {

                        let token = jwt.sign({email: user.email, _id: user._id}, 'SECRET', {expiresIn: '2h'})
                        res.json({
                            message: 'Login Successful',
                            token
                        })
                    }
                    else {
                        res.json({
                            message: 'Login Failed. Password Doesn\'t Match'
                        })
                    }
                })
            }
            else { 
                res.json({
                    message: 'User Not Found'
                })
            }
        })
        .catch()
}

const getAllUsers = (req, res, next) => {
    User.find()

    .then(users =>{
        res.status(200).json({
            message: 'All Users',
            users
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'Error Occured',
            error: err
        })
    })
}
/*
const deleteUser = (req, res, next) => {
    let id = req.params.id

    User.findByIdAndRemove(id)

    .then(result => {
        res.status(200).json({
            message: 'User Deleted',
            result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'Error Occured',
            error: err
        })
    })
}*/

module.exports = {
    registerController,
    loginController,
    getAllUsers,
  //  deleteUser
    
}