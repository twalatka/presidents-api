import Express from 'express';
import Parser from 'body-parser';

import Presidents from './data/presidents';

const app = Express();
const port = process.env.PORT || 3000;

app.use(Parser.json());

app.listen(port, () => console.log(`App start: http://localhost:3000`));

export default app;
