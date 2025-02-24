import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { authForm } from "../auth";
import { loaderCircle } from "../../../assets/svg/svg";

export const Login = () => {
  const navigate = useNavigate();
  const { authForm, setAuthForm, loginUser, isLoading, setIsLoading } =
    useAuth();

  const handleInputsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    setAuthForm((prev: authForm) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let error: boolean;

    try {
      setIsLoading(true);
      error = await loginUser(authForm);

      
      
      if (error) {
        alert("usuario o contraseña incorrector");
      } else {
        navigate("/auth");
        <Navigate to={'/auth'} />
      }
    } catch (err) {
      alert(err);
    }

    setIsLoading(false);
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-bg to-blue-950">
      <section className="px-8 py-10 min-w-[30%] rounded-xl flex flex-col justify-center bg-white shadow-lg">
        {/* Header */}
        <section className="mb-6 text-center">
          <h1 className="text-4xl mb-4 font-bold text-gray-800">Iniciar sesión</h1>
          <p className="text-lg font-semibold text-gray-600">Bienvenido de nuevo!</p>
        </section>

        {/* Formulario */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="username"
              value={authForm.username}
              onChange={handleInputsChange}
              placeholder="Usuario"
              className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="password"
              name="password"
              value={authForm.password}
              onChange={handleInputsChange}
              placeholder="Constraseña"
              className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Recuerdame
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Olvidate tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-bold ${isLoading ? 'bg-blue-400 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}  text-white text-center  transition cursor-pointer`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-4">
                <div className="animate-spin">{loaderCircle}</div>
                <p>Processando</p>
              </div>
            ) : (
              <p>Inicar sesión</p>
            )}
          </button>
        </form>
      </section>
    </section>
  );
};
