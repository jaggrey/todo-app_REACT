import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return { todos }
}








