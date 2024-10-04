import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000; //Porta do servidor


app.use(express.json());

//model do post
interface Post {
  id_post: number;
  nome_post: string;   
  descricao_post: string;
  categoria_post: string;
}

//prenchendo ao menos uma casa do array de Posts
let posts: Post[] = [
  { id_post: 1, nome_post: 'Post ', descricao_post: 'Descrição do Post ',categoria_post:'categoria do post' },
];

//rota para pegar os posts
app.get('/posts', (req: Request, res: Response) => {
  res.json(posts);
});

//rota para buscar um post por id
app.get('/posts/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id_post === id);
  
  if (post){
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post não encontrado :(' });
  }
});

//rota para para criar um novo post
app.post('/posts', (req: Request, res: Response) => {
  const { nome_post, descricao_post, categoria_post} = req.body;
  const novoPost: Post = {id_post: posts.length + 1, nome_post, descricao_post, categoria_post};
  posts.push(novoPost);
  res.status(201).json(novoPost);
});

//rota para atualizar um post
app.put('/posts/:id', (req: Request, res: Response) => {
  const id_post = parseInt(req.params.id);
  const { nome_post, descricao_post, categoria_post } = req.body;
  const postIndex = posts.findIndex(p => p.id_post === id_post);
  
  if (postIndex !== -1) {
    posts[postIndex] = { id_post, nome_post, descricao_post, categoria_post };
    res.json(posts[postIndex]);
  } else {
    res.status(404).json({ message: 'Post não encontrado' });
  }
});

//rota para deletar um post
app.delete('/posts/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id_post === id);
  
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Post não encontrado' });
  }
});

//onde o server vai rodar
app.listen(PORT, () => {
  console.log(`ta rodando nessa porta -> ${PORT}`);
});