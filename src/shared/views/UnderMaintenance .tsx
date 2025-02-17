import { Link } from "react-router";

export const UnderMaintenance = () => {
  return (
    <div className="w-full h-full bg-blue-card-bg rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md">
      <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2">
        🚧 En mantenimiento 🍽️
      </h2>
      <p className="text-md text-white mt-2">
        Estamos preparando algo delicioso. ¡Vuelve pronto para probarlo! 😋
      </p>

      <img
        src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
        alt="Chef cocinando"
        className="w-28 mt-4"
      />

      <Link
        to="/auth"
        className="mt-4 px-5 py-2 text-white bg-orange-500 rounded-md text-sm font-bold shadow-sm hover:bg-orange-600 transition"
      >
        🔙 Volver al menú
      </Link>
    </div>
  );
};
