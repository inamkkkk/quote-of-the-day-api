const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const { authenticate } = require('../middlewares/authMiddleware');

router.get('/random', quoteController.getRandomQuote);
router.post('/', authenticate, quoteController.createQuote);
router.get('/', quoteController.getAllQuotes);
router.get('/:id', quoteController.getQuoteById);
router.put('/:id', authenticate, quoteController.updateQuote);
router.delete('/:id', authenticate, quoteController.deleteQuote);

module.exports = router;