import { authForm } from "../auth";

export const login = async (form: authForm) => {
  const URL_END_POINT = "https://fakestoreapi.com/auth/login";

  try {
    const response = await fetch(URL_END_POINT, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error en login:", err);
    return null; // Retorna null para que el caller pueda manejar el error
  }
};
