# Monitoreo de licencias de Magic Info

Este proyecto es una aplicación NestJS que monitorea la disponibilidad de las licencias de Magic Info. La aplicación se ejecuta como un servicio de consola que periódicamente consulta la API de Magic Info para obtener información sobre las licencias disponibles y almacena estos datos en una base de datos SQL Server para su seguimiento y análisis.

## Funcionalidad Principal

- **Monitoreo Automático**: Consulta periódica a la API de Magic Info para obtener el estado de las licencias
- **Almacenamiento de Datos**: Guarda la información de licencias en SQL Server para su posterior análisis
- **Ejecución Programada**: Utiliza cron jobs para realizar consultas automáticas en intervalos configurables
- **Logging Detallado**: Registro completo de todas las operaciones y posibles errores

## Flujo de Datos
1. La aplicación se ejecuta como un servicio programado
2. Consulta la API de Magic Info en intervalos regulares
3. Procesa la respuesta y extrae la información relevante de licencias
4. Almacena los datos en SQL Server
5. Registra la actividad y cualquier error que pueda ocurrir

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/adriangonzalez-dev/DatamartLicences.git

cd DatamartLicences
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
   - Crear un archivo `.env` en la raíz del proyecto
   - Copiar el contenido de `.env.example` al nuevo archivo `.env`
   - Actualizar las variables según tu entorno

Ejemplo de `.env`:
```env

# Configuración de Magic Info API
SERVER_RM=https://SERVER-RM/MagicInfo/restapi/v2.0
USER_RM=tu_user
PASS_RM=tu_pass

```

## Ejecución

Para desarrollo:
```bash
npm run start:dev
```

Para producción:
```bash
npm run start
```

## Dependencias Principales

- `@nestjs/common` - Framework NestJS
- `@nestjs/schedule` - Manejo de tareas programadas
- `@nestjs/axios` - Cliente HTTP
- `nestjs-console` - Interfaz de consola
- `@nestjs/config` - Manejo de configuración
- `mssql` - Driver de SQL Server
- `typeorm` - ORM para manejo de base de datos
