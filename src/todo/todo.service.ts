import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TodoEntity } from './entity/TodoEntity';
import { TodoDto } from './dto/TodoDto';
import { toPromise } from '../shared/utils';
import { TodoCreateDto } from './dto/TodoCreateDto';
import { toTodoDto } from '../shared/mapper';

import { todos } from 'src/mock/todos.mock';
import * as uuid from 'uuid';

@Injectable()
export class TodoService {
  todos: TodoEntity[] = todos;
  async getOneTodo(id: string): Promise<TodoDto> {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new HttpException(
        `Todo item doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return toPromise(toTodoDto(todo));
  }

  async createTodo(todoDto: TodoCreateDto): Promise<TodoDto> {
    const { name, description } = todoDto;
    const todo: TodoEntity = {
      id: uuid(),
      name,
      description,
    }
    this.todos.push(todo);
    return toPromise(toTodoDto((todo)));
  }
}
