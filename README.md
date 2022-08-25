docker build .

docker build -t visits .

docker run visits

Another Terminal

docker run redis

########### Final command #############

docker-compose up

docker-compose up --build

#build is required when change in index.js not in docker-compose.yml#

### running in background

docker-compose up -d

docker-compose down
