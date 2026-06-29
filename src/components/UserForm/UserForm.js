import { useEffect, useState } from "react";

import "./UserForm.css";

function UserForm({ onSubmit, initialData }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        city: "",
        company: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {

        if (initialData) {

            setForm({

                name: initialData.name || "",

                email: initialData.email || "",

                city: initialData.address?.city || "",

                company: initialData.company?.name || ""

            });

        }

    }, [initialData]);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const validate = () => {

        let temp = {};

        if (!form.name.trim())
            temp.name = "Name is required";

        if (!form.email.trim())
            temp.email = "Email is required";

        else if (!/\S+@\S+\.\S+/.test(form.email))
            temp.email = "Invalid Email";

        if (!form.city.trim())
            temp.city = "City is required";

        if (!form.company.trim())
            temp.company = "Company is required";

        setErrors(temp);

        return Object.keys(temp).length === 0;

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!validate()) return;

        onSubmit(form);

    };

    return (

        <form onSubmit={handleSubmit}>

            <div className="form-group">

                <label>Name</label>

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />

                {errors.name && <span>{errors.name}</span>}

            </div>

            <div className="form-group">

                <label>Email</label>

                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />

                {errors.email && <span>{errors.email}</span>}

            </div>

            <div className="form-group">

                <label>City</label>

                <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                />

                {errors.city && <span>{errors.city}</span>}

            </div>

            <div className="form-group">

                <label>Company</label>

                <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                />

                {errors.company && <span>{errors.company}</span>}

            </div>

            <button
                className="submit-btn"
                type="submit"
            >

                {initialData ? "Update User" : "Add User"}

            </button>

        </form>

    );

}

export default UserForm;