import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ArticalService } from './artical.service';
import ArticalDTO from 'src/dto/artical.dto';

@Controller('/api/artical')
export class ArticalController {
  constructor(private readonly articalService: ArticalService) {}

  @Get('/:title')
  getArtical(@Param('title') title:string) {
    return this.articalService.getArtical(title);
  }

  @Get('/all')
  getAllArtical(){
    return this.articalService.getAllArticals()
  }

  @Post()
  postArtical(@Body() artical:ArticalDTO) {
    return this.articalService.postArtical(artical);
  }

  @Put('/:title')
  putArtical(@Param('title') title:string, @Body() artical:ArticalDTO) {
    return this.articalService.updateArtical(title, artical);
  }

  @Delete('/:title')
  deleteArtical(@Param('title') title:string) {
    return this.articalService.deleteArtical(title);
  }
}
