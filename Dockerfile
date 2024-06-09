FROM node:18-alpine 

# 暴露端口
EXPOSE 3000

WORKDIR /data/release/acr-server

# 创建目录
RUN mkdir -p /data/release/acr-server

# 复制源码
COPY . /data/release/acr-server

RUN npm install pm2 -g

RUN npm install pnpm -g

RUN pnpm i

# 容器启动时，启动应用服务
CMD ["pm2-runtime", "ecosystem.config.js", "--only", "acr-server"]