import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Dani Andrés <dani@danielandresvidal.com>',
      to: ['dani@danielandresvidal.com'], // destinatario real
      subject: 'Nuevo mensaje desde tu portfolio',
      replyTo: email,
      text: message,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
