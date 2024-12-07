import { useState } from "react";


const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [form, setForm] = useState({
        name: "",
        email: ""
    });
    const [error, setError] = useState({
        name: "",
        email: ""
    });
    const [show, setShow] = useState(true);

    const validate = () => {
        const { name, email } = form;
        let valid = true;
        let newErrors = { name: "", email: "" };

        if (name.trim().length < 2) {
            newErrors.name = "El nombre debe tener al menos 2 caracteres";
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "Por favor ingresa un email válido";
            valid = false;
        }

        setError(newErrors); 
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setForm({ name: "", email: "" }); 
            setShow(true); 
            setError({ name: "", email: "" }); 
        } else {
            setShow(false); 
        }
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}
                <button type="submit">Send</button>
            </form>
            {show && (
                <p>Mensaje enviado</p>
            )}
        </div>
    );
};

export default Form;
