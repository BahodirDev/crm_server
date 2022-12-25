const {model,Schema} = require("mongoose")

const reviewSchema = new Schema({
    comment: {type: String, required: true},
    rating: {type: Number, required: true},
    user: {
        _id: {type: Schema.Types.ObjectId, required: true},
        name: {type: String, required: true}
    }
}, {
    timestamps: true,
})

module.exports = model("Review", reviewSchema)
