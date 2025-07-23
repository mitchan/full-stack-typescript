import createClient from 'openapi-fetch';
import { paths } from './api.types';

const client = createClient<paths>({ baseUrl: 'https://localhost:4001' });

client.GET('/tasks/{id}', {
  params: {
    path: {
      id: 89,
    },
  },
});
