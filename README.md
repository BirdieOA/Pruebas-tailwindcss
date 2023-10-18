Este es un proyecto creado con Next js 13 para mostrar la funcionalidad de prettier-plugin-tailwindcss y tailwindcss-animated


# Inicializar el proyecto en Nextjs

```
npx create-next-app@latest
```


# Hacemos la instalación de prettier

```
npm install -D prettier
```

Vamos a crear un archivo .JSON

`.prettierrc.json`

Para corroborar que prettier esta funcionando escribimos

```
npx prettier . --write
```

y luego

```
npx prettier . --checked
```

# Para añadir el plugin de tailwindcss 

```
npm install -D prettier prettier-plugin-tailwindcss
```

Creamos un archivo llamado

`prettier.config.js`

y dentro del mismo escribimos la siguiente línea.

`module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}`

Esto nos reorganizará todas las clases de tailwindcss que le otorgamos a nuestras etiquetas de la siguiente manera

Primero se ordenan las clases en la capa de base
- @tailwind base;

Luego se ordenan las clases en la capa de componentes

- @tailwind components;

Y por último se ordenan las clases en la capa de utilidades

- @tailwind utilities;

Este orden podemos encontrarlo en el archivo de 

` globals.css
`



# Instalación de tailwindcss-animated

En este caso, al haber inicializado el proyecto con Next js, ya tenemos instalado tailwindcss de manera que ya podemos instalar el animated directamente.

```
npm install -D tailwindcss-animated
```

### En caso de inicializar el proyecto con otro framework y tener que instalar tailwind manualmente, los pasos serían los siguientes

```
npm install -D tailwindcss
```
```
npx tailwindcss init
```
```
npm install -D tailwindcss-animated
```

Por último en el archivo
` tailwind.config.js
`

incluimos esta línea

`
module.exports = {
  plugins: [
    require('tailwindcss-animated')
  ],
}
`

Para ver la funcionalidad y todas las animaciones disponibles puede hacerse una visualizacion en el siguiente sitio


https://www.tailwindcss-animated.com/

