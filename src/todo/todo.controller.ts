import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoListDto } from './dto/TodoListDto';
import { toPromise } from '../shared/utils';
import { TodoDto } from './dto/TodoDto';
import { TodoCreateDto } from './dto/TodoCreateDto';
import { TodoService } from './todo.service';

@Controller('api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // @Get()
  // async findAll(): Promise<TodoListDto> {
  //   const todos = await this.todoService.getAllTodo();
  //   return toPromise({ todos });
  // }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TodoDto> {
    return await this.todoService.getOneTodo(id);
  }

  @Post()
  async create(@Body() todoCreateDto: TodoCreateDto): Promise<TodoDto> {
    return await this.todoService.createTodo(todoCreateDto);
  }

  // @Put(':id')
  // async update(@Param("id") id: string, @Body() todoDto: TodoDto): Promise<TodoDto> {
  //   return await this.todoService.updateTodo(todoDto);
  // }
  //
  // @Delete(':id')
  // async destroy(@Param('id') id: string): Promise<TodoDto> {
  //   return await this.todoService.destroyTodo(id);
  // }
}
