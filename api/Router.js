const { Router } = require("express");
const { responseApi } = require('../utils')

const router = Router();

router.get("/api/data", (res,req) => responseApi(res,req,200,'todo') );

router.get('*', (res,req) => responseApi(res,req,404,'notfound'));
  
module.exports = router;
