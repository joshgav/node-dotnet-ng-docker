FROM microsoft/dotnet:1.1.2-sdk
EXPOSE 22
EXPOSE 80

RUN apt-get update
RUN apt-get install -y unzip zip
RUN curl -sSL https://aka.ms/getclrdbgsh | bash /dev/stdin -v latest -l /clrdbg
RUN chmod 0755 /clrdbg/clrdbg

WORKDIR /app
COPY . .
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

CMD ["dotnet", "run"]

