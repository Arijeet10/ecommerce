import ContactForm from "./_components/ContactForm";
import ContactDetails from "./_components/ContactDetails";

const Contact = () => {
  return (
    <>
      <div className="px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div>
            <ContactDetails />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
