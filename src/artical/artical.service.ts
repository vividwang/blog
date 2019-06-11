import { Injectable } from '@nestjs/common';
import reply from '../dto/res.dto';
import { getRepository, Repository } from 'typeorm';
import { Articals } from '../entity/articals.entity';
import ArticalDTO from '../dto/artical.dto';

@Injectable()
export class ArticalService {
  /**
   * @param title
   */
  getArtical = async (title): Promise<reply> => {
    const repository =  getRepository(Articals);
    try {
      const data = await repository.find({ title });

      return {
        code: '0',
        msg: 'ok',
        info: data,
      }
    }catch(e) {
      return {
        code: '1',
        msg: `Error found while getting artical: ${e}`,
        info: {},
      }
    }
  }

  getAllArticals = async (): Promise<reply> => {
    const repository =  getRepository(Articals);
    try {
      const data = await repository.find({});
      return {
        code: '0',
        msg: 'ok',
        info: data
      }
    } catch (e) {
      return {
        code: '1',
        msg: `Error found while getting all articals: ${e}`,
        info: {},
      }
    }
  }

  /**
   * @param artical
   */
  postArtical = async (artical: ArticalDTO): Promise<reply> => {
    try {
      const val = new Articals();

      val.author = artical.author;
      val.context = artical.context;
      val.title = artical.title;
      val.tags = artical.tags;
      val.common = artical.common;
      val.createTime = new Date();

      const repository =  getRepository(Articals);
      const data = await repository.save(val);
      console.log('postArticalData', data);
      return {
        code: '0',
        msg: 'ok',
        info: {}
      }
    } catch (e) {
      return {
        code: '1',
        msg: `Error found while posting artical: ${e}`,
        info: {},
      }
    }
  }

  deleteArtical = async (title): Promise<reply> => {
    try {
      const repository =  getRepository(Articals);
      await repository.delete({ title });

      return {
        code: '0',
        msg: 'ok',
        info: {},
      }
    } catch(e) {
      return {
        code: '1',
        msg: `Error found while posting artical: ${e}`,
        info: {},
      }
    }
  }

  /**
   * @title
   * @artical
   */
  updateArtical = async (title, artical:ArticalDTO ): Promise<reply> => {
    try {
      const repository =  getRepository(Articals);
      await repository.update({ title }, artical);

      return {
        code: '0',
        msg: 'ok',
        info: {},
      }
    } catch(e) {
      return {
        code: '1',
        msg: `Error found while posting artical: ${e}`,
        info: {},
      }
    }
  }
}
