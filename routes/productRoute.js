const express = require('express');
const router = express.Router();

const {findAllProducts, getProductById, postProducts, updateProducts, deleteProdcuts} = require('../controller/controller');
router.get('/:id', findAllProducts);

router.get('/', getProductById);

router.post('/', postProducts);

//update data
router.put('/:id', updateProducts);
 
// delete data
router.delete('/:id', deleteProdcuts);
module.exports = router;