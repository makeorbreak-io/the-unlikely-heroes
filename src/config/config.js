var env = process.env.NODE_ENV || 'test';

if (env === 'test') {
  process.env.PORT = 3000;	
  process.env.MONGODB_URI = 'mongodb://localhost:27017/taxation_project';
}