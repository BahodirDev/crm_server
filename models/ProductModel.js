const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
const ReviewsModel = require('./ReviewsModel');
const imageSchema = mongoose.Schema({
    path: { type: String, required: true }
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    reviewsNumber: {
        type: Number,
    },
    sales: {
        type: Number,
        default: 0
    },
    attrs: [
        { key: { type: String }, value: { type: String } }
        // [{ key: "color", value: "red" }, { key: "size", value: "1 TB" }]
    ],
    images: [imageSchema],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: ReviewsModel,
        }
    ]
}, {
    timestamps: true,
})
module.exports = mongoose.model("Product", productSchema)

productSchema.index({ name: "text", description: "text" }, { name: "TextIndex" })
productSchema.index({ "attrs.key": 1, "attrs.value": 1 })
// productSchema.index({name: -1})



