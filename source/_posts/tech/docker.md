docker
docker run 
-ti 
--rm
-d
--name
-c 
--memory maxinum-allowed-memory
--cpu-shares
--cpu-quota
-p outside-port:inside-port/protocol(tcp/udp)
-e #environment varible
--link #legacy link: one direction
-v 
--volumes-from
docker ps 
-a
docker commit <container_name> / <container_id>
docker attach <container_name>
docker exec <container_name> # 新建一个process
docker logs <container_name>
docker kill <container_name>
docker rm <container_name>
docker port <container_name>
docker network ls
docker network create <network_name>
docker network connect <network_name> <container_name>

docker run --rm -ti --net learning --name catesever ubuntu:14.04 bash 
# one container can be in more than one network

docker images
docker rmi # delete one image

docker search <image-name>

docker build -t name-of-result .

docker inspect

host.docker.internal

Dockerfile
FROM #可以有多个

MAINTAINER 
RUN 
ADD (local files, unzip and download)
ENV 
ENTRYPOINT
CMD
EXPOSE 
VOLUME
WORKDIR
USER

multistage build