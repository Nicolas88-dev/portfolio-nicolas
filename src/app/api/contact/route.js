import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Nom, email et message sont obligatoires." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Nicolas <onboarding@resend.dev>",
      to: ["nicolas.lestrez@gmail.com"],
      subject: `Nouveau message : ${subject || "Contact portfolio"}`,
      replyTo: email,
      text: `
Nouveau message depuis le portfolio

Nom : ${name}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}
Sujet : ${subject || "Non renseigné"}

Message :
${message}
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return Response.json(
        { error: "Erreur Resend lors de l'envoi." },
        { status: 500 }
      );
    }

    console.log("Email envoyé :", data);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur API contact :", error);

    return Response.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}