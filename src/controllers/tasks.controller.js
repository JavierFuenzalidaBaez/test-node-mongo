import Task from "../models/Task";

export const listTasksController = async (req, res) => {
  const task = await Task.find().lean();

  res.render("index", { misTareas: task });
};

export const createTaskController = async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

export const goEditTaskController = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { miTarea: task });
  } catch (err) {
    console.log(err);
  }
};

export const editTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    await Task.findByIdAndUpdate(id, { title, description });

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

export const deleteTaskController = async (req, res) => {
  try {
    const { id } = req.params;

    await Task.findByIdAndDelete(id);

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

export const changeStatusTaskController = async (req, res) => {
  try {
    const { id } = req.params;

    await Task.findByIdAndUpdate(id, { done: true });

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
