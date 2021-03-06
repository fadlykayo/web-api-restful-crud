'use strict'

let models = require('../models')

module.exports = {
  getMemos: (req, res) => {
    models.Memos.findAll().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  createMemo: (req, res) => {
    models.Memos.create({
      text: req.body.create
    }).then(function () {
      models.Memos.findAll().then(function (data) {
        res.send(data)
      })
    }).catch(function (err) {
      res.send(err)
    })
  },
  deleteMemo: (req, res) => {
    models.Memos.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      models.Memos.findAll().then(function (data) {
        res.send(data)
      })
    }).catch(function (err) {
      res.send(err)
    })
  },
  updateMemo: (req, res) => {
    models.Memos.findById(req.params.id).then(function (memo) {
      memo.update({
        text: req.body.update
      }).then(function () {
        models.Memos.findAll().then(function (data) {
          res.send(data)
        })
      }).catch(function (err) {
        res.send(err)
      })
    })
  }
}
