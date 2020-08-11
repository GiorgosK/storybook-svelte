// src/components/PureTaskList.stories.js
import PureTaskList from "./PureTaskList.svelte";
import { taskData, actionsData } from "./Task.stories";
export default {
  title: "PureTaskList",
  excludeStories: /.*Data$/
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" }
];
export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }
];

// default PureTaskList state
export const Default = () => ({
  Component: PureTaskList,
   props: {
    tasks: defaultTasksData
  },
  on: {
    ...actionsData
  }
});
// PureTaskList with pinned tasks
export const WithPinnedTasks = () => ({
  Component: PureTaskList,
  props: {
    tasks: withPinnedTasksData
  },
  on: {
    ...actionsData
  }
});
// PureTaskList in loading state
export const Loading = () => ({
  Component: PureTaskList,
  props: {
    loading: true
  },
});
// PureTaskList no tasks
export const Empty = () => ({
  Component: PureTaskList,
}); 