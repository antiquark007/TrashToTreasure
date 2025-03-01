import { Mail, Phone, MapPin, Send } from 'lucide-react';
import img from './assets/office.jpg';

function Contact() {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col lg:flex-row justify-center items-center p-6 gap-10">
            {/* Left Section - Contact Info & Image */}
            <div className="flex flex-col lg:w-1/2 space-y-6 text-center lg:text-left">
                <h1 className="text-4xl font-bold text-blue-700">Get in Touch</h1>
                <p className="text-lg text-gray-700">Let's make the world cleaner together!</p>

                <div className="space-y-6">
                    <ContactInfo Icon={Mail} title="Email" detail="contact@gmail.com" />
                    <ContactInfo Icon={Phone} title="Phone" detail="+91 9149608266" />
                    <ContactInfo Icon={MapPin} title="Address" detail="KumaraSwamy Layout, Bangalore" />
                </div>

                <img src={img} alt="Office" className="rounded-lg shadow-md w-3/4 h-64 object-cover mx-auto" />
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-white p-12 rounded-2xl shadow-lg w-full max-w-2xl">
                <h1 className="text-4xl text-center font-bold text-gray-800">Send Us A Message</h1>

                <form className="mt-8 space-y-6">
                    <InputField label="Name" type="text" />
                    <InputField label="Email" type="email" />
                    <TextAreaField label="Message" />
                    
                    <button className="bg-blue-600 flex items-center justify-center gap-2 text-white text-2xl font-semibold py-4 w-full rounded-lg shadow-lg hover:bg-blue-700 transition-all">
                        <Send className="h-7 w-7" /> Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

// Reusable Contact Info Component
function ContactInfo({ Icon, title, detail }) {
    return (
        <div className="flex items-center space-x-4">
            <Icon className="h-6 w-6 text-blue-600" />
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-gray-700">{detail}</p>
            </div>
        </div>
    );
}

// Reusable Input Field Component
function InputField({ label, type }) {
    return (
        <div>
            <label className="text-lg font-semibold block">{label}</label>
            <input 
                type={type} 
                className="bg-gray-100 w-full h-[50px] mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
        </div>
    );
}

// Reusable TextArea Component
function TextAreaField({ label }) {
    return (
        <div>
            <label className="text-lg font-semibold block">{label}</label>
            <textarea 
                className="bg-gray-100 w-full h-[200px] mt-2 p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
            ></textarea>
        </div>
    );
}

export default Contact;
