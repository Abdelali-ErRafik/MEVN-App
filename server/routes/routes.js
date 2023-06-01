const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'-'+ file.originalname);
    }
})

const upload = multer({ storage: storage }).single('image');

// Router configuration
router.get('/', API.fetchAllPosts);
router.get('/:id', API.fetchPostById);
router.post('/', upload, API.createPost);
router.patch('/:id', upload, API.updatePost); //Put Update / Patch Update
router.delete('/:id', API.deletePost);

module.exports = router;