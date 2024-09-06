import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { styles } from "../../_enums/style/styles";
import { SectionWrapper } from "../../_enums/hoc";
import { slideIn } from "../../_enums/utils/motion";
import emailjs from "emailjs-com";
import dotenv from "dotenv";

dotenv.config();

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID || "service_75jc6vr",
        process.env.EMAILJS_TEMPLATE_ID || "template_paoxs2c",
        {
          from_name: form.name,
          to_name: "Tuba Asif",
          from_email: form.email,
          to_email: "tubarajput456@gmail.com",
          message: form.message,
        },
        process.env.EMAILJS_PUBLIC_KEY || "FF3OJ2A33hWo-7JOY"
      )
      .then(
        () => {
          setLoading(false);
          setResponseMessage("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setResponseMessage("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black p-8 rounded-2xl border border-white"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {/* Display Response Message */}
        <div
          className={`flex items-center justify-center text-[15px] mt-7 ${
            responseMessage.includes("Thank you")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {responseMessage}
        </div>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="text-white xl:flex-1"
      >
        <div className="flex flex-col justify-center items-center p-4 gap-5">
          <div className="flex flex-row">
            <div className="text-lg">Email :</div>
            <a
              href="mailto:tubarajput456@gmail.com"
              className="mx-5 text-blue-600 underline hover:text-blue-800 transition-colors duration-300 ease-in-out"
            >
              tubarajput456@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-5 ">
            <div className="text-lg">Follow:</div>
            <a
              href="https://www.linkedin.com/in/tuba-asif-766449182/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="LinkedIn"
                src="./assets/Icons/Social/linkedinLogo.png"
                className="p-2 bg-white w-12 h-12 object-contain rounded-full hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://github.com/tuba-theProgrammer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Github"
                src="./assets/Icons/Social/githubLogo.png"
                className="p-2 bg-white w-12 h-12 object-contain rounded-full hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
