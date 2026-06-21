import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, subject, message, website } =
      await request.json();

    const phoneRegex =
      /^(?:(?:\+33|0033)[1-9](?:[\s.-]?\d{2}){4}|0[1-9](?:[\s.-]?\d{2}){4})$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (website) {
      return Response.json({ success: true }, { status: 200 });
    }

    if (!name || name.length < 2) {
      return Response.json({ error: "Nom invalide." }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
      return Response.json({ error: "Email invalide." }, { status: 400 });
    }

    if (!phoneRegex.test(phone)) {
      return Response.json({ error: "Téléphone invalide." }, { status: 400 });
    }

    if (!subject || subject.length < 2) {
      return Response.json({ error: "Sujet invalide." }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return Response.json({ error: "Message trop court." }, { status: 400 });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: "Nom, email et message sont obligatoires." },
        { status: 400 },
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
        { status: 500 },
      );
    }

    console.log("Email envoyé :", data);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur API contact :", error);

    return Response.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 },
    );
  }
}
