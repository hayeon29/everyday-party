const { Schema, default: mongoose } = require("mongoose");

const productInfoSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    option: {
        size: {
            type: String,
        },
        color: {
            type: String,
        },
    },
    count: {
        type: Number,
        required: true,
    },
});

const deliveryStatusEnum = ["주문완료", "배송준비", "배송중", "배송완료", "주문취소"];

const orderSchema = new Schema({
    // method: {
    //     type: String,
    //     enum: ["Card", "Cash"],
    //     required: true,
    // },
    orderedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    orderedBy: {
        type: String,
        required: true,
        //default: "Anonymous",
    },
    phoneNumber: {
        type: [String],
    },
    address: {
        type: [String],
        required: true,
    }, //['주소', '상세주소']의 형태로 저장
    products: {
        type: [productInfoSchema],
        required: true,
    },
    deliveryStatus: {
        type: String,
        required: true,
        enum: deliveryStatusEnum,
        default: "주문완료"
    }
});

module.exports = { orderSchema, productInfoSchema };
