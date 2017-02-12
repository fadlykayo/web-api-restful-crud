'use strict'

let models = require('../models')

module.exports = {
  getMemos: (req, res) => {
    models.Memos.findAll().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.json(err)
    })
  },
  createMemo: (req, res) => {
    models.Memos.create({
      text: req.body.content
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.json(err)
    })
  },
  deleteMemo: (req, res) => {
    models.Memos.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.send(data)
    }).catch(function (err) {
      res.json(err)
    })
  },
  updateMemo: (req, res) => {
    models.Memos.findById(req.params.id).then(function (memo) {
      memo.update({
        text: req.body.input
      }).then(function (data) {
        res.send(data)
      })
    }).catch(function (err) {
      res.json(err)
    })
  }
}
