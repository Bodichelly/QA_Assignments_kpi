docker build -t qa_assignment1_server .
docker network create qa_assignment1_network
docker volume create servervol
docker run --name server --rm -v servervol:/serverdata --net qa_assignment1_network -e PORT=$1 -p 8888:$1 qa_assignment1_server
docker network rm qa_assignment1_network