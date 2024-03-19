const Bootcamp = require('../models/BootcampModel')
//@desc     GET all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }

}

//@desc     GET single bootcamps
//@route    GET /api/v1/bootcamps/:{id}
//@access   Public
exports.getSingleBootcamp = async (req, res, next) => {
    try {
        const singleBootcamp = await Bootcamp.findById(req.params.id)
        if (!singleBootcamp) {
            return res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: singleBootcamp
        })
    } catch (error) {
        // res.status(400).json({success: false})
        next(error)
    }

}

//@desc     CREATE new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Public
exports.createNewBootcamp = async (req, res, next) => {
    // console.log(req.body)

    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
}

//@desc     Update the bootcamp
//@route    PUT /api/v1/bootcamps/:{id}
//@access   Public
exports.UpdateBootcamp = async (req, res, next) => {
    try {
        const updateBootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            //mongoose validator
            runValidators: true
        })

        //if updateBootcamp data has null
        if (!updateBootcamp) {
            res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: updateBootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }

}

//@desc     Delete all bootcamp
//@route    DELETE /api/v1/bootcamps/:{id}
//@access   Public
exports.deleteBootcamp = async (req, res, next) => {

    try {
        const delbtcmp = await Bootcamp.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            data: {}
        })

        if (!delbtcmp) {
            return res.status(400).json({
                success: false
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }

    // res.status(200).json({
    //     success: true,
    //     msg: `Delete this bootcamp : ${req.params.id}`
    // })
}