export CONTAINER_HOST_NAME=remote.joshgav.com
export CONTAINER_HOST_PORT=60022

ssh -fN -p $CONTAINER_HOST_PORT \
  -L 9229:localhost:9229 \
  -L 8080:localhost:8080 \
  $CONTAINER_HOST_NAME &

open "/Applications/Google Chrome.app/" --new \
  --args --remote-debugging-port=9222 http://localhost:8080 &