import { data } from "autoprefixer";

const { NextResponse } = require("next/server");

export async function GET(request) {
    console.log(request)
    const data = [
        {
            id:1,
            name:"Sepatu Adidas",
            price:100000
        }
    ]


    return NextResponse.json({
        message: "Hello World",
        status: 200,
        data: data
    })

}