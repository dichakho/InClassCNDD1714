import Realm from 'realm';

export const TODOLIST_SCHEMA = 'TodoList';
export const TODO_SCHEMA = 'Todo';
export const TodoSchema = {
  name: TODO_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: { type: 'string', indexed: true },
    done: { type: 'bool', indexed: true },
  },
};

export const TodoListSchema = {
  name: TODOLIST_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    createdAt: 'date',
    todos: { type: 'list', objectType: TODO_SCHEMA },
  },
};

const databaseOptions = {
  path: 'todoListApp.realm',
  schema: [TodoListSchema, TodoSchema],
  schemaVersion: 0,
};

export const insertNewTodoList = (newTodoList: any) => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then((realm) => {
    realm.write(() => {
      realm.create(TODOLIST_SCHEMA, newTodoList);
      resolve(newTodoList);
    });
  }).catch((error) => reject(error));
});

export const updateTodoList = (todoList: any) => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then((realm) => {
    realm.write(() => {
      const updatingTodoList: any = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
      if (updatingTodoList) {
        updatingTodoList.name = todoList.name;
      }
      resolve();
    });
  }).catch((error) => reject(error));
});

export const deleteTodoList = (todoListId: any) => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then((realm) => {
    realm.write(() => {
      const deletingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId);
      realm.delete(deletingTodoList);
      resolve();
    });
  }).catch((error) => reject(error));
});

export const deleteAllTodoList = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then((realm) => {
    realm.write(() => {
      const allTodoList = realm.objects(TODOLIST_SCHEMA);
      realm.delete(allTodoList);
      resolve();
    });
  }).catch((error) => reject(error));
});

export const queryAllTodoList = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then((realm) => {
    realm.write(() => {
      const allTodoList = realm.objects(TODOLIST_SCHEMA);
      resolve(allTodoList);
    });
  }).catch((error) => reject(error));
});

export default new Realm(databaseOptions);
