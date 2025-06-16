# Gestor de Tareas

Una aplicación web moderna para gestionar tareas, construida con Angular y Tailwind CSS.

## Características

- Lista de tareas con estado de completado
- Formulario para agregar nuevas tareas
- Capacidad para marcar tareas como completadas
- Eliminación de tareas
- Interfaz responsiva y moderna
- Integración con backend REST API

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Djespinosa/taks_frontend.git
cd task-manager
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
ng serve
```

4. Abrir el navegador en `http://localhost:4200`

## Estructura del Proyecto

- `src/app/components/`: Componentes de la aplicación
  - `task-list/`: Componente principal que muestra la lista de tareas
  - `task-item/`: Componente para mostrar una tarea individual
  - `add-task-form/`: Formulario para agregar nuevas tareas
- `src/app/services/`: Servicios de la aplicación
  - `task.service.ts`: Servicio para manejar las operaciones CRUD de tareas

## Tecnologías Utilizadas

- Angular 18
- Tailwind CSS 4.1.5
- TypeScript
- RxJS para manejo de estado reactivo

## API Endpoints

La aplicación se conecta a un backend REST API en `localhost:8000` con los siguientes endpoints:

- GET /tasks: Obtener todas las tareas
- POST /tasks: Crear una nueva tarea
- PUT /tasks/{task_id}: Actualizar el estado de una tarea
- DELETE /tasks/{task_id}: Eliminar una tarea

## Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
ng serve
```

Para construir la aplicación para producción:

```bash
ng build
```

## Contribuir

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request
