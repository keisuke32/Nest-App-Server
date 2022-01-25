import { TodoEntity } from '../todo/entity/TodoEntity';
import { TodoDto } from '../todo/dto/TodoDto';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;
  const todoDto: TodoDto = { id, name, description };
  return todoDto;
};
