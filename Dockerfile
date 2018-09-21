FROM ubuntu:16.04 as builder
RUN apt-get update
RUN apt-get -y install curl git
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN git clone https://username:password@github.com/g-tecio/Fibonacci-API.git

FROM alpine
COPY --from=builder . .
ENTRYPOINT node ./Fibonacci-API/fibo-server.js