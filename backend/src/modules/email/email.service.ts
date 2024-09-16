import SMTPTransport from "nodemailer/lib/smtp-transport/index.js";
import { EmailRequestDTO } from "./dto/emailRequest.js";
import * as nodemailer from 'nodemailer'
import { db } from "../../db/db.js";
import { email_links } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { ApiError } from "../errorHandler/ApiError.js";

export async function sendLinkToEmail(dto: EmailRequestDTO ) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.PASS_USER
        }
    } as SMTPTransport.Options)

    const info = transporter.sendMail({
        from: `"From Julian 👻" <${process.env.EMAIL_USER}>`,
        to: `${dto.email}`,
        subject: "Secret message",
        text: "Hello! Approve your email adress, click to the link!",
        html: 
                `
                
                    <div>
                        <a href="localhost:3000/approve/email/${dto.link}">APPROVE!</a>
                    </div>

                `
    })
}

export async function approveEmail(link: string): Promise<void> {
    const findUserLink = await db.select().from(email_links).where(eq(email_links.link, link));
    if(findUserLink.length < 1) {
        throw ApiError.badRequest("User not found!")
    }

    await db.update(email_links).set({isActive: true}).where(eq(email_links.user_id, findUserLink[0].user_id));
}