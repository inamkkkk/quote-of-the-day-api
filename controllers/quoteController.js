const Quote = require('../models/Quote');
const { NotFoundError, BadRequestError } = require('../utils/error');

exports.getRandomQuote = async (req, res, next) => {
  try {
    const count = await Quote.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(randomIndex);

    if (!quote) {
      throw new NotFoundError('No quotes found.');
    }

    res.json(quote);
  } catch (error) {
    next(error);
  }
};

exports.getAllQuotes = async (req, res, next) => {
    try {
      const quotes = await Quote.find();
      res.json(quotes);
    } catch (error) {
      next(error);
    }
};

exports.getQuoteById = async (req, res, next) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      throw new NotFoundError('Quote not found.');
    }
    res.json(quote);
  } catch (error) {
    next(error);
  }
};

exports.createQuote = async (req, res, next) => {
  try {
    const { text, author } = req.body;
    if (!text || !author) {
        throw new BadRequestError('Text and author are required.');
    }

    const newQuote = new Quote({ text, author });
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    next(error);
  }
};

exports.updateQuote = async (req, res, next) => {
  try {
    const { text, author } = req.body;
    if (!text || !author) {
        throw new BadRequestError('Text and author are required.');
    }
    const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, { text, author }, { new: true });
    if (!updatedQuote) {
      throw new NotFoundError('Quote not found.');
    }
    res.json(updatedQuote);
  } catch (error) {
    next(error);
  }
};

exports.deleteQuote = async (req, res, next) => {
  try {
    const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
    if (!deletedQuote) {
      throw new NotFoundError('Quote not found.');
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};