export function contactForm(prevState,formData) {
const contactData = {
    email:formData.get("email"),
    username:formData.get("username"),
    message:formData.get("message")
}

  // Add Server side Validations
  if (
    isInvalidInput(contactData.email) ||
    isInvalidInput(contactData.username) ||
    isInvalidInput(contactData.message) ||
    !contactData.email.includes("@")
  ) {
    return { message: "Invalid Entries" };
    // throw new Error("Invalid Entries"); // create a new error page
  }
}
function isInvalidInput(text) {
    return !text || text.trim() === "";
}