
FROM golang:1.23.6 AS build
WORKDIR /backend
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main ./cmd/main.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /backend/
COPY --from=build /backend/main .
CMD ["./main"]