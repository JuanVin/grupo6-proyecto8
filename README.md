

Grupo 6

-Espinoza

-Vinci

-Maya

-Soliz

-Bustos

Nombre del proyecto: Zero
Repositorio: https://github.com/agustinxo/grupo_8_imaginacionzero

Comandos utilizados

sequelize model:generate --name Categoria --attributes name:string  
sequelize model:generate --name Marca --attributes name:string 
sequelize model:generate --name Color --attributes name:string
sequelize model:generate --name Tamanio --attributes name:string
sequelize model:generate --name Visibilidad --attributes name:string
sequelize model:generate --name Producto --attributes name:string,description:string,price:decimal,stock:integer,stock_min:integer,stock_max:integer,categoriaId:integer,colorId:integer,marcaId:integer,visibilidadId:integer,tamanioId:integer
sequelize model:generate --name Imagen --attributes name:string,productoId:integer

sequelize model:generate --name Rol --attributes name:string
sequelize model:generate --name Usuario --attributes firstName:string,lastName:string,username:string,email:string,password:string,avatar:string,rolId:integer
sequelize model:generate --name Direccion --attributes street:string,number:integer,city:string,state:string,floor:integer,apartment:string,cp:string,phoneNumber:integer,usuarioId:integer

 

