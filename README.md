## Mi Tienda - Aplicación de Carrito de Compras

Esta es una aplicación simple de carrito de compras construida con Next.js, React. Permite a los usuarios explorar productos, agregarlos a un carrito y simular la confirmación de un pedido.

### Características

- **Listado de Productos**: Muestra una cuadrícula de productos disponibles con su imagen, nombre, categoría, precio y stock disponible.
- **Añadir al Carrito**: Los usuarios pueden agregar productos a su carrito de compras.
- **Gestión del Carrito**:
  - Ver los artículos en el carrito.
  - Aumentar o disminuir la cantidad de cada artículo.
  - Eliminar artículos del carrito.
  - Ver el valor total del pedido.
- **Confirmación de Pedido**: Un diálogo modal aparece para confirmar el pedido, mostrando un resumen de los artículos.
- **Gestión de Estado**: Utiliza Zustand para una gestión de estado centralizada y sencilla para el carrito.
- **Diseño Responsivo**: El diseño es responsivo y se adapta a tamaños de pantalla de escritorio, tableta y móvil.
- **Feedback al Usuario**: Se utilizan notificaciones (toasts) para informar al usuario sobre acciones como la confirmación del pedido.

### Tecnologías Utilizadas

- **Framework**: Next.js (con App Router)
- **Librería**: React
- **Lenguaje**: TypeScript
- **Gestión de Estado**: UseState unicamente
- **Estilos**: Tailwind CSS
- **Iconos**: React Icons
- **Notificaciones**: Sonner

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
