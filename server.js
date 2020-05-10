const express = require('express');
const Comment = require('./model');
const cors = require('cors')
const Db = require('./db');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;

app.get('/test', async (req, res)=>{
  try {
      res.send(`Server is UP and runing`);
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
    }
});

app.get('/', async (req, res)=>{
    try {
        const comment = await Comment.find();
        res.json(comment);
      } catch (error) {
        res.status(400).json({
          message: error.message
        })
      }
});

app.get('/comment/:id', async (req, res)=>{
  try {
      const id = req.params.id;
      const comment = await Comment.find({bivakId: `${id}`});
      res.json(comment);
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
    }
});

app.post('/comment', async (req, res)=> {
    const {name, message} = req.body;
    const bivakId= req.body.id;
    const comment = new Comment ({bivakId, name, message});

    try {
        const newComment = await comment.save()
        res.status(201).json(newComment);
    } catch (error) {
        res.status(404).json({
            message: error.message
          })
    }
});

app.listen(PORT, ()=>console.log('Server running on port 8000'))