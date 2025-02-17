import z from "zod";

export const disheSchema = z.object({
  available: z.string().nonempty("La cantidad de plato es requerida"),
  price: z
    .string()
    .nonempty("El precio es requerido"),
  strMeal: z.string().nonempty("El nombre del plato es requerido"),
  strMealThumb: z
    .string({ message: "Debe ser un archivo de imagen válido" })
    .nonempty("El archivo es requerida"),
});
