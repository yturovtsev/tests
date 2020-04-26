interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
export async function fetchTodos<T>(): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(
    'https://jsonplaceholder.typicode.com/todos/'
  );

  return await response.json();
}
