#### proyecto-final pasos del pdf 
La idea es crear una infraestructura completa utilizando CloudFormation para garantizar que
todos los recursos creados estén en un solo lugar.
Vamos a crear una aplicación completa para la toma de pedidos a domicilio de un
restaurante. No deben entrar en mucho detalle en las tablas y en el código como tal, lo más
importante es la infraestructura.
Una persona podrá llamar a hacer un pedido, de un pedido se solicitará la siguiente
información:


● Cliente:
○ Nombre completo
○ Dirección
○ Teléfono
○ correo electrónico


● Pedido
○ Producto
○ Cantidad
○ Valor unidad
○ Valor total
Una vez el cliente realice un pedido debe recibir una notificación a su correo electrónico
donde se le muestre el detalle del pedido y dicho pedido será puesto en cola para ser
procesado y enviado.
Los dueños del restaurante deben poder acceder a través un api-gateway que tendrá
solamente dos servicios:

● Post: Donde se cree el pedido

● Get: Donde se pueda buscar un pedido por id
Cada pedido debe ser guardado en un bucket de respaldo. Dichos archivos deben ser
eliminados de forma automática del bucket cada 2 días.
Observaciones
1. Pueden utilizar el lenguaje que quieran para el funcionamiento del aplicativo.
2. Todos los elementos deben ser creados en AWS.
3. Se debe utilizar una base de datos relacional con motor MySQL.
4. La cola debe tener un tiempo de espera de 15 segundos, es decir, cada 15
segundos se procesarán los pedidos acumulados.
5. Para este proyecto deben usar un framework llamado
serverless(https://www.serverless.com/) el cual les facilitará la creación de cada uno
de los recursos.


------------------------------------------------------------------------------------------------

##### proyecto de Toma de Pedidos a Domicilio - Infraestructura

Este proyecto tiene como objetivo crear una infraestructura completa utilizando AWS CloudFormation para gestionar todos los recursos necesarios en un solo lugar. La aplicación desarrollada permitirá la toma de pedidos a domicilio para un restaurante. Nos centraremos principalmente en la infraestructura, sin entrar en detalles sobre las tablas y el código en sí.

Pasos de instalación
Sigue los siguientes pasos para implementar la infraestructura utilizando AWS CloudFormation:

## Clona este repositorio en tu máquina local:
git clone https://github.com/tu_usuario/tu_proyecto.git

## Accede al directorio del proyecto:
cd tu_proyecto

## Instala el framework Serverless globalmente utilizando npm:
npm install -g serverless

## Despliegue de la infraestructura

1.Crea una cuenta de AWS si aún no tienes una.

2.Configura tus credenciales de AWS localmente para que el framework Serverless pueda acceder a tu cuenta de AWS.

3.Abre el archivo serverless.yml y actualiza los parámetros necesarios, como el nombre del bucket de respaldo y las configuraciones de la cola.

4.Ejecuta el siguiente comando para desplegar la infraestructura utilizando CloudFormation:
## serverless deploy

5.Una vez que la implementación se haya completado con éxito, recibirás la información sobre los recursos creados, como el nombre del bucket, las URL del API Gateway, entre otros.

6.Accede al API Gateway para realizar pruebas y acceder a los servicios disponibles:

7.Utiliza el método POST para crear un pedido.

8.Utiliza el método GET junto con el ID del pedido para buscar un pedido específico.


#### Estructura de la aplicación

La infraestructura se crea utilizando los siguientes servicios de AWS:

AWS Lambda: Para la lógica de negocio y el procesamiento de los pedidos.

Amazon API Gateway: Para exponer los servicios de la aplicación.

Amazon RDS (MySQL): Para almacenar la información de los pedidos.

Amazon S3: Para el almacenamiento de respaldo de los archivos de pedidos.

Amazon Simple Queue Service (SQS): Para encolar y procesar los pedidos.

#### Limpieza y eliminación de recursos

*Si deseas eliminar la infraestructura creada y los recursos de AWS, sigue estos pasos:


* Ejecuta el siguiente comando para eliminar todos los recursos desplegados:

### serverless remove

*Confirma la eliminación cuando se te solicite.


*Ten en cuenta que este proceso eliminará todos los recursos relacionados con el proyecto, incluyendo el bucket de respaldo y los datos almacenados en la base de datos.


##### Tecnologías utilizadas

*AWS CloudFormation: Para gestionar la infraestructura como código.


*AWS Lambda: Para la ejecución de la lógica de negocio.


*Amazon API Gateway: Para exponer los servicios de la aplicación.


*Amazon RDS (MySQL): Para almacenar la información de los pedidos.


*Amazon S3: Para el almacenamiento de respaldo de los archivos de pedidos.


*Amazon Simple Queue Service (SQS): Para encolar y procesar los pedidos.


*Framework Serverless: Para simplificar la creación y despliegue de los recursos en AWS.


