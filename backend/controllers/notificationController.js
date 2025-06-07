// controllers/notificationController.js
const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  const notes = await Notification.find({ user: req.user._id });
  res.json(notes);
};

exports.markAsRead = async (req, res) => {
  const note = await Notification.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
  res.json(note);
};