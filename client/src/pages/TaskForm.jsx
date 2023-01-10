import { Form, Formik } from "formik";
import FormBotstrap from "react-bootstrap/Form";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../css/TaskForm.css'

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    nombre_completo: "",
    correo: "",
    contra: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          nombre_completo: task.nombre_completo,
          correo: task.correo,
          contra: task.contra,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="container-form-data">
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            nombre_completo: "",
            correo: "",
            contra: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Task" : "Nuevo usuario"}
            </h1>

            <FormBotstrap.Group className="mb-3">
              {/* <FormBotstrap.Label>nombre</FormBotstrap.Label> */}
              <label className="block">nombre</label><br />
              <input
                type="text"
                name="nombre_completo"
                rows="3"
                placeholder="Escribe tu nombre"
                onChange={handleChange}
                className="px-2 py-1 rounded-sm w-full"
                value={values.nombre_completo}
              />
            </FormBotstrap.Group>

            <FormBotstrap.Group className="mb-3">
              <label className="block">correo</label><br />
              {/* <FormBotstrap.label>correo</FormBotstrap.label> */}
              <input
                type="text"
                name="correo"
                rows="3"
                placeholder="Escribe tu correo"
                onChange={handleChange}
                className="px-2 py-1 rounded-sm w-full"
                value={values.correo}
              ></input>
            </FormBotstrap.Group>
            <FormBotstrap.Group className="mb-3">
            <label className="block">Contraseña</label><br />
            <input
              type="password"
              name="contra"
              rows="3"
              placeholder="Escribe tu contraseña"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.contra}
            ></input>
            </FormBotstrap.Group>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-dark w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
