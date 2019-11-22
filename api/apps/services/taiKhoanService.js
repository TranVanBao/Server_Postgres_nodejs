
import database from '../models';
class TaiKhoanService {
  static async getAllTaiKhoan() {
    try {
      return await database.taikhoan.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async getByID(id){
      try {
          return await database.taikhoan.findAll({
              where: { id }
          })
      } catch (error) {
        throw error;
      }
  }

  static async deleteTK(id){
      try {
          return await database.taikhoan.destroy({
              where:{ id }
          })
      } catch (error) {
          throw error;
      }
  }
  static async SaveTK(data){
      try {
          return await database.taikhoan.create(data);
      } catch (error) {
          throw error
      }
  }

  static async UpdateTK(id, data){
      try {
       let tk =      await database.taikhoan.findOne({
              where: { id }
          })
          if(tk){
             return await database.taikhoan.update(data,{
                 where : { id : Number(id) }
             })
          }
          return null;


      } catch (error) {
          throw error
      }
  }
 
}

export default TaiKhoanService;