'use strict'

let models = require('../models')

module.exports = {
  getMemos: (req, res) => {
    models.Memos.findAll().then(function (data) {
      res.send({Memos: data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  createMemo: (req, res) => {
    models.Memos.create({
      username: req.body.username,
      password: hash.generate(req.body.password),
      role: req.body.role,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(function (data) {
      res.json({data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  deleteMemo: (req, res) => {
    models.Memos.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.send(`Delete user with ID: ${req.params.id}`)
    }).catch(function (err) {
      res.json(err)
    })
  },
  updateMemo: (req, res) => {
    models.Memos.findById(req.params.id).then(function (findUser) {
      findUser.update({
        username: req.body.username,
        password: hash.generate(req.body.password),
        role: req.body.role,
        updatedAt: new Date()
      }).then(function (data) {
        res.json({data, message: 'Data has been updated'})
      })
    }).catch(function (err) {
      res.json(err)
    })
  }
  // getBooks: (req, res) => {
  //   Memos.find().then(function (data) {
  //     res.json({data})
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // }
  // createBook: (req, res) => {
  //   Memos.create({
  //     isbn: req.body.isbn,
  //     title: req.body.title,
  //     author: req.body.author,
  //     category: req.body.category,
  //     stock: req.body.stock
  //   }).then(function (data) {
  //     res.json({data})
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // },
  // deleteBook: (req, res) => {
  //   Memos.findOneAndRemove({id: req.params.id}).then(function (data) {
  //     res.send(`Deleted Memo with Id: ${req.params.id}`)
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // },
  // updateBook: (req, res) => {
  //   Memos.findOneAndUpdate({isbn: req.params.isbn}, req.body, {new: true}).then(function (data) {
  //     // new true -> mengembalikan data baru
  //     res.json(data)
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // }
}
