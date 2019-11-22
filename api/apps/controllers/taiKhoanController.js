import  { validationResult } from 'express-validator';
import  { bcrypt } from 'bcryptjs';

import taiKhoanService from '../services/taiKhoanService';

import Util from '../utils/Utils';

const util = new Util();

class taiKhoanController {
  static async getAllTK(req, res) {
    try {
      const allTK = await taiKhoanService.getAllTaiKhoan();
      if (allTK.length > 0) {
        util.setSuccess(200, 'TK ton tai', allTK);
      } else {
        util.setSuccess(200, 'Tai Khoan found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async DeleteTK (req,res) {
    let { id } = req.params ; 
    if(!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }
    try {
      let XoaTK = await taiKhoanService.deleteTK(id);
      if(XoaTK){
        util.setSuccess(200, 'TK xoa thanh cong')

      }
      else {
        util.setError(400,'Xoa khong thanh cong')
      }
      return util.send(res)
      
    } catch (error) {
      util.setError(400,error)
      return util.send(res)
    }
  }

  
  static async addTK(req, res) {
    let validate = validationResult(req);
    if(!validate.isEmpty()){
      util.setError(400,validate.array);
      return util.send(res);
    } 
    let data = { ...req.body,
    matkhau: bcrypt.hashSync(req.body.matkhau, bcrypt.genSaltSync(10))
    }
    try {
      const createdTK = await taiKhoanService.addTK(data);
      util.setSuccess(201, 'Book Added!', createdTK);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedtk(req, res) {
    const alteredtk = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatetk = await taiKhoanService.UpdateTK(id, alteredtk);
      if (!updatetk) {
        util.setError(404, `Cannot find tai khoan with the id: ${id}`);
      } else {
        util.setSuccess(200, 'taikhoan updated', updateBook);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getATk(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thetk = await taiKhoanService.getByID(id);

      if (!thetk) {
        util.setError(404, `Cannot find tai khoan with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found tai khoan', thetk);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


}

export default taiKhoanController;