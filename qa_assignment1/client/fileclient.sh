docker build -t qa_assignment1_client .
docker volume create clientvol
docker run --name client --rm -v clientvol:/clientdata --net qa_assignment1_network -e PORT=$1 -e API=$2 qa_assignment1_client
