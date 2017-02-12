var express = require('express')
var router = express.Router()
const memoController = require('../controllers/memos');

/* GET home page. */
router.get('/', memoController.getMemos)

router.post('/create', memoController.createMemo)

router.put('/update/:id', memoController.updateMemo)

router.delete('/delete/:id', memoController.deleteMemo)

module.exports = router
