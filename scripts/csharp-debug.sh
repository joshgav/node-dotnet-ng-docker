export REMOTE_ADDRESS=remote.joshgav.com
export REMOTE_PORT=60022
export REMOTE_CONTAINER_NAME=multicontainer_service-dotnet_1

ssh -t -p $REMOTE_PORT $REMOTE_ADDRESS "docker exec -it $REMOTE_CONTAINER_NAME sh"