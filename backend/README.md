# Можно через терминал, можешь через Postman

## Первоначально в терминале в cd /backend тебе нужно запустить данные команды
```bash
make build   # Сборка образа
make up      # Запуск контейнеров
make run     # Локальный запуск
```

## POST-метод
```bash
curl -X POST https://localhost:1488/todos/   -H "Content-Type: application/json"   -d '{
        "user_id": "user123",
        "id" : 1234,
        "title": "Buy groceries",
        "description": "Milk, eggs, bread",
        "TodoCategory": "Shopping",
        "TodoPriority": "Medium",
        "TodoStatus": "Not Started"
    }'   --insecure
```

## GET-метод
```bash
curl -X GET "https://localhost:1488/todos/1234?user_id=user123" \
  --insecure
```


## PUT метод
```bash
curl -X PUT https://localhost:1488/todos/1234 \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": "user123",
    "id": 1234,
    "title": "Buy organic groceries",
    "description": "Milk, eggs,hui",
    "TodoCategory": "Shopping",
    "TodoPriority": "High",
    "TodoStatus": "In Progress"
  }' \
  --insecure
```


## DELETE метод
```bash
curl -X DELETE "https://localhost:1488/todos/1234?user_id=user123" \
  --insecure
```