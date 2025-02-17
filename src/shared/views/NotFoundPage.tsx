import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-red-600">
          404
        </h1>
        <p className="text-2xl text-gray-800 mt-4 font-semibold">
          ¡Oh no! Parece que tu comida se ha escapado 🍔💨
        </p>
        <p className="text-md text-gray-600 mt-2">
          Pero no te preocupes, aún puedes atraparla antes de que se enfríe.
        </p>

        <Link
          to="/login"
          className="mt-6 inline-block px-8 py-3 text-white bg-green-500 rounded-full text-lg font-bold shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          🔍 Buscar comida
        </Link>

        <div className="mt-6">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXJyMnBzcDkwMDZ5bHdqa2NxMDhkdm00NDI0NTM1azNhc2s0a2o4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VgOBJ97S95FJ13wIgC/giphy.gif"
            alt="Hamburguesa corriendo"
            className="mx-auto w-40"
          />
        </div>
      </div>
    </div>
  );
};
