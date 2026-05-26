import emailjs from "@emailjs/browser";

export const sendEmail = async (
  form: HTMLFormElement
) => {
  try {
    const result = await emailjs.sendForm(
      "service_bokgnsm",
      "template_r76cxah",
      form,
      "yqmvRSH7Wv2iKN1bn"
    );

    return result;
  } catch (error) {
    throw error;
  }
};