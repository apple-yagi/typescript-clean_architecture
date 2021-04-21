build:
	docker-compose build
start:
	docker-compose up -d
down:
	docker-compose down
restart:
	docker-compose down && docker-compose up -d
db:
	docker-compose up -d furoshiki-db