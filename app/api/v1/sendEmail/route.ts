import { Resend } from "resend";
import { NextRequest } from "next/server";
import { configDotenv } from "dotenv";
configDotenv();

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("api key : ", process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    console.log("name : ", name);
    console.log("email : ", email);
    console.log("message : ", message);
    const { data, error } = await resend.emails.send({
      from: "prallavagg002@gmail.com",
      to: [email],
      subject: "Hello world" + name,
      text: message,
    });

    console.log("data : ", data);

    if (error) {
      throw Response.json({ error, message: "error 1" }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    throw Response.json({ error, message: "error 2" }, { status: 500 });
  }
}
