FROM python:3:8.10

WORKDIR /app/api

COPY . /app/api

COPY requirements.txt ./

RUN pip3 install -r requirements.txt 

EXPOSE 8000