<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Varibales de Desarrollo

`api = localhost:3000/api/v2`
`api = 127.0.0.1:3000/api/v2`

# Ejecutra en desarrollo

1. Clonar repositorio
2. Ejecutar
   `pnpm install`
3. Tener nest CLI instalado
   `pnpm i -g @nestjs/cli`
4. Levantar BBDD
   `docker-compose up -d`
5. Clonar el archivo **.env.template** y renombrar a **.env**

6. Rellenar variables definidas en el archivo
   `.env`

7. Reconstruir BBDD con datos
   `{{api}}/seed`

## Stack

- MongoDB
- NestJS
