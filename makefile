build:
	docker-compose build
start:
	docker-compose up -d
down:
	docker-compose down
db:
	docker-compose up -d furoshiki-db