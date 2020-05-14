import Notification from '../schemas/Notification'
import User from '../models/User';

class NotificationController{
  async index(req, res){
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true }
    });

    if(!checkIsProvider){
      res.status(401).json({error: 'Only provider can load notofications'});
    }

    const notifications = await Notification.find({
      user: req.userId,      
    })
      .sort({createdAt: 'desc'})
      .limit(20);



    return res.json(notifications);
  }

  async update(req, res){
    const {id} =req.params;
    
    const checkIsReaded = await Notification.findById(id);
    if(checkIsReaded.read){
      return res.status(401).json({ error: 'This notification is already readed' })
    }
    const notification = await Notification.findByIdAndUpdate(
      id,
      {read: true},
      {new: true},
      );

    return res.json(notification);
  }
}



export default new NotificationController();