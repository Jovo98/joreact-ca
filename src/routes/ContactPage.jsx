import { useState } from "react";
export function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = { fullName: "", subject: "", email: "", body: "" };

        if (formData.fullName.length < 3) {
            newErrors.fullName = "Full name must be at least 3 characters long.";
            valid = false;
        }

        if (formData.subject.length < 3) {
            newErrors.subject = "Subject must be at least 3 characters long.";
            valid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            valid = false;
        }

        if (formData.body.length < 3) {
            newErrors.body = "Body must be at least 3 characters long.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Form submitted successfully!");
            console.log("Form data:", formData)
            setFormData({
                fullName: "",
                subject: "",
                email: "",
                body: "",
            });
        } else {
            alert("Please fill out the form correctly.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="fullName" className="block font-semibold">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                <div>
                    <label htmlFor="subject" className="block font-semibold">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="body" className="block font-semibold">Body</label>
                    <textarea
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="5"
                        required
                    ></textarea>
                    {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Submit

                </button>
            </form>
        </div>

    );
}

