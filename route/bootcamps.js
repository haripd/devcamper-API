const express = require('express')
const {
    getBootcamps,
    getSingleBootcamp,
    createNewBootcamp,
    UpdateBootcamp,
    deleteBootcamp
} = require('../controller/bootcampCrtl')

const router = express.Router()

router.route(`/`).get(getBootcamps).post(createNewBootcamp)

router.route(`/:id`).get(getSingleBootcamp).put(UpdateBootcamp).delete(deleteBootcamp)

module.exports = router