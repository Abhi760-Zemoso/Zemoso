$ curl "https://api.todoist.com/rest/v1/projects" \
    -X POST \
    --data '{"name": "Shopping List"}' \
    -H "Content-Type: application/json" \
    -H "X-Request-Id: $(uuidgen)" \
    -H "Authorization: Bearer 0123456789abcdef0123456789"
    